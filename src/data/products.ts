export type ProductCategory =
  | 'Commercial Lights'
  | 'Decorative Lights'
  | 'Geometrical Lights'
  | 'Acoustic Lights'
  | 'Outdoor Lights';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Commercial Lights',
  'Decorative Lights',
  'Geometrical Lights',
  'Acoustic Lights',
  'Outdoor Lights',
];

export interface CategoryOverview {
  name: ProductCategory;
  summary: string;
  image: string;
  imageAlt: string;
}

export const CATEGORY_OVERVIEWS: CategoryOverview[] = [
  {
    name: 'Commercial Lights',
    summary:
      'Architectural COB spot lights, wall washers, recessed panels, linear profiles, and magnetic track systems engineered for clean visual comfort.',
    image: '/assets/products/hq/com-spot-lights.webp',
    imageAlt: 'Commercial architectural interior with black spot lights and cove lighting',
  },
  {
    name: 'Decorative Lights',
    summary:
      'Table lamps, wall sconces, floor lamps, suspended pendants, fabric luminaires, metal domes, and sculptural glass pieces.',
    image: '/assets/services/dome-fixture.webp',
    imageAlt: 'Minimalist matte black architectural dome pendant light',
  },
  {
    name: 'Geometrical Lights',
    summary:
      'Customisable rings, rectangular frames, hexagonal clusters, and continuous architectural patterns tailored to spatial geometry.',
    image: '/assets/products/hq/geo-main.webp',
    imageAlt: 'Suspended continuous geometric LED ceiling luminaire',
  },
  {
    name: 'Acoustic Lights',
    summary:
      'Sound-absorbing architectural luminaires available in over 100 colours with customisable shapes and dimensions.',
    image: '/assets/products/hq/ac-main.webp',
    imageAlt: 'Felt acoustic dome pendant lights suspended across an open office',
  },
  {
    name: 'Outdoor Lights',
    summary:
      'Durable exterior facade projectors, wall lights, step foot lights, inground uplights, garden luminaires, and pathway bollards.',
    image: '/assets/products/hq/out-facade-lights.webp',
    imageAlt: 'Architectural outdoor facade grazing lights along a modern building elevation',
  },
];

export interface CorporateProduct {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  description: string;
  isPhotoTile?: boolean;
  featured?: boolean;
}

export const CORPORATE_PRODUCTS: CorporateProduct[] = [
  {
    id: 'front-opening-spot-light',
    name: 'Front Opening Spot Light',
    category: 'Commercial Lights',
    image: '/assets/products/aw-psl01.webp',
    description:
      'Architectural COB spot light featuring a front-opening maintenance module in die-cast aluminium with dimmable and tunable optical control.',
    featured: true,
  },
  {
    id: 'architectural-spot-wall-washer',
    name: 'Architectural Spot & Wall Washer',
    category: 'Commercial Lights',
    image: '/assets/products/aw-ww01.webp',
    description:
      'Precision narrow-beam spot lights and recessed wall washers engineered in die-cast aluminium for clean visual comfort and uniform vertical illumination.',
  },
  {
    id: 'architectural-linear-panel',
    name: 'Architectural Linear Panel',
    category: 'Commercial Lights',
    image: '/assets/products/aw-1x4.webp',
    description:
      'Minimalist suspended and recessed linear LED ceiling panels designed for balanced, low-glare illumination across corporate workspaces and boardrooms.',
  },
  {
    id: 'linear-profile-system',
    name: 'Linear Profile System',
    category: 'Commercial Lights',
    image: '/assets/products/aw-sus-01.webp',
    description:
      'Suspended and recessed extruded aluminium linear profiles delivering continuous architectural lines of dimmable and tunable light.',
    featured: true,
  },
  {
    id: 'magnetic-track-system',
    name: 'Magnetic Track System',
    category: 'Commercial Lights',
    image: '/assets/products/mt-suspended.webp',
    description:
      'Modular low-voltage magnetic track channels paired with adjustable spotlights, diffused bars, and accent luminaires for flexible aiming.',
  },
  {
    id: 'table-floor-lamps',
    name: 'Table & Floor Lamps',
    category: 'Decorative Lights',
    image: '/assets/products/aw-tl01.webp',
    description:
      'Refined architectural table lamps and arched floor lamps crafted to add warm illumination and understated ambiance to lounges and executive cabins.',
  },
  {
    id: 'decorative-wall-suspended',
    name: 'Decorative Wall & Suspended Lights',
    category: 'Decorative Lights',
    image: '/assets/products/aw-s01.webp',
    description:
      'Sculptural wall sconces, soft-diffused fabric luminaires, and opal glass pendants designed for hospitality and refined commercial interiors.',
  },
  {
    id: 'metal-dome-luminaires',
    name: 'Metal Dome Luminaires',
    category: 'Decorative Lights',
    image: '/assets/products/aw-mdl01.webp',
    description:
      'Architectural spun metal dome pendant lights from the Decorative Series offering warm, comfortable downward illumination.',
    featured: true,
  },
  {
    id: 'geometrical-ring-frame-systems',
    name: 'Geometrical Ring & Frame Systems',
    category: 'Geometrical Lights',
    image: '/assets/products/geo-01.webp',
    description:
      'Customisable circular rings, rectangular frames, hexagonal arrays, and continuous ceiling patterns tailored to spatial geometry.',
    isPhotoTile: true,
    featured: true,
  },
  {
    id: 'acoustic-luminaires',
    name: 'Acoustic Luminaires',
    category: 'Acoustic Lights',
    image: '/assets/products/ac-lin-01.webp',
    description:
      'Sound-absorbing linear and dome architectural luminaires available in over 100 felt colours with customisable shapes and dimensions.',
    isPhotoTile: true,
    featured: true,
  },
  {
    id: 'outdoor-facade-wall-lights',
    name: 'Outdoor Facade & Wall Lights',
    category: 'Outdoor Lights',
    image: '/assets/products/aw-fl01-out.webp',
    description:
      'Weather-rated die-cast aluminium facade projectors and exterior wall lights with high-performance COB LEDs for modern architectural exteriors.',
    featured: true,
  },
  {
    id: 'pathway-bollards-inground-lights',
    name: 'Pathway Bollards & Inground Lights',
    category: 'Outdoor Lights',
    image: '/assets/products/aw-bl01.webp',
    description:
      'Durable exterior bollards, step foot lights, inground uplights, and multi-lens garden luminaires built for landscape illumination.',
  },
];

export const FEATURED_PRODUCTS: CorporateProduct[] = CORPORATE_PRODUCTS.filter(
  (product) => product.featured
);

export interface ProductSpec {
  label: string;
  value: string;
}

export interface CatalogueProduct {
  id: string;
  category: ProductCategory;
  name: string;
  code: string;
  image: string;
  isPhotoTile?: boolean;
  series: string;
  description: string;
  specs: ProductSpec[];
}

