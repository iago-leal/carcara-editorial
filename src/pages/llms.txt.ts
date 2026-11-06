import type { APIContext } from 'astro';
import { EDITORIAS } from '../lib/editorias';
import { urlAbsoluta, urlDoMarkdown } from '../lib/indices';
import { formatarData, materiasPublicadas } from '../lib/materias';
import { SITE } from '../lib/site';

// Índice para agentes de IA no formato llms.txt: cada matéria aponta para a versão em Markdown.
export async function GET(context: APIContext) {
  const site = context.site!;
  const materias = await materiasPublicadas();
  const corpo = [
    `# ${SITE.nome}`,
    '',
    `> ${SITE.slogan}. ${SITE.descricao}`,
    '',
    'Cada matéria explica o conteúdo de um vídeo do canal no YouTube e lista as fontes oficiais dos dados. Os links abaixo levam à versão em Markdown de cada matéria; a versão em HTML fica no mesmo endereço, sem o .md no fim.',
    '',
    '## Matérias',
    '',
    ...(materias.length > 0
      ? materias.map(
          (materia) =>
            `- [${materia.data.titulo}](${urlAbsoluta(urlDoMarkdown(materia), site)}): ${materia.data.linhaFina} · ${EDITORIAS[materia.data.editoria]}, ${formatarData(materia.data.publicadoEm)}`,
        )
      : ['- Ainda não há matérias publicadas.']),
    '',
    '## Institucional',
    '',
    `- [Política de Privacidade](${urlAbsoluta('/privacidade.html', site)}): como a ferramenta carcara-editorial-canal trata dados da API do YouTube`,
    `- [Termos de Uso](${urlAbsoluta('/termos.html', site)}): condições de uso da ferramenta carcara-editorial-canal`,
    '',
    '## Optional',
    '',
    `- [Todas as matérias em um arquivo](${urlAbsoluta('/llms-full.txt', site)}): texto completo de todas as matérias publicadas`,
    `- [Índice em JSON](${urlAbsoluta('/materias.json', site)}): metadados, fontes e correções de cada matéria`,
    `- [Feed RSS](${urlAbsoluta('/rss.xml', site)}): matérias mais recentes`,
    `- [Canal no YouTube](${SITE.redes.youtube}): os vídeos que dão origem às matérias`,
    '',
  ].join('\n');
  return new Response(corpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
