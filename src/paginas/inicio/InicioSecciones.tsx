'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, GraduationCap, Music2, Quote, Users } from 'lucide-react';
import Revelar from '../../componentes/ui/Revelar';
import { MarqueeArtistas, ParallaxSuave } from '../../componentes/contrataciones/Movimiento';
import InicioCtaFinal from './InicioCtaFinal';

const artistasMarquee = [
    'Poncho Zuleta',
    'Jorge Celedón',
    'Felipe Peláez',
    'Jean Carlos Centeno',
    'Elder Dayán Díaz',
    'Rafael Santos',
];

export const artistas = [
    {
        nombre: 'Jorge Celedón',
        rol: 'Cantautor — Rey de la Canción Vallenata',
        imagen: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
    },
    {
        nombre: 'Poncho Zuleta',
        rol: 'Voz líder de Los Hermanos Zuleta',
        imagen: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
    },
    {
        nombre: 'El Pollo Irra',
        rol: 'Acordeonero de la nueva generación',
        imagen: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
    },
];

const SERVICIOS = [
    {
        titulo: 'Shows & Eventos',
        descripcion:
            'Espectáculos de otro nivel para bodas, galas, corporativos y festivales: banda profesional completa (6 a 9 músicos), producción y dirección artística propia. Repertorio a la medida.',
        accion: 'Cotizar mi evento',
        href: '/contrataciones',
        externo: false,
        Icono: Music2,
    },
    {
        titulo: 'Academia Online',
        descripcion:
            'Aprende acordeón vallenato conmigo, paso a paso, desde donde estés. Clases pensadas para que suenes de verdad.',
        accion: 'Conocer la academia',
        href: 'https://academiavallenataonline.com',
        externo: true,
        Icono: GraduationCap,
    },
    {
        titulo: 'Tienda de Acordeones',
        descripcion:
            'Acordeones profesionales seleccionados a mano, con la asesoría de alguien que vive del instrumento todos los días.',
        accion: 'Ver acordeones',
        href: 'https://ventadeacordeones.com',
        externo: true,
        Icono: ArrowUpRight,
    },
];

const TESTIMONIOS = [
    {
        texto:
            'Contratamos a Jesús para la boda y fue el alma de la noche. La gente no quería que parara de tocar.',
        autor: 'Laura M.',
        evento: 'Boda — Valledupar',
    },
    {
        texto:
            'Profesionalismo de principio a fin. Llegó, montó y entregó un show impecable para nuestra empresa.',
        autor: 'Andrés R.',
        evento: 'Evento corporativo — Bogotá',
    },
    {
        texto:
            'Una parranda inolvidable. Se nota que ama lo que hace y que ha estado al lado de los grandes.',
        autor: 'Familia Ospino',
        evento: 'Parranda privada — Santa Marta',
    },
];

const Credibilidad: React.FC = () => (
    <section className="border-b border-[color:var(--linea)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
            <div className="max-w-2xl">
                <Revelar as="p" className="kicker mb-5">
                    Trayectoria
                </Revelar>
                <Revelar
                    as="h2"
                    retardo={0.05}
                    className="font-display text-[clamp(2rem,4.5vw,3.2rem)] leading-tight text-hueso"
                >
                    Ha compartido escenario con las leyendas del vallenato
                </Revelar>
                <Revelar
                    as="p"
                    retardo={0.1}
                    className="mt-5 text-[1.02rem] leading-relaxed text-hueso-tenue"
                >
                    No es una promesa de marketing: es una carrera construida tarima tras
                    tarima, al lado de los artistas que definieron el género.
                </Revelar>

                <Revelar
                    retardo={0.16}
                    className="mt-7 inline-flex items-center gap-3 rounded-[var(--radius-sello)] border border-oro/40 bg-oro/[0.06] px-4 py-3"
                >
                    <Users size={20} strokeWidth={1.7} className="shrink-0 text-oro" aria-hidden="true" />
                    <p className="text-[0.95rem] leading-snug text-hueso">
                        Cada presentación es una{' '}
                        <strong className="font-semibold text-oro">producción de concierto</strong>
                        : orquesta en tarima, sonido cuidado y dirección artística propia.
                    </p>
                </Revelar>
            </div>

            <Revelar retardo={0.2} className="mt-12">
                <MarqueeArtistas nombres={artistasMarquee} />
            </Revelar>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {artistas.map((a, i) => (
                    <Revelar
                        key={a.nombre}
                        retardo={i * 0.08}
                        className="group tarjeta-destello relative overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] transition-[border-color,box-shadow] duration-500 hover:border-[color:var(--oro)]/50 hover:shadow-[var(--shadow-oro)]"
                    >
                        <Image
                            src={a.imagen}
                            alt={`Jesús González junto a ${a.nombre}`}
                            width={1000}
                            height={1000}
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-[var(--ease-salida)] group-hover:scale-[1.04]"
                        />
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(180deg, transparent 40%, rgba(14,11,8,0.9) 100%)',
                            }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="inline-block font-display text-2xl text-hueso">
                                {a.nombre}
                                <span
                                    aria-hidden="true"
                                    className="mt-1 block h-px origin-left scale-x-0 bg-oro transition-transform duration-500 ease-[var(--ease-salida)] group-hover:scale-x-100"
                                />
                            </h3>
                            <p className="mt-1 text-sm text-oro">{a.rol}</p>
                        </div>
                    </Revelar>
                ))}
            </div>
        </div>
    </section>
);

