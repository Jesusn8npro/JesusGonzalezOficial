import type { Metadata } from 'next';
import LinkEnBio from '../../src/paginas/link-in-bio/LinkEnBio';

export const metadata: Metadata = {
  title: 'Enlaces de Jesús González | Acordeonista Vallenato',
  description:
    'Todos los enlaces de Jesús González en un solo lugar: contratación por WhatsApp, videos, redes sociales y academia de acordeón vallenato online.',
  alternates: { canonical: '/link-in-bio' },
  openGraph: {
    title: 'Enlaces de Jesús González | Acordeonista Vallenato',
    description:
      'Contratación, videos y redes de Jesús González en un solo lugar.',
    url: '/link-in-bio',
    images: ['/Imagenes/Foto de perfil para JESUS GONZALEZ.jpg'],
  },
};

export default function Page() {
  return <LinkEnBio />;
}
