'use client';

import React from 'react';
import NextImage from 'next/image';
import { Film, Image as ImageIcon, LayoutGrid, Play, SearchX } from 'lucide-react';
import Revelar from '../../componentes/ui/Revelar';
import { categorias } from './datosVideos';
import type { MediaItem } from './datosVideos';

type FiltroTipo = 'todos' | 'video' | 'imagen';

interface VideosGaleriaProps {
    filtroTipo: FiltroTipo;
    setFiltroTipo: (t: FiltroTipo) => void;
    filtroCategoria: string;
    setFiltroCategoria: (c: string) => void;
    itemsFiltrados: MediaItem[];
    totalItems: number;
    totalVideos: number;
    totalImagenes: number;
    abrirModal: (i: number) => void;
    resetFiltros: () => void;
}

const VideosGaleria: React.FC<VideosGaleriaProps> = ({
    filtroTipo,
    setFiltroTipo,
    filtroCategoria,
    setFiltroCategoria,
    itemsFiltrados,
    totalItems,
    totalVideos,
    totalImagenes,
    abrirModal,
    resetFiltros,
}) => {
    const tiposFiltro: {
        id: FiltroTipo;
        label: string;
        n: number;
        Icono: typeof Film;
    }[] = [
        { id: 'todos', label: 'Todo', n: totalItems, Icono: LayoutGrid },
        { id: 'video', label: 'Videos', n: totalVideos, Icono: Film },
        { id: 'imagen', label: 'Fotos', n: totalImagenes, Icono: ImageIcon },
    ];

    return (
        <section className="border-b border-[color:var(--linea)]">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
                {/* Filtros */}
                <Revelar className="flex flex-col gap-8 border-b border-[color:var(--linea)] pb-10">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <p className="kicker mb-3">Explora</p>
                            <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.4rem)] text-hueso">
                                Filtra el contenido
                            </h2>
                        </div>
                        <p className="text-sm text-hueso-tenue">
                            <span className="font-display text-2xl text-oro">
                                {itemsFiltrados.length}
                            </span>{' '}
                            {itemsFiltrados.length === 1 ? 'resultado' : 'resultados'}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {tiposFiltro.map((t) => {
                            const activo = filtroTipo === t.id;
                            return (
                                <button
                                    key={t.id}
                                    type="button"
                                    onClick={() => setFiltroTipo(t.id)}
                                    aria-pressed={activo}
                                    className={`inline-flex items-center gap-2.5 rounded-[var(--radius-sello)] border px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                                        activo
                                            ? 'border-oro bg-oro text-tinta'
                                            : 'border-[color:var(--linea-fuerte)] text-hueso-tenue hover:border-oro hover:text-oro'
                                    }`}
                                >
                                    <t.Icono size={16} aria-hidden="true" />
                                    {t.label}
                                    <span
                                        className={
                                            activo
                                                ? 'text-tinta/70'
                                                : 'text-hueso-tenue/70'
                                        }
                                    >
                                        {t.n}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categorias.map((cat) => {
                            const activo = filtroCategoria === cat;
                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setFiltroCategoria(cat)}
                                    aria-pressed={activo}
                                    className={`rounded-[var(--radius-sello)] border px-4 py-2 text-[0.82rem] font-medium tracking-wide transition-colors duration-300 ${
                                        activo
                                            ? 'border-oro text-oro'
                                            : 'border-[color:var(--linea)] text-hueso-tenue hover:border-[color:var(--linea-fuerte)] hover:text-hueso'
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </Revelar>

                {/* Grid editorial */}
                {itemsFiltrados.length > 0 ? (
                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {itemsFiltrados.map((item, idx) => (
                            <Revelar
                                key={item.id}
                                retardo={(idx % 3) * 0.07}
                                className={idx % 5 === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
                            >
                                <button
                                    type="button"
                                    onClick={() => abrirModal(idx)}
                                    className="group relative block w-full overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] text-left transition-colors duration-300 hover:border-[color:var(--linea-fuerte)]"
                                >
                                    <div
                                        className={`relative overflow-hidden ${
                                            idx % 5 === 0
                                                ? 'aspect-[16/10]'
                                                : 'aspect-[4/3]'
                                        }`}
                                    >
                                        <NextImage
                                            src={item.thumbnail}
                                            alt={item.titulo}
                                            fill
                                            sizes={
                                                idx % 5 === 0
                                                    ? '(min-width: 1024px) 66vw, (min-width: 640px) 100vw, 100vw'
                                                    : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                                            }
                                            className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-salida)] group-hover:scale-[1.05]"
                                        />
                                        <div
                                            className="pointer-events-none absolute inset-0"
                                            style={{
                                                background:
                                                    'linear-gradient(180deg, rgba(14,11,8,0.1) 0%, rgba(14,11,8,0.82) 100%)',
                                            }}
                                        />
                                        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-[var(--radius-sello)] bg-tinta/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-oro backdrop-blur-sm">
                                            {item.tipo === 'video' ? (
                                                <Film size={12} aria-hidden="true" />
                                            ) : (
                                                <ImageIcon size={12} aria-hidden="true" />
                                            )}
                                            {item.tipo === 'video' ? 'Video' : 'Foto'}
                                        </span>
                                        {item.tipo === 'video' && (
                                            <span className="absolute inset-0 flex items-center justify-center">
                                                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-oro/60 bg-tinta/50 text-oro backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                                    <Play
                                                        size={24}
                                                        fill="currentColor"
                                                        className="ml-0.5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </span>
                                        )}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <p className="kicker text-[0.62rem]">
                                                {item.categoria}
                                            </p>
                                            <h3 className="mt-2 font-display text-xl leading-tight text-hueso">
                                                {item.titulo}
                                            </h3>
                                            {item.descripcion && (
                                                <p className="mt-1.5 line-clamp-2 text-sm text-hueso-tenue">
                                                    {item.descripcion}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            </Revelar>
                        ))}
                    </div>
                ) : (
                    <div className="mt-16 flex flex-col items-center py-16 text-center">
                        <SearchX
                            size={44}
                            className="text-hueso-tenue"
                            aria-hidden="true"
                        />
                        <h3 className="mt-6 font-display text-2xl text-hueso">
                            Sin resultados
                        </h3>
                        <p className="mt-2 text-hueso-tenue">
                            Probá con otro tipo de contenido o categoría.
                        </p>
                        <button
                            type="button"
                            onClick={resetFiltros}
                            className="mt-8 rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] px-6 py-3 text-sm font-semibold text-hueso transition-colors duration-300 hover:border-oro hover:text-oro"
                        >
                            Restablecer filtros
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default VideosGaleria;
