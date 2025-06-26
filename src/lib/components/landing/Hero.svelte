<script>
  import ModalReserva from './ModalReserva.svelte';
  import { trackConversion } from '$lib/tracking';

  // Props configurables
  export let eventos = "+100 eventos realizados";
  export let titulo = "🏆 Fer Castilla & Jesús González | Agrupación Revelación 2025";
  export let descripcion = "La agrupación vallenata más contratada del país. Espectáculos musicales de primer nivel con la mejor puesta en escena para bodas de lujo, eventos corporativos y celebraciones exclusivas.";
  export let beneficios = [
    "🎤 Fer Castilla - Vocalista principal reconocido", 
    "🪗 Jesús González - Maestro del acordeón profesional",
    "🏆 Agrupación premiada con artistas de renombre",
    "💎 Shows completos con músicos y puesta en escena VIP"
  ];
  export let urlImagen = "/Imagenes/Jesus Gonzalez y Fer Castilla.png";
  
  // Estado del modal
  let mostrarModal = false;
  
  // Funciones
  function abrirModalConTracking() {
    trackConversion('Hero_Button_Click', 'Modal_Reserva');
    mostrarModal = true;
  }
  
  function cerrarModal() {
    mostrarModal = false;
  }
</script>

<!-- SECCIÓN HERO PRINCIPAL -->
<section class="hero">
  <!-- CONTENIDO IZQUIERDO -->
  <div class="contenido">
    <!-- Estrellas y reputación -->
    <div class="estrellas">⭐⭐⭐⭐⭐ {eventos}</div>
    
    <!-- Título principal -->
    <h1 class="titulo">{titulo}</h1>
    
    <!-- Descripción -->
    <div class="descripcion">{descripcion}</div>
    
    <!-- Beneficios -->
    <div class="beneficios">
      {#each beneficios as beneficio}
        <span class="beneficio">{beneficio}</span>
      {/each}
    </div>

    <!-- CTA y métricas -->
    <div class="cta-metricas">
      <!-- Botón principal -->
      <button class="btn-reserva-hero" on:click={abrirModalConTracking}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#25d366"/>
          <path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ¡Reserva tu show ahora!
        </button>
      
      <!-- Métricas de confianza -->
      <div class="metricas-hero">
        <div class="metrica">
          <span class="metrica-num">100+</span>
          <span class="metrica-label">Shows Realizados</span>
        </div>
        <div class="metrica">
          <span class="metrica-num">#1</span>
          <span class="metrica-label">Agrupación 2025</span>
        </div>
        <div class="metrica">
          <span class="metrica-num">100%</span>
          <span class="metrica-label">Éxito Garantizado</span>
        </div>
      </div>
    </div>
  </div>

  <!-- IMAGEN DEL ARTISTA -->
  <div class="artista-wrapper">
    <!-- Decoración circular con estrellas -->
    <div class="decoracion-circulo" aria-hidden="true">
      <svg class="circulo-bg" width="370" height="370" viewBox="0 0 370 370" fill="none">
        <circle cx="185" cy="185" r="160" fill="#ffe08222" filter="url(#glow)" />
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <!-- Estrellas decorativas -->
        <g class="estrellas-circulo">
          <polygon points="185,55 191,75 212,75 195,87 201,107 185,95 169,107 175,87 158,75 179,75" fill="#ffe082"/>
          <polygon points="265,145 268,153 277,153 270,158 273,166 265,161 258,166 261,158 254,153 263,153" fill="#ffe082"/>
          <polygon points="115,145 118,153 127,153 120,158 123,166 115,161 108,166 111,158 104,153 113,153" fill="#ffe082"/>
          <polygon points="215,245 218,253 227,253 220,258 223,266 215,261 208,266 211,258 204,253 213,253" fill="#ffe082"/>
          <polygon points="155,245 158,253 167,253 160,258 163,266 155,261 148,266 151,258 144,253 153,253" fill="#ffe082"/>
        </g>
      </svg>
    </div>
    
    <!-- Foto principal del artista -->
    <img 
      loading="lazy" 
      width="450" 
      height="450" 
      class="foto-artista-png" 
      src={urlImagen} 
      alt="Fer Castilla & Jesús González - Agrupación Vallenata Revelación 2025" 
    />
  </div>
</section>

<!-- MODAL DE RESERVA -->
{#if mostrarModal}
  <ModalReserva mostrar={mostrarModal} on:cerrar={cerrarModal} />
{/if}

<style>
  /* ===== CONTENEDOR PRINCIPAL ===== */
  .hero {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    background: linear-gradient(120deg, #18151a 60%, #bfa14a22 100%), 
                url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=cover&w=1400&q=80');
    background-size: cover;
    background-position: center;
    position: relative;
    padding: 50px 100px 0 100px;
  }

  /* ===== CONTENIDO IZQUIERDO ===== */
  .contenido {
    flex: 1;
    color: #fff;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 5vw;
    gap: 1rem;
  }

  /* ===== TEXTOS PRINCIPALES ===== */
  .estrellas {
    color: #bfa14a;
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  }

  .titulo {
    font-size: 3.2rem;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1rem;
    text-shadow: 0 2px 16px rgba(0,0,0,0.8);
    background: linear-gradient(135deg, #fff 60%, #bfa14a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .descripcion {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    color: #e5e5e5;
    line-height: 1.4;
    text-shadow: 0 1px 4px rgba(0,0,0,0.6);
  }

  /* ===== BENEFICIOS ===== */
  .beneficios {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .beneficio {
    background: rgba(191,161,74,0.15);
    border: 1px solid rgba(191,161,74,0.5);
    color: #bfa14a;
    border-radius: 2rem;
    padding: 0.8rem 1rem;
    font-size: 0.95rem;
    font-weight: 600;
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
  }

  .beneficio:hover {
    background: #bfa14a;
    color: #111;
    transform: translateY(-2px);
  }

  /* ===== CTA Y MÉTRICAS ===== */
  .cta-metricas {
    margin: 1rem 0 1.7rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 1rem;
  }

  .btn-reserva-hero {
    background: linear-gradient(90deg, #bfa14a 60%, #25d366 100%);
    color: #18151a;
    font-weight: 900;
    font-size: 1.3rem;
    padding: 1.2rem 3rem;
    border: none;
    border-radius: 3rem;
    box-shadow: 0 6px 32px rgba(37,211,102,0.4), 0 3px 12px rgba(191,161,74,0.3);
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    animation: pulso-cta 3s infinite;
  }

  .btn-reserva-hero:hover {
    box-shadow: 0 10px 40px rgba(37,211,102,0.6), 0 4px 16px rgba(191,161,74,0.4);
    transform: scale(1.05) translateY(-2px);
    background: linear-gradient(90deg, #25d366 60%, #bfa14a 100%);
  }

  @keyframes pulso-cta {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.15) drop-shadow(0 0 12px rgba(191,161,74,0.8)); }
  }

  .metricas-hero {
    display: flex;
    gap: 2rem;
  }

  .metrica {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 80px;
  }

  .metrica-num {
    font-size: 1.5rem;
    font-weight: 800;
    color: #ffe082;
    letter-spacing: 1px;
    text-shadow: 0 2px 8px rgba(191,161,74,0.3);
  }

  .metrica-label {
    font-size: 0.9rem;
    color: #e5e5e5;
    opacity: 0.9;
    font-weight: 500;
  }

  /* ===== IMAGEN DEL ARTISTA ===== */
  .artista-wrapper {
    position: relative;
    max-width: 30vw;
    min-width: 400px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .decoracion-circulo {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -35%);
    z-index: 1;
    pointer-events: none;
    width: 100%;
    max-width: 450px;
  }

  .circulo-bg {
    width: 100%;
    height: auto;
  }

  .foto-artista-png {
  position: relative;
    z-index: 2;
    width: 100%;
    height: auto;
    max-width: 500px;
    filter: drop-shadow(0 8px 32px rgba(0,0,0,0.4));
  }

  /* ===== RESPONSIVE DESIGN ===== */
  @media (max-width: 1200px) {
    .hero { padding: 30px 60px 0; }
    .titulo { font-size: 2.8rem; }
    .artista-wrapper { min-width: 350px; }
}

  @media (max-width: 900px) {
    .hero {
      flex-direction: column;
      padding: 80px 20px 0;
      align-items: center;
      text-align: center;
      min-height: 90vh;
    }
    
    .contenido {
      align-items: center;
      margin-left: 0;
      max-width: 100%;
      order: 2;
    }
    
  .artista-wrapper {
      order: 2;
      max-width: 85vw;
      min-width: 300px;
      margin-top: 7rem;
  }
    
    .titulo { font-size: 2.4rem; }
    .descripcion { font-size: 1.1rem; text-align: center; }
    
  .beneficios {
      justify-content: center;
      gap: 0.8rem;
  }
    
  .beneficio {
      font-size: 0.85rem;
      padding: 0.6rem 0.8rem;
    }
    
    .cta-metricas { align-items: center; }
    
    .btn-reserva-hero {
      font-size: 1.1rem;
      padding: 1rem 2.5rem;
    }
    
    .metricas-hero { gap: 1.5rem; }
  }

  @media (max-width: 500px) {
    .hero { padding: 60px 15px 0; }
    .titulo { font-size: 2rem; }
    .descripcion { font-size: 1rem; }
    .artista-wrapper { min-width: 280px; }
    .beneficios { flex-direction: column; align-items: center; }
    .metricas-hero { gap: 1rem; }
  }
</style>

