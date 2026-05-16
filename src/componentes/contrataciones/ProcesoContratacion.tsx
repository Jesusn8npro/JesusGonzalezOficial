'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { mensajesWhatsApp } from '../../utilidades/whatsapp';
import BotonWhatsapp from '../ui/BotonWhatsapp';
import Revelar from '../ui/Revelar';

interface Paso {
    titulo: string;
    explicacion: string;
    fondo: string;
}

const pasos: Paso[] = [
    {
        titulo: 'Me escribes por WhatsApp',
        explicacion:
            'Cuéntame la fecha, la ciudad y qué tipo de evento es. Te respondo yo mismo, sin formularios eternos ni call centers.',
        fondo: '/Imagenes/Jesus Gonzalez en concierto.jpg',
    },
    {
        titulo: 'Armamos tu propuesta',
        explicacion:
            'Definimos el formato ideal (premium, VIP o gala), el repertorio y la logística según tu venue. Te envío una cotización a tu medida.',
        fondo: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
    },
    {
        titulo: 'Apartas tu fecha',
        explicacion:
            'Confirmamos condiciones y reservamos el día. A partir de ahí esa fecha es tuya y la bloqueo en mi agenda.',
        fondo: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
    },
    {
        titulo: 'Vivimos el show',
        explicacion:
            'Llego con mi formato, montamos, y le doy a tu evento la música que la gente va a recordar. Tú solo disfrutas.',
        fondo: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
    },
];

const ProcesoContratacion: React.FC = () => {
    const [activo, setActivo] = useState(0);
    const paso = pasos[activo];

    return (
        <section className="bg-tinta px-5 py-20 md:px-10 md:py-28">
            <div className="mx-auto max-w-[1240px]">
                <Revelar className="max-w-2xl">
                    <p className="kicker">Así de simple</p>
                    <h2 className="mt-4 font-display text-4xl text-hueso md:text-[3rem]">
                        De la idea al show en cuatro pasos
                    </h2>
                    <p className="mt-5 text-lg text-hueso-tenue">
                        Sin trámites complicados. Todo lo coordinamos por WhatsApp, directo conmigo.
                    </p>
                </Revelar>

                <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <ol className="flex flex-col">
                        {pasos.map((p, i) => {
                            const esActivo = i === activo;
                            return (
                                <li key={p.titulo}>
                                    <button
                                        type="button"
                                        onClick={() => setActivo(i)}
                                        aria-current={esActivo ? 'step' : undefined}
                                        className={`flex w-full items-center gap-5 border-l-2 py-5 pl-6 pr-4 text-left transition-colors duration-400 ${
                                            esActivo
                                                ? 'border-[color:var(--oro)]'
                                                : 'border-[color:var(--linea)] hover:border-[color:var(--linea-fuerte)]'
                                        }`}
                                    >
                                        <span
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-display text-lg transition-colors ${
                                                esActivo
                                                    ? 'border-oro bg-oro text-tinta'
                                                    : 'border-[color:var(--linea-fuerte)] text-hueso-tenue'
                                            }`}
                                        >
                                            {i + 1}
                                        </span>
                                        <span
                                            className={`font-display text-xl transition-colors ${
                                                esActivo ? 'text-hueso' : 'text-hueso-tenue'
                                            }`}
                                        >
                                            {p.titulo}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ol>

                    <div className="overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea)] bg-tinta-2">
                        <div className="relative">
                            <Image
                                key={paso.fondo}
                                src={paso.fondo}
                                alt={`Paso: ${paso.titulo}`}
                                width={620}
                                height={360}
                                sizes="(min-width: 1024px) 55vw, 100vw"
                                className="aspect-video w-full object-cover"
                            />
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0"
                                style={{
                                    background:
                                        'linear-gradient(180deg, transparent 45%, rgba(14,11,8,0.9) 100%)',
                                }}
                            />
                        </div>
                        <div className="p-7 md:p-9">
                            <p className="kicker">Paso {activo + 1} de 4</p>
                            <h3 className="mt-3 font-display text-2xl text-hueso">{paso.titulo}</h3>
                            <p className="mt-4 text-base leading-relaxed text-hueso-tenue">
                                {paso.explicacion}
                            </p>

                            <div className="mt-7 flex flex-wrap items-center gap-3">
                                {activo > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => setActivo((v) => v - 1)}
                                        className="rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] px-5 py-2.5 text-sm font-semibold text-hueso transition-colors hover:border-oro hover:text-oro"
                                    >
                                        ← Anterior
                                    </button>
                                )}
                                {activo < pasos.length - 1 ? (
                                    <button
                                        type="button"
                                        onClick={() => setActivo((v) => v + 1)}
                                        className="rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] px-5 py-2.5 text-sm font-semibold text-hueso transition-colors hover:border-oro hover:text-oro"
                                    >
                                        Siguiente paso →
                                    </button>
                                ) : (
                                    <BotonWhatsapp
                                        mensaje={mensajesWhatsApp.proceso}
                                        evento="Proceso_WhatsApp_Click"
                                        variante="whatsapp"
                                        tamano="md"
                                    >
                                        Empezar ahora por WhatsApp
                                    </BotonWhatsapp>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcesoContratacion;
