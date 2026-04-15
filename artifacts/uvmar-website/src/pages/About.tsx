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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Pioneering Clean Energy Solutions</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded with a vision to accelerate India's transition to clean energy. We bring decades of combined experience to deliver world-class solar infrastructure.
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

      {/* Chairman's Message */}
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
              <h2 className="text-3xl font-bold mb-8">Chairman's Vision</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-6">
                  "At UVMAR Clean Energy (formerly Aditya Energy), we recognize that the future of India's industrial growth is inextricably linked with sustainable energy practices. Our journey began with a simple but profound realization: building energy infrastructure is about building a legacy."
                </p>
                <p className="mb-6">
                  "We are not just installing panels; we are empowering industries to become self-reliant, reducing carbon footprints, and contributing to the nation's ambitious goal of 500 GW renewable energy by 2030."
                </p>
                <p>
                  "Our commitment to engineering precision and ethical business practices ensures that every project we undertake stands as a testament to our quality and reliability."
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-border">
                <div className="font-bold text-xl text-foreground">Leadership Team</div>
                <div className="text-primary mt-1">UVMAR Clean Energy</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide our every decision and project.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Excellence", desc: "Uncompromising quality in engineering, procurement, and construction." },
              { title: "Integrity", desc: "Transparent operations, honest reporting, and ethical business practices." },
              { title: "Sustainability", desc: "Commitment to long-term environmental health in all our endeavors." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-border hover:border-primary transition-colors text-center"
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
