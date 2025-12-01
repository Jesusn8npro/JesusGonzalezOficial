import React, { useEffect } from 'react';
import BannerUrgencia from '../../componentes/contrataciones/BannerUrgencia';
import Hero from '../../componentes/contrataciones/Hero';
import Servicios from '../../componentes/contrataciones/Servicios';
import Beneficios from '../../componentes/contrataciones/Beneficios';
import ProcesoContratacion from '../../componentes/contrataciones/ProcesoContratacion';
import GaleriaVideos from '../../componentes/contrataciones/GaleriaVideos';
import Testimonios from '../../componentes/contrataciones/Testimonios';
import CTAOptimizado from '../../componentes/contrataciones/CTAOptimizado';
// Widget y modal ahora se muestran globalmente desde App

interface ContratacionesProps {
    onAbrirModal?: () => void;
}

const Contrataciones: React.FC<ContratacionesProps> = ({ onAbrirModal }) => {

    // Ocultar barra de navegación en esta página
    useEffect(() => {
        const navbar = document.querySelector('.barra-navegacion') as HTMLElement;
        if (navbar) {
            navbar.style.display = 'none';
        }

        // Restaurar al salir de la página
        return () => {
            if (navbar) {
                navbar.style.display = '';
            }
        };
    }, []);

    return (
        <>
            <BannerUrgencia onAbrirModal={onAbrirModal} />
            <Hero onAbrirModal={onAbrirModal} />
            <Servicios onAbrirModal={onAbrirModal} />
            <Beneficios />
            <ProcesoContratacion />
            <GaleriaVideos />
            <Testimonios />
            <CTAOptimizado onAbrirModal={onAbrirModal} />
        </>
    );
};

export default Contrataciones;
