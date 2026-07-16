import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";

type Category = "All" | "Solar Farms" | "Infrastructure" | "Team & Work";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: Category;
}

const g = (file: string) => asset(`/images/gallery/${file}`);

const GALLERY_ITEMS: GalleryItem[] = [
  // ── SOLAR FARMS ───────────────────────────────────────────────────────────
  { src: g("plant-4mw-karambakkudi.jpg"), alt: "4 MW Solar Plant Karambakkudi", caption: "4 MW AC Solar Power Plant – Karambakkudi, Pudukkottai, Tamil Nadu", category: "Solar Farms" },
  { src: g("plant-15mw-kallakurichi.jpg"), alt: "15 MW Solar Plant Kallakurichi", caption: "15 MW AC Solar Power Plant – Senthanadu, Kallakurichi, Tamil Nadu", category: "Solar Farms" },
  { src: g("plant-overview.jpg"), alt: "Solar Plant Overview", caption: "Aerial overview of a completed utility-scale solar plant", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0005.jpg"), alt: "Solar Project Site", caption: "Solar project site — ground preparation stage", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0010.jpg"), alt: "Solar Array Installation", caption: "Module string installation in progress", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0011.jpg"), alt: "Solar Array Field", caption: "Completed solar array ready for commissioning", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0012.jpg"), alt: "Module Installation", caption: "Panel mounting and wiring at project site", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0013.jpg"), alt: "Solar Plant Progress", caption: "Mid-stage construction progress view", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0014.jpg"), alt: "Solar Field", caption: "Commissioned solar field — generation phase", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0015.jpg"), alt: "Solar Plant Tamil Nadu", caption: "UVMAR EPC project site – Tamil Nadu", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0023.jpg"), alt: "Solar Array Rows", caption: "Module array rows post-installation", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0026.jpg"), alt: "Plant Overview", caption: "Plant-level view showing full module coverage", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0029.jpg"), alt: "Solar Project", caption: "Completed ground-mounted solar project", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0031.jpg"), alt: "Solar Modules", caption: "PV modules aligned and fully commissioned", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0032.jpg"), alt: "Solar Farm", caption: "Full solar farm view post-commissioning", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0033.jpg"), alt: "Solar Array", caption: "Module installation — string connection phase", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0034.jpg"), alt: "Solar Site", caption: "Site-level progress during active EPC", category: "Solar Farms" },
  { src: g("IMG-20260704-WA0035.jpg"), alt: "Solar Plant", caption: "Commissioned plant ready for grid injection", category: "Solar Farms" },

  // ── INFRASTRUCTURE (Electrical / Grid) ────────────────────────────────────
  { src: g("bay-33kv-1.jpg"), alt: "33 kV Bay", caption: "33 kV bay installation at pooling substation", category: "Infrastructure" },
  { src: g("bay-33kv-2.jpg"), alt: "33 kV Bay Switchyard", caption: "33 kV switchyard — equipment installed and energized", category: "Infrastructure" },
  { src: g("bay-33kv-3.jpg"), alt: "33 kV Bay Equipment", caption: "33 kV bay — breaker and CT installation complete", category: "Infrastructure" },
  { src: g("4pole-yard-erection.jpg"), alt: "4-Pole Yard Erection", caption: "4-Pole yard erection and installation at grid substation", category: "Infrastructure" },
  { src: g("4pole-yard.jpg"), alt: "4-Pole Yard", caption: "Completed 4-Pole yard at project substation", category: "Infrastructure" },
  { src: g("bay-extension-grid.jpg"), alt: "Bay Extension Grid Substation", caption: "Bay extension at TANGEDCO/KSEB grid substation", category: "Infrastructure" },
  { src: g("bay-extension-structure.jpg"), alt: "Bay Extension Structure", caption: "Structure work for bay extension at grid substation", category: "Infrastructure" },
  { src: g("bay-gss-1.jpg"), alt: "GSS Bay 1", caption: "Grid switching station (GSS) bay — installation phase", category: "Infrastructure" },
  { src: g("bay-gss-2.jpg"), alt: "GSS Bay 2", caption: "GSS bay equipment and busbar installation", category: "Infrastructure" },
  { src: g("bay-gss-3.jpg"), alt: "GSS Bay 3", caption: "Completed GSS bay ready for energization", category: "Infrastructure" },
  { src: g("control-room.jpg"), alt: "Control Room", caption: "Control room with SCADA panels and monitoring systems", category: "Infrastructure" },
  { src: g("control-relay-panel.jpg"), alt: "Control and Relay Panel", caption: "Control and relay panel installation at plant substation", category: "Infrastructure" },
  { src: g("outdoor-lt-panel.jpg"), alt: "Outdoor LT Panel", caption: "Outdoor LT panel installation — AC collection side", category: "Infrastructure" },
  { src: g("polling-substation.jpg"), alt: "Pooling Substation", caption: "Pooling substation — multi-plant grid evacuation hub", category: "Infrastructure" },
  { src: g("IMG-20260704-WA0045.jpg"), alt: "Electrical Installation", caption: "Electrical switchgear installation at project substation", category: "Infrastructure" },
  { src: g("IMG-20260704-WA0046.jpg"), alt: "Substation Work", caption: "Substation construction in progress", category: "Infrastructure" },
  { src: g("IMG-20260704-WA0048.jpg"), alt: "Panel Installation", caption: "Panel and cable laying — plant substation", category: "Infrastructure" },
  { src: g("IMG-20260704-WA0051.jpg"), alt: "Grid Infrastructure", caption: "Grid-side infrastructure installation and testing", category: "Infrastructure" },
  { src: g("IMG-20260704-WA0052.jpg"), alt: "Switchyard", caption: "Switchyard equipment during energization phase", category: "Infrastructure" },
  { src: g("IMG-20260704-WA0053.jpg"), alt: "Electrical Work", caption: "HT cable jointing and termination work", category: "Infrastructure" },
  { src: g("IMG-20260704-WA0054.jpg"), alt: "Panel Work", caption: "Panel wiring and commissioning checks", category: "Infrastructure" },
  { src: g("IMG-20260704-WA0055.jpg"), alt: "Substation Equipment", caption: "CT/PT and isolator installation at plant bay", category: "Infrastructure" },

  // ── TEAM & WORK ───────────────────────────────────────────────────────────
  { src: g("land-clearing.jpg"), alt: "Land Clearing", caption: "Land clearing and site preparation before module installation", category: "Team & Work" },
  { src: g("erection-4mw-karambakkudi.jpg"), alt: "Erection Work Karambakkudi", caption: "IDT 4 MW – structure erection and module installation, Karambakkudi", category: "Team & Work" },
  { src: g("IMG-20260704-WA0070.jpg"), alt: "Site Team", caption: "UVMAR site team during active construction phase", category: "Team & Work" },
  { src: g("IMG-20260704-WA0082.jpg"), alt: "Installation Work", caption: "Module erection team at work — on-site", category: "Team & Work" },
  { src: g("IMG-20260704-WA0086.jpg"), alt: "Construction Progress", caption: "Ground-work and pile driving for module mounting", category: "Team & Work" },
  { src: g("IMG-20260704-WA0088.jpg"), alt: "Team On Site", caption: "Engineering team during site survey and planning", category: "Team & Work" },
  { src: g("IMG-20260704-WA0089.jpg"), alt: "EPC Work", caption: "Full EPC crew during peak construction phase", category: "Team & Work" },
  { src: g("IMG-20260704-WA0090.jpg"), alt: "Installation Team", caption: "Installation team completing module string connections", category: "Team & Work" },
  { src: g("IMG-20260704-WA0091.jpg"), alt: "Site Progress", caption: "Progress inspection during commissioning readiness check", category: "Team & Work" },
  { src: g("IMG-20260704-WA0095.jpg"), alt: "Final Inspection", caption: "Final site walk-through before grid synchronization", category: "Team & Work" },
];

