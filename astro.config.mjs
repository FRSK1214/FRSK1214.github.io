import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://FRSK1214.github.io',
  base: '/', 
  
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});