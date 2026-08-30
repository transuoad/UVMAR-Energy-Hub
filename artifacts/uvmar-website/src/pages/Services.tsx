import { motion } from "framer-motion";
import { Link } from "wouter";
import { Factory, Sun, Zap, Wrench, FileCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";

const services = [
  {
    id: "epc",
    icon: Zap,
    title: "Engineering, Procurement & Construction",
    capacity: "End-to-End Execution",
    desc: "We provide end-to-end services from consultative sales and system design to equipment procurement, project management, installation, and commissioning of utility-scale plants.",
    features: ["Consultative sales", "System design & engineering", "Tier-1 equipment procurement", "Installation & commissioning"],
    image: asset("/images/solar-workers.png"),
  },
  {
    id: "rooftop",
    icon: Factory,
    title: "Roof Top Solar",
    capacity: "Industrial & Commercial",
    desc: "Turnkey EPC execution for large-scale industrial and commercial rooftops, including system design, structural integrity assessments, and net metering assistance.",
    features: ["Full EPC execution", "Net metering assistance", "Subsidy & documentation support", "Structural integrity assessment"],
    image: asset("/images/rooftop-solar.png"),
  },
  {
    id: "land",
    icon: Sun,
    title: "Land Procurement",
    capacity: "5 to 500 Acres",
    desc: "Strategic land identification and acquisition for solar parks, evaluating proximity to substations, terrain suitability, and grid evacuation feasibility.",
    features: ["Site identification & evaluation", "Proximity to substation assessment", "Evacuation feasibility study", "Purchase or lease options"],
    image: asset("/images/gallery/land-clearing.jpg"),
  },
  {
    id: "transmission",
    icon: Wrench,
    title: "Transmission Line Construction",
    capacity: "110/66/33/11 kV",
    desc: "Construction of dedicated power lines and evacuation infrastructure from plant switchyard to grid pooling substations across multiple voltage levels.",
    features: ["110/66/33/11 kV voltage levels", "Full evacuation infrastructure", "Land site to substation", "End-to-end project management"],
    image: asset("/images/gallery/bay-extension-grid.jpg"),
  },
  {
    id: "approvals",
    icon: FileCheck,
    title: "Regulatory Approvals",
    capacity: "Compliance & Liaisoning",
    desc: "Expert navigation of government bureaucracy to secure land mutations, Right of Way permissions, CEIG approvals, and utility interconnections.",
    features: ["Land & site approvals", "Right of Way permissions", "Utility & CEIG approvals", "Paperwork & mutation handling"],
    image: asset("/images/solar-array.png"),
  },
  {
    id: "om",
    icon: Wrench,
    title: "Operations & Maintenance",
    capacity: "Asset Management",
    desc: "Comprehensive post-commissioning support including preventive maintenance, performance monitoring, module cleaning, and billing adjustment management.",
    features: ["Post commissioning support", "Monthly billing adjustments", "Preventive maintenance", "SCADA performance monitoring"],
    image: asset("/images/solar-workers.png"),
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 structural-grid-dark opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-primary block" />
              <span className="text-primary uppercase tracking-widest text-xs font-bold">Capabilities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-8 leading-[1.1] tracking-tight">
              End-to-End<br />EPC Services
            </h1>
            <p className="text-xl text-secondary-foreground/70 leading-relaxed font-light max-w-2xl">
              We deliver comprehensive solar solutions, managing every aspect from initial site assessment and land procurement to final grid connection and ongoing maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-32">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? "" : "lg:grid-flow-col-dense"}`}
              >
                {/* Content */}
                <div className={idx % 2 !== 0 ? "lg:col-start-2" : "lg:col-start-1"}>
                  <div className="flex items-center gap-4 mb-6">
                    <service.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    <span className="font-bold text-xs tracking-widest uppercase text-muted-foreground">{service.capacity}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light">{service.desc}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="font-medium text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {service.id === "om" && (
                    <div className="mt-10">
                      <Button asChild variant="outline" className="rounded-none border-border hover:border-foreground uppercase tracking-widest text-xs font-bold h-12 px-6">
                        <Link href="/contact">Discuss O&M Requirements</Link>
                      </Button>
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className={idx % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-2 lg:row-start-1"}>
                  <div className="aspect-[4/3] bg-card border border-border relative overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 border-[16px] border-background/20 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EPC Process */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Our EPC Process</h2>
              <p className="text-muted-foreground text-lg font-light">A systematic approach ensuring quality, safety, and timely delivery on every project.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Engineering", desc: "Detailed site survey, shadow analysis, and optimized system design." },
              { step: "02", title: "Procurement", desc: "Sourcing Tier-1 components from globally trusted manufacturers." },
              { step: "03", title: "Construction", desc: "Expert installation following strict safety and quality protocols." },
              { step: "04", title: "Commissioning", desc: "Grid synchronization, testing, and official handover." },
            ].map((phase, i) => (
              <div key={i} className="p-8 border border-border bg-background relative overflow-hidden">
                <div className="text-[5rem] font-display font-medium text-muted/50 absolute top-2 right-4 leading-none pointer-events-none">{phase.step}</div>
                <h3 className="text-xl font-display font-medium mb-4 relative z-10">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Discuss Your Infrastructure Needs</h2>
          <p className="mb-10 max-w-2xl mx-auto text-lg opacity-90 font-light">
            Our engineers are ready to evaluate your site and propose an optimized solar solution tailored to your operational constraints.
          </p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold">
            <Link href="/contact">Request an Assessment <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
