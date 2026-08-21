# Handoff: Sitio web Maquinaria Rivas

## Overview
Sitio web corporativo para **Renta Maq Rivas S.A. de C.V.** (Maquinaria Rivas), empresa familiar fundada en 1999 en Puebla, México, dedicada a la renta, venta y servicio técnico de plantas de luz y maquinaria ligera para construcción.

Objetivos del sitio:
1. Generar solicitudes de cotización (conversión principal: WhatsApp).
2. Comunicar confianza, experiencia técnica y trayectoria (25+ años).
3. Posicionar orgánicamente en búsquedas de renta/venta/mantenimiento de plantas de luz y maquinaria en Puebla.
4. Proyectar una empresa industrial profesional manteniendo cercanía de negocio familiar.

## About the Design Files
Los archivos incluidos en `design/` son **referencias de diseño creadas en HTML** — prototipos que muestran la apariencia y el comportamiento previstos, **no código de producción para copiar directamente**.

La tarea es **recrear estos diseños en el entorno del codebase destino** (Next.js, Astro, WordPress, React, etc.) usando sus patrones y librerías establecidas. Si aún no existe un codebase, elegir el framework adecuado — para este proyecto se recomienda **Next.js (App Router) o Astro**, por el requisito de SEO estático + rendimiento móvil.

`Maquinaria Rivas.dc.html` es un prototipo de una sola página con navegación por estado (4 vistas). **En producción cada vista debe ser una ruta real** con su propio `<title>`, meta description, H1 y URL indexable (ver sección "Arquitectura SEO").

## Fidelity
**Alta fidelidad (hifi).** Colores, tipografía, escala tipográfica, espaciado y copy son finales y deben recrearse con precisión. Las fotografías son placeholders (ver "Assets").

## Screens / Views

El prototipo contiene 4 vistas, conmutadas por `state.page` ('inicio' | 'equipos' | 'nosotros' | 'contacto').

---

### Layout global

- Contenedor de contenido: `max-width: 1280px; margin: 0 auto; padding: 0 40px`.
- Fondo del documento: `#0D0F0C`. Superficies alternas: `#0A0C09` (hero, marquee, CTA final, footer) y `#111410` (secciones intercaladas).
- Separadores de sección: `border-bottom: 1px solid rgba(237,237,230,0.09)`.
- Ritmo vertical de secciones: `padding: 110px 40px` (desktop). CTA final: `140px`.
- Grids de dos columnas: `grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 72px; align-items: center`.
- Grids de pilares/casos: `repeat(auto-fit, minmax(260px, 1fr)); gap: 52px`.

### Header (global, sticky)

- `position: sticky; top: 0; z-index: 50`
- `background: rgba(13,15,12,0.92)`, `backdrop-filter: saturate(140%) blur(8px)`, `border-bottom: 1px solid rgba(237,237,230,0.09)`
- Interior: `padding: 22px 40px; display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap`
- Logo: `assets/logo-rivas.png`, `height: 60px`, clickeable → Inicio. **Nota:** el archivo es un lockup cuadrado 1024×1024 con el nombre dentro de la marca; por debajo de ~56px de alto el texto es ilegible. Solicitar al cliente una variante horizontal / solo-wordmark para poder reducir la altura del header.
- Nav: `display:flex; gap:36px`. Botones de texto, `font-size:13px; letter-spacing:0.02em; font-weight:400`. Inactivo `#8D8F85`; activo `#F4F4EE` con `border-bottom: 1px solid #A8C98A; padding-bottom:3px`.
- CTA: "Solicitar cotización" — `background:#A8C98A; color:#0D0F0C; padding:11px 22px; font-size:13px; letter-spacing:0.03em`, sin border-radius.
- **En producción** la navegación debe incluir: Inicio, Plantas de luz, Maquinaria, Servicios, Pólizas de mantenimiento, Nosotros, Blog, Contacto (el prototipo solo tiene 4 por alcance acordado).

---

### 1. Inicio

Narrativa de la página (orden intencional, no reordenar sin motivo):
necesidad → solución → experiencia → equipo específico → marcas → mantenimiento → confianza → cotización.

