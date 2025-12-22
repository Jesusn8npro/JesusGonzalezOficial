import { config } from './configuracion';
import { trackConversion } from './tracking';

/**
 * Genera un link de WhatsApp con mensaje personalizado
 * @param mensaje - Mensaje personalizado para el chat
 * @param trackingEvent - Nombre del evento para tracking (opcional)
 * @returns URL de WhatsApp
 */
export const generarLinkWhatsApp = (
    mensaje: string = '¡Hola! Me interesa contratar a Jesús González para mi evento. ¿Me pueden ayudar?',
    trackingEvent?: string
): string => {
    // Track conversion si se proporciona evento
    if (trackingEvent) {
        trackConversion(trackingEvent, 'WhatsApp_Direct');
    }

    // Track Google Ads conversion
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion();
    }

    const mensajeCodificado = encodeURIComponent(mensaje);
    return `https://wa.me/${config.whatsappNumber}?text=${mensajeCodificado}`;
};

/**
 * Abre WhatsApp directamente en una nueva pestaña
 * @param mensaje - Mensaje personalizado para el chat
 * @param trackingEvent - Nombre del evento para tracking (opcional)
 */
export const abrirWhatsApp = (
    mensaje: string = '¡Hola! Me interesa contratar a Jesús González para mi evento. ¿Me pueden ayudar?',
    trackingEvent?: string
): void => {
    const link = generarLinkWhatsApp(mensaje, trackingEvent);
    window.open(link, '_blank');
};

/**
 * Mensajes predefinidos para diferentes contextos
 */
export const mensajesWhatsApp = {
    general: '¡Hola! Me interesa contratar a Jesús González para mi evento. ¿Me pueden ayudar?',
    hero: '¡Hola! Vi el sitio web de Jesús González y me interesa cotizar un show para mi evento. ¿Podemos hablar?',
    servicios: {
        premium: '¡Hola! Me interesa la Parranda Vallenata Premium de Jesús González. ¿Me pueden dar más información?',
        vip: '¡Hola! Me interesa el Show Semicompleto VIP de Jesús González. ¿Me pueden dar más información?',
        gala: '¡Hola! Me interesa el Show Completo de Gala de Jesús González. ¿Me pueden dar más información?'
    },
    urgencia: '¡Hola! Quiero apartar una fecha para mi evento con Jesús González. ¿Tienen disponibilidad?',
    cta: '¡Hola! Quiero reservar a Jesús González para mi evento. ¿Cuál es el siguiente paso?',
    proceso: '¡Hola! Me gustaría iniciar el proceso de contratación de Jesús González. ¿Me pueden ayudar?'
};
