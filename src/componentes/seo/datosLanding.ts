// Datos de las landings programáticas (servicio × ciudad).
// El contenido localizado vive por servicio en archivos separados
// (cada uno <= 350 líneas); aquí se ensambla la API pública.

import type { ServicioId, CiudadId, Contenido } from './landingBase';
import { CONTENIDO_BODAS } from './contenidoBodas';
import { CONTENIDO_CORPORATIVOS } from './contenidoCorporativos';
import { CONTENIDO_PARRANDA } from './contenidoParranda';
import { CONTENIDO_GRUPO_PROFESIONAL } from './contenidoGrupoProfesional';
import { CONTENIDO_PARRANDA_PROFESIONAL } from './contenidoParrandaProfesional';

export type { ServicioId, CiudadId, QA } from './landingBase';

interface Servicio {
  id: ServicioId;
  etiqueta: string; // "Acordeonista para bodas"
  h1Tipo: string; // texto que va antes de "en {Ciudad}"
  trackingBase: string; // "bodas"
}

interface Ciudad {
  id: CiudadId;
  nombre: string; // "Bogotá"
  gentilicio: string;
}

export const SERVICIOS: Record<ServicioId, Servicio> = {
  'acordeonista-para-bodas': {
    id: 'acordeonista-para-bodas',
    etiqueta: 'Acordeonista para bodas',
    h1Tipo: 'Acordeonista para bodas',
    trackingBase: 'bodas',
  },
  'vallenato-para-eventos-corporativos': {
    id: 'vallenato-para-eventos-corporativos',
    etiqueta: 'Vallenato para eventos corporativos',
    h1Tipo: 'Vallenato para eventos corporativos',
    trackingBase: 'corporativo',
  },
  'parranda-vallenata': {
    id: 'parranda-vallenata',
    etiqueta: 'Parranda vallenata',
    h1Tipo: 'Parranda vallenata',
    trackingBase: 'parranda',
  },
  'grupo-vallenato-profesional': {
    id: 'grupo-vallenato-profesional',
    etiqueta: 'Grupo vallenato profesional',
    h1Tipo: 'Grupo vallenato profesional',
    trackingBase: 'grupo_pro',
  },
  'parranda-vallenata-profesional': {
    id: 'parranda-vallenata-profesional',
    etiqueta: 'Parranda vallenata profesional',
    h1Tipo: 'Parranda vallenata profesional',
    trackingBase: 'parranda_pro',
  },
};

export const CIUDADES: Record<CiudadId, Ciudad> = {
  bogota: { id: 'bogota', nombre: 'Bogotá', gentilicio: 'bogotanos' },
  medellin: { id: 'medellin', nombre: 'Medellín', gentilicio: 'paisas' },
  cali: { id: 'cali', nombre: 'Cali', gentilicio: 'caleños' },
  barranquilla: {
    id: 'barranquilla',
    nombre: 'Barranquilla',
    gentilicio: 'barranquilleros',
  },
  cartagena: {
    id: 'cartagena',
    nombre: 'Cartagena',
    gentilicio: 'cartageneros',
  },
};

export interface LandingDef {
  slug: string;
  servicio: ServicioId;
  ciudad: CiudadId;
}

// Exactamente 25 slugs: 5 servicios × 5 ciudades.
export const LANDINGS: LandingDef[] = (
  Object.keys(SERVICIOS) as ServicioId[]
).flatMap((s) =>
  (Object.keys(CIUDADES) as CiudadId[]).map((c) => ({
    slug: `${s}-${c}`,
    servicio: s,
    ciudad: c,
  })),
);

export function buscarLanding(slug: string): LandingDef | undefined {
  return LANDINGS.find((l) => l.slug === slug);
}

// clave = `${servicio}|${ciudad}`
const CONTENIDO: Record<string, Contenido> = {
  ...CONTENIDO_BODAS,
  ...CONTENIDO_CORPORATIVOS,
  ...CONTENIDO_PARRANDA,
  ...CONTENIDO_GRUPO_PROFESIONAL,
  ...CONTENIDO_PARRANDA_PROFESIONAL,
};

export function obtenerContenido(
  servicio: ServicioId,
  ciudad: CiudadId,
): Contenido {
  return CONTENIDO[`${servicio}|${ciudad}`];
}
