<script lang="ts">
  // Imágenes para el slider (puedes reemplazar las URLs por tus fotos reales)
  export let imagenesSlider = [
    '/Imagenes/Jesus Gonzalez y Fer Castilla.png',
    '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
    '/Imagenes/Jesus Gonzalez en Concierto.jpg',
    '/Imagenes/Jesus Fondo Blanco.png'
  ];
  let current = 0;
  let interval: any;

  function next() { current = (current + 1) % imagenesSlider.length; }
  function prev() { current = (current - 1 + imagenesSlider.length) % imagenesSlider.length; }

  // Auto-slide
  import { onMount, onDestroy } from 'svelte';
  onMount(() => {
    interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  });
  onDestroy(() => clearInterval(interval));

  // Beneficios destacados
  export let beneficios = [
    { icon: '🏆', titulo: '+10 años de experiencia', desc: 'Trayectoria sólida y profesional en eventos de todo tipo.' },
    { icon: '🎤', titulo: 'Shows con grandes estrellas', desc: 'Hemos compartido escenario con los mejores del género.' },
    { icon: '💯', titulo: '100% clientes satisfechos', desc: 'Valoraciones perfectas y recomendaciones reales.' },
    { icon: '🎵', titulo: 'Repertorio personalizado', desc: 'Nos adaptamos a cada evento y público.' },
    { icon: '💎', titulo: 'Calidad y lujo', desc: 'Sonido profesional y atención VIP en cada show.' },
    { icon: '🔥', titulo: 'Versatilidad y energía', desc: 'Shows dinámicos para cualquier tipo de evento.' }
  ];
</script>

