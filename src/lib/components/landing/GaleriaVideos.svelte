<script lang="ts">

  let videos = [
    {
      artista: 'Jorge Celedón',
      videoId: 'dcV5GnsOxII',
      thumb: '/Imagenes/Jesus Gonzalez en Concierto.jpg',
      descripcion: 'Show en vivo junto a Jorge Celedón.'
    },
    {
      artista: 'Poncho Zuleta',
      videoId: 'BR8TMNRqFPw',
      thumb: '/Imagenes/Jesus Gonzalez en Concierto.jpg',
      descripcion: 'Presentación exclusiva con Poncho Zuleta.'
    },
    {
      artista: 'Felipe Peláez',
      videoId: '1IGwgy_HSSQ',
      thumb: '/Imagenes/Jesus Gonzalez en Concierto.jpg',
      descripcion: 'Concierto en vivo junto a Felipe Peláez.'
    },
    {
      artista: 'Orlando Acosta',
      videoId: 'BR8TMNRqFPw',
      thumb: '/Imagenes/Jesus Gonzalez en Concierto.jpg',
      descripcion: 'Presentación exclusiva con Orlando Acosta.'
    }
  ];
  let videoActivo = 0;
  let iframeRef: HTMLIFrameElement;
  let videoCargado = false;

  function seleccionar(idx: number) {
    videoActivo = idx;
    videoCargado = false;
  }

  function cargarVideo() {
    videoCargado = true;
    setTimeout(setLowVolume, 800);
  }

  // Establecer volumen bajo usando postMessage de YouTube API
  function setLowVolume() {
    if (!iframeRef) return;
    // YouTube Player API: https://developers.google.com/youtube/iframe_api_reference
    iframeRef.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func: 'setVolume',
        args: [10] // Volumen al 10%
      }),
      '*'
    );
  }

  // Ejecutar cada vez que cambia el video o se monta el iframe
  $: {
    setTimeout(setLowVolume, 800);
  }
</script>

