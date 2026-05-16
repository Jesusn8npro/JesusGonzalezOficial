import React from 'react';
import Revelar from '../ui/Revelar';
import SeccionPress from './SeccionPress';
import VideoFachadaPress from './VideoFachadaPress';
import type { DatosPress } from './datosPress';

interface Props {
  datos: DatosPress;
}

/**
 * Videos en vivo vía fachada click-to-load (sin autoplay, sin iframe en
 * la carga inicial). Server component que envuelve fachadas cliente.
 */
const VideosPress: React.FC<Props> = ({ datos }) => (
  <SeccionPress
    id="videos"
    kicker="En vivo"
    titulo="Así suena en tarima"
  >
    <div className="grid gap-6 lg:grid-cols-3">
      {datos.videos.map((v, i) => (
        <Revelar key={v.id} retardo={0.06 * i}>
          <VideoFachadaPress videoId={v.id} titulo={v.titulo} />
        </Revelar>
      ))}
    </div>
  </SeccionPress>
);

export default VideosPress;
