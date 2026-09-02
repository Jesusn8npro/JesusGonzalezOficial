'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import {
    GraduationCap,
    Music2,
    MessageCircle,
    Mic2,
    Youtube,
    Instagram,
    Facebook,
    Gamepad2,
    CalendarCheck,
} from 'lucide-react';
import Revelar from '../../componentes/ui/Revelar';
import TarjetaEnlace, { type EnlaceBio } from './TarjetaEnlace';

interface Seccion {
    etiqueta: string;
    enlaces: EnlaceBio[];
}

const CTA_CONTRATACIONES = {
    titulo: 'Contrata tu show en vivo',
    sub: 'Serenatas · Parrandas · Bodas · Eventos',
    href: 'https://wa.me/573222312413?text=Hola%20quiero%20contratar%20a%20Jesús%20González',
};

const SECCIONES: Seccion[] = [
    {
        etiqueta: 'Contrataciones artísticas',
        enlaces: [
            {
                titulo: 'Contrataciones · Presentaciones',
                sub: '+57 322 231 2413 · Serenatas · Shows · Eventos',
                href: 'https://wa.me/573222312413?text=Hola%20quiero%20contratar%20a%20Jesús%20González',
                Icono: Mic2,
                destacado: true,
            },
            {
                titulo: 'Agenda y disponibilidad',
                sub: 'Consulta fechas para tu evento en jesusgonzalez.com.co',
                href: 'https://jesusgonzalez.com.co/contrataciones',
                Icono: CalendarCheck,
            },
        ],
    },
    {
        etiqueta: 'Aprende acordeón',
        enlaces: [
            {
                titulo: 'Academia Vallenata Online',
                sub: 'Aprende acordeón desde cero · 400+ estudiantes',
                href: 'https://academiavallenataonline.com',
                Icono: GraduationCap,
                destacado: true,
            },
            {
                titulo: 'WhatsApp · Academia Vallenata',
                sub: '+57 314 480 8408 · Inscríbete hoy',
                href: 'https://wa.me/573144808408?text=Hola%20quiero%20información%20sobre%20la%20Academia%20Vallenata',
                Icono: MessageCircle,
            },
        ],
    },
    {
        etiqueta: 'Tienda de acordeones',
        enlaces: [
            {
                titulo: 'Venta de Acordeones',
                sub: 'Corona III, Hohner, Gabbanelli y más',
                href: 'https://ventadeacordeones.com',
                Icono: Music2,
                destacado: true,
            },
            {
                titulo: 'WhatsApp · Tienda de Acordeones',
                sub: '+57 314 486 5310 · Cotiza ahora',
                href: 'https://wa.me/573144865310?text=Hola%20quiero%20información%20sobre%20los%20acordeones',
                Icono: MessageCircle,
            },
        ],
    },
    {
        etiqueta: 'Mis canales',
        enlaces: [
            {
                titulo: 'YouTube · Academia Vallenata',
                sub: 'Tutoriales gratis de acordeón vallenato',
                href: 'https://www.youtube.com/@AcademiaVallenataONLINE',
                Icono: Youtube,
            },
            {
                titulo: 'YouTube · Jesús González TV',
                sub: 'Canal personal · Música · Vida',
                href: 'https://www.youtube.com/@JesusGonzalezTV',
                Icono: Youtube,
            },
            {
                titulo: 'TikTok · @jesusgonzalezoficial7',
                sub: '19.6K seguidores · Videos diarios',
                href: 'https://tiktok.com/@jesusgonzalezoficial7',
                Icono: Music2,
            },
            {
                titulo: 'Instagram',
                sub: 'Reels · Fotos · Stories de vallenato',
                href: 'https://instagram.com/jesusgonzalezoficial',
                Icono: Instagram,
            },
            {
                titulo: 'Facebook',
                sub: 'Comunidad vallenata colombiana',
                href: 'https://facebook.com/jesusgonzalezoficial',
                Icono: Facebook,
            },
        ],
    },
    {
        etiqueta: 'Próximamente',
        enlaces: [
            {
                titulo: 'Acordeón Hero · Coming Soon',
                sub: 'El simulador de acordeón vallenato · Próximo lanzamiento',
                Icono: Gamepad2,
                destacado: true,
                proximamente: true,
            },
        ],
    },
];

const REDES = [
    { titulo: 'TikTok', href: 'https://tiktok.com/@jesusgonzalezoficial7', Icono: Music2 },
    { titulo: 'Instagram', href: 'https://instagram.com/jesusgonzalezoficial', Icono: Instagram },
    { titulo: 'YouTube Academia', href: 'https://www.youtube.com/@AcademiaVallenataONLINE', Icono: Youtube },
    { titulo: 'YouTube Personal', href: 'https://www.youtube.com/@JesusGonzalezTV', Icono: Youtube },
    { titulo: 'Facebook', href: 'https://facebook.com/jesusgonzalezoficial', Icono: Facebook },
    { titulo: 'WhatsApp Contrataciones', href: 'https://wa.me/573222312413', Icono: MessageCircle },
];

const ESTADISTICAS = [
    { num: '19.6K', lbl: 'Seguidores' },
    { num: '400+', lbl: 'Estudiantes' },
    { num: '575K', lbl: 'Vistas' },
];

/** Perfil: avatar + nombre + stats + redes. En móvil encabeza la
 *  columna única; en desktop vive fijo (sticky) a la izquierda. */
