<script lang="ts">
  // Componente Servicios.svelte - Agrupación Profesional Fer Castilla & Jesús González
  // Sección premium para mostrar los niveles de espectáculos musicales profesionales
  // Todo en español, bien organizado y con animaciones
  import { fly, fade, scale } from 'svelte/transition';
  import { onDestroy } from 'svelte';
  import { isServiceModalOpen } from '$lib/stores';

  /**
   * Define la estructura de un objeto de servicio.
   */
  interface Service {
    nombre: string;
    subtituloColor: string;
    textoColor: string;
    imagen: string;
    descripcion: string;
    duracion: string;
    capacidad: string;
    animacionClase: string;
    color: string;
    bg: string;
    boton: string;
    videoUrl: string; // URL del video para el modal
  }

  let servicioSeleccionado: Service | null = null;
  let videoActivo = false; // Estado para controlar el video

  // Niveles de espectáculos profesionales
  const servicios: Service[] = [
    {
      nombre: 'Parranda Vallenata Premium',
      subtituloColor: '#d4af37',
      textoColor: '#3d2f00',
      imagen: '/Imagenes/Jesus Gonzalez y Fer Castilla.png',
      descripcion: 'Una experiencia vallenata íntima y auténtica, perfecta para eventos exclusivos y celebraciones personales inolvidables.',
      duracion: '2-3 horas',
      capacidad: 'Hasta 150p',
      animacionClase: 'premium-animation',
      color: 'linear-gradient(145deg, #1a1a1a 0%, #2b2100 100%)',
      bg: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=cover&w=800&q=60',
      boton: 'Ver Detalles y Precios',
      videoUrl: 'https://www.youtube.com/watch?v=b4Fg7ijoPAg'
    },
    {
      nombre: 'Show Semicompleto VIP',
      subtituloColor: '#9333ea',
      textoColor: '#e9d5ff',
      imagen: '/Imagenes/Jesus Gonzalez y Fer Castilla.png',
      descripcion: 'El balance perfecto entre un show de gran formato y un evento corporativo o boda de lujo. Producción y sonido de primer nivel.',
      duracion: '3-4 horas',
      capacidad: 'Hasta 300p',
      animacionClase: 'vip-animation',
      color: 'linear-gradient(145deg, #1a1a1a 0%, #2a004b 100%)',
      bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=800&q=60',
      boton: 'Ver Detalles y Precios',
      videoUrl: 'https://www.youtube.com/watch?v=BR8TMNRqFPw'
    },
    {
      nombre: 'Show Completo de Gala',
      subtituloColor: '#e11d48',
      textoColor: '#ffd5dd',
      imagen: '/Imagenes/Jesus Gonzalez y Fer Castilla.png',
      descripcion: 'La producción musical definitiva para eventos masivos. Un espectáculo de concierto con despliegue técnico y artístico completo.',
      duracion: '4-5 horas',
      capacidad: 'Masivos',
      animacionClase: 'gala-animation',
      color: 'linear-gradient(145deg, #1a1a1a 0%, #4b0011 100%)',
      bg: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=cover&w=800&q=60',
      boton: 'Ver Detalles y Precios',
      videoUrl: 'https://www.youtube.com/watch?v=BR8TMNRqFPw' // Placeholder, mismo que VIP
    }
  ];

  function abrirModal(servicio: Service) {
    servicioSeleccionado = servicio;
    isServiceModalOpen.set(true);
    videoActivo = false; // Reseteamos el estado del video cada vez que se abre un modal
  }

  function activarVideo() {
    videoActivo = true;
  }

  function cerrarModal() {
    isServiceModalOpen.set(false);
  }

  // Bloquea el scroll del body cuando el modal está activo
  const unsubscribe = isServiceModalOpen.subscribe(open => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = open ? 'hidden' : 'auto';
    }
  });

  // Asegura que el scroll se reactive si el componente se destruye
  onDestroy(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
    unsubscribe();
    if (servicioSeleccionado) {
        isServiceModalOpen.set(false);
        videoActivo = false;
    }
  });
