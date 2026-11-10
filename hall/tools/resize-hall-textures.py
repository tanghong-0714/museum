"""Resize hall-only GLB JPEGs while preserving compressed geometry bytes.

Run from any directory with Python and Pillow. Always reads the immutable backup.
"""
import copy
import hashlib
import io
import json
from pathlib import Path
import struct

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
BACKUP = ROOT.parent / '备份_交互排查前_20261106_210029' / 'artifacts-original'
TARGET = ROOT / 'public' / 'artifacts'


def read_glb(data):
    magic, version, length = struct.unpack_from('<III', data)
    assert magic == 0x46546C67 and version == 2 and length == len(data)
    json_length, json_type = struct.unpack_from('<II', data, 12)
    assert json_type == 0x4E4F534A
    document = json.loads(data[20:20 + json_length])
    binary_length, binary_type = struct.unpack_from('<II', data, 20 + json_length)
    assert binary_type == 0x004E4942
    binary = data[28 + json_length:]
    assert len(binary) == binary_length
    return document, binary


def packed_glb(document, binary):
    metadata = json.dumps(document, ensure_ascii=False, separators=(',', ':')).encode('utf-8')
    metadata += b' ' * (-len(metadata) % 4)
    binary += b'\0' * (-len(binary) % 4)
    length = 12 + 8 + len(metadata) + 8 + len(binary)
    return (struct.pack('<III', 0x46546C67, 2, length)
            + struct.pack('<II', len(metadata), 0x4E4F534A) + metadata
            + struct.pack('<II', len(binary), 0x004E4942) + binary)


def triangles(document):
    return sum(document['accessors'][primitive['indices']]['count'] // 3
               for mesh in document['meshes'] for primitive in mesh['primitives'])


def convert(path):
    original = path.read_bytes()
    before, binary = read_glb(original)
    after = copy.deepcopy(before)
    assert len(before['images']) == 1
    image_record = before['images'][0]
    image_index = image_record['bufferView']
    image_view = before['bufferViews'][image_index]
    assert image_record['mimeType'] == 'image/jpeg'
    assert image_view['buffer'] == 0 and image_view.get('byteOffset', 0) == 0
    image = Image.open(io.BytesIO(binary[:image_view['byteLength']]))
    assert image.mode == 'RGB'
    before_size = image.size
    image.thumbnail((1024, 1024), Image.Resampling.LANCZOS)
    output = io.BytesIO()
    options = {'quality': 95, 'subsampling': 0, 'optimize': True}
    if image.info.get('icc_profile'):
        options['icc_profile'] = image.info['icc_profile']
    image.save(output, format='JPEG', **options)
    resized = output.getvalue()
    old_end = (image_view['byteLength'] + 3) & ~3
    new_end = (len(resized) + 3) & ~3
    delta = new_end - old_end
    changed_binary = resized + b'\0' * (new_end - len(resized)) + binary[old_end:]
    after['bufferViews'][image_index]['byteLength'] = len(resized)
    after['buffers'][0]['byteLength'] += delta
    for index, view in enumerate(after['bufferViews']):
        if index != image_index and view.get('buffer') == 0:
            assert view.get('byteOffset', 0) >= old_end
            view['byteOffset'] = view.get('byteOffset', 0) + delta
        meshopt = view.get('extensions', {}).get('EXT_meshopt_compression')
        if meshopt and meshopt['buffer'] == 0:
            assert meshopt.get('byteOffset', 0) >= old_end
            meshopt['byteOffset'] = meshopt.get('byteOffset', 0) + delta
    result = packed_glb(after, changed_binary)
    verified, verified_binary = read_glb(result)
    assert verified == after
    decoded_image = Image.open(io.BytesIO(verified_binary[:len(resized)]))
    decoded_image.load()
    assert decoded_image.size == image.size and decoded_image.mode == image.mode
    assert decoded_image.info.get('icc_profile') == image.info.get('icc_profile')
    # Everything following the original padded image remains byte identical.
    assert binary[old_end:] == verified_binary[new_end:]
    restored_metadata = copy.deepcopy(verified)
    restored_metadata['buffers'] = before['buffers']
    restored_metadata['bufferViews'] = before['bufferViews']
    assert restored_metadata == before
    # Explicitly verify the compressed geometry ranges after offset relocation.
    for index, view in enumerate(before['bufferViews']):
        compressed = view.get('extensions', {}).get('EXT_meshopt_compression')
        if not compressed:
            continue
        relocated = verified['bufferViews'][index]['extensions']['EXT_meshopt_compression']
        offset, size = compressed.get('byteOffset', 0), compressed['byteLength']
        new_offset = relocated.get('byteOffset', 0)
        assert binary[offset:offset + size] == verified_binary[new_offset:new_offset + size]
    (TARGET / path.name).write_bytes(result)
    return {'file': path.name, 'beforeDimensions': before_size, 'afterDimensions': image.size,
            'trianglesBefore': triangles(before), 'trianglesAfter': triangles(verified),
            'bytesBefore': len(original), 'bytesAfter': len(result),
            'originalSHA256': hashlib.sha256(original).hexdigest(),
            'resizedSHA256': hashlib.sha256(result).hexdigest(),
            'geometryPayloadIdentical': True, 'materialTextureIndicesTransformsIdentical': True,
            'mimeType': image_record['mimeType'], 'colorSpaceMetadataIdentical': True}


if __name__ == '__main__':
    paths = sorted(BACKUP.glob('*web-*.glb'))
    assert len(paths) == 14, 'Expected 14 original backed-up hall GLBs'
    report = [convert(path) for path in paths]
    report_path = ROOT / 'qa' / 'hall-textures-1024.json'
    report_path.parent.mkdir(exist_ok=True)
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    for row in report:
        print(row['file'], row['beforeDimensions'], '->', row['afterDimensions'],
              row['trianglesAfter'], 'triangles', row['bytesBefore'], '->', row['bytesAfter'], 'bytes')
