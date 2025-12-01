import React from 'react';
import { Link } from 'react-router-dom';
import './TarjetaEnlace.css';

interface TarjetaEnlaceProps {
    titulo: string;
    descripcion?: string;
    url: string;
    esExterno?: boolean;
    icono?: React.ReactNode;
    imagenFondo?: string;
}

const TarjetaEnlace: React.FC<TarjetaEnlaceProps> = ({
    titulo,
    descripcion,
    url,
    esExterno = false,
    icono,
    imagenFondo
}) => {
    const contenido = (
        <div className="contenido-tarjeta">
            {icono && <div className="icono-tarjeta">{icono}</div>}
            <div className="texto-tarjeta">
                <h3>{titulo}</h3>
                {descripcion && <p>{descripcion}</p>}
            </div>
        </div>
    );

    const estiloFondo = imagenFondo ? { backgroundImage: `url(${imagenFondo})` } : {};

    if (esExterno) {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="tarjeta-enlace"
                style={estiloFondo}
            >
                {contenido}
            </a>
        );
    }

    return (
        <Link to={url} className="tarjeta-enlace" style={estiloFondo}>
            {contenido}
        </Link>
    );
};

export default TarjetaEnlace;
