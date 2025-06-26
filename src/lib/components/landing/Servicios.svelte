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
      videoUrl: 'https://www.youtube.com/embed/b4Fg7ijoPAg'
    },
    {
      nombre: 'Show Semicompleto VIP',
      subtituloColor: '#9333ea',
      textoColor: '#e9d5ff',
      imagen: '/Imagenes/Jesus Gonzalez en Concierto.jpg',
      descripcion: 'El balance perfecto entre un show de gran formato y un evento corporativo o boda de lujo. Producción y sonido de primer nivel.',
      duracion: '3-4 horas',
      capacidad: 'Hasta 300p',
      animacionClase: 'vip-animation',
      color: 'linear-gradient(145deg, #1a1a1a 0%, #2a004b 100%)',
      bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=800&q=60',
      boton: 'Ver Detalles y Precios',
      videoUrl: 'https://www.youtube.com/embed/d5irPiHkkt4'
    },
    {
      nombre: 'Show Completo de Gala',
      subtituloColor: '#e11d48',
      textoColor: '#ffd5dd',
      imagen: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
      descripcion: 'La producción musical definitiva para eventos masivos. Un espectáculo de concierto con despliegue técnico y artístico completo.',
      duracion: '4-5 horas',
      capacidad: 'Masivos',
      animacionClase: 'gala-animation',
      color: 'linear-gradient(145deg, #1a1a1a 0%, #4b0011 100%)',
      bg: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=cover&w=800&q=60',
      boton: 'Ver Detalles y Precios',
      videoUrl: 'https://www.youtube.com/embed/BR8TMNRqFPw'
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
      <div class="tarjeta-profesional {servicio.animacionClase}" 
           style="--accent-color: {servicio.subtituloColor}; background: {servicio.color};"
           on:click={() => abrirModal(servicio)} 
           on:keydown={() => {}} 
           role="button" 
           tabindex="0">
        
        <!-- Efecto de brillo animado -->
        <div class="tarjeta-glow"></div>
        
        <!-- Contenido de la tarjeta -->
        <div class="tarjeta-contenido">
          <!-- Header con icono y título -->
          <div class="tarjeta-header">
            <div class="icono-container">
              <img class="tarjeta-icono" src={servicio.imagen} alt="Icono de {servicio.nombre}" />
              <div class="icono-glow"></div>
            </div>
            <h3 class="tarjeta-titulo">{servicio.nombre}</h3>
          </div>
          
          <!-- Descripción -->
          <p class="tarjeta-descripcion">{servicio.descripcion}</p>
          
          <!-- Pills de información -->
          <div class="info-pills">
            <div class="pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span>{servicio.duracion}</span>
            </div>
            <div class="pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>{servicio.capacidad}</span>
            </div>
          </div>
          
          <!-- Botón CTA -->
          <button class="tarjeta-boton" on:click|stopPropagation={() => abrirModal(servicio)}>
            <span class="boton-texto">{servicio.boton}</span>
            <span class="boton-arrow">→</span>
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
              <li><span class="beneficio-icon">🏟️</span><div class="beneficio-texto"><strong>Producción masiva</strong><span> - Eventos grandes y masivos</span></div></li>
              <li><span class="beneficio-icon">🎬</span><div class="beneficio-texto"><strong>Show completo</strong><span> - Luces, video y efectos</span></div></li>
              <li><span class="beneficio-icon">🎭</span><div class="beneficio-texto"><strong>Puesta en escena</strong><span> - Producción de concierto</span></div></li>
              <li><span class="beneficio-icon">🌟</span><div class="beneficio-texto"><strong>Experiencia de gala</strong><span> - Máximo nivel profesional</span></div></li>
            {/if}
          </ul>
        </div>
        
        <!-- Columna Derecha: Video -->
        <div class="modal-video-col">
          <div class="video-container">
            {#if !videoActivo}
              <div class="video-thumbnail" on:click={activarVideo}>
                <img src={servicioSeleccionado.imagen} alt="Video preview de {servicioSeleccionado.nombre}" />
                <div class="play-button">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="40" fill="rgba(191,161,74,0.95)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
                    <polygon points="32,24 32,56 56,40" fill="white"/>
                  </svg>
                </div>
              </div>
            {:else}
              <iframe
                src={servicioSeleccionado.videoUrl}
                title="Video del servicio"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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
        <a class="modal-whatsapp-btn-mejorado" href="https://wa.me/573144096187?text=Hola,%20me%20interesa%20el%20servicio%20{encodeURIComponent(servicioSeleccionado.nombre)}" target="_blank" rel="noopener">
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
  /* Sección principal */
  .servicios-section {
    padding: 100px 20px;
    background-color: #f9fafb; /* Fondo claro */
    background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 16px 16px;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  .servicios-section.modal-active {
    filter: blur(8px);
    z-index: 9999;
  }

  .titulo {
    text-align: center;
    font-size: 3rem;
    font-weight: 900;
    color: #1f2937; /* Color oscuro para el título */
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 2;
  }

  .subtitulo {
    text-align: center;
    font-size: 1.2rem;
    color: #4b5563; /* Color oscuro para el subtítulo */
    margin-bottom: 3rem;
    position: relative;
    z-index: 2;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Grid de tarjetas */
  .tarjetas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
    padding: 0 1rem;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    justify-items: center;
  }
  
  /* En pantallas de más de 1024px, usamos 3 columnas */
  @media (min-width: 1024px) {
    .tarjetas {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* Tarjetas profesionales */
  .tarjeta-profesional {
    background-color: #ffffff;
    border-radius: 20px;
    padding: 2rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
    border: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
    border-top: 4px solid var(--accent-color); /* Borde superior de color */
  }

  .tarjeta-profesional:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1), 0 0 30px -10px var(--accent-color); /* Sombra de color al pasar el mouse */
  }

  .tarjeta-glow {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.6s ease-in-out;
    will-change: transform;
  }

  .tarjeta-profesional:hover .tarjeta-glow {
    left: 100%;
  }

  /* Contenido de la tarjeta */
  .tarjeta-contenido {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    gap: 1.5rem;
  }

  /* Header */
  .tarjeta-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .icono-container {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--accent-color);
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  }

  .tarjeta-icono {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .tarjeta-titulo {
    color: var(--accent-color);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    text-align: center;
  }

  .tarjeta-descripcion {
    color: rgba(255,255,255,0.8);
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
    margin: 0;
  }

  /* Pills de información */
  .info-pills {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255,255,255,0.1);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    color: rgba(255,255,255,0.9);
  }

  /* Botón CTA */
  .tarjeta-boton {
    background-color: #1f2937;
    color: #ffffff;
    font-weight: 700; /* Aumentar grosor de la fuente */
    padding: 0.85rem 1.5rem; /* Ajustar padding */
    border-radius: 9999px;
    transition: all 0.3s ease; /* Transición para todos los cambios */
    width: 100%;
    text-align: center;
    margin-top: auto;
    border: 2px solid transparent; /* Borde transparente para transición */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .tarjeta-boton:hover {
    background-color: #ffffff; /* Fondo blanco al pasar el mouse */
    color: var(--accent-color, #000); /* Color de acento para el texto */
    border: 2px solid var(--accent-color, #000); /* Borde de color de acento */
    transform: scale(1.05); /* Pequeño zoom al botón */
  }

  .boton-arrow {
    transition: transform 0.3s ease;
  }

  .tarjeta-boton:hover .boton-arrow {
    transform: translateX(5px);
  }

  /* Animaciones específicas por tipo para tema claro */
  .premium-animation {
    --accent-color: #d4af37;
    animation: glow-light 4s infinite ease-in-out;
  }

  .vip-animation {
    --accent-color: #9333ea;
    animation: glow-light 4s infinite ease-in-out 1s; /* Retraso para desincronizar */
  }

  .gala-animation {
    --accent-color: #e11d48;
    animation: glow-light 4s infinite ease-in-out 2s; /* Retraso para desincronizar */
  }

  @keyframes glow-light {
    0%, 100% {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
    }
    50% {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.04), 0 0 20px -5px var(--accent-color);
    }
  }

  /* Responsive */
  @media (max-width: 1023px) {
    .tarjetas {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 0 1rem;
    }

    .tarjeta-profesional {
      min-height: 400px;
      padding: 1.5rem;
    }

    .titulo {
      font-size: 2.5rem;
    }

    .subtitulo {
      font-size: 1.1rem;
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
    padding: 10px; /* Reducido para móviles */
    overflow-y: auto;
    animation: fadeIn 0.4s ease-out;
  }

  .modal-content {
    background: linear-gradient(145deg, #ffffff 0%, #f7f7f9 100%); /* Fondo del modal claro */
    border-radius: 20px; /* Reducido */
    padding: 15px; /* Reducido significativamente para móviles */
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
      border-radius: 24px;
    }
    .modal-overlay {
      padding: 20px;
    }
  }

  .modal-header {
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px; /* Reducido */
    padding-bottom: 10px; /* Reducido */
  }

  @media (min-width: 768px) {
    .modal-header {
      margin-bottom: 20px;
      padding-bottom: 15px;
    }
  }

  .modal-title {
    font-size: 20px; /* Reducido para móviles */
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
    width: 30px; /* Reducido */
    height: 30px; /* Reducido */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 18px; /* Reducido */
    font-weight: bold;
    flex-shrink: 0;
  }

  @media (min-width: 768px) {
    .modal-close {
      width: 35px;
      height: 35px;
      font-size: 20px;
    }
  }

  .modal-close:hover {
    background: #d0d0d0;
    transform: scale(1.1);
  }

  .modal-descripcion-completa {
    margin-bottom: 12px; /* Reducido */
    padding: 12px; /* Reducido */
    background: rgba(0, 0, 0, 0.03);
    border-radius: 12px; /* Reducido */
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  @media (min-width: 768px) {
    .modal-descripcion-completa {
      margin-bottom: 20px;
      padding: 20px;
      border-radius: 15px;
    }
  }

  .modal-descripcion-completa p {
    color: #3c3c43; /* Texto oscuro */
    margin: 0;
    font-size: 14px; /* Reducido */
    line-height: 1.5; /* Reducido */
    text-align: center;
  }

  @media (min-width: 768px) {
    .modal-descripcion-completa p {
      font-size: 16px;
      line-height: 1.6;
    }
  }

  /* Layout de dos columnas */
  .modal-body-dos-columnas {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px; /* Reducido */
    margin-bottom: 12px; /* Reducido */
  }

  @media (min-width: 768px) {
    .modal-body-dos-columnas {
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-bottom: 20px;
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
    font-size: 16px; /* Reducido */
    font-weight: 700;
    margin: 0 0 10px 0; /* Reducido */
    text-align: left;
  }

  @media (min-width: 768px) {
    .beneficios-titulo {
      font-size: 18px;
      margin: 0 0 15px 0;
    }
  }

  .beneficios-lista-simple {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en móvil */
    gap: 8px; /* Reducido */
  }

  .beneficios-lista-simple li {
    background: rgba(0, 0, 0, 0.04);
    padding: 8px 10px; /* Reducido */
    border-radius: 8px; /* Reducido */
    border-left: 3px solid var(--glow-color); /* Reducido */
    display: flex;
    align-items: center;
    gap: 8px; /* Reducido */
    transition: all 0.3s ease;
    min-height: 55px; /* Reducido */
  }

  .beneficios-lista-simple li:hover {
    background: rgba(212, 175, 55, 0.2);
    transform: translateX(3px);
  }

  .beneficio-icon {
    color: var(--glow-color); /* Usamos el color de acento */
    font-size: 1rem; /* Reducido */
    flex-shrink: 0;
  }

  .beneficio-texto {
    font-size: 12px; /* Reducido */
    line-height: 1.3; /* Reducido */
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
      border-radius: 10px;
      border-left: 4px solid var(--glow-color);
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

  .video-container {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    background: #000;
  }

  .video-thumbnail {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .video-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .play-button:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }

  .play-button svg {
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5));
  }

  .video-text {
    text-align: center;
    color: #d4af37;
    font-weight: 600;
    margin: 10px 0 0 0; /* Reducido */
    font-size: 13px; /* Reducido */
  }

  @media (min-width: 768px) {
    .video-text {
      margin: 15px 0 0 0;
      font-size: 14px;
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

  /* ===== RESPONSIVE DESIGN ===== */
  @media (max-width: 768px) {
    .tarjetas {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 0 1rem;
    }
    
    .tarjeta-profesional {
      max-width: 100%;
      min-height: 400px;
    }
    
    .titulo {
      font-size: 2rem;
    }
    
    .subtitulo {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 480px) {
    .servicios-section {
      padding: 2rem 0;
    }
    
    .tarjeta-profesional {
      padding: 1.5rem;
      min-height: 350px;
    }
    
    .tarjeta-titulo {
      font-size: 1.25rem;
    }
    
    .info-pills {
      flex-direction: column;
      align-items: center;
    }
    
    .pill {
      width: fit-content;
    }
  }
</style>
