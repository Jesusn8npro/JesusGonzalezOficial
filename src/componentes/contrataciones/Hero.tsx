import React from 'react';
import { trackConversion } from '../../utilidades/tracking';
import { config } from '../../utilidades/configuracion';
import './Hero.css';

interface HeroProps {
    eventos?: string;
    titulo?: string;
    descripcion?: string;
    beneficios?: string[];
    urlImagen?: string;
}

const Hero: React.FC<HeroProps> = ({
    eventos = "Experiencia comprobada en innumerables eventos",
    titulo = "Shows Vallenatos Premium • Jesús González",
    descripcion = "Acordeonista profesional con más de 15 años. Ha tocado con Poncho Zuleta, Jean Carlos Centeno, Elder Dayán Díaz y Rafael Santos, y ha grabado con Felipe Peláez. Shows de lujo para bodas, corporativos y celebraciones exclusivas.",
    beneficios = [
        "💎 Show de lujo para bodas, corporativos y celebraciones",
        "🪗 Dirección artística liderada por Jesús González",
        "👥 Formato profesional (6–9 músicos en acción)",
        "🔊 Sonido y montaje impecable, repertorio curado"
    ],
    urlImagen = "/Imagenes/Jesus Fondo Blanco.png"
}) => {
    const abrirWhatsApp = () => {
        trackConversion('Hero_WhatsApp_Click', 'WhatsApp');
        const numero = config.whatsappNumber;
        const texto = encodeURIComponent('Hola, quiero cotizar un show vallenato premium para mi evento. Fecha, ciudad y tipo de evento:');
        (window as any).gtag_report_conversion?.();
        window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
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
                    <button className="btn-reserva-hero" onClick={abrirWhatsApp}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="6" fill="#25d366" />
                            <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Cotizar por WhatsApp ahora
                    </button>
                    <div className="metricas-hero">
                        <div className="metrica">
                            <span className="metrica-num">PREMIUM</span>
                            <span className="metrica-label">Formato 6–9 músicos</span>
                        </div>
                        <div className="metrica">
                            <span className="metrica-num">ARTISTAS</span>
                            <span className="metrica-label">Poncho • Felipe • Jean Carlos</span>
                        </div>
                        <div className="metrica">
                            <span className="metrica-num">INMEDIATA</span>
                            <span className="metrica-label">Respuesta por WhatsApp</span>
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
