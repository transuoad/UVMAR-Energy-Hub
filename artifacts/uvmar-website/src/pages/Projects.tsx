import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Zap, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Manufacturing Plant Solar Rooftop",
      type: "Rooftop Solar",
      location: "Pune, Maharashtra",
      capacity: "2.5 MW",
      year: "2023",
      image: "/images/rooftop-solar.png"
    },
    {
      id: 2,
      title: "Industrial Estate Ground-Mounted",
      type: "Ground-Mounted",
      location: "Nashik, Maharashtra",
      capacity: "5 MW",
      year: "2022",
      image: "/images/solar-array.png"
    },
    {
      id: 3,
      title: "Solapur Solar Park",
      type: "Solar Park",
      location: "Solapur, Maharashtra",
      capacity: "20 MW",
      year: "2021",
      image: "/images/solar-array.png"
    },
    {
      id: 4,
      title: "Commercial Complex Rooftop",
      type: "Rooftop Solar",
      location: "Mumbai, Maharashtra",
      capacity: "800 kW",
      year: "2023",
      image: "/images/rooftop-solar.png"
    },
    {
      id: 5,
      title: "Food Processing Plant Ground-Mounted",
      type: "Ground-Mounted",
      location: "Aurangabad, Maharashtra",
      capacity: "3 MW",
      year: "2022",
      image: "/images/solar-array.png"
    },
    {
      id: 6,
      title: "Agri-Industrial Zone Solar Park",
      type: "Solar Park",
      location: "Latur, Maharashtra",
      capacity: "10 MW",
      year: "2020",
      image: "/images/solar-array.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 bg-muted border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A showcase of our engineering excellence across rooftop, ground-mounted, and utility-scale installations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-border bg-white overflow-hidden hover:border-primary transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-primary text-black text-xs font-bold uppercase tracking-wider px-3 py-1">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 line-clamp-2">{project.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-3 text-primary" /> {project.location}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Zap className="w-4 h-4 mr-3 text-primary" /> {project.capacity} Capacity
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-3 text-primary" /> Commissioned {project.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
          <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 rounded-none h-14 px-8 text-lg font-medium">
            <Link href="/contact">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
