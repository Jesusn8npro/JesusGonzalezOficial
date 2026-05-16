// Repertorio curado de Jesús González — módulo tipado, listo para Supabase.
// Las páginas consumen el accessor (obtenerRepertorio), nunca el array crudo:
// el día que esto venga de una base de datos solo cambia la implementación
// de obtenerRepertorio() — las páginas no se tocan.

/** Momentos del evento por los que se agrupa y filtra el repertorio. */
export type MomentoId =
  | 'entrada-ceremonia'
  | 'romantico-vals'
  | 'fiesta'
  | 'hora-loca'
  | 'parranda'
  | 'clasicos';

export interface Momento {
  id: MomentoId;
  /** Nombre visible del momento. */
  nombre: string;
  /** Frase corta que enmarca para qué sirve ese bloque en el evento. */
  resumen: string;
}

export interface Cancion {
  titulo: string;
  /** Intérprete/autor de referencia (clásico del vallenato). */
  artista: string;
  momento: MomentoId;
}

/** Orden curado de los momentos (de la entrada del evento hasta la parranda). */
export const MOMENTOS: Momento[] = [
  {
    id: 'entrada-ceremonia',
    nombre: 'Entrada y ceremonia',
    resumen:
      'Recibimiento elegante y acompañamiento de ceremonia: presencia sobria que marca el tono del evento.',
  },
  {
    id: 'romantico-vals',
    nombre: 'Romántico y vals',
    resumen:
      'El momento emotivo: primer baile, brindis y dedicatorias. Vallenato romántico bien interpretado.',
  },
  {
    id: 'fiesta',
    nombre: 'Fiesta',
    resumen:
      'Cuando la pista se llena. Clásicos bailables que conectan con todas las generaciones.',
  },
  {
    id: 'hora-loca',
    nombre: 'Hora loca',
    resumen:
      'Energía al máximo: el repertorio más prendido para el pico de la celebración.',
  },
  {
    id: 'parranda',
    nombre: 'Parranda',
    resumen:
      'El alma del vallenato en formato íntimo: canciones para cantar y sentir hasta el amanecer.',
  },
  {
    id: 'clasicos',
    nombre: 'Clásicos del vallenato',
    resumen:
      'Himnos que no pueden faltar. El repertorio que todo el mundo reconoce y pide.',
  },
];

