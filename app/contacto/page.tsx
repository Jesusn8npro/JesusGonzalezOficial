import type { Metadata } from 'next';
import Contacto from '../../src/paginas/contacto/Contacto';

export const metadata: Metadata = {
  title: 'Contacto y Cotización | Contratar Acordeonista Vallenato',
  description:
    'Contrata a Jesús González para tu boda o evento en Colombia. Escríbeme por WhatsApp con fecha, ciudad e invitados y te paso una propuesta a tu medida.',
  alternates: { canonical: '/contacto' },
  openGraph: {
    title: 'Contacto y Cotización | Jesús González Acordeonista',
    description:
      'Cotiza un show de vallenato en vivo para tu evento en Colombia. Respuesta rápida por WhatsApp.',
    url: '/contacto',
    images: ['/Imagenes/Foto de perfil para JESUS GONZALEZ.jpg'],
  },
};

export default function Page() {
  return <Contacto />;
}