**1.1 Hero**
- `position:relative; width:100%; height:84vh; min-height:660px; background:#0A0C09`
- Imagen de fondo a sangre completa (placeholder `#hero-main`), + overlay `position:absolute; inset:0; background: rgba(10,12,9,0.94); pointer-events:none`.
  **Importante:** el overlay es casi opaco a propósito porque el placeholder de imagen muestra texto centrado. Con una fotografía real, bajar a `rgba(10,12,9,0.62)`–`0.72` y verificar contraste WCAG AA sobre la zona del H1.
- Bloque de copy anclado abajo: `position:absolute; left:0; bottom:0; right:0; padding: 0 40px 56px`.
- Kicker: "Desde 1999 — Puebla y región centro de México" — `#A8C98A; font-size:11.5px; letter-spacing:0.16em; text-transform:uppercase; margin-bottom:24px`.
- H1: "Renta y venta de plantas de luz y maquinaria para construcción en Puebla" — Source Serif 4, `font-size: clamp(32px, 4.4vw, 52px); line-height:1.18; font-weight:500; color:#F4F4EE; max-width:720px`.
- Supporting: "Renta, venta, servicio técnico y refacciones desde 1999. Equipos listos para obra, industria, gobierno y eventos." — `#9EA096; 16px; line-height:1.75; max-width:560px`.
- CTA primario "Solicitar cotización" (botón verde) + CTA secundario "Ver equipos" (texto con `border-bottom: 1px solid rgba(237,237,230,0.35)`), `gap:32px`.
- Indicadores de confianza en fila, sobre `border-top: 1px solid rgba(237,237,230,0.14); padding-top:22px; gap:28px`, `#8D8F85; 12.5px`:
  "Desde 1999" · "Servicio técnico especializado" · "Renta · Venta · Reparación" · "Puebla y región centro".

**1.2 Marcas (marquee)**
- Fondo `#0A0C09`, `padding: 38px 0`, `overflow:hidden`.
- Label centrado "Marcas con las que trabajamos" — `#6E7066; 11px; letter-spacing:0.16em; uppercase`.
- Track: `display:flex; width:max-content; animation: marquee 34s linear infinite`, keyframes `from{translateX(0)} to{translateX(-50%)}`; la lista se renderiza **duplicada** para el loop continuo.
- Ítems: Source Serif 4, `16px; color:#83857A; padding: 0 38px; white-space:nowrap`.
- Marcas (reales, confirmadas por el cliente): Wacker Neuson, Shindaiwa, Perkins, Multiquip, MPOWER, Mikasa, Makita, Hyundai, Husky, Honda, Hilti, FG Wilson, Endress, Cummins, CIPSA, Bosch, Atlas Copco, Airman, Briggs & Stratton.
- **En producción**: sustituir texto por logos SVG/PNG monocromáticos de altura visual consistente, color recuperado al hover. Respetar `prefers-reduced-motion` (ya implementado: `.marquee-track { animation: none }`).

**1.3 Soluciones** — "Lo que puede rentar o comprar con nosotros" (H2 36px)
Lista vertical (no tarjetas). Cada fila: `grid; repeat(auto-fit,minmax(280px,1fr)); gap:48px; padding:44px 0; border-top:1px solid rgba(237,237,230,0.1)`, imagen `height:210px` + texto.
Categorías y copy exacto:
1. **Plantas de luz** — "Renta, venta y servicio técnico de generadores para obra, industria y respaldo."
2. **Maquinaria ligera** — "Compactación, corte, demolición y perforación para necesidades de obra."
3. **Torres de iluminación** — "Iluminación temporal para obra nocturna, industria y eventos."
4. **Compresores de aire** — "Soluciones neumáticas para aplicaciones industriales y de construcción."
5. **Soldadoras y herramientas** — "Equipos profesionales para trabajo industrial y de construcción."
Título de fila: Work Sans `19px/400 #F4F4EE`. Body: `#8D8F85; 14.5px; line-height:1.85; max-width:420px`. Link "Ver equipos": `#A8C98A; 13.5px; border-bottom:1px solid rgba(168,201,138,0.4)`.
**En producción cada categoría enlaza a su landing propia** (ver arquitectura SEO).

**1.4 ¿Por qué Rivas?** — fondo `#111410`. Kicker + grid de 4 pilares. Títulos en Source Serif 4 `23px`.
1. **Más de 25 años de experiencia** — "Desde 1999 resolviendo necesidades de energía y maquinaria en la región."
2. **Equipo confiable** — "Mantenimiento y revisión para que la maquinaria llegue preparada al proyecto."
3. **Servicio técnico especializado** — "Personal con experiencia en diagnóstico, reparación y mantenimiento."
4. **Atención cercana** — "Trato directo y acompañamiento antes, durante y después de la renta o compra."

