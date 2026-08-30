import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Factory, Zap, Sun, MapPin } from "lucide-react";
import { asset } from "@/lib/utils";

const FEATURED_PROJECTS = [
  {
    title: "ReNew Power",
    location: "Chennai, Tamil Nadu",
    capacity: "100 MW",
    type: "Ground-Mounted",
    image: asset("/images/solar-array.png"),
  },
  {
    title: "Prathama Solarconnect Energy Private Limited",
    location: "Sivaganga, Tamil Nadu",
    capacity: "55 MW",
    type: "Ground-Mounted",
    image: asset("/images/solar-array.png"),
  },
  {
    title: "Michelin India Private Limited",
    location: "Chennai, Tamil Nadu",
    capacity: "3.3 MW",
    type: "Rooftop",
    image: asset("/images/rooftop-solar.png"),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center bg-secondary pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={asset("/images/solar-array.png")}
            alt="Utility Scale Solar Array"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 z-10 relative flex-1 flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-primary block" />
              <span className="text-primary uppercase tracking-widest text-xs font-bold">Premium EPC Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-display font-medium text-white leading-[1.05] tracking-tight mb-8">
              Engineering the<br />
              infrastructure of<br />
              <span className="text-primary italic font-light">clean energy.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-foreground/70 mb-12 max-w-2xl leading-relaxed font-light">
              We deliver utility-scale solar parks, rooftop systems, and comprehensive grid evacuation infrastructure for India's leading enterprises.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">
                <Link href="/contact">Partner With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold backdrop-blur-sm">
                <Link href="/projects">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Metric Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm relative z-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { label: "Projects Delivered", value: "50+" },
                { label: "Corporate Clients", value: "40+" },
                { label: "Capacity Installed", value: "1.5 GW" },
                { label: "States Covered", value: "5" }
              ].map((stat, i) => (
                <div key={i} className="py-8 px-6 flex flex-col justify-center">
                  <div className="text-3xl md:text-4xl font-display font-medium text-white mb-2">{stat.value}</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Overview / Structural */}
      <section className="py-24 bg-background border-b border-border relative">
        <div className="absolute inset-0 structural-grid opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-6 leading-tight">
                End-to-End<br />Solar Capabilities
              </h2>
              <div className="w-16 h-1 bg-gold mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                From concept to commissioning, we deliver comprehensive solar solutions tailored to industrial, commercial, and utility-scale requirements. Our multi-disciplinary team brings together expertise in electrical engineering, civil structural design, project management, and regulatory compliance.
              </p>
              <Link href="/profile" className="inline-flex items-center gap-2 text-foreground font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors group">
                Read Company Profile <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Factory, title: "Rooftop Solar", desc: "Turnkey EPC for industrial rooftops.", link: "/services" },
                { icon: Sun, title: "Solar Parks", desc: "Plug-and-play infrastructure models.", link: "/solar-park" },
                { icon: Zap, title: "Ground-Mounted", desc: "Utility-scale EPC installations.", link: "/services" },
                { icon: MapPin, title: "Liaisoning", desc: "Regulatory approvals & Right of Way.", link: "/services" }
              ].map((service, idx) => (
                <Link key={idx} href={service.link} className="block group">
                  <div className="bg-card p-8 border border-border h-full hover:border-foreground transition-colors relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-muted -mr-8 -mt-8 rotate-45 transform group-hover:bg-primary transition-colors" />
                    <service.icon className="h-8 w-8 text-foreground mb-6" strokeWidth={1.5} />
                    <h3 className="text-lg font-display font-medium mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-primary font-bold tracking-widest uppercase text-xs mb-3">Portfolio</div>
              <h2 className="text-3xl md:text-5xl font-display font-medium">Featured Infrastructure</h2>
            </div>
            <Button asChild variant="outline" className="rounded-none border-border hover:border-foreground hover:bg-transparent h-12 px-6 uppercase text-xs tracking-widest font-bold">
              <Link href="/projects">View All 50+ Projects</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-border bg-background overflow-hidden hover:border-foreground transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-background border border-border text-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 z-20">
                    <div className="bg-foreground text-background font-display font-medium text-xl px-4 py-2">
                      {project.capacity}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-medium text-xl mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="py-24 bg-secondary text-secondary-foreground border-y border-secondary-foreground/10 relative">
        <div className="absolute inset-0 structural-grid-dark opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 leading-tight">
                Trusted by India's<br />Energy Leaders
              </h2>
              <p className="text-secondary-foreground/60 text-lg leading-relaxed mb-8">
                Over the past decade, we've partnered with leading renewable energy developers, manufacturing plants, and educational institutions across India. Our reputation is built on delivering complex projects on time and maintaining rigorous quality standards.
              </p>
              <div className="space-y-6">
                {[
                  "Personalized engineering approach",
                  "Expertise in complex regulatory approvals",
                  "Top quality Tier-1 component procurement",
                  "Reliable post-commissioning O&M"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 grid gap-6">
              {[
                {
                  quote: "Our solar needs were fulfilled by Aditya Energy. The staff helped with property purchase, site approval, and solar panels. Our project benefited from their switchyard skills.",
                  company: "Hinduja Renewables",
                },
                {
                  quote: "Aditya Energy has performed admirably. They are highly competent and required minimal direction from us. I would recommend them to anyone who needs assistance obtaining utility approval.",
                  company: "ReNew Power",
                }
              ].map((t, i) => (
                <div key={i} className="bg-background/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm">
                  <p className="text-lg md:text-xl font-light italic leading-relaxed mb-8 text-secondary-foreground/90">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[1px] bg-primary" />
                    <div className="font-bold uppercase tracking-widest text-sm text-primary">{t.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Ready to transition to clean energy?</h2>
          <p className="mb-10 max-w-2xl mx-auto text-xl opacity-90 font-light">Partner with UVMAR Clean Energy for reliable, high-performance solar infrastructure.</p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold">
            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
