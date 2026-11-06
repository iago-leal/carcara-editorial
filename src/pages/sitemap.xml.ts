import type { APIContext } from 'astro';
import { EDITORIAS } from '../lib/editorias';
import { urlAbsoluta } from '../lib/indices';
import { materiasPublicadas, urlDaMateria } from '../lib/materias';

// Toda página pública entra aqui. Matérias agendadas só entram depois do horário.
export async function GET(context: APIContext) {
  const site = context.site!;
  const materias = await materiasPublicadas();
  const ultimaAtualizacao = (materia: (typeof materias)[number]) =>
    (materia.data.atualizadoEm ?? materia.data.publicadoEm).toISOString();
  const maisRecente = materias[0] ? ultimaAtualizacao(materias[0]) : undefined;

  const enderecos: { loc: string; lastmod?: string }[] = [
    { loc: urlAbsoluta('/', site), lastmod: maisRecente },
    ...Object.keys(EDITORIAS).map((editoria) => {
      const daEditoria = materias.find((materia) => materia.data.editoria === editoria);
      return {
        loc: urlAbsoluta(`/${editoria}/`, site),
        lastmod: daEditoria ? ultimaAtualizacao(daEditoria) : undefined,
      };
    }),
    ...materias.map((materia) => ({
      loc: urlAbsoluta(urlDaMateria(materia), site),
      lastmod: ultimaAtualizacao(materia),
    })),
    { loc: urlAbsoluta('/privacidade.html', site) },
    { loc: urlAbsoluta('/termos.html', site) },
  ];

  const corpo = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...enderecos.map(
      ({ loc, lastmod }) =>
        `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`,
    ),
    '</urlset>',
    '',
  ].join('\n');
  return new Response(corpo, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
