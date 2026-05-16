'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Users } from 'lucide-react';
import Revelar from '../../componentes/ui/Revelar';
import TarjetaTilt from '../../componentes/ui/TarjetaTilt';
import BotonWhatsapp from '../../componentes/ui/BotonWhatsapp';
import { mensajesWhatsApp } from '../../utilidades/whatsapp';
import { Contador, ParallaxSuave } from '../../componentes/contrataciones/Movimiento';
import InicioSecciones from './InicioSecciones';

const Inicio: React.FC = () => {
    return (
        <div className="bg-tinta text-hueso">
            {/* ===== HERO ===== */}
            <section className="relative grano overflow-hidden border-b border-[color:var(--linea)]">
                <div
                    className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
                    aria-hidden="true"
                    style={{
                        backgroundImage:
                            'radial-gradient(60% 50% at 75% 18%, rgba(201,168,76,0.22), transparent 60%)',
                    }}
                />
                <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    <div>
                        <Revelar as="p" className="kicker mb-6">
                            Acordeón vallenato · Colombia
                        </Revelar>
                        <Revelar
                            as="h1"
                            retardo={0.05}
                            className="font-display text-[clamp(2.8rem,7vw,5.4rem)] leading-[0.98] text-hueso"
                        >
                            Jesús González
                            <span className="mt-3 block text-[clamp(1.1rem,2.4vw,1.7rem)] font-normal italic text-oro">
                                Maestro del acordeón vallenato
                            </span>
                        </Revelar>
                        <Revelar
                            as="p"
                            retardo={0.12}
                            className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-hueso-tenue"
                        >
                            Más de 15 años llevando el vallenato a escenarios junto a las
                            leyendas del género. Cada presentación es un acordeón que cuenta
                            historias y enciende cualquier celebración.
                        </Revelar>

                        <Revelar
                            retardo={0.16}
                            className="mt-6 inline-flex items-center gap-3 rounded-[var(--radius-sello)] border border-oro/40 bg-oro/[0.06] px-4 py-3"
                        >
                            <Users size={20} strokeWidth={1.7} className="shrink-0 text-oro" aria-hidden="true" />
                            <p className="text-[0.95rem] leading-snug text-hueso">
                                Llego con{' '}
                                <strong className="font-semibold text-oro">banda profesional completa</strong>{' '}
                                <span className="text-hueso-tenue">(6 a 9 músicos)</span> para llevar tu evento al siguiente nivel.
                            </p>
                        </Revelar>

                        <Revelar
                            retardo={0.2}
                            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
                        >
                            <BotonWhatsapp
                                mensaje={mensajesWhatsApp.hero}
                                evento="inicio_hero_whatsapp"
                                variante="whatsapp"
                                tamano="lg"
                            >
                                Cotizar mi evento
                            </BotonWhatsapp>
                            <Link
                                href="/videos"
                                className="group inline-flex items-center justify-center gap-2 rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] px-8 py-4 text-[1.05rem] font-semibold text-hueso transition-colors duration-300 hover:border-oro hover:text-oro"
                            >
                                Ver presentaciones
                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>
                        </Revelar>

                        <Revelar
                            retardo={0.28}
                            className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-[color:var(--linea)] pt-8"
                        >
                            {[
                                { valor: 15, prefijo: '', sufijo: '+', t: 'Años en tarima' },
                                { valor: 200, prefijo: '', sufijo: '+', t: 'Shows realizados' },
                                { valor: 9, prefijo: '6–', sufijo: '', t: 'Músicos en banda' },
                            ].map((s) => (
                                <div key={s.t}>
                                    <Contador
                                        valor={s.valor}
                                        prefijo={s.prefijo}
                                        sufijo={s.sufijo}
                                        className="block font-display text-3xl text-oro"
                                    />
                                    <div className="mt-1 text-sm tracking-wide text-hueso-tenue">
                                        {s.t}
                                    </div>
                                </div>
                            ))}
                        </Revelar>
                    </div>

                    <Revelar variante="zoom" retardo={0.15} className="lg:justify-self-end">
                      <ParallaxSuave intensidad={22}>
                        <TarjetaTilt
                            className="relative w-full max-w-md overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea-fuerte)] shadow-[var(--shadow-oro)]"
                            intensidad={6}
                        >
                            <Image
                                src="/Imagenes/Jesus Gonzalez en concierto.jpg"
                                alt="Jesús González tocando el acordeón en concierto"
                                width={1000}
                                height={1000}
                                priority
                                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 28rem, 100vw"
                                className="aspect-square w-full object-cover"
                            />
                            <div
                                className="pointer-events-none absolute inset-0"
                                style={{
                                    background:
                                        'linear-gradient(180deg, transparent 45%, rgba(14,11,8,0.85) 100%)',
                                }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-7">
                                <p className="kicker">En vivo</p>
                                <p className="mt-2 font-display text-xl text-hueso">
                                    Acordeón que se siente, no solo se escucha
                                </p>
                            </div>
                        </TarjetaTilt>
                      </ParallaxSuave>
                    </Revelar>
                </div>
            </section>

            <InicioSecciones />
        </div>
    );
};

export default Inicio;
