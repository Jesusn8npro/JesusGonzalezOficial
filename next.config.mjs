/** @type {import('next').NextConfig} */
const nextConfig = {
  // Oculta el indicador "N" de desarrollo de Next.js en la esquina.
  devIndicators: false,
  eslint: {
    // El typecheck de `next build` es la puerta principal. ESLint se
    // mantiene disponible vía `npm run lint` pero no bloquea el build
    // (la config de Next requiere plugins extra del ecosistema ESLint).
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Anchos típicos del layout: móvil colombiano dominante + breakpoints
    // del diseño (max-w-md/lg, grids de 2-4 columnas, hero a pantalla).
    deviceSizes: [360, 414, 640, 768, 1024, 1240, 1536, 1920],
    imageSizes: [132, 200, 300, 420, 560],
  },
  async redirects() {
    return [
      {
        source: '/jesus-gonzalez',
        destination: '/contrataciones',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
