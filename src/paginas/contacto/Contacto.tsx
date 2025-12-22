import React, { useState } from 'react';
import './Contacto.css';
import { config } from '../../utilidades/configuracion';

interface ContactoProps { onAbrirModal?: () => void }

const Contacto: React.FC<ContactoProps> = ({ onAbrirModal }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        ciudad: '',
        tipoEvento: '',
        fecha: '',
        mensaje: ''
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

        try {
            await fetch('https://velostrategix-n8n.lnrubg.easypanel.host/webhook/whatsapp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nombreCompleto: formData.nombre,
                    numeroWhatsapp: numeroCompleto,
                    tipoEvento: formData.tipoEvento,
                    fechaEvento: formData.fecha,
                    ciudadEvento: formData.ciudad,
                    mensaje: formData.mensaje,
                    fechaRegistro: new Date().toISOString(),
                }),
            });
        } catch (err) {
            // En caso de fallo en webhook, seguimos con WhatsApp
        }

        window.open(`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(mensajeWhatsApp)}`, '_blank');
    };

    return (
        <div className="pagina-contacto">
            <section className="hero-contacto">
                <div className="contenedor-hero-contacto">
                    <h1 className="titulo-contacto">Contacto • Shows Vallenatos Premium</h1>
                    <p className="subtitulo-contacto">Bodas, corporativos y celebraciones elegantes. Dirección artística liderada por Jesús González. Respuesta inmediata.</p>
                    <button className="boton-whatsapp-rapido" onClick={() => onAbrirModal?.()}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Z" />
                        </svg>
                        Cotizar por WhatsApp
                    </button>
                </div>
            </section>

            <section className="seccion-formulario">
                <div className="contenedor-formulario">
                    {/* CTA superior eliminado para evitar duplicidad; usamos el del hero */}

                    <form onSubmit={handleSubmit} className="formulario-contacto">
                        <h2 className="titulo-formulario">Solicita tu Cotización</h2>

                        <div className="campo-formulario">
                            <label htmlFor="nombre">Nombre Completo</label>
                            <input
                                type="text"
                                id="nombre"
                                required
                                value={formData.nombre}
                                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div className="campo-formulario">
                            <label htmlFor="telefono">Teléfono</label>
                            <input
                                type="tel"
                                id="telefono"
                                required
                                value={formData.telefono}
                                onChange={manejarCambioWhatsapp}
                                maxLength={10}
                                placeholder="3001234567"
                            />
                        </div>

                        <div className="campo-formulario">
                            <label htmlFor="ciudad">Ciudad</label>
                            <input
                                type="text"
                                id="ciudad"
                                required
                                value={formData.ciudad}
                                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                                placeholder="Ciudad del evento"
                            />
                        </div>

                        <div className="campo-formulario">
                            <label htmlFor="tipoEvento">Tipo de Evento</label>
                            <select
                                id="tipoEvento"
                                required
                                value={formData.tipoEvento}
                                onChange={(e) => setFormData({ ...formData, tipoEvento: e.target.value })}
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

                        <div className="campo-formulario">
                            <label htmlFor="fecha">Fecha Tentativa</label>
                            <input
                                type="date"
                                id="fecha"
                                required
                                value={formData.fecha}
                                onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                            />
                        </div>

                        <div className="campo-formulario">
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea
                                id="mensaje"
                                rows={4}
                                value={formData.mensaje}
                                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                                placeholder="Cuéntanos más sobre tu evento..."
                            />
                        </div>

                        <button type="submit" className="boton-enviar-formulario">
                            Enviar Solicitud
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contacto;
