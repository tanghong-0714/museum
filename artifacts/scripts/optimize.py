import bpy, bmesh, json, hashlib
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / 'source-assets' / 'phoenix-original.glb'
OUT = ROOT / 'public' / 'models'
OUT.mkdir(parents=True, exist_ok=True)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
bpy.ops.import_scene.gltf(filepath=str(SOURCE))
original = [o for o in bpy.context.scene.objects if o.type == 'MESH'][0]
report = {'source_sha256': hashlib.sha256(SOURCE.read_bytes()).hexdigest(), 'source_triangles':len(original.data.polygons), 'variants':[]}
bm=bmesh.new()
bm.from_mesh(original.data)
bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=0.000001)
bm.to_mesh(original.data)
bm.free()
for im in bpy.data.images:
    if im.source in {'FILE','GENERATED'} and im.size[0] > 2048:
        ratio = 2048 / max(im.size)
        im.scale(round(im.size[0]*ratio), round(im.size[1]*ratio))
for name, budget in [('phoenix-desktop',180000),('phoenix-mobile',65000)]:
    obj = original.copy()
    obj.data = original.data.copy()
    bpy.context.collection.objects.link(obj)
    bpy.ops.object.select_all(action='DESELECT')
    obj.select_set(True)
    bpy.context.view_layer.objects.active=obj
    mod=obj.modifiers.new('Web derivative', 'DECIMATE')
    mod.ratio=budget / len(original.data.polygons)
    bpy.ops.object.modifier_apply(modifier=mod.name)
    path=OUT / (name+'.glb')
    bpy.ops.export_scene.gltf(filepath=str(path),use_selection=True,export_format='GLB',export_image_format='JPEG',export_jpeg_quality=88,export_yup=True)
    report['variants'].append({'file':path.name,'triangles':len(obj.data.polygons),'bytes':path.stat().st_size})
    bpy.data.objects.remove(obj,do_unlink=True)
(ROOT/'asset-report.json').write_text(json.dumps(report,indent=2),encoding='utf8')
print('OPTIMIZATION_COMPLETE',json.dumps(report))
