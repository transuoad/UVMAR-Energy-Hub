import { motion } from "framer-motion";
import { Link } from "wouter";
import { Sun, CheckCircle2, ArrowRight, TrendingUp, Handshake, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SolarPark() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="/images/solar-array.png" alt="Solar Park" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-primary/20 border border-primary/50 text-primary text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
              <Sun className="w-4 h-4" /> Flagship Offering
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">Utility-Scale<br />Solar Parks</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Dedicated, plug-and-play renewable infrastructure enabling industries to meet their energy needs without land acquisition challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview & Opportunity */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Market Opportunity</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  With India's commitment to achieving 500 GW of renewable energy by 2030, solar parks present the most scalable solution for industrial consumers. 
                </p>
                <p>
                  Many businesses lack the rooftop space necessary to offset their energy consumption entirely. Solar parks solve this by providing centralized, ready-to-use infrastructure where companies can set up their own capacity or procure power through specialized business models.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-muted p-8 border border-border"
            >
              <h3 className="text-2xl font-bold mb-6 border-b border-border pb-4">Government Initiatives</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <TrendingUp className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground">Accelerated Depreciation</h4>
                    <p className="text-muted-foreground text-sm mt-1">Significant tax benefits under section 32 of IT Act for investing in renewable assets.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Handshake className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground">PM-KUSUM & Open Access</h4>
                    <p className="text-muted-foreground text-sm mt-1">Favorable regulatory frameworks allowing seamless power wheeling via state grids.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Leaf className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground">RPO Compliance</h4>
                    <p className="text-muted-foreground text-sm mt-1">Helps obligated entities meet their Renewable Purchase Obligations efficiently.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Models */}
      <section className="py-24 bg-primary text-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Models</h2>
            <p className="text-lg font-medium opacity-80">Flexible engagement structures to suit your financial and operational preferences.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Captive Model",
                desc: "You own 100% of the solar asset within our park. Power is generated and wheeled for your exclusive consumption, maximizing savings and tax benefits."
              },
              {
                title: "Group Captive",
                desc: "A consortium of consumers collectively own 26% equity and consume at least 51% of power generated, benefiting from cross-subsidy surcharge waivers."
              },
              {
                title: "Third-Party Sale",
                desc: "Procure power directly from an independent power producer operating within our park via a long-term Power Purchase Agreement (PPA) with zero upfront CAPEX."
              }
            ].map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black text-white p-8 border-t-4 border-white/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{model.title}</h3>
                <p className="text-gray-300 leading-relaxed">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UVMAR's Role */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] border border-border bg-muted overflow-hidden"
            >
               <img src="/images/solar-array.png" alt="Solar Park Infrastructure" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">The UVMAR Advantage</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Developing a solar park requires navigating a maze of regulatory, civil, and electrical complexities. UVMAR handles the entire lifecycle, providing a true plug-and-play experience.
              </p>
              <ul className="space-y-4">
                {[
                  "Land identification and acquisition",
                  "Topographical surveys and geotechnical investigations",
                  "Evacuation infrastructure and transmission lines",
                  "Liaison with MSEDCL, MEDA, and other nodal agencies",
                  "Complete EPC of the solar plant",
                  "Long-term Operations & Maintenance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-muted p-4 border border-border">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Invest in Your Energy Independence</h2>
          <p className="mb-10 max-w-2xl mx-auto text-lg text-gray-400">Contact our commercial team to discuss the viability of a solar park investment for your enterprise.</p>
          <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 rounded-none h-14 px-8 text-lg font-medium">
            <Link href="/contact">Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
