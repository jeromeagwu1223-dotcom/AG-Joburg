export interface Service {
  id: string;
  icon: string;
  title: string;
  blurb: string;
}

export interface ServiceDetail {
  title: string;
  blurb: string;
  bullets: string[];
  typical: string;
  timeline: string;
}

export const SERVICES: Service[] = [
  {
    id: 'damp',
    icon: 'droplet',
    title: 'Damp Proofing, Waterproofing & Leak Repairs',
    blurb: 'Stop rising damp, penetrating leaks and wet walls for good. We diagnose the source, install proper barriers and membranes, and repair finishes so your property stays dry and healthy.',
  },
  {
    id: 'roofing',
    icon: 'home',
    title: 'Roof Installation & Repairs',
    blurb: 'New roofs, re-roofs and leak repairs on tile, IBR/corrugated and flat roofs. Correct detailing, UV-stable coatings and waterproofing that keeps the weather out.',
  },
  {
    id: 'painting',
    icon: 'brush',
    title: 'Interior & Exterior Painting',
    blurb: 'Careful prep, crack repairs, the right primers and low-VOC paints. Durable exterior systems for SA weather; crisp interior finishes for homes and offices.',
  },
  {
    id: 'kitchen-bath',
    icon: 'wrench',
    title: 'Kitchen & Bathroom Renovations',
    blurb: 'Turnkey makeovers with tested waterproofing, PIRB plumbing, Electrical CoC, quality cabinetry and finishes. Practical layouts that look great and last.',
  },
  {
    id: 'paving',
    icon: 'paving',
    title: 'Driveway, Patio & Pathway Paving',
    blurb: 'Built on a solid base with proper falls and edge restraints. Driveway-ready patterns, slip-smart patio surfaces, and neat detailing at drains and thresholds.',
  },
  {
    id: 'extensions',
    icon: 'expand',
    title: 'Home Renovations, Extensions & Alterations',
    blurb: 'Open up living spaces, add rooms, convert garages, or extend smartly. Plans, approvals, engineered structure, tidy finishes — seamless with the original home.',
  },
];

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  damp: {
    title: 'Damp Proofing, Waterproofing & Leak Repairs',
    blurb: 'Stop rising damp, penetrating leaks and wet walls for good. We diagnose the source first — many "damp" jobs are actually leaks — then install proper barriers and membranes, and repair finishes so your property stays dry and healthy.',
    bullets: [
      'Moisture diagnosis before we quote any treatment',
      'Chemical injection DPC for rising damp',
      'Torch-on, liquid-membrane and screeded waterproofing systems',
      'Roof, balcony, deck and retaining-wall leak repairs',
      'Plaster strip-back, retreatment and finishing',
    ],
    typical: 'R 3,500 – R 28,000',
    timeline: '1–4 working days, weather permitting',
  },
  roofing: {
    title: 'Roof Installation & Repairs',
    blurb: 'New roofs, re-roofs and leak repairs on tile, IBR/corrugated and flat roofs. Correct detailing where the roof meets walls, parapets and chimneys — that is where most leaks start.',
    bullets: [
      'New roof installations and full re-roofs',
      'Tile, IBR, corrugated and flat-roof systems',
      'UV-stable coatings and roof painting',
      'Ridge, flashing and valley re-detailing',
      'Gutter and downpipe re-routing',
    ],
    typical: 'R 4,800 – R 95,000',
    timeline: '2 days – 2 weeks',
  },
  painting: {
    title: 'Interior & Exterior Painting',
    blurb: 'Careful prep, crack repairs, the right primers and low-VOC paints. Durable exterior systems for SA weather; crisp interior finishes for homes and offices.',
    bullets: [
      'Surface prep, sanding and crack repairs',
      'Primer + topcoat systems sized to substrate',
      'Low-VOC interior paint as standard',
      'UV/weather-rated exterior systems',
      'Furniture protection and daily clean-up',
    ],
    typical: 'R 80 – R 160 / m²',
    timeline: '2–7 working days',
  },
  'kitchen-bath': {
    title: 'Kitchen & Bathroom Renovations',
    blurb: 'Turnkey makeovers with tested waterproofing, PIRB-registered plumbing, Electrical CoC, quality cabinetry and finishes. Practical layouts that look great and last.',
    bullets: [
      'Demo, waterproofing and re-tiling',
      'PIRB-registered plumbing — signed off',
      'Electrical CoC issued on completion',
      'Custom cabinetry, tops and joinery',
      'Project-managed from quote to walk-through',
    ],
    typical: 'R 45,000 – R 320,000',
    timeline: '2–6 weeks',
  },
  paving: {
    title: 'Driveway, Patio & Pathway Paving',
    blurb: 'Built on a solid base with proper falls and edge restraints. Driveway-ready patterns, slip-smart patio surfaces, and neat detailing at drains and thresholds.',
    bullets: [
      'Engineered sub-base for vehicle loads',
      'Correct falls so water runs away from the house',
      'Driveway, patio and pathway patterns',
      'Edge restraints and threshold detailing',
      'Drain channels and grates set into the work',
    ],
    typical: 'R 280 – R 550 / m²',
    timeline: '3–10 working days',
  },
  extensions: {
    title: 'Home Renovations, Extensions & Alterations',
    blurb: 'Open up living spaces, add rooms, convert garages, or extend smartly. Plans, council approvals, engineered structure, tidy finishes — and the new work blends seamlessly with the original home.',
    bullets: [
      'Plans drawn and council approval handled',
      'Engineered structural alterations',
      'Garage and outbuilding conversions',
      'New rooms, second-storey additions',
      'Finishes matched to existing house',
    ],
    typical: 'Quoted per scope',
    timeline: '3 weeks – 4 months',
  },
};
