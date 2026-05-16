import type { Metadata } from 'next';
import Videos from '../../src/paginas/videos/Videos';

export const metadata: Metadata = {
  title: 'Videos de Vallenato en Vivo | Jesús González Acordeonista',
  description:
    'Mira videos de Jesús González tocando vallenato en vivo: conciertos, parrandas y presentaciones junto a Jorge Celedón, Poncho Zuleta y más artistas.',
  alternates: { canonical: '/videos' },
  openGraph: {
    title: 'Videos de Vallenato en Vivo | Jesús González',
    description:
      'Conciertos y parrandas de Jesús González en video. Vallenato del bueno, en vivo.',
    url: '/videos',
    images: ['/Imagenes/Jesus Gonzalez en concierto.jpg'],
  },
};

export default function Page() {
  return <Videos />;
}