<style>
.beneficios-section {
  width: 100%;
  min-height: 700px;
  padding: 5.5rem 0 4rem 0;
  background: linear-gradient(120deg, #18130c 60%, #2b230f 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.beneficios-header {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 2.5rem auto;
  text-align: center;
  z-index: 2;
}
.beneficios-title {
  color: #fff;
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 0.6rem;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 18px #000b;
}
.beneficios-desc {
  color: #bfa14a;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
  text-shadow: 0 2px 10px #0008;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
}
.beneficios-grid {
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1.1fr 1fr;
  gap: 2.5rem;
  align-items: stretch;
  justify-content: center;
  z-index: 2;
}
.beneficios-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  min-width: 220px;
  max-width: 440px;
  padding: 0 0.5rem;
}
.beneficios-col.left {
  align-items: flex-end;
}
.beneficios-col.right {
  align-items: flex-start;
}
.slider-col.center {
  align-items: center;
  justify-content: center;
  flex: 1.1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  min-width: 330px;
  max-width: 520px;
  padding: 1.5rem 1.2rem;
}
@media (max-width: 1100px) {
  .beneficios-grid {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    align-items: center;
    width: 100%;
    max-width: 100vw;
  }
  .beneficios-col, .slider-col.center {
    width: 100%;
    max-width: 100vw;
    min-width: 0;
    align-items: center;
    padding: 1.1rem 0.5rem;
    box-sizing: border-box;
  }
  .beneficios-list {
    gap: 1.1rem;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
  .beneficio {
    margin-bottom: 0.7rem;
    margin-top: 0.7rem;
    width: 100%;
    max-width: 500px;
  }
  .slider-container {
    width: 100%;
    max-width: 95vw;
    margin: 0 auto 1.2rem auto;
    display: flex;
    justify-content: center;
  }
  .slider-img {
    width: 100%;
    max-width: 95vw;
    min-width: 0;
    height: auto;
    border-radius: 1.2rem;
    margin: 0 auto;
    display: block;
  }
  .slider-controls {
    justify-content: center;
    margin-bottom: 0.5rem;
  }
}

.beneficios-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=cover&w=1200&q=60') center/cover no-repeat;
  opacity: 0.18;
  z-index: 0;
}
.slider-container {
  width: 100%;
  max-width: 420px;
  aspect-ratio: 1.2/1;
  border-radius: 1.7rem;
  overflow: hidden;
  box-shadow: 0 6px 46px #bfa14a55, 0 2px 12px #0005;
  background: #23201a;
  margin-bottom: 1.2rem;
  position: relative;
}
.slider-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.5s;
}
.slider-controls {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0.7rem;
}
.slider-btn {
  background: #bfa14a;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 2.3rem;
  height: 2.3rem;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 0 2px 8px #0004;
  transition: background 0.2s;
}
.slider-btn:hover {
  background: #fff;
  color: #bfa14a;
}
.credit {
  color: #bfa14a99;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}
.beneficios-list {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}
.beneficio {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  background: linear-gradient(90deg, #23201a 60%, #bfa14a22 100%);
  border-radius: 1.1rem;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 2px 12px #0002;
  transition: transform 0.18s, box-shadow 0.18s, filter 0.18s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.animated-beneficio {
  opacity: 0;
  transform: translateY(30px) scale(0.96);
  animation: beneficioIn 0.66s cubic-bezier(.61,-0.01,.46,1.01) forwards;
}
@keyframes beneficioIn {
  0% { opacity: 0; transform: translateY(30px) scale(0.96); filter: blur(2px); }
  60% { opacity: 1; transform: translateY(-8px) scale(1.05); filter: blur(0); }
  100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
}
.beneficio:hover {
  transform: translateY(-6px) scale(1.04) rotate(-1deg);
  box-shadow: 0 8px 32px #bfa14a66, 0 2px 14px #0004;
  filter: brightness(1.05) drop-shadow(0 0 8px #bfa14a44);
}
.beneficio-icon {
  font-size: 2.2rem;
  color: #bfa14a;
  flex-shrink: 0;
  margin-top: 0.1rem;
  filter: drop-shadow(0 2px 8px #bfa14a55) brightness(1.1);
  transition: filter 0.18s, transform 0.18s;
}
.beneficio:hover .beneficio-icon {
  filter: drop-shadow(0 4px 16px #bfa14a88) brightness(1.3);
  transform: scale(1.15) rotate(-6deg);
}
.beneficio-content {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.beneficio-titulo {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
  text-shadow: 0 2px 8px #0008;
}
.beneficio-desc {
  color: #bfa14a;
  font-size: 1.05rem;
  font-weight: 500;
}
</style>

<section class="beneficios-section" id="beneficios">
  <div class="beneficios-header">
    <h2 class="beneficios-title">¿Por qué elegirnos para tu evento?</h2>
    <div class="beneficios-desc">Más que música: experiencia, profesionalismo y un historial de compartir escenario con los más grandes. Descubre por qué somos la opción #1 para eventos inolvidables.</div>
  </div>
  <div class="beneficios-grid">
    <div class="beneficios-col left">
      <div class="beneficios-list">
        {#each beneficios.slice(0, 3) as b, i}
          <div class="beneficio animated-beneficio" style="animation-delay: {i*0.12+0.08}s">
            <span class="beneficio-icon">{b.icon}</span>
            <div class="beneficio-content">
              <div class="beneficio-titulo">{b.titulo}</div>
              <div class="beneficio-desc">{b.desc}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    <div class="slider-col center">
      <div class="slider-container">
        <img class="slider-img" src={imagenesSlider[current]} alt="Foto profesionalismo musical" />
      </div>
      <div class="slider-controls">
        <button class="slider-btn" on:click={prev} aria-label="Anterior">&#8592;</button>
        <button class="slider-btn" on:click={next} aria-label="Siguiente">&#8594;</button>
      </div>
      <div class="credit">Fotos reales: cambia las imágenes por tus fotos con artistas top</div>
    </div>
    <div class="beneficios-col right">
      <div class="beneficios-list">
        {#each beneficios.slice(3, 6) as b, i}
          <div class="beneficio animated-beneficio" style="animation-delay: {i*0.12+0.18}s">
            <span class="beneficio-icon">{b.icon}</span>
            <div class="beneficio-content">
              <div class="beneficio-titulo">{b.titulo}</div>
              <div class="beneficio-desc">{b.desc}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
