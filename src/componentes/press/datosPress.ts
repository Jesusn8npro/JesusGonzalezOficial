// Datos del Press Kit / EPK. Única fuente de verdad de contenido.
// Tipado y exportado de forma estable: mañana esto se puede reemplazar
// por una llamada a Supabase sin tocar la página ni los componentes.

export interface FotoPrensa {
  /** Ruta local en /public (siempre /Imagenes/*). */
  src: string;
  /** Texto alternativo descriptivo (SEO + accesibilidad). */
  alt: string;
  /** true => formato vertical/retrato (afecta el aspecto en la galería). */
  retrato?: boolean;
}

export interface VideoVivo {
  /** ID de YouTube (se carga vía fachada click-to-load, sin autoplay). */
  id: string;
  titulo: string;
}

export interface Credencial {
  artista: string;
  detalle: string;
}

export interface ItemBanda {
  rol: string;
  descripcion: string;
}

export interface BloqueRider {
  titulo: string;
  items: string[];
}

export interface EnlacePress {
  etiqueta: string;
  descripcion: string;
  href: string;
}

export interface DatosPress {
  nombre: string;
  rol: string;
  ubicacion: string;
  fotoHero: FotoPrensa;
  bioCorta: string;
  bioLarga: string[];
  metricas: { valor: string; label: string }[];
  credenciales: Credencial[];
  formatoBanda: {
    intro: string;
    rango: string;
    integrantes: ItemBanda[];
  };
  galeria: FotoPrensa[];
  videos: VideoVivo[];
  rider: BloqueRider[];
  enlaces: EnlacePress[];
}

