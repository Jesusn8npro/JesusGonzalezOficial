'use client';

import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';
import { mensajesWhatsApp } from '../../utilidades/whatsapp';
import BotonWhatsapp from '../ui/BotonWhatsapp';
import Revelar from '../ui/Revelar';
import TarjetaTilt from '../ui/TarjetaTilt';
import { Contador, ParallaxSuave } from './Movimiento';

const Hero: React.FC = () => {
    return (
        <section className="grano relative isolate overflow-hidden bg-tinta px-5 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
            {/* Resplandor cálido de fondo */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 top-0 h-[620px] w-[620px] rounded-full opacity-60 blur-[120px]"
                style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.22), transparent 65%)' }}
            />

            <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                <div className="order-2 lg:order-1">
                    <Revelar as="p" className="kicker mb-6">
                        Acordeón vallenato · Eventos premium en Colombia
                    </Revelar>

                    <Revelar as="h1" retardo={0.05}>
                        <span className="block font-display text-[2.6rem] leading-[1.02] text-hueso sm:text-6xl lg:text-[4.4rem]">
                            El acordeón que vuelve
                            <span className="block text-oro"> inolvidable tu evento.</span>
                        </span>
                    </Revelar>

                    <Revelar as="p" retardo={0.12} className="mt-7 max-w-xl text-lg leading-relaxed text-hueso-tenue">
                        Soy <strong className="font-semibold text-hueso">Jesús González</strong>. Más de 15 años
                        llevando el vallenato de verdad a bodas, eventos corporativos y galas. He compartido
                        escenario y grabación con artistas de talla nacional. Si tu celebración merece música
                        que la gente recuerde, hablemos.
                    </Revelar>

                    <Revelar
                        retardo={0.16}
                        className="mt-6 inline-flex items-center gap-3 rounded-[var(--radius-sello)] border border-oro/40 bg-oro/[0.06] px-4 py-3"
                    >
                        <Users size={20} strokeWidth={1.7} className="shrink-0 text-oro" aria-hidden="true" />
                        <p className="text-[0.95rem] leading-snug text-hueso">
                            <strong className="font-semibold text-oro">Producción de concierto completa</strong>
                            : orquesta profesional en tarima, dirigida por Jesús en cada show.
                        </p>
                    </Revelar>

                    <Revelar retardo={0.2} className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                        <BotonWhatsapp
                            mensaje={mensajesWhatsApp.hero}
                            evento="Hero_Button_Click"
                            variante="whatsapp"
                            tamano="lg"
                        >
                            Cotizar mi evento por WhatsApp
                        </BotonWhatsapp>
                        <span className="text-sm text-hueso-tenue">
                            Te respondo personalmente, sin intermediarios.
                        </span>
                    </Revelar>

                    <Revelar
                        retardo={0.28}
                        className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--linea)]"
                    >
                        {[
                            { valor: 15, prefijo: '+', sufijo: '', label: 'Años en tarima' },
                            { valor: 9, prefijo: '6–', sufijo: '', label: 'Músicos en banda' },
                            { valor: 100, prefijo: '', sufijo: '%', label: 'Dirección propia' },
                        ].map((m) => (
                            <div key={m.label} className="bg-tinta-2 px-4 py-5 text-center">
                                <Contador
                                    valor={m.valor}
                                    prefijo={m.prefijo}
                                    sufijo={m.sufijo}
                                    className="block font-display text-2xl text-oro"
                                />
                                <div className="mt-1 text-[0.72rem] uppercase tracking-[0.14em] text-hueso-tenue">
                                    {m.label}
                                </div>
                            </div>
                        ))}
                    </Revelar>
                </div>

                <div className="order-1 lg:order-2">
                    <Revelar variante="zoom" className="mx-auto max-w-md lg:max-w-none">
                      <ParallaxSuave intensidad={22}>
                        <TarjetaTilt
                            className="relative overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea-fuerte)]"
                            intensidad={5}
                        >
                            <Image
                                src="/Imagenes/Foto de perfil para JESUS GONZALEZ.jpg"
                                alt="Jesús González, acordeonista vallenato profesional"
                                width={620}
                                height={760}
                                priority
                                sizes="(min-width: 1024px) 46vw, (min-width: 640px) 28rem, 100vw"
                                className="block h-full w-full object-cover"
                            />
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0"
                                style={{
                                    background:
                                        'linear-gradient(180deg, transparent 45%, rgba(14,11,8,0.82) 100%)',
                                }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="font-display text-xl text-hueso">Jesús González</p>
                                <p className="mt-1 text-sm text-oro-claro">
                                    Maestro del acordeón vallenato
                                </p>
                            </div>
                        </TarjetaTilt>
                      </ParallaxSuave>
                    </Revelar>
                </div>
            </div>
        </section>
    );
};

export default Hero;
