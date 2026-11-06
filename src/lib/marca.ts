import { getImage } from 'astro:assets';
import logo from '../assets/marca/carcara.png';
import { SITE } from './site';

// Versões da logo geradas no build a partir de src/assets/marca/carcara.png.
export async function versoesDaLogo() {
  const [icone, iconeApple, quadrada] = await Promise.all([
    getImage({ src: logo, width: 32, height: 32, format: 'png' }),
    getImage({ src: logo, width: 180, height: 180, format: 'png' }),
    getImage({ src: logo, width: 512, height: 512, format: 'png' }),
  ]);
  return { icone: icone.src, iconeApple: iconeApple.src, quadrada: quadrada.src };
}

// Organização jornalística nos dados estruturados, repetida como publisher das matérias.
export async function organizacao(site: URL) {
  const { quadrada } = await versoesDaLogo();
  return {
    '@type': 'NewsMediaOrganization',
    '@id': new URL('/#organizacao', site).href,
    name: SITE.nome,
    slogan: SITE.slogan,
    description: SITE.descricao,
    url: new URL('/', site).href,
    logo: {
      '@type': 'ImageObject',
      url: new URL(quadrada, site).href,
      width: 512,
      height: 512,
    },
    sameAs: Object.values(SITE.redes),
  };
}
