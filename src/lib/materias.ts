import { getCollection, type CollectionEntry } from 'astro:content';

export type Materia = CollectionEntry<'materias'>;

const NOME_DO_ARQUIVO = /^(\d{4})-(\d{2})-(\d{2})-([a-z0-9]+(?:-[a-z0-9]+)*)$/;

// A URL sai do nome do arquivo, AAAA-MM-DD-slug.md, e vira /AAAA/MM/slug/.
export function partesDaUrl(materia: Materia) {
  const partes = NOME_DO_ARQUIVO.exec(materia.id);
  if (!partes) {
    throw new Error(
      `A matéria "${materia.id}" não segue o padrão de nome AAAA-MM-DD-slug.md.`,
    );
  }
  const [, ano, mes, dia, slug] = partes;
  const dataDoArquivo = `${ano}-${mes}-${dia}`;
  const dataPublicada = materia.data.publicadoEm.toISOString().slice(0, 10);
  if (dataDoArquivo !== dataPublicada) {
    throw new Error(
      `A matéria "${materia.id}" tem publicadoEm ${dataPublicada}, diferente da data do nome do arquivo.`,
    );
  }
  return { ano, mes, slug };
}

export function urlDaMateria(materia: Materia) {
  const { ano, mes, slug } = partesDaUrl(materia);
  return `/${ano}/${mes}/${slug}/`;
}

// Matérias publicadas, da mais recente para a mais antiga.
export async function materiasPublicadas() {
  const materias = await getCollection('materias', ({ data }) => !data.rascunho);
  materias.forEach(partesDaUrl);
  return materias.sort((a, b) => b.data.publicadoEm.valueOf() - a.data.publicadoEm.valueOf());
}

// As datas vêm do front matter no formato AAAA-MM-DD e são lidas em UTC.
const FORMATO_DE_DATA = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatarData(data: Date) {
  return FORMATO_DE_DATA.format(data);
}

export function dataIso(data: Date) {
  return data.toISOString().slice(0, 10);
}
