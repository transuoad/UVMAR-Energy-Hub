export type Allocation = { client: string; capacityMw: number; named: boolean };
export type Park = { name: string; capacityMw: number; allocations: Allocation[] };

export const PARKS: Park[] = [
  {
    name: "Ultron",
    capacityMw: 15,
    allocations: [
      { client: "R&V Green", capacityMw: 2, named: true },
      { client: "Shamahaa Energy", capacityMw: 2, named: true },
      { client: "A&V Green Energy", capacityMw: 2, named: true },
      { client: "Kartar Energies", capacityMw: 2, named: true },
      { client: "Aanika Energy", capacityMw: 1, named: true },
      { client: "GHCL Limited", capacityMw: 6, named: true },
    ],
  },
  {
    name: "Titan",
    capacityMw: 10,
    allocations: [
      { client: "Jain Group", capacityMw: 7, named: true },
      { client: "Torrent Urja 35", capacityMw: 3, named: true },
    ],
  },
  {
    name: "Helios",
    capacityMw: 18,
    allocations: [
      { client: "Torrent Urja 22 Pvt", capacityMw: 15, named: true },
      { client: "UVMAR GE 9", capacityMw: 3, named: true },
    ],
  },
  {
    name: "Marvel",
    capacityMw: 12,
    allocations: [
      { client: "Torrent Energy", capacityMw: 9, named: true },
      { client: "UVMAR GE 6", capacityMw: 3, named: true },
    ],
  },
  {
    name: "Quantum",
    capacityMw: 5,
    allocations: [{ client: "Customer details to be added", capacityMw: 5, named: false }],
  },
];

export const TOTAL_MW = 60;
export const NAMED_ALLOCATIONS = 12;
export const PARKS_LIST_PDF = "/documents/solar-parks/solar-parks-list.pdf";

export type Drawing = {
  id: string;
  ref: string;
  title: string;
  kind: string;
  facts: string[];
  image: string;
  pdf: string;
  alt: string;
};

export const DRAWINGS: Drawing[] = [
  {
    id: "ge9",
    ref: "GE9",
    title: "GE9",
    kind: "PV array layout",
    facts: ["Drawing title: 4.2 MWp", "System table: 3,000 kVA AC"],
    image: "/images/solar-parks/ge9-pv-array.jpg",
    pdf: "/documents/solar-parks/ge9-pv-array.pdf",
    alt: "GE9 PV array layout engineering drawing",
  },
  {
    id: "ge6",
    ref: "GE6",
    title: "GE6",
    kind: "Plant layout",
    facts: ["Drawing titled 4 MW"],
    image: "/images/solar-parks/ge6-plant-layout.jpg",
    pdf: "/documents/solar-parks/ge6-plant-layout.pdf",
    alt: "GE6 plant layout engineering drawing",
  },
  {
    id: "uvmar-renewable",
    ref: "UVMAR Renewable",
    title: "UVMAR Renewable",
    kind: "PV module layout",
    facts: ["Ervadi Village, Paramanallur", "Proposed 9.096 MWp system"],
    image: "/images/solar-parks/uvmar-pv-module-layout.jpg",
    pdf: "/documents/solar-parks/uvmar-pv-module-layout.pdf",
    alt: "UVMAR Renewable PV module layout drawing for Ervadi Village, Paramanallur",
  },
  {
    id: "silathur",
    ref: "Silathur Park",
    title: "Silathur Park",
    kind: "PV array layout",
    facts: ["Drawing DC capacity: 19.53 MWp", "Dated 12.09.2026"],
    image: "/images/solar-parks/silathur-pv-array.jpg",
    pdf: "/documents/solar-parks/silathur-pv-array.pdf",
    alt: "Silathur Park PV array layout engineering drawing",
  },
];
