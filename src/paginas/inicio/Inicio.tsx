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
        <div className="pagina-conectada bg-tinta text-hueso">
            {/* ===== HERO CINEMATOGRÁFICO ===== */}
            <section className="relative grano overflow-hidden border-b border-[color:var(--linea)]">
                {/* Fondo: foto de concierto a sangre + velo de tinta */}
                <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden="true">
                    <Image
                        src="/Imagenes/Jesus Gonzalez en concierto.jpg"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="fondo-hero-foto object-cover object-[70%_20%] opacity-[0.16] saturate-[0.85]"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'linear-gradient(105deg, var(--tinta) 30%, color-mix(in srgb, var(--tinta) 72%, transparent) 62%, color-mix(in srgb, var(--tinta) 88%, transparent) 100%)',
                        }}
                    />
                    <div
                        className="absolute inset-x-0 bottom-0 h-40"
                        style={{ background: 'linear-gradient(180deg, transparent, var(--tinta))' }}
                    />
                </div>
                {/* Auroras doradas en movimiento */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                    <div
                        className="aurora"
                        style={{ top: '-12%', right: '8%', width: '42vw', height: '42vw', background: 'color-mix(in srgb, var(--oro) 16%, transparent)' }}
                    />
                    <div
                        className="aurora"
                        style={{ bottom: '-18%', left: '-6%', width: '34vw', height: '34vw', background: 'color-mix(in srgb, var(--oro-hondo) 20%, transparent)', animationDelay: '-7s' }}
                    />
                </div>
                <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    <div>
                        <Revelar as="p" className="kicker mb-6">
                            Artista vallenato · Shows de talla nacional
                        </Revelar>
                        <Revelar
                            as="h1"
                            retardo={0.05}
                            className="font-display text-[clamp(2.8rem,7vw,5.4rem)] leading-[0.98] text-hueso"
                        >
                            Jesús González
                            <span className="texto-oro-vivo mt-3 block text-[clamp(1.1rem,2.4vw,1.7rem)] font-normal italic">
                                Maestro del acordeón vallenato
                            </span>
                        </Revelar>
                        <Revelar
                            as="p"
                            retardo={0.12}
                            className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-hueso-tenue"
                        >
                            Una marca musical con más de 15 años en tarima junto a las
                            leyendas del género. Espectáculos en vivo de otro nivel para
                            bodas, galas, eventos corporativos y grandes celebraciones —
                            producción, dirección artística y una banda que se siente.
                        </Revelar>

                        <Revelar
                            retardo={0.16}
                            className="mt-6 inline-flex items-center gap-3 rounded-[var(--radius-sello)] border border-oro/40 bg-oro/[0.06] px-4 py-3"
                        >
                            <Users size={20} strokeWidth={1.7} className="shrink-0 text-oro" aria-hidden="true" />
                            <p className="text-[0.95rem] leading-snug text-hueso">
                                <strong className="font-semibold text-oro">Producción completa en vivo</strong>
                                : orquesta profesional en tarima bajo la dirección artística de Jesús González.
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
                        <div className="relative w-full max-w-md">
                            <TarjetaTilt
                                className="tarjeta-destello relative w-full overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea-fuerte)] shadow-[var(--shadow-oro)]"
                                intensidad={6}
                            >
                                <Image
                                    src="/Imagenes/Jesus-Gonzalez-Vallenato-Exclusivo.jpg"
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

                            {/* Fotos con las leyendas, flotando sobre el marco */}
                            <div
                                className="flota-suave absolute -left-14 -top-8 hidden w-36 overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea-fuerte)] shadow-[var(--shadow-suave)] lg:block"
                                style={{ '--rotacion': '-5deg' } as React.CSSProperties}
                            >
                                <Image
                                    src="/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg"
                                    alt="Jesús González junto a Jorge Celedón"
                                    width={288}
                                    height={288}
                                    sizes="9rem"
                                    className="aspect-square w-full object-cover"
                                />
                                <p className="absolute bottom-0 left-0 right-0 bg-tinta/75 px-2 py-1 text-center text-[0.6rem] uppercase tracking-[0.14em] text-oro-claro backdrop-blur-sm">
                                    Con Jorge Celedón
                                </p>
                            </div>
                            <div
                                className="flota-suave absolute -bottom-10 -right-10 hidden w-40 overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea-fuerte)] shadow-[var(--shadow-suave)] lg:block"
                                style={{ '--rotacion': '4deg', animationDelay: '-3.5s' } as React.CSSProperties}
                            >
                                <Image
                                    src="/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg"
                                    alt="Jesús González junto a Poncho Zuleta"
                                    width={320}
                                    height={320}
                                    sizes="10rem"
                                    className="aspect-square w-full object-cover"
                                />
                                <p className="absolute bottom-0 left-0 right-0 bg-tinta/75 px-2 py-1 text-center text-[0.6rem] uppercase tracking-[0.14em] text-oro-claro backdrop-blur-sm">
                                    Con Poncho Zuleta
                                </p>
                            </div>
                        </div>
                      </ParallaxSuave>
                    </Revelar>
                </div>
            </section>

            <InicioSecciones />
        </div>
    );
};

export default Inicio;
