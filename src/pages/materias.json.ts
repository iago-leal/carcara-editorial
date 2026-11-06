import type { APIContext } from 'astro';
import { materiaEmJson } from '../lib/indices';
import { materiasPublicadas } from '../lib/materias';
import { SITE } from '../lib/site';

// Índice das matérias publicadas, para acesso programático.
export async function GET(context: APIContext) {
  const materias = await materiasPublicadas();
  const corpo = {
    site: SITE.nome,
    descricao: SITE.descricao,
    idioma: SITE.idioma,
    materias: materias.map((materia) => materiaEmJson(materia, context.site!)),
  };
  return new Response(JSON.stringify(corpo, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
