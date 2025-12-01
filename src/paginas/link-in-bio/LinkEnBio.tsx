import React from 'react';
import './LinkEnBio.css';

const LinkEnBio: React.FC = () => {
    const enlaces = [
        { titulo: 'Sitio Web Oficial', url: '/', icono: '🏠', categoria: 'Principal' },
        { titulo: 'Contratar Show', url: '/contrataciones', icono: '🎵', categoria: 'Principal', destacado: true },
        { titulo: 'Ver Videos', url: '/videos', icono: '📹', categoria: 'Contenido' },
        { titulo: 'Contacto', url: '/contacto', icono: '📧', categoria: 'Contenido' },
        { titulo: 'Tienda de Acordeones', url: 'https://tienda.example.com', icono: '🪗', categoria: 'Tienda', externo: true },
        { titulo: 'Academia Musical', url: 'https://academia.example.com', icono: '🎓', categoria: 'Educación', externo: true },
        { titulo: 'MeLlevoEsto.com', url: 'https://mellevesto.com', icono: '🛍️', categoria: 'Tienda', externo: true },
        { titulo: 'YouTube', url: 'https://youtube.com/@jesusgonzalez', icono: '▶️', categoria: 'Redes', externo: true },
        { titulo: 'Instagram', url: 'https://instagram.com/jesusgonzalez', icono: '📸', categoria: 'Redes', externo: true }
    ];

    return (
        <div className="pagina-link-bio">
            <div className="fondo-animado"></div>

            <div className="contenedor-link-bio">
                <div className="perfil-bio">
                    <div className="foto-perfil-bio">
                        <img src="/Imagenes/Jesus Fondo Blanco.png" alt="Jesús González" />
                        <div className="borde-dorado-foto"></div>
                    </div>

                    <h1 className="nombre-bio">Jesús González</h1>
                    <p className="descripcion-bio">
                        🪗 Maestro del Acordeón Vallenato<br />
                        🌟 +15 años de experiencia<br />
                        🎵 Compartiendo escenario con las leyendas
                    </p>
                </div>

                <div className="cta-reservar-bio">
                    <a href="/contrataciones" className="boton-cta-bio">
                        ⭐ Reservar Evento
                    </a>
                </div>

                <div className="seccion-enlaces-bio">
                    <div className="categoria-enlaces">
                        <h3 className="titulo-categoria">Principal</h3>
                        <div className="grid-enlaces-bio">
                            {enlaces.filter(e => e.categoria === 'Principal').map((enlace, idx) => (
                                <a
                                    key={idx}
                                    href={enlace.url}
                                    className={`enlace-bio ${enlace.destacado ? 'destacado' : ''}`}
                                    target={enlace.externo ? '_blank' : undefined}
                                    rel={enlace.externo ? 'noopener noreferrer' : undefined}
                                >
                                    <span className="icono-enlace-bio">{enlace.icono}</span>
                                    <span className="texto-enlace-bio">{enlace.titulo}</span>
                                    {enlace.externo && <span className="indicador-externo">↗</span>}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="separador-bio"></div>

                    <div className="categoria-enlaces">
                        <h3 className="titulo-categoria">Contenido</h3>
                        <div className="grid-enlaces-bio">
                            {enlaces.filter(e => e.categoria === 'Contenido').map((enlace, idx) => (
                                <a
                                    key={idx}
                                    href={enlace.url}
                                    className="enlace-bio"
                                    target={enlace.externo ? '_blank' : undefined}
                                    rel={enlace.externo ? 'noopener noreferrer' : undefined}
                                >
                                    <span className="icono-enlace-bio">{enlace.icono}</span>
                                    <span className="texto-enlace-bio">{enlace.titulo}</span>
                                    {enlace.externo && <span className="indicador-externo">↗</span>}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="separador-bio"></div>

                    <div className="categoria-enlaces">
                        <h3 className="titulo-categoria">Tienda & Educación</h3>
                        <div className="grid-enlaces-bio">
                            {enlaces.filter(e => e.categoria === 'Tienda' || e.categoria === 'Educación').map((enlace, idx) => (
                                <a
                                    key={idx}
                                    href={enlace.url}
                                    className="enlace-bio"
                                    target={enlace.externo ? '_blank' : undefined}
                                    rel={enlace.externo ? 'noopener noreferrer' : undefined}
                                >
                                    <span className="icono-enlace-bio">{enlace.icono}</span>
                                    <span className="texto-enlace-bio">{enlace.titulo}</span>
                                    {enlace.externo && <span className="indicador-externo">↗</span>}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="separador-bio"></div>

                    <div className="categoria-enlaces">
                        <h3 className="titulo-categoria">Redes Sociales</h3>
                        <div className="grid-enlaces-bio">
                            {enlaces.filter(e => e.categoria === 'Redes').map((enlace, idx) => (
                                <a
                                    key={idx}
                                    href={enlace.url}
                                    className="enlace-bio"
                                    target={enlace.externo ? '_blank' : undefined}
                                    rel={enlace.externo ? 'noopener noreferrer' : undefined}
                                >
                                    <span className="icono-enlace-bio">{enlace.icono}</span>
                                    <span className="texto-enlace-bio">{enlace.titulo}</span>
                                    {enlace.externo && <span className="indicador-externo">↗</span>}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkEnBio;
