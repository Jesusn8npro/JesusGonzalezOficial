import type { Articulo } from './tipos';

export const articulo: Articulo = {
  slug: 'parranda-vallenata-guia-completa',
  titulo: 'Parranda Vallenata: La Guía Completa para una Noche Inolvidable',
  h1: 'Parranda vallenata: la guía completa para una noche inolvidable',
  descripcion:
    'Todo sobre la parranda vallenata: qué es, cómo se vive, cuántas personas, repertorio, ambiente y cómo organizar una noche que nadie olvide.',
  resumen:
    'La parranda no es un concierto ni una fiesta cualquiera: es una conversación con acordeón. Te cuento cómo se vive una parranda de verdad y cómo organizar la tuya.',
  categoria: 'Parrandas',
  fecha: '2026-03-23',
  actualizado: '2026-05-06',
  portada: '/Imagenes/Parrandas Vallenatas.jpg',
  portadaAlt:
    'Ambiente íntimo de una parranda vallenata con acordeón en vivo',
  claves: [
    'parranda vallenata',
    'cómo organizar una parranda vallenata',
    'parranda vallenata en casa',
    'acordeonista para parranda',
  ],
  relacionados: [
    'como-elegir-grupo-vallenato-evento-corporativo',
    'repertorio-vallenato-para-matrimonio',
  ],
  cuerpo: [
    {
      tipo: 'parrafo',
      contenido: [
        'Si nunca has vivido una parranda vallenata de verdad, te lo resumo así: es lo más cerca que vas a estar de entender de dónde viene esta música. No es un show con escenario y luces. Es un círculo de gente, un acordeón a un metro de ti y canciones que se eligen según quién está sentado al lado.',
      ],
    },
    {
      tipo: 'parrafo',
      contenido: [
        'He tocado en tarimas grandes y las disfruto, pero la parranda es otra cosa. Aquí te cuento cómo se vive y cómo organizar una que la gente recuerde por años.',
      ],
    },
    { tipo: 'h2', texto: 'Qué es realmente una parranda' },
    {
      tipo: 'parrafo',
      contenido: [
        'La parranda es la forma más pura de vivir el vallenato: íntima, sin prisa y conversada. El acordeonista no “se presenta”, se sienta con ustedes. Las canciones salen de las historias que se cuentan en la mesa, no de una lista impresa. Por eso ninguna parranda es igual a otra.',
      ],
    },
    {
      tipo: 'cita',
      texto:
        'En un show toco para un público. En una parranda toco para personas que conozco antes de que termine la primera canción.',
      autor: 'Jesús González',
    },
    {
      tipo: 'imagen',
      src: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
      alt: 'Jesús González en una parranda vallenata con invitados',
      pie: 'En la parranda el acordeón está a un metro de la gente: esa cercanía es todo.',
    },
    { tipo: 'h2', texto: 'Cuántas personas y en qué espacio' },
    {
      tipo: 'parrafo',
      contenido: [
        'La parranda funciona mejor en grupos pequeños o medianos, donde todos se sienten parte del círculo. No necesitas un salón gigante: una terraza, una sala amplia, una finca o un patio funcionan perfecto. Lo importante no es el tamaño, es la cercanía.',
      ],
    },
    {
      tipo: 'lista',
      items: [
        [
          { fuerte: 'Grupos íntimos.' },
          ' Cumpleaños, reencuentros, celebraciones familiares: aquí la parranda brilla.',
        ],
        [
          { fuerte: 'Grupos medianos.' },
          ' Despedidas, aniversarios o reuniones de amigos donde todos se conocen.',
        ],
        [
          { fuerte: 'El espacio.' },
          ' Que la gente quepa alrededor del acordeón, no en filas mirando al frente.',
        ],
      ],
    },
    { tipo: 'h2', texto: 'El repertorio de una parranda' },
    {
      tipo: 'parrafo',
      contenido: [
        'En una parranda el repertorio se construye sobre la marcha. Empiezo con clásicos que todos conocen para romper el hielo y, a medida que la gente se suelta y cuenta sus historias, voy entrando a las canciones que pegan con el momento: la del que está enamorado, la del que volvió al país, la del amigo que ya no está.',
      ],
    },
    { tipo: 'h3', texto: 'El arranque' },
    {
      tipo: 'parrafo',
      contenido: [
        'Clásicos de Diomedes, el Binomio y los maestros: terreno seguro para que todos canten desde el primer momento.',
      ],
    },
    { tipo: 'h3', texto: 'El punto alto' },
    {
      tipo: 'parrafo',
      contenido: [
        'Cuando ya hay confianza, llegan las puyas, las dedicatorias y los temas pedidos. Aquí es donde la parranda se vuelve inolvidable.',
      ],
    },
    {
      tipo: 'video',
      videoId: 'Ll5rSyCDM78',
      titulo: 'Así suena una parranda vallenata con Jesús González',
    },
    { tipo: 'h2', texto: 'Cómo organizar tu parranda paso a paso' },
    {
      tipo: 'parrafo',
      contenido: [
        'Organizar una buena parranda es más sencillo de lo que crees si cuidas lo esencial.',
      ],
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        [
          { fuerte: 'Define el motivo.' },
          ' Una parranda con excusa (cumpleaños, reencuentro) tiene más alma.',
        ],
        [
          { fuerte: 'Cuida el ambiente.' },
          ' Buena comida, bebida y un espacio acogedor; el acordeón hace el resto.',
        ],
        [
          { fuerte: 'No sobrecargues la agenda.' },
          ' La parranda necesita tiempo para respirar; no la metas entre mil actividades.',
        ],
        [
          { fuerte: 'Avísame de las historias.' },
          ' Si hay un homenajeado o una canción especial, dímelo antes para prepararla.',
        ],
      ],
    },
    {
      tipo: 'parrafo',
      contenido: [
        'Si la parranda es para un grupo de empresa o clientes, revisa también ',
        {
          texto: 'cómo elegir el grupo vallenato para un evento corporativo',
          href: '/blog/como-elegir-grupo-vallenato-evento-corporativo',
        },
        ', y si quieres ideas de canciones, mira el ',
        {
          texto: 'repertorio vallenato para matrimonio',
          href: '/blog/repertorio-vallenato-para-matrimonio',
        },
        ' (muchos temas aplican igual). Para fechas y formatos, escríbeme desde ',
        { texto: 'contrataciones', href: '/contrataciones' },
        '.',
      ],
    },
    {
      tipo: 'cta',
      mensaje:
        '¡Hola Jesús! Quiero organizar una parranda vallenata. ¿Me cuentas cómo lo hacemos?',
      etiqueta: 'blog_parranda_cta',
      texto: 'Organizar mi parranda por WhatsApp',
    },
  ],
};
