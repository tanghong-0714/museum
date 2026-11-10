"""Package the explicit R10 allowlist; never load local environment files."""
import argparse
import re
from pathlib import Path
from tempfile import NamedTemporaryFile
from zipfile import ZipFile, ZIP_DEFLATED

ROOT = Path(__file__).resolve().parent.parent
TARGET = ROOT.parent / '器生多文物_R10_六件藏品.zip'
ARCHIVE_ROOT = '器生多文物_R10'
DIRECTORIES = ('src', 'public', 'data', 'server', 'tests', 'docs', 'scripts', 'release_R10')
FILES = ('index.html', 'package.json', 'package-lock.json', 'vite.config.js', '.gitignore',
         'start.cmd', 'start-preview.cmd', '.env.example', 'README.txt')
REQUIRED = FILES + (
    'src/exhibit-longquan.js', 'src/exhibit-pipa.js', 'src/theme-longquan.css', 'src/theme-pipa.css',
    'data/artifacts/longquan-figure.json', 'data/artifacts/pipa-figurine.json',
    'public/models/longquan-figure-web-desktop.glb', 'public/models/longquan-figure-web-mobile.glb',
    'public/models/pipa-figurine-web-desktop.glb', 'public/models/pipa-figurine-web-mobile.glb',
    'docs/longquan-figure-asset-report.json', 'docs/pipa-figurine-asset-report.json', 'docs/pipa-figurine-source-check.json',
    'src/journey.js', 'src/journey.css', 'tests/journey.test.js', 'src/exhibits-pair.js', 'data/artifacts/cloud-mirror.json', 'data/artifacts/liquan-bodhisattva.json', 'public/models/cloud-mirror-web-desktop.glb', 'public/models/cloud-mirror-web-mobile.glb', 'public/models/liquan-bodhisattva-web-desktop.glb', 'public/models/liquan-bodhisattva-web-mobile.glb', 'src/exhibits.js', 'src/exhibit-page.js', 'src/themes.css', 'data/artifacts/bronze-head.json', 'public/models/bronze-head-web-desktop.glb', 'public/models/bronze-head-web-mobile.glb', 'src/main.js', 'src/companion.js', 'src/companion.css', 'src/immersive.css', 'src/timeline.js', 'src/gesture.js', 'public/models/phoenix-web-desktop.glb',
    'public/models/phoenix-web-mobile.glb', 'data/artifacts/phoenix-ewer.json',
    'server/api.js', 'server/chat.js', 'server/stream.js', 'server/knowledge.js', 'tests/chat-service.test.js',
    'docs/run-R10.txt', 'docs/verification-R10.txt', 'docs/content-notes-R03.txt', 'docs/add-artifact-R10.txt',
    'scripts/package-release.py', 'release_R10/index.html',
)
EXCLUDED_PARTS = {'node_modules', 'source-assets', 'dist', 'release', 'release_r01',
                  'release_r02', 'release_r03', '__pycache__', '.git', '.venv', '.cache', 'coverage'}
SECRET_SUFFIXES = {'.key', '.pem', '.p12', '.pfx', '.jks', '.keystore'}
SECRET_NAMES = {'credentials', 'credentials.json', 'credentials.txt', 'secrets.json',
                'secrets.txt', 'token.json', 'tokens.json', 'id_rsa', 'id_ed25519',
                'service-account.json', '.npmrc'}


def excluded(relative):
    if relative.parts[:2] == ('data', 'passport'):
        return True
    if relative.parts and relative.parts[0] == 'docs':
        if relative.as_posix() in {'docs/longquan-figure-asset-report.json', 'docs/pipa-figurine-asset-report.json', 'docs/pipa-figurine-source-check.json'}:
            return False
        allowed_document = relative.as_posix() in {'docs/run-R10.txt', 'docs/verification-R10.txt', 'docs/content-notes-R03.txt', 'docs/add-artifact-R10.txt', 'docs/plan-R10.txt', 'docs/cloud-mirror-asset-report.json', 'docs/liquan-bodhisattva-asset-report.json'}
        allowed_evidence = len(relative.parts) == 3 and relative.parts[1] == 'evidence' and 'R10' in relative.name.upper()
        if not allowed_document and not allowed_evidence:
            return True
    for part in relative.parts:
        lower = part.lower()
        if re.fullmatch(r'release_r\d+', lower) and lower != 'release_r10':
            return True
        if lower in EXCLUDED_PARTS or lower.startswith(('backup', 'backups', '.env')):
            if relative.as_posix() != '.env.example':
                return True
        if lower in SECRET_NAMES or lower.startswith(('secret.', 'secrets.', 'credentials.', 'private-key', 'apikey.')):
            return True
        if re.search(r'(^|[._-])(api[_-]?key|secrets?|credentials?|private[_-]?key|access[_-]?token)([._-]|$)', lower):
            return True
    return relative.suffix.lower() in SECRET_SUFFIXES | {'.zip', '.7z', '.rar', '.pyc', '.log', '.tmp'}


