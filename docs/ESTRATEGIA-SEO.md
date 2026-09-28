# Estrategia de posicionamiento SEO — Maquinaria Rivas

> Objetivo de negocio: **atraer leads de renta de plantas de luz y maquinaria _ligera_ para construcción en Puebla y región centro**, y **dejar de atraer** búsquedas de maquinaria pesada (excavadoras, retroexcavadoras, grúas) que hoy generan contactos que no convierten.

Última actualización: 2026-09-27.

---

## 1. Posicionamiento y foco

**Dos ejes co-protagonistas:**
1. **Plantas de luz / generadores diésel** (45–700 kVA) — la especialidad histórica.
2. **Maquinaria ligera para construcción** — compactadoras, bailarinas, apisonadores, cortadoras de pavimento, rotomartillos, demolición, perforación.

**Líneas de apoyo:** torres de iluminación, compresores de aire, soldadoras y herramienta.

**Fuera de alcance (declararlo explícitamente):** excavadoras, retroexcavadoras, grúas, bulldozers, motoconformadoras, minicargadores. Esto ya se refleja en:
- FAQ general (`src/data/contenido.ts`) → schema `FAQPage` en Contacto.
- FAQ de la landing `/maquinaria-ligera/` (`src/data/categorias.ts`).
- Descripción del schema `LocalBusiness` y `Service`.

Decir "no manejamos maquinaria pesada" es **filtro de leads + señal AEO**: los buscadores IA responden la pregunta negativa con nuestra fuente y dejamos de recibir contactos equivocados.

---

## 2. Arquitectura de keywords (clusters)

Cada cluster = una landing pilar + artículos de blog que enlazan a ella (topic authority).

### Cluster A — Plantas de luz (pilar: `/plantas-de-luz/`)
| Intención | Keywords objetivo |
|---|---|
| Transaccional | renta de plantas de luz Puebla · renta de generadores diésel Puebla · alquiler planta de luz Puebla |
| Por capacidad | renta planta de luz 100 kVA · generador 500 kVA renta · planta de luz 45 kVA |
| Por uso | planta de luz para evento · generador para obra · respaldo de energía industrial |
| Informacional (blog) | qué capacidad de planta de luz necesito · cuánto consume un generador diésel · renta vs compra planta de luz |

### Cluster B — Maquinaria ligera (pilar: `/maquinaria-ligera/`)
| Intención | Keywords objetivo |
|---|---|
| Transaccional | renta de maquinaria ligera Puebla · renta de compactadora Puebla · renta de bailarina vibratoria · renta de apisonador |
| Por equipo | renta cortadora de pavimento · renta rotomartillo · renta de equipo de demolición · renta perforadora |
| Por uso | compactación de suelos · corte de concreto · demolición obra civil |
| Informacional (blog) | qué compactadora necesito para mi obra · bailarina vs plancha vibratoria · cuándo rentar en vez de comprar maquinaria ligera |

### Cluster C — Torres de iluminación (pilar: `/torres-de-iluminacion/`)
renta de torre de iluminación Puebla · iluminación para obra nocturna · torre de luz para evento.

### Cluster D — Compresores (pilar: `/compresores/`)
renta de compresor de aire Puebla · compresor para herramienta neumática · qué compresor necesito (CFM/PSI).

### Cluster E — Soldadoras y herramienta (pilar: `/soldadoras/`)
renta de soldadora Puebla · planta de soldar en renta · herramienta industrial en renta.

**Modificadores locales** a combinar en todos los clusters: *Puebla, Cholula, Atlixco, Amozoc, Cuautlancingo, Tlaxcala, región centro, cerca de mí*.

---

## 3. Mapa de contenido (on-page)

| URL | Rol | Keyword principal | Estado |
|---|---|---|---|
| `/` | Home | renta de plantas de luz y maquinaria ligera Puebla | ✅ optimizada |
| `/plantas-de-luz/` | Pilar A | renta de plantas de luz Puebla | ✅ |
| `/maquinaria-ligera/` | Pilar B | renta de maquinaria ligera Puebla | ✅ + FAQ "no pesada" |
| `/torres-de-iluminacion/` | Pilar C | renta de torres de iluminación Puebla | ✅ |
| `/compresores/` | Pilar D | renta de compresor de aire Puebla | ✅ |
| `/soldadoras/` | Pilar E | renta de soldadoras Puebla | ✅ |
| `/equipos/` | Hub catálogo | equipos en renta Puebla | ✅ |
| `/servicios/` | Servicio | mantenimiento de plantas de luz Puebla | ✅ |
| `/nosotros/` | Confianza (E-E-A-T) | — | ✅ |
| `/contacto/` | Conversión + FAQPage | cotizar renta Puebla | ✅ |
| `/blog/` | Topic authority | guías | ✅ |

**Reglas on-page (ya aplicadas, mantener):**
- 1 solo `<h1>` por página con la keyword principal.
- `title` < 60 car., `meta description` 140–160 car. con CTA y ciudad.
- Alt text descriptivo con keyword natural (ya presente).
- Enlazado interno pilar ↔ blog ↔ categorías relacionadas (`related` en `categorias.ts`).

---

## 4. Plan editorial de blog (topic authority + AEO)

Publicar **1–2 artículos/mes**. Cada uno responde una pregunta real, enlaza a su pilar y termina en CTA de WhatsApp.

