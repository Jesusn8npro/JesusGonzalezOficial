'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Barra de progreso de lectura fija arriba del todo. Listener de scroll
 * pasivo + requestAnimationFrame (sin libs, sin layout shift). Mide el
 * avance respecto al artículo (#articulo-cuerpo) y no a toda la página.
 */
const BarraProgreso: React.FC = () => {
  const [pct, setPct] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const calcular = () => {
      ticking.current = false;
      const art = document.getElementById('articulo-cuerpo');
      if (!art) return;
      const inicio = art.offsetTop;
      const alto = art.offsetHeight;
      const vista = window.innerHeight;
      const y = window.scrollY;
      const recorrido = Math.max(1, alto - vista + 0);
      const avance = (y - inicio + vista * 0.25) / recorrido;
      setPct(Math.min(100, Math.max(0, avance * 100)));
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(calcular);
    };

    calcular();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent"
    >
      <div
        className="h-full bg-oro motion-safe:transition-[width] motion-safe:duration-150 motion-safe:ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

export default BarraProgreso;
