'use client';

import React, { useEffect, useRef, useState } from 'react';

type Variante = 'sube' | 'zoom' | 'lado';

interface RevelarProps {
  children: React.ReactNode;
  /** Etiqueta a renderizar. Por defecto div. */
  as?: keyof React.JSX.IntrinsicElements;
  /** Retardo en segundos para escalonar (stagger). */
  retardo?: number;
  variante?: Variante;
  className?: string;
  /** Una sola vez (no re-oculta al salir del viewport). */
  unaVez?: boolean;
  style?: React.CSSProperties;
}

/**
 * Revela su contenido con un fade + desplazamiento sobrio al entrar en
 * viewport. Respeta prefers-reduced-motion vía CSS ([data-revelar]).
 */
const Revelar: React.FC<RevelarProps> = ({
  children,
  as = 'div',
  retardo = 0,
  variante = 'sube',
  className,
  unaVez = true,
  style,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          if (unaVez) obs.disconnect();
        } else if (!unaVez) {
          setVisible(false);
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [unaVez]);

  const Etiqueta = as as React.ElementType;

  return (
    <Etiqueta
      ref={ref}
      className={className}
      data-revelar={variante === 'sube' ? '' : variante}
      data-visible={visible ? 'true' : 'false'}
      style={{ ...style, ['--rv-delay' as string]: `${retardo * 1000}ms` }}
    >
      {children}
    </Etiqueta>
  );
};

export default Revelar;
