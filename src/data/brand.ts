export const BRAND_INFO = {
  brandName: 'AMBILUX',
  legalName: 'Ambient Works',
  leader: 'Dharmesh Lad',
  tagline: 'Customised lighting to match your design vision',
  motto: 'Let us illuminate your world with a touch of magic',
  phone: '+91 9819 55 29 29',
  phoneHref: 'tel:+919819552929',
  email: 'sales@ambilux.in',
  emailHref: 'mailto:sales@ambilux.in',
  website: 'www.ambilux.in',
  address:
    'Ambient Works, Unit No.-28, Ground Floor, New Sonal Industrial Estate, New Link Rd, Malad (W), Mumbai-400064, Maharashtra, India.',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=New+Sonal+Industrial+Estate+New+Link+Rd+Malad+West+Mumbai+400064',
  gstNo: '27ABAPL0454C1ZB',
  logoDark: '/assets/logo/ambilux-logo-dark.webp',
  logoLight: '/assets/logo/ambilux-logo-dark.webp',
};

export const COMPANY_COPY = {
  manifesto:
    "At Ambient Works, we're more than just an architectural lighting solutions provider; we're a passionate collective of lighting enthusiasts committed to illuminating your vision from concept to completion.",
  legacyParagraphs: [
    'Our rich legacy, honed alongside renowned brands, has gifted us a deep understanding of both local and international markets. This ensures we possess the right tools — and artistry — to transform your dreams into luminous reality.',
    'We source only top-tier OEMs, each item handpicked and subjected to stringent quality assessments, ensuring exceptional products deliver successful project execution.',
    'Led by Dharmesh Lad, we focus on a customer-centric approach, meticulously tailoring solutions that precisely align with your diverse needs. We delve into the heart of each project, understanding your architectural vision and translating it into stunning illumination. This commitment to excellence extends beyond design.',
  ],
  mission:
    'To illuminate possibilities by seamlessly merging innovation, quality, and customer-centric solutions, reinventing the lighting experience globally.',
  vision:
    'To be the beacon of trust and innovation, setting unparalleled standards in the lighting industry while fostering lasting relationships through unwavering commitment and ingenuity.',
  experientialHeading:
    'Beyond lighting fixtures, Ambient Works offers expertise in experiential design, crafting atmospheres that resonate with your vision.',
  experientialBody: [
    "Whether it's the functional elegance of COB spot lights and cylinder lights, acoustic lights, the dynamic artistry of geometric shapes and linear profiles, or the warm ambience of decorative pieces like table lamps, floor lamps, and chandeliers, we have the expertise to bring your vision to life.",
    'We believe in the successful execution of each project, and our collaboration with international brands ensures we have the ideal solution for any requirement.',
  ],
  casambiNote:
    'Fixtures powered by Casambi technology (Bluetooth) — tunable and dimming control for responsive architectural atmospheres.',
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
  homeImage: string;
  homeImageAlt: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'customized-lighting',
    number: '01',
    title: 'Customized Lighting',
    description:
      'We translate architectural visualizations into reality by tailoring fixtures, utilizing expertise from the industry.',
    detail:
      'From bespoke geometric linear configurations and custom-sized acoustic pendants to tailored finishes, every fixture is engineered around the spatial intent of your architecture.',
    image: '/assets/unique/srv-customized.webp',
    imageAlt: 'Custom concentric circular ceiling luminaires crafted for an architectural hospitality lounge',
    homeImage: '/assets/images/service_lighting_craft_1794914230598.webp',
    homeImageAlt: 'Bespoke architectural spotlight illuminating sculpted stone and timber surfaces',
  },
  {
    id: 'testing-validation',
    number: '02',
    title: 'Testing & Validation',
    description:
      'All our products undergo thorough verification and testing according to industry standards before being dispatched.',
    detail:
      'Handpicked from top-tier OEM partners, each luminaire is subjected to stringent quality assessments to ensure reliable performance on site.',
    image: '/assets/unique/srv-testing.webp',
    imageAlt: 'Validated linear architectural ceiling array delivering uniform illumination across a boardroom',
    homeImage: '/assets/unique/home-srv-testing.webp',
    homeImageAlt: 'Quality-tested continuous architectural linear lighting integrated along a timber ceiling',
  },
  {
    id: 'light-planning',
    number: '03',
    title: 'Light Planning',
    description:
      'We provide support for Light Planning, allowing our clients to select the appropriate fixtures.',
    detail:
      'Collaborating closely with architects, interior designers, and project teams to balance functional task illumination, visual comfort, and atmospheric warmth.',
    image: '/assets/unique/srv-planning.webp',
    imageAlt: 'Executive meeting room planned with suspended linear illumination and perimeter downlights',
    homeImage: '/assets/images/acoustic_lighting_lounge_1794914231260.webp',
    homeImageAlt: 'Acoustic pendant luminaires planned over an oak collaboration table',
  },
  {
    id: 'installation-support',
    number: '04',
    title: 'Installation Support',
    description:
      'Our highly experienced technical team offers assistance with installation, ensuring comprehensive after-sales service.',
    detail:
      'From concept through site commissioning and wireless Casambi dimming setup, our technical team stays engaged beyond fixture delivery.',
    image: '/assets/unique/srv-install.webp',
    imageAlt: 'Installed acoustic dome pendant lights and wall accents across a bright commercial interior',
    homeImage: '/assets/unique/home-srv-install.webp',
    homeImageAlt: 'Commissioned recessed pendant cluster and linear fixtures inside a corporate conference suite',
  },
];
