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
    { icon: '🏆', titulo: '+15 años de experiencia', desc: 'Dirección artística liderada por Jesús González.' },
    { icon: '🎤', titulo: 'Trayectoria junto a grandes artistas', desc: 'Presentaciones con Poncho Zuleta, Jean Carlos Centeno, Elder Dayán Díaz y Rafael Santos; grabación con Felipe Peláez.' },
    { icon: '🎛️', titulo: 'Sonido profesional', desc: 'Montaje limpio, equilibrio musical y estética cuidada.' },
    { icon: '🎵', titulo: 'Repertorio personalizado', desc: 'Selección curada para bodas, corporativos y gala.' },
    { icon: '💎', titulo: 'Formato de músicos de élite', desc: 'Presentación impecable y atención premium en cada show.' },
    { icon: '🔥', titulo: 'Energía y elegancia', desc: 'Interacción medida y momentos memorables.' }
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
                <h2 className="beneficios-title">¿Por qué elegir a Jesús González?</h2>
                <div className="beneficios-desc">
                    Más que música: experiencia, profesionalismo y un historial junto a artistas reconocidos.
                    Descubre por qué nuestros shows son la elección para eventos de alta categoría.
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
