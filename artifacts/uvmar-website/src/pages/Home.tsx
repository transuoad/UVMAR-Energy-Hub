import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Factory, Zap, Sun, MapPin } from "lucide-react";
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
    <div className="flex flex-col min-h-screen page-top-offset">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-start md:items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={asset("/images/solar-array.png")}
            alt="Large Solar Array"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 relative pt-10 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-primary/40 bg-primary/10 backdrop-blur-sm text-primary uppercase tracking-widest text-xs font-semibold">
              Premium EPC Solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Let's make an important<br />
              change towards <span className="text-primary">the future.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Our innovative solutions make clean energy possible for households, businesses, property owners, and more.
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
      <section className="py-16 bg-primary text-black border-b-4 border-[#cba984]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/10">
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-sm font-medium uppercase tracking-wider opacity-80">Projects</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">40+</div>
              <div className="text-sm font-medium uppercase tracking-wider opacity-80">Corporate Clients</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">1.5 GW</div>
              <div className="text-sm font-medium uppercase tracking-wider opacity-80">Capacity Installed</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
              <div className="text-sm font-medium uppercase tracking-wider opacity-80">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">End-to-End Solar Capabilities</h2>
            <div className="w-12 h-1 bg-[#cba984] mx-auto mb-6" />
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
                link: "/services",
              },
              {
                icon: Sun,
                title: "Solar Parks",
                desc: "Plug-and-play infrastructure for captive and third-party sale models with complete regulatory support.",
                link: "/solar-park",
              },
              {
                icon: Zap,
                title: "Ground-Mounted",
                desc: "Utility-scale installations with rigorous site assessment, engineering, and grid connectivity.",
                link: "/services",
              },
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

      {/* Featured Projects */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
              <div className="w-12 h-1 bg-primary" />
            </div>
            <Link href="/projects" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary hover:opacity-80 transition-opacity shrink-0">
              View All 50+ Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group bg-white border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 z-20 flex gap-2">
                    <span className="bg-primary text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                      {project.type}
                    </span>
                  </div>
                  {/* Prominent MW badge */}
                  <div className="absolute bottom-3 right-3 z-20">
                    <div className="bg-black/80 text-[#cba984] font-black text-2xl px-4 py-2 leading-none">
                      {project.capacity}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-3 line-clamp-2 leading-snug">{project.title}</h3>
                  <div className="space-y-1.5 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      {project.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-12 h-1 bg-[#cba984] mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">Trusted by India's leading renewable energy developers and industrial companies.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Our solar needs were fulfilled by Aditya Energy. The staff helped with property purchase, site approval, and solar panels. Our project benefited from their switchyard skills. We recommend Aditya Energy for renewable energy.",
                company: "Hinduja Renewables",
              },
              {
                quote: "We are thrilled to collaborate with Aditya Energy. They assist our small business in locating the greatest Transmission line Suppliers. We hope to continue working with them in the future because we had a wonderful experience.",
                company: "Hild Energy",
              },
              {
                quote: "Aditya Energy has performed admirably. They are highly competent and required minimal direction from us. I would recommend them to anyone who needs assistance obtaining utility approval for their projects.",
                company: "ReNew Power",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-8 border border-border hover:border-primary transition-colors relative"
              >
                <div className="text-5xl font-serif text-[#cba984]/40 leading-none mb-4">"</div>
                <p className="text-muted-foreground leading-relaxed mb-8 italic text-sm">{t.quote}</p>
                <div className="pt-5 border-t border-border flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                  <div className="font-bold text-foreground text-sm">{t.company}</div>
                </div>
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
                We are on a mission to provide energy to every corner of India.
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Over the past decade, solar energy has come a long way. We've partnered with leading renewable energy developers, manufacturing plants, commercial buildings, hospitals, and educational institutions across India.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Personalized — we help you maximise your energy use",
                  "Measured results — improving operations and cutting costs",
                  "Top quality — reliable and affordable energy solutions",
                  "Expertise in complex regulatory approvals and grid connectivity",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
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
                src={asset("/images/solar-workers.png")}
                alt="UVMAR Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              <div className="absolute -bottom-6 -left-6 w-56 bg-primary/20 backdrop-blur-xl border border-primary/30 p-6 flex flex-col justify-center">
                <div className="text-4xl font-bold text-primary mb-1">1.5 GW</div>
                <div className="text-xs font-semibold text-white uppercase tracking-wider">Capacity Installed</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#cba984]/10 border border-[#cba984]/30 backdrop-blur-xl p-4 hidden md:flex flex-col justify-center items-center text-center">
                <div className="text-2xl font-bold text-[#cba984] mb-1">5</div>
                <div className="text-xs font-semibold text-white/70 uppercase tracking-wider">States</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
