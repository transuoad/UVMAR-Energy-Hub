import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Zap, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";

const IMAGES = {
  ground: asset("/images/solar-array.png"),
  rooftop: asset("/images/rooftop-solar.png"),
  workers: asset("/images/solar-workers.png"),
  closeup: asset("/images/solar-closeup.png"),
};

const ALL_PROJECTS = [
  { id: 1, title: "Pullaniackenpatti Village Solar Project", type: "Ground-Mounted", location: "Arupukottai, Tamil Nadu", capacity: 15, year: "March 2016", image: IMAGES.ground, desc: "15 MW ground-mounted plant commissioned under Tamil Nadu's first major solar allocation round." },
  { id: 2, title: "Ottanatham Village Solar Project", type: "Ground-Mounted", location: "Tuticorin, Tamil Nadu", capacity: 15, year: "March 2016", image: IMAGES.ground, desc: "Utility-scale installation leveraging Tamil Nadu's high solar irradiance in the southern belt." },
  { id: 3, title: "Viralipatti Village Solar Project", type: "Ground-Mounted", location: "Dindigul, Tamil Nadu", capacity: 30, year: "September 2016", image: IMAGES.ground, desc: "30 MW plant delivering clean power to TANGEDCO grid with full EPC and commissioning by UVMAR." },
  { id: 4, title: "Thoppalakarai Village Solar Project", type: "Ground-Mounted", location: "Arupukottai, Tamil Nadu", capacity: 100, year: "March 2017", image: IMAGES.ground, desc: "100 MW flagship project — one of Tamil Nadu's largest single-site ground-mounted installations." },
  { id: 5, title: "Kayathar Solar Park", type: "Ground-Mounted", location: "Thoothukudi, Tamil Nadu", capacity: 50, year: "June 2017", image: IMAGES.ground, desc: "50 MW park sited on dry wastelands with optimized DC:AC ratio for maximum energy yield." },
  { id: 6, title: "Tirunelveli Solar Power Plant", type: "Ground-Mounted", location: "Tirunelveli, Tamil Nadu", capacity: 20, year: "2018", image: IMAGES.ground, desc: "Grid-scale plant commissioned under state government's renewable energy procurement program." },
  { id: 7, title: "Trichy Grid-Scale Solar", type: "Ground-Mounted", location: "Tiruchirappalli, Tamil Nadu", capacity: 25, year: "2020", image: IMAGES.ground, desc: "25 MW project supporting Tamil Nadu's ambitious 23 GW solar capacity addition target." },
  { id: 8, title: "Erode Solar Power Plant", type: "Ground-Mounted", location: "Erode, Tamil Nadu", capacity: 15, year: "2021", image: IMAGES.ground, desc: "15 MW installation with single-axis trackers improving generation by 18% over fixed-tilt systems." },
  { id: 9, title: "Madurai Industrial Rooftop", type: "Rooftop", location: "Madurai, Tamil Nadu", capacity: 1.5, year: "2019", image: IMAGES.rooftop, desc: "Rooftop solar on a large manufacturing campus reducing grid dependency by 40%." },
  { id: 10, title: "Coimbatore Commercial Complex", type: "EPC", location: "Coimbatore, Tamil Nadu", capacity: 2, year: "2019", image: IMAGES.workers, desc: "Full EPC turnkey for a multi-storey commercial hub with net metering and monitoring platform." },
  { id: 11, title: "Tirupur Textile Mill Solar", type: "Rooftop", location: "Tirupur, Tamil Nadu", capacity: 4, year: "2021", image: IMAGES.rooftop, desc: "Rooftop installation across three factory sheds, cutting electricity cost by ₹1.2 Cr annually." },
  { id: 12, title: "Karur Hospital & Campus", type: "Rooftop", location: "Karur, Tamil Nadu", capacity: 0.5, year: "2022", image: IMAGES.rooftop, desc: "500 kW rooftop system providing reliable power to a 300-bed hospital round the clock." },
  { id: 13, title: "Salem Manufacturing Plant O&M", type: "O&M", location: "Salem, Tamil Nadu", capacity: 5, year: "2020", image: IMAGES.workers, desc: "Ongoing O&M contract with predictive maintenance protocols maintaining 99.1% plant availability." },
  { id: 14, title: "Jaisalmer Solar Farm Phase I", type: "Ground-Mounted", location: "Jaisalmer, Rajasthan", capacity: 100, year: "2018", image: IMAGES.ground, desc: "100 MW plant in the Thar Desert leveraging over 330 sunny days per year for peak generation." },
  { id: 15, title: "Jodhpur Utility Solar Plant", type: "Ground-Mounted", location: "Jodhpur, Rajasthan", capacity: 50, year: "2019", image: IMAGES.ground, desc: "DISCOM-tied 50 MW plant with 132 kV switchyard built and commissioned within 9 months." },
  { id: 16, title: "Barmer Desert Solar Park", type: "Ground-Mounted", location: "Barmer, Rajasthan", capacity: 150, year: "2019", image: IMAGES.ground, desc: "150 MW ultra-scale installation on semi-arid land with underground cable network." },
  { id: 17, title: "Bikaner Solar Power Project", type: "Ground-Mounted", location: "Bikaner, Rajasthan", capacity: 75, year: "2020", image: IMAGES.ground, desc: "75 MW project with bifacial modules capturing albedo effect to boost energy output by 12%." },
  { id: 18, title: "Nagaur Commercial Rooftop", type: "Rooftop", location: "Nagaur, Rajasthan", capacity: 3, year: "2021", image: IMAGES.rooftop, desc: "Multi-site rooftop aggregation project for a regional cement plant across production facilities." },
  { id: 19, title: "Jaipur IT Park Solar EPC", type: "EPC", location: "Jaipur, Rajasthan", capacity: 2, year: "2022", image: IMAGES.workers, desc: "Turnkey EPC for a tech campus achieving net-zero daytime power consumption with battery storage." },
  { id: 20, title: "Jodhpur Plant O&M Services", type: "O&M", location: "Jodhpur, Rajasthan", capacity: 50, year: "2019", image: IMAGES.workers, desc: "Long-term O&M contract with monthly performance benchmarking and remote SCADA monitoring." },
  { id: 21, title: "Kutch Solar Power Plant", type: "Ground-Mounted", location: "Kutch, Gujarat", capacity: 200, year: "2018", image: IMAGES.ground, desc: "200 MW flagship ground-mounted plant in the Kutch region, one of UVMAR's largest commissions." },
  { id: 22, title: "Morbi Industrial Rooftop", type: "Rooftop", location: "Morbi, Gujarat", capacity: 8, year: "2019", image: IMAGES.rooftop, desc: "8 MW rooftop across 12 ceramic manufacturing units, delivering captive power savings." },
  { id: 23, title: "Anand Agricultural Solar", type: "Ground-Mounted", location: "Anand, Gujarat", capacity: 10, year: "2020", image: IMAGES.ground, desc: "Agri-solar hybrid project supplying power to a dairy co-operative and surrounding villages." },
  { id: 24, title: "Gandhinagar Government Campus", type: "EPC", location: "Gandhinagar, Gujarat", capacity: 1, year: "2020", image: IMAGES.closeup, desc: "EPC for a state government secretariat campus under Gujarat's green building initiative." },
  { id: 25, title: "Vadodara Manufacturing Rooftop", type: "Rooftop", location: "Vadodara, Gujarat", capacity: 5, year: "2021", image: IMAGES.rooftop, desc: "5 MW rooftop retrofit on an existing factory, avoiding ₹80 L/yr in peak-demand charges." },
  { id: 26, title: "Surat Commercial Solar", type: "Rooftop", location: "Surat, Gujarat", capacity: 3.5, year: "2022", image: IMAGES.rooftop, desc: "Rooftop system across a textile trading complex with real-time energy dashboards for tenants." },
  { id: 27, title: "Mehsana Solar Farm", type: "Ground-Mounted", location: "Mehsana, Gujarat", capacity: 30, year: "2022", image: IMAGES.ground, desc: "30 MW utility plant adjacent to Mehsana substation for zero-loss grid evacuation." },
  { id: 28, title: "Kutch Solar O&M", type: "O&M", location: "Kutch, Gujarat", capacity: 200, year: "2018", image: IMAGES.workers, desc: "Comprehensive O&M with a dedicated site team, quarterly thermal imaging, and string-level monitoring." },
  { id: 29, title: "Nashik Industrial Solar", type: "Rooftop", location: "Nashik, Maharashtra", capacity: 7, year: "2020", image: IMAGES.rooftop, desc: "7 MW rooftop across auto-component factories reducing diesel DG dependency to near zero." },
  { id: 30, title: "Aurangabad Solar Plant", type: "Ground-Mounted", location: "Aurangabad, Maharashtra", capacity: 20, year: "2020", image: IMAGES.ground, desc: "20 MW ground-mounted plant on government-leased land supplying industrial zones via open access." },
  { id: 31, title: "Nagpur Solar Park", type: "Ground-Mounted", location: "Nagpur, Maharashtra", capacity: 40, year: "2021", image: IMAGES.ground, desc: "40 MW park with 220 kV pooling substation connecting to Maharashtra state grid." },
  { id: 32, title: "Solapur Grid Solar", type: "Ground-Mounted", location: "Solapur, Maharashtra", capacity: 25, year: "2021", image: IMAGES.ground, desc: "25 MW plant commissioned for a state DISCOM under competitive bidding at ₹2.14/kWh tariff." },
  { id: 33, title: "Mumbai Commercial EPC", type: "EPC", location: "Mumbai, Maharashtra", capacity: 1.5, year: "2022", image: IMAGES.closeup, desc: "Rooftop EPC for a high-rise commercial building with elevated mounting structures." },
  { id: 34, title: "Kolhapur Industrial Rooftop", type: "Rooftop", location: "Kolhapur, Maharashtra", capacity: 4, year: "2023", image: IMAGES.rooftop, desc: "4 MW system on a sugar processing plant, utilizing off-peak generation for auxiliary loads." },
  { id: 35, title: "Pune IT Campus Solar", type: "Rooftop", location: "Pune, Maharashtra", capacity: 2.5, year: "2022", image: IMAGES.rooftop, desc: "Rooftop installation on a software campus with EV charging integration." },
  { id: 36, title: "Kurnool Solar Park Phase I", type: "Ground-Mounted", location: "Kurnool, Andhra Pradesh", capacity: 100, year: "2018", image: IMAGES.ground, desc: "100 MW within the 1,000 MW Kurnool Ultra Mega Solar Park — the world's largest at commissioning." },
  { id: 37, title: "Anantapur Ground Solar", type: "Ground-Mounted", location: "Anantapur, Andhra Pradesh", capacity: 50, year: "2019", image: IMAGES.ground, desc: "50 MW plant in one of India's highest solar-irradiance districts, achieving 5.8 kWh/m²/day." },
  { id: 38, title: "Tirupati Commercial Solar EPC", type: "EPC", location: "Tirupati, Andhra Pradesh", capacity: 3, year: "2020", image: IMAGES.workers, desc: "EPC for a temple trust and commercial township, powering community facilities sustainably." },
  { id: 39, title: "Kadapa Solar Plant", type: "Ground-Mounted", location: "Kadapa, Andhra Pradesh", capacity: 30, year: "2021", image: IMAGES.ground, desc: "30 MW plant with fixed DC:AC ratio of 1.25, optimized for Kadapa's peak DNI window." },
  { id: 40, title: "Nellore Industrial Rooftop", type: "Rooftop", location: "Nellore, Andhra Pradesh", capacity: 6, year: "2022", image: IMAGES.rooftop, desc: "6 MW across a seafood processing cluster, reducing cold-chain electricity costs by 35%." },
  { id: 41, title: "Kurnool Solar O&M", type: "O&M", location: "Kurnool, Andhra Pradesh", capacity: 100, year: "2018", image: IMAGES.workers, desc: "Annual AMC with drone-based panel inspection and automated cleaning systems." },
  { id: 42, title: "Tumkur Solar Farm", type: "Ground-Mounted", location: "Tumkur, Karnataka", capacity: 40, year: "2019", image: IMAGES.ground, desc: "40 MW plant on red laterite soil, completed in 7 months with zero LTI safety record." },
  { id: 43, title: "Pavagada Solar Project", type: "Ground-Mounted", location: "Pavagada, Karnataka", capacity: 80, year: "2020", image: IMAGES.ground, desc: "80 MW contribution to the 2,050 MW Shakti Sthala Solar Park — Karnataka's largest." },
  { id: 44, title: "Bangalore Tech Park Rooftop", type: "Rooftop", location: "Bengaluru, Karnataka", capacity: 5, year: "2021", image: IMAGES.rooftop, desc: "5 MW rooftop on an IT SEZ campus, achieving LEED Gold certification contribution." },
  { id: 45, title: "Mysore Industrial Solar", type: "Ground-Mounted", location: "Mysuru, Karnataka", capacity: 10, year: "2021", image: IMAGES.ground, desc: "10 MW open-access plant supplying captive power to a pharma manufacturing cluster." },
  { id: 46, title: "Bellary Solar Plant", type: "Ground-Mounted", location: "Bellary, Karnataka", capacity: 35, year: "2022", image: IMAGES.ground, desc: "35 MW plant on mining buffer zones, converting idle land into clean energy assets." },
  { id: 47, title: "Hubli Commercial Solar EPC", type: "EPC", location: "Hubli, Karnataka", capacity: 2, year: "2023", image: IMAGES.closeup, desc: "Turnkey rooftop EPC for a regional retail chain headquarters with smart metering." },
  { id: 48, title: "Hyderabad IT Corridor Solar", type: "Rooftop", location: "Hyderabad, Telangana", capacity: 8, year: "2020", image: IMAGES.rooftop, desc: "8 MW multi-building rooftop aggregation in HITEC City with group net metering." },
  { id: 49, title: "Warangal Solar Project", type: "Ground-Mounted", location: "Warangal, Telangana", capacity: 25, year: "2021", image: IMAGES.ground, desc: "25 MW grid plant under TSGENCO's renewable purchase obligation fulfillment scheme." },
  { id: 50, title: "Nalgonda Solar Farm", type: "Ground-Mounted", location: "Nalgonda, Telangana", capacity: 20, year: "2021", image: IMAGES.ground, desc: "20 MW bifacial installation on limestone-rich terrain, with advanced anti-soiling coating." },
  { id: 51, title: "Karimnagar Industrial Solar", type: "Rooftop", location: "Karimnagar, Telangana", capacity: 3, year: "2022", image: IMAGES.rooftop, desc: "3 MW rooftop system for a steel rolling mill, offsetting 3,600 tonnes of CO₂ annually." },
  { id: 52, title: "Nizamabad Grid Solar", type: "Ground-Mounted", location: "Nizamabad, Telangana", capacity: 15, year: "2022", image: IMAGES.ground, desc: "15 MW plant with live SCADA integration connected to the Telangana SLDC control room." },
  { id: 53, title: "Rewa Ultra Solar Contribution", type: "Ground-Mounted", location: "Rewa, Madhya Pradesh", capacity: 50, year: "2020", image: IMAGES.ground, desc: "50 MW contribution to the historic 750 MW Rewa Ultra Mega Solar Project." },
  { id: 54, title: "Bhopal Campus EPC", type: "EPC", location: "Bhopal, Madhya Pradesh", capacity: 1.5, year: "2021", image: IMAGES.workers, desc: "EPC for a government university campus, powering hostels, labs, and administrative blocks." },
  { id: 55, title: "Indore Industrial Rooftop", type: "Rooftop", location: "Indore, Madhya Pradesh", capacity: 10, year: "2022", image: IMAGES.rooftop, desc: "10 MW across a pharma special economic zone, with remote O&M portal and predictive alerts." },
  { id: 56, title: "Haridwar Industrial Rooftop", type: "Rooftop", location: "Haridwar, Uttarakhand", capacity: 2, year: "2022", image: IMAGES.rooftop, desc: "2 MW system on FMCG manufacturing plant, with elevated structures accommodating existing skylights." },
  { id: 57, title: "Dehradun Campus Solar EPC", type: "EPC", location: "Dehradun, Uttarakhand", capacity: 1, year: "2023", image: IMAGES.closeup, desc: "Turnkey EPC for a private university campus targeting 60% solar self-sufficiency." },
];

