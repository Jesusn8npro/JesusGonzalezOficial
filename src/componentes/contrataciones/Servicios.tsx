import React, { useState, useEffect } from 'react';
import './Servicios.css';

interface Service {
    nombre: string;
    subtituloColor: string;
    textoColor: string;
    imagen: string;
    descripcion: string;
    duracion: string;
    capacidad: string;
    animacionClase: string;
    color: string;
    bg: string;
    boton: string;
    videoUrl: string;
}

const servicios: Service[] = [
    {
        nombre: 'Parranda Vallenata Premium',
        subtituloColor: '#d4af37',
        textoColor: '#3d2f00',
        imagen: '/Imagenes/Jesus Gonzalez en concierto.jpg',
        descripcion: 'Una experiencia vallenata íntima y auténtica, perfecta para eventos exclusivos y celebraciones personales inolvidables.',
        duracion: '2-3 horas',
        capacidad: 'Hasta 150p',
        animacionClase: 'premium-animation',
        color: 'linear-gradient(145deg, #1a1a1a 0%, #2b2100 100%)',
        bg: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=cover&w=800&q=60',
        boton: 'Ver Detalles y Precios',
        videoUrl: 'Ll5rSyCDM78'
    },
    {
        nombre: 'Show Semicompleto VIP',
        subtituloColor: '#9333ea',
        textoColor: '#e9d5ff',
        imagen: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
        descripcion: 'El balance perfecto entre un show de gran formato y un evento corporativo o boda de lujo. Producción y sonido de primer nivel.',
        duracion: '3-4 horas',
        capacidad: 'Hasta 300p',
        animacionClase: 'vip-animation',
        color: 'linear-gradient(145deg, #1a1a1a 0%, #2a004b 100%)',
        bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=800&q=60',
        boton: 'Ver Detalles y Precios',
        videoUrl: 'oPoqVKg30Cg'
    },
    {
        nombre: 'Show Completo de Gala',
        subtituloColor: '#e11d48',
        textoColor: '#ffd5dd',
        imagen: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
        descripcion: 'La producción musical definitiva para eventos masivos. Un espectáculo de concierto con despliegue técnico y artístico completo.',
        duracion: '4-5 horas',
        capacidad: 'Masivos',
        animacionClase: 'gala-animation',
        color: 'linear-gradient(145deg, #1a1a1a 0%, #4b0011 100%)',
        bg: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=cover&w=800&0',
        boton: 'Ver Detalles y Precios',
        videoUrl: 'vgDABDveFn0'
    }
];

interface ServiceModalContentProps {
    service: Service;
    closeModal: () => void;
    onAbrirModalReserva?: () => void;
}

