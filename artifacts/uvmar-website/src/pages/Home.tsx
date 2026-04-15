import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Factory, Zap, Sun } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/images/solar-array.png" 
            alt="Large Solar Array" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary uppercase tracking-widest text-xs font-semibold">
              Premium EPC Solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Building India's <br />
              <span className="text-primary">Clean Energy</span> Future
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              UVMAR Clean Energy engineers, procures, and constructs world-class solar infrastructure designed to last decades.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 rounded-none h-14 px-8 text-lg font-medium">
                <Link href="/contact">Partner With Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none h-14 px-8 text-lg font-medium">
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/10">
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-sm font-medium uppercase tracking-wider opacity-80">MW Installed</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-sm font-medium uppercase tracking-wider opacity-80">Projects Completed</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-sm font-medium uppercase tracking-wider opacity-80">Years Experience</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-sm font-medium uppercase tracking-wider opacity-80">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">End-to-End Solar Capabilities</h2>
            <p className="text-muted-foreground text-lg">
              From concept to commissioning, we deliver comprehensive solar solutions tailored to industrial, commercial, and utility-scale requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Factory,
                title: "Rooftop Solar",
                desc: "Turnkey EPC solutions for industrial and commercial rooftops, optimizing unused space for maximum yield.",
                link: "/services"
              },
              {
                icon: Sun,
                title: "Solar Parks",
                desc: "Plug-and-play infrastructure for captive and third-party sale models with complete regulatory support.",
                link: "/solar-park"
              },
              {
                icon: Zap,
                title: "Ground-Mounted",
                desc: "Utility-scale installations with rigorous site assessment, engineering, and grid connectivity.",
                link: "/services"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative bg-white p-10 border border-border hover:border-primary transition-colors"
              >
                <service.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 line-clamp-3">{service.desc}</p>
                <Link href={service.link} className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-black group-hover:text-primary transition-colors">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                We've partnered with leading manufacturing plants, commercial buildings, hospitals, and educational institutions across Maharashtra, Gujarat, Rajasthan, and Madhya Pradesh.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Rigorous quality control and safety standards",
                  "Proven track record of timely project delivery",
                  "Comprehensive O&M support",
                  "Expertise in complex regulatory approvals"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 rounded-none h-14 px-8">
                <Link href="/profile">Read Company Profile</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <img 
                src="/images/solar-workers.png" 
                alt="UVMAR Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 backdrop-blur-xl border border-primary/30 p-6 flex flex-col justify-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm font-medium text-white uppercase tracking-wider">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
