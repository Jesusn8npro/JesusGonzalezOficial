import type { Metadata } from 'next';
import Inicio from '../src/paginas/inicio/Inicio';

export const metadata: Metadata = {
  title:
    'Jesús González | Acordeonista Vallenato para Bodas y Eventos en Colombia',
  description:
    'Acordeonista vallenato profesional para bodas, eventos corporativos, parrandas y galas en Colombia. Shows en vivo de nivel. Cotiza tu fecha por WhatsApp hoy.',
  alternates: { canonical: '/' },
  openGraph: {
    title:
      'Jesús González | Acordeonista Vallenato para Bodas y Eventos en Colombia',
    description:
      'Shows de vallenato en vivo para bodas, eventos corporativos y parrandas en Colombia. Cotiza por WhatsApp.',
    url: '/',
    images: ['/Imagenes/Jesus Gonzalez en concierto.jpg'],
  },
};

export default function Page() {
  return <Inicio />;
}
