import { IMG, type Contenido } from './landingBase';

// Contenido localizado para "grupo-vallenato-profesional" × 5 ciudades.
// Posicionamiento premium: dirección artística, banda de 6–9 músicos,
// trayectoria con artistas de talla nacional. NO "un grupito más".
// clave = `${servicio}|${ciudad}`
export const CONTENIDO_GRUPO_PROFESIONAL: Record<string, Contenido> = {
  'grupo-vallenato-profesional|bogota': {
    titulo: 'Grupo Vallenato Profesional en Bogotá | Jesús González',
    descripcion:
      'Grupo vallenato profesional en Bogotá: banda de 6 a 9 músicos, dirección artística y producción de nivel. No un grupito más. Cotiza por WhatsApp.',
    h1: 'Grupo vallenato profesional en Bogotá',
    kicker: 'Banda profesional · Bogotá',
    intro: [
      'En Bogotá hay muchos "grupos de vallenato". La diferencia entre uno cualquiera y un grupo profesional se nota en los primeros treinta segundos: afinación, empaste, un acordeón que lidera y una banda que respira junta. Lo que llevo a un evento bogotano es eso: una agrupación de 6 a 9 músicos con dirección artística, no tres personas improvisando con pistas.',
      'Cada presentación se monta como producción: repertorio curado para tu público, sonido propio dimensionado al venue —salón de la zona norte, hotel del centro internacional o finca de la sabana—, prueba de sonido y un cronograma cerrado con el organizador. La trayectoria respalda el estándar: escenario y estudio con Poncho Zuleta, Jorge Celedón y Felipe Peláez no se improvisan.',
      'Si tu evento en Bogotá o la sabana —Chía, Cota, La Calera— exige una banda que esté a la altura y no "un grupito más", hablemos de la fecha antes de que se cierre la agenda.',
    ],
    imagen: IMG.exclusivo,
    videoId: 'vgDABDveFn0',
    faq: [
      {
        pregunta: '¿Qué hace que sea un grupo profesional y no uno más?',
        respuesta:
          'Banda real de 6 a 9 músicos con dirección artística, repertorio curado, sonido propio y prueba de sonido. Nada de pistas ni formato improvisado.',
      },
      {
        pregunta: '¿Cuántos músicos integran la banda en Bogotá?',
        respuesta:
          'Entre 6 y 9 según el formato y el venue: acordeón, voz, caja, guacharaca, bajo y refuerzos. Lo dimensionamos a tu evento.',
      },
      {
        pregunta: '¿Llevan producción y sonido propios?',
        respuesta:
          'Sí. Sonido propio dimensionado al salón o finca, prueba de sonido previa y cronograma cerrado con el organizador o wedding planner.',
      },
      {
        pregunta: '¿Tocan en la sabana de Bogotá?',
        respuesta:
          'Sí: Bogotá y toda la sabana —Chía, Cota, La Calera, Sopó— y fincas de eventos. El desplazamiento se coordina en la cotización.',
      },
      {
        pregunta: '¿Hay contrato y garantía de cumplimiento?',
        respuesta:
          'Siempre. Contrato con repertorio, horarios y condiciones claras; el profesionalismo también es responder por lo acordado.',
      },
      {
        pregunta: '¿Con cuánta anticipación reservo en Bogotá?',
        respuesta:
          'Las fechas de fin de año se cierran rápido. Lo ideal es apartar con 2 a 4 meses; escríbeme por WhatsApp y reviso disponibilidad.',
      },
    ],
  },
  'grupo-vallenato-profesional|medellin': {
    titulo: 'Grupo Vallenato Profesional en Medellín | Jesús González',
    descripcion:
      'Grupo vallenato profesional en Medellín y el Oriente: banda de 6 a 9 músicos con dirección artística y producción seria. Cotiza por WhatsApp.',
    h1: 'Grupo vallenato profesional en Medellín',
    kicker: 'Banda profesional · Medellín',
    intro: [
      'El público paisa no perdona lo flojo: si la banda no suena, se sienta. Por eso en Medellín no llevo un grupito de relleno, llevo una agrupación profesional de 6 a 9 músicos con dirección artística, capaz de enganchar a un público que no necesariamente creció con vallenato y terminar la noche con todos cantando.',
      'En haciendas de Llanogrande, salones de El Poblado o fincas del Oriente —Rionegro, El Retiro, La Ceja— el trabajo es el mismo: repertorio pensado para tu gente, sonido propio dimensionado al espacio, prueba de sonido y empalmes coordinados con el DJ. Esa solidez viene de años en tarima junto a Poncho Zuleta, Jorge Celedón y Felipe Peláez.',
      'Si tu evento en Medellín o el Oriente antioqueño merece una banda que esté a la altura y no "un grupito más", cuéntame la fecha y armamos la propuesta.',
    ],
    imagen: IMG.concierto,
    videoId: 'vgDABDveFn0',
    faq: [
      {
        pregunta: '¿Funciona una banda profesional con público paisa?',
        respuesta:
          'Muy bien. El repertorio se cura para enganchar desde la primera canción aunque el público no sea costeño; la banda sólida hace el resto.',
      },
      {
        pregunta: '¿Cuántos músicos llegan a Medellín?',
        respuesta:
          'Entre 6 y 9 según formato y venue, con dirección artística. No es formato reducido ni con pistas.',
      },
      {
        pregunta: '¿Cubren fincas de Llanogrande y el Oriente?',
        respuesta:
          'Sí: Medellín y todo el Oriente —Llanogrande, Rionegro, El Retiro, La Ceja, Guarne—. El desplazamiento se coordina en la cotización.',
      },
      {
        pregunta: '¿Llevan sonido a fincas sin equipo?',
        respuesta:
          'Sí. Muchas fincas del Oriente no tienen sonido fijo; llevamos equipo propio dimensionado al espacio y al número de invitados.',
      },
      {
        pregunta: '¿Pueden alternar con el DJ?',
        respuesta:
          'Sí. Coordinamos los empalmes en vivo y DJ para que la energía no baje; eso también es producción profesional.',
      },
      {
        pregunta: '¿Hay contrato?',
        respuesta:
          'Siempre, con repertorio, horarios y condiciones. Responder por lo acordado es parte de ser profesional. Escríbeme por WhatsApp.',
      },
    ],
  },
  'grupo-vallenato-profesional|cali': {
    titulo: 'Grupo Vallenato Profesional en Cali | Jesús González',
    descripcion:
      'Grupo vallenato profesional en Cali y el Valle: banda de 6 a 9 músicos, dirección artística y sonido propio. No un grupito más. Cotiza por WhatsApp.',
    h1: 'Grupo vallenato profesional en Cali',
    kicker: 'Banda profesional · Cali',
    intro: [
      'En Cali manda la salsa, así que el vallenato tiene que entrar fuerte o no entra. Por eso a un evento caleño no llevo un grupito que llena tiempo: llevo una banda profesional de 6 a 9 músicos con dirección artística, que abre, calienta y entrega la noche en su punto más alto, justo antes de que la pista pida salsa.',
      'En haciendas de la vía a Jamundí, clubes del sur de Cali o fincas de Palmira, el estándar es claro: repertorio curado, sonido propio para venues al aire libre tan comunes en el Valle, prueba de sonido y empalmes con la orquesta o el DJ. Ese oficio se forjó en tarima con Poncho Zuleta, Jorge Celedón y Felipe Peláez.',
      'Si tu evento en Cali, Jamundí o Palmira necesita una agrupación seria y no "un grupito más", hablemos de la fecha y de cómo encajarlo en una noche donde después todos quieren salsa.',
    ],
    imagen: IMG.exclusivo,
    videoId: 'Ll5rSyCDM78',
    faq: [
      {
        pregunta: '¿El vallenato funciona en una noche caleña de salsa?',
        respuesta:
          'Sí, como el momento más emotivo y parrandero. Una banda profesional lo ubica antes de la salsa y deja la pista encendida.',
      },
      {
        pregunta: '¿Cuántos músicos integran el grupo?',
        respuesta:
          'Entre 6 y 9 con dirección artística según el formato y el venue. No es trío con pistas ni formato improvisado.',
      },
      {
        pregunta: '¿Cubren Jamundí, Palmira y haciendas del Valle?',
        respuesta:
          'Sí: Cali y el área —Jamundí, Palmira, Yumbo— y haciendas de eventos de la región. El desplazamiento va en la cotización.',
      },
      {
        pregunta: '¿Llevan sonido para eventos al aire libre?',
        respuesta:
          'Sí. Muchas haciendas del Valle son abiertas; llevamos equipo propio dimensionado al lugar y a los invitados.',
      },
      {
        pregunta: '¿Pueden alternar con la orquesta de salsa?',
        respuesta:
          'Claro. Coordinamos empalmes con la orquesta o el DJ para que la transición sea natural; eso es producción profesional.',
      },
      {
        pregunta: '¿Hay contrato y garantía?',
        respuesta:
          'Siempre, con repertorio, horarios y condiciones. Escríbeme por WhatsApp con fecha y lugar y reviso disponibilidad.',
      },
    ],
  },
  'grupo-vallenato-profesional|barranquilla': {
    titulo: 'Grupo Vallenato Profesional en Barranquilla | J. González',
    descripcion:
      'Grupo vallenato profesional en Barranquilla: banda de 6 a 9 músicos a la altura de un público que sabe. No un grupito más. Cotiza por WhatsApp.',
    h1: 'Grupo vallenato profesional en Barranquilla',
    kicker: 'Banda profesional · Barranquilla',
    intro: [
      'En Barranquilla el público sabe de vallenato: canta los versos, reconoce al que toca de verdad y nota al instante cuando una banda es de relleno. Por eso aquí no tiene cabida "un grupito más": llevo una agrupación profesional de 6 a 9 músicos con dirección artística, capaz de estar a la altura de una ciudad que conoce a los grandes.',
      'En clubes y salones de la ciudad o fincas de la vía a Puerto Colombia, el estándar es máximo: repertorio profundo de clásicos y parranda fuerte, empaste real, sonido propio y prueba de sonido. En la Costa la banda es protagonista de la noche, no un número, y eso exige el oficio que se gana en tarima con Poncho Zuleta, Jorge Celedón y Felipe Peláez.',
      'Si tu evento en Barranquilla, Puerto Colombia o Sabanilla exige una banda seria frente a un público exigente, hablemos: aquí la vara está alta y me gusta así.',
    ],
    imagen: IMG.poncho,
    videoId: 'Ll5rSyCDM78',
    faq: [
      {
        pregunta: '¿Por qué un grupo profesional y no uno cualquiera aquí?',
        respuesta:
          'Porque el público barranquillero sabe y lo nota. Banda de 6 a 9 músicos, repertorio profundo y empaste real; nada de relleno.',
      },
      {
        pregunta: '¿Cuántos músicos integran la banda?',
        respuesta:
          'Entre 6 y 9 con dirección artística según formato y venue. Formato profesional, no reducido ni con pistas.',
      },
      {
        pregunta: '¿Qué repertorio manejan para un público costeño?',
        respuesta:
          'Clásicos del vallenato, romántico para los momentos especiales y parranda fuerte; lo curamos según tu evento.',
      },
      {
        pregunta: '¿Cubren Puerto Colombia y Sabanilla?',
        respuesta:
          'Sí: Barranquilla y el área metropolitana —Puerto Colombia, Sabanilla, Soledad— y fincas de eventos cercanas.',
      },
      {
        pregunta: '¿Llevan sonido y producción propios?',
        respuesta:
          'Sí: sonido dimensionado al venue, prueba de sonido y cronograma cerrado con el organizador. Producción seria.',
      },
      {
        pregunta: '¿Hay contrato?',
        respuesta:
          'Siempre, con repertorio y condiciones claras. Escríbeme por WhatsApp con fecha y lugar y te paso la propuesta.',
      },
    ],
  },
  'grupo-vallenato-profesional|cartagena': {
    titulo: 'Grupo Vallenato Profesional en Cartagena | J. González',
    descripcion:
      'Grupo vallenato profesional en Cartagena para bodas destino y eventos de nivel: banda de 6 a 9 músicos y producción seria. Cotiza por WhatsApp.',
    h1: 'Grupo vallenato profesional en Cartagena',
    kicker: 'Banda profesional · Cartagena',
    intro: [
      'Cartagena es la capital de los eventos destino: bodas y celebraciones donde llegan invitados de afuera y todo tiene que salir impecable. Ahí no cabe "un grupito más"; cabe una banda profesional de 6 a 9 músicos con dirección artística, porque es la postal sonora con la que el invitado recordará Colombia.',
      'En casas coloniales del Centro Histórico, hoteles de Bocagrande o eventos en islas, el trabajo se monta como producción: repertorio curado, sonido propio, prueba de sonido y coordinación con el wedding planner y la logística de venues patrimoniales, que tienen reglas de horario y ruido. Esa seriedad viene de años junto a Poncho Zuleta, Jorge Celedón y Felipe Peláez.',
      'Si tu evento en Cartagena exige una agrupación a la altura y no "un grupito más", hablemos con tiempo: las fechas buenas en la ciudad amurallada se reservan con muchos meses.',
    ],
    imagen: IMG.concierto,
    videoId: 'oPoqVKg30Cg',
    faq: [
      {
        pregunta: '¿Trabajan eventos destino con wedding planner?',
        respuesta:
          'Sí, es habitual en Cartagena. Nos coordinamos con tu planner y con la logística del venue, incluidos los patrimoniales.',
      },
      {
        pregunta: '¿Cuántos músicos integran el grupo?',
        respuesta:
          'Entre 6 y 9 con dirección artística según formato y venue. Banda profesional, no formato reducido ni con pistas.',
      },
      {
        pregunta: '¿Tocan en el Centro Histórico e islas?',
        respuesta:
          'Sí: Centro Histórico, Bocagrande, Manga y eventos en islas como Barú o el archipiélago, coordinando el transporte.',
      },
      {
        pregunta: '¿Cómo manejan las restricciones de ruido patrimoniales?',
        respuesta:
          'Ajustamos formato y horario a las normas del venue patrimonial; se planea desde la cotización para evitar sorpresas.',
      },
      {
        pregunta: '¿Llevan producción y sonido propios?',
        respuesta:
          'Sí: sonido dimensionado al venue, prueba de sonido y cronograma cerrado con el organizador. Producción de nivel.',
      },
      {
        pregunta: '¿Con cuánta anticipación reservo?',
        respuesta:
          'Lo ideal es apartar con 3 a 6 meses; la temporada alta se llena rápido. Escríbeme por WhatsApp y reviso disponibilidad.',
      },
    ],
  },
};
