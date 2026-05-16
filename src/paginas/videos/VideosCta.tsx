'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Revelar from '../../componentes/ui/Revelar';
import BotonWhatsapp from '../../componentes/ui/BotonWhatsapp';
import { mensajesWhatsApp } from '../../utilidades/whatsapp';

const VideosCta: React.FC = () => (
    <section className="relative grano overflow-hidden">
        <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-20"
            aria-hidden="true"
            style={{
                backgroundImage:
                    'radial-gradient(55% 60% at 50% 0%, rgba(201,168,76,0.28), transparent 65%)',
            }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
                <Revelar as="p" className="kicker mb-6">
                    Lleva esto a tu evento
                </Revelar>
                <Revelar
                    as="h2"
                    retardo={0.05}
                    className="font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.04] text-hueso"
                >
                    ¿Te gustó lo que viste?
                </Revelar>
                <Revelar
                    as="p"
                    retardo={0.1}
                    className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-hueso-tenue"
                >
                    La misma energía y profesionalismo que ves aquí, en vivo para tu
                    celebración. Cuéntame qué tienes en mente.
                </Revelar>
                <Revelar
                    retardo={0.16}
                    className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                    <BotonWhatsapp
                        mensaje={mensajesWhatsApp.cta}
                        evento="videos_cta_whatsapp"
                        variante="whatsapp"
                        tamano="lg"
                    >
                        Contratar ahora
                    </BotonWhatsapp>
                    <Link
                        href="/contrataciones"
                        className="group inline-flex items-center justify-center gap-2 rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] px-8 py-4 text-[1.05rem] font-semibold text-hueso transition-colors duration-300 hover:border-oro hover:text-oro"
                    >
                        Ver planes
                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </Link>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center justify-center gap-2 text-[1.05rem] font-semibold text-hueso-tenue underline-offset-4 transition-colors duration-300 hover:text-oro hover:underline"
                    >
                        Solicitar información
                    </Link>
                </Revelar>
            </div>

            <Revelar variante="zoom" retardo={0.12} className="lg:justify-self-end">
                <div className="overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea-fuerte)]">
                    <Image
                        src="/Imagenes/Jesus Fondo Blanco.png"
                        alt="Jesús González con su acordeón"
                        width={1179}
                        height={1500}
                        sizes="24rem"
                        className="w-full max-w-sm object-cover"
                    />
                </div>
            </Revelar>
        </div>
    </section>
);

export default VideosCta;
