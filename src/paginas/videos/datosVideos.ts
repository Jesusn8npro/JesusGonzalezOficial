export interface MediaItem {
    id: string;
    titulo: string;
    tipo: 'video' | 'imagen';
    categoria: string;
    thumbnail: string;
    videoUrl?: string;
    imagenUrl?: string;
    descripcion?: string;
}

export const mediaItems: MediaItem[] = [
    // Videos
    {
        id: 'vgDABDveFn0',
        titulo: 'Con Jorge Celedón',
        tipo: 'video',
        categoria: 'Conciertos',
        thumbnail: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
        videoUrl: 'https://www.youtube.com/embed/vgDABDveFn0',
        descripcion: 'Presentación junto al Rey del Vallenato'
    },
    {
        id: 'Ll5rSyCDM78',
        titulo: 'Con Poncho Zuleta',
        tipo: 'video',
        categoria: 'Parrandas',
        thumbnail: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
        videoUrl: 'https://www.youtube.com/embed/Ll5rSyCDM78',
        descripcion: 'Parranda vallenata con el maestro Poncho Zuleta'
    },
    {
        id: 'oPoqVKg30Cg',
        titulo: 'Show en Vivo',
        tipo: 'video',
        categoria: 'Conciertos',
        thumbnail: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
        videoUrl: 'https://www.youtube.com/embed/oPoqVKg30Cg',
        descripcion: 'Concierto en vivo - Energía pura'
    },
    {
        id: 'video4',
        titulo: 'Presentación TV',
        tipo: 'video',
        categoria: 'Television',
        thumbnail: '/Imagenes/Jesus Gonzalez en concierto.jpg',
        videoUrl: 'https://www.youtube.com/embed/vgDABDveFn0',
        descripcion: 'Aparición en programa de televisión nacional'
    },
    // Imágenes
    {
        id: 'img1',
        titulo: 'Jesús González - Perfil Profesional',
        tipo: 'imagen',
        categoria: 'Backstage',
        thumbnail: '/Imagenes/Foto de perfil para JESUS GONZALEZ.jpg',
        imagenUrl: '/Imagenes/Foto de perfil para JESUS GONZALEZ.jpg',
        descripcion: 'Retrato profesional del maestro'
    },
    {
        id: 'img2',
        titulo: 'Vallenato Exclusivo',
        tipo: 'imagen',
        categoria: 'Conciertos',
        thumbnail: '/Imagenes/Jesus-Gonzalez-Vallenato-Exclusivo.jpg',
        imagenUrl: '/Imagenes/Jesus-Gonzalez-Vallenato-Exclusivo.jpg',
        descripcion: 'Momento especial en concierto exclusivo'
    },
    {
        id: 'img3',
        titulo: 'Parrandas Vallenatas',
        tipo: 'imagen',
        categoria: 'Parrandas',
        thumbnail: '/Imagenes/Parrandas Vallenatas.jpg',
        imagenUrl: '/Imagenes/Parrandas Vallenatas.jpg',
        descripcion: 'Parranda tradicional vallenata'
    },
    {
        id: 'img4',
        titulo: 'Jesús en Concierto',
        tipo: 'imagen',
        categoria: 'Conciertos',
        thumbnail: '/Imagenes/Jesus Gonzalez en concierto.jpg',
        imagenUrl: '/Imagenes/Jesus Gonzalez en concierto.jpg',
        descripcion: 'En plena presentación en vivo'
    }
];

export const categorias = ['Todos', 'Conciertos', 'Parrandas', 'Television', 'Backstage'];
