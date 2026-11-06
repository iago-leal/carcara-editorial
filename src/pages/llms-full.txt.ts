import type { APIContext } from 'astro';
import { materiaEmMarkdown } from '../lib/indices';
import { materiasPublicadas } from '../lib/materias';
import { SITE } from '../lib/site';

// Todas as matérias publicadas em um só arquivo, para agentes que preferem ler tudo de uma vez.
export async function GET(context: APIContext) {
  const materias = await materiasPublicadas();
  const partes = [
    `# ${SITE.nome}\n\n> ${SITE.slogan}. ${SITE.descricao}\n`,
    ...materias.map((materia) => materiaEmMarkdown(materia, context.site!)),
  ];
  return new Response(partes.join('\n\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
