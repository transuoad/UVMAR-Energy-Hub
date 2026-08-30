import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";

type Category = "All" | "Solar Farms" | "Infrastructure" | "Team & Work";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: Category;
  sourceUrl?: string | null;
}

const CATEGORIES: Category[] = ["All", "Solar Farms", "Infrastructure", "Team & Work"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [galleryError, setGalleryError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetch(asset("/images/gallery/drive-manifest.json"))
      .then((response) => {
        if (!response.ok) throw new Error("Gallery manifest could not be loaded");
        return response.json() as Promise<GalleryItem[]>;
      })
      .then((items) => {
        if (!isMounted) return;
        setGalleryItems(items.map((item) => ({ ...item, src: asset(item.src) })));
      })
      .catch(() => {
        if (isMounted) setGalleryError(true);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const counts: Record<string, number> = {
    "All": galleryItems.length,
    "Solar Farms": galleryItems.filter(i => i.category === "Solar Farms").length,
    "Infrastructure": galleryItems.filter(i => i.category === "Infrastructure").length,
    "Team & Work": galleryItems.filter(i => i.category === "Team & Work").length,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-secondary text-secondary-foreground border-b border-border overflow-hidden">
        <div className="absolute inset-0 structural-grid-dark opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-primary block" />
              <span className="text-primary uppercase tracking-widest text-xs font-bold">Visual Proof</span>
              <span className="w-12 h-[2px] bg-primary block" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-8 leading-[1.1] tracking-tight">
              Site Gallery
            </h1>
            <p className="text-xl text-secondary-foreground/70 leading-relaxed font-light">
              Field photography documenting utility-scale solar farms, critical electrical infrastructure, and our engineering teams at work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-card border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors border ${
                  activeCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat} <span className="opacity-60 ml-1 font-normal">({counts[cat]})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {galleryError ? (
            <p className="py-20 text-center text-muted-foreground">Gallery images are temporarily unavailable.</p>
          ) : filtered.length === 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[4/3] bg-muted border border-border animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.04, 0.5) }}
                  className="break-inside-avoid group relative overflow-hidden bg-muted border border-border"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto block grayscale mix-blend-multiply opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal"
                    loading="lazy"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-background text-foreground border border-border text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-sm">
                      {img.category}
                    </span>
                  </div>
                  {/* Caption overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white text-sm font-medium leading-relaxed">{img.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Secure Your Infrastructure</h2>
          <p className="mb-10 max-w-2xl mx-auto text-lg opacity-90 font-light">Partner with UVMAR to deliver industry-leading solar infrastructure for your organization.</p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold">
            <Link href="/contact">Initiate Contact <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
