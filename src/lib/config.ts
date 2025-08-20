// Configuración centralizada para el proyecto Jesús González
export const config = {
  // URLs base
  baseUrl: 'https://jesusgonzalez.com.co',
  
  // Rutas de imágenes (solo para referencia local)
  images: {
    hero: 'Jesus Fondo Blanco.png',
    parranda: 'Jesus Gonzalez en Concierto.jpg',
    semicompleto: 'El pollo irra y Jesus Gonzalez.jpg',
    completo: 'Jorge Celedon y Jesus Gonzalez.jpg',
    ponchoZuleta: 'Jesus Gonzalez y Poncho Zuleta.jpg',
    logo: 'Logo Jesus Gonzalez.png'
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