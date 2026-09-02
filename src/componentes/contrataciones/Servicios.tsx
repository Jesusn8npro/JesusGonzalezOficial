'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { mensajesWhatsApp } from '../../utilidades/whatsapp';
import BotonWhatsapp from '../ui/BotonWhatsapp';
import Revelar from '../ui/Revelar';

type TipoServicio = 'premium' | 'vip' | 'gala';

interface Service {
    nombre: string;
    gancho: string;
    imagen: string;
    descripcion: string;
    formato: string;
    ideal: string;
    incluye: string[];
    videoUrl: string;
    tipoServicio: TipoServicio;
}

const servicios: Service[] = [
    {
        nombre: 'Parranda Vallenata Premium',
        gancho: 'Lo íntimo, hecho memorable',
        imagen: '/Imagenes/Parrandas Vallenatas.jpg',
        descripcion:
            '6 músicos en acción liderados por mí. Sonido incluido. Para reuniones privadas y celebraciones donde quieres vallenato del bueno, de cerca.',
        formato: '6 músicos · hasta 2 h',
        ideal: 'Privados y salones',
        incluye: ['Dirección artística propia', 'Sonido incluido', 'Repertorio a tu gusto'],
        videoUrl: 'Ll5rSyCDM78',
        tipoServicio: 'premium',
    },
    {
        nombre: 'Show Semicompleto VIP',
        gancho: 'El equilibrio perfecto',
        imagen: '/Imagenes/Jesus-Gonzalez-Vallenato-Exclusivo.jpg',
        descripcion:
            '8 músicos + 1 asistente. Mi formato más solicitado para bodas y eventos corporativos. Sonido del venue u opción de sonido propio.',
        formato: '8 músicos + asistente',
        ideal: 'Bodas y corporativos',
        incluye: ['Puesta en escena ampliada', 'Coordinación con tu venue', 'Repertorio curado'],
        videoUrl: 'oPoqVKg30Cg',
        tipoServicio: 'vip',
    },
    {
        nombre: 'Show Completo de Gala',
        gancho: 'Producción a gran escala',
        imagen: '/Imagenes/Jesus Gonzalez en concierto.jpg',
        descripcion:
            'Producción ampliada según venue y logística. Puesta en escena completa para galas y eventos masivos donde la música es protagonista.',
        formato: 'Formato ampliado a medida',
        ideal: 'Galas y eventos masivos',
        incluye: ['Producción a medida', 'Logística completa', 'Experiencia de gala'],
        videoUrl: 'vgDABDveFn0',
        tipoServicio: 'gala',
    },
];

interface ModalProps {
    service: Service;
    closeModal: () => void;
}

