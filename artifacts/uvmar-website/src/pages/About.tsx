import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, Eye, ArrowUpRight, Zap, CheckCircle2 } from "lucide-react";
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
              We do things<br />differently.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
              Our innovative solutions make clean energy possible for households, businesses, property owners, and more. We are on a mission to provide energy to every corner of India.
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

      {/* Leadership Team */}
      <section className="py-24 bg-muted border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Leadership</h2>
              <p className="text-muted-foreground text-lg">The strategic backbone of UVMAR Energy, guiding our vision for India's renewable future.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {[
              { name: "L Uday Mehta", title: "Managing Partner", image: asset("/images/leader-l-uday-mehta.png") },
              { name: "Uday Vinay Mehta", title: "Managing Partner", image: asset("/images/leader-uday-vinay-mehta.png") },
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
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-2xl font-display font-medium mb-2">{leader.name}</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-xs">{leader.title}</p>
              </motion.div>
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
