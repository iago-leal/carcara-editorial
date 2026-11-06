import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://carcaraeditorial.com.br',
  build: {
    // Mantém privacidade.astro como /privacidade.html, endereço registrado no Google.
    format: 'preserve',
  },
});
