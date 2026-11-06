// Usado pela execução agendada do GitHub Actions: compara as matérias do build
// com as do site no ar e só manda publicar quando uma matéria agendada chegou
// ao horário ou foi atualizada. Se o site no ar não responder, publica.
import { appendFile, readFile } from 'node:fs/promises';

const SITE = process.env.SITE_URL ?? 'https://carcaraeditorial.com.br';

const assinatura = ({ materias }) =>
  materias
    .map(({ url, publicadoEm, atualizadoEm }) => `${url} ${atualizadoEm ?? publicadoEm}`)
    .sort()
    .join('\n');

const doBuild = JSON.parse(await readFile('dist/materias.json', 'utf8'));

let publicar = true;
try {
  const resposta = await fetch(`${SITE}/materias.json`, { cache: 'no-store' });
  if (resposta.ok) publicar = assinatura(await resposta.json()) !== assinatura(doBuild);
} catch {
  // Sem resposta do site no ar: publica para não deixar matéria de fora.
}

console.log(publicar ? 'Há matéria nova ou atualizada: publicar.' : 'O site no ar já está em dia.');
if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, `publicar=${publicar}\n`);
