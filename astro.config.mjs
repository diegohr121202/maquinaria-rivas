// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Prioridad por tipo de página: home y landings de categoría son las que
// queremos posicionar primero; blog e informativas van después.
const priorityFor = (url) => {
  const path = new URL(url).pathname;
  if (path === '/') return 1.0;
  // Landings de categoría (top-level): /plantas-de-luz/, /maquinaria-ligera/, etc.
  const categorias = ['plantas-de-luz', 'maquinaria-ligera', 'torres-de-iluminacion', 'compresores', 'soldadoras'];
  if (categorias.some((c) => path === `/${c}/`)) return 0.9;
  if (path === '/equipos/' || path === '/servicios/' || path === '/contacto/') return 0.8;
  if (path === '/blog/' || path.startsWith('/blog/')) return 0.6;
  return 0.7;
};

const changefreqFor = (url) => {
  const path = new URL(url).pathname;
  if (path === '/' || path === '/equipos/') return 'weekly';
  if (path.startsWith('/blog/')) return 'monthly';
  return 'monthly';
};

// Actualizar SITE al dominio real de producción cuando se despliegue.
export default defineConfig({
  site: 'https://www.maquinariarivas.com',
  integrations: [
    sitemap({
      // lastmod global del build; changefreq y priority por página.
      serialize(item) {
        item.priority = priorityFor(item.url);
        item.changefreq = /** @type {any} */ (changefreqFor(item.url));
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  build: { inlineStylesheets: 'auto' },
});
