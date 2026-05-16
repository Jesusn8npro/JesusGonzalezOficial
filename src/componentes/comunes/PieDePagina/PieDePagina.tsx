'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Youtube, Instagram, Facebook, Music2, MessageCircle } from 'lucide-react';

const ENLACES = [
    { href: '/', etiqueta: 'Inicio' },
    { href: '/contrataciones', etiqueta: 'Contrataciones' },
    { href: '/repertorio', etiqueta: 'Repertorio' },
    { href: '/videos', etiqueta: 'Videos' },
    { href: '/blog', etiqueta: 'Blog' },
    { href: '/press', etiqueta: 'Press / EPK' },
    { href: '/preguntas-frecuentes', etiqueta: 'Preguntas frecuentes' },
    { href: '/contacto', etiqueta: 'Contacto' },
    { href: '/link-in-bio', etiqueta: 'Links' },
];

const REDES = [
    {
        nombre: 'YouTube · Academia Vallenata',
        href: 'https://www.youtube.com/@AcademiaVallenataONLINE',
        Icono: Youtube,
    },
    {
        nombre: 'YouTube · Jesús González TV',
        href: 'https://www.youtube.com/@JesusGonzalezTV',
        Icono: Youtube,
    },
    {
        nombre: 'Instagram @jesusgonzalezoficial',
        href: 'https://instagram.com/jesusgonzalezoficial',
        Icono: Instagram,
    },
    {
        nombre: 'TikTok @jesusgonzalezoficial7',
        href: 'https://tiktok.com/@jesusgonzalezoficial7',
        Icono: Music2,
    },
    {
        nombre: 'Facebook',
        href: 'https://facebook.com/jesusgonzalezoficial',
        Icono: Facebook,
    },
];

const PieDePagina: React.FC = () => {
    const anio = new Date().getFullYear();

    return (
        <footer className="pie-de-pagina grano relative overflow-hidden border-t border-[color:var(--linea)] bg-tinta-2 text-hueso">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
                <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
                    {/* Marca */}
                    <div>
                        <div className="flex items-center gap-3">
                            <Image
                                src="/Logo Jesus Gonzalez.png"
                                alt="Jesús González"
                                width={52}
                                height={52}
                                className="h-[52px] w-[52px] rounded-full object-cover ring-1 ring-[color:var(--linea-fuerte)]"
                            />
                            <div className="flex flex-col leading-none">
                                <span className="font-display text-[1.25rem] font-semibold text-hueso">
                                    Jesús González
                                </span>
                                <span className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-oro">
                                    Maestro del Acordeón Vallenato
                                </span>
                            </div>
                        </div>
                        <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-hueso-tenue">
                            Más de 15 años llevando el acordeón vallenato a bodas, eventos
                            corporativos y celebraciones inolvidables en toda Colombia.
                        </p>
                        <a
                            href="https://wa.me/573222312413?text=Hola%2C%20quiero%20contratar%20a%20Jes%C3%BAs%20Gonz%C3%A1lez%20para%20mi%20evento"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-7 inline-flex items-center gap-2.5 rounded-[var(--radius-sello)] bg-whatsapp px-5 py-3 text-[0.9rem] font-semibold tracking-tight text-[#04210f] transition-colors duration-300 hover:bg-[color:var(--color-whatsapp-hondo)] hover:text-hueso"
                        >
                            <MessageCircle size={18} />
                            Contratar por WhatsApp
                        </a>
                    </div>

                    {/* Navegación */}
                    <div>
                        <h4 className="kicker mb-6">Navegación</h4>
                        <nav className="flex flex-col gap-3.5">
                            {ENLACES.map(({ href, etiqueta }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="w-fit text-[0.95rem] text-hueso-tenue transition-colors duration-300 hover:text-oro"
                                >
                                    {etiqueta}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Redes */}
                    <div>
                        <h4 className="kicker mb-6">Redes sociales</h4>
                        <ul className="flex flex-col gap-3.5">
                            {REDES.map(({ nombre, href, Icono }) => (
                                <li key={nombre}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex w-fit items-center gap-3 text-[0.95rem] text-hueso-tenue transition-colors duration-300 hover:text-oro"
                                    >
                                        <Icono
                                            size={17}
                                            className="text-oro/70 transition-colors duration-300 group-hover:text-oro"
                                        />
                                        {nombre}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-3 border-t border-[color:var(--linea)] pt-8 text-[0.82rem] text-hueso-tenue sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        &copy; {anio} Jesús González. Todos los derechos reservados.
                    </p>
                    <p className="text-hueso-tenue/80">Bogotá, Colombia</p>
                </div>
            </div>
        </footer>
    );
};

export default PieDePagina;
