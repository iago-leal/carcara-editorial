import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CHAVES_EDITORIAS } from './lib/editorias';

const HOSTS_DO_YOUTUBE = ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be'];

const linkDoYouTube = z
  .url()
  .refine(
    (valor) => HOSTS_DO_YOUTUBE.includes(new URL(valor).hostname),
    'O campo video precisa ser um link do YouTube.',
  );

const materias = defineCollection({
  // Arquivos com prefixo _ ficam de fora, como o _modelo.md.
  loader: glob({ base: './src/content/materias', pattern: '**/[^_]*.md' }),
  schema: z.object({
    titulo: z.string().min(1),
    linhaFina: z.string().min(1),
    editoria: z.enum(CHAVES_EDITORIAS),
    publicadoEm: z.coerce.date(),
    atualizadoEm: z.coerce.date().optional(),
    autoria: z.string().min(1),
    video: linkDoYouTube,
    fontes: z
      .array(z.object({ nome: z.string().min(1), url: z.url() }))
      .min(1, 'Toda matéria cita ao menos uma fonte.'),
    correcoes: z
      .array(z.object({ data: z.coerce.date(), descricao: z.string().min(1) }))
      .default([]),
    rascunho: z.boolean().default(false),
  }),
});

export const collections = { materias };
