---
titulo: Só R$ 9 de cada R$ 100 contestados em golpes do Pix voltaram às vítimas
linhaFina: Desde 2022, os bancos aceitaram contestações que somam R$ 27,6 bilhões, e em 55 de cada R$ 100 a conta de quem recebeu já estava vazia.
editoria: tecnologia
publicadoEm: "2026-11-27T23:30:00-03:00"
autoria: Redação Carcará Editorial
video: https://www.youtube.com/watch?v=PBNkensCu_s
fontes:
  - nome: "Banco Central do Brasil, Dados Abertos do Pix (Olinda), EstatisticasFraudesPix (mensal)"
    url: "https://olinda.bcb.gov.br/olinda/servico/Pix_DadosAbertos/versao/v1/odata/EstatisticasFraudesPix(Database=@Database)?@Database='202001'&$format=json&$top=1000"
  - nome: "Banco Central do Brasil, Resolução BCB nº 493, de 28 de agosto de 2025"
    url: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=493
---

De janeiro de 2022 a setembro de 2026, os bancos aceitaram contestações de Pix por suspeita de fraude que somam R$ 27,57 bilhões, e só R$ 2,59 bilhões voltaram às vítimas, segundo as [estatísticas de fraudes do Pix do Banco Central](https://olinda.bcb.gov.br/olinda/servico/Pix_DadosAbertos/versao/v1/odata/EstatisticasFraudesPix(Database=@Database)?@Database='202001'&$format=json&$top=1000). São R$ 9,38 de cada R$ 100. O motivo mais comum é a pressa do golpista: em 55 de cada R$ 100 contestados, quando o banco foi buscar o dinheiro, a conta que o recebeu já estava vazia.

Os números são do Mecanismo Especial de Devolução, o MED, o caminho oficial para pedir de volta um Pix feito por causa de golpe. A vítima avisa o próprio banco, que analisa o caso e, se aceitar a contestação, pede o bloqueio e a devolução do valor à instituição de quem recebeu. Contestação aceita não equivale a golpe confirmado pela Justiça: é o pedido que o banco da vítima considerou procedente.

## A conta vazia

O banco só devolve o que encontra. Dos R$ 27,57 bilhões contestados e aceitos no período, R$ 24,99 bilhões não voltaram, e a maior parte esbarrou no saldo: em 55 de cada R$ 100, não havia dinheiro na conta recebedora quando o pedido chegou. Em outros R$ 25,99 de cada R$ 100, o banco achou só uma parte, devolveu o que havia, e o resto não voltou.

```grafico
tipo: barras
titulo: O destino de cada R$ 100 contestados e aceitos no MED, jan/2022 a set/2026
fonte: Banco Central, EstatisticasFraudesPix
descricao: De cada 100 reais contestados e aceitos pelos bancos, 55 não voltaram porque a conta recebedora não tinha saldo, 25,99 não voltaram em devoluções parciais, nas quais o banco achou só parte do valor, 9,38 foram devolvidos, 7,13 não voltaram por motivos diversos e 2,5 não voltaram porque a conta estava encerrada.
casas: 2
prefixo: "R$ "
itens:
  - {rotulo: Sem saldo na conta, valor: 55, destaque: true}
  - {rotulo: Devolução parcial, valor: 25.99}
  - {rotulo: Devolvido, valor: 9.38, destaque: true, cor: amarelo}
  - {rotulo: Motivos diversos, valor: 7.13}
  - {rotulo: Conta encerrada, valor: 2.5}
```

Um caso imaginário, o de uma compradora que paga por uma geladeira anunciada na internet e nunca a recebe, mostra como isso acontece. Ela contesta, o banco lhe dá razão e vai atrás do dinheiro, mas o valor já passou da conta do golpista para outras contas. Ela estava certa e, mesmo assim, fica sem nada.

## O valor cresce todo ano

O volume de contestações aceitas mais que dobrou desde o início da série. Foram R$ 3,02 bilhões em 2022, R$ 4,35 bilhões em 2023, R$ 6,69 bilhões em 2024 e R$ 7,77 bilhões em 2025. Até setembro de 2026, já eram R$ 5,74 bilhões.

```grafico
tipo: barras
titulo: Pix contestados e aceitos pelos bancos no MED, R$ bilhões por ano
fonte: Banco Central, EstatisticasFraudesPix
descricao: O valor das contestações aceitas subiu de 3,02 bilhões de reais em 2022 para 4,35 bilhões em 2023, 6,69 bilhões em 2024 e 7,77 bilhões em 2025. De janeiro a setembro de 2026, somou 5,74 bilhões.
casas: 2
prefixo: "R$ "
sufixo: " bi"
itens:
  - {rotulo: "2022", valor: 3.02}
  - {rotulo: "2023", valor: 4.35}
  - {rotulo: "2024", valor: 6.69}
  - {rotulo: "2025", valor: 7.77, destaque: true}
  - {rotulo: "2026, até set.", valor: 5.74}
```

## A regra nova e a melhora de 2026

Em 2026, a devolução subiu. Até setembro, voltaram R$ 13,37 de cada R$ 100, contra R$ 8,96 em 2025 e R$ 6,26 em 2022. Só em setembro de 2026, a taxa foi de 14,5%.

A alta coincide com a [Resolução BCB nº 493](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=493), que criou a recuperação de valores no MED. Pela norma, o banco pode rastrear o dinheiro também nas transações seguintes à conta do golpista, fazer vários bloqueios e devolver em partes. A adoção foi facultativa a partir de 23 de novembro de 2025 e passou a ser obrigatória em 2 de fevereiro de 2026.

```grafico
tipo: barras
titulo: Quanto voltou de cada R$ 100 contestados e aceitos no MED, por ano
fonte: Banco Central, EstatisticasFraudesPix
descricao: A devolução foi de 6,26 reais de cada 100 em 2022, 8,98 em 2023, 8,11 em 2024 e 8,96 em 2025. De janeiro a setembro de 2026, com a regra nova do MED, subiu para 13,37.
casas: 2
prefixo: "R$ "
itens:
  - {rotulo: "2022", valor: 6.26}
  - {rotulo: "2023", valor: 8.98}
  - {rotulo: "2024", valor: 8.11}
  - {rotulo: "2025", valor: 8.96}
  - {rotulo: "2026, até set.", valor: 13.37, destaque: true}
```

## Análise do Carcará

Os dados mostram a coincidência, não a causa. A melhora de 2026 chega junto com a regra nova, mas as estatísticas do Banco Central não permitem dizer quanto dela vem só do rastreamento ampliado. E, mesmo melhor, a regra continua a mesma: em 2026, mais de R$ 86 de cada R$ 100 contestados e aceitos não voltaram.

Recuperar o dinheiro é uma corrida, e o golpista sai na frente, porque o Pix é instantâneo e o valor pode trocar de conta em minutos. Como o dinheiro sai rápido, pedir a devolução ao próprio banco, pelo aplicativo, logo que perceber o golpe aumenta a chance de o banco chegar antes de a conta esvaziar.

## Como calculamos

Somamos, mês a mês, os valores das contestações aceitas e das devoluções informados pelo Banco Central de janeiro de 2022 a setembro de 2026, último mês publicado quando os dados foram consultados, em 23 de novembro de 2026. A proporção devolvida de cada R$ 100 é o valor devolvido, integral ou parcialmente, dividido pelo valor aceito. Em cada mês, a conta bate com o percentual de devolução que o próprio Banco Central publica.
