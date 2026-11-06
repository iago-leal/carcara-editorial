// Fonte única das editorias: a chave vira a URL, e o valor, o nome exibido.
export const EDITORIAS = {
  politica: 'Política',
  economia: 'Economia',
  tecnologia: 'Tecnologia',
} as const;

export type Editoria = keyof typeof EDITORIAS;

export const CHAVES_EDITORIAS = Object.keys(EDITORIAS) as [Editoria, ...Editoria[]];
