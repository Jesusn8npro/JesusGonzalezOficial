import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Videos.css';

interface MediaItem {
    id: string;
    titulo: string;
    tipo: 'video' | 'imagen';
    categoria: string;
    thumbnail: string;
    videoUrl?: string;
    imagenUrl?: string;
    descripcion?: string;
}

const Videos: React.FC = () => {
    const [filtroTipo, setFiltroTipo] = useState<'todos' | 'video' | 'imagen'>('todos');
    const [filtroCategoria, setFiltroCategoria] = useState('Todos');
    const [modalAbierto, setModalAbierto] = useState(false);
    const [indiceActual, setIndiceActual] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const mediaItems: MediaItem[] = [
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
            thumbnail: '/Imagenes/Jesus Gonzalez, Vallenato Exclusivo.jpg',
            imagenUrl: '/Imagenes/Jesus Gonzalez, Vallenato Exclusivo.jpg',
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

    const categorias = ['Todos', 'Conciertos', 'Parrandas', 'Television', 'Backstage'];

    const itemsFiltrados = mediaItems.filter(item => {
        const pasaTipo = filtroTipo === 'todos' || item.tipo === filtroTipo;
        const pasaCategoria = filtroCategoria === 'Todos' || item.categoria === filtroCategoria;
        return pasaTipo && pasaCategoria;
    });

    const abrirModal = (index: number) => {
        setIndiceActual(index);
        setModalAbierto(true);
        document.body.style.overflow = 'hidden';
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        document.body.style.overflow = 'auto';
    };

    const siguiente = () => {
        setIndiceActual((prev) => (prev + 1) % itemsFiltrados.length);
    };

    const anterior = () => {
        setIndiceActual((prev) => (prev - 1 + itemsFiltrados.length) % itemsFiltrados.length);
    };

    // Manejo de swipe en modal
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 30;
        const isRightSwipe = distance < -30;

        if (isLeftSwipe) {
            siguiente();
        }
        if (isRightSwipe) {
            anterior();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    // Navegación con teclado
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!modalAbierto) return;

            if (e.key === 'ArrowRight') siguiente();
            if (e.key === 'ArrowLeft') anterior();
            if (e.key === 'Escape') cerrarModal();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [modalAbierto, indiceActual]);

    const itemActual = itemsFiltrados[indiceActual];

    // Contar videos e imágenes
    const totalVideos = mediaItems.filter(item => item.tipo === 'video').length;
    const totalImagenes = mediaItems.filter(item => item.tipo === 'imagen').length;

    return (
        <div className="pagina-videos-premium">
            {/* Hero Mejorado */}
            <section className="hero-videos-premium">
                <div className="hero-videos-fondo">
                    <img
                        src="/Imagenes/Jesus Gonzalez, Vallenato Exclusivo.jpg"
                        alt="Jesús González"
                        className="hero-videos-imagen"
                    />
                    <div className="hero-videos-overlay"></div>
                </div>
                <div className="contenedor-hero-videos">
                    <div className="badge-hero">📹 Galería Multimedia</div>
                    <h1 className="titulo-videos-premium">Videos & Fotos</h1>
                    <p className="subtitulo-videos-premium">
                        Descubre momentos inolvidables de presentaciones, conciertos y colaboraciones con las leyendas del vallenato
                    </p>
                    <div className="stats-hero">
                        <div className="stat-hero">
                            <span className="stat-numero">{totalVideos}</span>
                            <span className="stat-label">Videos</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-hero">
                            <span className="stat-numero">{totalImagenes}</span>
                            <span className="stat-label">Fotos</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-hero">
                            <span className="stat-numero">200+</span>
                            <span className="stat-label">Shows</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="seccion-galeria-premium">
                <div className="contenedor-galeria-premium">
                    {/* Filtros Mejorados */}
                    <div className="filtros-section">
                        <div className="filtros-header">
                            <h2 className="filtros-titulo">Explora el Contenido</h2>
                            <p className="filtros-descripcion">Filtra por tipo de contenido o categoría</p>
                        </div>

                        {/* Filtros de Tipo - Mejorados */}
                        <div className="filtros-tipo-wrapper">
                            <label className="filtro-label">Tipo de Contenido:</label>
                            <div className="filtros-tipo">
                                <button
                                    className={`boton-filtro-tipo ${filtroTipo === 'todos' ? 'activo' : ''}`}
                                    onClick={() => setFiltroTipo('todos')}
                                >
                                    <span className="icono-filtro">🎬</span>
                                    <div className="filtro-info">
                                        <span className="texto-filtro">Todos</span>
                                        <span className="count-filtro">{mediaItems.length}</span>
                                    </div>
                                </button>
                                <button
                                    className={`boton-filtro-tipo ${filtroTipo === 'video' ? 'activo' : ''}`}
                                    onClick={() => setFiltroTipo('video')}
                                >
                                    <span className="icono-filtro">▶️</span>
                                    <div className="filtro-info">
                                        <span className="texto-filtro">Videos</span>
                                        <span className="count-filtro">{totalVideos}</span>
                                    </div>
                                </button>
                                <button
                                    className={`boton-filtro-tipo ${filtroTipo === 'imagen' ? 'activo' : ''}`}
                                    onClick={() => setFiltroTipo('imagen')}
                                >
                                    <span className="icono-filtro">📸</span>
                                    <div className="filtro-info">
                                        <span className="texto-filtro">Fotos</span>
                                        <span className="count-filtro">{totalImagenes}</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Filtros de Categoría - Mejorados */}
                        <div className="filtros-categoria-wrapper">
                            <label className="filtro-label">Categoría:</label>
                            <div className="filtros-categoria">
                                {categorias.map(cat => (
                                    <button
                                        key={cat}
                                        className={`boton-filtro-categoria ${filtroCategoria === cat ? 'activo' : ''}`}
                                        onClick={() => setFiltroCategoria(cat)}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Contador de resultados */}
                        <div className="contador-resultados">
                            <span className="numero-resultados">{itemsFiltrados.length}</span>
                            <span className="texto-resultados">
                                {itemsFiltrados.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
                            </span>
                        </div>
                    </div>

                    {/* Grid de Media */}
                    {itemsFiltrados.length > 0 ? (
                        <div className="grid-media-premium">
                            {itemsFiltrados.map((item, idx) => (
                                <div
                                    key={item.id}
                                    className="tarjeta-media-premium"
                                    style={{ animationDelay: `${idx * 0.05}s` }}
                                    onClick={() => abrirModal(idx)}
                                >
                                    <div className="contenedor-thumbnail">
                                        <img src={item.thumbnail} alt={item.titulo} className="thumbnail-media" loading="lazy" />
                                        <div className="overlay-media">
                                            <div className="icono-play">
                                                {item.tipo === 'video' ? (
                                                    <svg width="60" height="60" viewBox="0 0 60 60">
                                                        <circle cx="30" cy="30" r="30" fill="rgba(191,161,74,0.95)" />
                                                        <polygon points="24,18 24,42 42,30" fill="white" />
                                                    </svg>
                                                ) : (
                                                    <svg width="60" height="60" viewBox="0 0 60 60">
                                                        <circle cx="30" cy="30" r="30" fill="rgba(191,161,74,0.95)" />
                                                        <path d="M25 20h10v20h-10z M20 25h20v10h-20z" fill="white" />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className="badge-tipo">{item.tipo === 'video' ? 'Video' : 'Foto'}</span>
                                        </div>
                                    </div>
                                    <div className="info-media">
                                        <h3 className="titulo-media">{item.titulo}</h3>
                                        <p className="descripcion-media">{item.descripcion}</p>
                                        <span className="categoria-media">{item.categoria}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="sin-resultados">
                            <span className="icono-sin-resultados">🔍</span>
                            <h3>No se encontraron resultados</h3>
                            <p>Intenta con otros filtros</p>
                            <button className="btn-reset-filtros" onClick={() => { setFiltroTipo('todos'); setFiltroCategoria('Todos'); }}>
                                Restablecer Filtros
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section - Nuevo */}
            <section className="seccion-cta-videos">
                <div className="contenedor-cta-videos">
                    <div className="cta-videos-content">
                        <h2 className="cta-videos-titulo">¿Te Gustó lo que Viste?</h2>
                        <p className="cta-videos-descripcion">
                            Lleva esta misma energía y profesionalismo a tu próximo evento.
                            Contrata a Jesús González y haz de tu celebración un momento inolvidable.
                        </p>
                        <div className="cta-videos-beneficios">
                            <div className="beneficio-cta">
                                <span className="icono-beneficio">🎵</span>
                                <span>Repertorio Personalizado</span>
                            </div>
                            <div className="beneficio-cta">
                                <span className="icono-beneficio">⭐</span>
                                <span>Calidad Profesional</span>
                            </div>
                            <div className="beneficio-cta">
                                <span className="icono-beneficio">💯</span>
                                <span>100% Satisfacción</span>
                            </div>
                        </div>
                        <div className="cta-videos-botones">
                            <Link to="/contrataciones" className="btn-cta-principal">
                                <span className="btn-icon">🎤</span>
                                Contratar Ahora
                            </Link>
                            <Link to="/contacto" className="btn-cta-secundario">
                                <span className="btn-icon">💬</span>
                                Solicitar Información
                            </Link>
                        </div>
                    </div>
                    <div className="cta-videos-imagen">
                        <img src="/Imagenes/Jesus Fondo Blanco.png" alt="Jesús González" />
                    </div>
                </div>
            </section>

            {/* Modal con navegación */}
            {modalAbierto && itemActual && (
                <div className="modal-media-overlay" onClick={cerrarModal}>
                    <button className="boton-cerrar-modal" onClick={cerrarModal}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    

                    <div
                        className="modal-media-contenido"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {itemActual.tipo === 'video' ? (
                            <div className="contenedor-video-modal">
                                <iframe
                                    src={itemActual.videoUrl}
                                    title={itemActual.titulo}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="iframe-video-modal"
                                ></iframe>
                                {itemsFiltrados.length > 1 && (
                                    <>
                                        <button
                                            className="boton-nav-modal boton-anterior"
                                            aria-label="Anterior"
                                            onClick={(e) => { e.stopPropagation(); anterior(); }}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button
                                            className="boton-nav-modal boton-siguiente"
                                            aria-label="Siguiente"
                                            onClick={(e) => { e.stopPropagation(); siguiente(); }}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="contenedor-imagen-modal">
                                <img
                                    src={itemActual.imagenUrl}
                                    alt={itemActual.titulo}
                                    className="imagen-modal"
                                />
                                {itemsFiltrados.length > 1 && (
                                    <>
                                        <button
                                            className="boton-nav-modal boton-anterior"
                                            aria-label="Anterior"
                                            onClick={(e) => { e.stopPropagation(); anterior(); }}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button
                                            className="boton-nav-modal boton-siguiente"
                                            aria-label="Siguiente"
                                            onClick={(e) => { e.stopPropagation(); siguiente(); }}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>
                        )}

                        <div className="info-modal">
                            <div className="info-modal-header">
                                <h2 className="titulo-modal">{itemActual.titulo}</h2>
                                <p className="descripcion-modal">{itemActual.descripcion}</p>
                                <span className="categoria-modal">{itemActual.categoria}</span>
                            </div>
                            <div className="contador-modal">
                                {indiceActual + 1} / {itemsFiltrados.length}
                            </div>
                        </div>

                        {/* Indicador de swipe en móvil */}
                        <div className="indicador-swipe-modal">
                            ← Desliza para navegar →
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Videos;
