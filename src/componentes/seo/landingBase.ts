// Base compartida de las landings programáticas (sin dependencias → sin ciclos).
// Tipos + mapa de imágenes reutilizados por los archivos de contenido por servicio.

export type ServicioId =
  | 'acordeonista-para-bodas'
  | 'vallenato-para-eventos-corporativos'
  | 'parranda-vallenata'
  | 'grupo-vallenato-profesional'
  | 'parranda-vallenata-profesional';

export type CiudadId =
  | 'bogota'
  | 'medellin'
  | 'cali'
  | 'barranquilla'
  | 'cartagena';

export interface QA {
  pregunta: string;
  respuesta: string;
}

export interface Contenido {
  titulo: string; // <title> SEO 50-60c
  descripcion: string; // meta description 150-160c
  h1: string;
  kicker: string;
  intro: string[]; // 2-3 párrafos únicos por combinación
  imagen: string;
  videoId: string;
  faq: QA[];
}

export const IMG = {
  concierto: '/Imagenes/Jesus Gonzalez en concierto.jpg',
  poncho: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
  celedon: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
  exclusivo: '/Imagenes/Jesus-Gonzalez-Vallenato-Exclusivo.jpg',
  parranda: '/Imagenes/Parrandas Vallenatas.jpg',
  pollo: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
  perfil: '/Imagenes/Foto de perfil para JESUS GONZALEZ.jpg',
};
