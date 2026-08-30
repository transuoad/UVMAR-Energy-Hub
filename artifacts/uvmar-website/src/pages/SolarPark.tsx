import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, CheckCircle2, MapPin, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";

const CLIENT_ALLOCATION = [
  { client: "Tagros Chemical India Pvt. Ltd.", capacity: "5 MW", image: "tagros-kovilpatti.jpg" },
  { client: "Aditya Rays Power", capacity: "2 MW", image: "aditya-rays-power-kovilpatti.jpg" },
  { client: "Texonic Instruments", capacity: "1 MW", image: "texonic-kovilpatti.jpg" },
  { client: "Coimbatore Roller Flour Mill", capacity: "1 MW", image: "coimbatore-roller-flour-mill-kovilpatti.jpg" },
  { client: "Sahuwala Flour Mills", capacity: "1 MW", image: "sahuwala-flour-mills-kovilpatti.jpg" },
];

const PROJECT_PHOTOS = [
  {
    src: "control-room-kovilpatti.jpg",
    alt: "Control room and solar park electrical infrastructure at Kovilpatti",
    label: "Control Room / Solar Park",
    className: "md:row-span-2",
  },
  ...CLIENT_ALLOCATION.map((project) => ({
    src: project.image,
    alt: `${project.client} solar park reference at Kovilpatti`,
    label: project.client,
    className: "",
  })),
];

export default function SolarPark() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Project hero */}
      <section className="relative min-h-[620px] flex items-end bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={asset("/images/solar-park/tagros-kovilpatti.jpg")}
            alt="Ground-mounted solar PV installation at Kovilpatti"
            className="w-full h-full object-cover opacity-35 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/30" />
          <div className="absolute inset-0 structural-grid-dark opacity-30" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-primary block" />
              <span className="text-primary uppercase tracking-widest text-xs font-bold flex items-center gap-2">
                <Sun className="w-3.5 h-3.5" /> Project Documentation
              </span>
            </div>
            <p className="text-primary uppercase tracking-[0.25em] text-xs font-bold mb-5">Kovilpatti Site</p>
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-8 leading-[1.05] tracking-tight">
              10 MW<br />
              <span className="text-primary italic font-light">Solar Park.</span>
            </h1>
            <p className="text-xl text-secondary-foreground/75 leading-relaxed font-light max-w-2xl">
              Ground-Mounted Solar PV Project with client-wise capacity allocation at the Kovilpatti site.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 right-0 hidden lg:flex items-center gap-4 border-l border-t border-white/15 bg-secondary/70 backdrop-blur-sm px-8 py-5">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-xs uppercase tracking-widest font-bold">Kovilpatti, Tamil Nadu</span>
        </div>
      </section>

      {/* Project summary */}
      <section className="py-20 bg-background border-b border-border relative">
        <div className="absolute inset-0 structural-grid opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-primary block" />
                <span className="text-primary uppercase tracking-widest text-xs font-bold">Project Profile</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 max-w-2xl">
                One site, five commercial allocations.
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
                This ground-mounted solar PV project at Kovilpatti brings together a 10 MW solar park and a client-wise capacity allocation model for commercial and industrial power consumers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-5 grid grid-cols-2 border-t border-l border-border"
            >
              {[
                { value: "10 MW", label: "Total capacity", icon: Zap },
                { value: "5", label: "Client allocations", icon: CheckCircle2 },
                { value: "Kovilpatti", label: "Project site", icon: MapPin },
                { value: "PV", label: "Ground-mounted system", icon: Sun },
              ].map((stat) => (
                <div key={stat.label} className="border-r border-b border-border p-6 bg-card">
                  <stat.icon className="w-5 h-5 text-primary mb-8" strokeWidth={1.5} />
                  <div className="font-display text-2xl md:text-3xl font-medium mb-2">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Allocation table */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4">
              <div className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Capacity Allocation</div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Client-wise project structure</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                The Kovilpatti solar park is documented through its client-wise capacity allocation, with the full site representing 10 MW of ground-mounted solar PV infrastructure.
              </p>
            </div>

            <div className="lg:col-span-8 min-w-0 max-w-full border border-border bg-background">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] text-left border-collapse">
                  <caption className="sr-only">Client-wise capacity allocation for the 10 MW Kovilpatti solar park</caption>
                  <thead>
                    <tr className="border-b border-border bg-muted/60">
                      <th scope="col" className="px-6 py-5 text-[10px] uppercase tracking-widest font-bold text-muted-foreground w-20">S.No</th>
                      <th scope="col" className="px-6 py-5 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Client Name</th>
                      <th scope="col" className="px-6 py-5 text-[10px] uppercase tracking-widest font-bold text-muted-foreground text-right">Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CLIENT_ALLOCATION.map((project, index) => (
                      <tr key={project.client} className="border-b border-border last:border-0">
                        <td className="px-6 py-6 font-display text-lg text-primary">{String(index + 1).padStart(2, "0")}</td>
                        <th scope="row" className="px-6 py-6 font-medium text-foreground text-sm md:text-base whitespace-nowrap">{project.client}</th>
                        <td className="px-6 py-6 text-right font-display text-lg font-medium">{project.capacity}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th scope="row" colSpan={2} className="px-6 py-6 text-left text-[10px] uppercase tracking-widest font-bold">Total</th>
                      <td className="px-6 py-6 text-right text-xl font-display font-medium text-primary">10 MW</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site photography */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Site Documentation</div>
              <h2 className="text-3xl md:text-5xl font-display font-medium">Kovilpatti in the field</h2>
            </div>
            <p className="text-muted-foreground font-light max-w-md leading-relaxed">
              Site photography documenting the solar park, client references, and control-room infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 auto-rows-[220px]">
            {PROJECT_PHOTOS.map((photo, index) => (
              <motion.figure
                key={photo.src}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.06, 0.35) }}
                className={`relative overflow-hidden border border-border bg-muted group ${photo.className}`}
              >
                <img
                  src={asset(`/images/solar-park/${photo.src}`)}
                  alt={photo.alt}
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  loading={index > 2 ? "lazy" : "eager"}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pt-12 pb-5 text-white text-xs font-bold tracking-wide">
                  {photo.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Project takeaway */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Project Reference</div>
              <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight">A clear view of the asset behind the allocation.</h2>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {[
                "Ground-mounted solar PV project",
                "10 MW total capacity",
                "Client-wise capacity allocation",
                "Control room and electrical infrastructure",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 border border-white/15 p-5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-secondary-foreground/80 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Explore a solar park for your enterprise</h2>
          <p className="mb-10 max-w-2xl mx-auto text-lg text-primary-foreground/90 font-light">
            Speak with UVMAR about site development, capacity planning, and end-to-end solar infrastructure.
          </p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold">
            <Link href="/contact">Schedule a Consultation <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}