export const CATALOGUE_PRODUCTS: CatalogueProduct[] = [
  // ================= COMMERCIAL LIGHTS =================
  // Spot Lights — Front Opening (Page 10)
  {
    id: 'com-psl01',
    category: 'Commercial Lights',
    name: 'Front Opening Spot Light',
    code: 'AW-PSL01',
    image: '/assets/products/aw-psl01.webp',
    series: 'Spot Lights · Front Opening',
    description:
      'Architectural premium quality COB spot light featuring a user-friendly front opening mechanism (Pull and Unlock / Remove Module) for easy maintenance.',
    specs: [
      { label: 'Housing', value: 'Aluminium Die Casting' },
      { label: 'Dimension', value: '63(D) × 66(H) mm' },
      { label: 'Wattage', value: '7 W' },
      { label: 'CRI', value: '80 / 90 / 95' },
      { label: 'IP', value: '20' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-psl02',
    category: 'Commercial Lights',
    name: 'Front Opening Spot Light',
    code: 'AW-PSL02',
    image: '/assets/products/aw-psl02.webp',
    series: 'Spot Lights · Front Opening',
    description:
      'Architectural premium quality COB spot light featuring a user-friendly front opening mechanism (Pull and Unlock / Remove Module) for easy maintenance.',
    specs: [
      { label: 'Housing', value: 'Aluminium Die Casting' },
      { label: 'Dimension', value: '84 / 105 × 80(H) mm' },
      { label: 'Wattage', value: '7 / 15 / 20 / 25 / 30 W' },
      { label: 'CRI', value: '80 / 90 / 95' },
      { label: 'IP', value: '20' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-psl03',
    category: 'Commercial Lights',
    name: 'Front Opening Spot Light',
    code: 'AW-PSL03',
    image: '/assets/products/aw-psl03.webp',
    series: 'Spot Lights · Front Opening',
    description:
      'Architectural premium quality COB spot light featuring a user-friendly front opening mechanism (Pull and Unlock / Remove Module) for easy maintenance.',
    specs: [
      { label: 'Housing', value: 'Aluminium Die Casting' },
      { label: 'Dimension', value: '85(D) × 48(H) mm' },
      { label: 'Wattage', value: '12 W' },
      { label: 'CRI', value: '80 / 90 / 95' },
      { label: 'IP', value: '20' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-psl04',
    category: 'Commercial Lights',
    name: 'Twin Front Opening Spot Light',
    code: 'AW-PSL04',
    image: '/assets/products/aw-psl04.webp',
    series: 'Spot Lights · Front Opening',
    description:
      'Dual-head architectural premium quality COB spot light featuring a user-friendly front opening mechanism for easy maintenance.',
    specs: [
      { label: 'Housing', value: 'Aluminium Die Casting' },
      { label: 'Dimension', value: '88(W) × 177(L) × 76(H) mm' },
      { label: 'Wattage', value: '2 × 7 W' },
      { label: 'CRI', value: '80 / 90 / 95' },
      { label: 'IP', value: '20' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },

  // Spot Lights (Page 11)
  {
    id: 'com-msl01',
    category: 'Commercial Lights',
    name: 'Architectural Spot Light',
    code: 'AW-MSL01',
    image: '/assets/products/aw-msl01.webp',
    series: 'Spot Lights',
    description: 'Compact architectural spot light with narrow-beam optical control.',
    specs: [
      { label: 'Housing', value: 'Aluminium Die Casting' },
      { label: 'Dimension', value: '60 × 35 mm' },
      { label: 'Wattage', value: '3 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'IP', value: '20' },
      { label: 'Beam Angle', value: '3°' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-sl01',
    category: 'Commercial Lights',
    name: 'Round Spot Light',
    code: 'AW-SL01',
    image: '/assets/products/aw-sl01.webp',
    series: 'Spot Lights',
    description: 'Architectural round COB spot light with selectable wattages and beam angles.',
    specs: [
      { label: 'Housing', value: 'Aluminium Die Casting' },
      { label: 'Dimension', value: '70 / 83 / 112 / 119 mm' },
      { label: 'Wattage', value: '7 / 12 / 15 / 20 / 30 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'IP', value: '20' },
      { label: 'Beam Angle', value: '24° / 38° / 60°' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-sl02',
    category: 'Commercial Lights',
    name: 'Recessed Spot Light',
    code: 'AW-SL02',
    image: '/assets/products/aw-sl02.webp',
    series: 'Spot Lights',
    description: 'Recessed aluminium die-cast spot light with precision reflector options.',
    specs: [
      { label: 'Housing', value: 'Aluminium Die Casting' },
      { label: 'Dimension', value: '69 / 83 / 100 / 118 mm' },
      { label: 'Wattage', value: '7 / 15 / 18 / 30 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'IP', value: '20' },
      { label: 'Beam Angle', value: '24° / 40° / 60°' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-sl03',
    category: 'Commercial Lights',
    name: 'Deep Recessed Spot Light',
    code: 'AW-SL03',
    image: '/assets/products/aw-sl03.webp',
    series: 'Spot Lights',
    description: 'Deep recessed architectural spot light engineered with integrated lens/diffuser.',
    specs: [
      { label: 'Housing', value: 'Aluminium Die Casting with Lens/diffuser' },
      { label: 'Dimension', value: '85 / 105 / 135 / 165 mm' },
      { label: 'Wattage', value: '7 / 15 / 18 / 24 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'IP', value: '20' },
      { label: 'Beam Angle', value: '40° / 60°' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-ssl01',
    category: 'Commercial Lights',
    name: 'Square Spot Light',
    code: 'AW-SSL01',
    image: '/assets/products/aw-ssl01.webp',
    series: 'Spot Lights',
    description: 'Square architectural spot light with integrated lens/diffuser.',
    specs: [
      { label: 'Housing', value: 'Aluminium Die Casting with Lens/diffuser' },
      { label: 'Dimension', value: '92 / 92 mm' },
      { label: 'Wattage', value: '7 / 12 / 18 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'IP', value: '20' },
      { label: 'Beam Angle', value: '15° / 38° / 60°' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-ssl02',
    category: 'Commercial Lights',
    name: 'Double Square Spot Light',
    code: 'AW-SSL02',
    image: '/assets/products/aw-ssl02.webp',
    series: 'Spot Lights',
    description: 'Twin-module rectangular recessed spot light for flexible accent lighting.',
    specs: [
      { label: 'Housing', value: 'Aluminium Die Casting' },
      { label: 'Dimension', value: '175 / 92 mm' },
      { label: 'Wattage', value: '2×7 / 2×12 / 2×18 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'IP', value: '20' },
      { label: 'Beam Angle', value: '15° / 38° / 60°' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-ssl03',
    category: 'Commercial Lights',
    name: 'Trimless Square Spot Light',
    code: 'AW-SSL03',
    image: '/assets/products/aw-ssl03.webp',
    series: 'Spot Lights',
    description: 'High-output square architectural spot light in die-cast aluminium.',
    specs: [
      { label: 'Housing', value: 'Aluminium Die Casting' },
      { label: 'Dimension', value: '140 / 140 mm' },
      { label: 'Wattage', value: '30 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'IP', value: '20' },
      { label: 'Beam Angle', value: '15° / 38° / 60°' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-ssl04',
    category: 'Commercial Lights',
    name: 'Twin Square Spot Light',
    code: 'AW-SSL04',
    image: '/assets/products/aw-ssl04.webp',
    series: 'Spot Lights',
    description: 'High-output dual-lamp architectural spot light in die-cast aluminium.',
    specs: [
      { label: 'Housing', value: 'Aluminium Die Casting' },
      { label: 'Dimension', value: '280 × 140 mm' },
      { label: 'Wattage', value: '2 × 30 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'IP', value: '20' },
      { label: 'Beam Angle', value: '15° / 38° / 60°' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },

  // Wall Washers (Page 12)
  {
    id: 'com-ww01',
    category: 'Commercial Lights',
    name: 'Recessed Wall Washer',
    code: 'AW-WW01',
    image: '/assets/products/aw-ww01.webp',
    series: 'Wall Washers',
    description:
      'A wall washer light that evenly illuminates walls to highlight textures and architectural features.',
    specs: [
      { label: 'Housing', value: 'Aluminum Die Casting + Lens' },
      { label: 'Mounting', value: 'Recessed' },
      { label: 'Dimension', value: '84 / 108 mm' },
      { label: 'Wattage', value: '12W / 18 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-ww02',
    category: 'Commercial Lights',
    name: 'Wall Washer',
    code: 'AW-WW02',
    image: '/assets/products/aw-ww02.webp',
    series: 'Wall Washers',
    description:
      'A wall washer light that evenly illuminates walls to highlight textures and architectural features.',
    specs: [
      { label: 'Housing', value: 'Aluminum Extruded' },
      { label: 'Mounting', value: 'Surface / Recessed' },
      { label: 'Dimension', value: '80 mm' },
      { label: 'Wattage', value: '12 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-ww03',
    category: 'Commercial Lights',
    name: 'Linear Wall Washer',
    code: 'AW-WW03',
    image: '/assets/products/aw-ww03.webp',
    series: 'Wall Washers',
    description:
      'A wall washer light that evenly illuminates walls to highlight textures and architectural features.',
    specs: [
      { label: 'Housing', value: 'Aluminum Die Casting' },
      { label: 'Mounting', value: 'Recessed' },
      { label: 'Dimension', value: '147 / 280 / 413 × 45(W) mm' },
      { label: 'Wattage', value: '10 / 20 / 30 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-ww04',
    category: 'Commercial Lights',
    name: 'Tilt Wall Washer',
    code: 'AW-WW04',
    image: '/assets/products/aw-ww04.webp',
    series: 'Wall Washers',
    description:
      'A wall washer light that evenly illuminates walls to highlight textures and architectural features.',
    specs: [
      { label: 'Housing', value: 'Aluminum Die Casting' },
      { label: 'Mounting', value: 'Recessed' },
      { label: 'Dimension', value: '84(D) × 104(H) mm' },
      { label: 'Wattage', value: '7 / 12 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-ww05',
    category: 'Commercial Lights',
    name: 'Multi-Cell Wall Washer',
    code: 'AW-WW05',
    image: '/assets/products/aw-ww05.webp',
    series: 'Wall Washers',
    description:
      'A wall washer light that evenly illuminates walls to highlight textures and architectural features.',
    specs: [
      { label: 'Housing', value: 'Aluminum Die Casting' },
      { label: 'Mounting', value: 'Recessed' },
      { label: 'Dimension', value: '43 / 72 / 100 / 162 × 40 mm' },
      { label: 'Wattage', value: '6 × 3 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-ww06',
    category: 'Commercial Lights',
    name: 'Directional Wall Washer',
    code: 'AW-WW06',
    image: '/assets/products/aw-ww06.webp',
    series: 'Wall Washers',
    description:
      'A wall washer light that evenly illuminates walls to highlight textures and architectural features.',
    specs: [
      { label: 'Housing', value: 'Aluminum Die Casting' },
      { label: 'Mounting', value: 'Recessed' },
      { label: 'Dimension', value: '47 mm' },
      { label: 'Wattage', value: '5 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },

  // Panel Series (Page 14)
  {
    id: 'com-1x4',
    category: 'Commercial Lights',
    name: 'Architectural Linear Panel',
    code: 'AW-1x4',
    image: '/assets/products/aw-1x4.webp',
    series: 'Panel Series',
    description:
      'Energy-efficient panel light designed for uniform brightness, modern interiors, and long-lasting performance.',
    specs: [
      { label: 'Housing', value: 'CRCA' },
      { label: 'Dimension', value: '1195(L) / 295(W) / 75(H) mm' },
      { label: 'Wattage', value: '36 / 48 / 60 W' },
      { label: 'CCT', value: '3000 / 4000 / 5700 / 6500 K' },
      { label: 'IP', value: '20' },
      { label: 'Control', value: 'Dimmable · Tunable (3000~6000K)' },
    ],
  },
  {
    id: 'com-2x2',
    category: 'Commercial Lights',
    name: 'Architectural Square Panel',
    code: 'AW-2x2',
    image: '/assets/products/aw-2x2.webp',
    series: 'Panel Series',
    description:
      'Energy-efficient panel light designed for uniform brightness, modern interiors, and long-lasting performance.',
    specs: [
      { label: 'Housing', value: 'CRCA' },
      { label: 'Dimension', value: '595(L) / 595(W) / 75(H) mm' },
      { label: 'Wattage', value: '36 / 48 / 60 W' },
      { label: 'CCT', value: '3000 / 4000 / 5700 / 6500 K' },
      { label: 'IP', value: '20' },
      { label: 'Control', value: 'Dimmable · Tunable (3000~6000K)' },
    ],
  },
  {
    id: 'com-dl01',
    category: 'Commercial Lights',
    name: 'Panel Downlight',
    code: 'AW-DL01',
    image: '/assets/products/aw-dl01.webp',
    series: 'Panel Series',
    description:
      'Energy-efficient panel downlight designed for uniform brightness, modern interiors, and long-lasting performance.',
    specs: [
      { label: 'Housing', value: 'Aluminum Die Casting' },
      { label: 'Dimension', value: '193(D) × 63(H) mm' },
      { label: 'Wattage', value: '15 W' },
      { label: 'CCT', value: '3000 / 4000 / 5700 / 6500 K' },
      { label: 'IP', value: '20' },
      { label: 'Control', value: 'Dimmable · Tunable (3000~6000K)' },
    ],
  },
  {
    id: 'com-dl02',
    category: 'Commercial Lights',
    name: 'Slim Panel Downlight',
    code: 'AW-DL02',
    image: '/assets/products/aw-dl02.webp',
    series: 'Panel Series',
    description:
      'Energy-efficient panel downlight designed for uniform brightness, modern interiors, and long-lasting performance.',
    specs: [
      { label: 'Housing', value: 'Aluminum Die Casting' },
      { label: 'Dimension', value: '140 / 160 / 180 D' },
      { label: 'Wattage', value: '15W / 20W / 24 W' },
      { label: 'CCT', value: '3000 / 4000 / 5700 / 6500 K' },
      { label: 'IP', value: '20' },
      { label: 'Control', value: 'Dimmable · Tunable (3000~6000K)' },
    ],
  },
  {
    id: 'com-dl04',
    category: 'Commercial Lights',
    name: 'Recessed Panel Downlight',
    code: 'AW-DL04',
    image: '/assets/products/aw-dl04.webp',
    series: 'Panel Series',
    description:
      'Energy-efficient panel downlight designed for uniform brightness, modern interiors, and long-lasting performance.',
    specs: [
      { label: 'Housing', value: 'Aluminum Die Casting' },
      { label: 'Dimension', value: '79 / 100 / 123 mm' },
      { label: 'Wattage', value: '7 / 12 / 18 W' },
      { label: 'CCT', value: '3000 / 4000 / 5700 / 6500 K' },
      { label: 'IP', value: '20' },
      { label: 'Control', value: 'Dimmable · Tunable (3000~6000K)' },
    ],
  },

  // Linear Series — Suspended Profiles (Page 16)
  {
    id: 'com-sus01',
    category: 'Commercial Lights',
    name: 'Suspended Linear Profile',
    code: 'AW-SUS-01',
    image: '/assets/products/aw-sus-01.webp',
    series: 'Linear Series · Suspended Profiles',
    description:
      'Sleek, elongated suspended fixture providing uniform illumination for modern architectural and ambient lighting.',
    specs: [
      { label: 'Housing', value: 'Aluminum Extruded Profile' },
      { label: 'Diffuser', value: 'Prismatic' },
      { label: 'Dimension', value: '52(W) × 75(H) mm' },
      { label: 'Wattage', value: '28 / 32 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'CCT', value: '3000 / 4000 / 5700 K' },
      { label: 'IP', value: '20' },
    ],
  },
  {
    id: 'com-sus02',
    category: 'Commercial Lights',
    name: 'Suspended Linear Profile',
    code: 'AW-SUS-02',
    image: '/assets/products/aw-sus-02.webp',
    series: 'Linear Series · Suspended Profiles',
    description:
      'Sleek, elongated suspended fixture providing uniform illumination for modern architectural and ambient lighting.',
    specs: [
      { label: 'Housing', value: 'Aluminum Extruded Profile' },
      { label: 'Diffuser', value: 'Prismatic' },
      { label: 'Dimension', value: '33(W) × 77(H)' },
      { label: 'Wattage', value: '30 / 28 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'CCT', value: '3000 / 4000 / 5700 K' },
      { label: 'IP', value: '20' },
    ],
  },
  {
    id: 'com-sus03',
    category: 'Commercial Lights',
    name: 'Suspended Linear Profile',
    code: 'AW-SUS-03',
    image: '/assets/products/aw-sus-03.webp',
    series: 'Linear Series · Suspended Profiles',
    description:
      'Sleek, elongated suspended fixture providing uniform illumination for modern architectural and ambient lighting.',
    specs: [
      { label: 'Housing', value: 'Aluminum Extruded Profile' },
      { label: 'Diffuser', value: 'Prismatic / PMMA' },
      { label: 'Dimension', value: '75(W) × 75(H)' },
      { label: 'Wattage', value: '30 / 28 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'CCT', value: '3000 / 4000 / 5700 K' },
      { label: 'IP', value: '20' },
    ],
  },
  {
    id: 'com-sus04',
    category: 'Commercial Lights',
    name: 'Suspended Linear Profile',
    code: 'AW-SUS-04',
    image: '/assets/products/aw-sus-04.webp',
    series: 'Linear Series · Suspended Profiles',
    description:
      'Sleek, wide suspended linear fixture providing uniform illumination for modern architectural and ambient lighting.',
    specs: [
      { label: 'Housing', value: 'Aluminum Extruded Profile' },
      { label: 'Diffuser', value: 'Prismatic / PMMA' },
      { label: 'Dimension', value: '148(W) × 38(H)' },
      { label: 'Wattage', value: '40 / 60 W' },
      { label: 'CRI', value: '80 / 90' },
      { label: 'CCT', value: '3000 / 4000 / 5700 K' },
      { label: 'IP', value: '20' },
    ],
  },

  // Linear Series — Recessed Profiles (Page 17)
  {
    id: 'com-rl01',
    category: 'Commercial Lights',
    name: 'Recessed Linear Profile',
    code: 'AW-RL-01',
    image: '/assets/products/aw-rl-01.webp',
    series: 'Linear Series · Recessed Profiles',
    description:
      'Elongated recessed linear architectural profile with uniform optical diffusion.',
    specs: [
      { label: 'Housing', value: 'Aluminum Extruded Profile' },
      { label: 'Diffuser', value: 'Opal / LDA' },
      { label: 'Dimension', value: '48(W) × 32(H) mm' },
      { label: 'Wattage', value: '30 W' },
      { label: 'CRI / IP', value: '80 / 90 · IP 20' },
      { label: 'Control', value: 'Dimmable · Tunable (3000~6000K)' },
    ],
  },
  {
    id: 'com-rl02',
    category: 'Commercial Lights',
    name: 'Recessed Linear Profile',
    code: 'AW-RL-02',
    image: '/assets/products/aw-rl-02.webp',
    series: 'Linear Series · Recessed Profiles',
    description:
      'Elongated recessed linear architectural profile with uniform optical diffusion.',
    specs: [
      { label: 'Housing', value: 'Aluminum Extruded Profile' },
      { label: 'Diffuser', value: 'Opal / Prismatic' },
      { label: 'Dimension', value: '65(W) × 35(H) mm' },
      { label: 'Wattage', value: '30 W' },
      { label: 'CRI / IP', value: '80 / 90 · IP 20' },
      { label: 'Control', value: 'Dimmable · Tunable (3000~6000K)' },
    ],
  },
  {
    id: 'com-rl03',
    category: 'Commercial Lights',
    name: 'Recessed Linear Profile',
    code: 'AW-RL-03',
    image: '/assets/products/aw-rl-03.webp',
    series: 'Linear Series · Recessed Profiles',
    description:
      'Wide recessed linear architectural profile with uniform optical diffusion.',
    specs: [
      { label: 'Housing', value: 'Aluminum Extruded Profile' },
      { label: 'Diffuser', value: 'Opal / Prismatic' },
      { label: 'Dimension', value: '120(W) × 45(H) mm' },
      { label: 'Wattage', value: '30 W' },
      { label: 'CRI / IP', value: '80 / 90 · IP 20' },
      { label: 'Control', value: 'Dimmable · Tunable (3000~6000K)' },
    ],
  },
  {
    id: 'com-rl04',
    category: 'Commercial Lights',
    name: 'Recessed Linear Profile',
    code: 'AW-RL-04',
    image: '/assets/products/aw-rl-04.webp',
    series: 'Linear Series · Recessed Profiles',
    description:
      'Broad recessed linear architectural profile with uniform optical diffusion.',
    specs: [
      { label: 'Housing', value: 'Aluminum Extruded Profile' },
      { label: 'Diffuser', value: 'Opal / Prismatic' },
      { label: 'Dimension', value: '145(W) × 40(H) mm' },
      { label: 'Wattage', value: '30 W' },
      { label: 'CRI / IP', value: '80 / 90 · IP 20' },
      { label: 'Control', value: 'Dimmable · Tunable (3000~6000K)' },
    ],
  },

  // Magnetic Profile (Page 18)
  {
    id: 'com-mt-susp',
    category: 'Commercial Lights',
    name: 'Magnetic Profile Track',
    code: 'MT-Suspended',
    image: '/assets/products/mt-suspended.webp',
    series: 'Magnetic Profile',
    description:
      'Magnetic track channel where fixtures attach magnetically for easy repositioning and flexible lighting design.',
    specs: [
      { label: 'Dimension', value: '26(W) × 53(H) mm' },
      { label: 'Lengths', value: '1000, 1500, 2000 mm' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-mt-rec',
    category: 'Commercial Lights',
    name: 'Magnetic Profile Track',
    code: 'MT-Recessed',
    image: '/assets/products/mt-recessed.webp',
    series: 'Magnetic Profile',
    description:
      'Recessed magnetic track channel where fixtures attach magnetically for easy repositioning and flexible lighting design.',
    specs: [
      { label: 'Dimension', value: '40(W) × 53(H) mm' },
      { label: 'Lengths', value: '1000, 1500, 2000 mm' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-mt-trim',
    category: 'Commercial Lights',
    name: 'Magnetic Profile Track',
    code: 'MT-Trimless',
    image: '/assets/products/mt-trimless.webp',
    series: 'Magnetic Profile',
    description:
      'Trimless magnetic track channel where fixtures attach magnetically for seamless ceiling integration.',
    specs: [
      { label: 'Dimension', value: '70(W) × 53(H) mm' },
      { label: 'Lengths', value: '1000, 1500, 2000 mm' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-mt-lazer',
    category: 'Commercial Lights',
    name: 'Lazer Dots',
    code: 'Magnetic Track Fixture',
    image: '/assets/products/mt-lazer-dots.webp',
    series: 'Magnetic Track Fixture',
    description:
      'Linear low-glare magnetic track fixture that attaches magnetically for easy repositioning.',
    specs: [
      { label: 'Housing', value: 'Aluminum Extruded' },
      { label: 'Dimension', value: '22 × 100 / 196 / 292 / 388 / 484 mm' },
      { label: 'Wattage', value: '5 / 10 / 15 / 20 / 25 W' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-mt-movable',
    category: 'Commercial Lights',
    name: 'Movable Laser Dots',
    code: 'Magnetic Track Fixture',
    image: '/assets/products/mt-movable-laser-dots.webp',
    series: 'Magnetic Track Fixture',
    description:
      'Adjustable laser-dot magnetic track fixture for directional accent illumination.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminum' },
      { label: 'Dimensions', value: '25 × 115 mm' },
      { label: 'Wattage', value: '5 / 10 W' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-mt-linear',
    category: 'Commercial Lights',
    name: 'Linear',
    code: 'Magnetic Track Fixture',
    image: '/assets/products/mt-linear.webp',
    series: 'Magnetic Track Fixture',
    description:
      'Diffused linear magnetic track bar across multiple lengths for ambient illumination.',
    specs: [
      { label: 'Housing', value: 'Aluminum Extruded' },
      { label: 'Dimension', value: '22 × 364 / 400 / 604 / 604 / 844 / 1084 / 1204 mm' },
      { label: 'Wattage', value: '6 / 12 / 12 / 15 / 20 / 24 W' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },
  {
    id: 'com-mt-spots',
    category: 'Commercial Lights',
    name: 'Track Spots',
    code: 'Magnetic Track Fixture',
    image: '/assets/products/mt-track-spots.webp',
    series: 'Magnetic Track Fixture',
    description:
      'Adjustable cylindrical track spotlight attaching magnetically for flexible aiming.',
    specs: [
      { label: 'Housing', value: 'Aluminum Extruded' },
      { label: 'Dimension', value: '63 × 93 mm' },
      { label: 'Wattage', value: '12 W' },
      { label: 'Control', value: 'Dimmable · Tunable' },
    ],
  },

  // ================= DECORATIVE LIGHTS =================
  // Table Lamps (Page 20)
  {
    id: 'dec-tl01',
    category: 'Decorative Lights',
    name: 'Table Lamp',
    code: 'AW-TL01',
    image: '/assets/products/aw-tl01.webp',
    series: 'Decorative Series · Table Lamp',
    description:
      'Decorative table lamp adding both illumination and stylish ambiance to interior spaces.',
    specs: [
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Type', value: 'Table Lamp' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-tl02',
    category: 'Decorative Lights',
    name: 'Table Lamp',
    code: 'AW-TL02',
    image: '/assets/products/aw-tl02.webp',
    series: 'Decorative Series · Table Lamp',
    description:
      'Articulated table lamp adding both illumination and stylish ambiance to interior spaces.',
    specs: [
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Type', value: 'Table Lamp' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-tl03',
    category: 'Decorative Lights',
    name: 'Table Lamp',
    code: 'AW-TL03',
    image: '/assets/products/aw-tl03.webp',
    series: 'Decorative Series · Table Lamp',
    description:
      'Dome-shade table lamp adding both illumination and stylish ambiance to interior spaces.',
    specs: [
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Type', value: 'Table Lamp' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },

  // Wall Lights (Page 20)
  {
    id: 'dec-wl01',
    category: 'Decorative Lights',
    name: 'Wall Light',
    code: 'AW-WL01',
    image: '/assets/products/aw-wl01.webp',
    series: 'Decorative Series · Wall Light',
    description:
      'Decorative wall sconce adding both illumination and stylish ambiance to any space.',
    specs: [
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Type', value: 'Wall Light' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-wl02-a',
    category: 'Decorative Lights',
    name: 'Wall Light',
    code: 'AW-WL02',
    image: '/assets/products/aw-wl02-arm.webp',
    series: 'Decorative Series · Wall Light',
    description:
      'Swing-arm wall light adding both illumination and stylish ambiance to any space.',
    specs: [
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Type', value: 'Wall Light' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-wl02-b',
    category: 'Decorative Lights',
    name: 'Wall Light',
    code: 'AW-WL02',
    image: '/assets/products/aw-wl02-globe.webp',
    series: 'Decorative Series · Wall Light',
    description:
      'Glass-globe wall light adding both illumination and stylish ambiance to any space.',
    specs: [
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Type', value: 'Wall Light' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },

  // Floor Lamps (Page 20)
  {
    id: 'dec-fl01-floor',
    category: 'Decorative Lights',
    name: 'Floor Lamp',
    code: 'AW-FL01',
    image: '/assets/products/aw-fl01-floor.webp',
    series: 'Decorative Series · Floor Lamp',
    description:
      'Arched decorative floor lamp adding both illumination and stylish ambiance to any space.',
    specs: [
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Type', value: 'Floor Lamp' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-fl02-a',
    category: 'Decorative Lights',
    name: 'Floor Lamp',
    code: 'AW-FL02',
    image: '/assets/products/aw-fl02-stand.webp',
    series: 'Decorative Series · Floor Lamp',
    description:
      'Dual-disc floor lamp adding both illumination and stylish ambiance to any space.',
    specs: [
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Type', value: 'Floor Lamp' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-fl02-b',
    category: 'Decorative Lights',
    name: 'Floor Lamp',
    code: 'AW-FL02',
    image: '/assets/products/aw-fl02-tripod.webp',
    series: 'Decorative Series · Floor Lamp',
    description:
      'Tripod floor lamp adding both illumination and stylish ambiance to any space.',
    specs: [
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Type', value: 'Floor Lamp' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },

  // Suspended Lights (Page 20)
  {
    id: 'dec-s01',
    category: 'Decorative Lights',
    name: 'Suspended Light',
    code: 'AW-S01',
    image: '/assets/products/aw-s01.webp',
    isPhotoTile: true,
    series: 'Decorative Series · Suspended Light',
    description:
      'Sculptural suspended pendant adding both illumination and stylish ambiance to any space.',
    specs: [
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Type', value: 'Suspended Light' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-s02',
    category: 'Decorative Lights',
    name: 'Suspended Light',
    code: 'AW-S02',
    image: '/assets/products/aw-s02.webp',
    isPhotoTile: true,
    series: 'Decorative Series · Suspended Light',
    description:
      'Woven mesh dome suspended light adding both illumination and stylish ambiance to any space.',
    specs: [
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Type', value: 'Suspended Light' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-s03',
    category: 'Decorative Lights',
    name: 'Suspended Light',
    code: 'AW-S03',
    image: '/assets/products/aw-s03.webp',
    isPhotoTile: true,
    series: 'Decorative Series · Suspended Light',
    description:
      'Multi-drop suspended luminaire cluster adding illumination and stylish ambiance to any space.',
    specs: [
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Type', value: 'Suspended Light' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },

  // Fabric Lights (Page 22)
  {
    id: 'dec-fab-01',
    category: 'Decorative Lights',
    name: 'Fabric Light',
    code: 'AW-FL01',
    image: '/assets/products/aw-fl01-fabric.webp',
    isPhotoTile: true,
    series: 'Fabric Lights',
    description:
      'Soft-diffused fabric pendant luminaire from the AMBILUX Decorative Series.',
    specs: [
      { label: 'Collection', value: 'Fabric Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-fab-02',
    category: 'Decorative Lights',
    name: 'Fabric Light',
    code: 'AW-FL02',
    image: '/assets/products/aw-fl02-fabric.webp',
    isPhotoTile: true,
    series: 'Fabric Lights',
    description:
      'Pleated fabric drum pendant luminaire from the AMBILUX Decorative Series.',
    specs: [
      { label: 'Collection', value: 'Fabric Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-fab-03',
    category: 'Decorative Lights',
    name: 'Fabric Light',
    code: 'AW-FL03',
    image: '/assets/products/aw-fl03-fabric.webp',
    isPhotoTile: true,
    series: 'Fabric Lights',
    description:
      'Scalloped fabric pendant luminaire from the AMBILUX Decorative Series.',
    specs: [
      { label: 'Collection', value: 'Fabric Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-fab-04',
    category: 'Decorative Lights',
    name: 'Fabric Light',
    code: 'AW-FL04',
    image: '/assets/products/aw-fl04-fabric.webp',
    isPhotoTile: true,
    series: 'Fabric Lights',
    description:
      'Bell-form fabric pendant luminaire from the AMBILUX Decorative Series.',
    specs: [
      { label: 'Collection', value: 'Fabric Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-fab-05',
    category: 'Decorative Lights',
    name: 'Fabric Light',
    code: 'AW-FL05',
    image: '/assets/products/aw-fl05-fabric.webp',
    isPhotoTile: true,
    series: 'Fabric Lights',
    description:
      'Ribbed lantern fabric pendant luminaire from the AMBILUX Decorative Series.',
    specs: [
      { label: 'Collection', value: 'Fabric Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },

  // Metal Dome Lights (Page 22)
  {
    id: 'dec-mdl01',
    category: 'Decorative Lights',
    name: 'Metal Dome Light',
    code: 'AW-MDL01',
    image: '/assets/products/aw-mdl01.webp',
    series: 'Metal Dome Lights',
    description:
      'Metal dome pendant light from the AMBILUX Decorative Series for warm ambient illumination.',
    specs: [
      { label: 'Collection', value: 'Metal Dome Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-mdl02',
    category: 'Decorative Lights',
    name: 'Metal Dome Light',
    code: 'AW-MDL02',
    image: '/assets/products/aw-mdl02.webp',
    series: 'Metal Dome Lights',
    description:
      'Metal dome pendant light from the AMBILUX Decorative Series for warm ambient illumination.',
    specs: [
      { label: 'Collection', value: 'Metal Dome Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-mdl03',
    category: 'Decorative Lights',
    name: 'Metal Dome Light',
    code: 'AW-MDL03',
    image: '/assets/products/aw-mdl03.webp',
    series: 'Metal Dome Lights',
    description:
      'Metal dome pendant light from the AMBILUX Decorative Series for warm ambient illumination.',
    specs: [
      { label: 'Collection', value: 'Metal Dome Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-mdl04',
    category: 'Decorative Lights',
    name: 'Metal Dome Light',
    code: 'AW-MDL04',
    image: '/assets/products/aw-mdl04.webp',
    series: 'Metal Dome Lights',
    description:
      'Metal dome pendant light from the AMBILUX Decorative Series for warm ambient illumination.',
    specs: [
      { label: 'Collection', value: 'Metal Dome Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-mdl05',
    category: 'Decorative Lights',
    name: 'Metal Dome Light',
    code: 'AW-MDL05',
    image: '/assets/products/aw-mdl05.webp',
    series: 'Metal Dome Lights',
    description:
      'Metal dome pendant light from the AMBILUX Decorative Series for warm ambient illumination.',
    specs: [
      { label: 'Collection', value: 'Metal Dome Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-mdl06',
    category: 'Decorative Lights',
    name: 'Metal Dome Light',
    code: 'AW-MDL06',
    image: '/assets/products/aw-mdl06.webp',
    series: 'Metal Dome Lights',
    description:
      'Metal dome pendant light from the AMBILUX Decorative Series for warm ambient illumination.',
    specs: [
      { label: 'Collection', value: 'Metal Dome Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-mdl07',
    category: 'Decorative Lights',
    name: 'Metal Dome Light',
    code: 'AW-MDL07',
    image: '/assets/products/aw-mdl07.webp',
    series: 'Metal Dome Lights',
    description:
      'Metal dome pendant light from the AMBILUX Decorative Series for warm ambient illumination.',
    specs: [
      { label: 'Collection', value: 'Metal Dome Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-mdl08',
    category: 'Decorative Lights',
    name: 'Metal Dome Light',
    code: 'AW-MDL08',
    image: '/assets/products/aw-mdl08.webp',
    series: 'Metal Dome Lights',
    description:
      'Metal dome pendant light from the AMBILUX Decorative Series for warm ambient illumination.',
    specs: [
      { label: 'Collection', value: 'Metal Dome Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-mdl09',
    category: 'Decorative Lights',
    name: 'Metal Dome Light',
    code: 'AW-MDL09',
    image: '/assets/products/aw-mdl09.webp',
    series: 'Metal Dome Lights',
    description:
      'Metal dome pendant light from the AMBILUX Decorative Series for warm ambient illumination.',
    specs: [
      { label: 'Collection', value: 'Metal Dome Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-mdl10',
    category: 'Decorative Lights',
    name: 'Metal Dome Light',
    code: 'AW-MDL10',
    image: '/assets/products/aw-mdl10.webp',
    series: 'Metal Dome Lights',
    description:
      'Metal dome pendant light from the AMBILUX Decorative Series for warm ambient illumination.',
    specs: [
      { label: 'Collection', value: 'Metal Dome Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },

  // Glass Lights (Page 22)
  {
    id: 'dec-gl01',
    category: 'Decorative Lights',
    name: 'Glass Light',
    code: 'AW-GL01',
    image: '/assets/products/aw-gl01.webp',
    isPhotoTile: true,
    series: 'Glass Lights',
    description:
      'Opal glass luminaire suspended beneath an architectural disc canopy from the Decorative Series.',
    specs: [
      { label: 'Collection', value: 'Glass Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-gl02',
    category: 'Decorative Lights',
    name: 'Glass Light',
    code: 'AW-GL02',
    image: '/assets/products/aw-gl02.webp',
    isPhotoTile: true,
    series: 'Glass Lights',
    description:
      'Linear stem twin-globe glass pendant from the AMBILUX Decorative Series.',
    specs: [
      { label: 'Collection', value: 'Glass Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-gl03',
    category: 'Decorative Lights',
    name: 'Glass Light',
    code: 'AW-GL03',
    image: '/assets/products/aw-gl03.webp',
    isPhotoTile: true,
    series: 'Glass Lights',
    description:
      'Branching multi-arm glass chandelier from the AMBILUX Decorative Series.',
    specs: [
      { label: 'Collection', value: 'Glass Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'dec-gl04',
    category: 'Decorative Lights',
    name: 'Glass Light',
    code: 'AW-GL04',
    image: '/assets/products/aw-gl04.webp',
    isPhotoTile: true,
    series: 'Glass Lights',
    description:
      'Clustered organic glass chandelier from the AMBILUX Decorative Series.',
    specs: [
      { label: 'Collection', value: 'Glass Lights' },
      { label: 'Series', value: 'Decorative Series' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },

  // ================= GEOMETRICAL LIGHTS =================
  // Pages 24 & 25 — Customisable Shapes and Dimensions
  {
    id: 'geo-01',
    category: 'Geometrical Lights',
    name: 'Suspended Circular Rings',
    code: 'Customisable Shape',
    image: '/assets/products/geo-01.webp',
    isPhotoTile: true,
    series: 'Geometrical Shapes',
    description:
      'Geometrical shapes used in architectural lighting to accentuate architectural features and create patterns that enhance buildings and spaces.',
    specs: [
      { label: 'Options', value: 'Customizable shapes and dimensions possible' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'geo-02',
    category: 'Geometrical Lights',
    name: 'Recessed Angular Linear Frame',
    code: 'Customisable Shape',
    image: '/assets/products/geo-02.webp',
    isPhotoTile: true,
    series: 'Geometrical Shapes',
    description:
      'Geometrical shapes used in architectural lighting to accentuate architectural features and create patterns that enhance buildings and spaces.',
    specs: [
      { label: 'Options', value: 'Customizable shapes and dimensions possible' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'geo-03',
    category: 'Geometrical Lights',
    name: 'Continuous Rectangular Profile',
    code: 'Customisable Shape',
    image: '/assets/products/geo-03.webp',
    isPhotoTile: true,
    series: 'Geometrical Shapes',
    description:
      'Geometrical shapes used in architectural lighting to accentuate architectural features and create patterns that enhance buildings and spaces.',
    specs: [
      { label: 'Options', value: 'Customizable shapes and dimensions possible' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'geo-04',
    category: 'Geometrical Lights',
    name: 'Rounded Rectangular Pendant Loop',
    code: 'Customisable Shape',
    image: '/assets/products/geo-04.webp',
    isPhotoTile: true,
    series: 'Geometrical Shapes',
    description:
      'Geometrical shapes used in architectural lighting to accentuate architectural features and create patterns that enhance buildings and spaces.',
    specs: [
      { label: 'Options', value: 'Customizable shapes and dimensions possible' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'geo-05',
    category: 'Geometrical Lights',
    name: 'Concentric Curved Ceiling Arcs',
    code: 'Customisable Shape',
    image: '/assets/products/geo-05.webp',
    isPhotoTile: true,
    series: 'Geometrical Shapes',
    description:
      'Geometrical shapes used in architectural lighting to accentuate architectural features and create patterns that enhance buildings and spaces.',
    specs: [
      { label: 'Options', value: 'Customizable shapes and dimensions possible' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'geo-06',
    category: 'Geometrical Lights',
    name: 'Suspended Hexagonal Array',
    code: 'Customisable Shape',
    image: '/assets/products/geo-06.webp',
    isPhotoTile: true,
    series: 'Geometrical Shapes',
    description:
      'Geometrical shapes used in architectural lighting to accentuate architectural features and create patterns that enhance buildings and spaces.',
    specs: [
      { label: 'Options', value: 'Customizable shapes and dimensions possible' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'geo-07',
    category: 'Geometrical Lights',
    name: 'Interlocking Honeycomb Cluster',
    code: 'Customisable Shape',
    image: '/assets/products/geo-07.webp',
    isPhotoTile: true,
    series: 'Geometrical Shapes',
    description:
      'Geometrical shapes used in architectural lighting to accentuate architectural features and create patterns that enhance buildings and spaces.',
    specs: [
      { label: 'Options', value: 'Customizable shapes and dimensions possible' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'geo-08',
    category: 'Geometrical Lights',
    name: 'Curved Perimeter Profile',
    code: 'Customisable Shape',
    image: '/assets/products/geo-08.webp',
    isPhotoTile: true,
    series: 'Geometrical Shapes',
    description:
      'Geometrical shapes used in architectural lighting to accentuate architectural features and create patterns that enhance buildings and spaces.',
    specs: [
      { label: 'Options', value: 'Customizable shapes and dimensions possible' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'geo-09',
    category: 'Geometrical Lights',
    name: 'Architectural Zigzag Ceiling Run',
    code: 'Customisable Shape',
    image: '/assets/products/geo-09.webp',
    isPhotoTile: true,
    series: 'Geometrical Shapes',
    description:
      'Geometrical shapes used in architectural lighting to accentuate architectural features and create patterns that enhance buildings and spaces.',
    specs: [
      { label: 'Options', value: 'Customizable shapes and dimensions possible' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'geo-10',
    category: 'Geometrical Lights',
    name: 'Sweeping Arc & Drum Composition',
    code: 'Customisable Shape',
    image: '/assets/products/geo-10.webp',
    isPhotoTile: true,
    series: 'Geometrical Shapes',
    description:
      'Geometrical shapes used in architectural lighting to accentuate architectural features and create patterns that enhance buildings and spaces.',
    specs: [
      { label: 'Options', value: 'Customizable shapes and dimensions possible' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'geo-11',
    category: 'Geometrical Lights',
    name: 'Angled Linear Ceiling Network',
    code: 'Customisable Shape',
    image: '/assets/products/geo-11.webp',
    isPhotoTile: true,
    series: 'Geometrical Shapes',
    description:
      'Geometrical shapes used in architectural lighting to accentuate architectural features and create patterns that enhance buildings and spaces.',
    specs: [
      { label: 'Options', value: 'Customizable shapes and dimensions possible' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },
  {
    id: 'geo-12',
    category: 'Geometrical Lights',
    name: 'Suspended Ring Luminaire',
    code: 'Customisable Shape',
    image: '/assets/products/geo-12.webp',
    isPhotoTile: true,
    series: 'Geometrical Shapes',
    description:
      'Geometrical shapes used in architectural lighting to accentuate architectural features and create patterns that enhance buildings and spaces.',
    specs: [
      { label: 'Options', value: 'Customizable shapes and dimensions possible' },
      { label: 'Data Sheet', value: 'Detailed specs on request' },
    ],
  },

  // ================= ACOUSTIC LIGHTS =================
  // Page 26 — Sound-absorbing fixtures (100+ colours, custom shape & size)
  {
    id: 'ac-lin-01',
    category: 'Acoustic Lights',
    name: 'Acoustic Linear Pendant',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-lin-01.webp',
    isPhotoTile: true,
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-lin-02',
    category: 'Acoustic Lights',
    name: 'Acoustic Diffused Bar',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-lin-02.webp',
    isPhotoTile: true,
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-lin-03',
    category: 'Acoustic Lights',
    name: 'Acoustic Architectural Beam',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-lin-03.webp',
    isPhotoTile: true,
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-dome-01',
    category: 'Acoustic Lights',
    name: 'Acoustic Fluted Canopy',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-dome-01.webp',
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-dome-02',
    category: 'Acoustic Lights',
    name: 'Acoustic Twin Disc',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-dome-02.webp',
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-dome-03',
    category: 'Acoustic Lights',
    name: 'Acoustic Scalloped Shade',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-dome-03.webp',
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-dome-04',
    category: 'Acoustic Lights',
    name: 'Acoustic Faceted Hood',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-dome-04.webp',
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-dome-05',
    category: 'Acoustic Lights',
    name: 'Acoustic Timber-Lined Dome',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-dome-05.webp',
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-dome-06',
    category: 'Acoustic Lights',
    name: 'Acoustic Bell Pendant',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-dome-06.webp',
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-dome-07',
    category: 'Acoustic Lights',
    name: 'Acoustic Square Pyramid',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-dome-07.webp',
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-dome-08',
    category: 'Acoustic Lights',
    name: 'Acoustic Saucer Pendant',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-dome-08.webp',
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-dome-09',
    category: 'Acoustic Lights',
    name: 'Acoustic Textured Dome',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-dome-09.webp',
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-dome-10',
    category: 'Acoustic Lights',
    name: 'Acoustic Cylinder Drum',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-dome-10.webp',
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-dome-11',
    category: 'Acoustic Lights',
    name: 'Acoustic Conical Shade',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-dome-11.webp',
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },
  {
    id: 'ac-dome-12',
    category: 'Acoustic Lights',
    name: 'Acoustic Pleated Drum',
    code: 'Custom Shape & Colour',
    image: '/assets/products/ac-dome-12.webp',
    series: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaire that enhances spaces by providing both illumination and sound absorption.',
    specs: [
      { label: 'Palette', value: 'Choose from 100+ colors' },
      { label: 'Customisation', value: 'Customize shape and size' },
      { label: 'Quality', value: 'High quality lighting fixtures' },
    ],
  },

  // ================= OUTDOOR LIGHTS =================
  // Facade Lights (Page 28)
  {
    id: 'out-fl01',
    category: 'Outdoor Lights',
    name: 'Facade Light',
    code: 'AW-FL01',
    image: '/assets/products/aw-fl01-out.webp',
    series: 'Outdoor Series · Facade Lights',
    description:
      'Durable outdoor facade fixture with high-performance LEDs for modern exterior spaces.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '215 × 125 × 55 mm' },
      { label: 'Wattage', value: '72 W' },
      { label: 'Beam Angles', value: '10° / 20° / 24° / 36°' },
    ],
  },
  {
    id: 'out-fl02',
    category: 'Outdoor Lights',
    name: 'Facade Light',
    code: 'AW-FL02',
    image: '/assets/products/aw-fl02-out.webp',
    series: 'Outdoor Series · Facade Lights',
    description:
      'Durable outdoor facade fixture with high-performance LEDs for modern exterior spaces.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '272 × 80 × 130 mm' },
      { label: 'Wattage', value: '48 W' },
      { label: 'Beam Angles', value: '3° / 18° / 24°' },
    ],
  },
  {
    id: 'out-fl03',
    category: 'Outdoor Lights',
    name: 'Facade Light',
    code: 'AW-FL03',
    image: '/assets/products/aw-fl03-out.webp',
    series: 'Outdoor Series · Facade Lights',
    description:
      'Linear outdoor facade fixture with high-performance LEDs for modern exterior spaces.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '60 mm' },
      { label: 'Wattage', value: '36 W' },
      { label: 'Beam Angles', value: '24° / 40°' },
    ],
  },
  {
    id: 'out-fl04',
    category: 'Outdoor Lights',
    name: 'Facade Light',
    code: 'AW-FL04',
    image: '/assets/products/aw-fl04-out.webp',
    series: 'Outdoor Series · Facade Lights',
    description:
      'Durable outdoor facade projector with high-performance LEDs for modern exterior spaces.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '90 / 130 / 175 mm' },
      { label: 'Wattage', value: '10 / 30 / 50 / 80 W' },
      { label: 'Beam Angles', value: '10° / 15°' },
    ],
  },

  // Outdoor Wall Lights (Page 28)
  {
    id: 'out-fwl02',
    category: 'Outdoor Lights',
    name: 'Wall Light',
    code: 'AW-FWL02',
    image: '/assets/products/aw-fwl02.webp',
    series: 'Outdoor Series · Wall Lights',
    description:
      'Durable outdoor wall light with high-performance COB LED for modern exterior spaces.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '68 × 150 × 80 mm' },
      { label: 'Wattage', value: '2 × 5 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-fwl05',
    category: 'Outdoor Lights',
    name: 'Wall Light',
    code: 'AW-FWL05',
    image: '/assets/products/aw-fwl05.webp',
    series: 'Outdoor Series · Wall Lights',
    description:
      'Durable outdoor wall light with high-performance COB LED for modern exterior spaces.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '220 × 220 × 31 mm' },
      { label: 'Wattage', value: '8 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-fwl06',
    category: 'Outdoor Lights',
    name: 'Wall Light',
    code: 'AW-FWL06',
    image: '/assets/products/aw-fwl06.webp',
    series: 'Outdoor Series · Wall Lights',
    description:
      'Durable circular outdoor wall light with high-performance COB LED for modern exterior spaces.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '200 mm' },
      { label: 'Wattage', value: '8 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-fwl07',
    category: 'Outdoor Lights',
    name: 'Wall Light',
    code: 'AW-FWL07',
    image: '/assets/products/aw-fwl07.webp',
    series: 'Outdoor Series · Wall Lights',
    description:
      'Durable outdoor wall light with high-performance COB LED for modern exterior spaces.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '65 × 50 × 60 mm' },
      { label: 'Wattage', value: '2 × 3 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },

  // Foot Lights (Page 29)
  {
    id: 'out-fr01',
    category: 'Outdoor Lights',
    name: 'Foot Light',
    code: 'AW-FR01',
    image: '/assets/products/aw-fr01.webp',
    series: 'Outdoor Series · Foot Lights',
    description:
      'Architectural outdoor step and foot light powered by COB LED.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Wattage', value: '6 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-fr02',
    category: 'Outdoor Lights',
    name: 'Foot Light',
    code: 'AW-FR02',
    image: '/assets/products/aw-fr02.webp',
    series: 'Outdoor Series · Foot Lights',
    description:
      'Architectural outdoor step and foot light powered by COB LED.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '150 × 70 × 40 mm' },
      { label: 'Wattage', value: '6 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-fr04',
    category: 'Outdoor Lights',
    name: 'Foot Light',
    code: 'AW-FR04',
    image: '/assets/products/aw-fr04.webp',
    series: 'Outdoor Series · Foot Lights',
    description:
      'Architectural square outdoor step and foot light powered by COB LED.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '90 × 90 × 60 mm' },
      { label: 'Wattage', value: '5 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-fr05',
    category: 'Outdoor Lights',
    name: 'Foot Light',
    code: 'AW-FR05',
    image: '/assets/products/aw-fr05.webp',
    series: 'Outdoor Series · Foot Lights',
    description:
      'Architectural round outdoor step and foot light powered by COB LED.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '90 × 70 mm' },
      { label: 'Wattage', value: '5 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },

  // Inground Lights (Page 29)
  {
    id: 'out-ig01',
    category: 'Outdoor Lights',
    name: 'Inground Light',
    code: 'AW-IG01',
    image: '/assets/products/aw-ig01.webp',
    series: 'Outdoor Series · Inground Lights',
    description:
      'Durable die-cast aluminium inground uplight with COB LED source.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '70 mm' },
      { label: 'Wattage', value: '3 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-ig02',
    category: 'Outdoor Lights',
    name: 'Inground Light',
    code: 'AW-IG02',
    image: '/assets/products/aw-ig02.webp',
    series: 'Outdoor Series · Inground Lights',
    description:
      'Durable die-cast aluminium square inground uplight with COB LED source.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '45 × 45 × 45 mm' },
      { label: 'Wattage', value: '3 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-ig03',
    category: 'Outdoor Lights',
    name: 'Inground Light',
    code: 'AW-IG03',
    image: '/assets/products/aw-ig03.webp',
    series: 'Outdoor Series · Inground Lights',
    description:
      'Durable die-cast aluminium inground fixture with COB LED source.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '60 × 60 × 75 mm' },
      { label: 'Wattage', value: '4 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-ig04',
    category: 'Outdoor Lights',
    name: 'Inground Light',
    code: 'AW-IG04',
    image: '/assets/products/aw-ig04.webp',
    series: 'Outdoor Series · Inground Lights',
    description:
      'Durable die-cast aluminium inground uplight with COB LED source.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '85 × 70 mm' },
      { label: 'Wattage', value: '4 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },

  // Garden Lights (Page 30)
  {
    id: 'out-gl01',
    category: 'Outdoor Lights',
    name: 'Garden Light',
    code: 'AW-GL01',
    image: '/assets/products/aw-gl01-out.webp',
    series: 'Outdoor Series · Garden Lights',
    description:
      'Multi-lens exterior garden light with COB LED source and die-cast aluminium body.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '160 × 30 × 85 mm' },
      { label: 'Wattage', value: '15 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-gl02',
    category: 'Outdoor Lights',
    name: 'Garden Light',
    code: 'AW-GL02',
    image: '/assets/products/aw-gl02-out.webp',
    series: 'Outdoor Series · Garden Lights',
    description:
      'Compact exterior garden projector with COB LED source and die-cast aluminium body.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '48 × 75 mm' },
      { label: 'Wattage', value: '5 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-gl03',
    category: 'Outdoor Lights',
    name: 'Garden Light',
    code: 'AW-GL03',
    image: '/assets/products/aw-gl03-out.webp',
    series: 'Outdoor Series · Garden Lights',
    description:
      'Spike-mounted exterior garden light with COB LED source and 38° beam angle.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '60 × 100 mm' },
      { label: 'Wattage', value: '3 / 7 W' },
      { label: 'LED Source', value: 'COB LED' },
      { label: 'Beam Angle', value: '38°' },
    ],
  },
  {
    id: 'out-gl04',
    category: 'Outdoor Lights',
    name: 'Garden Light',
    code: 'AW-GL04',
    image: '/assets/products/aw-gl04-out.webp',
    series: 'Outdoor Series · Garden Lights',
    description:
      'Spike-mounted exterior garden light with COB LED source and 36° beam angle.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '50 × 116 mm' },
      { label: 'Wattage', value: '7 W' },
      { label: 'LED Source', value: 'COB LED' },
      { label: 'Beam Angle', value: '36°' },
    ],
  },

  // Bollard Lights (Page 30)
  {
    id: 'out-bl01',
    category: 'Outdoor Lights',
    name: 'Bollard Light',
    code: 'AW-BL01',
    image: '/assets/products/aw-bl01.webp',
    series: 'Outdoor Series · Bollard Lights',
    description:
      'Architectural outdoor pathway bollard light in die-cast aluminium with COB LED.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '108 × 600 mm' },
      { label: 'Wattage', value: '12 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-bl02',
    category: 'Outdoor Lights',
    name: 'Bollard Light',
    code: 'AW-BL02',
    image: '/assets/products/aw-bl02.webp',
    series: 'Outdoor Series · Bollard Lights',
    description:
      'Frame-profile outdoor pathway bollard light in die-cast aluminium with COB LED.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '160 × 50 mm' },
      { label: 'Wattage', value: '16 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-bl03',
    category: 'Outdoor Lights',
    name: 'Bollard Light',
    code: 'AW-BL03',
    image: '/assets/products/aw-bl03.webp',
    series: 'Outdoor Series · Bollard Lights',
    description:
      'Sleek post outdoor pathway bollard light in die-cast aluminium with COB LED.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '70 / 80 / 100 mm' },
      { label: 'Wattage', value: '9 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
  {
    id: 'out-bl04',
    category: 'Outdoor Lights',
    name: 'Bollard Light',
    code: 'AW-BL04',
    image: '/assets/products/aw-bl04.webp',
    series: 'Outdoor Series · Bollard Lights',
    description:
      'Cylindrical outdoor pathway bollard light in die-cast aluminium with COB LED.',
    specs: [
      { label: 'Housing', value: 'Die-Cast Aluminium' },
      { label: 'Dimension', value: '210 × 420 mm' },
      { label: 'Wattage', value: '16 W' },
      { label: 'LED Source', value: 'COB LED' },
    ],
  },
];

export interface SimplifiedSubcategoryItem {
  id: string;
  name: string;
  image: string;
  description: string;
  isPhotoTile?: boolean;
}

export interface ProductCategoryGroup {
  id: 'commercial' | 'decorative' | 'geometrical' | 'acoustic' | 'outdoor';
  number: string;
  title: string;
  queryCategory: ProductCategory;
  description: string;
  homeImage?: {
    image: string;
    alt: string;
    isPhotoTile?: boolean;
  };
  subcategories?: SimplifiedSubcategoryItem[];
  mainImage?: {
    image: string;
    alt: string;
    isPhotoTile?: boolean;
  };
}

export const PRODUCT_CATEGORY_SECTIONS: ProductCategoryGroup[] = [
  {
    id: 'commercial',
    number: '01',
    title: 'Commercial',
    queryCategory: 'Commercial Lights',
    description:
      'Architectural spot lights, wall washers, modular ceiling panels, linear profiles, and magnetic track systems engineered for visual comfort.',
    homeImage: {
      image: '/assets/unique/home-cat-commercial.webp',
      alt: 'Commercial open-plan office illuminated with architectural linear ceiling panels and baffles',
      isPhotoTile: true,
    },
    subcategories: [
      {
        id: 'com-spot-lights',
        name: 'Spot Lights',
        image: '/assets/products/hq/com-spot-lights.webp',
        isPhotoTile: true,
        description:
          'Front-opening and recessed COB architectural spot lights with adjustable aiming and dimmable optical control.',
      },
      {
        id: 'com-wall-washers',
        name: 'Wall Washers',
        image: '/assets/products/hq/com-wall-washers.webp',
        isPhotoTile: true,
        description:
          'Precision recessed and directional wall washers engineered for uniform vertical surface illumination.',
      },
      {
        id: 'com-panel-series',
        name: 'Panel Series',
        image: '/assets/products/hq/com-panel-series.webp',
        isPhotoTile: true,
        description:
          'Low-glare recessed and suspended LED ceiling panels designed for offices and conference spaces.',
      },
      {
        id: 'com-linear-series',
        name: 'Linear Series',
        image: '/assets/products/hq/com-linear-series.webp',
        isPhotoTile: true,
        description:
          'Suspended and recessed extruded aluminium linear profiles delivering continuous lines of light.',
      },
      {
        id: 'com-magnetic-profile',
        name: 'Magnetic Profile',
        image: '/assets/products/hq/com-magnetic-profile.webp',
        isPhotoTile: true,
        description:
          'Low-voltage suspended, recessed, and trimless magnetic tracks with modular clip-in light fixtures.',
      },
    ],
  },
  {
    id: 'decorative',
    number: '02',
    title: 'Decorative',
    queryCategory: 'Decorative Lights',
    description:
      'Table lamps, wall sconces, floor lamps, suspended pendants, fabric luminaires, glass pieces, and metal domes crafted for interior ambiance.',
    homeImage: {
      image: '/assets/unique/home-cat-decorative.webp',
      alt: 'Executive interior illuminated by a decorative suspended circular luminaire',
      isPhotoTile: true,
    },
    subcategories: [
      {
        id: 'dec-table-lamps',
        name: 'Table Lamps',
        image: '/assets/products/hq/dec-table-lamps.webp',
        isPhotoTile: true,
        description:
          'Warm architectural table lamps combining functional task illumination with refined surface presence.',
      },
      {
        id: 'dec-wall-lights',
        name: 'Wall Lights',
        image: '/assets/products/hq/dec-wall-lights.webp',
        isPhotoTile: true,
        description:
          'Sculptural wall sconces designed to add gentle indirect illumination and accent warmth.',
      },
      {
        id: 'dec-floor-lamps',
        name: 'Floor Lamps',
        image: '/assets/products/hq/dec-floor-lamps.webp',
        isPhotoTile: false,
        description:
          'Freestanding architectural floor lamps suited for lounges, executive cabins, and hospitality suites.',
      },
      {
        id: 'dec-suspended-lights',
        name: 'Suspended Lights',
        image: '/assets/products/hq/dec-suspended-lights.webp',
        isPhotoTile: true,
        description:
          'Minimalist suspended decorative luminaires framing dining, reception, and collaborative zones.',
      },
      {
        id: 'dec-fabric-lights',
        name: 'Fabric Lights',
        image: '/assets/products/hq/dec-fabric-lights.webp',
        isPhotoTile: true,
        description:
          'Soft-diffused fabric shade pendants bringing warm, comfortable illumination to architectural interiors.',
      },
      {
        id: 'dec-glass-lights',
        name: 'Glass Lights',
        image: '/assets/products/hq/dec-glass-lights.webp',
        isPhotoTile: true,
        description:
          'Opal glass suspended luminaires paired with precision architectural canopies.',
      },
      {
        id: 'dec-metal-dome-lights',
        name: 'Metal Dome Lights',
        image: '/assets/products/hq/dec-metal-dome-lights.webp',
        isPhotoTile: true,
        description:
          'Spun metal dome pendant lights offering warm, focused downward illumination.',
      },
    ],
  },
  {
    id: 'geometrical',
    number: '03',
    title: 'Geometrical',
    queryCategory: 'Geometrical Lights',
    description:
      'Geometrical shapes used in architectural lighting to accentuate structural features and create customisable spatial patterns across ceilings and atriums.',
    mainImage: {
      image: '/assets/products/hq/geo-main.webp',
      alt: 'AMBILUX Geometrical Lights architectural suspended geometric ceiling luminaire',
      isPhotoTile: true,
    },
  },
  {
    id: 'acoustic',
    number: '04',
    title: 'Acoustic',
    queryCategory: 'Acoustic Lights',
    description:
      'Sound-absorbing architectural luminaires available in over 100 felt colours with customisable shapes and dimensions for acoustic comfort and illumination.',
    mainImage: {
      image: '/assets/products/hq/ac-main.webp',
      alt: 'AMBILUX Acoustic Lights sound-absorbing dome pendant luminaires',
      isPhotoTile: true,
    },
  },
  {
    id: 'outdoor',
    number: '05',
    title: 'Outdoor',
    queryCategory: 'Outdoor Lights',
    description:
      'Weather-rated exterior facade projectors, wall fixtures, foot lights, inground uplights, garden luminaires, and pathway bollards.',
    homeImage: {
      image: '/assets/images/outdoor_architectural_facade_1794914230903.webp',
      alt: 'Architectural outdoor facade grazing lights, step foot lights, and pathway bollards at twilight',
      isPhotoTile: true,
    },
    subcategories: [
      {
        id: 'out-facade-lights',
        name: 'Facade Lights',
        image: '/assets/products/hq/out-facade-lights.webp',
        isPhotoTile: true,
        description:
          'High-performance exterior facade luminaires engineered to graze and highlight building elevations.',
      },
      {
        id: 'out-wall-lights',
        name: 'Wall Lights',
        image: '/assets/products/hq/out-wall-lights.webp',
        isPhotoTile: true,
        description:
          'Durable IP-rated architectural wall lights designed for exterior corridors, columns, and perimeters.',
      },
      {
        id: 'out-foot-lights',
        name: 'Foot Lights',
        image: '/assets/products/hq/out-foot-lights.webp',
        isPhotoTile: true,
        description:
          'Recessed COB step and foot lights providing safe, low-glare illumination along exterior staircases.',
      },
      {
        id: 'out-inground-lights',
        name: 'Inground Lights',
        image: '/assets/products/hq/out-inground-lights.webp',
        isPhotoTile: true,
        description:
          'Heavy-duty die-cast aluminium inground uplights built for structural and landscape accents.',
      },
      {
        id: 'out-garden-lights',
        name: 'Garden Lights',
        image: '/assets/products/hq/out-garden-lights.webp',
        isPhotoTile: true,
        description:
          'Multi-lens exterior garden fixtures crafted for planting beds, trees, and courtyard features.',
      },
      {
        id: 'out-bollard-lights',
        name: 'Bollard Lights',
        image: '/assets/products/hq/out-bollard-lights.webp',
        isPhotoTile: true,
        description:
          'Architectural pathway bollard lights offering clean, weather-resistant perimeter wayfinding.',
      },
    ],
  },
];


