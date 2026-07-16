import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";

type Category = "All" | "Solar Farms" | "Rooftop" | "Team & Work" | "Infrastructure";

const GALLERY_ITEMS = [
  {
    src: asset("/images/solar-array.png"),
    alt: "Large-Scale Solar Array",
    caption: "100 MW ground-mounted solar farm — Arupukottai, Tamil Nadu",
    category: "Solar Farms" as Category,
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: asset("/images/rooftop-solar.png"),
    alt: "Industrial Rooftop Installation",
    caption: "7 MW rooftop on a manufacturing plant — Nashik, Maharashtra",
    category: "Rooftop" as Category,
    span: "col-span-1 row-span-1",
  },
  {
    src: asset("/images/solar-workers.png"),
    alt: "Installation Team on Site",
    caption: "UVMAR engineers during commissioning — Kurnool, Andhra Pradesh",
    category: "Team & Work" as Category,
    span: "col-span-1 row-span-1",
  },
  {
    src: asset("/images/solar-closeup.png"),
    alt: "Solar Panel Detail",
    caption: "Bifacial modules with anti-soiling coating — Barmer, Rajasthan",
    category: "Infrastructure" as Category,
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    src: asset("/images/rooftop-solar.png"),
    alt: "Commercial Rooftop Solar",
    caption: "5 MW rooftop solar on IT campus — Bengaluru, Karnataka",
    category: "Rooftop" as Category,
    span: "col-span-1 row-span-1",
  },
  {
    src: asset("/images/solar-array.png"),
    alt: "Utility-Scale Solar Farm",
    caption: "80 MW solar plant — Pavagada, Karnataka",
    category: "Solar Farms" as Category,
    span: "col-span-1 row-span-1",
  },
  {
    src: asset("/images/solar-workers.png"),
    alt: "EPC Construction Phase",
    caption: "Structure erection team during construction phase — Gujarat",
    category: "Team & Work" as Category,
    span: "col-span-1 row-span-1",
  },
  {
    src: asset("/images/solar-closeup.png"),
    alt: "Electrical Infrastructure",
    caption: "Switchyard and inverter station — 33 kV evacuation line",
    category: "Infrastructure" as Category,
    span: "col-span-1 row-span-1",
  },
];

const CATEGORIES: Category[] = ["All", "Solar Farms", "Rooftop", "Team & Work", "Infrastructure"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

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
              Visualizing our commitment to clean energy infrastructure across India — from desert solar farms to urban rooftops.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-muted border-b border-border">
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
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[260px]">
              {filtered.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`relative group overflow-hidden bg-muted ${activeCategory === "All" ? img.span : "col-span-1 row-span-1"}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Always-visible category badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary/90 text-black text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                      {img.category}
                    </span>
                  </div>
                  {/* Caption on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-sm font-medium leading-snug">{img.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-muted-foreground">No photos in this category yet.</div>
          )}
        </div>
      </section>

      {/* More Photos Coming Soon */}
      <section className="py-16 bg-muted border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/30 mb-6">
              <Images className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">More Photos Coming Soon</h3>
            <div className="w-10 h-1 bg-[#cba984] mx-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              We're adding high-resolution photos from our project sites across Tamil Nadu, Rajasthan, Gujarat, and more. Check back soon for an expanded visual portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join our growing portfolio</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Let's build your project and add it to India's clean energy story.</p>
          <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 rounded-none h-14 px-8 text-lg font-medium">
            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
