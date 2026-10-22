import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Download, ExternalLink, FileText, Info, Maximize2, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset, cn } from "@/lib/utils";
import { DRAWINGS, NAMED_ALLOCATIONS, PARKS, PARKS_LIST_PDF, TOTAL_MW, type Drawing } from "@/data/solar-parks";
import { DrawingViewer } from "@/components/solar-parks/DrawingViewer";

const SEGMENT_TONES = ["bg-primary", "bg-gold", "bg-secondary", "bg-primary/60", "bg-gold/60", "bg-secondary/70"];

export default function SolarPark() {
  const [active, setActive] = useState(0);
  const [viewing, setViewing] = useState<Drawing | null>(null);
  const park = PARKS[active];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[620px] flex items-end bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img src={asset("/images/solar-park/control-room-kovilpatti.jpg")} alt="" aria-hidden className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/92 to-secondary/50" />
          <div className="absolute inset-0 structural-grid-dark opacity-40" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16 grid lg:grid-cols-12 gap-12 items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-primary block" />
              <span className="text-primary uppercase tracking-widest text-xs font-bold flex items-center gap-2"><Sun className="w-3.5 h-3.5" /> Solar Park Directory</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-8 leading-[1.05] tracking-tight">
              Five parks.<br /><span className="text-primary italic font-light">{TOTAL_MW} MW</span> on record.
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/75 leading-relaxed font-light max-w-2xl">
              The shared solar parks UVMAR works with, their client-wise capacity allocations, and the engineering drawings behind the work.
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <Button asChild size="lg" className="rounded-none h-12 px-6 text-xs uppercase tracking-widest font-bold">
                <a href="#directory" data-testid="link-hero-directory">View allocations</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none h-12 px-6 text-xs uppercase tracking-widest font-bold bg-transparent border-white/25 text-secondary-foreground hover:bg-white/10 hover:text-secondary-foreground">
                <a href="#drawings" data-testid="link-hero-drawings">Engineering layouts</a>
              </Button>
            </div>
          </motion.div>
          <motion.dl initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="lg:col-span-5 grid grid-cols-3 border-t border-l border-white/15">
            {[[String(PARKS.length), "Parks"], [`${TOTAL_MW} MW`, "Listed capacity"], [String(NAMED_ALLOCATIONS), "Named allocations"]].map(([v, l]) => (
              <div key={l} className="border-r border-b border-white/15 p-4 sm:p-6 bg-secondary/60 backdrop-blur-sm">
                <dd className="font-display text-2xl sm:text-4xl font-medium text-primary" data-testid={`stat-${l.toLowerCase().replace(/ /g, "-")}`}>{v}</dd>
                <dt className="text-[10px] uppercase tracking-widest font-bold text-secondary-foreground/60 mt-2">{l}</dt>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* Capacity strip */}
      <section className="bg-background border-b border-border py-14 relative">
        <div className="absolute inset-0 structural-grid opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-primary uppercase tracking-widest text-xs font-bold">Capacity across the portfolio</span>
            <span className="font-display text-sm text-muted-foreground">{TOTAL_MW} MW total</span>
          </div>
          <div className="flex h-16 border border-border bg-card">
            {PARKS.map((p, i) => (
              <motion.button
                key={p.name}
                onClick={() => { setActive(i); document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" }); }}
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                style={{ flexGrow: p.capacityMw, flexBasis: 0, transformOrigin: "left" }}
                className={cn("min-w-0 border-r border-border last:border-0 text-left px-2 sm:px-4 flex flex-col justify-center transition-colors", i === active ? "bg-secondary text-secondary-foreground" : "hover:bg-accent")}
                aria-label={`${p.name}, ${p.capacityMw} MW`}
                data-testid={`button-strip-${p.name.toLowerCase()}`}
              >
                <span className="font-display text-sm sm:text-base font-medium truncate">{p.name}</span>
                <span className={cn("text-[10px] font-bold tracking-widest", i === active ? "text-primary" : "text-muted-foreground")}>{p.capacityMw} MW</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Directory */}
      <section id="directory" className="py-24 bg-card border-b border-border scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 min-w-0">
              <div className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Client Allocations</div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Who holds capacity, park by park.</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Allocations as recorded in the supplied solar parks list. Select a park to see its client-wise split.
              </p>
              <div role="tablist" aria-label="Solar parks" className="flex lg:flex-col gap-2 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
                {PARKS.map((p, i) => (
                  <button
                    key={p.name}
                    role="tab"
                    aria-selected={i === active}
                    aria-controls="park-panel"
                    onClick={() => setActive(i)}
                    className={cn("shrink-0 flex items-center justify-between gap-6 border px-5 py-4 text-left transition-colors", i === active ? "border-secondary bg-secondary text-secondary-foreground" : "border-border bg-background hover:border-primary")}
                    data-testid={`tab-park-${p.name.toLowerCase()}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={cn("font-display text-xs", i === active ? "text-primary" : "text-muted-foreground")}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-display text-lg font-medium">{p.name}</span>
                    </span>
                    <span className="text-xs font-bold tracking-widest">{p.capacityMw} MW</span>
                  </button>
                ))}
              </div>
              <a href={asset(PARKS_LIST_PDF)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary hover:text-foreground transition-colors" data-testid="link-parks-list-pdf">
                <FileText className="w-4 h-4" /> Source: solar parks list (PDF) <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div id="park-panel" role="tabpanel" className="lg:col-span-8 min-w-0 border border-border bg-background">
              <AnimatePresence mode="wait">
                <motion.div key={park.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                  <div className="p-6 sm:p-8 border-b border-border flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-2">Solar park</div>
                      <h3 className="font-display text-4xl sm:text-5xl font-medium" data-testid="text-park-name">{park.name}</h3>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-4xl sm:text-5xl font-medium text-primary" data-testid="text-park-capacity">{park.capacityMw} MW</div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-1">{park.allocations.length} {park.allocations.length === 1 ? "allocation" : "allocations"}</div>
                    </div>
                  </div>
                  <div className="px-6 sm:px-8 pt-6">
                    <div className="flex h-3 w-full" aria-hidden>
                      {park.allocations.map((a, i) => (
                        <motion.span key={a.client} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }} style={{ flexGrow: a.capacityMw, flexBasis: 0, transformOrigin: "left" }} className={cn("border-r-2 border-background last:border-0", a.named ? SEGMENT_TONES[i % SEGMENT_TONES.length] : "bg-[repeating-linear-gradient(45deg,hsl(var(--border))_0_6px,transparent_6px_12px)]")} />
                      ))}
                    </div>
                  </div>
                  <ul className="p-6 sm:p-8 pt-4">
                    {park.allocations.map((a, i) => (
                      <li key={a.client} className="flex items-center gap-4 py-4 border-b border-border last:border-0" data-testid={`row-allocation-${park.name.toLowerCase()}-${i}`}>
                        <span className={cn("w-3 h-3 shrink-0", a.named ? SEGMENT_TONES[i % SEGMENT_TONES.length] : "border border-dashed border-muted-foreground")} />
                        <span className={cn("flex-1 min-w-0 break-words", a.named ? "font-medium" : "italic text-muted-foreground")}>{a.client}</span>
                        <span className="font-display text-lg font-medium tabular-nums shrink-0">{a.capacityMw} MW</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Full table */}
          <details className="mt-16 border border-border bg-background group">
            <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 text-xs uppercase tracking-widest font-bold" data-testid="button-toggle-full-table">
              All parks at a glance <span className="text-primary group-open:rotate-45 transition-transform text-lg leading-none">+</span>
            </summary>
            <div className="overflow-x-auto border-t border-border">
              <table className="w-full min-w-[480px] text-left border-collapse text-sm">
                <caption className="sr-only">Client allocations for all five solar parks</caption>
                <thead>
                  <tr className="bg-muted/60 border-b border-border">
                    {["Park", "Park capacity", "Client", "Allocation"].map((h, i) => (
                      <th key={h} scope="col" className={cn("px-5 py-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground", i % 2 && "text-right")}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PARKS.flatMap((p) => p.allocations.map((a, j) => (
                    <tr key={p.name + a.client} className={cn("border-b border-border", j === p.allocations.length - 1 && "border-b-foreground/20")}>
                      {j === 0 && <th scope="rowgroup" rowSpan={p.allocations.length} className="px-5 py-3 align-top font-display text-base font-medium">{p.name}</th>}
                      {j === 0 && <td rowSpan={p.allocations.length} className="px-5 py-3 align-top text-right font-display text-primary">{p.capacityMw} MW</td>}
                      <td className={cn("px-5 py-3", !a.named && "italic text-muted-foreground")}>{a.client}</td>
                      <td className="px-5 py-3 text-right tabular-nums">{a.capacityMw} MW</td>
                    </tr>
                  )))}
                </tbody>
                <tfoot>
                  <tr className="bg-secondary text-secondary-foreground">
                    <th scope="row" className="px-5 py-4 text-[10px] uppercase tracking-widest font-bold">Total</th>
                    <td className="px-5 py-4 text-right font-display text-lg text-primary">{TOTAL_MW} MW</td>
                    <td colSpan={2} className="px-5 py-4 text-right text-xs text-secondary-foreground/70">{NAMED_ALLOCATIONS} named client allocations</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </details>
        </div>
      </section>

      {/* Drawings */}
      <section id="drawings" className="py-24 bg-background relative scroll-mt-24">
        <div className="absolute inset-0 structural-grid opacity-40 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
            <div className="lg:col-span-7">
              <div className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Engineering Layouts</div>
              <h2 className="text-3xl md:text-5xl font-display font-medium">The drawings, unedited.</h2>
            </div>
            <div className="lg:col-span-5 flex gap-3 border-l-2 border-gold pl-5 text-sm text-muted-foreground leading-relaxed">
              <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <p>Presented as separate technical references. Directory capacities come from the supplied parks list; drawings may show different AC/DC ratings or scope, and are not mapped to specific parks above.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {DRAWINGS.map((d, i) => (
              <motion.article
                key={d.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.6 }}
                className="border border-border bg-card flex flex-col min-w-0"
                data-testid={`card-drawing-${d.id}`}
              >
                <button onClick={() => setViewing(d)} className="group relative block bg-muted/50 border-b border-border p-4 aspect-[4/3] overflow-hidden focus-visible:outline-2 focus-visible:outline-ring" aria-label={`Enlarge ${d.title} ${d.kind}`} data-testid={`button-view-${d.id}`}>
                  <img src={asset(d.image)} alt={d.alt} loading="lazy" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]" />
                  <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-[10px] uppercase tracking-widest font-bold px-3 py-1.5">Ref {String(i + 1).padStart(2, "0")}</span>
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-background/95 border border-border px-3 py-2 text-[10px] uppercase tracking-widest font-bold opacity-90 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" /> Inspect
                  </span>
                </button>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-primary text-[10px] uppercase tracking-widest font-bold mb-2">{d.kind}</div>
                  <h3 className="font-display text-2xl font-medium mb-4">{d.title}</h3>
                  <ul className="space-y-2 mb-6 flex-1">
                    {d.facts.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-muted-foreground"><span className="w-1.5 h-1.5 bg-gold mt-2 shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <a href={asset(d.pdf)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-10 px-4 border border-border text-[10px] uppercase tracking-widest font-bold hover:border-primary hover:text-primary transition-colors" data-testid={`link-open-pdf-${d.id}`}>
                      <ExternalLink className="w-3.5 h-3.5" /> Open PDF
                    </a>
                    <a href={asset(d.pdf)} download className="inline-flex items-center gap-2 h-10 px-4 border border-border text-[10px] uppercase tracking-widest font-bold hover:border-primary hover:text-primary transition-colors" data-testid={`link-download-pdf-${d.id}`}>
                      <Download className="w-3.5 h-3.5" /> Download
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <FileText className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
              <div>
                <div className="font-display text-lg font-medium">Solar parks list</div>
                <div className="text-sm text-muted-foreground">The source document for the directory above.</div>
              </div>
            </div>
            <div className="flex gap-2">
              <a href={asset(PARKS_LIST_PDF)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-10 px-4 bg-secondary text-secondary-foreground text-[10px] uppercase tracking-widest font-bold hover:bg-secondary/90" data-testid="link-open-parks-list"><ExternalLink className="w-3.5 h-3.5" /> Open PDF</a>
              <a href={asset(PARKS_LIST_PDF)} download className="inline-flex items-center gap-2 h-10 px-4 border border-border text-[10px] uppercase tracking-widest font-bold hover:border-primary hover:text-primary" data-testid="link-download-parks-list"><Download className="w-3.5 h-3.5" /> Download</a>
            </div>
          </div>
        </div>
      </section>

      <DrawingViewer drawing={viewing} onOpenChange={(o) => !o && setViewing(null)} />

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Evaluate a shared solar park for your enterprise</h2>
          <p className="mb-10 max-w-2xl mx-auto text-lg text-primary-foreground/90 font-light">
            Talk to UVMAR about capacity planning, park selection, and the engineering behind each site.
          </p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold">
            <Link href="/contact" data-testid="link-cta-contact">Schedule a Consultation <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
