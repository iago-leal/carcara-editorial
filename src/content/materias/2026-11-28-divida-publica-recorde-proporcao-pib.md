---
titulo: Dívida pública chega a R$ 11,1 trilhões, mas segue abaixo do pico de 2020 em proporção do PIB
linhaFina: A dívida bruta equivale a 82,95% do PIB, o maior nível desde março de 2021, e os juros explicam toda a alta de 2026.
editoria: economia
publicadoEm: "2026-11-28T18:00:00-03:00"
autoria: Redação Carcará Editorial
video: https://www.youtube.com/watch?v=Q3hfx5bNKwQ
fontes:
  - nome: "Banco Central do Brasil, SGS, série 13761: dívida bruta do governo geral, R$ milhões"
    url: https://api.bcb.gov.br/dados/serie/bcdata.sgs.13761/dados?formato=json
  - nome: "Banco Central do Brasil, SGS, série 13762: dívida bruta do governo geral, % do PIB"
    url: https://api.bcb.gov.br/dados/serie/bcdata.sgs.13762/dados?formato=json
  - nome: "Banco Central do Brasil, SGS, série 4382: PIB acumulado dos últimos 12 meses, valores correntes"
    url: https://api.bcb.gov.br/dados/serie/bcdata.sgs.4382/dados?formato=json
  - nome: "Banco Central do Brasil, SGS, série 433: IPCA, variação mensal, fonte IBGE"
    url: https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json
  - nome: "Banco Central do Brasil, Estatísticas Fiscais, nota para a imprensa de 29/10/2026, dados de setembro de 2026"
    url: https://www.bcb.gov.br/content/estatisticas/hist_estatisticasfiscais/202610_Texto_de_estatisticas_fiscais.pdf
  - nome: "Banco Central do Brasil, SGS, série 432: meta da taxa Selic"
    url: https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?formato=json
  - nome: "Ministério do Planejamento e Orçamento, audiência pública do PLDO e do PLOA 2027 na CMO, novembro de 2026, trajetória da dívida pública"
    url: https://www.gov.br/planejamento/pt-br/assuntos/noticias/2026/projeto-de-lei-a-ser-protocolado-pelo-senado-vai-gerar-economia-de-ate-r-60-bilhoes-preve-bruno-moretti/ploa-e-pldo-2027-audiencia-cmo.pdf/@@display-file/file
---

