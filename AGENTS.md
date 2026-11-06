# AGENTS.md

Instruções para qualquer agente de IA que trabalhe neste repositório. Este arquivo reúne apenas regras estáveis. Progresso, tarefas e decisões em andamento não entram aqui: ficam na memória do agente e nas issues e pull requests do GitHub.

## O projeto

O Carcará Editorial é um veículo brasileiro e independente de jornalismo de dados sobre política, economia e tecnologia. Este repositório contém o site carcaraeditorial.com.br, que publica em formato jornalístico o conteúdo dos vídeos do canal no YouTube, além das páginas institucionais e legais.

## Idioma e estilo

- Conteúdo, comentários de código, mensagens de commit e descrições de pull request são escritos em português do Brasil.
- Identificadores de código seguem o vocabulário do domínio em português, como `materias` e `editoria`, exceto quando a ferramenta impõe nomes próprios.
- O texto tem coesão e coerência, encadeia as ideias com conectivos entre frases e parágrafos e prefere a ordem direta.
- Ponto, vírgula, ponto e vírgula e dois-pontos são sinais sintáticos. Travessões, reticências e parênteses marcam subjetividade e não aparecem no texto jornalístico.
- A matéria segue a pirâmide invertida: título informativo, linha fina e lide que responde ao essencial já no primeiro parágrafo.

## Regras editoriais

1. Todo dado cita a fonte, com link para a origem oficial, como IBGE, Banco Central, Tesouro Nacional ou TSE.
2. Nenhum dado, citação ou fonte é inventado. Quando uma informação não está disponível, o texto diz isso.
3. Fato e análise ficam separados e identificados.
4. A correção de uma matéria publicada fica registrada na própria matéria, com a data. Nenhum conteúdo publicado muda em silêncio.
5. O uso de IA na produção, como a narração sintética, é declarado conforme a política editorial do site.

## Design

- O design segue o Primer, sistema de design do GitHub, por meio dos tokens do pacote `@primer/primitives`.
- As cores vêm da paleta do Carcará, que `src/styles/carcara.css` aplica aos tokens de cor do Primer. Esse é o único arquivo com cores literais.
- O site tem tema claro e escuro e segue a preferência do sistema do leitor.
- O contraste atende ao nível AA da WCAG 2.1, e o layout funciona a partir de 320 px de largura.
- As páginas não carregam JavaScript por padrão. Um componente só usa JavaScript quando a interação exige, como num gráfico interativo.
- As fontes são servidas pelo próprio site, sem requisições a serviços de terceiros.

## Stack e comandos

O site é gerado pelo Astro, com Node.js e npm.

- `npm install` instala as dependências.
- `npm run dev` abre o servidor local.
- `npm run build` gera o site em `dist/`. O build precisa passar antes de qualquer commit.

## Estrutura de pastas

```
src/assets/marca/       logo do Carcará, fonte única do cabeçalho e dos ícones
src/content/materias/   matérias em Markdown, uma por arquivo
src/content.config.ts   esquema dos metadados das matérias
src/pages/              rotas do site
src/layouts/            moldes de página
src/components/         componentes reutilizáveis
src/lib/                funções e constantes compartilhadas, como as editorias
src/styles/             tokens do Primer, paleta do Carcará e estilos globais
public/                 arquivos servidos sem processamento, como favicon e imagens
.github/workflows/      build em todo pull request e publicação a partir da main
```

## Matérias

- Cada matéria é um arquivo `AAAA-MM-DD-slug.md` em `src/content/materias/`, e a data do nome é a mesma do campo `publicadoEm`.
- O build ignora arquivos com prefixo `_`. O `_modelo.md` é o ponto de partida de toda matéria nova.
- Os metadados obrigatórios estão no esquema de `src/content.config.ts`, e o build falha quando algum falta. Consulte o esquema em vez de presumir os campos.
- A URL de uma matéria é `/AAAA/MM/slug/` e nunca muda depois da publicação.
- Toda matéria derivada de um vídeo traz o link para ele no YouTube.

## Invariantes

- As URLs `/privacidade.html` e `/termos.html` não mudam, porque estão registradas na verificação OAuth do Google.
- A página inicial descreve a ferramenta carcara-editorial-canal e mantém um link visível para a Política de Privacidade, exigências da mesma verificação.
- Qualquer mudança que passe a coletar dados de visitantes, como analytics, cookies ou vídeos incorporados, atualiza a Política de Privacidade no mesmo pull request.
- Nenhum segredo, token ou credencial entra no repositório.

## Publicação

Toda mudança chega à branch `main` por pull request. O push na `main` dispara o GitHub Actions, que gera o site e o publica no GitHub Pages, no domínio carcaraeditorial.com.br.
