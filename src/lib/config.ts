// Configuración centralizada para el proyecto Jesús González
export const config = {
  // URLs base
  baseUrl: 'https://jesusgonzalez.com.co',
  
  // Rutas de imágenes
  images: {
    hero: '/Imagenes/Jesus Fondo Blanco.png',
    parranda: '/Imagenes/Jesus Gonzalez en Concierto.jpg',
    semicompleto: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
    completo: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
    ponchoZuleta: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
    logo: '/Imagenes/Logo Jesus Gonzalez.png'
  },
  
  // URLs completas de imágenes
  imageUrls: {
    hero: 'https://jesusgonzalez.com.co/Imagenes/Jesus Fondo Blanco.png',
    parranda: 'https://jesusgonzalez.com.co/Imagenes/Jesus Gonzalez en Concierto.jpg',
    semicompleto: 'https://jesusgonzalez.com.co/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
    completo: 'https://jesusgonzalez.com.co/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
    ponchoZuleta: 'https://jesusgonzalez.com.co/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
    logo: 'https://jesusgonzalez.com.co/Imagenes/Logo Jesus Gonzalez.png'
  },
  
  // Función para obtener URL de imagen
  getImageUrl: (path: string) => {
    return `https://jesusgonzalez.com.co${path}`;
  }
}; 