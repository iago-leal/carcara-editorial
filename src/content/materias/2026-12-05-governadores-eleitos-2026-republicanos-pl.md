---
titulo: PL elegeu seis governadores, mas Republicanos, com quatro, governará 35,7% dos brasileiros e 44,8% do PIB
linhaFina: Oito partidos assumem os 27 governos estaduais em 6 de janeiro de 2027; a lista é a do TSE de 20 de novembro de 2026, e os resultados ainda podem mudar por decisão judicial.
editoria: politica
publicadoEm: "2026-12-05T18:00:00-03:00"
autoria: Redação Carcará Editorial
video: https://www.youtube.com/watch?v=JNYGWEpofSA
fontes:
  - nome: TSE, sistema de resultados, governador, 1º turno de 04/10/2026, eleição 6259, um arquivo por UF
    url: https://resultados.tse.jus.br/oficial/ele2026/6259/dados/sp/sp-c0003-e006259-u.json
  - nome: TSE, sistema de resultados, governador, 2º turno de 25/10/2026, eleição 6260, um arquivo por UF (só as 6 UFs com 2º turno)
    url: https://resultados.tse.jus.br/oficial/ele2026/6260/dados/ac/ac-c0003-e006260-u.json
  - nome: TSE, sistema de resultados, presidente, 2º turno de 25/10/2026, eleição 6258, um arquivo por UF
    url: https://resultados.tse.jus.br/oficial/ele2026/6258/dados/sp/sp-c0001-e006258-u.json
  - nome: TSE, dados abertos, Candidatos 2022, arquivo consulta_cand_2022
    url: https://cdn.tse.jus.br/estatistica/sead/odsele/consulta_cand/consulta_cand_2022.zip
  - nome: IBGE, Censo Demográfico 2022, população residente por UF, SIDRA tabela 4714
    url: https://sidra.ibge.gov.br/tabela/4714
  - nome: IBGE, Contas Regionais do Brasil 2023, PIB a preços correntes por UF, SIDRA tabela 5938
    url: https://sidra.ibge.gov.br/tabela/5938
  - nome: Constituição da República Federativa do Brasil, art. 28, caput, com a redação da Emenda Constitucional 111/2021
    url: https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm
---

