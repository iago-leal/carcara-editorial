---
# Modelo de matéria. O build ignora este arquivo por causa do prefixo _.
# Para publicar, copie-o para AAAA-MM-DD-slug.md, com a mesma data de publicadoEm,
# preencha os campos e apague a linha rascunho ou mude o valor para false.
# As datas levam hora e fuso, entre aspas. A matéria só aparece no site depois
# do horário de publicadoEm, que deve ser o mesmo do vídeo no YouTube.
titulo: Título informativo, com sujeito e verbo
linhaFina: Frase que completa o título com o dado ou o contexto mais importante.
editoria: economia # politica, economia ou tecnologia
publicadoEm: "2026-01-31T18:00:00-03:00"
# atualizadoEm: "2026-02-01T10:30:00-03:00"
autoria: Redação Carcará Editorial
# Nas matérias de saúde, troque a linha autoria pela do médico, cadastrado em src/lib/autores.ts:
# autor: iago-leal
video: https://www.youtube.com/watch?v=IDENTIFICADOR
fontes:
  - nome: Nome da fonte oficial e do conjunto de dados
    url: https://www.ibge.gov.br/
# correcoes:
#   - data: "2026-02-01T10:30:00-03:00"
#     descricao: O texto informava X; o dado correto é Y.
rascunho: true
---

O primeiro parágrafo é o lide: responde ao que aconteceu, a quem, quando, onde, como e por quê, e traz o dado principal com a fonte.

Os parágrafos seguintes aprofundam o assunto em ordem decrescente de importância, conforme a pirâmide invertida.

## Intertítulo

Cada dado citado no texto aparece também na lista de fontes do cabeçalho.

Os gráficos-chave do vídeo entram num bloco de código com a linguagem grafico. Os tipos e os campos estão em src/lib/graficos.mjs.

```grafico
tipo: barras
titulo: Título do gráfico, com a unidade e o período
fonte: Nome curto da fonte, como no selo do vídeo
descricao: Frase que descreve o gráfico e os números principais para leitores de tela.
casas: 1
sufixo: "%"
itens:
  - {rotulo: Item em destaque, valor: 12.5, destaque: true}
  - {rotulo: Outro item, valor: 7.3}
```
