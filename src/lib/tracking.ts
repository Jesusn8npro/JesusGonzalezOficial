// Configuración centralizada para tracking de conversiones
// Reemplaza estos IDs con tus IDs reales

export const TRACKING_CONFIG = {
  GOOGLE_ADS_ID: 'AW-CONVERSION_ID',
  GOOGLE_ADS_CONVERSION_LABEL: 'CONVERSION_LABEL',
  FACEBOOK_PIXEL_ID: 'PIXEL_ID',
  GOOGLE_ANALYTICS_ID: 'GA_TRACKING_ID'
};

// Declaraciones de tipos para tracking
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    fbq: (command: string, eventName: string, params?: any) => void;
    dataLayer: any[];
  }
}

// Función para tracking de Google Ads
export function trackGoogleAdsConversion(eventLabel: string, value: number = 1) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${TRACKING_CONFIG.GOOGLE_ADS_ID}/${TRACKING_CONFIG.GOOGLE_ADS_CONVERSION_LABEL}`,
      event_category: 'Lead',
      event_label: eventLabel,
      value: value
    });
  }
}

// Función para tracking de Facebook Pixel
export function trackFacebookPixel(eventName: string, contentName: string, value: number = 1) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, {
      content_name: contentName,
      content_category: 'Music_Service',
      value: value,
      currency: 'COP'
    });
  }
}

// Función para tracking de Google Analytics
export function trackGoogleAnalytics(eventName: string, eventLabel: string, value: number = 1) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: eventLabel,
      value: value
    });
  }
}

// Función completa para tracking de conversión
export function trackConversion(eventLabel: string, contentName: string) {
  trackGoogleAdsConversion(eventLabel);
  trackFacebookPixel('Lead', contentName);
  trackGoogleAnalytics('generate_lead', eventLabel);
} 