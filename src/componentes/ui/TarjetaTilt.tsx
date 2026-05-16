'use client';

import React, { useRef } from 'react';

interface TarjetaTiltProps {
  children: React.ReactNode;
  className?: string;
  /** Inclinación máxima en grados (sobrio: 5–8). */
  intensidad?: number;
  /** Brillo que sigue al cursor. */
  resplandor?: boolean;
}

/**
 * Inclinación 3D sutil siguiendo el cursor. Se desactiva en táctil y
 * con prefers-reduced-motion. Usar con moderación (1 elemento estrella).
 */
const TarjetaTilt: React.FC<TarjetaTiltProps> = ({
  children,
  className,
  intensidad = 6,
  resplandor = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const permitido = () => {
    if (typeof window === 'undefined') return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    if (window.matchMedia('(pointer: coarse)').matches) return false;
    return true;
  };

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !permitido()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * intensidad * 2;
    const ry = (px - 0.5) * intensidad * 2;
    el.style.transform = `perspective(1100px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
    el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1100px) rotateX(0) rotateY(0)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={className}
      style={{
        transition: 'transform var(--dur-media) var(--ease-salida)',
        transformStyle: 'preserve-3d',
        background: resplandor
          ? 'radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(201,168,76,0.14), transparent 60%)'
          : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default TarjetaTilt;
