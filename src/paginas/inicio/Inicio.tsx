import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

const Inicio: React.FC = () => {
    const artistas = [
        { nombre: 'Jorge Celedón', imagen: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg' },
        { nombre: 'Poncho Zuleta', imagen: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg' },
        { nombre: 'Felipe Peláez', imagen: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg' }
    ];

    return (
        <div className="pagina-inicio-premium">
            {/* Hero Premium */}
            <section className="hero-premium">
                <div className="hero-fondo">
                    <img
                        src="/Imagenes/Jesus Gonzalez en concierto.jpg"
                        alt="Jesús González en concierto"
                        className="hero-imagen-fondo"
                    />
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-contenido">
                    <div className="badge-premium">
                        <span className="estrella-badge">⭐</span>
                        <span>Artista Profesional</span>
                    </div>

                    <h1 className="hero-titulo-premium">
                        Jesús González
                        <span className="hero-subtitulo-premium">Maestro del Acordeón Vallenato</span>
                    </h1>

                    <p className="hero-descripcion-premium">
                        +15 años compartiendo escenario con las leyendas del vallenato.<br />
                        Llevando la música colombiana a los mejores eventos del mundo.
                    </p>

                    <div className="hero-ctas">
                        <Link to="/contrataciones" className="btn-principal-hero">
                            <span className="btn-icono">🎵</span>
                            Contratar Show
                        </Link>
                        <Link to="/videos" className="btn-secundario-hero">
                            <span className="btn-icono">▶️</span>
                            Ver Videos
                        </Link>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-numero">200+</span>
                            <span className="stat-texto">Shows Realizados</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-numero">15+</span>
                            <span className="stat-texto">Años de Experiencia</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-numero">100%</span>
                            <span className="stat-texto">Satisfacción</span>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* Credenciales - Artistas */}
            <section className="seccion-credenciales">
                <div className="contenedor-credenciales">
                    <h2 className="titulo-seccion-premium">Ha Compartido Escenario Con</h2>
                    <p className="subtitulo-seccion-premium">Las leyendas del vallenato confían en su talento</p>

                    <div className="grid-artistas">
                        {artistas.map((artista, idx) => (
                            <div key={idx} className="tarjeta-artista" style={{ animationDelay: `${idx * 0.15}s` }}>
                                <div className="imagen-artista-container">
                                    <img src={artista.imagen} alt={artista.nombre} className="imagen-artista" loading="lazy" />
                                    <div className="overlay-artista">
                                        <span className="nombre-artista">{artista.nombre}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Servicios Premium */}
            <section className="seccion-servicios-premium">
                <div className="contenedor-servicios-premium">
                    <h2 className="titulo-seccion-premium">Servicios Profesionales</h2>
                    <p className="subtitulo-seccion-premium-mejorado">Excelencia musical en cada presentación</p>

                    <div className="grid-servicios-premium">
                        <Link to="/contrataciones" className="servicio-card">
                            <div className="servicio-icono">🎵</div>
                            <h3 className="servicio-titulo">Shows & Eventos</h3>
                            <p className="servicio-descripcion">
                                Presentaciones profesionales para bodas, eventos corporativos y celebraciones exclusivas.
                            </p>
                            <span className="servicio-link">Contratar →</span>
                        </Link>

                        <a href="https://academiavallenataonline.com" target="_blank" rel="noopener" className="servicio-card">
                            <div className="servicio-icono">🎓</div>
                            <h3 className="servicio-titulo">Academia Online</h3>
                            <p className="servicio-descripcion">
                                Aprende acordeón vallenato con un maestro profesional. Clases personalizadas online.
                            </p>
                            <span className="servicio-link">Conocer más →</span>
                        </a>

                        <a href="https://ventadeacordeones.com" target="_blank" rel="noopener" className="servicio-card">
                            <div className="servicio-icono">🪗</div>
                            <h3 className="servicio-titulo">Tienda de Acordeones</h3>
                            <p className="servicio-descripcion">
                                Acordeones profesionales de la más alta calidad. Asesoría experta garantizada.
                            </p>
                            <span className="servicio-link">Ver tienda →</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="seccion-cta-final">
                <div className="contenedor-cta-final">
                    <h2 className="titulo-cta-final">¿Listo para tu Próximo Evento?</h2>
                    <p className="descripcion-cta-final">
                        Contáctanos hoy y asegura una presentación musical de primer nivel
                    </p>
                    <Link to="/contacto" className="btn-cta-final">
                        Solicitar Cotización
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Inicio;
