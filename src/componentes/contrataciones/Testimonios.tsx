import React, { useState, useEffect } from 'react';
import './Testimonios.css';

interface Testimonio {
    nombre: string;
    evento: string;
    comentario: string;
    calificacion: number;
    imagen: string;
    fecha: string;
}

const testimonios: Testimonio[] = [
    {
        nombre: 'María Elena Rodríguez',
        evento: 'Boda de Lujo - Bogotá',
        comentario: 'Jesús González hizo de nuestra boda algo mágico. Su acordeón nos transportó a la Costa Caribe. Los invitados no paraban de bailar. ¡100% recomendado!',
        calificacion: 5,
        imagen: '/Imagenes/Jesus Gonzalez en concierto.jpg',
        fecha: 'Diciembre 2024'
    },
    {
        nombre: 'Carlos Andrés Mendoza',
        evento: 'Evento Corporativo - Medellín',
        comentario: 'Contratamos a Jesús para nuestro evento de empresa y fue espectacular. Profesionalismo total, llegó puntual y el show superó nuestras expectativas.',
        calificacion: 5,
        imagen: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
        fecha: 'Noviembre 2024'
    },
    {
        nombre: 'Ana Sofía Jiménez',
        evento: 'Cumpleaños 50 - Cali',
        comentario: 'Mi papá es fanático del vallenato y Jesús le hizo el día más especial. Tocó todas sus canciones favoritas. ¡Gracias por hacer inolvidable su cumpleaños!',
        calificacion: 5,
        imagen: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
        fecha: 'Octubre 2024'
    },
    {
        nombre: 'Roberto Silva',
        evento: 'Fiesta Empresarial - Barranquilla',
        comentario: 'Excelente servicio y calidad musical. Jesús González es un verdadero maestro del acordeón. Nuestros clientes quedaron encantados con la presentación.',
        calificacion: 5,
        imagen: '/Imagenes/Jesus Fondo Blanco.png',
        fecha: 'Septiembre 2024'
    }
];

const Testimonios: React.FC = () => {
    const [testimonioActivo, setTestimonioActivo] = useState(0);

    const siguienteTestimonio = () => {
        setTestimonioActivo((testimonioActivo + 1) % testimonios.length);
    };

    const testimonioAnterior = () => {
        setTestimonioActivo((testimonioActivo - 1 + testimonios.length) % testimonios.length);
    };

    const irATestimonio = (indice: number) => {
        setTestimonioActivo(indice);
    };

    useEffect(() => {
        const intervalo = setInterval(siguienteTestimonio, 6000);
        return () => clearInterval(intervalo);
    }, [testimonioActivo]);

    return (
        <section className="seccion-testimonios" id="testimonios">
            <div className="contenedor-testimonios">
                <div className="header-testimonios">
                    <h2 className="titulo-testimonios">Lo que dicen nuestros clientes</h2>
                    <p className="subtitulo-testimonios">Más de 200 eventos exitosos nos respaldan</p>
                </div>

                <div className="testimonio-principal">
                    <div className="testimonio-contenido">
                        <div className="estrellas-calificacion">
                            {Array(testimonios[testimonioActivo].calificacion).fill(0).map((_, i) => (
                                <span key={i} className="estrella">⭐</span>
                            ))}
                        </div>

                        <blockquote className="comentario-testimonio">
                            "{testimonios[testimonioActivo].comentario}"
                        </blockquote>

                        <div className="info-testimonio">
                            <div className="cliente-info">
                                <strong className="nombre-cliente">{testimonios[testimonioActivo].nombre}</strong>
                                <span className="evento-cliente">{testimonios[testimonioActivo].evento}</span>
                                <span className="fecha-evento">{testimonios[testimonioActivo].fecha}</span>
                            </div>

                            <div className="imagen-cliente">
                                <img
                                    src={testimonios[testimonioActivo].imagen}
                                    alt={`Cliente satisfecho - ${testimonios[testimonioActivo].nombre}`}
                                    width={80}
                                    height={80}
                                    className="imagen-cliente-redonda"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="controles-testimonios">
                    <button
                        className="btn-control"
                        onClick={testimonioAnterior}
                        aria-label="Testimonio anterior"
                    >
                        ←
                    </button>

                    <div className="indicadores-testimonios">
                        {testimonios.map((_, indice) => (
                            <button
                                key={indice}
                                className={`indicador ${indice === testimonioActivo ? 'activo' : ''}`}
                                onClick={() => irATestimonio(indice)}
                                aria-label={`Ir al testimonio ${indice + 1}`}
                            ></button>
                        ))}
                    </div>

                    <button
                        className="btn-control"
                        onClick={siguienteTestimonio}
                        aria-label="Testimonio siguiente"
                    >
                        →
                    </button>
                </div>

                <div className="estadisticas-testimonios">
                    <div className="estadistica">
                        <span className="numero-estadistica">200+</span>
                        <span className="texto-estadistica">Eventos realizados</span>
                    </div>
                    <div className="estadistica">
                        <span className="numero-estadistica">5.0</span>
                        <span className="texto-estadistica">Calificación promedio</span>
                    </div>
                    <div className="estadistica">
                        <span className="numero-estadistica">98%</span>
                        <span className="texto-estadistica">Clientes satisfechos</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonios;
