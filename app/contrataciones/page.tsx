import type { Metadata } from 'next';
import Contrataciones from '../../src/paginas/contrataciones/Contrataciones';
import JsonLd from '../../src/componentes/seo/JsonLd';
import {
  offerCatalogSchema,
  reviewsSchema,
  faqSchema,
  type QA,
} from '../../src/componentes/seo/esquemas';

export const metadata: Metadata = {
  title: 'Contratar Show de Vallenato | Paquetes y Cotización',
  description:
    'Contrata el show de vallenato de Jesús González: parranda premium, formato semicompleto VIP o gala. Cotización personalizada según tu evento. Escríbeme por WhatsApp.',
  alternates: { canonical: '/contrataciones' },
  openGraph: {
    title: 'Contratar Show de Vallenato | Jesús González',
    description:
      'Tres formatos de show de vallenato en vivo para bodas, eventos corporativos y galas en Colombia. Cotización personalizada por WhatsApp.',
    url: '/contrataciones',
    images: ['/Imagenes/Jesus-Gonzalez-Vallenato-Exclusivo.jpg'],
  },
};

// Paquetes reales (espejo de src/componentes/contrataciones/Servicios.tsx).
const PAQUETES = [
  {
    nombre: 'Parranda Vallenata Premium',
    descripcion:
      '6 músicos liderados por Jesús González, sonido incluido. Para reuniones privadas y celebraciones íntimas con vallenato de cerca.',
  },
  {
    nombre: 'Show Semicompleto VIP',
    descripcion:
      '8 músicos más asistente. El formato más solicitado para bodas y eventos corporativos, con puesta en escena ampliada.',
  },
  {
    nombre: 'Show Completo de Gala',
    descripcion:
      'Producción ampliada a medida según venue y logística. Puesta en escena completa para galas y eventos masivos.',
  },
];

// Testimonios reales (espejo de src/componentes/contrataciones/Testimonios.tsx).
const TESTIMONIOS = [
  {
    nombre: 'María Elena Rodríguez',
    calificacion: 5,
    comentario:
      'Jesús González hizo de nuestra boda algo mágico. Su acordeón nos transportó a la Costa Caribe. Los invitados no paraban de bailar. ¡100% recomendado!',
  },
  {
    nombre: 'Carlos Andrés Mendoza',
    calificacion: 5,
    comentario:
      'Lo contratamos para nuestro evento de empresa y fue espectacular. Profesionalismo total, llegó puntual y el show superó nuestras expectativas.',
  },
  {
    nombre: 'Ana Sofía Jiménez',
    calificacion: 5,
    comentario:
      'Mi papá es fanático del vallenato y Jesús le hizo el día más especial. Tocó todas sus canciones favoritas. ¡Gracias por hacer inolvidable su cumpleaños!',
  },
  {
    nombre: 'Roberto Silva',
    calificacion: 5,
    comentario:
      'Excelente servicio y calidad musical. Jesús González es un verdadero maestro del acordeón. Nuestros clientes quedaron encantados con la presentación.',
  },
];

const FAQ: QA[] = [
  {
    pregunta: '¿Cuánto cuesta contratar a Jesús González?',
    respuesta:
      'No manejo precios de catálogo: cada propuesta se arma según fecha, ciudad, venue, formato y logística. Escríbeme por WhatsApp con esos datos y te paso una cotización personalizada el mismo día.',
  },
  {
    pregunta: '¿Cómo cotizo mi evento?',
    respuesta:
      'Por WhatsApp. Cuéntame la fecha, la ciudad, el tipo de evento y un número aproximado de invitados, y te devuelvo una propuesta a tu medida sin compromiso.',
  },
  {
    pregunta: '¿En qué ciudades de Colombia tienes cobertura?',
    respuesta:
      'Trabajo principalmente en Bogotá, Medellín, Cali, Barranquilla y Cartagena, además de sus áreas y fincas de eventos cercanas. Para otras ciudades coordinamos el desplazamiento dentro de la cotización.',
  },
  {
    pregunta: '¿Qué incluye cada formato de show?',
    respuesta:
      'La Parranda Premium son 6 músicos con sonido incluido para eventos íntimos. El Show Semicompleto VIP son 8 músicos más asistente, ideal para bodas y corporativos. El Show Completo de Gala es producción ampliada a medida para galas y eventos masivos.',
  },
  {
    pregunta: '¿Con cuánta anticipación debo reservar?',
    respuesta:
      'Lo ideal es apartar con 2 a 4 meses, especialmente para fines de semana y temporada alta de noviembre y diciembre. Entre semana suele haber más disponibilidad.',
  },
  {
    pregunta: '¿Cómo se aparta la fecha? ¿Piden abono?',
    respuesta:
      'La fecha se asegura con un abono y el saldo se cubre según lo acordado en la propuesta. Los detalles del pago los confirmamos por WhatsApp al cerrar la contratación.',
  },
  {
    pregunta: '¿Puedo elegir el repertorio?',
    respuesta:
      'Sí. El repertorio se cura contigo: clásicos del vallenato, momentos románticos y parranda fuerte. Si quieres una canción especial para un momento puntual, la preparamos con tiempo.',
  },
  {
    pregunta: '¿Llevas equipo de sonido?',
    respuesta:
      'Sí, puedo llevar sonido propio dimensionado al venue cuando el lugar no lo incluye. Lo definimos en la cotización según el espacio y el número de invitados.',
  },
];

export default function Page() {
  return (
    <>
      <JsonLd id="ld-offercatalog" data={offerCatalogSchema(PAQUETES)} />
      <JsonLd id="ld-reviews" data={reviewsSchema(TESTIMONIOS)} />
      <JsonLd id="ld-faq" data={faqSchema(FAQ, 'contrataciones')} />
      <Contrataciones />
    </>
  );
}
