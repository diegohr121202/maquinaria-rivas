# Guía de redacción de blog — estructura AEO (BLUF)

Plantilla y reglas para todos los artículos del blog de Maquinaria Rivas.
Objetivo: que los motores de respuesta (Google AI Overviews, ChatGPT, Perplexity)
extraigan y citen nuestro contenido. Los artículos viven en `src/content/blog/*.md`.

## Reglas de estructura (aplicar SIEMPRE)

1. **BLUF de artículo.** Justo debajo del título, un párrafo que empieza con **"En corto:"**
   y responde la pregunta principal en **máximo 2 frases**. Luego 1 párrafo de contexto.
2. **Subtítulos como preguntas conversacionales.** Cada `##` es una pregunta tal como la
   escribiría un cliente ("¿Cada cuándo se le da mantenimiento a una planta de luz?"),
   no un enunciado ("Frecuencia de mantenimiento").
3. **Respuesta directa por sección.** La primera frase (1–2 máx.) bajo cada `##` responde
   la pregunta de inmediato; después viene el detalle.
4. **Datos densos → listas o tablas.** Pasos, checklists y criterios en viñetas; comparaciones
   y rangos en tablas markdown limpias. Nada de datos escondidos en párrafos largos.
5. **Enlaces internos** a landings y páginas relevantes (`/plantas-de-luz/`, `/servicios/`,
   `/contacto/`) con texto de ancla descriptivo.
6. **Cierre con CTA** a WhatsApp/contacto.
7. **Tono:** directo, experto, cercano; español de México. Sin adjetivos vacíos
   ("los mejores", "excelencia", "líderes"). Evidencia concreta (años, kVA, marcas).
8. **Jerarquía** H1 (título) → H2 (preguntas) → H3 (subpreguntas). Un solo H1.

## Frontmatter requerido

```yaml
---
title: "Pregunta o beneficio con keyword (≤60 caracteres visibles)"
description: "Respuesta directa a la pregunta principal, con keyword. ~150–160 caracteres."
pubDate: AAAA-MM-DD
author: "Equipo Maquinaria Rivas"
heroImage: "/assets/photos/ARCHIVO.jpg"   # en /public
heroAlt: "Descripción real de la imagen"
category: "Guías"                          # o Mantenimiento, Casos, etc.
tags: ["plantas de luz", "..."]
draft: false                               # true = no se publica
---
```

## Esqueleto de artículo (copiar y rellenar)

```markdown
**En corto:** [respuesta directa a la pregunta del título, máx. 2 frases].

[1 párrafo de contexto: por qué importa el tema y qué resuelve este artículo.]

## ¿[Primera pregunta del usuario]?

[Respuesta directa 1–2 frases]. [Detalle en viñetas si aplica:]

- **Punto:** explicación breve.
- **Punto:** explicación breve.

## ¿[Segunda pregunta]?

[Respuesta directa]. [Pasos o tabla:]

| Columna | Columna |
|---|---|
| Dato | Dato |

## ¿[Pregunta de decisión / recomendación]?

[Respuesta directa con enlace interno a la landing relevante, ej. [rentar planta de luz](/plantas-de-luz/)].

¿[Pregunta de cierre]? [Cuéntanos tu caso](/contacto/) y lo revisamos.
```

## Cadencia recomendada
2–4 artículos al mes, apuntando a preguntas reales de clientes. El schema `BlogPosting`
y el sitemap se generan solos; solo hay que crear el `.md`.
