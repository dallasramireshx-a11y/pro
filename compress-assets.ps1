$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$assets = Join-Path $root "assets"
$tools = Join-Path $root ".tools"
$pdfcpuExe = Join-Path $tools "pdfcpu.exe"

function Format-MB([long]$bytes) {
  return "{0:N2} MB" -f ($bytes / 1MB)
}

function Ensure-PdfCpu {
  if (Test-Path $pdfcpuExe) { return }
  New-Item -ItemType Directory -Force -Path $tools | Out-Null
  $zip = Join-Path $tools "pdfcpu.zip"
  $url = "https://github.com/pdfcpu/pdfcpu/releases/download/v0.12.1/pdfcpu_0.12.1_Windows_x86_64.zip"
  Write-Host "Downloading pdfcpu..."
  Invoke-WebRequest -Uri $url -OutFile $zip -UseBasicParsing
  Expand-Archive -Path $zip -DestinationPath $tools -Force
  $found = Get-ChildItem -Path $tools -Recurse -Filter "pdfcpu.exe" | Select-Object -First 1
  if (-not $found) { throw "pdfcpu.exe not found" }
  Copy-Item $found.FullName $pdfcpuExe -Force
}

function Compress-Pdf([string]$name) {
  $input = Join-Path $assets $name
  if (-not (Test-Path $input)) { return }
  $before = (Get-Item $input).Length
  $tmp = Join-Path $assets ($name -replace '\.pdf$', '.tmp.pdf')
  Write-Host ""
  Write-Host "PDF $name ($(Format-MB $before))"
  & $pdfcpuExe optimize $input $tmp 2>&1 | Out-Null
  if ($LASTEXITCODE -ne 0) {
    if (Test-Path $tmp) { Remove-Item $tmp -Force }
    Write-Host "  optimize failed, trying compress..."
    & $pdfcpuExe compress $input $tmp 2>&1 | Out-Null
  }
  if ((Test-Path $tmp) -and ((Get-Item $tmp).Length -lt $before * 0.98)) {
    Move-Item $tmp $input -Force
    $after = (Get-Item $input).Length
    $pct = [math]::Round((1 - $after / $before) * 100)
    Write-Host "  -> $(Format-MB $after) (saved $pct%)"
  } else {
    if (Test-Path $tmp) { Remove-Item $tmp -Force }
    Write-Host "  -> kept original"
  }
}

function Compress-Image([string]$name) {
  $path = Join-Path $assets $name
  if (-not (Test-Path $path)) { return }
  Add-Type -AssemblyName System.Drawing
  $before = (Get-Item $path).Length
  $img = [System.Drawing.Image]::FromFile($path)
  try {
    $maxW = 1600
    $w = $img.Width
    $h = $img.Height
    if ($w -le $maxW) {
      Write-Host "Image $name : already <= ${maxW}px ($(Format-MB $before))"
      return
    }
    $ratio = $maxW / $w
    $nw = $maxW
    $nh = [int][math]::Round($h * $ratio)
    $bmp = New-Object System.Drawing.Bitmap $nw, $nh
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($img, 0, 0, $nw, $nh)
    $g.Dispose()
    $tmp = "$path.tmp"
    $bmp.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $after = (Get-Item $tmp).Length
    if ($after -lt $before) {
      Move-Item $tmp $path -Force
      Write-Host "Image $name : $(Format-MB $before) -> $(Format-MB $after)"
    } else {
      Remove-Item $tmp -Force
      Write-Host "Image $name : kept ($(Format-MB $before))"
    }
  } finally {
    $img.Dispose()
  }
}

Write-Host "Compressing portfolio assets..."
Ensure-PdfCpu

@(
  "wenzhou-binjiang-residential.pdf",
  "architecture-department-building.pdf",
  "dragon-boat-museum.pdf",
  "nantang-bookbox-renovation.pdf",
  "shades-in-woods.pdf"
) | ForEach-Object { Compress-Pdf $_ }

@(
  "shades-in-woods-cover.png",
  "wopai-dream-station-01.png",
  "wopai-dream-station-02.png",
  "wopai-dream-station-03.png",
  "magic-sound-script.png",
  "interstellar-frontier-script.png"
) | ForEach-Object { Compress-Image $_ }

Write-Host ""
Write-Host "Done."