def collect_files():
    candidates = []
    build_index = ROOT / 'release_R10' / 'index.html'
    current_assets = set(re.findall(r'(?:src|href)=[\"\']/?(assets/[^\"\']+)', build_index.read_text(encoding='utf-8'))) if build_index.is_file() else set()
    for name in FILES:
        candidate = ROOT / name
        if candidate.is_file() and not candidate.is_symlink():
            candidates.append(candidate)
    for name in DIRECTORIES:
        directory = ROOT / name
        if not directory.is_dir() or directory.is_symlink():
            raise RuntimeError(f'Missing or invalid required directory: {name}')
        for candidate in directory.rglob('*'):
            relative = candidate.relative_to(ROOT)
            if not candidate.is_file() or candidate.is_symlink() or excluded(relative):
                continue
            if relative.parts[:2] == ('release_R10', 'assets') and relative.relative_to('release_R10').as_posix() not in current_assets:
                continue
            if not candidate.resolve().is_relative_to(ROOT):
                raise RuntimeError(f'File resolves outside project: {relative.as_posix()}')
            candidates.append(candidate)
    candidates = sorted(set(candidates), key=lambda item: item.relative_to(ROOT).as_posix())
    names = {candidate.relative_to(ROOT).as_posix() for candidate in candidates}
    missing = [name for name in REQUIRED if name not in names]
    if missing:
        raise RuntimeError('Required delivery files missing; complete R10 build and evidence first: ' + ', '.join(missing))
    if not any(name.startswith('release_R10/assets/') for name in names):
        raise RuntimeError('R10 compiled assets missing; run npm.cmd run build first.')
    if not any(name.startswith('docs/evidence/') and 'R10' in Path(name).name.upper() for name in names):
        raise RuntimeError('R10 verification evidence missing; add docs/evidence/*R10* before packaging.')
    return candidates


def main():
    parser = argparse.ArgumentParser(description='Package R10 sources and build without local credentials.')
    parser.add_argument('--check', action='store_true', help='Validate inputs without creating a ZIP.')
    args = parser.parse_args()
    candidates = collect_files()
    if args.check:
        print(f'PACKAGE_INPUTS_VERIFIED {len(candidates)} files; ZIP not written')
        return
    temporary = None
    try:
        with NamedTemporaryFile(prefix='qisheng-r10-', suffix='.tmp', dir=TARGET.parent, delete=False) as file:
            temporary = Path(file.name)
        with ZipFile(temporary, 'w', ZIP_DEFLATED, compresslevel=6) as archive:
            for candidate in candidates:
                archive.write(candidate, f'{ARCHIVE_ROOT}/{candidate.relative_to(ROOT).as_posix()}')
        with ZipFile(temporary) as archive:
            if archive.testzip() is not None:
                raise RuntimeError('ZIP CRC verification failed.')
            names = set(archive.namelist())
            if not all(f'{ARCHIVE_ROOT}/{name}' in names for name in REQUIRED):
                raise RuntimeError('ZIP required-file verification failed.')
            if any(excluded(Path(name).relative_to(ARCHIVE_ROOT)) for name in names):
                raise RuntimeError('ZIP contains a forbidden entry.')
        temporary.replace(TARGET)
        temporary = None
        print(f'ZIP_VERIFIED {TARGET} {TARGET.stat().st_size} bytes {len(candidates)} files')
    finally:
        if temporary is not None and temporary.exists():
            temporary.unlink()


if __name__ == '__main__':
    main()