const CATEGORIES: Category[] = ["All", "Solar Farms", "Infrastructure", "Team & Work"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const counts: Record<string, number> = {
    "All": GALLERY_ITEMS.length,
    "Solar Farms": GALLERY_ITEMS.filter(i => i.category === "Solar Farms").length,
    "Infrastructure": GALLERY_ITEMS.filter(i => i.category === "Infrastructure").length,
    "Team & Work": GALLERY_ITEMS.filter(i => i.category === "Team & Work").length,
  };

  return (
    <div className="flex flex-col min-h-screen page-top-offset">
      {/* Header */}
      <section className="py-24 bg-secondary text-white border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-primary/40 bg-primary/10 text-primary uppercase tracking-widest text-xs font-semibold">
              Visual Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Real photos from our project sites — solar farms, electrical infrastructure, and our engineering teams at work across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-muted border-b border-border sticky top-20 z-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-sm font-semibold uppercase tracking-wider transition-all border ${
                  activeCategory === cat
                    ? "bg-primary text-black border-primary"
                    : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat} <span className="opacity-60 font-normal">({counts[cat]})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground text-center mb-8">
            Showing <span className="font-bold text-foreground">{filtered.length}</span> photos
          </p>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.04, 0.5) }}
                className="break-inside-avoid group relative overflow-hidden bg-muted border border-border hover:border-primary transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Category badge — always visible */}
                <div className="absolute top-2 left-2">
                  <span className="bg-primary/90 text-black text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                    {img.category}
                  </span>
                </div>
                {/* Caption on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <p className="text-white text-xs font-medium leading-snug">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Let us add your project to this gallery</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Partner with UVMAR and get industry-leading solar infrastructure built for your site.</p>
          <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 rounded-none h-14 px-8 text-lg font-medium">
            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