**1.5 Plantas de luz (destacada)** — imagen izquierda `height:420px` + copy derecha.
H2 Source Serif 4 32px: "La energía no puede detener tu operación". Body: "Ofrecemos plantas de luz para obras, empresas, industria, respaldo, eventos y emergencias, con entrega e instalación en sitio."
CTA "Cotizar planta de luz" (verde) + secundario "Ver plantas de luz".

**1.6 Pólizas de mantenimiento** — fondo `#111410`, copy izquierda + imagen derecha `height:360px`.
H2 30px: "Tu planta de luz debe estar lista antes de que la necesites".
Body: "Pólizas de mantenimiento para generadores de luz y transferencias, con revisión programada y servicio técnico especializado."
Lista de beneficios, cada uno `padding:14px 0; border-bottom:1px solid rgba(237,237,230,0.1); color:#C9CBC1; 14.5px`:
- Mantenimiento preventivo programado
- Revisión de generador y transferencia
- Detección anticipada de fallas
- Mayor confiabilidad y vida útil del equipo
CTA de texto: "Conocer pólizas de mantenimiento" → **landing dedicada** `/polizas-de-mantenimiento/`.

**1.7 Empresa familiar** — copy izquierda + imagen derecha `height:360px`.
H2 30px: "Más de 25 años haciendo que los proyectos sigan avanzando".
Body: "Nacimos en 1999 como un negocio familiar en Puebla. La experiencia acumulada en campo se refleja hoy en conocimiento técnico, servicio y relaciones de largo plazo con nuestros clientes."
CTA texto: "Conoce nuestra historia" → /nosotros/.

**1.8 Casos de uso** — grid de 3. Títulos Work Sans 18px/400.
- **Industria** — "Respaldo energético y continuidad operativa para plantas y procesos."
- **Eventos** — "Generadores y torres de iluminación para eventos temporales."
- **Gobierno** — "Energía y maquinaria para obra pública y proyectos institucionales."
(El cliente seleccionó estos tres. Construcción y Emergencias son extensiones naturales si más adelante los quiere.)

**1.9 Clientes y proyectos** — fondo `#111410`. Kicker + nota explícita de placeholder: "Espacio reservado para logos y casos de clientes reales — se incorporan cuando estén disponibles." Grid de 4 slots `height:56px`, `opacity:0.6`.
**No inventar métricas ni logos.** La sección se puebla solo con datos verificados.

**1.10 CTA final** — fondo `#0A0C09`, `padding:140px 40px`, contenido centrado `max-width:660px`.
H2 32px: "Cuéntanos qué necesitas y te ayudamos a encontrar el equipo adecuado".
Body: "Plantas de luz, maquinaria, mantenimiento o refacciones. Nuestro equipo puede ayudarte a identificar la solución adecuada para tu proyecto."
CTA "Solicitar cotización".

---

### 2. Equipos
- Encabezado de página: kicker "Catálogo", H1 44px "Nuestros equipos", intro 16px.
- Bloque destacado **Plantas de luz**: imagen `height:420px` + H2 32px + lista de features (mismo patrón de filas con `border-bottom`): "Entrega e instalación en sitio", "Combustible diésel de bajo consumo", "Mantenimiento preventivo incluido", "Soporte técnico durante la renta". CTA "Cotizar plantas de luz".
- **Maquinaria complementaria**: filas verticales `padding:52px 0; border-top`, imagen `height:230px`:
  - Bailarinas industriales — "Compactadoras vibratorias para zanjas y compactación de suelos en obra civil."
  - Compresores de aire — "Suministro de aire a presión para herramienta neumática e instalaciones industriales."
  - Torres de iluminación — "Iluminación de gran alcance para obra nocturna, eventos y seguridad perimetral."
- Cierre: banda `#0A0C09`, "¿Su equipo necesita servicio técnico?" + CTA "Solicitar servicio técnico".

