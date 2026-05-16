// Funciones de tracking para Google Analytics, Facebook Pixel, etc.

import { config } from './configuracion';

export const trackConversion = (eventName: string, eventCategory: string) => {
    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, {
            event_category: eventCategory,
            event_label: 'Jesus Gonzalez Website'
        });
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', eventName, {
            category: eventCategory
        });
    }

    // Console log para desarrollo
    console.log(`[Tracking] ${eventName} - ${eventCategory}`);
};

export const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', config.analytics.googleAnalyticsId, {
            page_path: window.location.pathname,
            page_title: pageName
        });
    }

    console.log(`[Page View] ${pageName}`);
};
