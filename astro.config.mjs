// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://joseriquelme1773800460000.0900200.misitiohostgator.com', // Cámbialo por tu dominio real
  base: '/',
});