import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowDown,
  ArrowUpRight,
  Cable,
  CheckCircle2,
  HardHat,
  Network,
  PanelTop,
  Settings2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";

type Category = "All" | "Solar Farms" | "Infrastructure" | "Team & Work";
type ProcessStageId = "prepare" | "install" | "electrical" | "grid" | "portfolio";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: Category;
  sourceUrl?: string | null;
}

const PROCESS_STAGES = [
  {
    id: "prepare",
    number: "01",
    eyebrow: "Groundwork",
    title: "Site preparation",
    description:
      "Every installation starts with an organized site. These field views show preparation, foundations, and the teams shaping a build-ready environment.",
    icon: HardHat,
  },
  {
    id: "install",
    number: "02",
    eyebrow: "Generation",
    title: "Solar installation",
    description:
      "From rooftop systems to larger solar plants, this stage brings the generating assets into view through installation and site photography.",
    icon: PanelTop,
  },
  {
    id: "electrical",
    number: "03",
    eyebrow: "Control",
    title: "Electrical systems",
    description:
      "Control rooms, panels, transformers, breakers, and testing are the working layers that support dependable solar infrastructure.",
    icon: Settings2,
  },
  {
    id: "grid",
    number: "04",
    eyebrow: "Integration",
    title: "Grid infrastructure",
    description:
      "Substation bays, pole yards, towers, and transmission lines connect the project’s field work to the wider electrical network.",
    icon: Network,
  },
  {
    id: "portfolio",
    number: "05",
    eyebrow: "Across the field",
    title: "Site portfolio",
    description:
      "A wider view of UVMAR’s field work, bringing together the site perspectives that do not belong to one single installation stage.",
    icon: Cable,
  },
] as const;