O PL elegeu seis governadores, mais que qualquer outro partido, mas o Republicanos, com quatro, governará 72,4 milhões de pessoas, ou 35,7% da população, e 44,8% do PIB. Os dados são do [TSE](https://resultados.tse.jus.br/oficial/ele2026/6259/dados/sp/sp-c0003-e006259-u.json), estado a estado, consultados em 20 de novembro de 2026, com todas as seções totalizadas nas 27 unidades. Os resultados ainda podem mudar por decisão judicial, e a posse está marcada para 6 de janeiro de 2027, conforme o [art. 28 da Constituição](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm).

## Oito partidos, 27 governos

O PL elegeu seis governadores, no Paraná, em Santa Catarina, no Rio Grande do Sul, no Rio de Janeiro, em Rondônia e em Roraima. O PSD tem cinco; Republicanos, PT e PP, quatro cada; o PSDB, dois; e MDB e Podemos, um cada.

```grafico
tipo: barras
titulo: Governadores eleitos em 2026, por partido
fonte: TSE, resultados de 1º e 2º turno, consulta de 20/11/2026
descricao: O PL elegeu seis governadores. O PSD elegeu cinco; Republicanos, PT e PP, quatro cada; o PSDB, dois; Podemos e MDB, um cada.
casas: 0
itens:
  - {rotulo: PL, valor: 6, destaque: true}
  - {rotulo: PSD, valor: 5}
  - {rotulo: Republicanos, valor: 4, destaque: true, cor: amarelo}
  - {rotulo: PT, valor: 4}
  - {rotulo: PP, valor: 4}
  - {rotulo: PSDB, valor: 2}
  - {rotulo: Podemos, valor: 1}
  - {rotulo: MDB, valor: 1}
```

A população é a do [Censo 2022](https://sidra.ibge.gov.br/tabela/4714), e o PIB é o de 2023, último ano das [Contas Regionais](https://sidra.ibge.gov.br/tabela/5938), de modo que a comparação usa só participações.

```grafico
tipo: barras
titulo: Parcela da população governada por partido
fonte: TSE, consulta de 20/11/2026; IBGE, Censo 2022
descricao: Os governadores do Republicanos governarão 35,7% da população; os do PL, 23,7%; os do PT, 14,5%; os do PSD, 11,2%; os do PP, 5,1%; o do Podemos, 4,0%; o do MDB, 3,5%; e os do PSDB, 2,3%.
casas: 1
sufixo: "%"
itens:
  - {rotulo: Republicanos, valor: 35.7, destaque: true, cor: amarelo}
  - {rotulo: PL, valor: 23.7, destaque: true}
  - {rotulo: PT, valor: 14.5}
  - {rotulo: PSD, valor: 11.2}
  - {rotulo: PP, valor: 5.1}
  - {rotulo: Podemos, valor: 4}
  - {rotulo: MDB, valor: 3.5}
  - {rotulo: PSDB, valor: 2.3}
```

```grafico
tipo: barras
titulo: Parcela do PIB de 2023 governada por partido
fonte: TSE, consulta de 20/11/2026; IBGE, Contas Regionais 2023
descricao: Os estados do Republicanos somam 44,8% do PIB de 2023; os do PL, 28,4%; os do PT, 7,7%; os do PP, 6,2%; os do PSD, 6,1%; o do MDB, 3,1%; o do Podemos, 2,3%; e os do PSDB, 1,4%.
casas: 1
sufixo: "%"
itens:
  - {rotulo: Republicanos, valor: 44.8, destaque: true, cor: amarelo}
  - {rotulo: PL, valor: 28.4, destaque: true}
  - {rotulo: PT, valor: 7.7}
  - {rotulo: PP, valor: 6.2}
  - {rotulo: PSD, valor: 6.1}
  - {rotulo: MDB, valor: 3.1}
  - {rotulo: Podemos, valor: 2.3}
  - {rotulo: PSDB, valor: 1.4}
```

## O avanço do PL

Em 2022, o PL elegeu dois governadores, e a população governada por ele passou de 11,7% para 23,7%. Os balanços divulgados em outubro divergiram entre cinco e seis governos do partido, mas a lista final do TSE traz seis. No Rio de Janeiro, a última totalização foi em 10 de outubro: Douglas Ruas, do PL, teve 50,88% dos votos válidos, e Eduardo Paes, do PSD, ficou em segundo, com 44,16%.

## O peso do Republicanos

São Paulo, Minas Gerais, Espírito Santo e Mato Grosso, os quatro estados do Republicanos, somam 72,4 milhões de pessoas e R$ 4,9 trilhões do PIB de 2023, de um total de R$ 10,9 trilhões. O PL governa 28,4% do PIB, e o PT, 7,7%.

Os cinco estados mais populosos, São Paulo, Minas Gerais, Rio de Janeiro, Bahia e Paraná, reúnem 52,5% dos brasileiros. Dois são do Republicanos, dois do PL e um do PT, que governa também Ceará, Piauí e Rio Grande do Norte. Com quatro estados, o PT governa 14,5% da população e 7,7% do PIB. O PSD, com cinco, governa 11,2% da população e 6,1% do PIB.

PP, Podemos, MDB e PSDB, juntos, têm oito governos, 14,9% da população e 13% do PIB. É quase o peso do PT na população, mas quase o dobro dele no PIB.

## Por região

No Sudeste, três dos quatro estados são do Republicanos. No Nordeste, o PT governa quatro dos nove. O Sul é inteiro do PL. O Norte, com 8,5% da população, tem sete estados e cinco partidos, a região mais dividida.

## O voto para presidente

Lula foi reeleito com 51,79% dos votos válidos, segundo o [TSE](https://resultados.tse.jus.br/oficial/ele2026/6258/dados/sp/sp-c0001-e006258-u.json), e venceu em 13 das 27 unidades, onde vivem 43,3% dos brasileiros. Só quatro desses governos são do PT. Nos seis estados do PL, Flávio Bolsonaro venceu o segundo turno.

## Turnos e comparação com 2022

Vinte e um governadores foram definidos no primeiro turno e seis, em 25 de outubro: Acre, Amazonas, Distrito Federal, Espírito Santo, Rio Grande do Norte e Tocantins, segundo o [TSE](https://resultados.tse.jus.br/oficial/ele2026/6260/dados/ac/ac-c0003-e006260-u.json). O resultado mais apertado foi o do Paraná, no primeiro turno: Sergio Moro, do PL, com 50,09% dos votos válidos.

Em 2022, onze partidos elegeram governadores, segundo os [dados do TSE](https://cdn.tse.jus.br/estatistica/sead/odsele/consulta_cand/consulta_cand_2022.zip); agora são oito. O União Brasil passou de quatro governos para nenhum, e o PSB, de três para nenhum. O MDB foi de três para um, e o PSDB, de três para dois.

Em 18 das 27 unidades, o partido no governo mudou, ainda que, em dois casos, o governador seja o mesmo e tenha trocado de legenda. Só seis nomes se repetem: Ceará, Mato Grosso do Sul, Pernambuco, Piauí, Santa Catarina e São Paulo.

## Análise

*O que segue é análise da Redação Carcará Editorial, e não dado oficial.*

Contar governadores esconde o peso de cada um: o PL ganhou mais estados, mas o Republicanos governa mais gente e mais riqueza. O voto para presidente, além disso, não decidiu o governador: em nove dos 13 estados onde Lula venceu, o governo é de outro partido.

Os números mostram o tamanho de cada governo, e não a lealdade de cada governador. O mapa diz quem governa onde; quem vai apoiar o presidente reeleito, ou a oposição, só os próximos meses vão mostrar.
