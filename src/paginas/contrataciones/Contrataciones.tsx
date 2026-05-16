'use client';

import React, { useEffect } from 'react';
import BannerUrgencia from '../../componentes/contrataciones/BannerUrgencia';
import Hero from '../../componentes/contrataciones/Hero';
import Credibilidad from '../../componentes/contrataciones/Credibilidad';
import Servicios from '../../componentes/contrataciones/Servicios';
import Beneficios from '../../componentes/contrataciones/Beneficios';
import ProcesoContratacion from '../../componentes/contrataciones/ProcesoContratacion';
import GaleriaVideos from '../../componentes/contrataciones/GaleriaVideos';
import Testimonios from '../../componentes/contrataciones/Testimonios';
import CTAOptimizado from '../../componentes/contrataciones/CTAOptimizado';

const Contrataciones: React.FC = () => {
    // Página inmersiva: ocultamos el navbar/footer globales para una
    // experiencia enfocada 100% en convertir a conversación de WhatsApp.
    useEffect(() => {
        const navbar = document.querySelector('.barra-navegacion') as HTMLElement | null;
        const footer = document.querySelector('.pie-de-pagina') as HTMLElement | null;
        if (navbar) navbar.style.display = 'none';
        if (footer) footer.style.display = 'none';

        return () => {
            if (navbar) navbar.style.display = '';
            if (footer) footer.style.display = '';
        };
    }, []);

    return (
        <main className="relative bg-tinta text-hueso">
            <BannerUrgencia />
            <Hero />
            <Credibilidad />
            <Servicios />
            <Beneficios />
            <ProcesoContratacion />
            <GaleriaVideos />
            <Testimonios />
            <CTAOptimizado />
        </main>
    );
};

export default Contrataciones;