const FILTERS = ["All", "Ground-Mounted", "Rooftop", "EPC", "O&M"] as const;
type Filter = typeof FILTERS[number];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered = useMemo(() =>
    activeFilter === "All" ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.type === activeFilter),
    [activeFilter]
  );

  const totalMW = useMemo(() =>
    ALL_PROJECTS.reduce((sum, p) => sum + p.capacity, 0),
    []
  );

  const filterCounts = useMemo(() => {
    const counts: Record<string, number> = { All: ALL_PROJECTS.length };
    FILTERS.slice(1).forEach(f => {
      counts[f] = ALL_PROJECTS.filter(p => p.type === f).length;
    });
    return counts;
  }, []);

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
              A showcase of engineering excellence across rooftop, ground-mounted, and utility-scale solar installations throughout India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-10 bg-primary text-black border-b-4 border-gold">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-black/10">
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-black mb-1">{ALL_PROJECTS.length}+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Projects Delivered</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-black mb-1">{totalMW.toLocaleString()}+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">MW Installed</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-black mb-1">9+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">States Covered</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-black mb-1">2015–2024</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Active Since</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-muted border-b border-border sticky top-20 z-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all border ${
                  activeFilter === f
                    ? "bg-primary text-black border-primary"
                    : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {f} <span className="opacity-60 font-normal">({filterCounts[f]})</span>
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
            {activeFilter !== "All" && <> · <span className="text-primary font-bold">{activeFilter}</span></>}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.4) }}
                className="group border border-border bg-white overflow-hidden hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 z-20 flex gap-2">
                    <span className="bg-primary text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                      {project.type}
                    </span>
                    <span className="bg-black/70 text-[#cba984] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                      {project.capacity} MW
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold mb-2 line-clamp-2 leading-snug">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{project.desc}</p>
                  <div className="space-y-1.5 pt-3 border-t border-border">
                    <div className="flex items-center text-muted-foreground text-xs">
                      <MapPin className="w-3.5 h-3.5 mr-2 text-primary shrink-0" /> {project.location}
                    </div>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Calendar className="w-3.5 h-3.5 mr-2 text-primary shrink-0" /> Commissioned {project.year}
                    </div>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Zap className="w-3.5 h-3.5 mr-2 text-primary shrink-0" /> {project.capacity} MW Capacity
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
