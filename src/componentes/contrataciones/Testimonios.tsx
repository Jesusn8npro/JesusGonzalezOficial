'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Revelar from '../ui/Revelar';

interface Testimonio {
    nombre: string;
    evento: string;
    comentario: string;
    calificacion: number;
    imagen: string;
    fecha: string;
}

const testimonios: Testimonio[] = [
    {
        nombre: 'María Elena Rodríguez',
        evento: 'Boda · Bogotá',
        comentario:
            'Jesús González hizo de nuestra boda algo mágico. Su acordeón nos transportó a la Costa Caribe. Los invitados no paraban de bailar. ¡100% recomendado!',
        calificacion: 5,
        imagen: '/Imagenes/Jesus Gonzalez en concierto.jpg',
        fecha: 'Diciembre 2024',
    },
    {
        nombre: 'Carlos Andrés Mendoza',
        evento: 'Evento corporativo · Medellín',
        comentario:
            'Lo contratamos para nuestro evento de empresa y fue espectacular. Profesionalismo total, llegó puntual y el show superó nuestras expectativas.',
        calificacion: 5,
        imagen: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
        fecha: 'Noviembre 2024',
    },
    {
        nombre: 'Ana Sofía Jiménez',
        evento: 'Cumpleaños 50 · Cali',
        comentario:
            'Mi papá es fanático del vallenato y Jesús le hizo el día más especial. Tocó todas sus canciones favoritas. ¡Gracias por hacer inolvidable su cumpleaños!',
        calificacion: 5,
        imagen: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
        fecha: 'Octubre 2024',
    },
    {
        nombre: 'Roberto Silva',
        evento: 'Fiesta empresarial · Barranquilla',
        comentario:
            'Excelente servicio y calidad musical. Jesús González es un verdadero maestro del acordeón. Nuestros clientes quedaron encantados con la presentación.',
        calificacion: 5,
        imagen: '/Imagenes/Jesus-Gonzalez-Vallenato-Exclusivo.jpg',
        fecha: 'Septiembre 2024',
    },
];

const Testimonios: React.FC = () => {
    const [activo, setActivo] = useState(0);

    const ir = (i: number) => setActivo((i + testimonios.length) % testimonios.length);

    useEffect(() => {
        const t = setInterval(() => setActivo((v) => (v + 1) % testimonios.length), 6500);
        return () => clearInterval(t);
    }, []);

    const t = testimonios[activo];

    return (
        <section id="testimonios" className="bg-tinta px-5 py-20 md:px-10 md:py-28">
            <div className="mx-auto max-w-[1100px]">
                <Revelar className="max-w-2xl">
                    <p className="kicker">Lo que dicen quienes ya me contrataron</p>
                    <h2 className="mt-4 font-display text-4xl text-hueso md:text-[3rem]">
                        Eventos reales, gente feliz
                    </h2>
                </Revelar>

                <Revelar variante="zoom" retardo={0.08} className="mt-12">
                    <figure className="grid gap-8 overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea)] bg-tinta-2 md:grid-cols-[0.8fr_1.2fr]">
                        <div className="relative min-h-[260px]">
                            <Image
                                key={t.imagen}
                                src={t.imagen}
                                alt={`Evento de ${t.nombre}`}
                                fill
                                sizes="(min-width: 768px) 40vw, 100vw"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0"
                                style={{
                                    background:
                                        'linear-gradient(110deg, transparent 40%, rgba(23,18,12,0.95) 100%)',
                                }}
                            />
                        </div>

                        <div className="flex flex-col justify-center p-8 md:p-12">
                            <div className="flex gap-1 text-oro" aria-label={`${t.calificacion} de 5 estrellas`}>
                                {Array.from({ length: t.calificacion }).map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                                ))}
                            </div>

                            <blockquote className="mt-5 font-display text-xl leading-snug text-hueso md:text-2xl">
                                “{t.comentario}”
                            </blockquote>

                            <figcaption className="mt-7">
                                <p className="font-semibold text-hueso">{t.nombre}</p>
                                <p className="mt-1 text-sm text-oro-claro">{t.evento}</p>
                                <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-hueso-tenue">
                                    {t.fecha}
                                </p>
                            </figcaption>
                        </div>
                    </figure>
                </Revelar>

                <div className="mt-8 flex items-center justify-center gap-6">
                    <button
                        type="button"
                        onClick={() => ir(activo - 1)}
                        aria-label="Testimonio anterior"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--linea-fuerte)] text-hueso transition-colors hover:border-oro hover:text-oro"
                    >
                        ←
                    </button>

                    <div className="flex gap-2.5">
                        {testimonios.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => ir(i)}
                                aria-label={`Ir al testimonio ${i + 1}`}
                                className={`h-2 rounded-full transition-all duration-400 ${
                                    i === activo
                                        ? 'w-7 bg-oro'
                                        : 'w-2 bg-[color:var(--linea-fuerte)] hover:bg-hueso-tenue'
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => ir(activo + 1)}
                        aria-label="Testimonio siguiente"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--linea-fuerte)] text-hueso transition-colors hover:border-oro hover:text-oro"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonios;