const getProcessStage = (item: GalleryItem): ProcessStageId => {
  const source = `${item.src} ${item.caption}`.toLowerCase();

  if (
    /sitecleaning|foundation|eppothumventan-site|inventor-foundation/.test(source)
  ) {
    return "prepare";
  }

  if (
    /solar-panel|roof-top|rooftop|solar-power-plant|plant-|faber-castle|riddhi-noida|uvmar-green|idt-4mw/.test(
      source,
    )
  ) {
    return "install";
  }

  if (
    /33kv|4-pole|4pole|bay|gss|pss|transmission|substation|tower|polling/.test(
      source,
    )
  ) {
    return "grid";
  }

  if (/control|transformer|sf6|vcb|outdoor-lt|relay|relly|breaker/.test(source)) {
    return "electrical";
  }

  return "portfolio";
};

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [galleryError, setGalleryError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch(asset("/images/gallery/drive-manifest.json"))
      .then((response) => {
        if (!response.ok) throw new Error("Gallery manifest could not be loaded");
        return response.json() as Promise<GalleryItem[]>;
      })
      .then((items) => {
        if (!isMounted) return;
        setGalleryItems(items.map((item) => ({ ...item, src: asset(item.src) })));
      })
      .catch(() => {
        if (isMounted) setGalleryError(true);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const stages = useMemo(
    () =>
      PROCESS_STAGES.map((stage) => ({
        ...stage,
        items: galleryItems.filter((item) => getProcessStage(item) === stage.id),
      })).filter((stage) => stage.items.length > 0),
    [galleryItems],
  );

  const categoryCount = new Set(galleryItems.map((item) => item.category)).size;

  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden border-b border-border bg-secondary pb-20 pt-32 text-secondary-foreground">
        <div className="pointer-events-none absolute inset-0 structural-grid-dark opacity-30" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="block h-[2px] w-12 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Engineering in motion
              </span>
              <span className="block h-[2px] w-12 bg-primary" />
            </div>
            <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h1 className="mb-8 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
                  From site work to grid infrastructure.
                </h1>
                <p className="max-w-2xl text-xl font-light leading-relaxed text-secondary-foreground/70">
                  Follow the visible work behind UVMAR&apos;s solar and electrical
                  infrastructure, from field preparation through installation,
                  control, and connection.
                </p>
              </div>
              <div className="border-l border-primary/40 pl-6 lg:mb-2">
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                  A field record
                </p>
                <p className="text-sm leading-relaxed text-secondary-foreground/65">
                  A visual journey assembled from UVMAR&apos;s supplied site
                  photography. Each stage keeps the original image context close
                  at hand.
                </p>
                <a
                  href="#process"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary-foreground transition-colors hover:text-primary"
                >
                  Explore the stages <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="container mx-auto grid px-4 py-6 sm:grid-cols-3 lg:px-8">
          <div className="border-b border-border py-4 sm:border-b-0 sm:border-r sm:py-2 sm:pr-8">
            <p className="text-3xl font-display font-medium text-foreground">
              {galleryItems.length || "—"}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Field images
            </p>
          </div>
          <div className="border-b border-border py-4 sm:border-b-0 sm:border-r sm:px-8 sm:py-2">
            <p className="text-3xl font-display font-medium text-foreground">
              {stages.length || "—"}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Delivery stages
            </p>
          </div>
          <div className="py-4 sm:py-2 sm:pl-8">
            <p className="text-3xl font-display font-medium text-foreground">
              {categoryCount || "—"}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Work areas represented
            </p>
          </div>
        </div>
      </section>

      {!galleryError && !isLoading && stages.length > 0 && (
        <nav
          aria-label="Jump to engineering stage"
          className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur"
        >
          <div className="container mx-auto overflow-x-auto px-4 lg:px-8">
            <div className="flex min-w-max gap-1 py-3">
              {stages.map((stage) => (
                <a
                  key={stage.id}
                  href={`#${stage.id}`}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                >
                  {stage.number} <span className="ml-1 font-normal">{stage.title}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}

      <section id="process" className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {galleryError ? (
            <p className="py-20 text-center text-muted-foreground">
              Gallery images are temporarily unavailable.
            </p>
          ) : isLoading ? (
            <div className="space-y-12" aria-label="Loading gallery" role="status">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]"
                >
                  <div>
                    <div className="mb-5 h-4 w-24 animate-pulse bg-muted" />
                    <div className="mb-4 h-10 w-3/4 animate-pulse bg-muted" />
                    <div className="h-16 w-full animate-pulse bg-muted" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 aspect-[16/7] animate-pulse bg-muted" />
                    <div className="aspect-[4/3] animate-pulse bg-muted" />
                    <div className="aspect-[4/3] animate-pulse bg-muted" />
                  </div>
                </div>
              ))}
            </div>
          ) : stages.length === 0 ? (
            <p className="py-20 text-center text-muted-foreground">
              No gallery images are available yet.
            </p>
          ) : (
            <div className="relative">
              <div className="absolute bottom-10 left-8 top-8 hidden w-px bg-border lg:block" />
              <div className="space-y-20">
                {stages.map((stage, stageIndex) => {
                  const Icon = stage.icon;
                  const [lead, ...supporting] = stage.items;

                  return (
                    <motion.article
                      key={stage.id}
                      id={stage.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5 }}
                      className="scroll-mt-36 lg:grid lg:grid-cols-[4rem_minmax(0,1fr)] lg:gap-10"
                    >
                      <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center border border-primary bg-background text-primary lg:mb-0">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="mb-10 grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-end">
                          <div>
                            <div className="mb-4 flex items-center gap-3">
                              <span className="text-xs font-bold tracking-[0.25em] text-primary">
                                {stage.number}
                              </span>
                              <span className="h-px w-8 bg-primary" />
                              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                {stage.eyebrow}
                              </span>
                            </div>
                            <h2 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                              {stage.title}
                            </h2>
                          </div>
                          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                            {stage.description}
                          </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                          <GalleryCard item={lead} featured />
                          {supporting.map((item, itemIndex) => (
                            <GalleryCard key={item.src} item={item} index={itemIndex} />
                          ))}
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                          {stage.items.length} {stage.items.length === 1 ? "image" : "images"} in this stage
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-primary py-24 text-center text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-6 font-display text-3xl font-medium md:text-4xl">
            Secure your infrastructure
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light opacity-90">
            Partner with UVMAR to deliver industry-leading solar infrastructure
            for your organization.
          </p>
          <Button
            asChild
            size="lg"
            className="h-14 rounded-none bg-foreground px-10 text-sm font-bold uppercase tracking-widest text-background hover:bg-foreground/90"
          >
            <Link href="/contact">
              Initiate contact <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function GalleryCard({
  item,
  featured = false,
  index = 0,
}: {
  item: GalleryItem;
  featured?: boolean;
  index?: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: Math.min(index * 0.06, 0.24), duration: 0.4 }}
      className={`group overflow-hidden border border-border bg-card ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-muted ${featured ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
        <img
          src={item.src}
          alt={item.alt}
          className="block h-full w-full object-cover grayscale mix-blend-multiply opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 border border-border bg-background px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-foreground shadow-sm">
          {item.category}
        </span>
      </div>
      <figcaption className="flex min-h-16 items-start justify-between gap-4 px-5 py-4">
        <p className="text-sm font-medium leading-relaxed text-foreground">{item.caption}</p>
        <span className="mt-0.5 text-primary" aria-hidden="true">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </figcaption>
    </motion.figure>
  );
}