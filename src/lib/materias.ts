import { getCollection, type CollectionEntry } from 'astro:content';
import { AUTORES, type Autor } from './autores';

export type Materia = CollectionEntry<'materias'>;

// Datas e URLs seguem o horário de Brasília, o mesmo da agenda do canal.
const FUSO = 'America/Sao_Paulo';

const DATA_NO_FUSO = new Intl.DateTimeFormat('en-CA', {
  timeZone: FUSO,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const DATA_POR_EXTENSO = new Intl.DateTimeFormat('pt-BR', {
  timeZone: FUSO,
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const HORA = new Intl.DateTimeFormat('pt-BR', {
  timeZone: FUSO,
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

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
  const dataPublicada = DATA_NO_FUSO.format(materia.data.publicadoEm);
  if (dataDoArquivo !== dataPublicada) {
    throw new Error(
      `A matéria "${materia.id}" sai em ${dataPublicada} no horário de Brasília, data diferente da do nome do arquivo.`,
    );
  }
  return { ano, mes, slug };
}

export function urlDaMateria(materia: Materia) {
  const { ano, mes, slug } = partesDaUrl(materia);
  return `/${ano}/${mes}/${slug}/`;
}

// Matérias já no ar, da mais recente para a mais antiga. Uma matéria com
// publicadoEm no futuro fica de fora até o build seguinte ao horário dela,
// mas o nome dela é conferido já, para o erro aparecer no pull request e
// não no build da hora marcada.
export async function materiasPublicadas(agora = new Date()) {
  const materias = await getCollection('materias', ({ data }) => !data.rascunho);
  materias.forEach(partesDaUrl);
  return materias
    .filter(({ data }) => data.publicadoEm <= agora)
    .sort((a, b) => b.data.publicadoEm.valueOf() - a.data.publicadoEm.valueOf());
}

export function formatarData(data: Date) {
  return DATA_POR_EXTENSO.format(data);
}

// Formato de redação: "10 de novembro de 2026, 18h00".
export function formatarDataHora(data: Date) {
  const [hora, minuto] = HORA.format(data).split(':');
  return `${formatarData(data)}, ${hora}h${minuto}`;
}

export function dataIso(data: Date) {
  return data.toISOString();
}

// Quem assina a matéria: um autor cadastrado, com a identificação profissional, ou a autoria em texto.
export function assinaturaDaMateria(materia: Materia): { nome: string; autor?: Autor } {
  const { autor, autoria } = materia.data;
  if (autor) {
    return { nome: AUTORES[autor].nome, autor: AUTORES[autor] };
  }
  return { nome: autoria! };
}
