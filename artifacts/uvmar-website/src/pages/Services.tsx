import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Factory, Sun, Zap, Wrench, FileCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      id: "rooftop",
      icon: Factory,
      title: "Rooftop Solar Solutions",
      capacity: "1kW to 10MW+",
      desc: "Comprehensive EPC services for industrial and commercial rooftops. We transform unused roof space into productive energy assets.",
      features: ["Full EPC execution", "Net metering assistance", "Subsidy & documentation support", "Structural integrity assessment"]
    },
    {
      id: "ground",
      icon: Zap,
      title: "Ground-Mounted Solar",
      capacity: "Utility Scale",
      desc: "Large-scale solar installations designed for maximum yield and reliability, perfect for industries with available land.",
      features: ["Rigorous site assessment", "Land approvals & clearance", "Grid connectivity infrastructure", "Complete commissioning"]
    },
    {
      id: "parks",
      icon: Sun,
      title: "Solar Parks",
      capacity: "Dedicated Infrastructure",
      desc: "Plug-and-play solar park infrastructure allowing businesses to procure renewable energy without the hassle of land acquisition.",
      features: ["Ready land & grid connection", "Transmission lines", "Captive & Group Captive models", "Regulatory compliance"]
    },
    {
      id: "om",
      icon: Wrench,
      title: "Operations & Maintenance",
      capacity: "24/7 Monitoring",
      desc: "Ensuring your solar assets perform at peak efficiency throughout their 25+ year lifespan.",
      features: ["Preventive maintenance", "Real-time performance monitoring", "Annual Maintenance Contracts (AMC)", "Rapid fault resolution"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-primary font-bold tracking-wider uppercase mb-4 text-sm">Our Expertise</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">End-to-End EPC Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We deliver comprehensive solar solutions, managing every aspect from initial site assessment to final grid connection and ongoing maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full relative group">
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden border border-border">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
                    {/* Placeholder for service image - using the general ones provided */}
                    <img 
                      src={idx % 2 === 0 ? "/images/rooftop-solar.png" : "/images/solar-array.png"} 
                      alt={service.title}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 hidden md:block border border-border">
                    <service.icon className="w-12 h-12 text-primary mb-2" />
                    <div className="font-medium text-sm tracking-wider uppercase">{service.capacity}</div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4 md:hidden">
                    <service.icon className="w-8 h-8 text-primary" />
                    <span className="font-medium text-sm tracking-wider uppercase text-primary">{service.capacity}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.id === "parks" && (
                    <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-black">
                      <Link href="/solar-park">Learn More About Solar Parks</Link>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EPC Process */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our EPC Process</h2>
            <p className="text-gray-400 text-lg">A systematic approach ensuring quality, safety, and timely delivery.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Engineering", desc: "Detailed site survey, shadow analysis, and optimized system design." },
              { step: "02", title: "Procurement", desc: "Sourcing Tier-1 components from globally trusted manufacturers." },
              { step: "03", title: "Construction", desc: "Expert installation following strict safety and quality protocols." },
              { step: "04", title: "Commissioning", desc: "Grid synchronization, testing, and official handover." }
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-black text-white/5 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold mb-3 text-primary">{phase.title}</h3>
                <p className="text-gray-400">{phase.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-10 -right-4 w-8 h-[1px] bg-primary/30" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Discuss Your Project Requirements</h2>
          <p className="mb-10 max-w-2xl mx-auto text-lg opacity-80 font-medium">Our engineers are ready to evaluate your site and propose an optimized solar solution.</p>
          <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 rounded-none h-14 px-8 text-lg font-medium">
            <Link href="/contact">Request an Assessment <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
