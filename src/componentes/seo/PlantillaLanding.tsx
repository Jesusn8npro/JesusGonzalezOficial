import React from 'react';
import BotonWhatsapp from '../ui/BotonWhatsapp';
import Revelar from '../ui/Revelar';
import {
  CIUDADES,
  SERVICIOS,
  obtenerContenido,
  type CiudadId,
  type ServicioId,
  type LandingDef,
} from './datosLanding';

interface Props {
  servicio: ServicioId;
  ciudad: CiudadId;
  /** Hasta 3 landings hermanas para enlazado interno descriptivo. */
  relacionadas: LandingDef[];
}

const ARTISTAS = [
  'Poncho Zuleta',
  'Jorge Celedón',
  'Felipe Peláez',
  'Jean Carlos Centeno',
  'Elder Dayán Díaz',
];

const PlantillaLanding: React.FC<Props> = ({
  servicio,
  ciudad,
  relacionadas,
}) => {
  const s = SERVICIOS[servicio];
  const c = CIUDADES[ciudad];
  const cont = obtenerContenido(servicio, ciudad);

  const mensajeWa = `¡Hola Jesús! Vi tu página de ${s.etiqueta.toLowerCase()} en ${c.nombre} y quiero cotizar mi evento. ¿Me ayudas con disponibilidad y propuesta?`;
  const eventoWa = `Landing_${s.trackingBase}_${ciudad}`;

  return (
    <article className="bg-tinta text-hueso">
      {/* HERO */}
      <header className="grano relative overflow-hidden border-b border-[color:var(--linea)] px-5 py-24 md:px-10 md:py-32">
        <img
          src={cont.imagen}
          alt={`Jesús González, ${s.etiqueta.toLowerCase()} en ${c.nombre}`}
          width={1280}
          height={720}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,11,8,0.7) 0%, rgba(14,11,8,0.92) 100%)',
          }}
        />
        <div className="relative mx-auto max-w-[1100px]">
          <Revelar>
            <p className="kicker">{cont.kicker}</p>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-hueso md:text-6xl">
              {cont.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hueso-tenue">
              {cont.intro[0]}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <BotonWhatsapp
                mensaje={mensajeWa}
                evento={eventoWa}
                variante="whatsapp"
                tamano="lg"
              >
                Cotizar por WhatsApp
              </BotonWhatsapp>
              <a
                href="/contrataciones"
                className="inline-flex items-center gap-2 rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] px-7 py-4 font-sans text-[1.05rem] font-semibold text-hueso transition-colors hover:border-oro hover:text-oro"
              >
                Ver formatos y paquetes de show
              </a>
            </div>
          </Revelar>
        </div>
      </header>

      {/* CUERPO LOCALIZADO */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <Revelar>
            <h2 className="font-display text-3xl text-hueso md:text-4xl">
              {s.etiqueta} en {c.nombre}: cómo lo hago
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-hueso-tenue">
              {cont.intro.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Revelar>
        </div>
      </section>

      {/* CREDIBILIDAD */}
      <section
        className="grano relative border-y border-[color:var(--linea)] bg-tinta-2 px-5 py-16 md:px-10 md:py-20"
        aria-label="Trayectoria con artistas de talla nacional"
      >
        <div className="mx-auto max-w-[1100px]">
          <Revelar className="mx-auto max-w-2xl text-center">
            <p className="kicker">Trayectoria que respalda</p>
            <h2 className="mt-4 font-display text-3xl text-hueso md:text-[2.4rem]">
              Ha compartido escenario y estudio con
            </h2>
          </Revelar>
          <Revelar
            retardo={0.08}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
          >
            {ARTISTAS.map((n, i) => (
              <React.Fragment key={n}>
                <span className="font-display text-lg text-hueso-tenue md:text-xl">
                  {n}
                </span>
                {i < ARTISTAS.length - 1 && (
                  <span aria-hidden="true" className="text-oro/50">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </Revelar>
        </div>
      </section>

      {/* VIDEO */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[960px]">
          <Revelar>
            <p className="kicker">Míralo en vivo</p>
            <h2 className="mt-4 font-display text-3xl text-hueso md:text-4xl">
              Así suena en un evento real
            </h2>
          </Revelar>
          <Revelar variante="zoom" retardo={0.08} className="mt-9">
            <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea-fuerte)]">
              <iframe
                src={`https://www.youtube.com/embed/${cont.videoId}?rel=0`}
                title={`Video de ${s.etiqueta} en ${c.nombre} — Jesús González`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Revelar>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="border-y border-[color:var(--linea)] bg-tinta-2 px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <Revelar>
            <blockquote className="font-display text-2xl leading-snug text-hueso md:text-3xl">
              “Jesús González hizo de nuestra celebración algo mágico. Su
              acordeón nos transportó a la Costa Caribe. Los invitados no
              paraban de bailar. ¡100% recomendado!”
            </blockquote>
            <p className="mt-6 font-semibold text-hueso">
              María Elena Rodríguez
            </p>
            <p className="mt-1 text-sm text-oro-claro">
              Evento privado · cliente real
            </p>
          </Revelar>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <Revelar>
            <p className="kicker">Preguntas frecuentes</p>
            <h2 className="mt-4 font-display text-3xl text-hueso md:text-4xl">
              {s.etiqueta} en {c.nombre}: lo que más me preguntan
            </h2>
          </Revelar>
          <dl className="mt-10 divide-y divide-[color:var(--linea)]">
            {cont.faq.map((qa, i) => (
              <Revelar key={qa.pregunta} retardo={i * 0.04} as="div">
                <div className="py-6">
                  <dt className="font-display text-xl text-hueso">
                    {qa.pregunta}
                  </dt>
                  <dd className="mt-3 leading-relaxed text-hueso-tenue">
                    {qa.respuesta}
                  </dd>
                </div>
              </Revelar>
            ))}
          </dl>
        </div>
      </section>

      {/* ENLACES INTERNOS */}
      <section className="border-t border-[color:var(--linea)] bg-tinta-2 px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <Revelar>
            <h2 className="font-display text-2xl text-hueso md:text-3xl">
              Más opciones de vallenato en vivo
            </h2>
            <p className="mt-3 text-hueso-tenue">
              Conoce los formatos de show o revisa el servicio en otras
              ciudades:
            </p>
          </Revelar>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            <li>
              <a
                href="/contrataciones"
                className="block rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] p-5 text-hueso transition-colors hover:border-oro hover:text-oro"
              >
                Paquetes y formatos de show — parranda, semicompleto y gala
              </a>
            </li>
            {relacionadas.map((r) => {
              const rs = SERVICIOS[r.servicio];
              const rc = CIUDADES[r.ciudad];
              return (
                <li key={r.slug}>
                  <a
                    href={`/${r.slug}`}
                    className="block rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] p-5 text-hueso transition-colors hover:border-oro hover:text-oro"
                  >
                    {rs.etiqueta} en {rc.nombre}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="grano relative px-5 py-24 text-center md:px-10 md:py-28">
        <div className="mx-auto max-w-[760px]">
          <Revelar>
            <h2 className="font-display text-3xl text-hueso md:text-5xl">
              ¿Tu evento es en {c.nombre}? Apartemos la fecha
            </h2>
            <p className="mt-5 text-lg text-hueso-tenue">
              Te paso una propuesta a tu medida por WhatsApp el mismo día. Sin
              compromiso.
            </p>
            <div className="mt-9 flex justify-center">
              <BotonWhatsapp
                mensaje={mensajeWa}
                evento={`${eventoWa}_final`}
                variante="whatsapp"
                tamano="lg"
              >
                Hablar con Jesús por WhatsApp
              </BotonWhatsapp>
            </div>
          </Revelar>
        </div>
      </section>
    </article>
  );
};

export default PlantillaLanding;
