export interface ExecutedProject {
  slug: string;
  title: string;
  catalogueSection: string;
  seriesUsed: string[];
  summary: string;
  details: string[];
  heroImage: string;
  heroAlt: string;
  homeImage?: string;
  homeAlt?: string;
  aspect: 'landscape' | 'portrait' | 'wide';
  gallery: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
}

export const EXECUTED_PROJECTS: ExecutedProject[] = [
  {
    slug: 'executive-lounge-linear-geometry',
    title: 'Executive Lounge & Linear Geometry',
    catalogueSection: 'Executed Projects · Catalogue Reference 01',
    seriesUsed: ['Geometrical Lights', 'Commercial Lights'],
    summary:
      'Suspended geometric linear composition paired with warm architectural perimeter wash across an executive lounge interior.',
    details: [
      'Customisable geometric linear configuration suspended over the seating zone.',
      'Integrated recessed perimeter illumination balanced for low-glare ambient warmth.',
    ],
    heroImage: '/assets/projects/exec-01.webp',
    heroAlt: 'Executive lounge illuminated by a custom suspended geometric linear light sculpture',
    homeImage: '/assets/unique/home-proj-1.webp',
    homeAlt: 'Interlocking geometric square ceiling profile suspended above an architectural lobby',
    aspect: 'landscape',
    gallery: [
      {
        src: '/assets/unique/proj-01-gal.webp',
        alt: 'Minimalist suspended square linear profile above curved lounge seating',
        caption: 'Continuous geometric square linear luminaire framing a collaborative seating bay.',
      },
    ],
  },
  {
    slug: 'woven-orb-atrium',
    title: 'Woven Orb Atrium Installation',
    catalogueSection: 'Executed Projects · Catalogue Reference 02',
    seriesUsed: ['Decorative Lights', 'Commercial Lights'],
    summary:
      'Rhythmic array of suspended woven orb pendants paired with recessed ceiling linear runs across a collaborative atrium.',
    details: [
      'Layered decorative suspended pendants providing warm visual rhythm across an open-grid ceiling.',
      'Supplemented by architectural linear fixtures to maintain even task illumination below.',
    ],
    heroImage: '/assets/projects/exec-04.webp',
    heroAlt: 'Collaborative interior illuminated by suspended woven spherical pendant lights and recessed linear fixtures',
    homeImage: '/assets/unique/home-proj-2.webp',
    homeAlt: 'Suspended cluster of glowing woven mesh orb pendant lights',
    aspect: 'wide',
    gallery: [
      {
        src: '/assets/projects/exec-03.webp',
        alt: 'Conical black metal dome pendants suspended above a collaborative timber table',
        caption: 'Matte black metal dome pendants over timber worktables.',
      },
    ],
  },
  {
    slug: 'circular-ring-biophilic-lounge',
    title: 'Circular Ring & Biophilic Reception',
    catalogueSection: 'Executed Projects · Catalogue Reference 03',
    seriesUsed: ['Geometrical Lights', 'Commercial Lights'],
    summary:
      'Large-diameter suspended ring profile uniting warm hospitality seating, glazed partitions, and vertical planting.',
    details: [
      'Customisable circular architectural profile creating a unifying focal halo.',
      'Coordinated with recessed downlights for balanced illumination across timber and stone surfaces.',
    ],
    heroImage: '/assets/projects/exec-10.webp',
    heroAlt: 'Open reception lounge anchored by a large suspended circular LED ring luminaire',
    homeImage: '/assets/unique/home-proj-3.webp',
    homeAlt: 'Circular suspended architectural halo luminaire centered above a meeting room table',
    aspect: 'landscape',
    gallery: [
      {
        src: '/assets/unique/proj-03-gal.webp',
        alt: 'Hexagonal architectural ceiling luminaires illuminating a glass-enclosed reception lounge',
        caption: 'Geometric ceiling clusters coordinated across open reception seating and glass partitions.',
      },
    ],
  },
  {
    slug: 'exposed-soffit-linear-workspace',
    title: 'Exposed Soffit Linear Workspace',
    catalogueSection: 'Executed Projects · Catalogue Reference 04',
    seriesUsed: ['Commercial Lights'],
    summary:
      'Continuous suspended and recessed linear profiles integrated across exposed industrial soffits, boardrooms, and workstations.',
    details: [
      'Uniform elongated illumination aligned cleanly alongside exposed MEP services.',
      'Designed for visual consistency across corridors, open desks, and meeting rooms.',
    ],
    heroImage: '/assets/projects/exec-09.webp',
    heroAlt: 'Modern workspace with parallel suspended linear lighting fixtures under an exposed ceiling',
    homeImage: '/assets/unique/home-proj-4.webp',
    homeAlt: 'Continuous parallel linear profiles recessed along an executive conference ceiling',
    aspect: 'landscape',
    gallery: [
      {
        src: '/assets/projects/exec-06.webp',
        alt: 'Long linear luminaire suspended along a collaborative table',
        caption: 'Suspended linear run aligned to long-table workspace layout.',
      },
      {
        src: '/assets/projects/exec-07.webp',
        alt: 'Open-plan workstations illuminated by continuous linear profiles',
        caption: 'Continuous linear lines delivering uniform desk illumination.',
      },
      {
        src: '/assets/projects/exec-08.webp',
        alt: 'Executive conference room with parallel recessed linear light strips',
        caption: 'Recessed parallel linear strips inside an enclosed conference room.',
      },
    ],
  },
  {
    slug: 'hospitality-mirror-decorative-suite',
    title: 'Hospitality Mirror & Brass Globe Suite',
    catalogueSection: 'Executed Projects · Catalogue Reference 05',
    seriesUsed: ['Decorative Lights'],
    summary:
      'Warm decorative globe sconces and suspended brass pendants delivering soft, flattering architectural accents.',
    details: [
      'Backlit oval mirror compositions paired with textured glass wall sconces.',
      'Suspended opal glass globe pendants on slender brass stems framing feature wall paneling.',
    ],
    heroImage: '/assets/projects/exec-05.webp',
    heroAlt: 'Twin suspended opal glass globe pendants on slender brass rods against fluted wall paneling',
    aspect: 'portrait',
    gallery: [
      {
        src: '/assets/projects/exec-02.webp',
        alt: 'Illuminated oval mirrors flanked by textured decorative glass wall sconces',
        caption: 'Backlit mirrors paired with textured glass wall sconces.',
      },
    ],
  },
  {
    slug: 'acoustic-ceiling-linear-suite',
    title: 'Acoustic Ceiling & Linear Integration',
    catalogueSection: 'Executed Projects · Catalogue Reference 06',
    seriesUsed: ['Acoustic Lights', 'Commercial Lights'],
    summary:
      'Recessed linear profiles integrated directly into sound-absorbing ceiling panels alongside perimeter spot illumination.',
    details: [
      'Clean linear light lines embedded inside acoustic felt ceiling planes.',
      'Combines reverberation control with crisp architectural lighting geometry.',
    ],
    heroImage: '/assets/projects/exec-12.webp',
    heroAlt: 'Acoustic ceiling panel integrated with parallel recessed linear LED fixtures',
    aspect: 'landscape',
    gallery: [
      {
        src: '/assets/projects/exec-11.webp',
        alt: 'Linear pendant lights suspended over collaborative office workstations',
        caption: 'Direct-indirect linear pendants over workstation bays.',
      },
    ],
  },
  {
    slug: 'twilight-terrace-architectural-outdoor',
    title: 'Twilight Terrace & Exterior Pathway',
    catalogueSection: 'Outdoor Series · Catalogue Reference 07',
    seriesUsed: ['Outdoor Lights'],
    summary:
      'Coordinated exterior illumination pairing linear frame bollards, recessed step foot lights, and architectural wall fixtures.',
    details: [
      'Low-glare step foot lights guiding elevation changes across stone terraces.',
      'Architectural bollard luminaires and wall sconces framing outdoor living volumes.',
    ],
    heroImage: '/assets/projects/terrace-outdoor.webp',
    heroAlt: 'Modern architectural terrace at dusk illuminated by bollard lights, recessed step lights, and exterior wall fixtures',
    aspect: 'wide',
    gallery: [],
  },
];