const Perfil: React.FC = () => (
    <div className="flex flex-col items-center text-center">
        <div className="relative">
            {/* Halo suave detrás del aro dorado (le da vida al modo oscuro) */}
            <div
                className="absolute inset-0 -m-8 rounded-full opacity-70 blur-2xl"
                style={{
                    background:
                        'radial-gradient(circle, color-mix(in srgb, var(--oro) 32%, transparent), transparent 70%)',
                }}
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 -m-[3px] rounded-full"
                style={{
                    background:
                        'conic-gradient(from 180deg, var(--oro), var(--oro-hondo), var(--oro-claro), var(--oro))',
                }}
                aria-hidden="true"
            />
            <Image
                src="/Imagenes/Foto de perfil para JESUS GONZALEZ.jpg"
                alt="Jesús González, maestro del acordeón vallenato"
                width={132}
                height={132}
                priority
                className="relative h-[132px] w-[132px] rounded-full object-cover ring-4 ring-[color:var(--color-tinta)]"
            />
        </div>
        <h1 className="mt-6 font-display text-[2rem] font-semibold leading-tight text-hueso">
            Jesús González
        </h1>
        <p className="mt-2 text-[0.95rem] text-oro">Acordeonero · Maestro Vallenato</p>
        <p className="mt-1 text-[0.85rem] text-hueso-tenue">
            +15 años en tarima · Banda profesional de 6 a 9 músicos
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
            {['Shows en vivo', 'Academia', 'Acordeones'].map((b) => (
                <span
                    key={b}
                    className="rounded-full border border-[color:var(--linea-fuerte)] px-3.5 py-1.5 text-[0.72rem] font-medium tracking-wide text-hueso-tenue"
                >
                    {b}
                </span>
            ))}
        </div>

        {/* CTA principal: contratar por WhatsApp */}
        <a
            href={CTA_CONTRATACIONES.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-4 font-display text-[0.95rem] font-semibold text-[color:var(--color-tinta)] shadow-[0_10px_32px_-10px_color-mix(in_srgb,var(--oro)_55%,transparent)] transition-transform duration-300 ease-[var(--ease-salida)] hover:-translate-y-0.5"
            style={{
                background: 'linear-gradient(135deg, var(--oro-claro), var(--oro) 55%, var(--oro-hondo))',
            }}
        >
            <Mic2 size={18} strokeWidth={2} />
            {CTA_CONTRATACIONES.titulo}
        </a>
        <p className="mt-2 text-[0.75rem] text-hueso-tenue">{CTA_CONTRATACIONES.sub}</p>

        {/* Stats */}
        <div className="mt-7 grid w-full grid-cols-3 overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-tinta-2">
            {ESTADISTICAS.map((s, i) => (
                <div
                    key={s.lbl}
                    className={`flex flex-col items-center py-5 ${
                        i < 2 ? 'border-r border-[color:var(--linea)]' : ''
                    }`}
                >
                    <span className="font-display text-[1.5rem] font-semibold text-oro">
                        {s.num}
                    </span>
                    <span className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-hueso-tenue">
                        {s.lbl}
                    </span>
                </div>
            ))}
        </div>

        {/* Redes */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
            {REDES.map(({ titulo, href, Icono }) => (
                <a
                    key={titulo}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={titulo}
                    aria-label={titulo}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--linea)] bg-tinta-2 text-oro transition-[transform,border-color,background-color] duration-300 ease-[var(--ease-salida)] hover:-translate-y-0.5 hover:border-[color:var(--color-oro)]/45 hover:bg-tinta-3"
                >
                    <Icono size={19} strokeWidth={1.75} />
                </a>
            ))}
        </div>
    </div>
);

const LinkEnBio: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="grano relative min-h-screen overflow-hidden bg-tinta px-5 py-16 sm:py-20">
            {/* Atmósfera: halo dorado arriba + brasa tenue abajo. En claro
                los tokens se re-mapean solos, así que funciona en ambos temas. */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[46vh]"
                style={{
                    background:
                        'radial-gradient(62% 100% at 50% 0%, color-mix(in srgb, var(--oro) 16%, transparent), transparent 72%)',
                }}
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[30vh] opacity-50"
                style={{
                    background:
                        'radial-gradient(70% 120% at 50% 100%, color-mix(in srgb, var(--oro-hondo) 14%, transparent), transparent 75%)',
                }}
                aria-hidden="true"
            />

            {/* Móvil: columna única estilo link-in-bio.
                Desktop (lg+): perfil sticky a la izquierda + panel de
                enlaces en grilla a la derecha. */}
            <div className="relative mx-auto w-full max-w-lg lg:grid lg:max-w-6xl lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start lg:gap-14">
                <Revelar className="lg:sticky lg:top-14">
                    <Perfil />
                </Revelar>

                <div className="mt-12 flex flex-col gap-10 lg:mt-0">
                    {SECCIONES.map((seccion, si) => (
                        <Revelar key={seccion.etiqueta} retardo={0.04 * si}>
                            <h2 className="kicker mb-4 text-center lg:text-left">
                                {seccion.etiqueta}
                            </h2>
                            <div
                                className={`flex flex-col gap-3 ${
                                    seccion.enlaces.length > 1
                                        ? 'lg:grid lg:grid-cols-2 lg:gap-4'
                                        : ''
                                }`}
                            >
                                {seccion.enlaces.map((enlace) => (
                                    <TarjetaEnlace key={enlace.titulo} enlace={enlace} />
                                ))}
                            </div>
                        </Revelar>
                    ))}

                    {/* FOOTER */}
                    <div className="border-t border-[color:var(--linea)] pt-8 text-center lg:text-left">
                        <p className="font-display text-[1rem] font-semibold text-hueso">
                            Jesús González Oficial
                        </p>
                        <p className="mt-2 text-[0.8rem] text-hueso-tenue">
                            © 2026 · Bogotá, Colombia ·{' '}
                            <a
                                href="https://jesusgonzalez.com.co"
                                className="text-oro transition-colors hover:text-[color:var(--oro-claro)]"
                            >
                                jesusgonzalez.com.co
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkEnBio;
