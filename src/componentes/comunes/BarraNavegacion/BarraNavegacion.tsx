import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BarraNavegacion.css';

const BarraNavegacion: React.FC = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Cerrar menú cuando cambia la ruta y desbloquear scroll
    useEffect(() => {
        setMenuAbierto(false);
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }, [location]);

    // Detectar scroll para cambiar estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        const nuevoEstado = !menuAbierto;
        setMenuAbierto(nuevoEstado);

        // Bloquear/Desbloquear scroll de forma robusta
        if (nuevoEstado) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; // Para soporte adicional en móviles
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        // Reproducir sonido al abrir
        if (nuevoEstado) {
            const audio = new Audio('data:audio/mp3;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7cQBMNJcUfFBDYI92q1xGF680dUF5MGvrNXNUafJmoL7G9H8W7fpp0e7zJdOL77oo+h+3757Kjn7UcfK7Uf5Gxvf67G38w50+pp0o58a7k77t/64F9/v//wD');
            audio.volume = 0.2;
            audio.play().catch(e => console.log('Audio play failed', e));
        }
    };

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
            <div className={`menu-movil ${menuAbierto ? 'active' : ''}`}>
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
                        <Link to="/" className={`menu-movil-link ${isActive('/') ? 'active' : ''}`}>
                            <span className="menu-icon">🏠</span>
                            <span>Inicio</span>
                        </Link>
                        <Link to="/contrataciones" className={`menu-movil-link destacado ${isActive('/contrataciones') ? 'active' : ''}`}>
                            <span className="menu-icon">🎵</span>
                            <span>Contrataciones</span>
                        </Link>
                        <Link to="/videos" className={`menu-movil-link ${isActive('/videos') ? 'active' : ''}`}>
                            <span className="menu-icon">📹</span>
                            <span>Videos</span>
                        </Link>
                        <Link to="/contacto" className={`menu-movil-link ${isActive('/contacto') ? 'active' : ''}`}>
                            <span className="menu-icon">✉️</span>
                            <span>Contacto</span>
                        </Link>
                        <Link to="/link-in-bio" className={`menu-movil-link ${isActive('/link-in-bio') ? 'active' : ''}`}>
                            <span className="menu-icon">🔗</span>
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
                <div className="menu-overlay" onClick={toggleMenu}></div>
            )}
        </nav>
    );
};

export default BarraNavegacion;
