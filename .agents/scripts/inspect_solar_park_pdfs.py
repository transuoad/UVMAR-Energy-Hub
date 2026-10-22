"""Inspect supplied solar park PDFs and render first-page review images."""
from pathlib import Path
import fitz

out = Path("generated-artifacts/solar-parks-review")
out.mkdir(parents=True, exist_ok=True)
for path in sorted(Path("attached_assets").glob("*1792655297478.pdf")):
    doc = fitz.open(path)
    print(f"\n--- {path.name}: {len(doc)} pages ---")
    for number, page in enumerate(doc):
        print(f"Page {number + 1}, dimensions {page.rect}")
        print(page.get_text()[:18000])
        scale = min(1600 / page.rect.width, 1400 / page.rect.height)
        page.get_pixmap(matrix=fitz.Matrix(scale, scale), alpha=False).save(
            out / f"{path.stem}-{number + 1}.png"
        )
