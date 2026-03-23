// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://https://yourbusinessweb.com', // Cámbialo por tu dominio real
  integrations: [sitemap()],
  redirects: {
    '/preguntas': '/faq', // Si alguien entra a /preguntas, se va a /faq
    '/ayuda': '/faq'
  }
});