import { motion } from "framer-motion";
import { Link } from "wouter";
import { Sun, CheckCircle2, TrendingUp, Handshake, Leaf, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";

export default function SolarPark() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={asset("/images/solar-array.png")} alt="Utility-Scale Solar Park" className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-gold block" />
              <span className="text-gold uppercase tracking-widest text-xs font-bold flex items-center gap-2">
                <Sun className="w-3.5 h-3.5" /> Flagship Offering
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-8 leading-[1.1] tracking-tight">
              Utility-Scale<br />Solar Parks
            </h1>
            <p className="text-xl text-secondary-foreground/70 leading-relaxed font-light max-w-2xl">
              Dedicated, plug-and-play renewable infrastructure enabling industries to meet their energy needs without land acquisition challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview & Opportunity */}
      <section className="py-24 bg-background border-b border-border relative">
        <div className="absolute inset-0 structural-grid opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-8">The Market Opportunity</h2>
              <div className="prose prose-lg prose-neutral max-w-none text-muted-foreground font-light leading-relaxed">
                <p>
                  With India's commitment to achieving 500 GW of renewable energy by 2030, solar parks present the most scalable solution for industrial consumers.
                </p>
                <p>
                  Many businesses lack the rooftop space necessary to offset their energy consumption entirely. Solar parks solve this by providing centralized, ready-to-use infrastructure where companies can set up their own capacity or procure power through specialized business models.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-6 bg-card border border-border p-10"
            >
              <h3 className="text-xl font-display font-medium mb-8 uppercase tracking-widest text-foreground text-xs">Regulatory Tailwinds</h3>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <TrendingUp className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Accelerated Depreciation</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Significant tax benefits under section 32 of IT Act for investing in renewable assets.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <Handshake className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">PM-KUSUM & Open Access</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Favorable regulatory frameworks allowing seamless power wheeling via state grids.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <Leaf className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">RPO Compliance</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Helps obligated entities meet their Renewable Purchase Obligations efficiently.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Models */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Engagement Models</h2>
            <p className="text-lg font-light text-muted-foreground">Flexible commercial structures engineered to suit specific financial and operational requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
              <div key={i} className="bg-background border border-border p-10 hover:border-foreground transition-colors">
                <div className="text-primary font-display text-4xl font-light mb-6">0{i+1}</div>
                <h3 className="text-xl font-display font-medium mb-4 text-foreground">{model.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-light">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UVMAR's Role */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square lg:aspect-auto lg:h-[600px] border border-border bg-muted overflow-hidden relative">
               <img src={asset("/images/solar-array.png")} alt="Solar Park Infrastructure" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />
               <div className="absolute inset-0 border-[20px] border-background/20 pointer-events-none" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-8">The UVMAR Advantage</h2>
              <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
                Developing a solar park requires navigating a maze of regulatory, civil, and electrical complexities. UVMAR handles the entire lifecycle, providing a true plug-and-play experience for investors and power consumers.
              </p>
              <div className="grid gap-4">
                {[
                  "Land identification and acquisition",
                  "Topographical surveys and geotechnical investigations",
                  "Evacuation infrastructure and transmission lines",
                  "Liaison with nodal agencies (MSEDCL, MEDA, TANGEDCO)",
                  "Complete EPC of the solar plant",
                  "Long-term Operations & Maintenance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 border border-border p-4 bg-card">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" strokeWidth={2} />
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Invest in Energy Independence</h2>
          <p className="mb-10 max-w-2xl mx-auto text-lg text-primary-foreground/90 font-light">Contact our commercial division to discuss the viability of a solar park investment for your enterprise.</p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold">
            <Link href="/contact">Schedule a Consultation <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
