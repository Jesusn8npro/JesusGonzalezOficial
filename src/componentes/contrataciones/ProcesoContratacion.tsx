import React, { useState } from 'react';
import { abrirWhatsApp, mensajesWhatsApp } from '../../utilidades/whatsapp';
import './ProcesoContratacion.css';

interface Paso {
    titulo: string;
    icono: string;
    explicacion: string;
    color: string;
    fondo: string;
}

const pasos: Paso[] = [
    {
        titulo: '1. Elige tu show',
        icono: '🎶',
        explicacion: 'Selecciona el tipo de show musical ideal para tu evento. Te asesoramos para que tu experiencia sea inolvidable.',
        color: 'from-blue-500 to-blue-600',
        fondo: '/Imagenes/Jesus Gonzalez en concierto.jpg'
    },
    {
        titulo: '2. Completa el formulario',
        icono: '📝',
        explicacion: 'Llena el formulario rápido y seguro con los datos de tu evento. ¡Solo toma un minuto!',
        color: 'from-purple-500 to-purple-600',
        fondo: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg'
    },
    {
        titulo: '3. Recibe confirmación',
        icono: '📲',
        explicacion: 'Te notificamos y resolvemos dudas por WhatsApp. Atención inmediata y personalizada.',
        color: 'from-green-500 to-green-600',
        fondo: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg'
    },
    {
        titulo: '4. Aparta tu fecha',
        icono: '💳',
        explicacion: 'Realiza el abono del 50% y tu evento queda reservado. ¡Listo para vivir una experiencia musical de otro nivel!',
        color: 'from-yellow-500 to-yellow-600',
        fondo: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg'
    }
];

const ProcesoContratacion: React.FC = () => {
    const [pasoActivo, setPasoActivo] = useState(0);

    const siguientePaso = () => {
        if (pasoActivo < pasos.length - 1) {
            setPasoActivo(pasoActivo + 1);
        }
    };

    const pasoAnterior = () => {
        if (pasoActivo > 0) {
            setPasoActivo(pasoActivo - 1);
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center animate-fade-in">
                    Tu Evento de Lujo a Solo 4 Pasos
                </h2>
                <p className="text-lg text-gray-600 text-center mb-16 animate-fade-in">
                    Contratar nuestro show es tan fácil como emocionante. Sigue nuestro proceso interactivo y asegura una experiencia musical inolvidable.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0">
                    {pasos.map((paso, i) => (
                        <React.Fragment key={i}>
                            <div className="relative flex flex-col items-center group">
                                <div
                                    className={`transition-all duration-500 bg-gradient-to-br ${paso.color} rounded-full w-24 h-24 flex items-center justify-center text-5xl shadow-lg mb-3 border-4 border-white
                    ${pasoActivo === i ? 'scale-110 ring-4 ring-yellow-400' : 'opacity-60 grayscale'} animate-pop-in`}
                                >
                                    {paso.icono}
                                </div>
                                <h3 className={`font-bold text-lg text-gray-700 text-center mb-1 transition-all duration-300 ${pasoActivo === i ? 'text-gray-900' : 'opacity-70'}`}>
                                    {paso.titulo}
                                </h3>
                                {pasoActivo === i && (
                                    <div className="relative mt-4 bg-white border border-gray-200 rounded-2xl shadow-xl p-6 text-gray-600 text-sm max-w-xs z-10 animate-fade-in-up">
                                        <img src={paso.fondo} alt={`Imagen del paso ${paso.titulo}`} className="rounded-lg w-full h-32 object-cover object-center mb-4 shadow-md" />
                                        <p className="font-medium">{paso.explicacion}</p>
                                        <div className="flex justify-between mt-5 gap-2">
                                            {pasoActivo > 0 && (
                                                <button className="bg-gray-200 text-gray-800 font-bold px-4 py-2 text-xs rounded-full shadow-sm hover:bg-gray-300 transition-all min-w-[80px]" onClick={pasoAnterior}>← Anterior</button>
                                            )}
                                            {pasoActivo < pasos.length - 1 ? (
                                                <button className="bg-gray-800 text-white font-bold px-4 py-2 text-xs rounded-full shadow hover:bg-gray-900 transition-all animate-pop-in min-w-[100px]" onClick={siguientePaso}>Siguiente →</button>
                                            ) : (
                                                <button onClick={() => abrirWhatsApp(mensajesWhatsApp.proceso, 'Proceso_WhatsApp_Click')} className="bg-yellow-500 text-black font-bold px-4 py-2 text-xs rounded-full shadow hover:bg-yellow-400 transition-all animate-pop-in min-w-[120px] text-center">¡Reservar por WhatsApp!</button>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            {i < pasos.length - 1 && (
                                <div className="hidden md:block w-16 h-1 bg-gray-200 rounded-full mx-4 animate-grow-in"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcesoContratacion;
