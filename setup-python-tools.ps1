$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$tools = Join-Path $root ".tools"
$pyDir = Join-Path $tools "python"
$pyExe = Join-Path $pyDir "python.exe"

if (-not (Test-Path $pyExe)) {
  New-Item -ItemType Directory -Force -Path $tools | Out-Null
  $zip = Join-Path $tools "python-embed.zip"
  $url = "https://www.python.org/ftp/python/3.12.7/python-3.12.7-embed-amd64.zip"
  Write-Host "Downloading Python embed..."
  Invoke-WebRequest -Uri $url -OutFile $zip -UseBasicParsing
  Expand-Archive -Path $zip -DestinationPath $pyDir -Force
  $pth = Join-Path $pyDir "python312._pth"
  (Get-Content $pth) -replace '#import site', 'import site' | Set-Content $pth
  $getPip = Join-Path $tools "get-pip.py"
  Invoke-WebRequest -Uri "https://bootstrap.pypa.io/get-pip.py" -OutFile $getPip -UseBasicParsing
  & $pyExe $getPip --no-warn-script-location
}

Write-Host "Installing PyMuPDF..."
& $pyExe -m pip install pymupdf --quiet
Write-Host "Ready: $pyExe"
