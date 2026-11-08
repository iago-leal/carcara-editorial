import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { EDITORIAS } from '../lib/editorias';
import { assinaturaDaMateria, materiasPublicadas, urlDaMateria } from '../lib/materias';

export async function GET(context: APIContext) {
  const materias = await materiasPublicadas();
  return rss({
    title: 'Carcará Editorial',
    description: 'Jornalismo de dados sobre política, economia e tecnologia.',
    site: context.site!,
    xmlns: { dc: 'http://purl.org/dc/elements/1.1/' },
    customData: '<language>pt-br</language>',
    items: materias.map((materia) => ({
      title: materia.data.titulo,
      description: materia.data.linhaFina,
      pubDate: materia.data.publicadoEm,
      link: urlDaMateria(materia),
      categories: [EDITORIAS[materia.data.editoria]],
      customData: `<dc:creator>${escaparXml(assinaturaDaMateria(materia).nome)}</dc:creator>`,
    })),
  });
}

function escaparXml(texto: string) {
  return texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
