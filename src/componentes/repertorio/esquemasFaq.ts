// Constructor del JSON-LD FAQPage para /preguntas-frecuentes.
// Reutiliza la convención de los esquemas del sitio (schema.org).
import { config } from '../../utilidades/configuracion';

const URL = config.siteUrl; // https://jesusgonzalez.com.co

export interface PreguntaRespuesta {
  pregunta: string;
  respuesta: string;
}

/**
 * FAQPage a partir del listado de preguntas/respuestas de la página.
 * El texto va plano (sin HTML) para cumplir las guías de rich results.
 */
export function faqPageSchema(items: PreguntaRespuesta[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${URL}/preguntas-frecuentes#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.pregunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.respuesta,
      },
    })),
  };
}
