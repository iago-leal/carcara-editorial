import type { APIContext } from 'astro';
import { materiaEmMarkdown } from '../../../lib/indices';
import { materiasPublicadas, partesDaUrl, type Materia } from '../../../lib/materias';

// Versão em Markdown de cada matéria, em /AAAA/MM/slug.md, para agentes de IA.
export async function getStaticPaths() {
  const materias = await materiasPublicadas();
  return materias.map((materia) => ({ params: partesDaUrl(materia), props: { materia } }));
}

export function GET(context: APIContext<{ materia: Materia }>) {
  return new Response(materiaEmMarkdown(context.props.materia, context.site!), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
