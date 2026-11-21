// Gráficos das matérias, desenhados no build como SVG embutido na página, sem JavaScript.
//
// Na matéria, um bloco de código com a linguagem `grafico` traz a especificação em YAML:
//
//   ```grafico
//   tipo: barras            # linha, barras ou cascata
//   titulo: Renda média por pessoa, 2025
//   fonte: IBGE, PNAD Contínua
//   descricao: Texto alternativo que descreve o gráfico para leitores de tela.
//   ...
//   ```
//
// O plugin troca o bloco por uma <figure class="grafico">, sempre em quadro preto, com as cores do
// vídeo (decisão do Iago de 21/11/2026). As cores vêm das variáveis --grafico-* de carcara.css.
// A versão .md da matéria mantém o YAML, que deixa os números legíveis para agentes de IA.
import { parse } from 'yaml';

const L = 640; // largura do desenho; o SVG escala para a largura da coluna
const FONTE = 21; // corpo dos rótulos, legível a 320 px de largura
const MARGEM = 28;

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function numero(v, casas = 0) {
  return v.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas });
}

function formatar(spec, v, { sinal = false } = {}) {
  const s = (spec.prefixo ?? '') + numero(Math.abs(v), spec.casas ?? 0) + (spec.sufixo ?? '');
  if (v < 0) return '−' + s;
  return sinal ? '+' + s : s;
}

// Largura aproximada de um texto em Inter, para posicionar etiquetas sem medir no navegador.
const larguraTexto = (s, tam, peso = 400) => String(s).length * tam * (peso >= 700 ? 0.6 : 0.55);

function texto(x, y, s, { tam = FONTE, peso = 400, cor = 'texto', ancora = 'start' } = {}) {
  return `<text x="${x}" y="${y}" font-size="${tam}" font-weight="${peso}" class="g-${cor}" text-anchor="${ancora}">${esc(s)}</text>`;
}

// Título em cápsula de vidro escuro com borda laranja, como no vídeo.
function cabecalho(spec) {
  const linhas = quebrar(spec.titulo, 44);
  const h = linhas.length * 30 + 22;
  const t = linhas.map((l, i) => texto(MARGEM + 18, 44 + i * 30, l, { tam: 24, peso: 700 })).join('');
  return {
    svg: `<rect x="${MARGEM}" y="16" width="${L - 2 * MARGEM}" height="${h}" rx="12" class="g-capsula"/>${t}`,
    altura: 16 + h,
  };
}

function quebrar(s, max) {
  const palavras = String(s).split(/\s+/);
  const linhas = [];
  let atual = '';
  for (const p of palavras) {
    if ((atual + ' ' + p).trim().length > max && atual) {
      linhas.push(atual);
      atual = p;
    } else atual = (atual + ' ' + p).trim();
  }
  if (atual) linhas.push(atual);
  return linhas;
}

// Selo de fonte no canto inferior, como no vídeo.
function selo(spec, y) {
  const linhas = quebrar('▶ ' + spec.fonte, 58);
  const svg = linhas.map((l, i) => texto(L - MARGEM, y + i * 22, l, { tam: 17, cor: 'suave', ancora: 'end' })).join('');
  return { svg, altura: linhas.length * 22 };
}

// Etiqueta em forma de seta, presa a um ponto; aponta para a esquerda ou para a direita.
function etiqueta(x, y, s, cor = 'laranja', lado = 'direita') {
  const tam = 19, h = tam * 1.6, a = h / 2, w = larguraTexto(s, tam, 800) + tam * 1.2;
  if (lado === 'direita') {
    const d = `M${x},${y} L${x + a},${y - a} L${x + a + w},${y - a} L${x + a + w},${y + a} L${x + a},${y + a} Z`;
    return `<path d="${d}" class="g-fundo-${cor}"/>` + texto(x + a + tam * 0.5, y + tam * 0.36, s, { tam, peso: 800, cor: 'escuro' });
  }
  const d = `M${x},${y} L${x - a},${y - a} L${x - a - w},${y - a} L${x - a - w},${y + a} L${x - a},${y + a} Z`;
  return `<path d="${d}" class="g-fundo-${cor}"/>` + texto(x - a - tam * 0.5, y + tam * 0.36, s, { tam, peso: 800, cor: 'escuro', ancora: 'end' });
}

