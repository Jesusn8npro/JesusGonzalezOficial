import React, { useState, useEffect } from 'react';
import './Beneficios.css';

interface Beneficio {
    icon: string;
    titulo: string;
    desc: string;
}

const imagenesSlider = [
    '/Imagenes/Jesus Gonzalez en concierto.jpg',
    '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
    '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
    '/Imagenes/Jesus Fondo Blanco.png'
];

const beneficios: Beneficio[] = [
    { icon: '🏆', titulo: '+10 años de experiencia', desc: 'Trayectoria sólida y profesional en eventos de todo tipo.' },
    { icon: '🎤', titulo: 'Shows con grandes estrellas', desc: 'Hemos compartido escenario con los mejores del género.' },
    { icon: '💯', titulo: '100% clientes satisfechos', desc: 'Valoraciones perfectas y recomendaciones reales.' },
    { icon: '🎵', titulo: 'Repertorio personalizado', desc: 'Nos adaptamos a cada evento y público.' },
    { icon: '💎', titulo: 'Calidad y lujo', desc: 'Sonido profesional y atención VIP en cada show.' },
    { icon: '🔥', titulo: 'Versatilidad y energía', desc: 'Shows dinámicos para cualquier tipo de evento.' }
];

const Beneficios: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((current + 1) % imagenesSlider.length);
    const prev = () => setCurrent((current - 1 + imagenesSlider.length) % imagenesSlider.length);

    useEffect(() => {
        const interval = setInterval(next, 3500);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <section className="beneficios-section" id="beneficios">
            <div className="beneficios-header">
                <h2 className="beneficios-title">¿Por qué elegirnos para tu evento?</h2>
                <div className="beneficios-desc">
                    Más que música: experiencia, profesionalismo y un historial de compartir escenario con los más grandes.
                    Descubre por qué somos la opción #1 para eventos inolvidables.
                </div>
            </div>
            <div className="beneficios-grid">
                <div className="beneficios-col left">
                    <div className="beneficios-list">
                        {beneficios.slice(0, 3).map((b, i) => (
                            <div
                                key={i}
                                className="beneficio animated-beneficio"
                                style={{ animationDelay: `${i * 0.12 + 0.08}s` }}
                            >
                                <span className="beneficio-icon">{b.icon}</span>
                                <div className="beneficio-content">
                                    <div className="beneficio-titulo">{b.titulo}</div>
                                    <div className="beneficio-desc">{b.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slider-col center">
                    <div className="slider-container">
                        <img className="slider-img" src={imagenesSlider[current]} alt="Foto profesionalismo musical" />
                    </div>
                    <div className="slider-controls">
                        <button className="slider-btn" onClick={prev} aria-label="Anterior">←</button>
                        <button className="slider-btn" onClick={next} aria-label="Siguiente">→</button>
                    </div>
                    <div className="credit">Fotos reales: cambia las imágenes por tus fotos con artistas top</div>
                </div>
                <div className="beneficios-col right">
                    <div className="beneficios-list">
                        {beneficios.slice(3, 6).map((b, i) => (
                            <div
                                key={i}
                                className="beneficio animated-beneficio"
                                style={{ animationDelay: `${i * 0.12 + 0.18}s` }}
                            >
                                <span className="beneficio-icon">{b.icon}</span>
                                <div className="beneficio-content">
                                    <div className="beneficio-titulo">{b.titulo}</div>
                                    <div className="beneficio-desc">{b.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Beneficios;