const Servicios: React.FC = () => (
    <section className="border-b border-[color:var(--linea)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
            <div className="max-w-xl">
                <Revelar as="p" className="kicker mb-5">
                    Lo que hago
                </Revelar>
                <Revelar
                    as="h2"
                    retardo={0.05}
                    className="font-display text-[clamp(2rem,4.5vw,3.2rem)] leading-tight text-hueso"
                >
                    Tres formas de vivir el acordeón
                </Revelar>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--linea)] md:grid-cols-3">
                {SERVICIOS.map((s, i) => {
                    const contenido = (
                        <>
                            <s.Icono
                                size={28}
                                className="text-oro transition-transform duration-500 group-hover:-translate-y-1"
                                aria-hidden="true"
                            />
                            <h3 className="mt-7 font-display text-2xl text-hueso">
                                {s.titulo}
                            </h3>
                            <p className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-hueso-tenue">
                                {s.descripcion}
                            </p>
                            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-oro">
                                {s.accion}
                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </span>
                        </>
                    );
                    const clases =
                        'group tarjeta-destello flex h-full flex-col bg-tinta p-9 transition-[background-color,box-shadow] duration-300 hover:bg-tinta-2 hover:shadow-[var(--shadow-oro)]';
                    return (
                        <Revelar key={s.titulo} retardo={i * 0.08}>
                            {s.externo ? (
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener"
                                    className={clases}
                                >
                                    {contenido}
                                </a>
                            ) : (
                                <Link href={s.href} className={clases}>
                                    {contenido}
                                </Link>
                            )}
                        </Revelar>
                    );
                })}
            </div>
        </div>
    </section>
);

const PruebaSocial: React.FC = () => (
    <section className="grano relative overflow-hidden border-b border-[color:var(--linea)]">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Revelar variante="lado" className="order-2 lg:order-1">
              <ParallaxSuave intensidad={20}>
                <figure className="relative overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea-fuerte)]">
                    <Image
                        src="/Imagenes/Parrandas Vallenatas.jpg"
                        alt="Jesús González con su banda profesional en una parranda vallenata"
                        width={825}
                        height={825}
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="aspect-square w-full object-cover"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background:
                                'linear-gradient(180deg, transparent 55%, rgba(14,11,8,0.82) 100%)',
                        }}
                    />
                    <figcaption className="absolute bottom-0 left-0 right-0 p-7">
                        <p className="font-display text-xl text-hueso">
                            Banda profesional completa
                        </p>
                        <p className="mt-1 text-sm text-oro">
                            6 a 9 músicos en tarima, dirigidos por Jesús
                        </p>
                    </figcaption>
                </figure>
              </ParallaxSuave>
            </Revelar>

            <div className="order-1 lg:order-2">
                <Revelar as="p" className="kicker mb-5">
                    Lo que dicen
                </Revelar>
                <Revelar
                    as="h2"
                    retardo={0.05}
                    className="font-display text-[clamp(2rem,4.5vw,3.2rem)] leading-tight text-hueso"
                >
                    La fiesta la recuerdan por la música
                </Revelar>

                <div className="mt-12 flex flex-col gap-px overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--linea)]">
                    {TESTIMONIOS.map((t, i) => (
                        <Revelar key={t.autor} retardo={i * 0.08} className="bg-tinta p-7">
                            <Quote size={22} className="text-oro/70" aria-hidden="true" />
                            <p className="mt-4 text-[1.02rem] leading-relaxed text-hueso">
                                “{t.texto}”
                            </p>
                            <p className="mt-4 text-sm text-hueso-tenue">
                                <span className="font-semibold text-oro">{t.autor}</span> ·{' '}
                                {t.evento}
                            </p>
                        </Revelar>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const InicioSecciones: React.FC = () => (
    <>
        <Credibilidad />
        <Servicios />
        <PruebaSocial />
        <InicioCtaFinal />
    </>
);

export default InicioSecciones;