### 3. Nosotros
- Hero de dos columnas: kicker "Nosotros", H1 40px "Una empresa familiar desde 1999", + misión completa (texto abajo), imagen `height:400px`.
- Misión / Visión en dos columnas separadas por `border-right: 1px solid rgba(237,237,230,0.1)` (`padding-right/left: 52px`). Labels en Work Sans 11px uppercase `#A8C98A`; cuerpo `#C9CBC1; 15.5px; line-height:1.95`.
- Cierre centrado: "Lo que nos define" + "Compromiso Experiencia Cercanía Calidad Seguridad" en Source Serif 4 20px.

**Misión (texto canónico, usar completo en /nosotros/):**
"Nuestra misión es brindar soluciones integrales en la renta, venta y reparación de plantas de luz, maquinaria para la construcción y refacciones, ofreciendo equipos confiables, servicio técnico especializado y una atención cercana que refleja nuestros valores familiares. Como empresa fundada en 1999, trabajamos con compromiso, experiencia y calidad para garantizar continuidad operativa, seguridad y productividad en cada proyecto de nuestros clientes."

**Visión (texto canónico):**
"Ser la empresa líder y opción preferida en soluciones de energía y maquinaria en la región, reconocida por su confiabilidad, innovación y excelencia técnica. Aspiramos a expandir nuestra cobertura, fortalecer nuestras áreas de servicio e incorporar nuevas tecnologías, manteniendo siempre el legado familiar que desde 1999 nos distingue por una atención cercana, profesional y basada en la confianza."

### 4. Contacto
- Encabezado centrado: kicker "Contacto", H1 42px "Hablemos de su proyecto", subtítulo "Respondemos por WhatsApp en horario de oficina."
- Dos columnas (`max-width:1040px`): tabla de datos (filas con `border-bottom`) + panel `#111410` con `border:1px solid rgba(237,237,230,0.09)`, `padding:52px`, H2 24px "Cotiza en minutos" y CTA "Escribir por WhatsApp".
- **Datos pendientes de completar por el cliente:** correo, dirección, horario de atención. En el prototipo aparecen como `[Agrega tu ...]` — no publicar así.
- Confirmados: Teléfono / WhatsApp **222 320 0109**; Cobertura: Puebla y zona centro del país.

### Footer (global)
- `background:#0A0C09; border-top:1px solid rgba(237,237,230,0.09); padding:88px 40px 40px`.
- Grid `repeat(auto-fit,minmax(220px,1fr)); gap:44px`; texto base `#7E8076; 14px`.
- Col 1: logo (`height:72px`) + descripción "Empresa familiar desde 1999, dedicada a la renta, venta y servicio técnico de plantas de luz y maquinaria ligera."
- Col 2 Navegación · Col 3 Servicios (Renta de equipo / Venta de equipo / Reparación y servicio técnico / Pólizas de mantenimiento) · Col 4 Contacto.
- Headers de columna: Work Sans `11px/400`, uppercase, `letter-spacing:0.14em`, `#EDEDE6`.
- Legal: `margin-top:48px; padding-top:28px; border-top:1px solid rgba(237,237,230,0.09); color:#5A5C53; 12.5px` — "© {año} Renta de Maquinaria Rivas, S.A. de C.V."
- **Pendiente en producción:** redes sociales, enlaces legales (aviso de privacidad, términos), NAP completo + `LocalBusiness` schema.

## Interactions & Behavior
- **Navegación:** en el prototipo es cambio de estado sin animación. En producción → rutas reales con scroll al top.
- **Header sticky** con backdrop blur; permanece visible en todo el scroll.
- **CTAs de WhatsApp:** todos apuntan a `https://wa.me/522223200109` con `?text=` precargado y distinto por contexto:
  - General / cotización: "Hola, me gustaría solicitar una cotización."
  - Plantas de luz: "Hola, me interesa cotizar una planta de luz."
  - Pólizas: "Hola, me interesa conocer las pólizas de mantenimiento."
  - Servicio técnico: "Hola, necesito servicio técnico para mi equipo."
  Todos abren en `target="_blank"` (agregar `rel="noopener"`). El texto debe pasar por `encodeURIComponent`.
- **Marquee de marcas:** loop CSS infinito de 34s, lineal. Desactivado bajo `prefers-reduced-motion`.
- **Hover states a implementar** (no presentes en el prototipo, definirlos así):
  - Botón verde: `background` → `#B9D69C`, transición `160ms ease`.
  - Links de texto: `color` → `#A8C98A`, opacidad de borde a 1.
  - Filas de categoría: `background: rgba(237,237,230,0.02)`.
  - Logos de marca: escala de grises → color.
