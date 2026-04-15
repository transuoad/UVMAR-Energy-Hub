import { motion } from "framer-motion";
import { Link } from "wouter";
import { Building2, Landmark, GraduationCap, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Company Profile</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              UVMAR Clean Energy (formerly Aditya Energy) represents excellence in renewable infrastructure. We build enduring assets for India's leading institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Experience & Capabilities</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  With a track record of executing complex solar projects across varied terrains and industrial environments, UVMAR has established itself as a preferred EPC partner.
                </p>
                <p>
                  Our multi-disciplinary team brings together expertise in electrical engineering, civil structural design, project management, and regulatory compliance. We don't just build solar plants; we navigate the intricate landscape of government approvals and grid connectivity to ensure seamless commissioning.
                </p>
                <div className="pt-6 mt-6 border-t border-border grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-black text-primary mb-2">100+ MW</div>
                    <div className="font-medium text-sm uppercase tracking-wider">Installed Capacity</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-primary mb-2">Pan-India</div>
                    <div className="font-medium text-sm uppercase tracking-wider">Operational Reach</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="/images/solar-workers.png" alt="Team at work" className="w-full h-64 object-cover" />
              <img src="/images/solar-closeup.png" alt="Solar Panels" className="w-full h-64 object-cover mt-12" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-gray-400 text-lg">Delivering specialized energy solutions tailored to sector-specific demands.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Manufacturing & Industrial",
                desc: "High-capacity solutions for energy-intensive manufacturing plants, optimizing operational costs."
              },
              {
                icon: Landmark,
                title: "Commercial Spaces",
                desc: "Rooftop and structural solar integrations for tech parks, malls, and commercial complexes."
              },
              {
                icon: GraduationCap,
                title: "Institutional",
                desc: "Reliable power solutions for universities, hospitals, and government facilities."
              }
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors"
              >
                <industry.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{industry.title}</h3>
                <p className="text-gray-400">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Profile CTA */}
      <section className="py-24 bg-primary text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want the full details?</h2>
          <p className="mb-10 max-w-2xl mx-auto text-lg font-medium opacity-80">
            Download our comprehensive corporate profile PDF including detailed project case studies, technical specifications, and company credentials.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 rounded-none h-14 px-8 text-lg">
              <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center">
                <Download className="mr-2 h-5 w-5" /> Download Corporate Profile
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white rounded-none h-14 px-8 text-lg">
              <Link href="/projects">View Projects Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
