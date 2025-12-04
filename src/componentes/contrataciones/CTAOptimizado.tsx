import React from 'react';
import { trackConversion } from '../../utilidades/tracking';
import './CTAOptimizado.css';

interface CTAOptimizadoProps {
    onAbrirModal?: () => void;
}

const CTAOptimizado: React.FC<CTAOptimizadoProps> = ({ onAbrirModal }) => {
    const abrirModalConTracking = () => {
        trackConversion('CTA_Modal_Click', 'Modal_Reserva');
        if (onAbrirModal) {
            onAbrirModal();
        }
    };

    return (
        <section className="seccion-cta" id="contacto">
            <div className="contenedor-cta">
                <div className="contenido-cta">
                    <div className="header-cta">
                        <h2 className="titulo-cta">¿Listo para hacer tu evento inolvidable?</h2>
                        <p className="subtitulo-cta">Jesús González está disponible para tu próxima celebración</p>
                    </div>

                    <div className="beneficios-cta">
                        <div className="beneficio-cta">
                            <span className="icono-beneficio">🎵</span>
                            <span className="texto-beneficio">Repertorio personalizado para tu evento</span>
                        </div>
                        <div className="beneficio-cta">
                            <span className="icono-beneficio">⏰</span>
                            <span className="texto-beneficio">Respuesta inmediata por WhatsApp</span>
                        </div>
                        <div className="beneficio-cta">
                            <span className="icono-beneficio">💎</span>
                            <span className="texto-beneficio">Calidad profesional garantizada</span>
                        </div>
                    </div>

                    <div className="acciones-cta">
                        <button className="btn-principal" onClick={abrirModalConTracking}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            ¡Reserva tu fecha ahora!
                        </button>
                    </div>

                    <div className="info-adicional">
                        <p className="texto-info">📞 <strong>Respuesta en 5–15 minutos</strong></p>
                        <p className="texto-info">💳 <strong>Reserva con 50% de anticipo</strong></p>
                        <p className="texto-info">🎯 <strong>Cumplimiento y dirección artística profesional</strong></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTAOptimizado;
