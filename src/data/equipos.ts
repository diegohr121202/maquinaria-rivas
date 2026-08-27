// Catálogo de equipos. Cada tarjeta enlaza a WhatsApp con texto contextual.
export interface Equipo {
  slug: string;
  title: string;
  cat: string;        // clave de categoría para el filtro
  catLabel: string;
  photo: string;      // en /public/assets/photos/
  alt: string;
  desc: string;
  wa: string;         // texto para el mensaje de WhatsApp
  landing: string;    // ruta a la landing de categoría (linking interno)
}

export const categorias = [
  { key: 'todos', label: 'Todos' },
  { key: 'plantas', label: 'Plantas de luz' },
  { key: 'ligera', label: 'Maquinaria ligera' },
  { key: 'compresores', label: 'Compresores' },
  { key: 'torres', label: 'Torres de iluminación' },
  { key: 'soldadoras', label: 'Soldadoras' },
];

export const equipos: Equipo[] = [
  {
    slug: 'plantas-de-luz', title: 'Plantas de luz', cat: 'plantas', catLabel: 'Plantas de luz',
    photo: 'plantas.jpg', alt: 'Planta de luz diésel Rivas en operación',
    desc: 'Generadores diésel 45–700 kVA para obra, industria, respaldo y eventos, con entrega e instalación en sitio.',
    wa: 'Hola, me interesa cotizar una planta de luz.', landing: '/plantas-de-luz/',
  },
  {
    slug: 'compresores-de-aire', title: 'Compresores de aire', cat: 'compresores', catLabel: 'Compresores',
    photo: 'compresores.jpg', alt: 'Compresor de aire para construcción',
    desc: 'Suministro de aire a presión para herramienta neumática e instalaciones industriales.',
    wa: 'Hola, me interesa cotizar un compresor de aire.', landing: '/compresores/',
  },
  {
    slug: 'torres-de-iluminacion', title: 'Torres de iluminación', cat: 'torres', catLabel: 'Torres de iluminación',
    photo: 'torres.jpg', alt: 'Torre de iluminación para obra nocturna',
    desc: 'Iluminación temporal de gran alcance para obra nocturna, industria y eventos.',
    wa: 'Hola, me interesa cotizar una torre de iluminación.', landing: '/torres-de-iluminacion/',
  },
  {
    slug: 'soldadoras-y-herramientas', title: 'Soldadoras y herramientas', cat: 'soldadoras', catLabel: 'Soldadoras',
    photo: 'soldadoras.jpg', alt: 'Soldadora profesional para trabajo industrial',
    desc: 'Equipos profesionales de soldadura y herramienta para trabajo industrial y de construcción.',
    wa: 'Hola, me interesa cotizar soldadoras o herramienta.', landing: '/soldadoras/',
  },
  {
    slug: 'bailarinas-industriales', title: 'Bailarinas y compactadoras', cat: 'ligera', catLabel: 'Maquinaria ligera',
    photo: 'eq-compresores.jpg', alt: 'Compactadora vibratoria para obra civil',
    desc: 'Compactadoras vibratorias y apisonadores para zanjas y compactación de suelos en obra civil.',
    wa: 'Hola, me interesa cotizar bailarinas o compactadoras.', landing: '/maquinaria-ligera/',
  },
  {
    slug: 'maquinaria-ligera', title: 'Corte, demolición y perforación', cat: 'ligera', catLabel: 'Maquinaria ligera',
    photo: 'eq-plantas.jpg', alt: 'Maquinaria ligera para corte y perforación',
    desc: 'Cortadoras, rotomartillos y equipo de demolición y perforación para necesidades de obra.',
    wa: 'Hola, me interesa cotizar maquinaria ligera para obra.', landing: '/maquinaria-ligera/',
  },
  {
    slug: 'mantenimiento', title: 'Mantenimiento y servicio', cat: 'plantas', catLabel: 'Plantas de luz',
    photo: 'g-mantenimiento.jpg', alt: 'Técnico dando mantenimiento a una planta de luz',
    desc: 'Servicio técnico y pólizas de mantenimiento preventivo para generadores y transferencias.',
    wa: 'Hola, necesito servicio técnico o mantenimiento para mi equipo.', landing: '/servicios/',
  },
];
