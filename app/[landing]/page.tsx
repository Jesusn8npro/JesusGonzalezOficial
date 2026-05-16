import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PlantillaLanding from '../../src/componentes/seo/PlantillaLanding';
import JsonLd from '../../src/componentes/seo/JsonLd';
import {
  LANDINGS,
  buscarLanding,
  obtenerContenido,
  SERVICIOS,
  CIUDADES,
  type LandingDef,
} from '../../src/componentes/seo/datosLanding';
import {
  landingServiceSchema,
  faqSchema,
  breadcrumbSchema,
} from '../../src/componentes/seo/esquemas';

// Prerender estático: solo los 25 slugs definidos (5 servicios × 5 ciudades),
// sin fallback dinámico.
export const dynamicParams = false;

export function generateStaticParams() {
  return LANDINGS.map((l) => ({ landing: l.slug }));
}

interface Params {
  params: Promise<{ landing: string }>;
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { landing } = await params;
  const def = buscarLanding(landing);
  if (!def) return {};
  const cont = obtenerContenido(def.servicio, def.ciudad);
  const url = `/${def.slug}`;
  return {
    title: cont.titulo,
    description: cont.descripcion,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      title: cont.titulo,
      description: cont.descripcion,
      url,
      images: [cont.imagen],
    },
    twitter: {
      card: 'summary_large_image',
      title: cont.titulo,
      description: cont.descripcion,
      images: [cont.imagen],
    },
  };
}

/** Hasta 3 landings hermanas para enlazado interno relevante. */
function relacionadas(def: LandingDef): LandingDef[] {
  const mismoServicio = LANDINGS.filter(
    (l) => l.servicio === def.servicio && l.slug !== def.slug,
  ).slice(0, 2);
  const mismaCiudad = LANDINGS.find(
    (l) => l.ciudad === def.ciudad && l.servicio !== def.servicio,
  );
  const lista = [...mismoServicio];
  if (mismaCiudad) lista.push(mismaCiudad);
  return lista.slice(0, 3);
}

export default async function LandingPage({ params }: Params) {
  const { landing } = await params;
  const def = buscarLanding(landing);
  if (!def) notFound();

  const s = SERVICIOS[def.servicio];
  const c = CIUDADES[def.ciudad];
  const cont = obtenerContenido(def.servicio, def.ciudad);

  return (
    <>
      <JsonLd
        id="ld-landing-service"
        data={landingServiceSchema({
          slug: def.slug,
          nombreServicio: s.etiqueta,
          ciudad: c.nombre,
          descripcion: cont.descripcion,
        })}
      />
      <JsonLd
        id="ld-landing-breadcrumb"
        data={breadcrumbSchema([
          { nombre: 'Inicio', url: '/' },
          { nombre: 'Contrataciones', url: '/contrataciones' },
          { nombre: `${s.etiqueta} en ${c.nombre}`, url: `/${def.slug}` },
        ])}
      />
      <JsonLd id="ld-landing-faq" data={faqSchema(cont.faq, def.slug)} />
      <PlantillaLanding
        servicio={def.servicio}
        ciudad={def.ciudad}
        relacionadas={relacionadas(def)}
      />
    </>
  );
}
