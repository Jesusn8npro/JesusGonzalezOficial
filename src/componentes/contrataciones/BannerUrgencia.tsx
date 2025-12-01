import React, { useState, useEffect } from 'react';
import './BannerUrgencia.css';

interface BannerUrgenciaProps {
    onAbrirModal?: () => void;
}

const BannerUrgencia: React.FC<BannerUrgenciaProps> = ({ onAbrirModal }) => {
    const [tiempoRestante, setTiempoRestante] = useState(60 * 60 * 2); // 2 horas

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTiempoRestante((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const convertirSegundos = (seg: number) => {
        const h = Math.floor(seg / 3600);
        const m = Math.floor((seg % 3600) / 60);
        const s = seg % 60;
        return { h, m, s };
    };

    const formatearNumero = (num: number) => (num < 10 ? `0${num}` : num);

    const { h, m, s } = convertirSegundos(tiempoRestante);

    const manejarClick = () => {
        if (onAbrirModal) {
            onAbrirModal();
        }
    };

    return (
        <section className="banner-urgencia">
            <div className="banner-urgencia__contenido">
                <div className="banner-urgencia__info">
                    <span className="banner-urgencia__icon" aria-label="Agenda casi llena">⏰</span>
                    <span className="banner-urgencia__mensaje">
                        <b>¡Agenda casi llena!</b> Solo quedan <span style={{ color: '#bfa14a', fontWeight: 700 }}>
                            {formatearNumero(h)}:{formatearNumero(m)}:{formatearNumero(s)}
                        </span>
                    </span>
                    <span className="banner-urgencia__sub">No te quedes sin tu show, ¡mereces lo mejor en tu evento!</span>
                </div>
                <button onClick={manejarClick} className="banner-urgencia__boton animacion-pulso">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ marginRight: '0.7rem' }}>
                        <rect width="24" height="24" rx="6" fill="#25d366"></rect>
                        <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    ¡Cotiza tu evento ahora!
                </button>
            </div>
        </section>
    );
};

export default BannerUrgencia;
