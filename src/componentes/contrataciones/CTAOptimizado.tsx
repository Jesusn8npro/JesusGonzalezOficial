'use client';

import React from 'react';
import { Music4, MessageCircle, ShieldCheck } from 'lucide-react';
import { mensajesWhatsApp } from '../../utilidades/whatsapp';
import BotonWhatsapp from '../ui/BotonWhatsapp';
import Revelar from '../ui/Revelar';

const garantias = [
    { Icono: Music4, texto: 'Repertorio armado contigo, a la medida de tu evento' },
    { Icono: MessageCircle, texto: 'Hablas directo conmigo por WhatsApp, sin intermediarios' },
    { Icono: ShieldCheck, texto: 'Cumplimiento y dirección artística profesional' },
];

const CTAOptimizado: React.FC = () => {
    return (
        <section
            id="contacto"
            className="grano relative overflow-hidden border-t border-[color:var(--linea)] bg-tinta-2 px-5 py-24 md:px-10 md:py-32"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-50 blur-[130px]"
                style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.22), transparent 65%)' }}
            />

            <div className="relative mx-auto max-w-3xl text-center">
                <Revelar as="p" className="kicker">
                    Tu fecha te está esperando
                </Revelar>
                <Revelar as="h2" retardo={0.05} className="mt-5 font-display text-4xl text-hueso md:text-[3.4rem] md:leading-[1.05]">
                    Hagamos de tu evento algo que la gente recuerde
                </Revelar>
                <Revelar as="p" retardo={0.1} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-hueso-tenue">
                    Cuéntame tu fecha y tu idea. Te respondo personalmente y armamos juntos la propuesta
                    perfecta para tu celebración.
                </Revelar>

                <Revelar retardo={0.18} className="mt-10 flex justify-center">
                    <BotonWhatsapp
                        mensaje={mensajesWhatsApp.cta}
                        evento="CTA_WhatsApp_Click"
                        variante="whatsapp"
                        tamano="lg"
                    >
                        Reservar mi fecha por WhatsApp
                    </BotonWhatsapp>
                </Revelar>

                <Revelar
                    retardo={0.26}
                    className="mx-auto mt-14 grid max-w-2xl gap-px overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--linea)] sm:grid-cols-3"
                >
                    {garantias.map(({ Icono, texto }) => (
                        <div
                            key={texto}
                            className="flex flex-col items-center gap-3 bg-tinta-2 px-5 py-7 text-center"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sello)] border border-[color:var(--linea)] text-oro">
                                <Icono size={20} strokeWidth={1.6} aria-hidden="true" />
                            </span>
                            <span className="text-sm leading-relaxed text-hueso-tenue">{texto}</span>
                        </div>
                    ))}
                </Revelar>
            </div>
        </section>
    );
};

export default CTAOptimizado;