export const datosPress: DatosPress = {
  nombre: 'Jesús González',
  rol: 'Maestro del acordeón vallenato · Dirección artística',
  ubicacion: 'Colombia · Cobertura nacional',

  fotoHero: {
    src: '/Imagenes/Jesus Gonzalez, Vallenato Exclusivo.jpg',
    alt: 'Jesús González, acordeonista y director artístico vallenato, en presentación en vivo',
  },

  bioCorta:
    'Jesús González es acordeonista, director artístico y referente del vallenato profesional en Colombia. Lidera una banda completa de 6 a 9 músicos y ha compartido escenario y tarima con los grandes del género.',

  bioLarga: [
    'Con más de 15 años en tarima, Jesús González ha construido una carrera alrededor de una idea simple: el vallenato bien hecho no se improvisa, se dirige. No es un acordeonista más que se contrata por horas — es un director artístico que pone en escena una banda profesional completa, con repertorio curado, dinámica de show y una puesta sonora pensada para el evento.',
    'Su trabajo abarca bodas de alto nivel, eventos corporativos, galas y producciones privadas para hoteles, wedding planners y agencias que necesitan un proveedor serio, puntual y con criterio escénico. La diferencia se siente desde la primera nota: afinación, presencia en tarima y un repertorio que mueve a todo tipo de público sin perder la raíz vallenata.',
    'Ha compartido escenario y grabación con figuras de talla nacional del vallenato, lo que respalda tanto su nivel musical como su capacidad de operar en producciones grandes y exigentes. Cada contratación se coordina directamente con él: una sola interlocución, sin intermediarios, con propuesta a la medida del venue y la logística.',
  ],

  metricas: [
    { valor: '+15', label: 'Años en tarima' },
    { valor: '6–9', label: 'Músicos en banda' },
    { valor: '100%', label: 'Dirección propia' },
    { valor: 'Nacional', label: 'Cobertura' },
  ],

  credenciales: [
    { artista: 'Poncho Zuleta', detalle: 'Escenario compartido' },
    { artista: 'Jorge Celedón', detalle: 'Escenario compartido' },
    { artista: 'Felipe Peláez', detalle: 'Escenario compartido' },
    { artista: 'Jean Carlos Centeno', detalle: 'Escenario compartido' },
    { artista: 'Elder Dayán Díaz', detalle: 'Escenario compartido' },
    { artista: 'Rafael Santos', detalle: 'Escenario compartido' },
  ],

  formatoBanda: {
    intro:
      'Jesús González no llega solo. Cada presentación se monta con una banda profesional dirigida por él, dimensionada al evento — desde una parranda íntima hasta una gala de gran formato. Esto es lo que sube a tarima:',
    rango: 'Formato escalable de 6 a 9 músicos',
    integrantes: [
      {
        rol: 'Acordeón y dirección',
        descripcion:
          'Jesús González al acordeón, dirigiendo repertorio, dinámica y enlace con el público.',
      },
      {
        rol: 'Voz líder',
        descripcion:
          'Voz principal con dominio de clásicos del vallenato y repertorio romántico.',
      },
      {
        rol: 'Caja vallenata',
        descripcion: 'Percusión tradicional, columna del ritmo vallenato.',
      },
      {
        rol: 'Guacharaca',
        descripcion: 'Raíz folclórica del conjunto, marca el sello del género.',
      },
      {
        rol: 'Bajo',
        descripcion: 'Base armónica y groove para piso de baile.',
      },
      {
        rol: 'Guitarra / segunda voz',
        descripcion: 'Color armónico y coros que amplían la puesta en escena.',
      },
      {
        rol: 'Refuerzo (formato VIP/Gala)',
        descripcion:
          'Voces y percusión adicionales para producciones grandes y eventos masivos.',
      },
    ],
  },

  galeria: [
    {
      src: '/Imagenes/Jesus Gonzalez en concierto.jpg',
      alt: 'Jesús González en concierto con su acordeón ante el público',
    },
    {
      src: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
      alt: 'Jesús González junto a Poncho Zuleta',
    },
    {
      src: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
      alt: 'Jorge Celedón y Jesús González compartiendo escenario',
    },
    {
      src: '/Imagenes/Jesus Gonzalez, Vallenato Exclusivo.jpg',
      alt: 'Jesús González en presentación de vallenato exclusivo',
    },
    {
      src: '/Imagenes/Parrandas Vallenatas.jpg',
      alt: 'Parranda vallenata en vivo dirigida por Jesús González',
    },
    {
      src: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
      alt: 'El Pollo Irra y Jesús González en tarima',
    },
    {
      src: '/Imagenes/Foto de perfil para JESUS GONZALEZ.jpg',
      alt: 'Retrato profesional de Jesús González con su acordeón',
      retrato: true,
    },
    {
      src: '/Imagenes/Jesus Fondo Blanco.png',
      alt: 'Jesús González, foto de prensa sobre fondo blanco',
      retrato: true,
    },
  ],

  videos: [
    { id: 'vgDABDveFn0', titulo: 'Jesús González en vivo — presentación' },
    { id: 'Ll5rSyCDM78', titulo: 'Vallenato en vivo con banda completa' },
    { id: 'oPoqVKg30Cg', titulo: 'Show de acordeón vallenato — en tarima' },
  ],

  rider: [
    {
      titulo: 'Sonido',
      items: [
        'Sistema de PA dimensionado al venue y número de invitados',
        'Consola con canales suficientes para banda completa (6–9 músicos)',
        'Monitoreo en tarima para acordeón, voces y percusión',
        'Posibilidad de llevar sonido propio cuando el lugar no lo incluye',
      ],
    },
    {
      titulo: 'Escenario',
      items: [
        'Tarima estable y nivelada acorde al formato contratado',
        'Espacio escénico suficiente para 6 a 9 músicos',
        'Puntos eléctricos estables cerca de la tarima',
        'Área de camerino / preparación cuando el evento lo permita',
      ],
    },
    {
      titulo: 'Energía y logística',
      items: [
        'Alimentación eléctrica estable y aterrizada',
        'Acceso para cargue y descargue de equipos',
        'Tiempos de prueba de sonido coordinados con producción del evento',
        'Coordinación previa de repertorio y momentos clave',
      ],
    },
  ],

  enlaces: [
    {
      etiqueta: 'Repertorio',
      descripcion: 'Clásicos, romántico y parranda — el catálogo musical completo.',
      href: '/repertorio',
    },
    {
      etiqueta: 'Contrataciones',
      descripcion: 'Formatos de show, cobertura y cómo cotizar tu evento.',
      href: '/contrataciones',
    },
  ],
};
