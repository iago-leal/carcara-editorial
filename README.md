# Carcará Editorial

Site do Carcará Editorial, veículo brasileiro e independente de jornalismo de dados sobre política, economia e tecnologia: [carcaraeditorial.com.br](https://carcaraeditorial.com.br).

## Como rodar

É preciso ter o Node.js 22.23.4 ou mais recente.

```sh
npm install
npm run dev     # servidor local em http://localhost:4321
npm run build   # gera o site em dist/
```

## Como publicar uma matéria

1. Copie `src/content/materias/_modelo.md` para um arquivo `AAAA-MM-DD-slug.md` na mesma pasta.
2. Preencha os metadados e o texto, e apague a linha `rascunho: true`.
3. Rode `npm run build` para conferir. O build aponta qualquer campo faltando.
4. Abra um pull request. Depois do merge na `main`, o GitHub Actions publica o site.

## Regras do projeto

As regras editoriais, de estilo e de design estão no [AGENTS.md](AGENTS.md), que serve tanto para pessoas quanto para agentes de IA.
