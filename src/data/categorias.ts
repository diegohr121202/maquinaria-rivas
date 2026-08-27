// Landings por categoría (SEO). Contenido distinto por categoría — no páginas
// casi idénticas variando una keyword (ver README §Arquitectura SEO).
// Generan rutas top-level: /plantas-de-luz/, /torres-de-iluminacion/, etc.

export interface Spec { k: string; v: string; hi?: boolean; }
export interface Faq { q: string; a: string; }
export interface Categoria {
  slug: string;
  kicker: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  heroPhoto: string;
  heroAlt: string;
  featurePhoto: string;
  featureAlt: string;
  featureTitle: string;
  featureDesc: string;
  specs?: Spec[];
  benefits?: string[];
  usos: string[];
  serviceType: string;
  waText: string;
  faq: Faq[];
  related: string[]; // slugs de otras categorías
}

export const categorias: Categoria[] = [
  {
    slug: 'plantas-de-luz',
    kicker: 'Plantas de luz',
    h1: 'Renta de plantas de luz en Puebla',
    metaTitle: 'Renta de plantas de luz en Puebla (45–700 kVA) | Maquinaria Rivas',
    metaDescription:
      'Renta de plantas de luz diésel de 45 a 700 kVA en Puebla y región centro. Entrega e instalación en sitio, mantenimiento incluido y servicio técnico. Desde 1999.',
    intro:
      'Generadores diésel para obra, industria, respaldo, eventos y emergencias. Entregamos e instalamos en sitio y damos soporte técnico durante toda la renta.',
    heroPhoto: 'planta-destacada.jpg',
    heroAlt: 'Planta de luz diésel de gran capacidad en operación en Puebla',
    featurePhoto: 'eq-plantas.jpg',
    featureAlt: 'Planta de luz industrial lista para trabajar en obra',
    featureTitle: 'La energía no puede detener tu operación',
    featureDesc:
      'Elegimos contigo la capacidad correcta según tu carga eléctrica y llevamos el equipo listo para trabajar. Renta, venta y servicio técnico de generadores en un solo lugar.',
    specs: [
      { k: 'Rango de capacidad', v: '45–700 kVA', hi: true },
      { k: 'Combustible', v: 'Diésel de bajo consumo' },
      { k: 'Entrega e instalación', v: 'En sitio' },
      { k: 'Mantenimiento', v: 'Preventivo incluido' },
      { k: 'Soporte técnico', v: 'Durante toda la renta' },
    ],
    usos: ['Obra y construcción', 'Industria y procesos', 'Respaldo y emergencias', 'Eventos', 'Obra pública y gobierno'],
    serviceType: 'Renta de plantas de luz y generadores diésel',
    waText: 'Hola, me interesa cotizar una planta de luz.',
    faq: [
      { q: '¿Cuánto cuesta rentar una planta de luz en Puebla?', a: 'El costo depende de la capacidad en kVA, los días de renta y si requiere instalación. Cotizamos sin costo por WhatsApp: con tu carga eléctrica y fechas te damos un precio cerrado.' },
      { q: '¿Qué capacidad de planta de luz necesito?', a: 'Como regla general, divide tu carga en kW entre 0.8 y suma un margen del 20 al 25 %. Si nos compartes tus equipos, te ayudamos a elegir la capacidad exacta entre 45 y 700 kVA.' },
      { q: '¿Entregan e instalan la planta de luz en sitio?', a: 'Sí. La entrega e instalación en sitio están incluidas en Puebla y la región centro; dejamos el equipo operando y listo para trabajar.' },
      { q: '¿El mantenimiento está incluido en la renta?', a: 'Sí. Las plantas de luz incluyen mantenimiento preventivo y soporte técnico durante toda la renta.' },
    ],
    related: ['torres-de-iluminacion', 'compresores', 'maquinaria-ligera'],
  },
  {
    slug: 'torres-de-iluminacion',
    kicker: 'Torres de iluminación',
    h1: 'Renta de torres de iluminación en Puebla',
    metaTitle: 'Renta de torres de iluminación en Puebla | Maquinaria Rivas',
    metaDescription:
      'Renta de torres de iluminación de gran alcance para obra nocturna, eventos e industria en Puebla y región centro. Entrega en sitio y servicio técnico.',
    intro:
      'Iluminación temporal de gran alcance para obra nocturna, eventos, industria y seguridad perimetral, con entrega e instalación en sitio.',
    heroPhoto: 'torres.jpg',
    heroAlt: 'Torre de iluminación iluminando una obra nocturna',
    featurePhoto: 'torres.jpg',
    featureAlt: 'Torre de iluminación de gran alcance en operación',
    featureTitle: 'Ilumina donde el proyecto lo necesita',
    featureDesc:
      'Torres portátiles que cubren grandes superficies para mantener la operación segura y productiva de noche o en zonas sin luz fija.',
    benefits: [
      'Iluminación de gran alcance y cobertura amplia',
      'Traslado e instalación en sitio',
      'Ideales para obra nocturna, eventos y seguridad',
      'Soporte técnico durante la renta',
    ],
    usos: ['Obra nocturna', 'Eventos', 'Industria', 'Seguridad perimetral'],
    serviceType: 'Renta de torres de iluminación',
    waText: 'Hola, me interesa cotizar una torre de iluminación.',
    faq: [
      { q: '¿Para qué sirve una torre de iluminación?', a: 'Para iluminar de forma temporal grandes superficies sin luz fija: obra nocturna, eventos, patios industriales y seguridad perimetral.' },
      { q: '¿Cuánta área ilumina una torre de iluminación?', a: 'Una torre cubre superficies amplias gracias a su altura y a reflectores de gran alcance; la cobertura exacta depende del modelo. Te recomendamos la torre según el área que necesitas iluminar.' },
      { q: '¿Se pueden rentar torres para un evento de un día?', a: 'Sí. Rentamos por proyecto, incluidos eventos de uno o pocos días, con entrega e instalación en sitio.' },
      { q: '¿Entregan e instalan las torres en sitio?', a: 'Sí, llevamos e instalamos las torres en tu obra o evento en Puebla y la región centro.' },
    ],
    related: ['plantas-de-luz', 'compresores', 'maquinaria-ligera'],
  },
  {
    slug: 'compresores',
    kicker: 'Compresores de aire',
    h1: 'Renta de compresores de aire en Puebla',
    metaTitle: 'Renta de compresores de aire en Puebla | Maquinaria Rivas',
    metaDescription:
      'Renta de compresores de aire para herramienta neumática e instalaciones industriales en Puebla y región centro. Entrega en sitio y servicio técnico.',
    intro:
      'Suministro de aire a presión para herramienta neumática, instalaciones industriales y aplicaciones de construcción.',
    heroPhoto: 'compresores.jpg',
    heroAlt: 'Compresor de aire para construcción en obra',
    featurePhoto: 'eq-compresores.jpg',
    featureAlt: 'Compresor de aire industrial en sitio',
    featureTitle: 'Aire a presión para tu herramienta y proceso',
    featureDesc:
      'Compresores para alimentar herramienta neumática y procesos que requieren aire constante, entregados y listos para conectar en tu instalación u obra.',
    benefits: [
      'Aire a presión constante y confiable',
      'Para herramienta neumática e industria',
      'Entrega en sitio',
      'Mantenimiento y soporte técnico',
    ],
    usos: ['Herramienta neumática', 'Instalaciones industriales', 'Construcción', 'Mantenimiento industrial'],
    serviceType: 'Renta de compresores de aire',
    waText: 'Hola, me interesa cotizar un compresor de aire.',
    faq: [
      { q: '¿Qué compresor de aire necesito para mi herramienta?', a: 'Depende del caudal (CFM) y la presión (PSI) que exija tu herramienta neumática. Dinos qué herramienta usarás y te recomendamos el compresor adecuado.' },
      { q: '¿Para qué aplicaciones sirven los compresores?', a: 'Para alimentar herramienta neumática, procesos industriales que requieren aire constante y trabajos de construcción.' },
      { q: '¿Entregan el compresor en sitio?', a: 'Sí, entregamos el equipo en tu instalación u obra en Puebla y la región centro, listo para conectar.' },
      { q: '¿Puedo rentar por día o por proyecto?', a: 'Sí. Rentamos por el tiempo que dure tu proyecto, desde días hasta rentas prolongadas.' },
    ],
    related: ['plantas-de-luz', 'soldadoras', 'maquinaria-ligera'],
  },
  {
    slug: 'soldadoras',
    kicker: 'Soldadoras y herramienta',
    h1: 'Renta de soldadoras y herramienta en Puebla',
    metaTitle: 'Renta de soldadoras y herramienta industrial en Puebla | Rivas',
    metaDescription:
      'Renta de soldadoras y herramienta profesional para trabajo industrial y de construcción en Puebla y región centro. Entrega en sitio y servicio técnico.',
    intro:
      'Equipos de soldadura y herramienta profesional para trabajo industrial, estructuras y construcción.',
    heroPhoto: 'soldadoras.jpg',
    heroAlt: 'Soldadora profesional en trabajo industrial',
    featurePhoto: 'soldadoras.jpg',
    featureAlt: 'Equipo de soldadura para construcción y estructuras',
    featureTitle: 'Equipos listos para trabajo pesado',
    featureDesc:
      'Soldadoras y herramienta para trabajos de estructura, mantenimiento y construcción, con la confiabilidad que el trabajo industrial exige.',
    benefits: [
      'Equipos profesionales para trabajo industrial',
      'Para estructuras, mantenimiento y obra',
      'Entrega en sitio',
      'Soporte técnico durante la renta',
    ],
    usos: ['Trabajo industrial', 'Estructuras metálicas', 'Construcción', 'Mantenimiento'],
    serviceType: 'Renta de soldadoras y herramienta industrial',
    waText: 'Hola, me interesa cotizar soldadoras o herramienta.',
    faq: [
      { q: '¿Qué soldadoras y herramienta rentan?', a: 'Equipos de soldadura y herramienta profesional para trabajo industrial, estructuras metálicas, mantenimiento y construcción.' },
      { q: '¿Entregan la soldadora en sitio?', a: 'Sí, entregamos el equipo en tu obra o taller en Puebla y la región centro.' },
      { q: '¿Puedo rentar por proyecto?', a: 'Sí. La renta se ajusta a la duración de tu proyecto, con soporte técnico durante el periodo.' },
      { q: '¿Incluyen soporte técnico durante la renta?', a: 'Sí, damos soporte técnico mientras el equipo está contigo para que trabajes sin interrupciones.' },
    ],
    related: ['compresores', 'plantas-de-luz', 'maquinaria-ligera'],
  },
  {
    slug: 'maquinaria-ligera',
    kicker: 'Maquinaria ligera',
    h1: 'Renta de maquinaria ligera para construcción en Puebla',
    metaTitle: 'Renta de maquinaria ligera para construcción en Puebla | Rivas',
    metaDescription:
      'Renta de maquinaria ligera para construcción en Puebla: compactadoras, bailarinas, cortadoras y equipo de demolición y perforación. Entrega en sitio.',
    intro:
      'Compactación, corte, demolición y perforación para obra civil y edificación, con equipo confiable listo para trabajar.',
    heroPhoto: 'g-maniobra.jpg',
    heroAlt: 'Maniobra con maquinaria ligera en obra de construcción',
    featurePhoto: 'g-maniobra.jpg',
    featureAlt: 'Maquinaria ligera para compactación y obra civil',
    featureTitle: 'La maquinaria que tu obra necesita, cuando la necesita',
    featureDesc:
      'Bailarinas y compactadoras vibratorias, cortadoras de pavimento, rotomartillos y equipo de demolición para avanzar en cada etapa de la obra.',
    benefits: [
      'Compactadoras, bailarinas y apisonadores',
      'Cortadoras y equipo de perforación y demolición',
      'Entrega en sitio',
      'Mantenimiento y soporte técnico',
    ],
    usos: ['Compactación de suelos', 'Corte de pavimento', 'Demolición', 'Perforación', 'Obra civil'],
    serviceType: 'Renta de maquinaria ligera para construcción',
    waText: 'Hola, me interesa cotizar maquinaria ligera para obra.',
    faq: [
      { q: '¿Qué maquinaria ligera puedo rentar?', a: 'Compactadoras y bailarinas vibratorias, apisonadores, cortadoras de pavimento, rotomartillos y equipo de demolición y perforación.' },
      { q: '¿Para qué obras sirve la maquinaria ligera?', a: 'Para compactación de suelos, corte de pavimento, demolición, perforación y trabajos de obra civil y edificación.' },
      { q: '¿Entregan la maquinaria en sitio?', a: 'Sí, la llevamos a tu obra en Puebla y la región centro, lista para trabajar.' },
      { q: '¿Se renta por día?', a: 'Sí. Rentamos por el tiempo que necesites, desde un día hasta la duración completa de la obra.' },
    ],
    related: ['plantas-de-luz', 'compresores', 'torres-de-iluminacion'],
  },
];

export const bySlug = (slug: string) => categorias.find((c) => c.slug === slug);