// ~80 canciones representativas del vallenato repartidas por momento.
const CANCIONES: Cancion[] = [
  // ---------- Entrada y ceremonia ----------
  { titulo: 'Honda Herida', artista: 'Diomedes Díaz', momento: 'entrada-ceremonia' },
  { titulo: 'Tarde Lo Conocí', artista: 'Patricia Teherán', momento: 'entrada-ceremonia' },
  { titulo: 'Ausencia Sentimental', artista: 'Diomedes Díaz', momento: 'entrada-ceremonia' },
  { titulo: 'Confidencia', artista: 'Los Hermanos Zuleta', momento: 'entrada-ceremonia' },
  { titulo: 'Mi Hermano y Yo', artista: 'Los Hermanos Zuleta', momento: 'entrada-ceremonia' },
  { titulo: 'La Creciente', artista: 'Los Hermanos Zuleta', momento: 'entrada-ceremonia' },
  { titulo: 'El Cantor de Fonseca', artista: 'Carlos Vives', momento: 'entrada-ceremonia' },
  { titulo: 'La Diosa Coronada', artista: 'Carlos Vives', momento: 'entrada-ceremonia' },
  { titulo: 'Nido de Amor', artista: 'Iván Villazón', momento: 'entrada-ceremonia' },
  { titulo: 'Tu Cumpleaños', artista: 'Diomedes Díaz', momento: 'entrada-ceremonia' },

  // ---------- Romántico y vals ----------
  { titulo: 'Oye Bonita', artista: 'Jorge Celedón', momento: 'romantico-vals' },
  { titulo: 'Que Bonita Es Esta Vida', artista: 'Jorge Celedón', momento: 'romantico-vals' },
  { titulo: 'Ay Hombe', artista: 'Jorge Celedón', momento: 'romantico-vals' },
  { titulo: 'Tu Amor Es Como un Trago', artista: 'Diomedes Díaz', momento: 'romantico-vals' },
  { titulo: 'Mi Primera Cana', artista: 'Diomedes Díaz', momento: 'romantico-vals' },
  { titulo: 'Sin Medir Distancias', artista: 'Diomedes Díaz', momento: 'romantico-vals' },
  { titulo: 'Volví a Nacer', artista: 'Carlos Vives', momento: 'romantico-vals' },
  { titulo: 'Déjame Entrar', artista: 'Carlos Vives', momento: 'romantico-vals' },
  { titulo: 'Como Duele una Traición', artista: 'Silvestre Dangond', momento: 'romantico-vals' },
  { titulo: 'Cásate Conmigo', artista: 'Silvestre Dangond', momento: 'romantico-vals' },
  { titulo: 'Materialista', artista: 'Silvestre Dangond', momento: 'romantico-vals' },
  { titulo: 'No Te Vayas', artista: 'Peter Manjarrés', momento: 'romantico-vals' },
  { titulo: 'Como un Tatuaje', artista: 'Peter Manjarrés', momento: 'romantico-vals' },
  { titulo: 'Tarde Lo Conocí', artista: 'Diomedes Díaz', momento: 'romantico-vals' },
  { titulo: 'Amarte Más No Pude', artista: 'Los Diablitos', momento: 'romantico-vals' },

  // ---------- Fiesta ----------
  { titulo: 'La Gota Fría', artista: 'Carlos Vives', momento: 'fiesta' },
  { titulo: 'La Tierra del Olvido', artista: 'Carlos Vives', momento: 'fiesta' },
  { titulo: 'Fruta Fresca', artista: 'Carlos Vives', momento: 'fiesta' },
  { titulo: 'Pa Mayte', artista: 'Carlos Vives', momento: 'fiesta' },
  { titulo: 'El Mango', artista: 'Carlos Vives', momento: 'fiesta' },
  { titulo: 'La Plata', artista: 'Juan Luis Guerra y Carlos Vives', momento: 'fiesta' },
  { titulo: 'Niégame Tres Veces', artista: 'Los Inquietos', momento: 'fiesta' },
  { titulo: 'Tu Cariñito', artista: 'Los Inquietos', momento: 'fiesta' },
  { titulo: 'A Blanco y Negro', artista: 'Los Inquietos', momento: 'fiesta' },
  { titulo: 'Vivo en el Limbo', artista: 'Kaleth Morales', momento: 'fiesta' },
  { titulo: 'El Amor No Es Como lo Pintan', artista: 'Kaleth Morales', momento: 'fiesta' },
  { titulo: 'La Invitación', artista: 'Silvestre Dangond', momento: 'fiesta' },
  { titulo: 'Lo Mejor de la Vida', artista: 'Silvestre Dangond', momento: 'fiesta' },
  { titulo: 'Niña Bonita', artista: 'Jean Carlos Centeno', momento: 'fiesta' },
  { titulo: 'La Cita', artista: 'El Binomio de Oro', momento: 'fiesta' },
  { titulo: 'Solo Para Ti', artista: 'Binomio de Oro de América', momento: 'fiesta' },
  { titulo: 'Déjala Que Baile', artista: 'Diomedes Díaz', momento: 'fiesta' },
  { titulo: 'Año Nuevo, Vida Nueva', artista: 'Diomedes Díaz', momento: 'fiesta' },

  // ---------- Hora loca ----------
  { titulo: 'La Mosca', artista: 'Las Musas del Vallenato', momento: 'hora-loca' },
  { titulo: 'El Higuerito', artista: 'Andrés Landero', momento: 'hora-loca' },
  { titulo: 'Las Mujeres', artista: 'Mr. Black y Vallenato', momento: 'hora-loca' },
  { titulo: 'La Pollera Colorá', artista: 'Sonido vallenato', momento: 'hora-loca' },
  { titulo: 'El Santo Cachón', artista: 'Los Embajadores Vallenatos', momento: 'hora-loca' },
  { titulo: 'Tabaco y Ron', artista: 'Versión vallenata', momento: 'hora-loca' },
  { titulo: 'La Piña Madura', artista: 'Sonido vallenato', momento: 'hora-loca' },
  { titulo: 'El Africano', artista: 'Versión vallenata', momento: 'hora-loca' },
  { titulo: 'Se Le Olvidó', artista: 'Silvestre Dangond', momento: 'hora-loca' },
  { titulo: 'Tóxico', artista: 'Versión parranda', momento: 'hora-loca' },
  { titulo: 'La Diabla', artista: 'Sonido vallenato', momento: 'hora-loca' },
  { titulo: 'Cabello Largo', artista: 'Sonido vallenato', momento: 'hora-loca' },

  // ---------- Parranda ----------
  { titulo: 'La Custodia de Badillo', artista: 'Rafael Escalona', momento: 'parranda' },
  { titulo: 'El Almirante Padilla', artista: 'Rafael Escalona', momento: 'parranda' },
  { titulo: 'La Casa en el Aire', artista: 'Rafael Escalona', momento: 'parranda' },
  { titulo: 'El Testamento', artista: 'Rafael Escalona', momento: 'parranda' },
  { titulo: 'La Brasilera', artista: 'Rafael Escalona', momento: 'parranda' },
  { titulo: 'Lirio Rojo', artista: 'Rafael Escalona', momento: 'parranda' },
  { titulo: 'El Cordobés Mañé', artista: 'Calixto Ochoa', momento: 'parranda' },
  { titulo: 'Los Sabanales', artista: 'Calixto Ochoa', momento: 'parranda' },
  { titulo: 'El Hombre Caimán', artista: 'Sonido vallenato', momento: 'parranda' },
  { titulo: 'Matilde Lina', artista: 'Leandro Díaz', momento: 'parranda' },
  { titulo: 'La Diosa Coronada', artista: 'Leandro Díaz', momento: 'parranda' },
  { titulo: 'A Mí No Me Consuela Nadie', artista: 'Diomedes Díaz', momento: 'parranda' },
  { titulo: 'El Cóndor Legendario', artista: 'Diomedes Díaz', momento: 'parranda' },
  { titulo: 'Bonito', artista: 'Iván Villazón', momento: 'parranda' },
  { titulo: 'La Reina', artista: 'Los Hermanos Zuleta', momento: 'parranda' },

  // ---------- Clásicos del vallenato ----------
  { titulo: 'La Gota Fría', artista: 'Emiliano Zuleta', momento: 'clasicos' },
  { titulo: 'El Cantor de Fonseca', artista: 'Carlos Huertas', momento: 'clasicos' },
  { titulo: 'Alicia Adorada', artista: 'Juancho Polo Valencia', momento: 'clasicos' },
  { titulo: 'La Casa en el Aire', artista: 'Rafael Escalona', momento: 'clasicos' },
  { titulo: 'Pedazo de Acordeón', artista: 'Alejo Durán', momento: 'clasicos' },
  { titulo: 'Fidelina', artista: 'Alejo Durán', momento: 'clasicos' },
  { titulo: 'La Cumbia Cienaguera', artista: 'Andrés Paz Barros', momento: 'clasicos' },
  { titulo: 'El Higuerón', artista: 'Andrés Landero', momento: 'clasicos' },
  { titulo: 'El Mejoral', artista: 'Luis Enrique Martínez', momento: 'clasicos' },
  { titulo: 'La Vieja Sara', artista: 'Romualdo Brito', momento: 'clasicos' },
  { titulo: 'Mi Pedazo de Acordeón', artista: 'Alfredo Gutiérrez', momento: 'clasicos' },
  { titulo: 'Festival en Guararé', artista: 'Alfredo Gutiérrez', momento: 'clasicos' },
  { titulo: 'El Verano', artista: 'Los Hermanos Zuleta', momento: 'clasicos' },
  { titulo: 'Las Mujeres a Mí No Me Quieren', artista: 'Diomedes Díaz', momento: 'clasicos' },
  { titulo: 'Cariñito de Mi Vida', artista: 'Diomedes Díaz', momento: 'clasicos' },
  { titulo: 'El Cocha Molina', artista: 'Diomedes Díaz', momento: 'clasicos' },
];

export interface GrupoRepertorio {
  momento: Momento;
  canciones: Cancion[];
}

/**
 * Accessor único del repertorio (Supabase-ready). Devuelve las canciones
 * agrupadas por momento, en el orden curado de MOMENTOS. La página llama
 * a esto, no al array crudo.
 */
export function obtenerRepertorio(): GrupoRepertorio[] {
  return MOMENTOS.map((momento) => ({
    momento,
    canciones: CANCIONES.filter((c) => c.momento === momento.id),
  }));
}

/** Total de canciones del repertorio (para encabezados/credibilidad). */
export function totalCanciones(): number {
  return CANCIONES.length;
}
