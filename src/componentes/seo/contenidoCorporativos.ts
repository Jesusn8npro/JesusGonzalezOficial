import { IMG, type Contenido } from './landingBase';

// Contenido localizado para "vallenato-para-eventos-corporativos" × 5 ciudades.
// clave = `${servicio}|${ciudad}`
export const CONTENIDO_CORPORATIVOS: Record<string, Contenido> = {
  'vallenato-para-eventos-corporativos|bogota': {
    titulo: 'Vallenato para Eventos Corporativos en Bogotá | J. González',
    descripcion:
      'Show de vallenato para eventos corporativos en Bogotá: fin de año, lanzamientos y activaciones. Profesionalismo y puntualidad. Cotiza por WhatsApp.',
    h1: 'Vallenato para eventos corporativos en Bogotá',
    kicker: 'Eventos de empresa · Bogotá',
    intro: [
      'En Bogotá las empresas hacen eventos serios: fines de año en hoteles del norte, lanzamientos en centros de convenciones, cenas de directivos. Lo que buscan no es solo música, es algo que rompa la formalidad sin perder el nivel. El vallenato en vivo logra exactamente ese giro.',
      'He tocado para empresas en hoteles de la 100, en el centro internacional y en clubes empresariales. Lo que más valoran las áreas de eventos en Bogotá es lo previsible: llegada puntual, requerimientos técnicos claros por escrito, factura y un show que arranca cuando tiene que arrancar.',
      'Si organizas el evento de fin de año o un lanzamiento de tu compañía en Bogotá, escríbeme y armamos un formato que encaje en tu agenda y tu presupuesto.',
    ],
    imagen: IMG.concierto,
    videoId: 'oPoqVKg30Cg',
    faq: [
      {
        pregunta: '¿Manejan facturación y requerimientos para empresas?',
        respuesta:
          'Sí. Entrego requerimientos técnicos por escrito y la documentación que el área administrativa necesite para la contratación.',
      },
      {
        pregunta: '¿Cuál es el formato ideal para un fin de año corporativo en Bogotá?',
        respuesta:
          'Depende del número de asistentes y el venue; lo habitual es un show de 1 a 2 horas con sonido propio si el salón no lo incluye.',
      },
      {
        pregunta: '¿Garantizan puntualidad y prueba de sonido?',
        respuesta:
          'Sí. Coordinamos hora de montaje y prueba de sonido previa para que el show inicie exacto en la agenda del evento.',
      },
      {
        pregunta: '¿Cubren hoteles y centros de convenciones de Bogotá?',
        respuesta:
          'Sí, trabajo regularmente en hoteles del norte, el centro internacional y centros de convenciones de la ciudad.',
      },
      {
        pregunta: '¿Con cuánto tiempo reservar el evento de empresa?',
        respuesta:
          'Octubre a diciembre se satura por los fines de año; reserva con 1 a 3 meses para asegurar fecha.',
      },
      {
        pregunta: '¿Cómo cotizo el evento corporativo?',
        respuesta:
          'Escríbeme por WhatsApp con fecha, lugar y número de asistentes y te envío la propuesta el mismo día.',
      },
    ],
  },
  'vallenato-para-eventos-corporativos|medellin': {
    titulo: 'Vallenato Corporativo en Medellín | Jesús González',
    descripcion:
      'Vallenato en vivo para eventos corporativos en Medellín: convenciones, fines de año y activaciones de marca. Show profesional. Cotiza por WhatsApp.',
    h1: 'Vallenato para eventos corporativos en Medellín',
    kicker: 'Eventos de empresa · Medellín',
    intro: [
      'Medellín se mueve con eventos de empresa todo el año: convenciones en Plaza Mayor, activaciones de marca, integraciones en fincas del Oriente. El público corporativo paisa es energético y participativo, así que un show de vallenato en vivo aquí no se queda en el escenario: se vuelve parte de la celebración.',
      'He tocado para compañías en centros de convenciones de la ciudad y en sedes empresariales de El Poblado. Lo que valoran los equipos de eventos en Medellín es un show que sube la temperatura de la reunión sin descontrolarla, con tiempos claros y montaje profesional.',
      'Si tu empresa organiza una convención, una integración o el cierre de año en Medellín o el Oriente, hablemos del formato que mejor encaje.',
    ],
    imagen: IMG.exclusivo,
    videoId: 'vgDABDveFn0',
    faq: [
      {
        pregunta: '¿Trabajan en Plaza Mayor y centros de convenciones de Medellín?',
        respuesta:
          'Sí. Trabajo regularmente en Plaza Mayor, hoteles de El Poblado y sedes empresariales de la ciudad.',
      },
      {
        pregunta: '¿Sirve para integraciones en fincas del Oriente?',
        respuesta:
          'Sí, es muy común. Cubro fincas de Llanogrande y Rionegro y llevo sonido si la sede no lo incluye.',
      },
      {
        pregunta: '¿Cómo manejan los tiempos del programa corporativo?',
        respuesta:
          'Coordinamos montaje, prueba de sonido y hora exacta de show para encajar en la agenda del evento.',
      },
      {
        pregunta: '¿Entregan documentación para contratación empresarial?',
        respuesta:
          'Sí. Entrego requerimientos técnicos y la documentación que solicite el área administrativa.',
      },
      {
        pregunta: '¿Cuándo reservar?',
        respuesta:
          'Para temporada de convenciones y fines de año en Medellín, aparta con 1 a 3 meses de anticipación.',
      },
      {
        pregunta: '¿Cómo pido cotización?',
        respuesta:
          'Por WhatsApp con fecha, lugar y número de asistentes; te respondo con la propuesta el mismo día.',
      },
    ],
  },
  'vallenato-para-eventos-corporativos|cali': {
    titulo: 'Vallenato Corporativo en Cali | Jesús González',
    descripcion:
      'Vallenato en vivo para eventos corporativos en Cali y el Valle: convenciones, cenas de empresa y activaciones. Show de nivel. Cotiza por WhatsApp.',
    h1: 'Vallenato para eventos corporativos en Cali',
    kicker: 'Eventos de empresa · Cali',
    intro: [
      'En Cali el evento de empresa tiene calle: aquí la gente espera bailar. Por eso el vallenato en vivo funciona tan bien en convenciones del Valle, cenas de cierre y activaciones de marca: rompe el protocolo y deja a la gente lista para la fiesta caleña que viene después.',
      'He tocado para compañías en centros de eventos del sur de Cali y en haciendas de la región. El equipo de eventos local suele valorar dos cosas: que el show prenda al público rápido y que la logística —montaje, sonido, tiempos— esté amarrada sin que ellos tengan que estar encima.',
      'Si tu empresa organiza una convención o un cierre de año en Cali, Yumbo o Palmira, escríbeme y diseñamos el formato adecuado.',
    ],
    imagen: IMG.concierto,
    videoId: 'oPoqVKg30Cg',
    faq: [
      {
        pregunta: '¿El vallenato encaja en un evento corporativo caleño?',
        respuesta:
          'Muy bien. Funciona como el momento que rompe el protocolo y deja al público listo para la fiesta.',
      },
      {
        pregunta: '¿Cubren Yumbo, Palmira y haciendas del Valle?',
        respuesta:
          'Sí. Cubro Cali y la región: Yumbo, Palmira y haciendas de eventos del Valle.',
      },
      {
        pregunta: '¿Llevan sonido a sedes sin equipo?',
        respuesta:
          'Sí, dimensiono el equipo al venue y al número de asistentes si el lugar no lo incluye.',
      },
      {
        pregunta: '¿Entregan documentación de contratación para empresas?',
        respuesta:
          'Sí. Entrego requerimientos técnicos y los documentos que necesite el área administrativa.',
      },
      {
        pregunta: '¿Con cuánta anticipación reservar?',
        respuesta:
          'Para temporada de cierres de año, aparta con 1 a 3 meses para asegurar tu fecha.',
      },
      {
        pregunta: '¿Cómo cotizo?',
        respuesta:
          'Escríbeme por WhatsApp con fecha, lugar y asistentes y te paso la propuesta personalizada.',
      },
    ],
  },
  'vallenato-para-eventos-corporativos|barranquilla': {
    titulo: 'Vallenato Corporativo en Barranquilla | J. González',
    descripcion:
      'Vallenato en vivo para eventos corporativos en Barranquilla: el ADN musical de la Costa para tu evento de empresa. Show de nivel. Cotiza por WhatsApp.',
    h1: 'Vallenato para eventos corporativos en Barranquilla',
    kicker: 'Eventos de empresa · Barranquilla',
    intro: [
      'En Barranquilla el vallenato es identidad. Para una empresa de la Costa, llevar un acordeonista de verdad a su evento no es exotismo: es hablar el idioma de su gente. Eso convierte una convención o un cierre de año en algo que el equipo siente propio.',
      'He tocado para compañías en hoteles y clubes de Barranquilla. Aquí el público corporativo conoce de música, así que el show tiene que estar a la altura: repertorio sólido, banda afinada y la energía costeña que se espera de un evento en esta ciudad.',
      'Si tu empresa organiza un evento en Barranquilla y quieres algo que tu gente sienta como suyo, hablemos del formato y la fecha.',
    ],
    imagen: IMG.poncho,
    videoId: 'Ll5rSyCDM78',
    faq: [
      {
        pregunta: '¿Por qué vallenato para una empresa en Barranquilla?',
        respuesta:
          'Porque es la identidad musical de la Costa; el equipo lo siente propio y eleva la conexión del evento.',
      },
      {
        pregunta: '¿Trabajan con hoteles y clubes de la ciudad?',
        respuesta:
          'Sí, trabajo regularmente en hoteles y clubes empresariales de Barranquilla y su área metropolitana.',
      },
      {
        pregunta: '¿El público corporativo costeño no es muy exigente?',
        respuesta:
          'Lo es, y por eso llevo repertorio sólido y banda de nivel a la altura de un público que conoce de vallenato.',
      },
      {
        pregunta: '¿Entregan requerimientos y documentación?',
        respuesta:
          'Sí. Entrego requerimientos técnicos por escrito y la documentación que pida el área administrativa.',
      },
      {
        pregunta: '¿Cuándo reservar?',
        respuesta:
          'Para temporada de cierres de año reserva con 1 a 3 meses de anticipación.',
      },
      {
        pregunta: '¿Cómo pido la propuesta?',
        respuesta:
          'Por WhatsApp con fecha, lugar y número de asistentes; respondo el mismo día.',
      },
    ],
  },
  'vallenato-para-eventos-corporativos|cartagena': {
    titulo: 'Vallenato Corporativo en Cartagena | Jesús González',
    descripcion:
      'Vallenato en vivo para eventos corporativos e incentivos en Cartagena: convenciones y cenas frente al mar. Show de nivel. Cotiza por WhatsApp.',
    h1: 'Vallenato para eventos corporativos en Cartagena',
    kicker: 'Eventos e incentivos · Cartagena',
    intro: [
      'Cartagena es la sede favorita de Colombia para convenciones, viajes de incentivo y eventos de empresa con invitados de afuera. Cuando una compañía trae a su equipo o a sus clientes a la ciudad amurallada, busca que se lleven una experiencia colombiana de verdad. El vallenato en una cena frente al mar es esa experiencia.',
      'He tocado para empresas en hoteles de Bocagrande y en casas del Centro Histórico para eventos privados de compañías. El componente internacional cambia el enfoque: el show es también una postal de Colombia para el invitado extranjero, coordinada con la agencia de eventos o el DMC.',
      'Si tu empresa organiza una convención o un incentivo en Cartagena, hablemos con tiempo: la ciudad se llena en temporada de eventos corporativos.',
    ],
    imagen: IMG.exclusivo,
    videoId: 'vgDABDveFn0',
    faq: [
      {
        pregunta: '¿Trabajan con agencias de eventos y DMC en Cartagena?',
        respuesta:
          'Sí, es habitual en eventos corporativos e incentivos. Me coordino con la agencia o el DMC y la logística del venue.',
      },
      {
        pregunta: '¿Sirve para públicos corporativos internacionales?',
        respuesta:
          'Sí. Para el invitado extranjero el show es la experiencia colombiana que recuerda del viaje.',
      },
      {
        pregunta: '¿Tocan en hoteles de Bocagrande y casas del Centro?',
        respuesta:
          'Sí: hoteles de Bocagrande, casas del Centro Histórico y venues para eventos privados de empresa.',
      },
      {
        pregunta: '¿Entregan documentación para contratación corporativa?',
        respuesta:
          'Sí. Entrego requerimientos técnicos y la documentación que requiera el área administrativa o la agencia.',
      },
      {
        pregunta: '¿Con cuánta anticipación reservar?',
        respuesta:
          'En temporada de convenciones Cartagena se llena; reserva con 2 a 4 meses.',
      },
      {
        pregunta: '¿Cómo cotizo?',
        respuesta:
          'Escríbeme por WhatsApp con fecha, venue y número de asistentes y te envío la propuesta a la medida.',
      },
    ],
  },
};
