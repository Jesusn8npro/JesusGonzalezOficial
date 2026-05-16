'use client';

import React from 'react';
import { CalendarCheck } from 'lucide-react';
import { mensajesWhatsApp } from '../../utilidades/whatsapp';
import BotonWhatsapp from '../ui/BotonWhatsapp';

/**
 * Franja de escasez honesta — sin cuentas regresivas falsas. Limpia,
 * legible y premium en oscuro y claro, desktop y móvil. Los tokens se
 * auto-cambian con el tema; nada hardcodeado.
 */
const BannerUrgencia: React.FC = () => {
    return (
        <section className="sticky top-0 z-[100] border-b border-[color:var(--linea-fuerte)] bg-tinta-3/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:px-10">
                <div className="flex items-center gap-3.5">
                    <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-oro/40 text-oro"
                    >
                        <CalendarCheck size={18} strokeWidth={1.8} />
                    </span>
                    <p className="text-[0.9rem] leading-snug text-hueso md:text-[0.95rem]">
                        <span className="font-semibold text-oro">Agenda limitada.</span>{' '}
                        Temporada <span className="font-semibold">nov–ene</span> se
                        reserva con meses de anticipación.
                        <span className="hidden text-hueso-tenue sm:inline">
                            {' '}Confirma tu fecha antes de que se ocupe.
                        </span>
                    </p>
                </div>

                <BotonWhatsapp
                    mensaje={mensajesWhatsApp.urgencia}
                    evento="Banner_Urgencia_Click"
                    variante="oro"
                    tamano="md"
                    className="shrink-0 max-sm:w-full"
                >
                    Consultar mi fecha
                </BotonWhatsapp>
            </div>
        </section>
    );
};

export default BannerUrgencia;
