'use client';

/**
 * Primitivas de motion-graphics propias de las páginas de conversión.
 * TODO es transform/opacity, GPU-friendly, sin librerías externas, y
 * se aquieta por completo bajo prefers-reduced-motion.
 *
 *  - <Contador>        número que cuenta hacia arriba al entrar en viewport.
 *  - <ParallaxSuave>   parallax sutil (translateY) ligado al scroll vía rAF.
 *  - <MarqueeArtistas> ticker editorial auto-desplazado de nombres.
 */

import React, { useEffect, useRef, useState } from 'react';

const reduceMovimiento = (): boolean =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ----------------------------- Contador ----------------------------- */

interface ContadorProps {
    /** Valor numérico final (ej. 15, 200). */
    valor: number;
    /** Texto antes del número (ej. "+"). */
    prefijo?: string;
    /** Texto después del número (ej. "%"). */
    sufijo?: string;
    /** Duración de la cuenta en ms. */
    duracion?: number;
    className?: string;
}

export const Contador: React.FC<ContadorProps> = ({
    valor,
    prefijo = '',
    sufijo = '',
    duracion = 1500,
    className,
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const [n, setN] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (reduceMovimiento()) {
            setN(valor);
            return;
        }

        let raf = 0;
        let inicio = 0;
        let corrido = false;

        const animar = (t: number) => {
            if (!inicio) inicio = t;
            const p = Math.min((t - inicio) / duracion, 1);
            // easeOutCubic
            const e = 1 - Math.pow(1 - p, 3);
            setN(Math.round(valor * e));
            if (p < 1) raf = requestAnimationFrame(animar);
        };

        const obs = new IntersectionObserver(
            ([entrada]) => {
                if (entrada.isIntersecting && !corrido) {
                    corrido = true;
                    raf = requestAnimationFrame(animar);
                    obs.disconnect();
                }
            },
            { threshold: 0.4 },
        );

        obs.observe(el);
        return () => {
            obs.disconnect();
            cancelAnimationFrame(raf);
        };
    }, [valor, duracion]);

    return (
        <span ref={ref} className={className}>
            {prefijo}
            {n}
            {sufijo}
        </span>
    );
};

/* --------------------------- ParallaxSuave -------------------------- */

interface ParallaxProps {
    children: React.ReactNode;
    /** Desplazamiento máximo en px (sobrio: 14–40). */
    intensidad?: number;
    className?: string;
}

/**
 * Mueve su contenido en Y según la posición de scroll relativa al
 * viewport. Solo transform → cero reflow. Listener pasivo + rAF.
 */
export const ParallaxSuave: React.FC<ParallaxProps> = ({
    children,
    intensidad = 26,
    className,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || reduceMovimiento()) return;
        if (window.matchMedia('(pointer: coarse)').matches) return;

        let raf = 0;
        let pendiente = false;

        const aplicar = () => {
            pendiente = false;
            const r = el.getBoundingClientRect();
            const vh = window.innerHeight || 1;
            // -1 (entra por abajo) → 1 (sale por arriba)
            const progreso = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
            const y = Math.max(-1, Math.min(1, progreso)) * -intensidad;
            el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
        };

        const onScroll = () => {
            if (pendiente) return;
            pendiente = true;
            raf = requestAnimationFrame(aplicar);
        };

        aplicar();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            cancelAnimationFrame(raf);
        };
    }, [intensidad]);

    return (
        <div ref={ref} className={className} style={{ willChange: 'transform' }}>
            {children}
        </div>
    );
};

/* -------------------------- MarqueeArtistas ------------------------- */

interface MarqueeProps {
    nombres: string[];
    /** Segundos por ciclo completo. */
    velocidad?: number;
}

/**
 * Ticker editorial infinito. CSS keyframes scope-eados (sin tocar el CSS
 * global). El contenido se duplica para un loop sin costuras. Se detiene
 * con prefers-reduced-motion (clamp en wrap a CSS @media).
 */
export const MarqueeArtistas: React.FC<MarqueeProps> = ({
    nombres,
    velocidad = 38,
}) => {
    const grupo = (clave: string) => (
        <ul
            className="flex shrink-0 items-center"
            aria-hidden={clave === 'b' ? 'true' : undefined}
        >
            {nombres.map((n) => (
                <li key={`${clave}-${n}`} className="flex items-center">
                    <span className="px-7 font-display text-lg text-hueso-tenue md:text-2xl">
                        {n}
                    </span>
                    <span aria-hidden="true" className="text-oro/60">
                        ◆
                    </span>
                </li>
            ))}
        </ul>
    );

    return (
        <div
            className="marquee-artistas relative flex overflow-hidden"
            role="list"
            aria-label="Artistas con los que ha compartido escenario"
            style={{
                maskImage:
                    'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
                WebkitMaskImage:
                    'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
            }}
        >
            <style>{`
                @keyframes marquee-artistas-desliz {
                    from { transform: translate3d(0,0,0); }
                    to   { transform: translate3d(-50%,0,0); }
                }
                .marquee-artistas > .marquee-pista {
                    animation: marquee-artistas-desliz ${velocidad}s linear infinite;
                }
                .marquee-artistas:hover > .marquee-pista {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .marquee-artistas > .marquee-pista {
                        animation: none !important;
                        transform: none !important;
                    }
                    .marquee-artistas {
                        overflow-x: auto;
                    }
                }
            `}</style>
            <div className="marquee-pista flex w-max" style={{ willChange: 'transform' }}>
                {grupo('a')}
                {grupo('b')}
            </div>
        </div>
    );
};
