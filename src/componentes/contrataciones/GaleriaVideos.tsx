import React, { useState } from 'react';
import './GaleriaVideos.css';

interface Video {
    artista: string;
    videoId: string;
    thumb: string;
    descripcion: string;
}

const videos: Video[] = [
    {
        artista: 'Jorge Celedón',
        videoId: 'vgDABDveFn0',
        thumb: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
        descripcion: 'Show en vivo junto a Jorge Celedón.'
    },
    {
        artista: 'Poncho Zuleta',
        videoId: 'Ll5rSyCDM78',
        thumb: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
        descripcion: 'Presentación exclusiva con Poncho Zuleta.'
    },
    {
        artista: 'Felipe Peláez',
        videoId: 'oPoqVKg30Cg',
        thumb: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
        descripcion: 'Concierto en vivo junto a Felipe Peláez.'
    },
    {
        artista: 'Orlando Acosta',
        videoId: 'vgDABDveFn0',
        thumb: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
        descripcion: 'Presentación exclusiva con Orlando Acosta.'
    }
];

const GaleriaVideos: React.FC = () => {
    const [videoActivo, setVideoActivo] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const seleccionar = (idx: number) => {
        setVideoActivo(idx);
    };

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
        setTouchEndX(e.touches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEndX(e.touches[0].clientX);
    };

    const onTouchEnd = () => {
        const delta = touchStartX - touchEndX;
        if (Math.abs(delta) > 40) {
            if (delta > 0) {
                setVideoActivo((prev) => (prev + 1) % videos.length);
            } else {
                setVideoActivo((prev) => (prev - 1 + videos.length) % videos.length);
            }
        }
        setTouchStartX(0);
        setTouchEndX(0);
    };

    return (
        <section className="galeria-videos">
            <div className="galeria-header">
                <h2 className="galeria-titulo">Mira mis shows en vivo junto a grandes estrellas</h2>
                <p className="galeria-desc">Haz clic en el artista para ver videos exclusivos de mis presentaciones profesionales.</p>
            </div>

            <div className="galeria-main">
                <div className="galeria-tabs" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    {videos.map((v, idx) => (
                        <button
                            key={idx}
                            className={`galeria-tab ${videoActivo === idx ? 'activo' : ''}`}
                            aria-label={`Ver video con ${v.artista}`}
                            onClick={() => seleccionar(idx)}
                        >
                            <img loading="lazy" width="400" height="400" src={v.thumb} alt={`Miniatura de ${v.artista}`} className="galeria-thumb" />
                            <span className="galeria-artista">{v.artista}</span>
                        </button>
                    ))}
                </div>
                <div className="galeria-video-container">
                    <div className="galeria-video-embed animate-in">
                        <iframe
                            src={`https://www.youtube.com/embed/${videos[videoActivo].videoId}?rel=0&showinfo=0&autoplay=0&controls=1`}
                            title={`Video con ${videos[videoActivo].artista}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            frameBorder="0"
                            style={{ width: '100%', height: '100%', borderRadius: '1rem' }}
                        ></iframe>
                    </div>
                    <div className="galeria-video-desc">
                        <strong>{videos[videoActivo].artista}</strong>: {videos[videoActivo].descripcion}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GaleriaVideos;