- **Focus states:** obligatorio `outline: 2px solid #A8C98A; outline-offset: 2px` en todo elemento interactivo (el prototipo no los define).
- **Aparición al scroll:** permitido un fade/translate sutil (`opacity 0→1`, `translateY 12px→0`, 400ms) por sección. Nada más.
- **Responsive:** todos los grids usan `auto-fit/minmax`, así que colapsan a una columna solos. Ajustes necesarios en mobile:
  - `padding` lateral 40px → 20px; padding de sección 110px → 64px.
  - H1 baja por `clamp()`; verificar mínimo 32px.
  - Nav → menú hamburguesa con CTA de WhatsApp visible siempre.
  - Botón flotante de WhatsApp en mobile (min 44×44px de área táctil).
  - Divisores `border-right` de Misión/Visión y Contacto deben convertirse en `border-top` al apilarse.

## State Management
El prototipo solo necesita: `page: 'inicio' | 'equipos' | 'nosotros' | 'contacto'`.
En producción esto **desaparece** — lo reemplaza el router. No hay data fetching; los formularios de cotización (si se agregan) requerirían endpoint + validación server-side.

## Design Tokens

### Colores
| Token | Hex | Uso |
|---|---|---|
| bg-base | `#0D0F0C` | fondo del documento |
| bg-deep | `#0A0C09` | hero, marquee, CTA final, footer |
| bg-raised | `#111410` | secciones alternas, panel de contacto |
| accent | `#A8C98A` | CTAs, kickers, links — verde de marca aclarado para fondo oscuro |
| accent-hover | `#B9D69C` | hover de botón |
| text-primary | `#F4F4EE` | titulares |
| text-body | `#EDEDE6` | texto e íconos sobre oscuro |
| text-secondary | `#C9CBC1` | listas, cuerpos destacados |
| text-muted | `#8D8F85` | cuerpos de párrafo |
| text-faint | `#7E8076` | footer |
| text-dim | `#6E7066` / `#5A5C53` | labels menores, legal |
| brand-marquee | `#83857A` | nombres de marca |
| border | `rgba(237,237,230,0.09)` | divisores de sección |
| border-row | `rgba(237,237,230,0.10)` | filas de lista |
| overlay-hero | `rgba(10,12,9,0.94)` | ver nota: bajar a ~0.65 con foto real |

Verde corporativo original de la marca: usar el del logo para materiales impresos y fondos claros. `#A8C98A` es su derivado para UI oscura (contraste AA sobre `#0D0F0C`).

### Tipografía
- Display / titulares: **Source Serif 4** (400, 500, 600), `letter-spacing: -0.01em`, `font-weight: 500`.
- UI / cuerpo: **Work Sans** (300, 400, 500); peso base del body `300`.
- Escala: H1 hero `clamp(32px, 4.4vw, 52px)`/1.18 · H1 interior 40–44px · H2 sección 30–36px · H3 serif 23px · H3 sans 18–19px/400 · body 15–16px/1.75–1.9 · body pequeño 14.5px/1.85 · kicker 11–11.5px uppercase `letter-spacing:0.16em` · botón 13px `letter-spacing:0.03–0.04em` · legal 12.5px.
- `text-wrap: pretty` global.

### Espaciado
Escala usada: 10 · 12 · 14 · 16 · 20 · 22 · 24 · 26 · 28 · 32 · 36 · 38 · 40 · 44 · 48 · 52 · 56 · 72 · 88 · 110 · 140 px.
Gaps de grid: 48 (filas de categoría) · 52 (pilares) · 72 (dos columnas).

### Border radius y sombras
**Ninguno.** Cero border-radius y cero box-shadow en todo el diseño — es intencional: bordes rectos y superficies planas para una lectura industrial/premium. No introducir tarjetas redondeadas ni sombras flotantes.

