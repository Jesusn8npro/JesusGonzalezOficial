'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CalendarDays, MapPin, MessageSquareText, Clock } from 'lucide-react';
import Revelar from '../../componentes/ui/Revelar';
import BotonWhatsapp from '../../componentes/ui/BotonWhatsapp';
import { config } from '../../utilidades/configuracion';
import { enviarLead } from '../../utilidades/leads';

interface ContactoProps {
    onAbrirModal?: () => void;
}

const Contacto: React.FC<ContactoProps> = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        ciudad: '',
        tipoEvento: '',
        fecha: '',
        mensaje: '',
    });

    const manejarCambioWhatsapp = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value.replace(/\D/g, '');
        if (valor.length <= 10) {
            setFormData({ ...formData, telefono: valor });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const numeroSanitizado = formData.telefono.replace(/\D/g, '');
        const numeroCompleto = `+57${numeroSanitizado}`;

        const fechaHumana = (() => {
            const fecha = new Date(formData.fecha);
            return fecha.toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });
        })();

        const mensajeWhatsApp = `Hola, mi nombre es ${formData.nombre}. ` +
            `Estoy interesado en un servicio musical para ${formData.tipoEvento} en ${formData.ciudad} ` +
            `el ${fechaHumana}. ` +
            (formData.mensaje ? `Detalles: ${formData.mensaje}. ` : '') +
            `¿Me confirmas disponibilidad y me compartes la cotización, por favor?`;

        await enviarLead({
            nombreCompleto: formData.nombre,
            numeroWhatsapp: numeroCompleto,
            tipoEvento: formData.tipoEvento,
            fechaEvento: formData.fecha,
            ciudadEvento: formData.ciudad,
            mensaje: formData.mensaje,
            origen: 'formulario_contacto',
        });

        // Abrimos WhatsApp (vía rápida) y, en paralelo, llevamos al usuario
        // a /gracias como confirmación clara dentro del sitio.
        window.open(
            `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(mensajeWhatsApp)}`,
            '_blank',
        );
        router.push('/gracias');
    };

    const claseCampo =
        'w-full rounded-[var(--radius-sello)] border border-[color:var(--linea)] bg-[color:var(--color-tinta)]/60 px-4 py-3 text-[0.95rem] text-hueso placeholder:text-hueso-tenue/70 transition-colors duration-300 focus:border-oro focus:outline-none';
    const claseLabel =
        'mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-hueso-tenue';

    return (
        <div className="grano relative bg-tinta text-hueso">
            {/* HERO */}
            <section className="relative overflow-hidden border-b border-[color:var(--linea)]">
                <div
                    className="pointer-events-none absolute inset-0 opacity-70"
                    style={{
                        background:
                            'radial-gradient(70% 90% at 50% 0%, rgba(201,168,76,0.13), transparent 70%)',
                    }}
                    aria-hidden="true"
                />
                <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
                    <Revelar>
                        <p className="kicker">Respuesta inmediata</p>
                        <h1 className="mt-5 font-display text-[2.4rem] font-semibold leading-[1.05] text-hueso sm:text-[3.2rem]">
                            Shows vallenatos <span className="text-oro">premium</span>
                        </h1>
                        <p className="mx-auto mt-5 max-w-xl text-[1.02rem] leading-relaxed text-hueso-tenue">
                            Bodas, eventos corporativos y celebraciones elegantes con la
                            dirección artística de Jesús González. Escríbenos y coordinamos
                            tu fecha hoy mismo.
                        </p>
                    </Revelar>

                    <Revelar retardo={0.1}>
                        <div className="mt-9 flex flex-col items-center gap-4">
                            <BotonWhatsapp
                                mensaje="¡Hola! Vi el sitio de Jesús González y quiero cotizar un show para mi evento. ¿Podemos hablar?"
                                evento="contacto_hero_whatsapp"
                                variante="whatsapp"
                                tamano="lg"
                            >
                                Cotizar ahora por WhatsApp
                            </BotonWhatsapp>
                            <p className="text-[0.82rem] text-hueso-tenue">
                                Vía rápida · o completa el formulario detallado abajo
                            </p>
                        </div>
                    </Revelar>
                </div>
            </section>

            {/* FORMULARIO */}
            <section className="mx-auto max-w-2xl px-6 py-20">
                <Revelar>
                    <div className="rounded-[var(--radius-grande)] border border-[color:var(--linea)] bg-tinta-2 p-7 shadow-[var(--shadow-suave)] sm:p-10">
                        <div className="mb-8 text-center">
                            <h2 className="font-display text-[1.7rem] font-semibold text-hueso">
                                Solicita tu cotización
                            </h2>
                            <p className="mt-2 text-[0.92rem] text-hueso-tenue">
                                Cuéntanos los detalles y te respondemos con la propuesta.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div>
                                <label htmlFor="nombre" className={claseLabel}>
                                    Nombre completo
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    required
                                    value={formData.nombre}
                                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                    placeholder="Tu nombre"
                                    className={claseCampo}
                                />
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="telefono" className={claseLabel}>
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        required
                                        value={formData.telefono}
                                        onChange={manejarCambioWhatsapp}
                                        maxLength={10}
                                        placeholder="3001234567"
                                        className={claseCampo}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="ciudad" className={claseLabel}>
                                        <MapPin size={13} className="mr-1.5 inline text-oro" />
                                        Ciudad
                                    </label>
                                    <input
                                        type="text"
                                        id="ciudad"
                                        required
                                        value={formData.ciudad}
                                        onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                                        placeholder="Ciudad del evento"
                                        className={claseCampo}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="tipoEvento" className={claseLabel}>
                                        <MessageSquareText size={13} className="mr-1.5 inline text-oro" />
                                        Tipo de evento
                                    </label>
                                    <select
                                        id="tipoEvento"
                                        required
                                        value={formData.tipoEvento}
                                        onChange={(e) => setFormData({ ...formData, tipoEvento: e.target.value })}
                                        className={`${claseCampo} appearance-none`}
                                    >
                                        <option value="">Selecciona...</option>
                                        <option value="Boda">Boda</option>
                                        <option value="Cumpleaños">Cumpleaños</option>
                                        <option value="Evento Corporativo">Evento Corporativo</option>
                                        <option value="Parranda">Parranda</option>
                                        <option value="Concierto">Concierto</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="fecha" className={claseLabel}>
                                        <CalendarDays size={13} className="mr-1.5 inline text-oro" />
                                        Fecha tentativa
                                    </label>
                                    <input
                                        type="date"
                                        id="fecha"
                                        required
                                        value={formData.fecha}
                                        onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                                        className={`${claseCampo} [color-scheme:dark]`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="mensaje" className={claseLabel}>
                                    Mensaje
                                </label>
                                <textarea
                                    id="mensaje"
                                    rows={4}
                                    value={formData.mensaje}
                                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                                    placeholder="Cuéntanos más sobre tu evento..."
                                    className={`${claseCampo} resize-none`}
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-2 inline-flex w-full items-center justify-center gap-2.5 rounded-[var(--radius-sello)] bg-oro px-8 py-4 text-[1.02rem] font-semibold tracking-tight text-tinta shadow-[var(--shadow-oro)] transition-[transform,background-color] duration-300 ease-[var(--ease-salida)] hover:bg-oro-claro active:scale-[0.985]"
                            >
                                Enviar solicitud
                            </button>

                            <p className="flex items-center justify-center gap-2 text-center text-[0.8rem] text-hueso-tenue">
                                <Clock size={14} className="text-oro" />
                                Te contactamos por WhatsApp en minutos
                            </p>
                        </form>
                    </div>
                </Revelar>
            </section>
        </div>
    );
};

export default Contacto;
