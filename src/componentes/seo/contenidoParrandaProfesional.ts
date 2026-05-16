import { IMG, type Contenido } from './landingBase';

// Contenido localizado para "parranda-vallenata-profesional" × 5 ciudades.
// Posicionamiento premium: parranda íntima pero con músicos de verdad,
// dirección artística y oficio de tarima. NO "un grupito más".
// clave = `${servicio}|${ciudad}`
export const CONTENIDO_PARRANDA_PROFESIONAL: Record<string, Contenido> = {
  'parranda-vallenata-profesional|bogota': {
    titulo: 'Parranda Vallenata Profesional en Bogotá | J. González',
    descripcion:
      'Parranda vallenata profesional en Bogotá: íntima pero con músicos de verdad y dirección artística. No un grupito más. Cotiza por WhatsApp.',
    h1: 'Parranda vallenata profesional en Bogotá',
    kicker: 'Parranda profesional · Bogotá',
    intro: [
      'Mucha gente confunde "parranda" con cualquiera que llegue con un acordeón a tocar de oído. Una parranda profesional es otra cosa: cercanía, sí, pero con músicos de verdad, repertorio armado y dirección artística. En Bogotá esa diferencia se siente apenas empieza la primera canción en el patio o la sala.',
      'He hecho parrandas en apartamentos del norte, casas del centro y fincas de Chía y La Calera. Lo íntimo no riñe con lo profesional: a un metro de la gente igual hay empaste, afinación y oficio para leer la reunión, parar, contar la historia de la canción y dejar que pidas la siguiente. Ese pulso se gana en tarima junto a Poncho Zuleta, Jorge Celedón y Felipe Peláez.',
      'Si quieres una parranda en Bogotá o la sabana que sea cercana pero a la altura —y no "un grupito más" tocando de relleno—, escríbeme y la armamos a tu medida.',
    ],
    imagen: IMG.parranda,
    videoId: 'Ll5rSyCDM78',
    faq: [
      {
        pregunta: '¿Qué diferencia una parranda profesional de una cualquiera?',
        respuesta:
          'Misma cercanía, pero con músicos de verdad, repertorio armado y dirección artística. No es alguien tocando de oído de relleno.',
      },
      {
        pregunta: '¿Sirve para espacios pequeños en Bogotá?',
        respuesta:
          'Sí, está pensada para eso: apartamentos, salas y patios. El formato se ajusta al espacio sin perder el nivel.',
      },
      {
        pregunta: '¿Cuántos músicos llegan a una parranda?',
        respuesta:
          'Formato íntimo liderado por mí con músicos según el espacio; pocos, pero profesionales. Lo definimos según tu reunión.',
      },
      {
        pregunta: '¿Cubren la sabana (Chía, La Calera)?',
        respuesta:
          'Sí: Bogotá y la sabana —Chía, Cota, La Calera— y fincas cercanas. El desplazamiento va en la cotización.',
      },
      {
        pregunta: '¿Puedo pedir canciones específicas?',
        respuesta:
          'Totalmente. La gracia de la parranda es que pidas; preparamos el repertorio que más quieras escuchar.',
      },
      {
        pregunta: '¿Hay contrato?',
        respuesta:
          'Sí, también para parrandas: fecha, repertorio y condiciones claras. Escríbeme por WhatsApp y reviso disponibilidad.',
      },
    ],
  },
  'parranda-vallenata-profesional|medellin': {
    titulo: 'Parranda Vallenata Profesional en Medellín | J. González',
    descripcion:
      'Parranda vallenata profesional en Medellín y el Oriente: cercana pero con músicos serios y dirección artística. Cotiza por WhatsApp.',
    h1: 'Parranda vallenata profesional en Medellín',
    kicker: 'Parranda profesional · Medellín',
    intro: [
      'En Medellín la parranda vallenata suele ser un descubrimiento: muchos paisas la viven de cerca por primera vez. Y precisamente porque es la primera vez, no puede ser con "un grupito más" tocando flojo: tiene que ser una parranda profesional, íntima pero con músicos de verdad y dirección artística, para que el enganche sea inmediato.',
      'He hecho parrandas en fincas del Oriente —Llanogrande, Rionegro, El Retiro— y casas del sur del Valle de Aburrá. Lo cercano no quita lo serio: a un metro de la gente igual hay empaste y oficio para explicar de dónde viene cada canción, hacer cantar a quien no es costeño y dejar que la reunión fluya sin protocolo. Ese pulso se forjó en tarima con Poncho Zuleta, Jorge Celedón y Felipe Peláez.',
      'Si quieres una parranda en Medellín o el Oriente antioqueño cercana pero a la altura, hablemos y la dejamos lista.',
    ],
    imagen: IMG.parranda,
    videoId: 'Ll5rSyCDM78',
    faq: [
      {
        pregunta: '¿Por qué profesional si la parranda es íntima?',
        respuesta:
          'Porque íntimo no es sinónimo de flojo. Pocos músicos, pero de verdad, con repertorio armado y dirección artística.',
      },
      {
        pregunta: '¿Funciona si mis invitados no son costeños?',
        respuesta:
          'Muy bien. La cercanía más el oficio enganchan incluso a quien vive el vallenato de patio por primera vez.',
      },
      {
        pregunta: '¿Cubren fincas del Oriente antioqueño?',
        respuesta:
          'Sí: Medellín y el Oriente —Llanogrande, Rionegro, El Retiro— y casas del Valle de Aburrá. Desplazamiento en la cotización.',
      },
      {
        pregunta: '¿Cuántos músicos llegan?',
        respuesta:
          'Formato íntimo liderado por mí, ajustado al espacio y la reunión; pocos, pero profesionales.',
      },
      {
        pregunta: '¿Necesito sonido en una finca?',
        respuesta:
          'Depende del tamaño: para espacios íntimos a veces no hace falta; si es grande llevamos equipo adecuado.',
      },
      {
        pregunta: '¿Hay contrato?',
        respuesta:
          'Sí, con fecha, repertorio y condiciones. Escríbeme por WhatsApp con lugar y número de invitados.',
      },
    ],
  },
  'parranda-vallenata-profesional|cali': {
    titulo: 'Parranda Vallenata Profesional en Cali | J. González',
    descripcion:
      'Parranda vallenata profesional en Cali y el Valle: cercana pero con músicos serios y oficio de tarima. No un grupito más. Cotiza por WhatsApp.',
    h1: 'Parranda vallenata profesional en Cali',
    kicker: 'Parranda profesional · Cali',
    intro: [
      'Cali sabe de rumba, y una parranda vallenata le agrega un sabor distinto a la reunión: cantar a grito herido entre amigos. Pero para que ese momento funcione no sirve "un grupito más" tocando de oído; sirve una parranda profesional, íntima pero con músicos de verdad y dirección artística, que sostenga la energía antes o después de la salsa.',
      'He hecho parrandas en casas del sur de Cali y fincas de la vía a Jamundí. La cercanía no está peleada con el nivel: el acordeón cerca, las canciones que todos saben, empaste real y oficio para leer a una gente que ya viene parrandera. Ese pulso se gana en tarima con Poncho Zuleta, Jorge Celedón y Felipe Peláez.',
      'Si quieres una parranda en Cali, Jamundí o Palmira que sea cercana pero a la altura, escríbeme y la armamos a tu medida.',
    ],
    imagen: IMG.parranda,
    videoId: 'oPoqVKg30Cg',
    faq: [
      {
        pregunta: '¿En qué se nota que es profesional?',
        respuesta:
          'Misma cercanía, pero con músicos de verdad, empaste real y dirección artística; no alguien tocando de oído de relleno.',
      },
      {
        pregunta: '¿Se mezcla bien con la rumba caleña?',
        respuesta:
          'Sí, suele ser el momento de cantar entre amigos antes o después de la salsa; le da otro sabor a la reunión.',
      },
      {
        pregunta: '¿Cubren Jamundí y Palmira?',
        respuesta:
          'Sí: Cali y la zona —Jamundí, Palmira— y fincas de la región. El desplazamiento va en la cotización.',
      },
      {
        pregunta: '¿Cuántos músicos vienen?',
        respuesta:
          'Formato íntimo liderado por mí, ajustado al espacio y la reunión; pocos, pero profesionales.',
      },
      {
        pregunta: '¿Necesito equipo de sonido?',
        respuesta:
          'Para espacios íntimos normalmente no; si el lugar es amplio llevamos equipo dimensionado.',
      },
      {
        pregunta: '¿Hay contrato?',
        respuesta:
          'Sí, con fecha, repertorio y condiciones. Escríbeme por WhatsApp y te paso la propuesta personalizada.',
      },
    ],
  },
  'parranda-vallenata-profesional|barranquilla': {
    titulo: 'Parranda Vallenata Profesional en Barranquilla | J. González',
    descripcion:
      'Parranda vallenata profesional en Barranquilla: el formato más auténtico, con músicos a la altura de un público que sabe. Cotiza por WhatsApp.',
    h1: 'Parranda vallenata profesional en Barranquilla',
    kicker: 'Parranda profesional · Barranquilla',
    intro: [
      'En Barranquilla la parranda es jugar de local: el vallenato de patio es tradición viva y la gente conoce los versos. Por eso aquí, más que en ningún lado, "un grupito más" tocando flojo queda en evidencia al instante. Lo que llevo es una parranda profesional: íntima, sí, pero con músicos de verdad, repertorio profundo y dirección artística.',
      'He hecho parrandas en casas y patios de Barranquilla y su área. El reto en la Costa no es enganchar al público —ya viene enganchado— sino estar a la altura: saber pedir y responder, dejar respirar la parranda y mantener el nivel hasta que amanezca. Eso solo lo da el oficio, el mismo que se gana en tarima con Poncho Zuleta, Jorge Celedón y Felipe Peláez.',
      'Si quieres una parranda de verdad en Barranquilla, cercana pero a la altura de un público que sabe, hablemos: aquí se hace como debe ser.',
    ],
    imagen: IMG.poncho,
    videoId: 'Ll5rSyCDM78',
    faq: [
      {
        pregunta: '¿Por qué profesional en una ciudad que sabe de vallenato?',
        respuesta:
          'Justo por eso: el público barranquillero lo nota. Pocos músicos pero de verdad, repertorio profundo y dirección artística.',
      },
      {
        pregunta: '¿Qué hace especial una parranda en Barranquilla?',
        respuesta:
          'Es jugar de local: el público conoce los versos y la parranda fluye sola; el reto es estar a la altura, y lo estamos.',
      },
      {
        pregunta: '¿Qué tan amplio es el repertorio?',
        respuesta:
          'Profundo: clásicos, parranda fuerte y romántico; en la Costa la gente pide y hay que tener con qué responder.',
      },
      {
        pregunta: '¿Cubren el área metropolitana?',
        respuesta:
          'Sí: Barranquilla, Puerto Colombia, Soledad y zonas cercanas. El desplazamiento va en la cotización.',
      },
      {
        pregunta: '¿Cuántos músicos llegan?',
        respuesta:
          'Formato íntimo liderado por mí, ajustado al espacio y la reunión; pocos, pero profesionales.',
      },
      {
        pregunta: '¿Hay contrato?',
        respuesta:
          'Sí, con fecha, repertorio y condiciones. Escríbeme por WhatsApp con lugar y número de invitados.',
      },
    ],
  },
  'parranda-vallenata-profesional|cartagena': {
    titulo: 'Parranda Vallenata Profesional en Cartagena | J. González',
    descripcion:
      'Parranda vallenata profesional en Cartagena: el vallenato auténtico en casas coloniales, con músicos serios y oficio. Cotiza por WhatsApp.',
    h1: 'Parranda vallenata profesional en Cartagena',
    kicker: 'Parranda profesional · Cartagena',
    intro: [
      'En Cartagena la parranda vallenata tiene un marco difícil de superar: una casa colonial del Centro Histórico, un patio con buganvilias, el calor de la noche caribeña. Para grupos que llegan de visita o una celebración privada, ese momento no puede quedar en manos de "un grupito más": tiene que ser una parranda profesional, íntima pero con músicos de verdad y dirección artística.',
      'He hecho parrandas en casas del Centro y fincas cercanas a la ciudad. El formato íntimo cumple doble función: fiesta para el local y experiencia inolvidable para el visitante, que entiende el vallenato cuando lo tiene a un metro y bien tocado, no en una tarima lejana ni de relleno. Ese nivel se gana en tarima con Poncho Zuleta, Jorge Celedón y Felipe Peláez.',
      'Si organizas una parranda en Cartagena para una celebración o un grupo de visita, cercana pero a la altura, escríbeme y la dejamos lista a tu medida.',
    ],
    imagen: IMG.parranda,
    videoId: 'vgDABDveFn0',
    faq: [
      {
        pregunta: '¿Por qué una parranda profesional para visitantes?',
        respuesta:
          'Porque para el visitante es su imagen de Colombia: debe ser cercana pero impecable, con músicos de verdad y dirección artística.',
      },
      {
        pregunta: '¿Hacen parrandas en casas del Centro Histórico?',
        respuesta:
          'Sí: casas coloniales del Centro, patios y fincas cercanas a Cartagena, coordinando logística y transporte.',
      },
      {
        pregunta: '¿Manejan restricciones de ruido en el Centro?',
        respuesta:
          'Sí, ajustamos formato y horario a las normas del venue patrimonial; se planea desde la cotización.',
      },
      {
        pregunta: '¿Cuántos músicos vienen?',
        respuesta:
          'Formato íntimo liderado por mí, ajustado al espacio y al grupo; pocos, pero profesionales.',
      },
      {
        pregunta: '¿Con cuánta anticipación reservar?',
        respuesta:
          'En temporada alta Cartagena se llena; reserva con 2 a 4 semanas o más para asegurar fecha.',
      },
      {
        pregunta: '¿Hay contrato?',
        respuesta:
          'Sí, con fecha, repertorio y condiciones. Escríbeme por WhatsApp y te envío la propuesta a la medida.',
      },
    ],
  },
};
