'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

type Tema = 'oscuro' | 'claro';

/**
 * Botón para alternar modo oscuro/claro. El tema real lo fija un script
 * en <head> (sin parpadeo); aquí solo se conmuta y se persiste.
 * SSR-safe: el icono se resuelve tras montar para evitar mismatch.
 */
const InterruptorTema: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [tema, setTema] = useState<Tema | null>(null);

  useEffect(() => {
    const actual = (document.documentElement.dataset.tema as Tema) || 'oscuro';
    setTema(actual);
  }, []);

  const alternar = () => {
    const siguiente: Tema = tema === 'claro' ? 'oscuro' : 'claro';
    document.documentElement.dataset.tema = siguiente;
    try {
      localStorage.setItem('tema', siguiente);
    } catch {
      /* almacenamiento no disponible: el cambio sigue siendo visual */
    }
    setTema(siguiente);
  };

  const esClaro = tema === 'claro';

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={esClaro ? 'Activar modo oscuro' : 'Activar modo claro'}
      title={esClaro ? 'Modo oscuro' : 'Modo claro'}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--linea-fuerte)] text-hueso transition-[color,background-color,transform] duration-300 ease-[var(--ease-salida)] hover:border-oro hover:text-oro active:scale-90 ${className}`}
    >
      <span className="relative block h-[18px] w-[18px]">
        <Sun
          size={18}
          className={`absolute inset-0 transition-all duration-300 ${esClaro ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-90 opacity-0'}`}
        />
        <Moon
          size={18}
          className={`absolute inset-0 transition-all duration-300 ${esClaro ? 'scale-50 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}
        />
      </span>
    </button>
  );
};

export default InterruptorTema;
