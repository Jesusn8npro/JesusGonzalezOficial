'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    Home,
    Music2,
    Video,
    PenLine,
    Mail,
    Link2,
    Menu,
    X,
    type LucideIcon,
} from 'lucide-react';
import { abrirWhatsApp, mensajesWhatsApp } from '../../../utilidades/whatsapp';
import InterruptorTema from '../../ui/InterruptorTema';

interface EnlaceNav {
    href: string;
    etiqueta: string;
    Icono: LucideIcon;
    destacado?: boolean;
}

const ENLACES: EnlaceNav[] = [
    { href: '/', etiqueta: 'Inicio', Icono: Home },
    { href: '/contrataciones', etiqueta: 'Contrataciones', Icono: Music2, destacado: true },
    { href: '/videos', etiqueta: 'Videos', Icono: Video },
    { href: '/blog', etiqueta: 'Blog', Icono: PenLine },
    { href: '/contacto', etiqueta: 'Contacto', Icono: Mail },
    { href: '/link-in-bio', etiqueta: 'Links', Icono: Link2 },
];

const IconoWhatsapp: React.FC<{ size?: number }> = ({ size = 17 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.898 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
);

const Marca: React.FC<{ compacto?: boolean }> = ({ compacto = false }) => (
    <span className="flex items-center gap-3">
        <Image
            src="/Logo Jesus Gonzalez.png"
            alt="Jesús González"
            width={compacto ? 40 : 44}
            height={compacto ? 40 : 44}
            priority={!compacto}
            className={`${
                compacto ? 'h-10 w-10' : 'h-11 w-11'
            } rounded-full object-cover ring-1 ring-[color:var(--linea-fuerte)] transition-transform duration-500 ease-[var(--ease-salida)] group-hover:scale-105`}
        />
        <span className="flex flex-col leading-none">
            <span
                className={`font-display ${
                    compacto ? 'text-[1rem]' : 'text-[1.05rem]'
                } font-semibold text-hueso`}
            >
                Jesús González
            </span>
            <span
                className={`mt-1 ${
                    compacto ? 'text-[0.58rem] tracking-[0.26em]' : 'text-[0.62rem] tracking-[0.28em]'
                } font-semibold uppercase text-oro`}
            >
                Maestro del Acordeón
            </span>
        </span>
    </span>
);

const BarraNavegacion: React.FC = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
    const botonMenuRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const bloquearScroll = (bloquear: boolean) => {
        document.body.style.overflow = bloquear ? 'hidden' : '';
    };

    const closeMenu = () => {
        setMenuAbierto(false);
        bloquearScroll(false);
        // Devuelve el foco al disparador para no perder contexto
        botonMenuRef.current?.focus();
    };

    const toggleMenu = () => {
        const nuevoEstado = !menuAbierto;
        setMenuAbierto(nuevoEstado);
        bloquearScroll(nuevoEstado);
    };

    useEffect(() => {
        if (menuAbierto) firstLinkRef.current?.focus();
    }, [menuAbierto]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && menuAbierto) {
                setMenuAbierto(false);
                bloquearScroll(false);
                botonMenuRef.current?.focus();
            }
        };
        if (menuAbierto) window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [menuAbierto]);

    // Cierra el drawer al navegar (cambio de ruta)
    useEffect(() => {
        setMenuAbierto(false);
        document.body.style.overflow = '';
    }, [pathname]);

    // Limpieza defensiva del lock de scroll al desmontar
    useEffect(() => () => { document.body.style.overflow = ''; }, []);

    const isActive = (path: string) =>
        path === '/' ? pathname === '/' : pathname === path || pathname.startsWith(`${path}/`);

    const claseEnlace = (href: string, destacado?: boolean) => {
        const activo = isActive(href);
        if (destacado) {
            return `relative inline-flex items-center rounded-[var(--radius-sello)] px-3.5 py-2 text-[0.88rem] font-semibold tracking-tight transition-[background-color,border-color,color] duration-300 ${
                activo
                    ? 'bg-oro text-tinta'
                    : 'border border-[color:var(--linea-fuerte)] text-oro hover:border-oro hover:bg-[color:var(--color-oro)]/10'
            }`;
        }
        return `relative text-[0.9rem] font-medium tracking-tight transition-colors duration-300 ${
            activo ? 'text-hueso' : 'text-hueso-tenue hover:text-hueso'
        } after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-oro after:transition-all after:duration-300 ${
            activo ? 'after:w-full' : 'after:w-0 hover:after:w-full'
        }`;
    };

    return (
        <nav
            className={`barra-navegacion sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ease-[var(--ease-salida)] ${
                scrolled
                    ? 'border-b border-[color:var(--linea)] bg-[color:var(--color-tinta)]/80 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.8)] backdrop-blur-md backdrop-saturate-150'
                    : 'border-b border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto flex h-[4.6rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
                {/* Logo + wordmark */}
                <Link href="/" className="group flex items-center" aria-label="Jesús González — Inicio">
                    <Marca />
                </Link>

                {/* Menú Desktop */}
                <div className="hidden items-center gap-7 lg:flex">
                    {ENLACES.map(({ href, etiqueta, destacado }) => (
                        <Link
                            key={href}
                            href={href}
                            className={claseEnlace(href, destacado)}
                            aria-current={isActive(href) ? 'page' : undefined}
                        >
                            {etiqueta}
                        </Link>
                    ))}
                </div>

                {/* Acciones: tema + CTA WhatsApp + hamburguesa */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                    <InterruptorTema className="hidden sm:inline-flex" />

                    <button
                        type="button"
                        onClick={() => abrirWhatsApp(mensajesWhatsApp.general, 'navbar_whatsapp')}
                        className="hidden items-center gap-2 rounded-[var(--radius-sello)] bg-whatsapp px-4 py-2.5 text-[0.82rem] font-semibold tracking-tight text-[#04210f] transition-[transform,background-color,color] duration-300 ease-[var(--ease-salida)] hover:bg-[color:var(--color-whatsapp-hondo)] hover:text-hueso active:scale-[0.97] sm:inline-flex"
                        aria-label="Escribir por WhatsApp"
                    >
                        <IconoWhatsapp />
                        WhatsApp
                    </button>

                    <button
                        ref={botonMenuRef}
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] text-hueso transition-colors duration-300 hover:border-oro hover:text-oro lg:hidden"
                        onClick={toggleMenu}
                        aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={menuAbierto}
                        aria-haspopup="dialog"
                    >
                        {menuAbierto ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Drawer móvil — overlay a pantalla completa */}
            <div
                id="menu-movil"
                className={`menu-movil fixed inset-0 z-[60] h-[100dvh] w-screen lg:hidden ${
                    menuAbierto ? '' : 'pointer-events-none'
                }`}
                role="dialog"
                aria-modal="true"
                aria-label="Menú de navegación"
                aria-hidden={!menuAbierto}
            >
                {/* Telón de fondo */}
                <div
                    className={`grano absolute inset-0 bg-[color:var(--color-tinta)]/96 backdrop-blur-xl transition-opacity duration-500 ease-[var(--ease-salida)] ${
                        menuAbierto ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={closeMenu}
                    aria-hidden="true"
                />

                {/* Contenido del menú */}
                <div
                    className={`relative flex h-full w-full flex-col transition-[opacity,transform] duration-500 ease-[var(--ease-salida)] ${
                        menuAbierto
                            ? 'translate-y-0 opacity-100'
                            : '-translate-y-4 opacity-0'
                    }`}
                >
                    <div className="flex h-[4.6rem] shrink-0 items-center justify-between px-5 sm:px-8">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="group flex items-center"
                            aria-label="Jesús González — Inicio"
                        >
                            <Marca compacto />
                        </Link>
                        <button
                            type="button"
                            onClick={closeMenu}
                            aria-label="Cerrar menú"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] text-hueso transition-colors duration-300 hover:border-oro hover:text-oro"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-5 py-6 sm:px-8">
                        {ENLACES.map(({ href, etiqueta, Icono, destacado }, i) => {
                            const activo = isActive(href);
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    ref={i === 0 ? firstLinkRef : undefined}
                                    onClick={closeMenu}
                                    aria-current={activo ? 'page' : undefined}
                                    style={{
                                        transitionDelay: menuAbierto ? `${120 + i * 55}ms` : '0ms',
                                    }}
                                    className={`menu-item group flex items-center gap-4 border-b border-[color:var(--linea)] py-5 transition-[color,opacity,transform] duration-500 ease-[var(--ease-salida)] ${
                                        menuAbierto
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-3 opacity-0'
                                    } ${
                                        activo
                                            ? 'text-hueso'
                                            : destacado
                                              ? 'text-oro'
                                              : 'text-hueso-tenue hover:text-hueso'
                                    }`}
                                >
                                    <Icono
                                        size={22}
                                        className={`shrink-0 transition-colors duration-300 ${
                                            activo || destacado
                                                ? 'text-oro'
                                                : 'text-hueso-tenue group-hover:text-oro'
                                        }`}
                                    />
                                    <span className="font-display text-[1.6rem] font-semibold tracking-tight">
                                        {etiqueta}
                                    </span>
                                    {destacado && !activo && (
                                        <span className="ml-auto rounded-full border border-[color:var(--linea-fuerte)] px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-oro">
                                            Contrata ya
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="shrink-0 px-5 pb-8 pt-4 sm:px-8">
                        <button
                            type="button"
                            onClick={() => {
                                closeMenu();
                                abrirWhatsApp(mensajesWhatsApp.general, 'navbar_movil_whatsapp');
                            }}
                            className="flex w-full items-center justify-center gap-2.5 rounded-[var(--radius-sello)] bg-whatsapp px-6 py-4 text-[1rem] font-semibold tracking-tight text-[#04210f] transition-[background-color,color] duration-300 hover:bg-[color:var(--color-whatsapp-hondo)] hover:text-hueso"
                        >
                            <IconoWhatsapp size={20} />
                            Escribir por WhatsApp
                        </button>
                        <div className="mt-5 flex items-center justify-between">
                            <p className="text-[0.78rem] text-hueso-tenue">
                                +15 años · 200+ shows
                            </p>
                            <InterruptorTema />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (prefers-reduced-motion: reduce) {
                    .menu-movil,
                    .menu-movil .menu-item,
                    .menu-movil > div {
                        transition-duration: 1ms !important;
                        transition-delay: 0ms !important;
                    }
                    .menu-movil .menu-item { transform: none !important; }
                }
            `}</style>
        </nav>
    );
};

export default BarraNavegacion;
