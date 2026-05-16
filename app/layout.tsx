import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Fraunces, Hanken_Grotesk } from 'next/font/google';
import './globals.css';

const fuenteDisplay = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--fuente-display',
  display: 'swap',
});

const fuenteSans = Hanken_Grotesk({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--fuente-sans',
  display: 'swap',
});

import BarraNavegacion from '../src/componentes/comunes/BarraNavegacion/BarraNavegacion';
import PieDePagina from '../src/componentes/comunes/PieDePagina/PieDePagina';
import BotonWhatsappFlotante from '../src/componentes/contrataciones/BotonWhatsappFlotante';
import InicializadorEtiquetas from './InicializadorEtiquetas';
import JsonLd from '../src/componentes/seo/JsonLd';
import {
  musicGroupSchema,
  localBusinessSchema,
} from '../src/componentes/seo/esquemas';

const SITIO = 'https://jesusgonzalez.com.co';
const OG_IMAGEN = '/Imagenes/Jesus Gonzalez en concierto.jpg';

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: {
    default:
      'Jesús González | Acordeonista Vallenato para Bodas y Eventos en Colombia',
    template: '%s | Jesús González',
  },
  description:
    'Jesús González, acordeonista vallenato profesional en Colombia. Shows en vivo para bodas, eventos corporativos, parrandas y galas en Bogotá, Medellín, Cali, Barranquilla y Cartagena. Cotiza por WhatsApp.',
  keywords: [
    'acordeonista vallenato',
    'vallenato para bodas',
    'parranda vallenata',
    'show de vallenato',
    'vallenato eventos corporativos',
    'contratar acordeonista Colombia',
    'Jesús González acordeonista',
  ],
  authors: [{ name: 'Jesús González' }],
  creator: 'Jesús González',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: SITIO,
    siteName: 'Jesús González',
    title:
      'Jesús González | Acordeonista Vallenato para Bodas y Eventos en Colombia',
    description:
      'Shows de vallenato en vivo para bodas, eventos corporativos, parrandas y galas en las principales ciudades de Colombia. Cotiza tu fecha por WhatsApp.',
    images: [
      {
        url: OG_IMAGEN,
        width: 1200,
        height: 630,
        alt: 'Jesús González tocando el acordeón en concierto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Jesús González | Acordeonista Vallenato para Bodas y Eventos en Colombia',
    description:
      'Shows de vallenato en vivo para bodas, eventos corporativos y parrandas en Colombia. Cotiza por WhatsApp.',
    images: [OG_IMAGEN],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/Logo Jesus Gonzalez.png',
    apple: '/Logo Jesus Gonzalez.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${fuenteDisplay.variable} ${fuenteSans.variable}`}
    >
      <head>
        {/* Tema oscuro/claro sin parpadeo (corre antes del primer paint) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var k='tema',t=localStorage.getItem(k);if(t!=='claro'&&t!=='oscuro'){t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'claro':'oscuro';}document.documentElement.dataset.tema=t;}catch(e){document.documentElement.dataset.tema='oscuro';}})();",
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HX4CNELDGR"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-HX4CNELDGR');
          `}
        </Script>
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof (url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17235584981/BRKXCPmspcobENXPyJpA',
                'value': 30000.0,
                'currency': 'COP',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function (c, l, a, r, i, t, y) {
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
              t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
              y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "upoa7lbpdr");
          `}
        </Script>
      </head>
      <body>
        <JsonLd id="ld-musicgroup" data={musicGroupSchema()} />
        <JsonLd id="ld-business" data={localBusinessSchema()} />
        <InicializadorEtiquetas />
        <div className="app-container">
          <BarraNavegacion />
          <main>{children}</main>
          {/* Widget global de WhatsApp - Directo sin modal */}
          <BotonWhatsappFlotante />
          <PieDePagina />
        </div>
      </body>
    </html>
  );
}
