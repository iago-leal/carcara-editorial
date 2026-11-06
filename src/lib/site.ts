// Dados do veículo usados no cabeçalho, nos índices e nos dados estruturados.
export const SITE = {
  nome: 'Carcará Editorial',
  slogan: 'As notícias explicadas pelos números',
  descricao:
    'Veículo brasileiro e independente de jornalismo de dados sobre política, economia e tecnologia, com dados de fontes oficiais.',
  idioma: 'pt-BR',
  redes: {
    youtube: 'https://www.youtube.com/@carcara.editorial',
    instagram: 'https://www.instagram.com/carcara.editorial/',
    tiktok: 'https://www.tiktok.com/@carcara.editorial',
  },
} as const;

// Converte um objeto em JSON seguro para ficar dentro de <script>.
export function jsonParaScript(dados: unknown) {
  return JSON.stringify(dados).replace(/</g, '\\u003c');
}

// Identificador do vídeo a partir de um link do YouTube, para montar a miniatura nos dados estruturados.
export function idDoVideo(url: string) {
  const endereco = new URL(url);
  if (endereco.hostname === 'youtu.be') return endereco.pathname.slice(1) || null;
  return endereco.searchParams.get('v');
}