const ServiceModalContent: React.FC<ModalProps> = ({ service, closeModal }) => {
    const [videoActivo, setVideoActivo] = useState(false);

    return (
        <div className="grano relative max-h-[90vh] w-full overflow-y-auto rounded-[var(--radius-grande)] border border-[color:var(--linea-fuerte)] bg-tinta-2 p-7 md:p-10">
            <button
                type="button"
                onClick={closeModal}
                aria-label="Cerrar"
                className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--linea)] text-hueso-tenue transition-colors hover:border-oro hover:text-oro"
            >
                ✕
            </button>

            <p className="kicker">{service.gancho}</p>
            <h2 className="mt-3 font-display text-3xl text-hueso md:text-4xl">{service.nombre}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-hueso-tenue">
                {service.descripcion}
            </p>

            <div className="mt-8 grid gap-7 md:grid-cols-2">
                <div>
                    <h3 className="font-display text-lg text-oro">Qué incluye</h3>
                    <ul className="mt-4 space-y-3">
                        {service.incluye.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-hueso">
                                <span aria-hidden="true" className="mt-1 text-oro">
                                    ◆
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                        <li className="flex items-start gap-3 text-hueso">
                            <span aria-hidden="true" className="mt-1 text-oro">
                                ◆
                            </span>
                            <span>{service.formato}</span>
                        </li>
                    </ul>
                </div>

                <div className="relative overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)]">
                    {!videoActivo ? (
                        <button
                            type="button"
                            onClick={() => setVideoActivo(true)}
                            className="group relative block h-full w-full"
                            aria-label={`Reproducir video de ${service.nombre}`}
                        >
                            <Image
                                src={service.imagen}
                                alt={`Show ${service.nombre}`}
                                width={560}
                                height={360}
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="aspect-video w-full object-cover"
                            />
                            <span className="absolute inset-0 flex items-center justify-center bg-tinta/40 transition-colors group-hover:bg-tinta/25">
                                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-oro text-tinta transition-transform group-hover:scale-110">
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </span>
                            </span>
                        </button>
                    ) : (
                        <div className="relative aspect-video w-full">
                            <iframe
                                src={`https://www.youtube.com/embed/${service.videoUrl}?rel=0&showinfo=0&autoplay=1&controls=1`}
                                title={`Video de ${service.nombre}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 h-full w-full"
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-9 flex flex-col items-start gap-4 border-t border-[color:var(--linea)] pt-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-display text-lg text-hueso">Cotización personalizada</p>
                    <p className="mt-1 text-sm text-hueso-tenue">
                        Cada evento es distinto. Te paso una propuesta a tu medida por WhatsApp.
                    </p>
                </div>
                <BotonWhatsapp
                    mensaje={mensajesWhatsApp.servicios[service.tipoServicio]}
                    evento={`Service_${service.tipoServicio}_WhatsApp`}
                    variante="whatsapp"
                    tamano="md"
                    className="shrink-0"
                >
                    Pedir cotización
                </BotonWhatsapp>
            </div>
        </div>
    );
};

const Servicios: React.FC = () => {
    const [servicioSeleccionado, setServicioSeleccionado] = useState<Service | null>(null);

    const abrir = (s: Service) => {
        setServicioSeleccionado(s);
        document.body.style.overflow = 'hidden';
    };

    const cerrar = () => {
        setServicioSeleccionado(null);
        document.body.style.overflow = '';
    };

    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') cerrar();
        };
        window.addEventListener('keydown', onEsc);
        return () => window.removeEventListener('keydown', onEsc);
    }, []);

    return (
        <>
            <section id="servicios" className="bg-tinta px-5 py-20 md:px-10 md:py-28">
                <div className="mx-auto max-w-[1240px]">
                    <Revelar className="max-w-2xl">
                        <p className="kicker">Tres formas de vivir el show</p>
                        <h2 className="mt-4 font-display text-4xl text-hueso md:text-[3rem]">
                            Elige el formato a la medida de tu evento
                        </h2>
                        <p className="mt-5 text-lg text-hueso-tenue">
                            Sin precios de catálogo: cada propuesta se arma según tu fecha, venue y logística.
                            La cotización es personalizada y la hablamos directo por WhatsApp.
                        </p>
                    </Revelar>

                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {servicios.map((s, i) => (
                            <Revelar key={s.nombre} retardo={i * 0.09}>
                                <article
                                    onClick={() => abrir(s)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            abrir(s);
                                        }
                                    }}
                                    className="group tarjeta-destello flex h-full cursor-pointer flex-col overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea)] bg-tinta-2 transition-[border-color,transform,box-shadow] duration-500 ease-[var(--ease-salida)] hover:-translate-y-1 hover:border-[color:var(--oro)] hover:shadow-[var(--shadow-oro)]"
                                >
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src={s.imagen}
                                            alt={`Show ${s.nombre}`}
                                            width={420}
                                            height={300}
                                            sizes="(min-width: 768px) 33vw, 100vw"
                                            className="aspect-[7/5] w-full object-cover transition-transform duration-700 ease-[var(--ease-salida)] group-hover:scale-[1.06]"
                                        />
                                        <div
                                            aria-hidden="true"
                                            className="pointer-events-none absolute inset-0"
                                            style={{
                                                background:
                                                    'linear-gradient(180deg, transparent 50%, rgba(14,11,8,0.78) 100%)',
                                            }}
                                        />
                                        <span className="absolute left-4 top-4 rounded-[var(--radius-sello)] bg-tinta/70 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-oro-claro backdrop-blur-sm">
                                            {s.gancho}
                                        </span>
                                    </div>

                                    <div className="flex flex-1 flex-col p-6">
                                        <h3 className="font-display text-2xl text-hueso">{s.nombre}</h3>
                                        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-hueso-tenue">
                                            {s.descripcion}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            <span className="rounded-[var(--radius-sello)] border border-[color:var(--linea)] px-3 py-1.5 text-xs text-hueso-tenue">
                                                {s.formato}
                                            </span>
                                            <span className="rounded-[var(--radius-sello)] border border-[color:var(--linea)] px-3 py-1.5 text-xs text-hueso-tenue">
                                                {s.ideal}
                                            </span>
                                        </div>

                                        <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-oro transition-transform group-hover:gap-3">
                                            Ver detalles del show
                                            <span aria-hidden="true">→</span>
                                        </span>
                                    </div>
                                </article>
                            </Revelar>
                        ))}
                    </div>
                </div>
            </section>

            {servicioSeleccionado && (
                <div
                    className="fixed inset-0 z-[120] flex items-center justify-center bg-tinta/85 p-4 backdrop-blur-sm md:p-8"
                    onClick={cerrar}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="w-full max-w-3xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ServiceModalContent service={servicioSeleccionado} closeModal={cerrar} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Servicios;
