"""Create compact web previews and retain original engineering PDFs."""
from pathlib import Path
import shutil
import fitz

root = Path("artifacts/uvmar-website/public")
documents = root / "documents/solar-parks"
images = root / "images/solar-parks"
documents.mkdir(parents=True, exist_ok=True)
images.mkdir(parents=True, exist_ok=True)
sources = [
    ("Solar_Parks_List_(2)_1792655297478.pdf", "solar-parks-list"),
    ("GE9_PV_ARRAY_LAYOUT_OF_4.2_MW-2_1792655297478.pdf", "ge9-pv-array"),
    ("GE_6_PLANT_LAYOUT_4MW_1792655297478.pdf", "ge6-plant-layout"),
    ("PV_Module_Layout_Uvmar_Renewable_1792655297478.pdf", "uvmar-pv-module-layout"),
    ("PV_ARRAY_LAYOUT_OF_Silathur_Park_12-9-26_1792655297478.pdf", "silathur-pv-array"),
]
for source, slug in sources:
    path = Path("attached_assets") / source
    shutil.copyfile(path, documents / f"{slug}.pdf")
    if slug == "solar-parks-list":
        continue
    doc = fitz.open(path)
    page = doc[0]
    scale = 2200 / max(page.rect.width, page.rect.height)
    pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale), alpha=False)
    pix.save(images / f"{slug}.jpg", jpg_quality=88)
    print(slug, pix.width, pix.height)
