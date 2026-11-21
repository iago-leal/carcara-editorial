import { defineConfig } from 'astro/config';
import { remarkGraficos } from './src/lib/graficos.mjs';

export default defineConfig({
  site: 'https://carcaraeditorial.com.br',
  markdown: {
    // Blocos ```grafico viram SVG em quadro preto (src/lib/graficos.mjs).
    remarkPlugins: [remarkGraficos],
  },
  build: {
    // Mantém privacidade.astro como /privacidade.html, endereço registrado no Google.
    format: 'preserve',
  },
});