A dívida bruta do governo geral chegou a R$ 11,1 trilhões em setembro de 2026, recorde em reais, segundo a [série 13761 do Banco Central](https://api.bcb.gov.br/dados/serie/bcdata.sgs.13761/dados?formato=json). Em proporção do PIB, porém, ela equivale a 82,95%, abaixo dos 87,66% de outubro de 2020, o pico da [série 13762](https://api.bcb.gov.br/dados/serie/bcdata.sgs.13762/dados?formato=json). O nível de setembro é o mais alto desde março de 2021, e a alta de 2026 se explica pelos juros.

## Recorde em reais é a regra

De janeiro de 2007 a setembro de 2026, a dívida em reais bateu o próprio recorde em 190 de 237 meses, segundo cálculo do Carcará sobre a série do Banco Central. Em dezembro de 2006, ela somava R$ 1,34 trilhão.

O recorde é frequente porque tudo cresce em reais. Desde 2006, a dívida multiplicou por 8,3, enquanto o [PIB acumulado em 12 meses](https://api.bcb.gov.br/dados/serie/bcdata.sgs.4382/dados?formato=json) multiplicou por 5,6 e os preços, medidos pelo [IPCA](https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json), por 2,9. Descontada a inflação, a dívida cresceu 2,8 vezes.

Por isso a medida usada para comparar períodos é a razão entre a dívida e o PIB. Em setembro, eram R$ 11,1 trilhões de dívida para R$ 13,4 trilhões de PIB em 12 meses.

```grafico
tipo: linha
titulo: Dívida bruta do governo geral, % do PIB
fonte: "Banco Central, SGS 13762, dezembros e set/2026; projeção: Ministério do Planejamento, nov/2026"
descricao: A dívida em proporção do PIB caiu de 55% em 2006 para 51% em 2011, subiu até o pico de 87,66% em outubro de 2020, recuou para 71,7% em 2022 e voltou a 82,95% em setembro de 2026. A projeção do governo, tracejada, chega a 87,8% em 2029 e cai para 83,4% em 2036.
eixo: {min: 40, max: 90, passo: 10, sufixo: "%"}
eixoX: {min: 2006, max: 2037.5, marcas: [2006, 2011, 2016, 2021, 2026, 2031, 2036]}
referencias:
  - {valor: 87.66, rotulo: "Pico de out/2020: 87,66%"}
series:
  - nome: Observado
    destaque: true
    pontos: [[2006.92, 55.48], [2007.92, 56.72], [2008.92, 55.98], [2009.92, 59.21], [2010.92, 51.77], [2011.92, 51.27], [2012.92, 53.67], [2013.92, 51.54], [2014.92, 56.28], [2015.92, 65.5], [2016.92, 69.84], [2017.92, 73.72], [2018.92, 75.27], [2019.92, 74.44], [2020.79, 87.66], [2020.92, 86.94], [2021.92, 77.31], [2022.92, 71.68], [2023.92, 73.83], [2024.92, 76.27], [2025.92, 78.64], [2026.71, 82.95]]
  - nome: Projeção do governo
    rotulo: Projeção do governo
    rotuloAbaixo: true
    tracejada: true
    pontos: [[2025.92, 78.6], [2026.92, 83.6], [2027.92, 86], [2028.92, 87.3], [2029.92, 87.8], [2030.92, 87.5], [2031.92, 87], [2032.92, 86.4], [2033.92, 85.7], [2034.92, 84.9], [2035.92, 84.1], [2036.92, 83.4]]
marcas:
  - {x: 2026.71, y: 82.95, rx: 2028, ry: 70, lado: direita, rotulo: "82,95%"}
  - {x: 2011.92, y: 51.27, rx: 2013.5, ry: 44, lado: direita, rotulo: "dez/2011: 51,27%", cor: amarelo}
```

Em 2026, a razão subiu 4,3 pontos do PIB; desde dezembro de 2023, a alta soma 9,1 pontos.

## O peso dos juros

Segundo as [Estatísticas Fiscais do Banco Central](https://www.bcb.gov.br/content/estatisticas/hist_estatisticasfiscais/202610_Texto_de_estatisticas_fiscais.pdf), de janeiro a setembro os juros nominais incorporados somaram 7,2 pontos do PIB à dívida bruta, e as emissões líquidas, 1,1 ponto. O crescimento do PIB nominal tirou 3,9 pontos, e o câmbio, 0,2. No saldo, a razão subiu 4,3 pontos. Sem os juros, ela teria caído.

```grafico
tipo: cascata
titulo: O que mudou a dívida bruta de janeiro a setembro de 2026, em pontos do PIB
fonte: Banco Central, Estatísticas Fiscais de 29/10/2026
descricao: Os juros nominais somaram 7,2 pontos do PIB à dívida e as emissões líquidas, 1,1 ponto. O crescimento do PIB nominal tirou 3,9 pontos e o câmbio, 0,2. No saldo, a dívida subiu 4,3 pontos do PIB.
casas: 1
itens:
  - {rotulo: Juros, valor: 7.2}
  - {rotulo: Emissões líquidas, valor: 1.1}
  - {rotulo: Crescimento do PIB, valor: -3.9}
  - {rotulo: Câmbio, valor: -0.2}
total: {rotulo: Alta em 2026, valor: 4.3}
```

O mecanismo está na diferença entre duas taxas. Em 12 meses até setembro, a taxa de juros implícita da dívida bruta foi de 13,03%, enquanto o PIB nominal cresceu 6,98%. Quando o juro supera o crescimento e as contas do governo não deixam sobra para pagá-lo, a dívida cresce mais que o PIB, e a proporção sobe.

```grafico
tipo: barras
titulo: Juro médio da dívida contra crescimento do PIB, 12 meses até set/2026
fonte: Banco Central, Estatísticas Fiscais (Tabela 24) e SGS 4382; cálculo do Carcará
descricao: Em 12 meses até setembro de 2026, a taxa de juros implícita da dívida bruta foi de 13,03%, e o PIB nominal cresceu 6,98%.
casas: 2
sufixo: "%"
larguraRotulo: 230
altura: 56
itens:
  - {rotulo: Juro médio da dívida, valor: 13.03, destaque: true}
  - {rotulo: Crescimento do PIB, valor: 6.98}
```

O Banco Central informa que 56,87% da dívida bruta acompanham a Selic, que está em 13,75% ao ano desde 17 de setembro, conforme a [série 432](https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?formato=json). Pelo quadro de sensibilidade da mesma nota, cada ponto percentual a mais na Selic, mantido por 12 meses, soma R$ 64,9 bilhões à dívida, o equivalente a 0,48 ponto do PIB.

No setor público consolidado, que inclui o Banco Central, os juros nominais somaram R$ 1,2 trilhão em 12 meses até setembro, ou 8,99% do PIB. São cerca de R$ 3,3 bilhões por dia e 94,5% do déficit nominal, segundo cálculo do Carcará sobre a nota. Essa medida não se soma aos fatores da dívida bruta, que têm outra base.

## A projeção do governo

A trajetória apresentada pelo [Ministério do Planejamento e Orçamento](https://www.gov.br/planejamento/pt-br/assuntos/noticias/2026/projeto-de-lei-a-ser-protocolado-pelo-senado-vai-gerar-economia-de-ate-r-60-bilhoes-preve-bruno-moretti/ploa-e-pldo-2027-audiencia-cmo.pdf/@@display-file/file) na Comissão Mista de Orçamento prevê dívida bruta de 83,6% do PIB em 2026, 86,0% em 2027 e pico de 87,8% em 2029, pouco acima do de 2020. Depois, a projeção cai até 83,4% em 2036.

A mesma apresentação traz a dívida líquida, que desconta os ativos do setor público: 65,2% do PIB em 2025 e pico de 76,2% em 2030. Os números são projeções e dependem de premissas sobre crescimento, juros e resultado das contas públicas.

## Análise do Carcará

Chamar de disparada o recorde em reais engana, porque ele acontece quase todo mês. Afirmar que não há problema também engana: a proporção subiu 4,3 pontos em 2026, puxada pelos juros, e a projeção do próprio governo passa do pico de 2020.

A razão só para de subir se a dívida crescer menos que o PIB. Com o juro acima do crescimento, isso exige sobra nas contas, PIB maior ou juro menor. Os números mostram a trajetória; a combinação dessas saídas é escolha política.