const ServiceModalContent: React.FC<ServiceModalContentProps> = ({ service, closeModal, onAbrirModalReserva }) => {
    const [videoActivo, setVideoActivo] = useState(false);

    const abrirReserva = () => {
        closeModal(); // Cerrar el modal de servicio
        if (onAbrirModalReserva) {
            setTimeout(() => {
                onAbrirModalReserva(); // Abrir el modal de reserva
            }, 300);
        }
    };

    return (
        <div className="modal-servicio-premium">
            <button className="modal-servicio-cerrar" onClick={closeModal} aria-label="Cerrar">
                ✕
            </button>

            <div className="modal-servicio-header">
                <h2 className="modal-servicio-titulo">{service.nombre}</h2>
                <p className="modal-servicio-descripcion">{service.descripcion}</p>
            </div>

            <div className="modal-servicio-contenido">
                {/* Beneficios */}
                <div className="modal-servicio-beneficios">
                    <h3 className="modal-servicio-subtitulo">✨ Lo que incluye:</h3>
                    <div className="modal-servicio-grid">
                        <div className="modal-servicio-item">
                            <span className="modal-servicio-icono">🪗</span>
                            <div className="modal-servicio-texto">
                                <strong>Jesús González</strong>
                                <span>Maestro del acordeón</span>
                            </div>
                        </div>
                        <div className="modal-servicio-item">
                            <span className="modal-servicio-icono">🎤</span>
                            <div className="modal-servicio-texto">
                                <strong>Show en vivo</strong>
                                <span>Experiencia profesional</span>
                            </div>
                        </div>
                        <div className="modal-servicio-item">
                            <span className="modal-servicio-icono">🎵</span>
                            <div className="modal-servicio-texto">
                                <strong>Repertorio</strong>
                                <span>Personalizado</span>
                            </div>
                        </div>
                        <div className="modal-servicio-item">
                            <span className="modal-servicio-icono">⭐</span>
                            <div className="modal-servicio-texto">
                                <strong>Calidad</strong>
                                <span>Garantizada</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video */}
                <div className="modal-servicio-video">
                    {!videoActivo ? (
                        <div className="modal-servicio-preview" onClick={() => setVideoActivo(true)}>
                            <img src={service.imagen} alt={`Preview de ${service.nombre}`} />
                            <div className="modal-servicio-play">
                                <svg width="60" height="60" viewBox="0 0 60 60">
                                    <circle cx="30" cy="30" r="30" fill="rgba(37, 211, 102, 0.95)" />
                                    <polygon points="24,18 24,42 42,30" fill="white" />
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <div className="modal-servicio-iframe">
                            <iframe
                                src={`https://www.youtube.com/embed/${service.videoUrl}?rel=0&showinfo=0&autoplay=1&controls=1`}
                                title={`Video de ${service.nombre}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                frameBorder="0"
                            ></iframe>
                            <button className="modal-servicio-volver" onClick={() => setVideoActivo(false)}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                                Volver
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="modal-servicio-cta">
                <p className="modal-servicio-mensaje">
                    ¡Vive un espectáculo fuera de serie con la agrupación revelación 2025!
                </p>
                <button className="modal-servicio-boton" onClick={abrirReserva}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Reservar por WhatsApp
                </button>
                <p className="modal-servicio-garantia">
                    🛡️ Garantía asegurada • Agrupación revelación 2025
                </p>
            </div>
        </div>
    );
};

interface ServiciosProps {
    onAbrirModal?: () => void;
}

const Servicios: React.FC<ServiciosProps> = ({ onAbrirModal }) => {
    const [modalAbierto, setModalAbierto] = useState(false);
    const [servicioSeleccionado, setServicioSeleccionado] = useState<Service | null>(null);

    const handleOpenModal = (servicio: Service) => {
        setServicioSeleccionado(servicio);
        setModalAbierto(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setModalAbierto(false);
        setServicioSeleccionado(null);
        document.body.style.overflow = '';
    };

    // Cerrar modal con tecla ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && modalAbierto) {
                handleCloseModal();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [modalAbierto]);

    return (
        <>
            <section className="servicios-section" id="servicios">
                <h2 className="servicios-titulo-principal">Contrata el Show Perfecto Para Tu Evento</h2>
                <div className="subtitulo">
                    Desde parrandas íntimas hasta conciertos completos. Más de 100 eventos exitosos nos respaldan.
                </div>
                <div className="tarjetas">
                    {servicios.map((servicio) => (
                        <div
                            key={servicio.nombre}
                            className={`tarjeta-profesional ${servicio.animacionClase}`}
                            style={{
                                // @ts-ignore
                                '--accent-color': servicio.subtituloColor,
                                background: servicio.color
                            }}
                            onClick={() => handleOpenModal(servicio)}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="tarjeta-glow"></div>
                            <div className="tarjeta-contenido">
                                <div className="tarjeta-header">
                                    <div className="icono-container">
                                        <img className="tarjeta-icono" src={servicio.imagen} alt={`Icono de ${servicio.nombre}`} />
                                        <div className="icono-glow"></div>
                                    </div>
                                    <h3 className="tarjeta-titulo">{servicio.nombre}</h3>
                                </div>

                                <p className="tarjeta-descripcion">{servicio.descripcion}</p>

                                <div className="info-pills">
                                    <div className="pill">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12,6 12,12 16,14" />
                                        </svg>
                                        <span>{servicio.duracion}</span>
                                    </div>
                                    <div className="pill">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                        <span>{servicio.capacidad}</span>
                                    </div>
                                </div>

                                <button className="tarjeta-boton" onClick={(e) => { e.stopPropagation(); handleOpenModal(servicio); }}>
                                    <span className="boton-texto">{servicio.boton}</span>
                                    <span className="boton-arrow">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal de Servicio - Renderizado directamente aquí */}
            {modalAbierto && servicioSeleccionado && (
                <div
                    className="modal-overlay-servicios"
                    onClick={handleCloseModal}
                >
                    <div
                        className="modal-contenedor-servicios"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ServiceModalContent
                            service={servicioSeleccionado}
                            closeModal={handleCloseModal}
                            onAbrirModalReserva={onAbrirModal}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Servicios;
