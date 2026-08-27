// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Actualizar SITE al dominio real de producción cuando se despliegue.
export default defineConfig({
  site: 'https://www.maquinariarivas.com',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
