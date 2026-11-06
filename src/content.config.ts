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

// Data, hora e fuso entre aspas, como "2026-11-10T18:00:00-03:00".
const FORMATO_DATA_HORA = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?(Z|[+-]\d{2}:\d{2})$/;
const EXEMPLO_DATA_HORA = 'Escreva data, hora e fuso entre aspas, como "2026-11-10T18:00:00-03:00".';

const dataHora = z
  .string({ error: EXEMPLO_DATA_HORA })
  .regex(FORMATO_DATA_HORA, EXEMPLO_DATA_HORA)
  .transform((valor) => new Date(valor));

const materias = defineCollection({
  // Arquivos com prefixo _ ficam de fora, como o _modelo.md.
  loader: glob({ base: './src/content/materias', pattern: '**/[^_]*.md' }),
  schema: z.object({
    titulo: z.string().min(1),
    linhaFina: z.string().min(1),
    editoria: z.enum(CHAVES_EDITORIAS),
    // Mesmo horário em que o vídeo horizontal vai ao ar no YouTube.
    publicadoEm: dataHora,
    atualizadoEm: dataHora.optional(),
    autoria: z.string().min(1),
    video: linkDoYouTube,
    fontes: z
      .array(z.object({ nome: z.string().min(1), url: z.url() }))
      .min(1, 'Toda matéria cita ao menos uma fonte.'),
    correcoes: z
      .array(z.object({ data: dataHora, descricao: z.string().min(1) }))
      .default([]),
    rascunho: z.boolean().default(false),
  }),
});

export const collections = { materias };
