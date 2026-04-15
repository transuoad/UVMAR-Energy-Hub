import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const images = [
    { src: "/images/solar-array.png", alt: "Large Solar Array", span: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/images/rooftop-solar.png", alt: "Rooftop Solar Installation", span: "col-span-1 row-span-1" },
    { src: "/images/solar-workers.png", alt: "Solar Workers", span: "col-span-1 row-span-1" },
    { src: "/images/solar-closeup.png", alt: "Solar Panel Close-up", span: "col-span-1 md:col-span-2 row-span-1" },
    { src: "/images/rooftop-solar.png", alt: "Commercial Rooftop", span: "col-span-1 row-span-1" },
    { src: "/images/solar-array.png", alt: "Solar Farm", span: "col-span-1 row-span-1" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 bg-muted border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Visualizing our commitment to clean energy infrastructure across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative group overflow-hidden bg-muted ${img.span}`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold tracking-wider uppercase text-sm border border-white/50 px-4 py-2 backdrop-blur-sm">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Join our growing portfolio</h2>
          <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 rounded-none h-14 px-8 text-lg font-medium">
            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
