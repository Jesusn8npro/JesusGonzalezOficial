'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Mic2, SlidersHorizontal, Music4, Gem, Flame, Users } from 'lucide-react';
import Revelar from '../ui/Revelar';
import { ParallaxSuave } from './Movimiento';

interface Beneficio {
    Icono: React.ElementType;
    titulo: string;
    desc: string;
}

const beneficios: Beneficio[] = [
    {
        Icono: Award,
        titulo: '+15 años en tarima',
        desc: 'Dirección artística que lidero yo mismo en cada presentación, sin delegar.',
    },
    {
        Icono: Mic2,
        titulo: 'Trayectoria con grandes',
        desc: 'He tocado con Poncho Zuleta, Jean Carlos Centeno, Elder Dayán Díaz y Rafael Santos; grabé con Felipe Peláez.',
    },
    {
        Icono: SlidersHorizontal,
        titulo: 'Sonido impecable',
        desc: 'Montaje limpio, equilibrio musical y una estética cuidada de principio a fin.',
    },
    {
        Icono: Music4,
        titulo: 'Repertorio a tu gusto',
        desc: 'Selección curada para bodas, corporativos y galas. Tú eliges, yo lo hago tuyo.',
    },
    {
        Icono: Gem,
        titulo: 'Formato de élite',
        desc: 'Músicos con presentación impecable y atención premium durante todo el show.',
    },
    {
        Icono: Flame,
        titulo: 'Energía con elegancia',
        desc: 'La interacción justa para encender la fiesta sin perder el nivel del evento.',
    },
];

const Beneficios: React.FC = () => {
    return (
        <section
            id="beneficios"
            className="grano relative border-y border-[color:var(--linea)] bg-tinta-2 px-5 py-20 md:px-10 md:py-28"
        >
            <div className="mx-auto max-w-[1240px]">
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <div>
                        <Revelar as="p" className="kicker">
                            Por qué contratarme
                        </Revelar>
                        <Revelar as="h2" retardo={0.05} className="mt-4 font-display text-4xl text-hueso md:text-[3rem]">
                            No llega un acordeonero: llega una banda profesional
                        </Revelar>
                        <Revelar as="p" retardo={0.1} className="mt-6 text-lg leading-relaxed text-hueso-tenue">
                            Contratarme es contratar un formato completo de{' '}
                            <strong className="font-semibold text-hueso">6 a 9 músicos</strong> bajo
                            mi dirección artística. Puesta en escena, sonido y energía de concierto
                            para llevar tu evento al siguiente nivel.
                        </Revelar>

                        <Revelar
                            retardo={0.16}
                            className="mt-7 flex items-center gap-3 rounded-[var(--radius-sello)] border border-oro/40 bg-oro/[0.06] px-4 py-3"
                        >
                            <Users size={20} strokeWidth={1.7} className="shrink-0 text-oro" aria-hidden="true" />
                            <p className="text-[0.95rem] leading-snug text-hueso">
                                Formato profesional de{' '}
                                <strong className="font-semibold text-oro">6–9 músicos</strong>{' '}
                                en cada show — nunca pista, nunca solo.
                            </p>
                        </Revelar>

                        <Revelar variante="zoom" retardo={0.22} className="mt-10">
                          <ParallaxSuave intensidad={18}>
                            <figure className="relative overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea-fuerte)]">
                                <Image
                                    src="/Imagenes/Jesus Gonzalez en concierto.jpg"
                                    alt="Jesús González con su banda profesional en concierto"
                                    width={520}
                                    height={420}
                                    sizes="(min-width: 1024px) 40vw, 100vw"
                                    className="aspect-[5/4] w-full object-cover"
                                />
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0"
                                    style={{
                                        background:
                                            'linear-gradient(180deg, transparent 55%, rgba(14,11,8,0.82) 100%)',
                                    }}
                                />
                                <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="font-display text-lg text-hueso">
                                        Banda completa en tarima
                                    </p>
                                    <p className="mt-1 text-sm text-oro-claro">
                                        Energía de concierto en tu evento
                                    </p>
                                </figcaption>
                            </figure>
                          </ParallaxSuave>
                        </Revelar>
                    </div>

                    <div className="grid gap-px overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea)] bg-[color:var(--linea)] sm:grid-cols-2">
                        {beneficios.map((b, i) => {
                            const { Icono } = b;
                            return (
                                <Revelar
                                    key={b.titulo}
                                    retardo={i * 0.06}
                                    className="flex flex-col gap-4 bg-tinta-2 p-7 transition-colors duration-500 hover:bg-tinta-3"
                                >
                                    <span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sello)] border border-[color:var(--linea)] text-oro">
                                        <Icono size={22} strokeWidth={1.6} aria-hidden="true" />
                                    </span>
                                    <div>
                                        <h3 className="font-display text-xl text-hueso">{b.titulo}</h3>
                                        <p className="mt-2 text-[0.95rem] leading-relaxed text-hueso-tenue">
                                            {b.desc}
                                        </p>
                                    </div>
                                </Revelar>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Beneficios;