function linha(spec) {
  const cab = cabecalho(spec);
  const topo = cab.altura + 36, base = topo + 300;
  const esq = MARGEM + 52, dir = L - MARGEM - 8;
  const todos = spec.series.flatMap((s) => s.pontos);
  const x0 = spec.eixoX?.min ?? Math.min(...todos.map((p) => p[0]));
  const x1 = spec.eixoX?.max ?? Math.max(...todos.map((p) => p[0]));
  const { min: y0, max: y1, passo } = spec.eixo;
  const X = (v) => esq + ((v - x0) / (x1 - x0)) * (dir - esq);
  const Y = (v) => base - ((v - y0) / (y1 - y0)) * (base - topo);
  let g = '';
  for (let v = y0; v <= y1 + 1e-9; v += passo) {
    g += `<line x1="${esq}" x2="${dir}" y1="${Y(v)}" y2="${Y(v)}" class="g-grade"/>`;
    g += texto(esq - 10, Y(v) + 7, numero(v) + (spec.eixo.sufixo ?? ''), { tam: 17, cor: 'suave', ancora: 'end' });
  }
  for (const a of spec.eixoX?.marcas ?? []) g += texto(X(a), base + 28, String(a), { tam: 17, cor: 'suave', ancora: 'middle' });
  for (const r of spec.referencias ?? []) {
    g += `<line x1="${esq}" x2="${dir}" y1="${Y(r.valor)}" y2="${Y(r.valor)}" class="g-regua"/>`;
    g += texto(esq + 6, Y(r.valor) - 10, r.rotulo, { tam: 18, peso: 700, cor: 'amarelo' });
  }
  for (const s of spec.series) {
    const d = s.pontos.map((p, i) => `${i ? 'L' : 'M'}${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`).join(' ');
    const cls = s.destaque ? 'g-linha-destaque' : 'g-linha';
    g += `<path d="${d}" class="${cls}${s.tracejada ? ' g-tracejada' : ''}"/>`;
    if (s.rotulo) {
      const [px, py] = s.pontos[s.pontos.length - 1];
      g += texto(X(px) - 4, Y(py) + (s.rotuloAbaixo ? 30 : -14), s.rotulo, { tam: 17, peso: 700, cor: s.destaque ? 'laranja' : 'suave', ancora: 'end' });
    }
  }
  // Marca num ponto; com rx e ry (coordenadas dos dados), a etiqueta vai para esse lugar,
  // ligada ao ponto por um fio, para não cobrir a linha.
  for (const m of spec.marcas ?? []) {
    const cor = m.cor ?? 'laranja';
    const tx = m.rx !== undefined ? X(m.rx) : X(m.x), ty = m.ry !== undefined ? Y(m.ry) : Y(m.y);
    const lado = m.lado ?? (tx > L * 0.6 ? 'esquerda' : 'direita');
    if (m.rx !== undefined || m.ry !== undefined)
      g += `<line x1="${X(m.x)}" y1="${Y(m.y)}" x2="${tx}" y2="${ty}" class="g-fio-${cor}"/>`;
    g += `<circle cx="${X(m.x)}" cy="${Y(m.y)}" r="6" class="g-fundo-${cor}"/>`;
    g += etiqueta(tx + (lado === 'direita' ? 6 : -6), ty, m.rotulo, cor, lado);
  }
  const s = selo(spec, base + 64);
  return { corpo: cab.svg + g + s.svg, altura: base + 64 + s.altura + 8 };
}

function barras(spec) {
  const cab = cabecalho(spec);
  const topo = cab.altura + 28, passo = spec.altura ?? 44, h = passo * 0.62;
  const larguraRotulo = spec.larguraRotulo ?? 190;
  const esq = MARGEM + larguraRotulo, dir = L - MARGEM - 110;
  const max = spec.max ?? Math.max(...spec.itens.map((i) => i.valor), spec.referencia?.valor ?? 0);
  const W = (v) => (v / max) * (dir - esq);
  let g = '';
  spec.itens.forEach((it, i) => {
    const y = topo + i * passo;
    const cor = it.destaque ? (it.cor ?? 'laranja') : 'serie';
    g += texto(esq - 12, y + h * 0.5 + 7, it.rotulo, { tam: 19, peso: it.destaque ? 700 : 400, cor: it.destaque ? 'texto' : 'suave', ancora: 'end' });
    g += `<rect x="${esq}" y="${y}" width="${Math.max(W(it.valor), 2).toFixed(1)}" height="${h}" rx="4" class="g-fundo-${cor}"/>`;
    g += texto(esq + W(it.valor) + 10, y + h * 0.5 + 7, it.texto ?? formatar(spec, it.valor), { tam: 19, peso: 700, cor: it.destaque ? (it.cor ?? 'laranja') : 'texto' });
  });
  const fim = topo + spec.itens.length * passo;
  if (spec.referencia) {
    const x = esq + W(spec.referencia.valor);
    g += `<line x1="${x}" x2="${x}" y1="${topo - 10}" y2="${fim - passo + h + 8}" class="g-regua"/>`;
    g += texto(x, fim + 18, spec.referencia.rotulo, { tam: 18, peso: 700, cor: 'amarelo', ancora: 'middle' });
  }
  const yS = fim + (spec.referencia ? 58 : 30);
  const s = selo(spec, yS);
  return { corpo: cab.svg + g + s.svg, altura: yS + s.altura + 8 };
}