**Próximos artículos priorizados:**
1. *Qué compactadora necesito según el tipo de suelo* → pilar Maquinaria ligera. (Alta intención, hueco de contenido.)
2. *Bailarina vibratoria vs plancha compactadora: cuál rentar* → comparativa.
3. *Maquinaria ligera vs maquinaria pesada: qué necesita tu obra realmente* → **captura y redirige** el tráfico de "maquinaria pesada" aclarando qué SÍ rentamos.
4. *Cuánto cuesta rentar una planta de luz en Puebla (guía de precios)* → intención comercial alta.
5. *Checklist de seguridad al rentar equipo ligero para obra*.
6. *Torres de iluminación: cuántas necesito para mi obra nocturna*.

**Formato AEO (contestar máquinas):** cada artículo abre con un resumen "**En corto:**" de 2–3 líneas (ya se usa), incluye una tabla, y cierra con FAQ. Marcar las FAQ con schema `FAQPage` cuando aplique.

---

## 5. SEO local (lo de mayor ROI para este negocio)

El grueso de las conversiones vendrá de búsquedas locales + Google Maps.

**Google Business Profile (GBP) — prioridad #1:**
- Reclamar/verificar la ficha con la dirección exacta: *5 de Mayo 5203, Adolfo López Mateos, 72240 Puebla*.
- Categoría principal: **"Empresa de alquiler de equipos"** / secundarias: "Alquiler de generadores", "Servicio de reparación".
- **NAP consistente** (Nombre, Dirección, Teléfono) idéntico al del sitio y schema.
- Subir fotos reales (equipo, entregas, obra) — reutilizar las de `/public/assets/photos/`.
- Publicar "novedades" cada 1–2 semanas y responder reseñas.
- **Pedir reseñas** activamente por WhatsApp tras cada renta (link directo a reseña). Las reseñas son el factor #1 del ranking local.

**On-site local:**
- ✅ Schema `LocalBusiness` con dirección, `areaServed` por ciudades, `hasMap`, `hasOfferCatalog`.
- ✅ Meta `geo.region` (MX-PUE) y `geo.placename`.
- ⏳ **Pendiente de confirmar con cliente:** `email`, `hours` (horario) → completar en `src/data/site.ts` para emitir `openingHours` y `email` en el schema.
- ⏳ Añadir `GeoCoordinates` (lat/long exactos del local) al schema una vez confirmados — mejora el pin en Maps.
- Considerar directorios locales / citas NAP (Sección Amarilla, directorios de construcción de Puebla).

---

## 6. SEO técnico (estado)

| Elemento | Estado |
|---|---|
| `sitemap-index.xml` con priority/changefreq/lastmod | ✅ (`astro.config.mjs`) |
| `robots.txt` con allowlist de bots IA + referencia a sitemap | ✅ |
| Canonical por página | ✅ (`Base.astro`) |
| Open Graph + Twitter Card | ✅ |
| Schema: LocalBusiness, Service, FAQPage, BreadcrumbList, BlogPosting, OfferCatalog | ✅ |
| Meta robots `max-image-preview:large` | ✅ |
| HTML `lang="es"`, imágenes con `width/height`, `loading=lazy` | ✅ |
| CSS inline / preload de hero (Core Web Vitals) | ✅ |
| Imágenes optimizadas a **WebP** con resize (5.6 MB → 2.2 MB, hero 876→327 KB) | ✅ |
| Página **404** útil con enlaces a categorías | ✅ (`src/pages/404.astro`) |
| Analítica sin cookies (Plausible) cableada | ✅ cableada, ⏳ activar poniendo dominio en `site.ts` |

**Pendientes técnicos:**
- **Activar analítica**: poner el dominio en `site.analytics.plausibleDomain` (`src/data/site.ts`) al desplegar.
- Al desplegar, confirmar que `site` en `astro.config.mjs` apunta al dominio real de producción (hoy `https://www.maquinariarivas.com`).
- Dar de alta el sitio y el sitemap en **Google Search Console** y **Bing Webmaster Tools**.
- Verificar Core Web Vitals reales con PageSpeed Insights tras el deploy.
- (Opcional) Bajar más el hero (~180 KB) con calidad 68 si PageSpeed lo pide.

---

## 7. Off-page / autoridad

- Enlaces desde proveedores y marcas que manejamos (Cummins, Perkins, Wacker Neuson, etc.) si tienen directorio de distribuidores/rentas.
- Cámaras y asociaciones de construcción de Puebla (CMIC), directorios industriales locales.
- Alianzas con constructoras/organizadores de eventos (menciones + backlink).
- Contenido enlazable: guías de precios y capacidad (los artículos del cluster) atraen enlaces naturales.

---

## 8. Medición

**KPIs:**
- Leads por WhatsApp atribuibles a búsqueda orgánica/Maps (preguntar "¿cómo nos encontró?" o usar links UTM en CTA).
- Posición media y clics por cluster (Search Console).
- Llamadas/solicitudes desde GBP (insights de Maps).
- % de leads de maquinaria **ligera** vs pesada (debe subir el ligero, bajar el pesado).

**Herramientas:** Google Search Console, Google Business Profile Insights, Google Analytics / Umami (pendiente instalar), PageSpeed Insights.

**Cadencia de revisión:** mensual — posiciones, contenido nuevo publicado, reseñas conseguidas, ajustes de meta según CTR.

---

## 9. Backlog inmediato (orden sugerido)

1. **Reclamar y optimizar Google Business Profile** (mayor ROI).
2. Confirmar y cargar `email` + `hours` en `site.ts`.
3. Alta en Search Console + envío de sitemap.
4. Publicar artículo #3 ("ligera vs pesada") para redirigir el tráfico mal calificado.
5. Sistema de solicitud de reseñas por WhatsApp post-renta.
6. Añadir `GeoCoordinates` al schema.
