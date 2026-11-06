import type { APIContext } from 'astro';

// O site é aberto a buscadores e a agentes de IA.
export function GET(context: APIContext) {
  const corpo = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('/sitemap.xml', context.site).href}`,
    '',
  ].join('\n');
  return new Response(corpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