</script>

<section class="servicios-section" class:modal-active={$isServiceModalOpen} id="servicios">
  <h2 class="titulo" in:fly={{ y: 30, duration: 600 }}>Contrata el Show Perfecto Para Tu Evento</h2>
  <div class="subtitulo" in:fade={{ duration: 600, delay: 200 }}>
    Desde parrandas íntimas hasta conciertos completos. Más de 100 eventos exitosos nos respaldan.
  </div>
  <div class="tarjetas">
    {#each servicios as servicio (servicio.nombre)}
      <div class="service-card {servicio.color}" on:click={() => abrirModal(servicio)} on:keydown={() => {}} role="button" tabindex="0">
        <div class="card-content">
          <div class="card-header">
            <img class="tarjeta-icono" src={servicio.imagen} alt="Icono de {servicio.nombre}" />
            <h3 class="tarjeta-titulo" style="color: {servicio.subtituloColor};">{servicio.nombre}</h3>
          </div>
          <p class="descripcion">{servicio.descripcion}</p>
        </div>
        <div class="card-footer">
          <div class="detalles">
            <span><i class="fas fa-clock"></i> {servicio.duracion}</span>
            <span><i class="fas fa-users"></i> {servicio.capacidad}</span>
          </div>
          <button class="cta-button {servicio.color}" on:click|stopPropagation={(e) => abrirModal(servicio)}>
            {servicio.boton} <span class="arrow">→</span>
          </button>
        </div>
      </div>
    {/each}
  </div>

  {#if $isServiceModalOpen && servicioSeleccionado}
  <div class="modal-overlay" on:click={cerrarModal}>
    <div class="modal-content" in:scale={{ duration: 200 }} out:fade={{ duration: 150 }} on:click|stopPropagation>
      <!-- Título completo -->
      <div class="modal-header">
        <h3 class="modal-title">{servicioSeleccionado.nombre}</h3>
        <button class="modal-close" on:click={cerrarModal} aria-label="Cerrar">×</button>
      </div>
      
      <!-- Descripción completa ancho completo -->
      <div class="modal-descripcion-completa">
        <p>{servicioSeleccionado.descripcion}</p>
      </div>
      
      <!-- Dos columnas: Beneficios izquierda + Video derecha -->
      <div class="modal-body-dos-columnas">
        <!-- Columna Izquierda: Lo que incluye -->
        <div class="modal-beneficios-col">
          <h4 class="beneficios-titulo">✨ Lo que incluye:</h4>
          <ul class="beneficios-lista-simple">
            {#if servicioSeleccionado.nombre === 'Parranda Vallenata Premium'}
              <li><span class="beneficio-icon">🎤</span><div class="beneficio-texto"><strong>Fer Castilla</strong><span> - Vocalista principal reconocido</span></div></li>
              <li><span class="beneficio-icon">🪗</span><div class="beneficio-texto"><strong>Jesús González</strong><span> - Maestro del acordeón</span></div></li>
              <li><span class="beneficio-icon">🎵</span><div class="beneficio-texto"><strong>Formación completa</strong><span> - Bajo, guitarra, percusión</span></div></li>
              <li><span class="beneficio-icon">⭐</span><div class="beneficio-texto"><strong>Repertorio personalizado</strong><span> - Música para tu evento</span></div></li>
            {:else if servicioSeleccionado.nombre === 'Show Semicompleto VIP'}
              <li><span class="beneficio-icon">🎹</span><div class="beneficio-texto"><strong>Producción VIP</strong><span> - Piano, congas y coordinación</span></div></li>
              <li><span class="beneficio-icon">🔊</span><div class="beneficio-texto"><strong>Sonido superior</strong><span> - Para eventos hasta 300 personas</span></div></li>
              <li><span class="beneficio-icon">👥</span><div class="beneficio-texto"><strong>Staff técnico</strong><span> - Coordinación completa</span></div></li>
              <li><span class="beneficio-icon">🎯</span><div class="beneficio-texto"><strong>Repertorio extendido</strong><span> - Mayor variedad</span></div></li>
            {:else}
              <li><span class="beneficio-icon">🎺</span><div class="beneficio-texto"><strong>Instrumentos de viento</strong><span> - Trompeta, bombardino</span></div></li>
              <li><span class="beneficio-icon">💡</span><div class="beneficio-texto"><strong>Ingenieros especializados</strong><span> - Sonido y luces</span></div></li>
              <li><span class="beneficio-icon">🎤</span><div class="beneficio-texto"><strong>Coristas profesionales</strong><span> - Voces adicionales</span></div></li>
              <li><span class="beneficio-icon">⭐</span><div class="beneficio-texto"><strong>Producción de gala</strong><span> - Experiencia completa</span></div></li>
            {/if}
          </ul>
        </div>
        
        <!-- Columna Derecha: Video -->
        <div class="modal-video-col">
          <div class="video-wrapper">
            {#if videoActivo}
              <iframe 
                class="video-iframe"
                src="{servicioSeleccionado?.videoUrl}?autoplay=1&modestbranding=1&rel=0" 
                title="Reproductor de video de YouTube" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
              </iframe>
            {:else}
              <div 
                class="video-container" 
                on:click={activarVideo} 
                on:keydown={(e) => { if (e.key === 'Enter') activarVideo(); }} 
                role="button" 
                tabindex="0"
              >
                <img 
                  src="/Imagenes/Jesus Gonzalez y Fer Castilla.png" 
                  alt="Ver video de {servicioSeleccionado?.nombre}"
                  class="video-thumbnail"
                />
                <div class="play-button">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.9)"/>
                    <polygon points="10,8 16,12 10,16" fill="#1c1c1e"/>
                  </svg>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="modal-cta-simple">
        {#if servicioSeleccionado.nombre === 'Parranda Vallenata Premium'}
          ¡Convierte tu celebración en una experiencia musical inolvidable!
        {:else if servicioSeleccionado.nombre === 'Show Semicompleto VIP'}
          ¡Eleva tu evento con la agrupación más contratada del país!
        {:else}
          ¡Vive un espectáculo fuera de serie con la agrupación revelación 2025!
        {/if}
      </div>
      
      <!-- Botones en fila: WhatsApp izquierda + Garantía derecha -->
      <div class="modal-acciones-fila">
        <a class="modal-whatsapp-btn-mejorado" href="https://wa.me/573144096187" target="_blank" rel="noopener">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.75 13.96c.25.13.41.2.52.34.11.14.16.32.16.54s-.05.4-.16.55-.27.27-.52.34c-.25.08-.58.12-1 .12-.41 0-.77-.04-1.08-.13s-.61-.23-.9-.42-.56-.43-.8-.72-.46-.64-.63-.99-.3-.75-.38-1.15c-.09-.4-.13-.77-.13-1.11 0-.43.06-.83.18-1.21.12-.37.3-.7.54-1s.52-.54.81-.74.6-.35.92-.45c.32-.1.62-.15.91-.15.41 0 .78.05 1.09.16s.59.26.82.46.41.44.53.72.18.57.18.86c0 .21-.04.4-.11.58s-.18.33-.33.45-.34.22-.58.29-.52.11-.83.11c-.39 0-.73-.07-1.02-.21s-.53-.33-.72-.57c.2.2.38.39.52.56.14.17.29.3.46.41.17.11.33.2.48.26.15.06.32.1.48.11zm3.22-7.21c-.43-.43-.9-.8-1.41-1.12s-1.06-.58-1.65-.77-1.22-.3-1.89-.3c-1.29 0-2.5.24-3.63.73s-2.14 1.12-2.97 1.95-1.52 1.83-1.99 2.96-.71 2.33-.71 3.61c0 1.34.24 2.61.71 3.81s1.14 2.29 2 3.25c.85.96 1.84 1.76 2.96 2.4s2.34 1 3.68 1.1h.11c1.31-.05 2.59-.34 3.79-.89s2.26-1.29 3.19-2.22.99-1.95 1.4-3.07.61-2.28.61-3.48c0-.68-.09-1.35-.28-1.99s-.45-1.25-.79-1.84c-.34-.59-.75-1.13-1.22-1.6zm-3.34 13.12c-.56.49-1.19.89-1.88 1.19s-1.42.45-2.19.45c-1.12 0-2.18-.23-3.16-.69s-1.85-1.06-2.6-1.82-1.34-1.62-1.79-2.6-  .68-2.03-.68-3.16c0-1.16.23-2.26.68-3.3s1.05-1.97 1.8-2.82.64-1.54 2.61-2.3 2.03-.67 3.16-.67.23.11.23.34c0 .11-.04.22-.11.33s-.18.2-.33.27c-.15.07-.3.11-.47.11-.52 0-1.01.12-1.47.34s-.88.5-1.26.83c-.38.33-.7.7-.96 1.11s-.47.85-.61 1.31c-.15.46-.22.93-.22 1.41 0 .43.06.83.18 1.22s.3.73.54.99.52.48.81.65.6.28.92.36c.32.08.62.12.91.12.45 0 .85-.06 1.2-.18s.66-.29.91-.51.46-.46.6-.72.22-.5.22-.73c0-.17-.03-.33-.09-.47s-.14-.27-.26-.39-.25-.22-.41-.29-.34-.12-.53-.12c-.2 0-.38.02-.53.06s-.29.1-.41.16c-.12.06-.23.13-.33.21-.1.08-.19.16-.25.23-.05.06-.11.1-.19.13-.08.03-.15.05-.22.05-.12 0-.23-.04-.33-.11s-.16-.17-.18-.29c0-.06.01-.12.04-.18s.06-.12.11-.18.1-.11.16-.16.12-.1.19-.13.14-.05.22-.05.17.01.25.04.16.06.22.1c.07.04.13.08.19.13s.11.11.16.18.09.14.11.22c.03.08.04.17.04.25 0 .29-.07.55-.22.78s-.34.43-.58.59-.52.28-.83.36-.66.12-1.04.12c-.49 0-.93-.07-1.32-.2s-.75-.33-1.07-.58-.6-.56-.83-.92-.41-.75-.51-1.18c-.1-.42-.16-.85-.16-1.28s.05-.85.16-1.28.26-.81.48-1.15.48-.63.78-.88.64-.44 1.02-.58c.38-.14.78-.21 1.19-.21.43 0 .83.06 1.19.18s.68.29.95.51.48.49.64.81.24.66.24 1.01c0 .32-.07.6-.21.83s-.32.43-.54.58-.47.26-.74.33-.56.1-   .85.1c-.21 0-.4-.02-.58-.06s-.34-.09-.48-.16-.26-.14-.37-.23c-.11-.09-.2-.18-.28-.28s-.13-.2-.17-.31c-.04-.11-.06-.23-.06-.34 0-.25.09-.47.28-.64s.44-.26.75-.26.57.08.79.25.4.38.51.63.16.52.16.81c0 .41-.09.78-.26 1.11s-.41.6-.7.82c-.29.22-.62.39-.98.51s-.75.18-1.17.18c-.59 0-1.15-.1-1.66-.31s-.98-.48-1.39-.81c-.41-.33-.77-.72-1.07-1.15s-.54-.92-.71-1.44-.26-1.08-.26-1.68c0-1.22.38-2.35 1.13-3.4s1.77-1.9 3.06-2.56c1.29-.65 2.69-1 4.19-1s2.88.33 4.14.98c1.26.65 2.33 1.51 3.22 2.58.89 1.07 1.54 2.3 1.95 3.68.41 1.38.61 2.83.61 4.34s-.21 2.95-.62 4.32-.99 2.59-1.74 3.65c-.75 1.06-1.64 1.95-2.68 2.68s-2.14 1.28-3.32 1.63z"/></svg>
          Reservar por WhatsApp
        </a>
        <div class="modal-garantia">🛡️ Garantía asegurada • Agrupación revelación 2025</div>
      </div>
    </div>
  </div>
  {/if}

</section>

<style>
  .servicios-section {
    width: 100%;
    padding: 4.5rem 0 3.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    overflow: hidden;
    position: relative;
    background: linear-gradient(120deg, #fffbe5 60%, #fff 100%);
  }

  /* Cuando el modal está activo, elevamos toda la sección */
  .servicios-section.modal-active {
    z-index: 10000;
  }

  .servicios-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('https://images.jpgsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=cover&w=1200&q=60') center/cover no-repeat;
    opacity: 0.13;
    z-index: 0;
    pointer-events: none;
  }
  .titulo {
  font-size: 3.7rem;
  font-family: 'Montserrat', 'Poppins', Arial, sans-serif;
  font-weight: 900;
  color: #1f1802;
  letter-spacing: 1.5px;
  text-align: center;
  margin-bottom: 0.7rem;
  line-height: 1.07;
  position: relative;
  text-shadow: 0 4px 24px #bfa14a44, 0 2px 8px rgba(17, 3, 3, 0.467), 0 1px 0 #fffbe5;
  -webkit-text-stroke: 1.5px #110e01cc;
  filter: drop-shadow(0 2px 10px #bfa14a33);
  background: linear-gradient(90deg,#101010 60%,#fffbe5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: tituloGlow 2.6s infinite alternate;
}
@keyframes tituloGlow {
  0% { text-shadow: 0 4px 24px #bfa14a44, 0 2px 8px #fff7; filter: drop-shadow(0 2px 10px #bfa14a33); }
  100% { text-shadow: 0 4px 32px #ffe08a88, 0 2px 16px #fffbe5; filter: drop-shadow(0 4px 20px #bfa14a88); }

}
.subtitulo {
  color: #bfa14a;
  font-size: 2.05rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.5px;
  margin-bottom: 2.7rem;
  position: relative;
  opacity: 0;
  animation: fadeInSubtitulo 1.2s 0.5s forwards;
}
.subtitulo::after {
  content: '';
  display: block;
  margin: 0.6rem auto 0 auto;
  width: 42%;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(90deg, #fffbe5 10%, #bfa14a 90%);
  animation: subrayadoGlow 2.5s infinite alternate;
}
@keyframes fadeInSubtitulo {
  to { opacity: 1; }
}
@keyframes subrayadoGlow {
  0% { box-shadow: 0 0 8px #bfa14a44; }
  100% { box-shadow: 0 0 20px #fffbe5cc; }
}

  .tarjetas {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    justify-content: center;
    padding: 2rem;
  }

  .service-card {
    background: #1c1c1e;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
  }

  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.7);
  }

  .service-card.gold {
    background: 
      radial-gradient(ellipse 90% 60% at 50% -10%, rgba(212, 175, 55, 0.15), transparent),
      #181818;
  }

  .service-card.purple {
    background: 
      radial-gradient(ellipse 90% 60% at 50% -10%, rgba(191, 93, 255, 0.12), transparent),
      #181818;
  }

  .service-card.red {
    background: 
      radial-gradient(ellipse 90% 60% at 50% -10%, rgba(255, 59, 95, 0.15), transparent),
      #181818;
  }

  .card-content {
    padding: 20px;
  }

  .card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }

  .tarjeta-icono {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center top; /* CENTRADO DE IMAGEN */
    border: 2px solid var(--glow-color);
    box-shadow: 0 0 20px -5px var(--glow-color);
  }

  .tarjeta-titulo {
    font-size: 1.75rem;
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  .descripcion {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #c0c0c0;
    text-align: center;
    flex-grow: 1; /* Empuja el botón hacia abajo */
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .detalles {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-button {
    width: 100%;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-position 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    background-size: 300% 100%;
    animation: shimmer 5s linear infinite;
  }
  
  .cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    background-position: 100% 0;
  }

  .cta-button.gold {
    background-image: linear-gradient(to right, #b48b33, #d4af37, #f8e472, #d4af37, #b48b33);
    color: #0c0c0c;
  }
  
  .cta-button.purple {
    background-image: linear-gradient(to right, #8A2BE2, #BF5DFF, #DDA0DD, #BF5DFF, #8A2BE2);
    color: #ffffff;
  }
  
  .cta-button.red {
    background-image: linear-gradient(to right, #c81d3e, #ff3b5f, #ff7c94, #ff3b5f, #c81d3e);
    color: #ffffff;
  }

  .arrow {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .cta-button:hover .arrow {
    transform: translateX(4px);
  }

  @keyframes shimmer {
    0% { background-position: 0% 50%; }
    100% { background-position: 300% 50%; }
  }

  @media (max-width: 800px) {
    .tarjetas {
      gap: 1.5rem;
      padding: 1rem;
    }
    .service-card {
      width: 100%;
    }
  }

  /* Modal Styles - Rediseño Luminoso */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(245, 245, 245, 0.6); /* Fondo blanco desenfocado */
    backdrop-filter: blur(2px);
    z-index: 999999;
    display: flex;
    align-items: center; /* Centrado vertical */
    justify-content: center; /* Centrado horizontal */
    padding: 20px;
    overflow-y: auto;
    animation: fadeIn 0.4s ease-out;
  }

  .modal-content {
    background: linear-gradient(145deg, #ffffff 0%, #f7f7f9 100%); /* Fondo del modal claro */
    border-radius: 24px;
    padding: 20px;
    max-width: 95vw;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
    animation: slideIn 0.4s ease-out;
    width: 100%;
  }

  @media (min-width: 768px) {
    .modal-content {
      max-width: 900px;
      padding: 30px;
    }
  }

  .modal-header {
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
  }

  .modal-title {
    font-size: 24px;
    font-weight: 800;
    color: #d4af37;
    margin: 0;
    text-align: center;
    flex: 1;
  }

  @media (min-width: 768px) {
    .modal-title {
      font-size: 28px;
    }
  }

  .modal-close {
    background: #e0e0e0; /* Botón de cierre más sutil */
    color: #555;
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 20px;
    font-weight: bold;
    flex-shrink: 0;
  }

  .modal-close:hover {
    background: #d0d0d0;
    transform: scale(1.1);
  }

  .modal-descripcion-completa {
    margin-bottom: 20px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .modal-descripcion-completa p {
    color: #3c3c43; /* Texto oscuro */
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    text-align: center;
  }

  @media (min-width: 768px) {
    .modal-descripcion-completa p {
      font-size: 16px;
    }
  }

  /* Layout de dos columnas */
  .modal-body-dos-columnas {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    .modal-body-dos-columnas {
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
  }

  /* Columna de beneficios */
  .modal-beneficios-col {
    order: 2;
  }

  @media (min-width: 768px) {
    .modal-beneficios-col {
      order: 1;
    }
  }

  .beneficios-titulo {
    color: #1c1c1e; /* Título oscuro */
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 15px 0;
    text-align: left;
  }

  .beneficios-lista-simple {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en móvil */
    gap: 10px;
  }

  .beneficios-lista-simple li {
    background: rgba(0, 0, 0, 0.04);
    padding: 10px 12px;
    border-radius: 10px;
    border-left: 4px solid var(--glow-color);
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    min-height: 65px;
  }

  .beneficios-lista-simple li:hover {
    background: rgba(212, 175, 55, 0.2);
    transform: translateX(3px);
  }

  .beneficio-icon {
    color: var(--glow-color); /* Usamos el color de acento */
    font-size: 1.2rem; /* Icono ligeramente más pequeño */
    flex-shrink: 0;
  }

  .beneficio-texto {
    font-size: 13px; /* Fuente más compacta para móvil */
    line-height: 1.4;
    font-weight: 500;
  }
  
  .beneficio-texto strong {
    color: #1c1c1e; /* Texto oscuro */
  }
  
  .beneficio-texto span {
    color: #636366; /* Texto secundario oscuro */
  }
  
  @media (min-width: 768px) {
    .beneficios-lista-simple {
      grid-template-columns: 1fr; /* 1 columna en desktop */
      gap: 15px;
    }
    .beneficios-lista-simple li {
      padding: 15px 20px;
      gap: 12px;
      align-items: flex-start;
      min-height: auto;
    }
    .beneficio-icon {
      font-size: 1.3rem;
      margin-top: 2px;
    }
     .beneficio-texto {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  /* Columna de video */
  .modal-video-col {
    order: 1;
  }

  @media (min-width: 768px) {
    .modal-video-col {
      order: 2;
      display: flex;
      flex-direction: column;
      justify-content: center; /* Centrado vertical */
    }
  }

  .video-wrapper {
    width: 100%;
    aspect-ratio: 16 / 9; /* Mantiene la proporción del video */
    background: #000;
    border-radius: 12px;
    overflow: hidden;
  }

  .video-iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  .video-container {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  .video-thumbnail {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center top; /* CENTRADO DE IMAGEN */
    display: block;
    border-radius: 12px;
  }

  @media (max-width: 767px) {
    .video-thumbnail {
      height: 200px;
    }
  }

  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  .video-container:hover .play-button {
    transform: translate(-50%, -50%) scale(1.1);
  }

  .video-text {
    text-align: center;
    color: #d4af37;
    font-weight: 600;
    margin: 15px 0 0 0;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    .video-text {
      font-size: 16px;
    }
  }

  .modal-cta-simple {
    background: linear-gradient(135deg, var(--glow-color), #b8941f);
    color: #000;
    padding: 15px;
    border-radius: 12px;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 15px;
    border: 2px solid var(--glow-color);
  }

  @media (min-width: 768px) {
    .modal-cta-simple {
      padding: 18px;
      font-size: 16px;
    }
  }

  /* Botones en fila */
  .modal-acciones-fila {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  @media (min-width: 768px) {
    .modal-acciones-fila {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }
  }

  .modal-whatsapp-btn-mejorado {
    background: #25d366;
    color: white;
    padding: 15px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
    border: 2px solid #25d366;
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .modal-whatsapp-btn-mejorado {
      padding: 18px 35px;
      font-size: 16px;
      gap: 12px;
      width: auto;
      flex: 1;
      max-width: none;
    }
  }

  .modal-whatsapp-btn-mejorado:hover {
    background: #1fb855;
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(37, 211, 102, 0.4);
  }

  .modal-garantia {
    color: #636366;
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.06);
    font-size: 11px;
    text-align: center;
    padding: 10px;
    border-radius: 20px;
    max-width: 280px;
  }

  @media (max-width: 767px) {
    .modal-garantia {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .modal-garantia {
      font-size: 13px;
      padding: 12px 20px;
      text-align: right;
      max-width: none;
      flex: 1;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { 
      transform: translateY(-30px) scale(0.95);
      opacity: 0;
    }
    to { 
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }

  /* ===== NUEVOS ESTILOS PROFESIONALES ===== */
  
  /* Badge de precio */
  .precio-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: linear-gradient(135deg, #bfa14a 0%, #fff 100%);
    color: #2a2a2a;
    font-weight: 900;
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(191,161,74,0.3);
    z-index: 5;
    animation: badge-pulse 3s infinite;
  }
  
  @keyframes badge-pulse {
    0%, 100% { transform: scale(1); box-shadow: 0 4px 16px rgba(191,161,74,0.3); }
    50% { transform: scale(1.05); box-shadow: 0 6px 20px rgba(191,161,74,0.5); }
  }

  /* Información del servicio */
  .info-servicio {
    display: flex;
    gap: 1rem;
    margin: 0.8rem 0;
    justify-content: center;
  }
  
  .info-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background: rgba(255,255,255,0.2);
    padding: 0.3rem 0.6rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.3);
  }
  
  .info-icon {
    font-size: 0.9rem;
  }
  
  .info-text {
    font-size: 0.8rem;
    font-weight: 600;
    color: #333;
  }

  /* Botón mejorado con flecha */
  .btn-arrow {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  .cta-button:hover .btn-arrow {
    transform: translateX(5px);
  }

  /* Nuevas animaciones premium */
  .premium-glow {
    animation: premium-glow-effect 4s infinite;
  }
  
  @keyframes premium-glow-effect {
    0%, 100% { 
      box-shadow: 0 4px 32px rgba(191,161,74,0.2), 0 2px 12px rgba(255,255,255,0.2);
      transform: translateY(0);
    }
    50% { 
      box-shadow: 0 8px 48px rgba(191,161,74,0.4), 0 4px 20px rgba(255,255,255,0.3);
      transform: translateY(-3px);
    }
  }
  
  .vip-pulse {
    animation: vip-pulse-effect 3s infinite;
  }
  
  @keyframes vip-pulse-effect {
    0%, 100% { 
      box-shadow: 0 4px 32px rgba(0,82,163,0.2), 0 2px 12px rgba(255,255,255,0.2);
      border: 2px solid rgba(0,82,163,0.3);
    }
    50% { 
      box-shadow: 0 8px 48px rgba(0,82,163,0.4), 0 4px 20px rgba(255,255,255,0.3);
      border: 2px solid rgba(0,82,163,0.6);
      transform: scale(1.02);
    }
  }
  
  .gala-luxury {
    animation: gala-luxury-effect 5s infinite;
  }
  
  @keyframes gala-luxury-effect {
    0%, 100% { 
      box-shadow: 0 4px 32px rgba(191,161,74,0.3), 0 2px 12px rgba(255,255,255,0.2);
      filter: brightness(1);
    }
    25% { 
      box-shadow: 0 8px 48px rgba(191,161,74,0.5), 0 4px 20px rgba(255,255,255,0.4);
      filter: brightness(1.1);
    }
    50% { 
      box-shadow: 0 12px 60px rgba(191,161,74,0.6), 0 6px 24px rgba(255,255,255,0.5);
      filter: brightness(1.15);
      transform: translateY(-5px) scale(1.02);
    }
    75% { 
      box-shadow: 0 8px 48px rgba(191,161,74,0.5), 0 4px 20px rgba(255,255,255,0.4);
      filter: brightness(1.1);
    }
  }

  /* Estilos del modal mejorados */
  .instrumentos-incluidos {
    background: linear-gradient(135deg, rgba(191,161,74,0.1) 0%, rgba(255,255,255,0.2) 100%);
    border: 1px solid rgba(191,161,74,0.3);
    border-radius: 15px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(10px);
  }
  
  .instrumentos-incluidos h4 {
    margin: 0 0 0.8rem 0;
    color: #bfa14a;
    font-size: 1.1rem;
    font-weight: 800;
  }
  
  .instrumentos-lista {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #444;
    margin: 0;
    font-weight: 500;
  }
  
  .beneficios-lista {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .beneficios-lista li {
    padding: 0.6rem 0;
    border-bottom: 1px solid rgba(191,161,74,0.2);
    font-size: 0.95rem;
    line-height: 1.4;
  }
  
  .beneficios-lista li:last-child {
    border-bottom: none;
  }

  /* Hover effects mejorados */
  .service-card:hover {
    transform: translateY(-15px) scale(1.05);
    box-shadow: 0 20px 60px rgba(191,161,74,0.4), 0 8px 32px rgba(255,255,255,0.3);
    border: 2px solid rgba(191,161,74,0.6);
  }
  
  .service-card:hover .precio-badge {
    transform: scale(1.1) rotate(-5deg);
    box-shadow: 0 8px 24px rgba(191,161,74,0.5);
  }
  
  .service-card:hover .tarjeta-icono {
    transform: scale(1.1);
    box-shadow: 0 8px 32px rgba(191,161,74,0.6);
  }

  .video-container-link {
    display: block;
    text-decoration: none;
  }
</style>
