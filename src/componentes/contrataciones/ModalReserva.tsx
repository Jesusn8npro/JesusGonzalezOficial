import React, { useState } from 'react';
import './ModalReserva.css';
import { config } from '../../utilidades/configuracion';

interface ModalReservaProps {
    abierto: boolean;
    alCerrar: () => void;
}

const ModalReserva: React.FC<ModalReservaProps> = ({ abierto, alCerrar }) => {
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [numeroWhatsapp, setNumeroWhatsapp] = useState('');
    const [tipoEvento, setTipoEvento] = useState('');
    const [fechaEvento, setFechaEvento] = useState('');
    const [ciudadEvento, setCiudadEvento] = useState('Bogotá');
    const [enviando, setEnviando] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState('');

    const tiposDeEvento = [
        'Boda',
        'Cumpleaños',
        'Evento Corporativo',
        'Festival',
        'Serenata',
        'Parranda Vallenata',
        'Otro'
    ];

    const ciudadesCercanas = [
        'Bogotá',
        'Soacha',
        'Chía',
        'Cajicá',
        'Zipaquirá',
        'Facatativá',
        'Madrid',
        'Funza',
        'Mosquera',
        'La Calera',
        'Sopó',
        'Tocancipá',
        'Cota',
        'Tenjo',
        'Tabio',
        'Otra ciudad'
    ];

    const manejarCambioWhatsapp = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value.replace(/\D/g, ''); // Solo números
        if (valor.length <= 10) {
            setNumeroWhatsapp(valor);
        }
    };

    const validarFormulario = (): boolean => {
        if (nombreCompleto.trim().length < 3) {
            setError('Por favor ingresa tu nombre completo');
            return false;
        }

        if (numeroWhatsapp.length !== 10) {
            setError('El número de WhatsApp debe tener exactamente 10 dígitos');
            return false;
        }

        if (!tipoEvento) {
            setError('Por favor selecciona el tipo de evento');
            return false;
        }

        if (!fechaEvento) {
            setError('Por favor selecciona la fecha del evento');
            return false;
        }

        if (!ciudadEvento) {
            setError('Por favor selecciona la ciudad del evento');
            return false;
        }

        setError('');
        return true;
    };

    const enviarFormulario = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validarFormulario()) {
            return;
        }

        setEnviando(true);
        setError('');

        try {
            const numeroCompleto = `+57${numeroWhatsapp}`;
            const respuesta = await fetch('https://velostrategix-n8n.lnrubg.easypanel.host/webhook/whatsapp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombreCompleto,
                    numeroWhatsapp: numeroCompleto,
                    tipoEvento,
                    fechaEvento,
                    ciudadEvento,
                    fechaRegistro: new Date().toISOString(),
                }),
            });

            // Construir mensaje organizado para WhatsApp
            const formatearFechaHumana = (iso: string) => {
                const [y, m, d] = iso.split('-').map(Number);
                const fecha = new Date(y, (m || 1) - 1, d || 1);
                return fecha.toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });
            };
            const fechaHumana = formatearFechaHumana(fechaEvento);
            const mensajeWhatsApp = `Hola, mi nombre es ${nombreCompleto}. ` +
                `Estoy interesado en un servicio musical para ${tipoEvento} en ${ciudadEvento} ` +
                `el ${fechaHumana}. ` +
                `¿Me confirmas disponibilidad y me compartes la cotización, por favor?`;

            // Abrir WhatsApp con mensaje prellenado al número principal
            window.open(`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(mensajeWhatsApp)}`, '_blank');

            if (respuesta.ok) {
                setEnviado(true);
                // Cerrar modal después de 3 segundos
                setTimeout(() => {
                    alCerrar();
                    // Resetear formulario
                    setNombreCompleto('');
                    setNumeroWhatsapp('');
                    setTipoEvento('');
                    setFechaEvento('');
                    setCiudadEvento('Bogotá');
                    setEnviado(false);
                }, 3000);
            } else {
                setError('Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.');
            }
        } catch (err) {
            setError('Error de conexión. Por favor verifica tu internet e intenta de nuevo.');
            // Fallback: abrir WhatsApp aunque falle el webhook
            const formatearFechaHumana = (iso: string) => {
                const [y, m, d] = iso.split('-').map(Number);
                const fecha = new Date(y, (m || 1) - 1, d || 1);
                return fecha.toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });
            };
            const fechaHumana = formatearFechaHumana(fechaEvento);
            const mensajeWhatsApp = `Hola, mi nombre es ${nombreCompleto}. ` +
                `Estoy interesado en un servicio musical para ${tipoEvento} en ${ciudadEvento} ` +
                `el ${fechaHumana}. ` +
                `¿Me confirmas disponibilidad y me compartes la cotización, por favor?`;
            window.open(`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(mensajeWhatsApp)}`, '_blank');
        } finally {
            setEnviando(false);
        }
    };

    const cerrarModal = () => {
        if (!enviando) {
            alCerrar();
            setError('');
        }
    };

    if (!abierto) return null;

    return (
        <div className="modal-reserva-overlay" onClick={cerrarModal}>
            <div className="modal-reserva-contenido" onClick={(e) => e.stopPropagation()}>
                <button className="modal-reserva-cerrar" onClick={cerrarModal} aria-label="Cerrar modal">
                    ✕
                </button>

                {!enviado ? (
                    <>
                        <div className="modal-reserva-header">
                            <div className="modal-reserva-icono-whatsapp">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor" />
                                </svg>
                            </div>
                            <h2 className="modal-reserva-titulo">Estamos en línea, ¡hablemos!</h2>
                            <div className="modal-reserva-atencion">
                                <div className="modal-reserva-avatar">
                                    <img src="/secretaria.png" alt="Secretaría de reservas" />
                                    <span className="modal-reserva-online"></span>
                                </div>
                                <div className="modal-reserva-info">
                                    <p className="modal-reserva-label-atencion">Manager general de Jesús González</p>
                                    <p className="modal-reserva-nombre-atencion">Estamos listos para ayudarte</p>
                                    <p className="modal-reserva-estado">● En línea</p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-reserva-contacto">
                            <h3 className="modal-reserva-subtitulo">Contacto</h3>
                            <p className="modal-reserva-ayuda">Completa tus datos para brindarte mejor atención.</p>
                        </div>

                        <form className="modal-reserva-formulario" onSubmit={enviarFormulario}>
                            <div className="modal-reserva-campo">
                                <input
                                    type="text"
                                    id="nombreCompleto"
                                    className="modal-reserva-input"
                                    placeholder="Nombre *"
                                    value={nombreCompleto}
                                    onChange={(e) => setNombreCompleto(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="modal-reserva-campo modal-reserva-campo-fecha">
                                <input
                                    type="date"
                                    id="fechaEvento"
                                    className="modal-reserva-input"
                                    placeholder="Fecha del evento *"
                                    value={fechaEvento}
                                    onChange={(e) => setFechaEvento(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    required
                                />
                                <span className="modal-reserva-fecha-label">Fecha del evento</span>
                            </div>

                            <div className="modal-reserva-row">
                                <div className="modal-reserva-campo">
                                    <select
                                        id="tipoEvento"
                                        className="modal-reserva-select"
                                        value={tipoEvento}
                                        onChange={(e) => setTipoEvento(e.target.value)}
                                        required
                                    >
                                        <option value="">Tipo de Evento *</option>
                                        {tiposDeEvento.map((tipo) => (
                                            <option key={tipo} value={tipo}>
                                                {tipo}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="modal-reserva-campo">
                                    <select
                                        id="ciudadEvento"
                                        className="modal-reserva-select"
                                        value={ciudadEvento}
                                        onChange={(e) => setCiudadEvento(e.target.value)}
                                        required
                                    >
                                        {ciudadesCercanas.map((ciudad) => (
                                            <option key={ciudad} value={ciudad}>
                                                {ciudad}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="modal-reserva-campo-whatsapp">
                                <div className="modal-reserva-prefijo">
                                    <span className="modal-reserva-bandera">🇨🇴</span>
                                    <span className="modal-reserva-codigo">+57</span>
                                </div>
                                <input
                                    type="tel"
                                    id="numeroWhatsapp"
                                    className="modal-reserva-input-whatsapp"
                                    placeholder="Número de WhatsApp *"
                                    value={numeroWhatsapp}
                                    onChange={manejarCambioWhatsapp}
                                    maxLength={10}
                                    required
                                />
                            </div>

                            {error && (
                                <div className="modal-reserva-error">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="modal-reserva-boton"
                                disabled={enviando}
                            >
                                {enviando ? (
                                    <>
                                        <span className="modal-reserva-spinner"></span>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <svg className="modal-reserva-icono-boton" viewBox="0 0 24 24" fill="none">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor" />
                                        </svg>
                                        Hablemos por WhatsApp
                                    </>
                                )}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="modal-reserva-exito">
                        <div className="modal-reserva-exito-icono">✓</div>
                        <h3 className="modal-reserva-exito-titulo">¡Solicitud Enviada!</h3>
                        <p className="modal-reserva-exito-mensaje">
                            Gracias por tu interés. Nos pondremos en contacto contigo muy pronto por WhatsApp.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalReserva;
