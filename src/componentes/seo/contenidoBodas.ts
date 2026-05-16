import { IMG, type Contenido } from './landingBase';

// Contenido localizado para "acordeonista-para-bodas" × 5 ciudades.
// clave = `${servicio}|${ciudad}`
export const CONTENIDO_BODAS: Record<string, Contenido> = {
  'acordeonista-para-bodas|bogota': {
    titulo: 'Acordeonista para Bodas en Bogotá | Jesús González',
    descripcion:
      'Acordeonista vallenato para tu boda en Bogotá. Show en vivo profesional para la entrada, la fiesta y la hora loca. Cotiza tu fecha por WhatsApp.',
    h1: 'Acordeonista para bodas en Bogotá',
    kicker: 'Bodas con sello vallenato · Bogotá',
    intro: [
      'En Bogotá una boda puede empezar muy formal y, cuando entra el acordeón, todo cambia. Llevo años acompañando matrimonios en salones de la zona norte, fincas de la sabana y hoteles del centro internacional, y siempre pasa lo mismo: la pista se llena en la primera canción.',
      'Mi trabajo no es solo "tocar vallenato". Es leer tu boda: la entrada de los novios, el primer baile, ese momento con los papás y la hora loca cuando ya nadie quiere sentarse. En la sabana de Bogotá adapto el formato al frío y a venues abiertos, con sonido propio si el lugar no lo incluye.',
      'Si estás organizando tu matrimonio en Bogotá o en Chía, Cota o La Calera, hablemos de tu fecha antes de que se llene la agenda de diciembre.',
    ],
    imagen: IMG.exclusivo,
    videoId: 'oPoqVKg30Cg',
    faq: [
      {
        pregunta: '¿Tocas en bodas en la sabana de Bogotá (Chía, Cota, La Calera)?',
        respuesta:
          'Sí. Cubro Bogotá y toda la sabana: Chía, Cota, La Calera, Sopó y fincas de eventos. Solo coordinamos el desplazamiento dentro de la cotización.',
      },
      {
        pregunta: '¿En qué momentos de la boda interviene el acordeón?',
        respuesta:
          'Lo habitual en Bogotá: entrada de los novios, un set durante la cena, el arranque de fiesta y la hora loca. Lo ajustamos juntos a tu cronograma.',
      },
      {
        pregunta: '¿Llevas sonido si el venue no lo incluye?',
        respuesta:
          'Sí. Muchos salones de la sabana son abiertos o sin sonido propio; puedo llevar equipo dimensionado al lugar.',
      },
      {
        pregunta: '¿Con cuánta anticipación reservo una boda en Bogotá?',
        respuesta:
          'Las fechas de noviembre y diciembre se llenan rápido. Lo ideal es apartar con 2 a 4 meses; entre semana hay más disponibilidad.',
      },
      {
        pregunta: '¿Cómo es el proceso para cotizar?',
        respuesta:
          'Me escribes por WhatsApp con fecha, lugar y número de invitados aproximado, y te devuelvo una propuesta a tu medida el mismo día.',
      },
      {
        pregunta: '¿Aprenden una canción especial para la entrada?',
        respuesta:
          'Sí, podemos preparar la canción que quieras para la entrada o el vals; coordinémosla con tiempo para ensayarla bien.',
      },
    ],
  },
  'acordeonista-para-bodas|medellin': {
    titulo: 'Acordeonista para Bodas en Medellín | Jesús González',
    descripcion:
      'Acordeonista vallenato para bodas en Medellín y el Oriente antioqueño. Show en vivo que llena la pista. Cotiza tu matrimonio por WhatsApp.',
    h1: 'Acordeonista para bodas en Medellín',
    kicker: 'Bodas con vallenato · Medellín',
    intro: [
      'Las bodas paisas tienen algo: la gente baila de verdad. En Medellín y en las fincas del Oriente antioqueño —Llanogrande, Rionegro, El Retiro— el vallenato funciona increíble porque se mezcla con esa energía de fiesta que ya trae el invitado paisa.',
      'He tocado en haciendas de Llanogrande y en salones de El Poblado, y el reto siempre es el mismo: que el acordeón conecte con públicos que no necesariamente crecieron con vallenato, pero que terminan cantando los coros. Eso se logra con repertorio y con tarima, no improvisando.',
      'Si tu matrimonio es en Medellín o en una finca del Oriente, cuéntame la fecha y armamos algo a la medida de tu boda.',
    ],
    imagen: IMG.concierto,
    videoId: 'vgDABDveFn0',
    faq: [
      {
        pregunta: '¿Cubres bodas en fincas de Llanogrande y Rionegro?',
        respuesta:
          'Sí, es de lo que más hago en Antioquia. Cubro Medellín y todo el Oriente: Llanogrande, Rionegro, El Retiro, La Ceja y Guarne.',
      },
      {
        pregunta: '¿Funciona el vallenato si los invitados son paisas y no costeños?',
        respuesta:
          'Funciona muy bien. Curo el repertorio para que enganche desde la primera canción aunque el público no sea de la Costa.',
      },
      {
        pregunta: '¿Llevas sonido a fincas sin equipo?',
        respuesta:
          'Sí. Muchas fincas del Oriente antioqueño no tienen sonido fijo; dimensiono el equipo al espacio y al número de invitados.',
      },
      {
        pregunta: '¿Cuándo conviene reservar en Medellín?',
        respuesta:
          'Temporada alta de bodas en Antioquia es diciembre y mitad de año. Aparta con 2 a 4 meses para asegurar tu fecha.',
      },
      {
        pregunta: '¿Puedo combinar el acordeón con la fiesta del DJ?',
        respuesta:
          'Sí. Lo habitual en Medellín es alternar sets en vivo con el DJ; coordinamos los empalmes para que no baje la energía.',
      },
      {
        pregunta: '¿Cómo cotizo mi boda?',
        respuesta:
          'Escríbeme por WhatsApp con fecha, finca o salón y cantidad de invitados; te paso la propuesta personalizada el mismo día.',
      },
    ],
  },
  'acordeonista-para-bodas|cali': {
    titulo: 'Acordeonista para Bodas en Cali | Jesús González',
    descripcion:
      'Acordeonista vallenato para bodas en Cali y el Valle. Show en vivo que prende la fiesta antes de la salsa. Cotiza tu matrimonio por WhatsApp.',
    h1: 'Acordeonista para bodas en Cali',
    kicker: 'Bodas con vallenato · Cali',
    intro: [
      'Cali es ciudad de fiesta, y aunque manda la salsa, el vallenato en una boda caleña tiene un lugar especial: es el momento romántico y parrandero a la vez, justo antes de que la pista se vuelva loca.',
      'He tocado en haciendas de la vía a Jamundí y en clubes del sur de Cali. La clave aquí es el orden: el acordeón abre, calienta y entrega la noche en su punto más alto. Si el venue es al aire libre —muy común en el Valle— llevo sonido propio para que el calor no apague la fiesta.',
      'Si te casas en Cali, Jamundí o Palmira, hablemos de tu fecha y de cómo encajar el vallenato en una boda donde después todos van a querer salsa.',
    ],
    imagen: IMG.exclusivo,
    videoId: 'Ll5rSyCDM78',
    faq: [
      {
        pregunta: '¿El vallenato funciona en una boda caleña donde manda la salsa?',
        respuesta:
          'Sí. Funciona como el momento más emotivo y parrandero de la noche; lo ubico antes de la salsa para dejar la pista encendida.',
      },
      {
        pregunta: '¿Cubres Jamundí, Palmira y haciendas del Valle?',
        respuesta:
          'Sí. Cubro Cali y el área: Jamundí, Palmira, Yumbo y haciendas de eventos de la región.',
      },
      {
        pregunta: '¿Llevas sonido para bodas al aire libre?',
        respuesta:
          'Sí. Muchas haciendas del Valle son abiertas; llevo equipo propio dimensionado al lugar si el venue no lo incluye.',
      },
      {
        pregunta: '¿Cuándo debo reservar?',
        respuesta:
          'Recomiendo apartar con 2 a 4 meses, sobre todo para fines de semana de temporada alta en el Valle.',
      },
      {
        pregunta: '¿Pueden alternar acordeón y orquesta de salsa?',
        respuesta:
          'Claro. Coordinamos los empalmes con la orquesta o el DJ para que la transición a la salsa sea natural.',
      },
      {
        pregunta: '¿Cómo pido la cotización?',
        respuesta:
          'Por WhatsApp: envíame fecha, lugar y número de invitados y te respondo con una propuesta a la medida.',
      },
    ],
  },
  'acordeonista-para-bodas|barranquilla': {
    titulo: 'Acordeonista para Bodas en Barranquilla | Jesús González',
    descripcion:
      'Acordeonista vallenato para bodas en Barranquilla. Aquí el público sabe de vallenato: show de nivel para tu matrimonio. Cotiza por WhatsApp.',
    h1: 'Acordeonista para bodas en Barranquilla',
    kicker: 'Bodas con vallenato · Barranquilla',
    intro: [
      'En Barranquilla el vallenato no se explica: se vive. El público de una boda barranquillera sabe de música, canta los versos y exige nivel. Eso me encanta, porque obliga a llevar repertorio de verdad y no relleno.',
      'He tocado en clubes y salones de la ciudad y en fincas de la vía a Puerto Colombia. La boda costeña tiene su propio ritmo: el acordeón no es un número, es el corazón de la fiesta de principio a fin. Aquí el reto es estar a la altura de un público que conoce a los grandes.',
      'Si tu matrimonio es en Barranquilla o cerca, en Puerto Colombia o Sabanilla, hablemos: aquí la vara está alta y me gusta así.',
    ],
    imagen: IMG.poncho,
    videoId: 'Ll5rSyCDM78',
    faq: [
      {
        pregunta: '¿El público de Barranquilla no es muy exigente con el vallenato?',
        respuesta:
          'Lo es, y por eso llevo repertorio sólido y banda de nivel. En la Costa el acordeón es protagonista, no un número de relleno.',
      },
      {
        pregunta: '¿Cubres Puerto Colombia y Sabanilla?',
        respuesta:
          'Sí. Cubro Barranquilla y la zona: Puerto Colombia, Sabanilla y fincas de eventos del área metropolitana.',
      },
      {
        pregunta: '¿Qué repertorio manejas para una boda costeña?',
        respuesta:
          'Clásicos del vallenato, romántico para los momentos especiales y parranda fuerte para la fiesta; lo curamos según tu gusto.',
      },
      {
        pregunta: '¿Con cuánta anticipación reservo?',
        respuesta:
          'En la Costa la temporada de bodas es intensa; aparta con 2 a 4 meses para asegurar tu fecha.',
      },
      {
        pregunta: '¿El acordeón acompaña toda la fiesta o solo un set?',
        respuesta:
          'En Barranquilla normalmente es protagonista buena parte de la noche; lo definimos según tu cronograma.',
      },
      {
        pregunta: '¿Cómo cotizo?',
        respuesta:
          'Escríbeme por WhatsApp con la fecha, el lugar y los invitados aproximados y te paso la propuesta el mismo día.',
      },
    ],
  },
  'acordeonista-para-bodas|cartagena': {
    titulo: 'Acordeonista para Bodas en Cartagena | Jesús González',
    descripcion:
      'Acordeonista vallenato para bodas en Cartagena: ciudad amurallada, casas coloniales y eventos destino. Show en vivo de nivel. Cotiza por WhatsApp.',
    h1: 'Acordeonista para bodas en Cartagena',
    kicker: 'Bodas destino · Cartagena',
    intro: [
      'Cartagena es la capital de las bodas destino en Colombia. Muchas parejas llegan desde Bogotá, el exterior o el interior a casarse en una casa colonial del Centro Histórico o en un hotel frente al mar, y quieren que sus invitados se lleven Colombia en la memoria. El vallenato hace exactamente eso.',
      'He tocado en casas de la ciudad amurallada y en hoteles de Bocagrande. En una boda destino el acordeón es la postal sonora: el momento en que el invitado de afuera entiende dónde está. Trabajo coordinado con wedding planners y con la logística de venues patrimoniales, que tienen sus reglas de horario y ruido.',
      'Si tu boda es en Cartagena, hablemos con tiempo: las fechas buenas en la ciudad amurallada se reservan con muchos meses de anticipación.',
    ],
    imagen: IMG.concierto,
    videoId: 'vgDABDveFn0',
    faq: [
      {
        pregunta: '¿Trabajas bodas destino con wedding planner?',
        respuesta:
          'Sí, es habitual en Cartagena. Me coordino con tu planner y con la logística del venue, incluidos los venues patrimoniales.',
      },
      {
        pregunta: '¿Tocas dentro de la ciudad amurallada y en islas?',
        respuesta:
          'Sí: Centro Histórico, Bocagrande, Manga y eventos en islas cercanas como Barú o el archipiélago, coordinando el transporte.',
      },
      {
        pregunta: '¿Cómo manejan las restricciones de ruido en el Centro Histórico?',
        respuesta:
          'Ajusto formato y horario a las normas del venue patrimonial; lo planeamos desde la cotización para evitar sorpresas.',
      },
      {
        pregunta: '¿Con cuánta anticipación reservo una boda destino?',
        respuesta:
          'En Cartagena lo ideal es apartar con 3 a 6 meses; las fechas de temporada alta se llenan muy rápido.',
      },
      {
        pregunta: '¿El show sirve para que los invitados extranjeros vivan lo colombiano?',
        respuesta:
          'Es justo su mayor valor: el vallenato es la experiencia de Colombia que el invitado de afuera recuerda.',
      },
      {
        pregunta: '¿Cómo pido una propuesta?',
        respuesta:
          'Escríbeme por WhatsApp con fecha, venue y número de invitados y te envío una propuesta a la medida.',
      },
    ],
  },
};
