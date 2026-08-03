import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Zap, CheckCircle2, Clock, ArrowRight, Filter } from "lucide-react";
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
  { id: 45, client: "Harsha Abakus Solar (NLC India – TNEB Grid Connectivity)", type: "Liaisoning", capacity: 100, unit: "MW", location: "Virudhunagar, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "End-to-end government and utility liaison for 100 MW grid connectivity approvals — TNEB, CEIG, and land mutation." },
  { id: 46, client: "Hild Energy (TNEB Bay Extension & 110 kV Pooling Substation)", type: "Liaisoning", capacity: 100, unit: "MW", location: "Virudhunagar, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "Liaison for bay extension approvals and 110 kV pooling substation clearances across multiple authorities." },
  { id: 47, client: "Prathama Solarconnect Energy (TNEB & Revenue Dept)", type: "Liaisoning", capacity: 55, unit: "MW", location: "Sivaganga, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "Revenue department land mutation, patta transfer, and TNEB interconnection approvals for 55 MW project." },
  { id: 48, client: "Clean Max Enviro Energy – Right of Way Approvals", type: "Liaisoning", capacity: 50, unit: "MW", location: "Virudhunagar, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "Right of Way permissions for transmission corridor across multiple village revenue records — pooling substation connectivity." },
  { id: 49, client: "UVM Enterprises – Haryana DHBVN Grid Connectivity", type: "Liaisoning", capacity: 40, unit: "MW", location: "Haryana", status: "Completed", image: IMAGES.ground, desc: "Complete DHBVN grid connectivity liaison, CEIG approvals, and net metering registration for 40 MW Haryana plant." },
  { id: 50, client: "ITC Limited – Captive Power Open Access Registration", type: "Liaisoning", capacity: 12, unit: "MW", location: "Dindigul, Tamil Nadu", status: "Completed", image: IMAGES.ground, desc: "Open access registration, banking agreement, and TANGEDCO approvals for ITC's 12 MW captive solar installation." },
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
  }), []);

  const statusCounts = useMemo(() => ({
    "All Status": ALL_PROJECTS.length,
    "Completed": ALL_PROJECTS.filter(p => p.status === "Completed").length,
    "Ongoing": ALL_PROJECTS.filter(p => p.status === "Ongoing").length,
  }), []);

  const states = ["Tamil Nadu", "Karnataka", "Haryana", "Delhi", "Goa"];

  return (
    <div className="flex flex-col min-h-screen page-top-offset">
      {/* Header */}
      <section className="py-20 bg-secondary text-white border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-primary/40 bg-primary/10 text-primary uppercase tracking-widest text-xs font-semibold">
              Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              A complete showcase of ground-mounted and rooftop solar installations executed across India.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Stats Strip */}
      <section className="py-10 bg-primary text-black border-b-4 border-[#cba984]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-black/10">
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-black mb-1">{ALL_PROJECTS.length}+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Projects Delivered</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-black mb-1">{Math.round(totalMW).toLocaleString()}+ MW</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Capacity Installed</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-black mb-1">{states.length}</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">States</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-black mb-1">{statusCounts["Completed"]}</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Completed Projects</div>
            </div>
          </div>
        </div>
      </section>
      {/* Filter Bar */}
      <section className="py-6 bg-muted border-b border-border sticky top-20 z-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold uppercase tracking-wider shrink-0">
              <Filter className="w-3.5 h-3.5" /> Type:
            </span>
            {TYPE_FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setTypeFilter(f)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all border ${
                  typeFilter === f
                    ? "bg-primary text-black border-primary"
                    : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {f} ({typeCounts[f as keyof typeof typeCounts]})
              </button>
            ))}
            <div className="w-px h-5 bg-border mx-1 hidden md:block" />
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold uppercase tracking-wider shrink-0">
              Status:
            </span>
            {STATUS_FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setStatusFilter(f)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all border ${
                  statusFilter === f
                    ? f === "Ongoing"
                      ? "bg-[#cba984] text-black border-[#cba984]"
                      : "bg-primary text-black border-primary"
                    : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {f} {f !== "All Status" && `(${statusCounts[f as keyof typeof statusCounts]})`}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-sm text-muted-foreground mb-8 text-center">
            Showing <span className="font-bold text-foreground">{filtered.length}</span> projects
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.04, 0.4) }}
                className="group border border-border bg-white overflow-hidden hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Type badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="bg-primary text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                      {project.type}
                    </span>
                  </div>
                  {/* Status badge */}
                  <div className="absolute top-3 right-3 z-20">
                    {project.status === "Completed" ? (
                      <span className="bg-black/70 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-primary" /> Done
                      </span>
                    ) : (
                      <span className="bg-[#cba984] text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Ongoing
                      </span>
                    )}
                  </div>
                  {/* Capacity */}
                  <div className="absolute bottom-3 right-3 z-20">
                    <div className="bg-black/80 text-[#cba984] font-black text-lg px-3 py-1.5 leading-none">
                      {capacityLabel(project)}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold mb-2 line-clamp-2 leading-snug">{project.client}</h3>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{project.desc}</p>
                  <div className="pt-3 border-t border-border">
                    <div className="flex items-center text-muted-foreground text-xs">
                      <MapPin className="w-3.5 h-3.5 mr-2 text-primary shrink-0" /> {project.location}
                    </div>
                    <div className="flex items-center text-muted-foreground text-xs mt-1.5">
                      <Zap className="w-3.5 h-3.5 mr-2 text-primary shrink-0" /> {capacityLabel(project)} Capacity
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* States Covered */}
      <section className="py-14 bg-muted border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">States We'VE OperateD In</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {states.map(state => (
              <span key={state} className="bg-white border border-border px-5 py-2 text-sm font-semibold text-foreground">
                {state}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Ready to be our next project?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Our engineering team is ready to evaluate your site and propose an optimized solar solution.</p>
          <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 rounded-none h-14 px-8 text-lg font-medium">
            <Link href="/contact">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
