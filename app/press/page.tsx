import type { Metadata } from 'next';
import JsonLd from '../../src/componentes/seo/JsonLd';
import { breadcrumbSchema } from '../../src/componentes/seo/esquemas';
import { pressSchema } from '../../src/componentes/press/esquemaPress';
import { datosPress } from '../../src/componentes/press/datosPress';
import HeroPress from '../../src/componentes/press/HeroPress';
import BioPress from '../../src/componentes/press/BioPress';
import Credenciales from '../../src/componentes/press/Credenciales';
import FormatoBanda from '../../src/componentes/press/FormatoBanda';
import GaleriaPress from '../../src/componentes/press/GaleriaPress';
import VideosPress from '../../src/componentes/press/VideosPress';
import RiderTecnico from '../../src/componentes/press/RiderTecnico';
import CierrePress from '../../src/componentes/press/CierrePress';

// SSG: la página es estática (sin datos dinámicos en build).
export const dynamic = 'force-static';

const TITULO =
  'Press Kit / EPK — Jesús González, acordeonista vallenato profesional';
const DESCRIPCION =
  'Press Kit oficial de Jesús González: biografía, credenciales junto a los grandes del vallenato, banda profesional de 6 a 9 músicos, galería, videos y rider técnico.';
const IMAGEN = datosPress.fotoHero.src;

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: '/press' },
  openGraph: {
    type: 'profile',
    title: TITULO,
    description: DESCRIPCION,
    url: '/press',
    images: [IMAGEN],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITULO,
    description: DESCRIPCION,
    images: [IMAGEN],
  },
};

export default function PressPage() {
  return (
    <>
      <JsonLd id="ld-press" data={pressSchema()} />
      <JsonLd
        id="ld-press-breadcrumb"
        data={breadcrumbSchema([
          { nombre: 'Inicio', url: '/' },
          { nombre: 'Press Kit', url: '/press' },
        ])}
      />

      <HeroPress datos={datosPress} />
      <BioPress datos={datosPress} />
      <Credenciales datos={datosPress} />
      <FormatoBanda datos={datosPress} />
      <GaleriaPress datos={datosPress} />
      <VideosPress datos={datosPress} />
      <RiderTecnico datos={datosPress} />
      <CierrePress datos={datosPress} />
    </>
  );
}
