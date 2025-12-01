import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BarraNavegacion.css';
import { Home, Music3, Video, Mail, Link2, X } from 'lucide-react';

const BarraNavegacion: React.FC = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Desbloquear scroll cuando cambia la ruta
    useEffect(() => {
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

            {/* Menú Móvil - Bottom Sheet */}
            <div className={`menu-movil ${menuAbierto ? 'active' : ''}`}>
                <div className="menu-sheet">
                    <button className="menu-close" aria-label="Cerrar menú" onClick={toggleMenu}>
                        <X size={22} />
                    </button>
                    <div className="menu-header">
                        <img src="/Logo Jesus Gonzalez.png" alt="Jesús González" className="menu-avatar" />
                        <div className="menu-title">
                            <h3>Jesús González</h3>
                            <p>Maestro del Acordeón Vallenato</p>
                        </div>
                    </div>
                    <nav className="menu-list">
                        <Link to="/" className={`menu-item ${isActive('/') ? 'active' : ''}`} onClick={() => setMenuAbierto(false)}>
                            <Home size={18} />
                            <span>Inicio</span>
                        </Link>
                        <Link
                            to="/contrataciones"
                            className={`menu-item destacado ${isActive('/contrataciones') ? 'active' : ''}`}
                            onClick={() => setMenuAbierto(false)}
                        >
                            <Music3 size={18} />
                            <span>Contrataciones</span>
                        </Link>
                        <Link to="/videos" className={`menu-item ${isActive('/videos') ? 'active' : ''}`} onClick={() => setMenuAbierto(false)}>
                            <Video size={18} />
                            <span>Videos</span>
                        </Link>
                        <Link
                            to="/contacto"
                            className={`menu-item ${isActive('/contacto') ? 'active' : ''}`}
                            onClick={() => setMenuAbierto(false)}
                        >
                            <Mail size={18} />
                            <span>Contacto</span>
                        </Link>
                        <Link
                            to="/link-in-bio"
                            className={`menu-item ${isActive('/link-in-bio') ? 'active' : ''}`}
                            onClick={() => setMenuAbierto(false)}
                        >
                            <Link2 size={18} />
                            <span>Links</span>
                        </Link>
                    </nav>
                    <div className="menu-footer">
                        <span>+15 años de experiencia • 200+ shows</span>
                    </div>
                </div>
            </div>

            {/* Overlay para cerrar menú */}
            {menuAbierto && <div className="menu-overlay" onClick={toggleMenu}></div>}
        </nav>
    );
};

export default BarraNavegacion;
