'use client';

import React from 'react';
import Image from 'next/image';
import Revelar from '../ui/Revelar';
import { MarqueeArtistas } from './Movimiento';

interface Colaboracion {
    nombre: string;
    detalle: string;
    imagen: string;
}

const colaboraciones: Colaboracion[] = [
    {
        nombre: 'Poncho Zuleta',
        detalle: 'Escenario compartido',
        imagen: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
    },
    {
        nombre: 'Jorge Celedón',
        detalle: 'Show en vivo',
        imagen: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
    },
    {
        nombre: 'Felipe Peláez',
        detalle: 'Grabación · El Pollo Irra',
        imagen: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
    },
    {
        nombre: 'En concierto',
        detalle: 'Tarima profesional',
        imagen: '/Imagenes/Jesus Gonzalez en concierto.jpg',
    },
];

const nombres = [
    'Poncho Zuleta',
    'Jorge Celedón',
    'Felipe Peláez',
    'Jean Carlos Centeno',
    'Elder Dayán Díaz',
    'Rafael Santos',
];

const Credibilidad: React.FC = () => {
    return (
        <section
            className="grano relative border-y border-[color:var(--linea)] bg-tinta-2 px-5 py-16 md:px-10 md:py-20"
            aria-label="Trayectoria con artistas de talla nacional"
        >
            <div className="mx-auto max-w-[1240px]">
                <Revelar className="mx-auto max-w-2xl text-center">
                    <p className="kicker">Trayectoria que respalda</p>
                    <h2 className="mt-4 font-display text-3xl text-hueso md:text-[2.5rem]">
                        Ha compartido escenario y estudio con
                    </h2>
                </Revelar>

                <Revelar retardo={0.08} className="mt-9">
                    <MarqueeArtistas nombres={nombres} />
                </Revelar>

                <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
                    {colaboraciones.map((c, i) => (
                        <Revelar key={c.nombre} retardo={i * 0.07} variante="zoom">
                            <figure className="group relative overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)]">
                                <Image
                                    src={c.imagen}
                                    alt={`Jesús González con ${c.nombre}`}
                                    width={400}
                                    height={300}
                                    sizes="(min-width: 768px) 25vw, 50vw"
                                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[var(--ease-salida)] group-hover:scale-[1.05]"
                                />
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0"
                                    style={{
                                        background:
                                            'linear-gradient(180deg, transparent 40%, rgba(14,11,8,0.85) 100%)',
                                    }}
                                />
                                <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                                    <p className="inline-block font-display text-base text-hueso">
                                        {c.nombre}
                                        <span
                                            aria-hidden="true"
                                            className="mt-1 block h-px origin-left scale-x-0 bg-oro transition-transform duration-500 ease-[var(--ease-salida)] group-hover:scale-x-100"
                                        />
                                    </p>
                                    <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-oro-claro">
                                        {c.detalle}
                                    </p>
                                </figcaption>
                            </figure>
                        </Revelar>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Credibilidad;
