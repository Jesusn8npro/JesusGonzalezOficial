import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Music2, Video, Mail, Link2 } from 'lucide-react';
import './BarraNavegacion.css';

const BarraNavegacion: React.FC = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

    // Detectar scroll para cambiar estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => {
        setMenuAbierto(false);
        document.documentElement.classList.remove('no-scroll');
    };

    const toggleMenu = () => {
        const nuevoEstado = !menuAbierto;
        setMenuAbierto(nuevoEstado);

        if (nuevoEstado) {
            document.documentElement.classList.add('no-scroll');
        } else {
            document.documentElement.classList.remove('no-scroll');
        }

        if (nuevoEstado) {
            const audio = new Audio('data:audio/mp3;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7cQBMNJcUfFBDYI92q1xGF680dUF5MGvrNXNUafJmoL7G9H8W7fpp0e7zJdOL77oo+h+3757Kjn7UcfK7Uf5Gxvf67G38w50+pp0o58a7k77t/64F9/v//wD');
            audio.volume = 0.2;
            audio.play().catch(e => console.log('Audio play failed', e));
        }
    };

    useEffect(() => {
        if (menuAbierto) {
            firstLinkRef.current?.focus();
        }
    }, [menuAbierto]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMenu();
        };
        if (menuAbierto) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [menuAbierto]);

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className={`barra-navegacion ${scrolled ? 'scrolled' : ''}`}>
            <div className="contenedor-navegacion">
                {/* Logo con imagen */}
                <Link to="/" className="logo-navegacion">
                    <img
                        src="/Logo Jesus Gonzalez.png"
                        alt="Jesús González Logo"
                        className="logo-imagen"
                    />
                    <div className="logo-texto-container">
                        <span className="logo-texto">Jesús González</span>
                        <span className="logo-subtitulo">Maestro del Acordeón</span>
                    </div>
                </Link>

                {/* Menú Desktop */}
                <div className="enlaces-navegacion desktop-menu">
                    <Link to="/" className={`enlace-nav ${isActive('/') ? 'active' : ''}`}>
                        Inicio
                    </Link>
                    <Link to="/contrataciones" className={`enlace-nav enlace-destacado ${isActive('/contrataciones') ? 'active' : ''}`}>
                        Contrataciones
                    </Link>
                    <Link to="/videos" className={`enlace-nav ${isActive('/videos') ? 'active' : ''}`}>
                        Videos
                    </Link>
                    <Link to="/contacto" className={`enlace-nav ${isActive('/contacto') ? 'active' : ''}`}>
                        Contacto
                    </Link>
                    <Link to="/link-in-bio" className={`enlace-nav ${isActive('/link-in-bio') ? 'active' : ''}`}>
                        Links
                    </Link>
                </div>

                {/* Botón Hamburguesa */}
                <button
                    className={`hamburger-btn ${menuAbierto ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Menú Móvil */}
            <div className={`menu-movil ${menuAbierto ? 'active' : ''}`} role="dialog" aria-modal="true">
                <div className="menu-movil-contenido">
                    <div className="menu-movil-header">
                        <img
                            src="/Logo Jesus Gonzalez.png"
                            alt="Jesús González"
                            className="menu-movil-logo"
                        />
                        <h3 className="menu-movil-titulo">Jesús González</h3>
                        <p className="menu-movil-subtitulo">Maestro del Acordeón Vallenato</p>
                    </div>

                    <nav className="menu-movil-nav">
                        <Link to="/" ref={firstLinkRef} onClick={closeMenu} className={`menu-movil-link ${isActive('/') ? 'active' : ''}`}>
                            <Home className="menu-icon" />
                            <span>Inicio</span>
                        </Link>
                        <Link to="/contrataciones" onClick={closeMenu} className={`menu-movil-link destacado ${isActive('/contrataciones') ? 'active' : ''}`}>
                            <Music2 className="menu-icon" />
                            <span>Contrataciones</span>
                        </Link>
                        <Link to="/videos" onClick={closeMenu} className={`menu-movil-link ${isActive('/videos') ? 'active' : ''}`}>
                            <Video className="menu-icon" />
                            <span>Videos</span>
                        </Link>
                        <Link to="/contacto" onClick={closeMenu} className={`menu-movil-link ${isActive('/contacto') ? 'active' : ''}`}>
                            <Mail className="menu-icon" />
                            <span>Contacto</span>
                        </Link>
                        <Link to="/link-in-bio" onClick={closeMenu} className={`menu-movil-link ${isActive('/link-in-bio') ? 'active' : ''}`}>
                            <Link2 className="menu-icon" />
                            <span>Links</span>
                        </Link>
                    </nav>

                    <div className="menu-movil-footer">
                        <p className="menu-footer-text">+15 años de experiencia</p>
                        <p className="menu-footer-text">200+ shows realizados</p>
                    </div>
                </div>
            </div>

            {/* Overlay para cerrar menú */}
            {menuAbierto && (
                <div className="menu-overlay" onClick={closeMenu}></div>
            )}
        </nav>
    );
};

export default BarraNavegacion;
