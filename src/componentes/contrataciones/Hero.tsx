import React from 'react';
import { trackConversion } from '../../utilidades/tracking';
import './Hero.css';

interface HeroProps {
    eventos?: string;
    titulo?: string;
    descripcion?: string;
    beneficios?: string[];
    urlImagen?: string;
    onAbrirModal?: () => void;
}

const Hero: React.FC<HeroProps> = ({
    eventos = "+200 eventos realizados",
    titulo = "Jesús González | Maestro del Acordeón Vallenato",
    descripcion = "Acordeonista profesional con +15 años de experiencia internacional. Ha compartido escenario con los más grandes del vallenato: Poncho Zuleta, Jorge Celedón, Felipe Peláez y Orlando Acosta. Shows de primer nivel para eventos exclusivos.",
    beneficios = [
        "🪗 Jesús González - Maestro del acordeón con +15 años",
        "🌍 Giras mundiales con artistas de renombre",
        "🏆 Grabaciones con Felipe Peláez y grandes estrellas",
        "💎 Shows profesionales con puesta en escena VIP"
    ],
    urlImagen = "/Imagenes/Jesus Fondo Blanco.png",
    onAbrirModal
}) => {
    const abrirModalConTracking = () => {
        trackConversion('Hero_Button_Click', 'Modal_Reserva');
        if (onAbrirModal) {
            onAbrirModal();
        }
    };

    return (
        <section className="hero">
            <div className="contenido">
                <div className="estrellas">⭐⭐⭐⭐⭐ {eventos}</div>
                <h1 className="titulo">🏆 {titulo}</h1>
                <div className="descripcion">{descripcion}</div>
                <div className="beneficios">
                    {beneficios.map((beneficio, index) => (
                        <span key={index} className="beneficio">{beneficio}</span>
                    ))}
                </div>

                <div className="cta-metricas">
                    <button className="btn-reserva-hero" onClick={abrirModalConTracking}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="6" fill="#25d366" />
                            <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        ¡Reserva tu show ahora!
                    </button>
                    <div className="metricas-hero">
                        <div className="metrica">
                            <span className="metrica-num">100+</span>
                            <span className="metrica-label">Shows Realizados</span>
                        </div>
                        <div className="metrica">
                            <span className="metrica-num">#1</span>
                            <span className="metrica-label">Agrupación 2025</span>
                        </div>
                        <div className="metrica">
                            <span className="metrica-num">100%</span>
                            <span className="metrica-label">Éxito Garantizado</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="artista-wrapper">
                <div className="decoracion-circulo" aria-hidden="true">
                    <svg className="circulo-bg" width="370" height="370" viewBox="0 0 370 370" fill="none">
                        <circle cx="185" cy="185" r="160" fill="#ffe08222" filter="url(#glow)" />
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="18" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <g className="estrellas-circulo">
                            <polygon points="185,55 191,75 212,75 195,87 201,107 185,95 169,107 175,87 158,75 179,75" fill="#ffe082" />
                            <polygon points="265,145 268,153 277,153 270,158 273,166 265,161 258,166 261,158 254,153 263,153" fill="#ffe082" />
                            <polygon points="115,145 118,153 127,153 120,158 123,166 115,161 108,166 111,158 104,153 113,153" fill="#ffe082" />
                            <polygon points="215,245 218,253 227,253 220,258 223,266 215,261 208,266 211,258 204,253 213,253" fill="#ffe082" />
                            <polygon points="155,245 158,253 167,253 160,258 163,266 155,261 148,266 151,258 144,253 153,253" fill="#ffe082" />
                        </g>
                    </svg>
                </div>
                <img
                    loading="lazy"
                    width="450"
                    height="450"
                    className="foto-artista-png"
                    src={urlImagen}
                    alt="Jesús González - Maestro del Acordeón Vallenato Profesional"
                    decoding="async"
                />
            </div>
        </section>
    );
};

export default Hero;
