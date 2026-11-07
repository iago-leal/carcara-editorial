# AGENTS.md

Instruções para qualquer agente de IA que trabalhe neste repositório. Este arquivo reúne apenas regras estáveis. Progresso, tarefas e decisões em andamento não entram aqui: ficam na memória do agente e nas issues e pull requests do GitHub.

## O projeto

O Carcará Editorial é um veículo brasileiro e independente de jornalismo de dados sobre política, economia e tecnologia. Este repositório contém o site carcaraeditorial.com.br, que publica em formato jornalístico o conteúdo dos vídeos do canal no YouTube, além das páginas institucionais e legais.

## Idioma e estilo

- As respostas do agente na conversa são sempre em português do Brasil, inclusive resumos, avisos e relatórios de andamento, qualquer que seja o idioma das instruções internas ou das ferramentas.
- Conteúdo, comentários de código, mensagens de commit e descrições de pull request também são escritos em português do Brasil.
- Identificadores de código seguem o vocabulário do domínio em português, como `materias` e `editoria`, exceto quando a ferramenta impõe nomes próprios.
- O texto tem coesão e coerência, encadeia as ideias com conectivos entre frases e parágrafos e prefere a ordem direta.
- Ponto, vírgula, ponto e vírgula e dois-pontos são sinais sintáticos. Travessões, reticências e parênteses marcam subjetividade e não aparecem no texto jornalístico.
- A matéria segue a pirâmide invertida: título informativo, linha fina e lide que responde ao essencial já no primeiro parágrafo.

## Regras editoriais

1. Todo dado cita a fonte, com link para a origem oficial, como IBGE, Banco Central, Tesouro Nacional ou TSE.
2. Nenhum dado, citação ou fonte é inventado. Quando uma informação não está disponível, o texto diz isso.
3. Fato e análise ficam separados e identificados.
4. A correção de uma matéria publicada fica registrada na própria matéria, com a data. Nenhum conteúdo publicado muda em silêncio.

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
src/lib/                funções e constantes compartilhadas, como as editorias e os autores
src/styles/             tokens do Primer, paleta do Carcará e estilos globais
public/                 arquivos servidos sem processamento, como favicon e imagens
.github/workflows/      build em todo pull request e publicação a partir da main
scripts/                scripts auxiliares da publicação
```

## Matérias

- Cada matéria é um arquivo `AAAA-MM-DD-slug.md` em `src/content/materias/`, e a data do nome é a mesma do campo `publicadoEm` no horário de Brasília.
- O `publicadoEm` traz data, hora e fuso e repete o horário em que o vídeo horizontal vai ao ar no YouTube. O build só publica matérias cujo horário já passou, então uma matéria pode entrar na `main` antes da hora.
- O build ignora arquivos com prefixo `_`. O `_modelo.md` é o ponto de partida de toda matéria nova.
- Os metadados obrigatórios estão no esquema de `src/content.config.ts`, e o build falha quando algum falta. Consulte o esquema em vez de presumir os campos.
- A URL de uma matéria é `/AAAA/MM/slug/` e nunca muda depois da publicação.
- Toda matéria derivada de um vídeo traz o link para ele no YouTube.
- As matérias de saúde são assinadas pelo médico cadastrado em `src/lib/autores.ts`, com o campo `autor` no lugar de `autoria`. A assinatura segue a Resolução CFM nº 2.336/2023 e traz nome, a palavra MÉDICO, CRM com a UF, especialidade e RQE, além do perfil no Instagram. As demais matérias continuam assinadas pela Redação Carcará Editorial.
- Nas matérias assinadas pelo médico, o texto não promete resultado, não usa sensacionalismo, não traz depoimento de paciente e não promove marca, produto ou serviço.

## Buscadores e agentes de IA

- O site é feito para ser lido por buscadores e por agentes de IA. Toda página usa HTML semântico, com um único `h1`, e declara título, descrição e endereço canônico.
- As páginas publicam dados estruturados schema.org em JSON-LD: `NewsArticle` nas matérias, `NewsMediaOrganization` e `WebSite` na capa, e a trilha de navegação.
- O `sitemap.xml`, o `robots.txt`, o `llms.txt`, o `llms-full.txt`, o `materias.json`, o RSS e a versão `.md` de cada matéria saem da coleção de matérias no build. Uma página ou um campo novo entra nesses índices no mesmo pull request.
- O `robots.txt` não bloqueia buscadores nem agentes de IA.

## Invariantes

- As URLs `/ferramenta.html`, `/privacidade.html` e `/termos.html` não mudam, porque estão registradas na verificação OAuth do Google.
- A `/ferramenta.html` é a página inicial do aplicativo nessa verificação: descreve a ferramenta carcara-editorial-canal e liga para a Política de Privacidade. O rodapé de todas as páginas, inclusive a capa, mantém links visíveis para ela e para a Política de Privacidade.
- Qualquer mudança que passe a coletar dados de visitantes, como analytics, cookies ou vídeos incorporados, atualiza a Política de Privacidade no mesmo pull request.
- Nenhum segredo, token ou credencial entra no repositório.

## Publicação

Toda mudança chega à branch `main` por pull request. O push na `main` dispara o GitHub Actions, que gera o site e o publica no GitHub Pages, no domínio carcaraeditorial.com.br.

O Actions também roda a cada 15 minutos. Nessa execução agendada, ele gera o site e só publica quando a lista de matérias difere da do site no ar, o que acontece quando uma matéria agendada chega ao horário. Como o GitHub atrasa execuções agendadas, a matéria pode entrar no ar até cerca de meia hora depois do vídeo.
