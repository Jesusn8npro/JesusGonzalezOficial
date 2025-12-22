import React, { useEffect } from 'react';
import BannerUrgencia from '../../componentes/contrataciones/BannerUrgencia';
import Hero from '../../componentes/contrataciones/Hero';
import Servicios from '../../componentes/contrataciones/Servicios';
import Beneficios from '../../componentes/contrataciones/Beneficios';
import ProcesoContratacion from '../../componentes/contrataciones/ProcesoContratacion';
import GaleriaVideos from '../../componentes/contrataciones/GaleriaVideos';
import Testimonios from '../../componentes/contrataciones/Testimonios';
import CTAOptimizado from '../../componentes/contrataciones/CTAOptimizado';

const Contrataciones: React.FC = () => {

    // Ocultar barra de navegación y pie de página en esta página
    useEffect(() => {
        const navbar = document.querySelector('.barra-navegacion') as HTMLElement;
        const footer = document.querySelector('.pie-de-pagina') as HTMLElement;
        if (navbar) {
            navbar.style.display = 'none';
        }
        if (footer) {
            footer.style.display = 'none';
        }

        // Restaurar al salir de la página
        return () => {
            if (navbar) navbar.style.display = '';
            if (footer) footer.style.display = '';
        };
    }, []);

    return (
        <>
            <BannerUrgencia />
            <Hero />
            <Servicios />
            <Beneficios />
            <ProcesoContratacion />
            <GaleriaVideos />
            <Testimonios />
            <CTAOptimizado />
        </>
    );
};

export default Contrataciones;
