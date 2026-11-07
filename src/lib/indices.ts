// Versões das matérias para robôs de busca e agentes de IA.
import { EDITORIAS } from './editorias';
import { assinaturaCompleta, credencial, urlDoInstagram } from './autores';
import { assinaturaDaMateria, formatarDataHora, urlDaMateria, type Materia } from './materias';

export function urlAbsoluta(caminho: string, site: URL) {
  return new URL(caminho, site).href;
}

export function urlDoMarkdown(materia: Materia) {
  return urlDaMateria(materia).replace(/\/$/, '.md');
}

// Matéria completa em Markdown, com os metadados no topo e as fontes no fim.
export function materiaEmMarkdown(materia: Materia, site: URL) {
  const { titulo, linhaFina, editoria, publicadoEm, atualizadoEm, video, fontes, correcoes } = materia.data;
  const { nome, autor } = assinaturaDaMateria(materia);
  const linhas = [
    `# ${titulo}`,
    '',
    linhaFina,
    '',
    `- Editoria: ${EDITORIAS[editoria]}`,
    `- Publicado em: ${formatarDataHora(publicadoEm)} · ${publicadoEm.toISOString()}`,
    ...(atualizadoEm
      ? [`- Atualizado em: ${formatarDataHora(atualizadoEm)} · ${atualizadoEm.toISOString()}`]
      : []),
    `- Autoria: ${autor ? assinaturaCompleta(autor) : nome}`,
    `- Vídeo: ${video}`,
    `- Endereço: ${urlAbsoluta(urlDaMateria(materia), site)}`,
    '',
    '---',
    '',
    (materia.body ?? '').trim(),
    '',
    '## Fontes',
    '',
    ...fontes.map(({ nome, url }) => `- [${nome}](${url})`),
  ];
  if (correcoes.length > 0) {
    linhas.push(
      '',
      '## Correções',
      '',
      ...correcoes.map(({ data, descricao }) => `- ${formatarDataHora(data)}: ${descricao}`),
    );
  }
  return `${linhas.join('\n')}\n`;
}

// Metadados de uma matéria para o índice em JSON.
export function materiaEmJson(materia: Materia, site: URL) {
  const { titulo, linhaFina, editoria, publicadoEm, atualizadoEm, video, fontes, correcoes } = materia.data;
  const { nome, autor } = assinaturaDaMateria(materia);
  return {
    titulo,
    linhaFina,
    editoria: EDITORIAS[editoria],
    publicadoEm: publicadoEm.toISOString(),
    atualizadoEm: atualizadoEm?.toISOString() ?? null,
    autoria: nome,
    autor: autor
      ? {
          nome: autor.nome,
          credencial: credencial(autor),
          crm: `${autor.crm.numero}/${autor.crm.uf}`,
          especialidade: autor.especialidade,
          rqe: autor.rqe,
          instagram: urlDoInstagram(autor),
        }
      : null,
    url: urlAbsoluta(urlDaMateria(materia), site),
    markdown: urlAbsoluta(urlDoMarkdown(materia), site),
    video,
    fontes,
    correcoes: correcoes.map(({ data, descricao }) => ({ data: data.toISOString(), descricao })),
  };
}
