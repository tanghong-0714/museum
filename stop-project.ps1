$ErrorActionPreference = 'Stop'
$pidPath = Join-Path $PSScriptRoot '.museum-session.json'
if (!(Test-Path -LiteralPath $pidPath)) { Write-Host 'No active session recorded.'; exit 0 }
$session = Get-Content -LiteralPath $pidPath -Raw | ConvertFrom-Json
$sessionProcess = Get-CimInstance Win32_Process -Filter "ProcessId = $($session.pid)"
$expected = Join-Path $PSScriptRoot 'start-project.mjs'
if (!$sessionProcess) { Remove-Item -LiteralPath $pidPath; Write-Host 'Session already stopped.'; exit 0 }
if (!$sessionProcess.CommandLine -or !$sessionProcess.CommandLine.Contains($expected)) {
  Write-Host 'Process identity changed; refused to stop an unrelated process.'; exit 1
}
taskkill.exe /PID $session.pid /T /F
if ($LASTEXITCODE -eq 0) { Remove-Item -LiteralPath $pidPath -ErrorAction SilentlyContinue }