<section class="galeria-videos">
  <div class="galeria-header">
    <h2 class="galeria-titulo">Mira mis shows en vivo junto a grandes estrellas</h2>
    <p class="galeria-desc">Haz clic en el artista para ver videos exclusivos de mis presentaciones profesionales.</p>
  </div>

  <div class="galeria-main">
    <div class="galeria-tabs">
      {#each videos as v, idx}
        <button
          class="galeria-tab {videoActivo === idx ? 'activo' : ''}"
          aria-label={`Ver video con ${v.artista}`}
          on:click={() => seleccionar(idx)}
        >
          <img loading="lazy" width="400" height="400" src={v.thumb} alt={`Miniatura de ${v.artista}`} class="galeria-thumb" />
          <span class="galeria-artista">{v.artista}</span>
        </button>
      {/each}
    </div>
    <div class="galeria-video-container">
      <div class="galeria-video-embed animate-in">
  {#if !videoCargado}
    <div class="video-placeholder" on:click={cargarVideo} style="position:relative;cursor:pointer;">
      <img src={videos[videoActivo].thumb} alt={`Miniatura de ${videos[videoActivo].artista}`} style="width:100%;height:100%;object-fit:cover;border-radius:1rem;" />
      <button class="play-btn" aria-label="Reproducir video" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#000a;border:none;border-radius:50%;padding:1.2rem;">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><circle cx="19" cy="19" r="19" fill="#bfa14a"/><polygon points="15,12 28,19 15,26" fill="#fff"/></svg>
      </button>
    </div>
  {:else}
    <iframe
      bind:this={iframeRef}
      src={`https://www.youtube.com/embed/${videos[videoActivo].videoId}?rel=0&showinfo=0&autoplay=1&controls=1`}
      title={`Video con ${videos[videoActivo].artista}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      frameborder="0"
      style="width:100%;height:100%;border-radius:1rem;"
    ></iframe>
  {/if}
</div>
      <div class="galeria-video-desc">
        <strong>{videos[videoActivo].artista}</strong>: {videos[videoActivo].descripcion}
      </div>
    </div>
  </div>
</section>

<style>
.galeria-videos {
  width: 100%;
  background: linear-gradient(135deg, #18151a 70%, #bfa14a22 100%), url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=cover&w=1200&q=80');
  background-size: cover;
  background-position: center;
  padding: 4rem 0 3rem 0;
  box-shadow: 0 4px 32px #000a;
  position: relative;
  z-index: 1;
}
.galeria-header {
  text-align: center;
  margin-bottom: 2.5rem;
}
.galeria-titulo {
  color: #ffe082;
  font-size: 2.5rem;
  font-weight: 900;
  text-shadow: 0 2px 24px #000b;
  margin-bottom: 0.4rem;
}
.galeria-desc {
  color: #fffbe7;
  font-size: 1.18rem;
  font-weight: 500;
  text-shadow: 0 2px 10px #0008;
  margin-bottom: 0.2rem;
}
.galeria-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  overflow: hidden;
}
.galeria-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.4rem;
  width: 100%;
  max-width: 700px;
  justify-content: center;
  margin-bottom: 1.2rem;
  margin-top: 1.2rem;
}
.galeria-tab {
  background: #18151a;
  border: 2px solid #bfa14a55;
  border-radius: 1.5rem;
  padding: 0.5rem 1.1rem 0.7rem 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 14px #0005;
  cursor: pointer;
  transition: all 0.18s, box-shadow 0.22s;
  outline: none;
  min-width: 110px;
  min-height: 110px;
  position: relative;
}
.galeria-tab.activo {
  border-color: #ffe082;
  background: linear-gradient(135deg, #2a230f 60%, #bfa14a44 100%);
  box-shadow: 0 6px 32px #bfa14a55, 0 2px 14px #0008;
  transform: translateY(-8px) scale(1.06);
}
.galeria-tab:hover:not(.activo) {
  border-color: #bfa14a;
  filter: brightness(1.12) drop-shadow(0 0 8px #bfa14a33);
  transform: scale(1.04);
}
.galeria-thumb {
  width: 64px;
  height: 64px;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  object-fit: cover;
  border: 2px solid #bfa14a55;
  box-shadow: 0 2px 10px #0007;
  background: #222;
}
.galeria-artista {
  color: #ffe082;
  font-size: 1.08rem;
  font-weight: 700;
  text-align: center;
  text-shadow: 0 2px 8px #000a;
}
.galeria-video-container {
  width: 100%;
  max-width: 600px;
  background: #18151aee;
  border-radius: 1.5rem;
  box-shadow: 0 6px 32px #0009, 0 2px 14px #bfa14a33;
  padding: 1.5rem 1rem 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.galeria-video-embed {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 1rem;
  overflow: hidden;
  background: #000;
  margin-bottom: 1rem;
  box-shadow: 0 2px 18px #000a;
  animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1);
}
.galeria-video-embed iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
.galeria-video-desc {
  color: #ffe082;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  text-shadow: 0 2px 10px #000a;
}
@media (max-width: 800px) {
  .galeria-tabs {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    justify-content: flex-start;
    width: 100%;
    max-width: 100%;
    padding: 0 1rem 1rem 1rem;
    scroll-snap-type: x mandatory;
    margin-top: 50px;
  }
  .galeria-tabs::-webkit-scrollbar {
    display: none;
  }
  .galeria-tabs {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .galeria-tab {
    flex: 0 0 auto;
    scroll-snap-align: start;
    min-width: 120px;
  }
  .galeria-video-container { max-width: 95vw; }
  .galeria-main { gap: 1.2rem; }
}
@media (max-width: 600px) {
  .galeria-header { margin-bottom: 1.2rem; }
  .galeria-titulo { font-size: 1.4rem; }
  .galeria-desc { font-size: 1rem; }
  .galeria-tab { 
    min-width: 100px;
    min-height: 100px;
    padding: 0.5rem;
    margin-top: 20px;
  }
  .galeria-thumb { width: 50px; height: 50px; }
  .galeria-video-container { padding: 0.7rem 0.2rem; }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(32px) scale(0.98); }
  to { opacity: 1; transform: none; }
}
</style>
