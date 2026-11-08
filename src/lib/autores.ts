// Fonte única dos autores que assinam matérias com nome próprio. A chave vai no campo autor da matéria.
// As matérias de saúde levam a assinatura do médico, com os dados que a Resolução CFM nº 2.336/2023 exige:
// nome, a palavra MÉDICO, o CRM com a UF, a especialidade registrada e o RQE.
export const AUTORES = {
  'iago-leal': {
    nome: 'Iago Bernardes Alves Leal Barbosa',
    profissao: 'MÉDICO',
    crm: { numero: '34012', uf: 'GO' },
    especialidade: 'Medicina de Família e Comunidade',
    rqe: '21752',
    instagram: 'iagoleal.mfc',
  },
} as const;

export type ChaveAutor = keyof typeof AUTORES;
export type Autor = (typeof AUTORES)[ChaveAutor];

export const CHAVES_AUTORES = Object.keys(AUTORES) as [ChaveAutor, ...ChaveAutor[]];

export function urlDoInstagram(autor: Autor) {
  return `https://www.instagram.com/${autor.instagram}/`;
}

// Linha de identificação profissional, como "MÉDICO · CRM-GO 34012 · Medicina de Família e Comunidade · RQE 21752".
export function credencial(autor: Autor) {
  return [
    autor.profissao,
    `CRM-${autor.crm.uf} ${autor.crm.numero}`,
    autor.especialidade,
    `RQE ${autor.rqe}`,
  ].join(' · ');
}

// Assinatura completa em texto corrido, para os índices e as versões em Markdown.
export function assinaturaCompleta(autor: Autor) {
  return `${autor.nome} · ${credencial(autor)} · @${autor.instagram}`;
}

// Autor nos dados estruturados schema.org, com o registro profissional como identificador.
export function pessoaSchema(autor: Autor) {
  return {
    '@type': 'Person',
    name: autor.nome,
    jobTitle: 'Médico',
    description: credencial(autor),
    knowsAbout: autor.especialidade,
    identifier: [
      { '@type': 'PropertyValue', propertyID: `CRM-${autor.crm.uf}`, value: autor.crm.numero },
      { '@type': 'PropertyValue', propertyID: 'RQE', value: autor.rqe },
    ],
    sameAs: [urlDoInstagram(autor)],
  };
}
