'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Revelar from '../../componentes/ui/Revelar';
import BotonWhatsapp from '../../componentes/ui/BotonWhatsapp';
import { mensajesWhatsApp } from '../../utilidades/whatsapp';

/**
 * Cierre de conversión de la Home. Extraído como sub-componente
 * co-localizado para mantener InicioSecciones bajo el límite de líneas.
 */
const InicioCtaFinal: React.FC = () => (
    <section className="relative grano overflow-hidden">
        <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-20"
            aria-hidden="true"
            style={{
                backgroundImage:
                    'radial-gradient(55% 60% at 50% 0%, rgba(201,168,76,0.28), transparent 65%)',
            }}
        />
        <div className="mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
            <Revelar as="p" className="kicker mb-6">
                Reserva tu fecha
            </Revelar>
            <Revelar
                as="h2"
                retardo={0.05}
                className="font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.02] text-hueso"
            >
                ¿Listo para que tu evento suene a vallenato de verdad?
            </Revelar>
            <Revelar
                as="p"
                retardo={0.1}
                className="mx-auto mt-7 max-w-xl text-[1.05rem] leading-relaxed text-hueso-tenue"
            >
                Cuéntame qué celebras y armamos juntos el show perfecto, con banda
                profesional completa. Respondo personalmente por WhatsApp.
            </Revelar>
            <Revelar
                retardo={0.16}
                className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
                <BotonWhatsapp
                    mensaje={mensajesWhatsApp.cta}
                    evento="inicio_cta_final_whatsapp"
                    variante="whatsapp"
                    tamano="lg"
                >
                    Reservar por WhatsApp
                </BotonWhatsapp>
                <Link
                    href="/contrataciones"
                    className="group inline-flex items-center justify-center gap-2 rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] px-8 py-4 text-[1.05rem] font-semibold text-hueso transition-colors duration-300 hover:border-oro hover:text-oro"
                >
                    Ver planes y precios
                    <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </Link>
            </Revelar>
        </div>
    </section>
);

export default InicioCtaFinal;
