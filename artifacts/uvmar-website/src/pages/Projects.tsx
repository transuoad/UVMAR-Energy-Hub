import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Zap, CheckCircle2, Clock, Filter, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";

const IMAGES = {
  ground: asset("/images/solar-array.png"),
  rooftop: asset("/images/rooftop-solar.png"),
  workers: asset("/images/solar-workers.png"),
  closeup: asset("/images/solar-closeup.png"),
};

type ProjectType = "Ground-Mounted" | "Rooftop" | "Liaisoning";
type ProjectStatus = "Completed" | "Ongoing";

interface Project {
  id: number;
  client: string;
  type: ProjectType;
  capacity: number;
  unit: "MW" | "KW";
  location: string;
  status: ProjectStatus;
  image: string;
  desc: string;
}

const ALL_PROJECTS: Project[] = [
  // ── GROUND-MOUNTED · COMPLETED ────────────────────────────────────────────
  { id: 1, client: "RT Renewable Energy Private Limited", type: "Ground-Mounted", capacity: 15, unit: "MW", location: "Virudhunagar, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "15 MW ground-mounted plant — full EPC and grid evacuation by UVMAR." },
  { id: 2, client: "KAS Onsite Power Solutions LLP", type: "Ground-Mounted", capacity: 30, unit: "MW", location: "Dindigul, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "30 MW installation on agricultural land with elevated module mounting to allow dual land use." },
  { id: 3, client: "Harsha Abakus Solar (for Neyveli Lignite Corporation)", type: "Ground-Mounted", capacity: 100, unit: "MW", location: "Virudhunagar, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "100 MW plant commissioned for NLC India under Tamil Nadu's solar allocation scheme." },
  { id: 4, client: "NVR Energy", type: "Ground-Mounted", capacity: 20, unit: "MW", location: "Holalkere, Karnataka", status: "Completed", image: IMAGES.ground, desc: "20 MW plant in Karnataka's interior, completed with a zero-LTI safety record." },
  { id: 5, client: "Hild Energy (for Neyveli Lignite Corporation)", type: "Ground-Mounted", capacity: 100, unit: "MW", location: "Virudhunagar, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "100 MW project for NLC India — one of UVMAR's flagship large-scale commissions." },
  { id: 6, client: "Enrich Energy (for Neyveli Lignite Corporation)", type: "Ground-Mounted", capacity: 100, unit: "MW", location: "Ramanathapuram, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "100 MW plant in the high-irradiance Ramanathapuram belt for NLC India." },
  { id: 7, client: "NVR Energy", type: "Ground-Mounted", capacity: 100, unit: "MW", location: "Chennai, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "100 MW utility-scale plant with dedicated 33 kV switchyard and grid-tie commissioning." },
  { id: 8, client: "Narbheram Visharam", type: "Ground-Mounted", capacity: 100, unit: "MW", location: "Chennai, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "100 MW ground-mounted installation — full procurement, construction, and SCADA integration." },
  { id: 9, client: "ReNew Power", type: "Ground-Mounted", capacity: 100, unit: "MW", location: "Chennai, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "100 MW plant executed for ReNew Power, India's leading renewable energy IPP." },
  { id: 10, client: "Prozeal Green Energy", type: "Ground-Mounted", capacity: 15, unit: "MW", location: "Trichy, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "15 MW plant near Trichy with optimized tracker-free fixed-tilt design for low O&M cost." },
  { id: 11, client: "Tagros Chemicals India Private Limited", type: "Ground-Mounted", capacity: 5, unit: "MW", location: "Tuticorin, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "5 MW captive plant reducing grid dependency for Tagros's chemical manufacturing campus." },
  { id: 12, client: "Enerparc Solar Energy", type: "Ground-Mounted", capacity: 22, unit: "MW", location: "Ramanathapuram, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "22 MW grid-scale plant for Enerparc, achieving over 1.55 million units/month of generation." },
  { id: 13, client: "Amp Energy C&I Five Pvt Ltd", type: "Ground-Mounted", capacity: 15, unit: "MW", location: "Virudhunagar, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "15 MW commercial & industrial scale plant under Amp Energy's C&I portfolio." },
  { id: 14, client: "ITC Limited", type: "Ground-Mounted", capacity: 12, unit: "MW", location: "Dindigul, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "12 MW captive solar for ITC's manufacturing unit — contributing to their net-zero commitments." },
  { id: 15, client: "Pothys Private Limited", type: "Ground-Mounted", capacity: 5.2, unit: "MW", location: "Dindigul, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "5.2 MW plant for the Pothys retail group — powering stores and warehouses via open access." },
  { id: 16, client: "Prathama Solarconnect Energy Private Limited", type: "Ground-Mounted", capacity: 55, unit: "MW", location: "Sivaganga, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "55 MW plant with 110 kV substation bay, one of UVMAR's largest single-client EPC contracts." },
  { id: 17, client: "UVM Enterprises Private Limited", type: "Ground-Mounted", capacity: 40, unit: "MW", location: "Haryana", status: "Completed", image: IMAGES.ground, desc: "40 MW plant in Haryana — UVMAR's expansion beyond Tamil Nadu into North India." },
  { id: 18, client: "Coimbatore Roller Flour Mills", type: "Ground-Mounted", capacity: 1, unit: "MW", location: "Tuticorin, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "1 MW ground-mounted plant supplying captive power to a flour milling operation." },
  { id: 19, client: "Texonic Instruments", type: "Ground-Mounted", capacity: 1, unit: "MW", location: "Tuticorin, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "1 MW plant providing clean energy to an electronics instruments manufacturing plant." },
  { id: 20, client: "Sahuwala Flour Mills", type: "Ground-Mounted", capacity: 1, unit: "MW", location: "Tuticorin, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "1 MW captive solar installation significantly reducing energy costs for mill operations." },
  { id: 21, client: "Aditya Ray Power Private Limited", type: "Ground-Mounted", capacity: 2, unit: "MW", location: "Tuticorin, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "2 MW independently developed solar plant commissioned under open-access regulations." },
  { id: 22, client: "Torrent Saurya Urja 5 Private Limited", type: "Ground-Mounted", capacity: 9, unit: "MW", location: "Pudukkottai, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "9 MW plant for Torrent's renewable energy subsidiary — full EPC and grid commissioning." },
  { id: 23, client: "Sunsource Energy Private Limited", type: "Ground-Mounted", capacity: 15, unit: "MW", location: "Ramanathapuram, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "15 MW C&I open-access plant for Sunsource Energy's South India portfolio." },
  { id: 24, client: "Clean Max Enviro Energy Solutions – Pooling Substation", type: "Ground-Mounted", capacity: 50, unit: "MW", location: "Virudhunagar, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "50 MW plant with dedicated pooling substation, enabling multi-client grid evacuation." },
  { id: 25, client: "UVMAR Green Energies 6 Private Limited", type: "Ground-Mounted", capacity: 4, unit: "MW", location: "Pudukkottai, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "4 MW plant under UVMAR's own development arm — independently built and operated." },
  { id: 26, client: "Adithyas Renewables Private Limited", type: "Ground-Mounted", capacity: 3, unit: "MW", location: "Pudukkottai, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "3 MW solar installation for an independent power developer in Tamil Nadu's Pudukkottai district." },

  // ── GROUND-MOUNTED · ONGOING ───────────────────────────────────────────────
  { id: 27, client: "Torrent Urja 22 Private Limited", type: "Ground-Mounted", capacity: 15, unit: "MW", location: "Viluppuram, Tamil Nadu", status: "Ongoing", image: IMAGES.ground, desc: "15 MW plant currently under construction for Torrent's growing South India renewables portfolio." },
  { id: 28, client: "TrueRE Surya Private Limited", type: "Ground-Mounted", capacity: 100, unit: "MW", location: "Tuticorin, Tamil Nadu", status: "Ongoing", image: IMAGES.ground, desc: "100 MW large-scale project underway — set to become one of UVMAR's largest commissions." },
  { id: 29, client: "UVMAR Green Energie 9 Private Limited", type: "Ground-Mounted", capacity: 3, unit: "MW", location: "Viluppuram, Tamil Nadu", status: "Ongoing", image: IMAGES.ground, desc: "3 MW plant under UVMAR's own development pipeline in Viluppuram district." },
  { id: 30, client: "Torrent Urja 35 Private Limited", type: "Ground-Mounted", capacity: 3, unit: "MW", location: "Ramanathapuram, Tamil Nadu", status: "Ongoing", image: IMAGES.ground, desc: "3 MW solar project in Ramanathapuram, expanding Torrent's captive generation capacity." },
  { id: 31, client: "Jain Green Technologies Private Limited", type: "Ground-Mounted", capacity: 7, unit: "MW", location: "Ramanathapuram, Tamil Nadu", status: "Ongoing", image: IMAGES.ground, desc: "7 MW plant currently in construction phase — scheduled for commissioning in 2025." },
  { id: 32, client: "Ultron Solar Park", type: "Ground-Mounted", capacity: 15, unit: "MW", location: "Thanjavur, Tamil Nadu", status: "Ongoing", image: IMAGES.ground, desc: "15 MW solar park under development in Thanjavur's fertile delta region." },
  { id: 33, client: "UVMAR Renewable Technology Solutions Global LLP", type: "Ground-Mounted", capacity: 12, unit: "MW", location: "Sivagangai, Tamil Nadu", status: "Ongoing", image: IMAGES.ground, desc: "12 MW plant under UVMAR's global LLP arm — advancing the company's owned-asset pipeline." },
  { id: 34, client: "Torrent Urja 14 Private Limited", type: "Ground-Mounted", capacity: 50, unit: "MW", location: "Pudukkottai, Tamil Nadu", status: "Ongoing", image: IMAGES.ground, desc: "50 MW project for Torrent — under active construction with commissioning targeted for 2025." },

  // ── ROOFTOP · COMPLETED ───────────────────────────────────────────────────
  { id: 35, client: "Sundaram Auto Components Limited", type: "Rooftop", capacity: 744, unit: "KW", location: "Hosur, Tamil Nadu", status: "Completed", image: IMAGES.rooftop, desc: "744 KW rooftop system on a major auto components plant — cutting peak power costs significantly." },
  { id: 36, client: "TVS – Srichara", type: "Rooftop", capacity: 296, unit: "KW", location: "Madurai, Tamil Nadu", status: "Completed", image: IMAGES.rooftop, desc: "296 KW rooftop installation for TVS group's Srichara plant in Madurai." },
  { id: 37, client: "Hindustan Unilever Limited", type: "Rooftop", capacity: 852, unit: "KW", location: "Hosur, Tamil Nadu", status: "Completed", image: IMAGES.rooftop, desc: "852 KW rooftop solar supporting HUL's sustainability commitments at their Hosur factory." },
  { id: 38, client: "Michelin India Private Limited", type: "Rooftop", capacity: 3.3, unit: "MW", location: "Chennai, Tamil Nadu", status: "Completed", image: IMAGES.rooftop, desc: "3.3 MW large rooftop installation on Michelin's tyre manufacturing campus — UVMAR's largest rooftop." },
  { id: 39, client: "L. Balakrishna & Bros", type: "Rooftop", capacity: 1.4, unit: "MW", location: "Coimbatore, Tamil Nadu", status: "Completed", image: IMAGES.rooftop, desc: "1.4 MW rooftop system across multiple sheds, reducing grid dependency for this textile group." },
  { id: 40, client: "Riddhi Auto Tech Private Limited", type: "Rooftop", capacity: 215, unit: "KW", location: "Delhi", status: "Completed", image: IMAGES.rooftop, desc: "215 KW rooftop installation for an automotive technology firm in Delhi — UVMAR's North India rooftop." },
  { id: 41, client: "A.W. Faber-Castell India Private Limited", type: "Rooftop", capacity: 280, unit: "KW", location: "Goa", status: "Completed", image: IMAGES.rooftop, desc: "280 KW rooftop system for the iconic stationery brand's Indian manufacturing facility in Goa." },
  { id: 42, client: "Royal Welding Wires Private Limited", type: "Rooftop", capacity: 300, unit: "KW", location: "Chengalpattu, Tamil Nadu", status: "Completed", image: IMAGES.rooftop, desc: "300 KW rooftop on a welding consumables manufacturing plant near Chennai." },
  { id: 43, client: "Anand Jain School", type: "Rooftop", capacity: 10, unit: "KW", location: "Chennai, Tamil Nadu", status: "Completed", image: IMAGES.rooftop, desc: "10 KW educational institution solar installation — helping students learn about clean energy." },
  { id: 44, client: "Shasun Jain College", type: "Rooftop", capacity: 42, unit: "KW", location: "Chennai, Tamil Nadu", status: "Completed", image: IMAGES.rooftop, desc: "42 KW campus solar providing daytime power to classrooms and administrative blocks." },

  // ── LIAISONING · COMPLETED ───────────────────────────────────────────────
  { id: 45, client: "Harsha Abakus Solar", type: "Liaisoning", capacity: 100, unit: "MW", location: "Virudhunagar, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "End-to-end government and utility liaison for 100 MW grid connectivity approvals — TNEB, CEIG, and land mutation." },
  { id: 46, client: "Hild Energy", type: "Liaisoning", capacity: 100, unit: "MW", location: "Virudhunagar, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "Liaison for bay extension approvals and 110 kV pooling substation clearances across multiple authorities." },
  { id: 47, client: "Prathama Solarconnect Energy", type: "Liaisoning", capacity: 55, unit: "MW", location: "Sivaganga, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "Revenue department land mutation, patta transfer, and TNEB interconnection approvals for 55 MW project." },
  { id: 48, client: "Clean Max Enviro Energy", type: "Liaisoning", capacity: 50, unit: "MW", location: "Virudhunagar, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "Right of Way permissions for transmission corridor across multiple village revenue records — pooling substation connectivity." },
  { id: 49, client: "UVM Enterprises", type: "Liaisoning", capacity: 40, unit: "MW", location: "Haryana", status: "Completed", image: IMAGES.ground, desc: "Complete DHBVN grid connectivity liaison, CEIG approvals, and net metering registration for 40 MW Haryana plant." },
  { id: 50, client: "ITC Limited", type: "Liaisoning", capacity: 12, unit: "MW", location: "Dindigul, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "Open access registration, banking agreement, and TANGEDCO approvals for ITC's 12 MW captive solar installation." },
];

const TYPE_FILTERS = ["All", "Ground-Mounted", "Rooftop", "Liaisoning"] as const;
const STATUS_FILTERS = ["All Status", "Completed", "Ongoing"] as const;
type TypeFilter = typeof TYPE_FILTERS[number];
type StatusFilter = typeof STATUS_FILTERS[number];

function capacityMW(p: Project) {
  return p.unit === "KW" ? p.capacity / 1000 : p.capacity;
}

function capacityLabel(p: Project) {
  return `${p.capacity} ${p.unit}`;
}

export default function Projects() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("All");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All Status");

  const filtered = useMemo(() =>
    ALL_PROJECTS.filter(p =>
      (typeFilter === "All" || p.type === typeFilter) &&
      (statusFilter === "All Status" || p.status === statusFilter)
    ),
    [typeFilter, statusFilter]
  );

  const totalMW = useMemo(() =>
    ALL_PROJECTS.reduce((sum, p) => sum + capacityMW(p), 0),
    []
  );

  const typeCounts = useMemo(() => ({
    "All": ALL_PROJECTS.length,
    "Ground-Mounted": ALL_PROJECTS.filter(p => p.type === "Ground-Mounted").length,
    "Rooftop": ALL_PROJECTS.filter(p => p.type === "Rooftop").length,
    "Liaisoning": ALL_PROJECTS.filter(p => p.type === "Liaisoning").length,
  }), []);

  const statusCounts = useMemo(() => ({
    "All Status": ALL_PROJECTS.length,
    "Completed": ALL_PROJECTS.filter(p => p.status === "Completed").length,
    "Ongoing": ALL_PROJECTS.filter(p => p.status === "Ongoing").length,
  }), []);

  const states = ["Tamil Nadu", "Karnataka", "Haryana", "Delhi", "Goa"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-secondary text-secondary-foreground border-b border-border overflow-hidden">
        <div className="absolute inset-0 structural-grid-dark opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-primary block" />
              <span className="text-primary uppercase tracking-widest text-xs font-bold">Track Record</span>
              <span className="w-12 h-[2px] bg-primary block" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-8 leading-[1.1] tracking-tight">
              Projects Portfolio
            </h1>
            <p className="text-xl text-secondary-foreground/70 leading-relaxed font-light">
              A comprehensive directory of utility-scale and rooftop solar installations engineered and executed across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            <div className="py-8 px-4 text-center">
              <div className="text-4xl font-display font-medium mb-1">{ALL_PROJECTS.length}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="py-8 px-4 text-center">
              <div className="text-4xl font-display font-medium mb-1">{Math.round(totalMW).toLocaleString()}+ <span className="text-xl">MW</span></div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Capacity Installed</div>
            </div>
            <div className="py-8 px-4 text-center">
              <div className="text-4xl font-display font-medium mb-1">{states.length}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">States Covered</div>
            </div>
            <div className="py-8 px-4 text-center">
              <div className="text-4xl font-display font-medium mb-1">{statusCounts["Completed"]}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Completed Assets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-card border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="flex flex-wrap gap-2 justify-center">
              {TYPE_FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setTypeFilter(f)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors border ${
                    typeFilter === f
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {f} <span className="opacity-60 ml-1">({typeCounts[f as keyof typeof typeCounts]})</span>
                </button>
              ))}
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div className="flex flex-wrap gap-2 justify-center">
              {STATUS_FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setStatusFilter(f)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors border ${
                    statusFilter === f
                      ? f === "Ongoing"
                        ? "bg-gold text-background border-gold"
                        : "bg-primary text-background border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {f} {f !== "All Status" && <span className="opacity-60 ml-1">({statusCounts[f as keyof typeof statusCounts]})</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.04, 0.4) }}
                className="group border border-border bg-card flex flex-col hover:border-foreground transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted border-b border-border">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background text-foreground border border-border text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-sm">
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    {project.status === "Completed" ? (
                      <span className="bg-primary text-background text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
                        <CheckCircle2 className="w-3 h-3" /> Done
                      </span>
                    ) : (
                      <span className="bg-gold text-background text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
                        <Clock className="w-3 h-3" /> Ongoing
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-foreground text-background font-display font-medium text-xl px-4 py-2 shadow-sm">
                      {capacityLabel(project)}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-display font-medium mb-3 leading-snug">{project.client}</h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed font-light">{project.desc}</p>
                  <div className="mt-auto pt-4 border-t border-border grid grid-cols-2 gap-4">
                    <div className="flex items-center text-muted-foreground text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 mr-2 text-primary shrink-0" /> <span className="truncate">{project.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-xs font-medium">
                      <Zap className="w-3.5 h-3.5 mr-2 text-primary shrink-0" /> {capacityLabel(project)} Capacity
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filtered.length === 0 && (
            <div className="text-center py-20 border border-border bg-card">
              <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => { setTypeFilter("All"); setStatusFilter("All Status"); }}
                className="mt-4 rounded-none uppercase tracking-widest text-xs font-bold"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Ready to execute your next project?</h2>
          <p className="mb-10 max-w-2xl mx-auto text-lg opacity-90 font-light">
            Our engineering team is ready to evaluate your site and propose an optimized infrastructure solution.
          </p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold">
            <Link href="/contact">Request a Quote <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
