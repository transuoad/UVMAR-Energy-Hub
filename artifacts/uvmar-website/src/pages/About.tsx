import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Target, Eye, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent z-10" />
          <img src="/images/solar-array.png" alt="Solar Array" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-primary font-bold tracking-wider uppercase mb-4 text-sm">Our Story</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">We do things differently</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our innovative solutions make clean energy possible for households, businesses, property owners, and more. We are on a mission to provide energy to every corner of India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 border border-border"
            >
              <Target className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide reliable, efficient, and cost-effective renewable energy solutions that empower businesses and communities while protecting our environment for future generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-black p-12"
            >
              <Eye className="w-12 h-12 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To be India's most trusted partner in the clean energy transition, recognized for our engineering excellence, transparent practices, and enduring infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 border border-border relative">
            <Zap className="absolute top-12 left-12 w-16 h-16 text-primary/10" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-3xl font-bold mb-8">We just don't give up</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-6">
                  We are on a mission to provide energy to every corner of India. Over the past decade, the cost of solar technology has fallen dramatically. New technologies promise to increase efficiency and lower costs further. Solar energy will soon be unbeatable compared to fossil fuels.
                </p>
                <p className="mb-6">
                  Solar energy has come a long way in a decade. Back in 2010, the global market was small and highly dependent on subsidy regimes. Today, there are more than 115 gigawatts (GW) of solar installed across the world annually — more than all other generation technologies combined. It is also increasingly low cost, especially in sunnier regions where it has already become the lowest-cost form of new electricity generation.
                </p>
                <p>
                  At UVMAR Clean Energy (formerly Aditya Energy), we are proud to be at the forefront of this transformation — building infrastructure that will power India for generations to come.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-muted-foreground text-lg">They guided Aditya Energy — the backbone of our company.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: "L Uday Metha", title: "Managing Partner" },
              { name: "Uday Vinay Metha", title: "Managing Partner" },
            ].map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 border border-border hover:border-primary transition-colors text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">{leader.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-primary font-medium text-sm uppercase tracking-wider">{leader.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why UVMAR Clean Energy?</h2>
            <p className="text-muted-foreground text-lg">We are at the top of the chart.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Personalized", desc: "We don't just sell products; we help you use them. We'll help you maximise your energy use so you may live your best life." },
              { title: "Measured Results", desc: "We help companies achieve their goals, whether it's improving operations, cutting costs, or boosting profitability." },
              { title: "Top Quality", desc: "We are committed to providing reliable, affordable energy and we're proud of it!" },
              { title: "Experience", desc: "We're professionals who make sure you have the latest technology and services for your home or business." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white border border-border hover:border-primary transition-colors text-center"
              >
                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transition to clean energy?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">Partner with UVMAR Clean Energy for reliable, high-performance solar infrastructure.</p>
          <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 rounded-none h-14 px-8 text-lg font-medium">
            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
