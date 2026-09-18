import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Download,
  Eye,
  GraduationCap,
  Landmark,
  Target,
  UserRound,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-background border-b border-border overflow-hidden">
        <div className="absolute inset-0 structural-grid opacity-40 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-gold block" />
              <span className="text-gold uppercase tracking-widest text-xs font-bold">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-8 leading-[1.1] tracking-tight">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
              We do things differently. Our innovative solutions make clean energy possible for households, businesses, property owners, and more. We are on a mission to provide energy to every corner of India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background p-10 md:p-12 border border-border"
            >
              <Target className="w-10 h-10 text-primary mb-8" strokeWidth={1.5} />
              <h2 className="text-2xl font-display font-medium mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide reliable, efficient, and cost-effective renewable energy solutions that empower businesses and communities while protecting our environment for future generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-secondary text-secondary-foreground p-10 md:p-12"
            >
              <Eye className="w-10 h-10 text-primary mb-8" strokeWidth={1.5} />
              <h2 className="text-2xl font-display font-medium mb-4">Our Vision</h2>
              <p className="text-secondary-foreground/70 leading-relaxed">
                To be India's most trusted partner in the clean energy transition, recognized for our engineering excellence, transparent practices, and enduring infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story text block */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <Zap className="w-12 h-12 text-gold mb-6" strokeWidth={1} />
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-8">We just don't give up</h2>
            </div>
            <div className="prose prose-lg prose-neutral max-w-none text-muted-foreground font-light leading-relaxed">
              <p className="mb-6">
                We are on a mission to provide energy to every corner of India. Over the past decade, the cost of solar technology has fallen dramatically. New technologies promise to increase efficiency and lower costs further. Solar energy will soon be unbeatable compared to fossil fuels.
              </p>
              <p className="mb-6">
                Solar energy has come a long way in a decade. Back in 2010, the global market was small and highly dependent on subsidy regimes. Today, there are more than 115 gigawatts (GW) of solar installed across the world annually — more than all other generation technologies combined. It is also increasingly low cost, especially in sunnier regions where it has already become the lowest-cost form of new electricity generation.
              </p>
              <p>
                At <strong>UVMAR Clean Energy</strong> (formerly Aditya Energy), we are proud to be at the forefront of this transformation — building infrastructure that will power India for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Capabilities */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-[2px] bg-primary block" />
                <span className="text-primary uppercase tracking-widest text-xs font-bold">Corporate Identity</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-8">Experience &amp; Capabilities</h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  With a track record of executing complex solar projects across varied terrains and industrial environments, UVMAR has established itself as a preferred EPC partner.
                </p>
                <p>
                  Our multi-disciplinary team brings together expertise in electrical engineering, civil structural design, project management, and regulatory compliance. We don&apos;t just build solar plants; we navigate the intricate landscape of government approvals and grid connectivity to ensure seamless commissioning.
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
                <img src={asset("/images/solar-workers.png")} alt="UVMAR engineering team at work" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="aspect-[3/4] bg-muted border border-border mt-12">
                <img src={asset("/images/solar-closeup.png")} alt="Close-up of solar modules" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
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
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-[2px] bg-primary block" />
                <span className="text-primary uppercase tracking-widest text-xs font-bold">Our Reach</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Industries We Serve</h2>
              <p className="text-secondary-foreground/60 text-lg font-light">Delivering specialized energy solutions tailored to sector-specific demands and operational constraints.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "Manufacturing & Industrial",
                desc: "High-capacity solutions for energy-intensive manufacturing plants, optimizing operational costs.",
              },
              {
                icon: Landmark,
                title: "Commercial Spaces",
                desc: "Rooftop and structural solar integrations for tech parks, malls, and commercial complexes.",
              },
              {
                icon: GraduationCap,
                title: "Institutional",
                desc: "Reliable power solutions for universities, hospitals, and government facilities.",
              },
            ].map((industry) => (
              <div key={industry.title} className="bg-background/5 border border-white/10 p-10 hover:bg-background/10 transition-colors">
                <industry.icon className="w-10 h-10 text-primary mb-8" strokeWidth={1.5} />
                <h3 className="text-xl font-display font-medium mb-4">{industry.title}</h3>
                <p className="text-secondary-foreground/60 leading-relaxed text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-muted border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Leadership</h2>
              <p className="text-muted-foreground text-lg">The strategic backbone of UVMAR Energy, guiding our vision for India's renewable future.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {[
              { name: "L Uday Mehta", title: "Managing Partner", image: asset("/images/leader-l-uday-mehta.png") },
              { name: "Uday Vinay Mehta", title: "Managing Partner", image: asset("/images/leader-uday-vinay-mehta.png") },
              { name: "Aashana Vinay Metha", title: "Director", image: null },
            ].map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden bg-border/50 border border-border mb-6">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-card text-center p-8">
                      <UserRound className="w-16 h-16 text-primary mb-5" strokeWidth={1} aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Portrait forthcoming</p>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-display font-medium mb-2">{leader.name}</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-xs">{leader.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-gold block" />
              <span className="text-gold uppercase tracking-widest text-xs font-bold">Awards &amp; Recognition</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Recognized for delivery.</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Recognition from partners and project stakeholders reflects the care, safety, and quality our teams bring to every clean energy project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                recipient: "Uday Mehta",
                title: "Appreciation for excellent efforts in the construction of the 75MW Solar Power Plant",
                detail: "Prathama Solarconnect Energy Pvt. Ltd., completed on time with high Safety & Quality.",
              },
              {
                recipient: "Aditya Energy",
                title: "Appreciation for association and partnership with Enerparc",
                detail: "With gratitude for the collaboration and contribution.",
              },
              {
                recipient: "Vinay Mehta",
                title: "Appreciation for excellent efforts in the construction of the 75MW Solar Power Plant",
                detail: "Prathama Solarconnect Energy Pvt. Ltd., completed on time with high Safety & Quality.",
              },
            ].map((recognition) => (
              <article key={recognition.recipient} className="border border-border bg-background p-8 flex flex-col min-h-[290px]">
                <Award className="w-9 h-9 text-gold mb-8" strokeWidth={1.5} aria-hidden="true" />
                <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">{recognition.recipient}</p>
                <h3 className="text-xl font-display font-medium leading-snug mb-4">{recognition.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-auto">{recognition.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-16 text-center">Why UVMAR Clean Energy?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Personalized", desc: "We help you maximise your energy use so you may optimize your specific operations." },
              { title: "Measured Results", desc: "We help companies achieve goals: improving operations, cutting costs, boosting profitability." },
              { title: "Top Quality", desc: "We are committed to providing reliable, robust infrastructure using Tier-1 components." },
              { title: "Experience", desc: "Our professional engineering teams handle complex EPC and regulatory challenges effortlessly." }
            ].map((value, i) => (
              <div key={i} className="p-8 border border-border bg-card">
                <CheckCircle2 className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-display font-medium mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
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
              <Download className="w-10 h-10 text-foreground" strokeWidth={1} aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-display font-medium mb-4">Corporate Brochure</h2>
              <p className="text-muted-foreground mb-8 text-lg font-light leading-relaxed">
                Review our comprehensive corporate profile including detailed project case studies, technical specifications, and company credentials.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button asChild className="bg-foreground text-background hover:bg-primary transition-colors rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">
                  <a href={asset("/brochure/uvmar-company-brochure.pdf")} target="_blank" rel="noopener noreferrer">
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 structural-grid-dark opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Invest in Enduring Infrastructure</h2>
          <p className="text-secondary-foreground/70 mb-10 max-w-2xl mx-auto text-lg font-light">Partner with UVMAR Clean Energy for reliable, high-performance solar assets.</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold">
            <Link href="/contact">Contact Our Engineers <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
