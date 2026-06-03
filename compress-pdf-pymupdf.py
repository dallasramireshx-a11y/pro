"""Compress portfolio PDFs with PyMuPDF (image downscale + deflate)."""
import sys
from pathlib import Path

try:
    import fitz
except ImportError:
    print("PyMuPDF not installed. Run setup-python-tools.ps1 first.", file=sys.stderr)
    sys.exit(1)

ASSETS = Path(__file__).resolve().parent.parent / "assets"
PDFS = [
    "wenzhou-binjiang-residential.pdf",
    "architecture-department-building.pdf",
    "dragon-boat-museum.pdf",
    "nantang-bookbox-renovation.pdf",
    "shades-in-woods.pdf",
    "qingnianfang-street.pdf",
]


def mb(size: int) -> str:
    return f"{size / 1024 / 1024:.2f} MB"


def compress(path: Path) -> None:
    before = path.stat().st_size
    tmp = path.with_suffix(".tmp.pdf")
    print(f"\n{path.name} ({mb(before)})")
    doc = fitz.open(path)
    try:
        if hasattr(doc, "rewrite_images"):
            # 清晰度优先：仅压缩过高分辨率内嵌图，避免图纸发糊
            doc.rewrite_images(dpi_threshold=220, dpi_target=165, quality=88)
        doc.save(
            tmp,
            garbage=4,
            deflate=True,
            clean=True,
            deflate_images=True,
            deflate_fonts=True,
        )
    finally:
        doc.close()
    after = tmp.stat().st_size
    if after < before * 0.98:
        tmp.replace(path)
        pct = round((1 - after / before) * 100)
        print(f"  -> {mb(after)} (saved {pct}%)")
    else:
        tmp.unlink(missing_ok=True)
        print("  -> kept original (no meaningful reduction)")


def main() -> None:
    print("Compressing PDFs with PyMuPDF...")
    for name in PDFS:
        p = ASSETS / name
        if p.exists():
            compress(p)
        else:
            print(f"Skip missing: {name}")
    print("\nDone.")


if __name__ == "__main__":
    main()
