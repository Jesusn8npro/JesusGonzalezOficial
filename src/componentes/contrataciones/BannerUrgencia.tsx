'use client';

import React, { useEffect, useState } from 'react';
import { CalendarCheck, X } from 'lucide-react';
import { mensajesWhatsApp } from '../../utilidades/whatsapp';
import BotonWhatsapp from '../ui/BotonWhatsapp';

const CLAVE_CIERRE = 'banner-urgencia-cerrado';

/**
 * Franja de escasez honesta — compacta, con botón de cierre. El cierre
 * se recuerda por sesión (vuelve a aparecer en una visita nueva).
 */
const BannerUrgencia: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            setVisible(sessionStorage.getItem(CLAVE_CIERRE) !== '1');
        } catch {
            setVisible(true);
        }
    }, []);

    const cerrar = () => {
        setVisible(false);
        try {
            sessionStorage.setItem(CLAVE_CIERRE, '1');
        } catch {
            /* sin storage, solo se oculta en esta vista */
        }
    };

    if (!visible) return null;

    return (
        <section className="sticky top-0 z-[100] border-b border-[color:var(--linea-fuerte)] bg-tinta-3/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1240px] items-center gap-3 px-4 py-2 md:px-10">
                <CalendarCheck
                    size={16}
                    strokeWidth={1.8}
                    className="shrink-0 text-oro"
                    aria-hidden="true"
                />
                <p className="min-w-0 flex-1 truncate text-[0.82rem] leading-snug text-hueso md:text-[0.9rem]">
                    <span className="font-semibold text-oro">Agenda limitada:</span>{' '}
                    la temporada <span className="font-semibold">nov–ene</span> se reserva
                    con meses de anticipación.
                </p>
                <BotonWhatsapp
                    mensaje={mensajesWhatsApp.urgencia}
                    evento="Banner_Urgencia_Click"
                    variante="oro"
                    tamano="sm"
                    className="shrink-0 whitespace-nowrap max-sm:hidden"
                >
                    Consultar mi fecha
                </BotonWhatsapp>
                <button
                    type="button"
                    onClick={cerrar}
                    aria-label="Cerrar aviso"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-hueso-tenue transition-colors hover:bg-tinta-2 hover:text-oro"
                >
                    <X size={15} strokeWidth={2} />
                </button>
            </div>
        </section>
    );
};

export default BannerUrgencia;
