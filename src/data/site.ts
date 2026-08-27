// Configuración central del sitio y datos de contacto.
// NOTA: correo, dirección y horario están PENDIENTES de confirmar con el cliente.
// Reemplazar los valores `null` por los reales y quitar la marca "pendiente" en la UI.

export const site = {
  name: 'Maquinaria Rivas',
  legalName: 'Renta de Maquinaria Rivas, S.A. de C.V.',
  tagline: 'Renta de plantas de luz y maquinaria para construcción en Puebla y región centro.',
  // Descripción semántica para el schema: enfocada al problema del cliente
  // (mantener energía y operación sin interrupciones), sin adjetivos vacíos.
  schemaDescription:
    'Renta, venta y servicio técnico de plantas de luz y maquinaria para construcción en Puebla y la región centro. Entregamos e instalamos generadores diésel de 45 a 700 kVA en sitio para mantener la energía y la operación de obras, industria y eventos sin interrupciones.',
  foundedYear: 1999,
  phone: '222 320 0109',
  phoneE164: '+522223200109',
  whatsappNumber: '522223200109',
  coverage: 'Puebla y región centro del país',

  // Dirección (confirmada por el cliente).
  address: '5 de Mayo 5203, Adolfo López Mateos, 72240 Heroica Puebla de Zaragoza, Pue.',
  addressStreet: '5 de Mayo 5203',
  addressNeighborhood: 'Adolfo López Mateos',
  postalCode: '72240',
  locality: 'Heroica Puebla de Zaragoza',
  region: 'Puebla',
  country: 'MX',
  mapsQuery: '5 de Mayo 5203, Adolfo López Mateos, 72240 Heroica Puebla de Zaragoza, Pue.',

  // Redes sociales → se inyectan en el schema como `sameAs`.
  // Agrega las URLs reales (perfiles oficiales). Vacío = no se emite sameAs.
  social: [
    'https://www.facebook.com/profile.php?id=61561221827077',
    // Agregar Instagram u otras cuando estén disponibles.
  ] as string[],

  // Pendientes de confirmar:
  email: null as string | null,          // ej. 'contacto@maquinariarivas.com'
  hours: null as string | null,          // ej. 'Lun–Vie 8:00–18:00 · Sáb 9:00–14:00'
};

// Enlace a Google Maps (búsqueda/direcciones).
export function mapsLink(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
}

// Enlace de WhatsApp con texto contextual (README §Interactions).
export function wa(text = 'Hola, me gustaría solicitar una cotización.'): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/equipos/', label: 'Equipos' },
  { href: '/servicios/', label: 'Servicios' },
  { href: '/nosotros/', label: 'Nosotros' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contacto/', label: 'Contacto' },
];
