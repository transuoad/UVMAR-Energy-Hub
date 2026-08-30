import { motion } from "framer-motion";
import { Link } from "wouter";
import { Building2, Landmark, GraduationCap, Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";

export default function Profile() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-24 md:py-32 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 structural-grid opacity-40 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-primary block" />
              <span className="text-primary uppercase tracking-widest text-xs font-bold">Corporate Identity</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-8 leading-[1.1] tracking-tight">
              Company Profile
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              UVMAR Clean Energy (formerly Aditya Energy) represents excellence in renewable infrastructure. We build enduring assets for India's leading institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-8">Experience & Capabilities</h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  With a track record of executing complex solar projects across varied terrains and industrial environments, UVMAR has established itself as a preferred EPC partner.
                </p>
                <p>
                  Our multi-disciplinary team brings together expertise in electrical engineering, civil structural design, project management, and regulatory compliance. We don't just build solar plants; we navigate the intricate landscape of government approvals and grid connectivity to ensure seamless commissioning.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-border">
                <div>
                  <div className="text-5xl font-display font-medium text-foreground mb-3">1.5<span className="text-primary text-3xl">GW+</span></div>
                  <div className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Operating Projects</div>
                </div>
                <div>
                  <div className="text-5xl font-display font-medium text-foreground mb-3">60<span className="text-primary text-3xl">+</span></div>
                  <div className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Corporate Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 grid grid-cols-2 gap-4"
            >
              <div className="aspect-[3/4] bg-muted border border-border">
                <img src={asset("/images/solar-workers.png")} alt="Engineering Team" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="aspect-[3/4] bg-muted border border-border mt-12">
                <img src={asset("/images/solar-closeup.png")} alt="Solar Modules" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Industries We Serve</h2>
              <p className="text-secondary-foreground/60 text-lg font-light">Delivering specialized energy solutions tailored to sector-specific demands and operational constraints.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "Manufacturing & Industrial",
                desc: "High-capacity solutions for energy-intensive manufacturing plants, optimizing operational costs."
              },
              {
                icon: Landmark,
                title: "Commercial Spaces",
                desc: "Rooftop and structural solar integrations for tech parks, malls, and commercial complexes."
              },
              {
                icon: GraduationCap,
                title: "Institutional",
                desc: "Reliable power solutions for universities, hospitals, and government facilities."
              }
            ].map((industry, i) => (
              <div key={i} className="bg-background/5 border border-white/10 p-10 hover:bg-background/10 transition-colors">
                <industry.icon className="w-10 h-10 text-primary mb-8" strokeWidth={1.5} />
                <h3 className="text-xl font-display font-medium mb-4">{industry.title}</h3>
                <p className="text-secondary-foreground/60 leading-relaxed text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Brochure */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-card border border-border p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="w-24 h-24 bg-muted border border-border flex items-center justify-center shrink-0">
              <Download className="w-10 h-10 text-foreground" strokeWidth={1} />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-display font-medium mb-4">Corporate Brochure</h2>
              <p className="text-muted-foreground mb-8 text-lg font-light leading-relaxed">
                Review our comprehensive corporate profile including detailed project case studies, technical specifications, and company credentials.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button asChild className="bg-foreground text-background hover:bg-primary transition-colors rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">
                  <a href="/brochure/uvmar-company-brochure.pdf" target="_blank" rel="noopener noreferrer">
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