## Assets
- `design/assets/logo-rivas.png` — logo proporcionado por el cliente. **1024×1024, lockup cuadrado** con el nombre dentro de la marca. Requiere ≥56px de altura para ser legible. **Pedir al cliente: versión SVG y variante horizontal/wordmark.**
- **Todas las fotografías son placeholders** (`<image-slot>`, de `design/image-slot.js`, solo herramienta de prototipo — no llevarla a producción). El cliente entregará fotos reales. Slots requeridos:
  - `hero-main` — planta de luz trabajando en obra (horizontal, gran formato)
  - `sol-plantas`, `sol-maquinaria`, `sol-torres`, `sol-compresores`, `sol-soldadoras` — una por categoría
  - `planta-destacada` — planta de luz de gran capacidad en sitio
  - `poliza-mantenimiento` — técnico revisando generador
  - `historia-familia` — equipo Rivas / bodega
  - `client-1..4` — logos de clientes
  - `eq-plantas-full`, `eq-bailarinas`, `eq-compresores`, `eq-torres` — página Equipos
  - `nosotros-hero`
- **Dirección fotográfica:** equipo real de Rivas trabajando en campo — plantas de luz en operación, técnicos en mantenimiento, entregas, maquinaria con branding Rivas. Evitar stock artificial. Preferir tomas con luz natural dura o nocturnas con iluminación de trabajo (se integran bien con la paleta oscura).
- **Nomenclatura de archivos (SEO):** `marca_tipo_de_maquina_uso.png` — ej. `honda_planta_de_luz.png`, `airman_compresor_de_aire.png`. ALT descriptivo real, sin keyword stuffing.

## Arquitectura SEO (a implementar en producción)
El prototipo es una sola página; la producción debe usar rutas reales:

```
/
/planta-de-luz/
/renta-plantas-de-luz/
/venta-plantas-de-luz/
/maquinaria-ligera/
/torres-de-iluminacion/
/compresores/
/soldadoras/
/refacciones/
/mantenimiento-plantas-de-luz/
/polizas-de-mantenimiento/
/nosotros/
/blog/
/contacto/
```

Reglas:
- Un solo H1 por página, con intención comercial + ubicación cuando aplique.
- Jerarquía H1→H2→H3 correcta, HTML semántico (`header`/`nav`/`main`/`section`/`footer`).
- Clusters: **plantas de luz** (renta/venta/generadores diésel/emergencia/industriales/construcción/eventos), **maquinaria** (ligera, construcción, compactadoras, apisonadores, cortadoras, rotomartillos, compresores, torres), **servicio** (mantenimiento y reparación de plantas de luz, servicio a generadores, pólizas, transferencias, refacciones).
- No crear páginas casi idénticas solo para variar una keyword.
- Schema: `LocalBusiness` + `Service` + `BreadcrumbList`. Breadcrumbs visibles en páginas internas.
- Blog: plantilla de artículo con enlaces internos, CTA contextual, imágenes, tablas, FAQ (`FAQPage` schema), artículos relacionados, autor y fecha.

## Performance y accesibilidad (requisitos)
- Imágenes en WebP/AVIF, `width`/`height` explícitos, `loading="lazy"` salvo el hero (`priority`/`eager`), `srcset` responsive. Prevenir CLS.
- Sin video autoplay en el hero. Mínimo JavaScript; el marquee es CSS puro.
- Fuentes: `display=swap`, preconnect, subset latino, o self-host.
- Contraste WCAG AA en todo texto (verificar especialmente sobre el hero con foto real).
- Navegación completa por teclado con focus states visibles; labels accesibles en formularios; áreas táctiles ≥44px; respetar `prefers-reduced-motion`.

## Copywriting — tono
Directo, cordial, experto, cercano; español de México sin coloquialismos; B2B comprensible. Hablar desde "nosotros". Evitar "somos líderes", "la mejor calidad", "soluciones innovadoras", "excelencia garantizada" — sustituir por evidencia concreta (años, servicio técnico, marcas, capacidad de respuesta). Titulares orientados a beneficio; sin párrafos largos en Home.

## Files
- `design/Maquinaria Rivas.dc.html` — prototipo completo (4 vistas). Abrir directo en el navegador.
- `design/image-slot.js` — componente de placeholder de imagen (solo prototipo).
- `design/support.js` — runtime del prototipo (solo prototipo, no portar).
- `design/assets/logo-rivas.png` — logo del cliente.

## Alcance no cubierto por el diseño
Pendiente de diseñar si se decide continuar: landings dedicadas por categoría, página de pólizas de mantenimiento, listado y plantilla de blog, formulario de cotización, breadcrumbs, y páginas legales.