// Cascata: cada fator sobe ou desce a partir do anterior, e o total fecha a conta.
function cascata(spec) {
  const cab = cabecalho(spec);
  const topo = cab.altura + 52, base = topo + 260;
  const itens = [...spec.itens, { ...spec.total, total: true }];
  let acc = 0;
  const blocos = itens.map((it) => {
    if (it.total) return { ...it, de: 0, ate: it.valor };
    const b = { ...it, de: acc, ate: acc + it.valor };
    acc += it.valor;
    return b;
  });
  const vals = blocos.flatMap((b) => [b.de, b.ate]);
  const y0 = Math.min(0, ...vals), y1 = Math.max(...vals);
  const Y = (v) => base - ((v - y0) / (y1 - y0)) * (base - topo);
  const n = blocos.length, col = (L - 2 * MARGEM) / n, w = col * 0.56;
  let g = `<line x1="${MARGEM}" x2="${L - MARGEM}" y1="${Y(0)}" y2="${Y(0)}" class="g-grade"/>`;
  blocos.forEach((b, i) => {
    const x = MARGEM + i * col + (col - w) / 2;
    const cor = b.total ? 'amarelo' : b.valor >= 0 ? 'laranja' : 'serie';
    const yA = Y(Math.max(b.de, b.ate)), yB = Y(Math.min(b.de, b.ate));
    g += `<rect x="${x}" y="${yA}" width="${w}" height="${Math.max(yB - yA, 2)}" rx="4" class="g-fundo-${cor}"/>`;
    if (i < n - 1 && !b.total) {
      const prox = MARGEM + (i + 1) * col + (col - w) / 2;
      g += `<line x1="${x + w}" x2="${prox}" y1="${Y(b.ate)}" y2="${Y(b.ate)}" class="g-conector"/>`;
    }
    g += texto(x + w / 2, yA - 10, formatar(spec, b.valor, { sinal: !b.total }), { tam: 20, peso: 800, cor: b.total ? 'amarelo' : b.valor >= 0 ? 'laranja' : 'texto', ancora: 'middle' });
    quebrar(b.rotulo, 12).forEach((l, k) =>
      g += texto(x + w / 2, base + 30 + k * 22, l, { tam: 17, peso: b.total ? 700 : 400, cor: b.total ? 'texto' : 'suave', ancora: 'middle' }));
  });
  const s = selo(spec, base + 96);
  return { corpo: cab.svg + g + s.svg, altura: base + 96 + s.altura + 8 };
}

const TIPOS = { linha, barras, cascata };

export function grafico(fonteYaml, origem = '') {
  const spec = parse(fonteYaml);
  const onde = origem ? ` em ${origem}` : '';
  for (const campo of ['tipo', 'titulo', 'fonte', 'descricao'])
    if (!spec?.[campo]) throw new Error(`Gráfico sem o campo ${campo}${onde}.`);
  const desenhar = TIPOS[spec.tipo];
  if (!desenhar) throw new Error(`Tipo de gráfico desconhecido «${spec.tipo}»${onde}: use linha, barras ou cascata.`);
  const { corpo, altura } = desenhar(spec);
  return `<figure class="grafico"><svg viewBox="0 0 ${L} ${Math.ceil(altura)}" role="img" aria-label="${esc(spec.titulo + '. ' + spec.descricao)}">${corpo}</svg></figure>`;
}

// Plugin remark: troca os blocos ```grafico pelo SVG.
export function remarkGraficos() {
  return (arvore, arquivo) => {
    const andar = (no) => {
      for (const filho of no.children ?? []) {
        if (filho.type === 'code' && filho.lang === 'grafico') {
          filho.type = 'html';
          filho.value = grafico(filho.value, arquivo?.path ?? '');
          delete filho.lang;
          delete filho.meta;
        } else andar(filho);
      }
    };
    andar(arvore);
  };
}
