<script lang="ts">
  import { trackConversion } from '$lib/tracking';
  
  let mostrarModal = false;
  
  const numeroWhatsapp = '573144096187';
  const mensajeWhatsapp = encodeURIComponent('¡Hola! Quiero reservar a Jesús González para mi evento. ¿Me pueden ayudar con información y precios?');
  const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensajeWhatsapp}`;
  
  function abrirModalConTracking() {
    trackConversion('CTA_Modal_Click', 'Modal_Reserva');
    mostrarModal = true;
  }
  
  function irAWhatsappConTracking() {
    trackConversion('CTA_WhatsApp_Click', 'WhatsApp_Directo');
    window.open(urlWhatsapp, '_blank');
  }
  
  function cerrarModal() {
    mostrarModal = false;
  }
</script>

<section class="seccion-cta" id="contacto">
  <div class="contenedor-cta">
    <div class="contenido-cta">
      <div class="header-cta">
        <h2 class="titulo-cta">¿Listo para hacer tu evento inolvidable?</h2>
        <p class="subtitulo-cta">Jesús González está disponible para tu próxima celebración</p>
      </div>
      
      <div class="beneficios-cta">
        <div class="beneficio-cta">
          <span class="icono-beneficio">🎵</span>
          <span class="texto-beneficio">Repertorio personalizado para tu evento</span>
        </div>
        <div class="beneficio-cta">
          <span class="icono-beneficio">⏰</span>
          <span class="texto-beneficio">Respuesta inmediata por WhatsApp</span>
        </div>
        <div class="beneficio-cta">
          <span class="icono-beneficio">💎</span>
          <span class="texto-beneficio">Calidad profesional garantizada</span>
        </div>
      </div>
      
      <div class="acciones-cta">
        <button class="btn-principal" on:click={abrirModalConTracking}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          ¡Reserva tu fecha ahora!
        </button>
        
        <a href={urlWhatsapp} target="_blank" rel="noopener" class="btn-secundario" on:click={irAWhatsappConTracking}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.75 13.96c.25.13.41.2.52.34.11.14.16.32.16.54s-.05.4-.16.55-.27.27-.52.34c-.25.08-.58.12-1 .12-.41 0-.77-.04-1.08-.13s-.61-.23-.9-.42-.56-.43-.8-.72-.46-.64-.63-.99-.3-.75-.38-1.15c-.09-.4-.13-.77-.13-1.11 0-.43.06-.83.18-1.21.12-.37.3-.7.54-1s.52-.54.81-.74.6-.35.92-.45c.32-.1.62-.15.91-.15.41 0 .78.05 1.09.16s.59.26.82.46.41.44.53.72.18.57.18.86c0 .21-.04.4-.11.58s-.18.33-.33.45-.34.22-.58.29-.52.11-.83.11c-.39 0-.73-.07-1.02-.21s-.53-.33-.72-.57c.2.2.38.39.52.56.14.17.29.3.46.41.17.11.33.2.48.26.15.06.32.1.48.11zm3.22-7.21c-.43-.43-.9-.8-1.41-1.12s-1.06-.58-1.65-.77-1.22-.3-1.89-.3c-1.29 0-2.5.24-3.63.73s-2.14 1.12-2.97 1.95-1.52 1.83-1.99 2.96-.71 2.33-.71 3.61c0 1.34.24 2.61.71 3.81s1.14 2.29 2 3.25c.85.96 1.84 1.76 2.96 2.4s2.34 1 3.68 1.1h.11c1.31-.05 2.59-.34 3.79-.89s2.26-1.29 3.19-2.22.99-1.95 1.4-3.07.61-2.28.61-3.48c0-.68-.09-1.35-.28-1.99s-.45-1.25-.79-1.84c-.34-.59-.75-1.13-1.22-1.6zm-3.34 13.12c-.56.49-1.19.89-1.88 1.19s-1.42.45-2.19.45c-1.12 0-2.18-.23-3.16-.69s-1.85-1.06-2.6-1.82-1.34-1.62-1.79-2.6-.68-2.03-.68-3.16c0-1.16.23-2.26.68-3.3s1.05-1.97 1.8-2.82.64-1.54 2.61-2.3 2.03-.67 3.16-.67.23.11.23.34c0 .11-.04.22-.11.33s-.18.2-.33.27c-.15.07-.3.11-.47.11-.52 0-1.01.12-1.47.34s-.88.5-1.26.83c-.38.33-.7.7-.96 1.11s-.47.85-.61 1.31c-.15.46-.22.93-.22 1.41 0 .43.06.83.18 1.22s.3.73.54.99.52.48.81.65.6.28.92.36c.32.08.62.12.91.12.45 0 .85-.06 1.2-.18s.66-.29.91-.51.46-.46.6-.72.22-.5.22-.73c0-.17-.03-.33-.09-.47s-.14-.27-.26-.39-.25-.22-.41-.29-.34-.12-.53-.12c-.2 0-.38.02-.53.06s-.29.1-.41.16c-.12.06-.23.13-.33.21-.1.08-.19.16-.25.23-.05.06-.11.1-.19.13-.08.03-.15.05-.22.05-.12 0-.23-.04-.33-.11s-.16-.17-.18-.29c0-.06.01-.12.04-.18s.06-.12.11-.18.1-.11.16-.16.12-.1.19-.13.14-.05.22-.05.17.01.25.04.16.06.22.1c.07.04.13.08.19.13s.11.11.16.18.09.14.11.22c.03.08.04.17.04.25 0 .29-.07.55-.22.78s-.34.43-.58.59-.52.28-.83.36-.66.12-1.04.12c-.49 0-.93-.07-1.32-.2s-.75-.33-1.07-.58-.6-.56-.83-.92-.41-.75-.51-1.18c-.1-.42-.16-.85-.16-1.28s.05-.85.16-1.28.26-.81.48-1.15.48-.63.78-.88.64-.44 1.02-.58c.38-.14.78-.21 1.19-.21.43 0 .83.06 1.19.18s.68.29.95.51.48.49.64.81.24.66.24 1.01c0 .32-.07.6-.21.83s-.32.43-.54.58-.47.26-.74.33-.56.1-.85.1c-.21 0-.4-.02-.58-.06s-.34-.09-.48-.16-.26-.14-.37-.23c-.11-.09-.2-.18-.28-.28s-.13-.2-.17-.31c-.04-.11-.06-.23-.06-.34 0-.25.09-.47.28-.64s.44-.26.75-.26.57.08.79.25.4.38.51.63.16.52.16.81c0 .41-.09.78-.26 1.11s-.41.6-.7.82c-.29.22-.62.39-.98.51s-.75.18-1.17.18c-.59 0-1.15-.1-1.66-.31s-.98-.48-1.39-.81c-.41-.33-.77-.72-1.07-1.15s-.54-.92-.71-1.44-.26-1.08-.26-1.68c0-1.22.38-2.35 1.13-3.4s1.77-1.9 3.06-2.56c1.29-.65 2.69-1 4.19-1s2.88.33 4.14.98c1.26.65 2.33 1.51 3.22 2.58.89 1.07 1.54 2.3 1.95 3.68.41 1.38.61 2.83.61 4.34s-.21 2.95-.62 4.32-.99 2.59-1.74 3.65c-.75 1.06-1.64 1.95-2.68 2.68s-2.14 1.28-3.32 1.63z"/>
          </svg>
          Contactar por WhatsApp
        </a>
      </div>
      
      <div class="info-adicional">
        <p class="texto-info">📞 <strong>Respuesta en menos de 5 minutos</strong></p>
        <p class="texto-info">💳 <strong>Reserva con solo 50% de anticipo</strong></p>
        <p class="texto-info">🎯 <strong>Garantía de satisfacción 100%</strong></p>
      </div>
    </div>
  </div>
</section>

<style>
  .seccion-cta {
    padding: 5rem 1rem;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%);
    position: relative;
    overflow: hidden;
  }
  
  .seccion-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23bfa14a" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
    opacity: 0.3;
    pointer-events: none;
  }
  
  .contenedor-cta {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  
  .contenido-cta {
    text-align: center;
  }
  
  .header-cta {
    margin-bottom: 3rem;
  }
  
  .titulo-cta {
    font-size: 3rem;
    font-weight: 900;
    color: #ffe082;
    margin-bottom: 1rem;
    text-shadow: 0 2px 16px rgba(191,161,74,0.5);
    background: linear-gradient(135deg, #ffe082 0%, #bfa14a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .subtitulo-cta {
    font-size: 1.3rem;
    color: #e5e5e5;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .beneficios-cta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .beneficio-cta {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: rgba(191,161,74,0.1);
    border: 1px solid rgba(191,161,74,0.3);
    border-radius: 1rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
  }
  
  .beneficio-cta:hover {
    background: rgba(191,161,74,0.2);
    border-color: rgba(191,161,74,0.5);
    transform: translateY(-2px);
  }
  
  .icono-beneficio {
    font-size: 2rem;
    color: #bfa14a;
  }
  
  .texto-beneficio {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
  }
  
  .acciones-cta {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    margin-bottom: 3rem;
  }
  
  .btn-principal {
    background: linear-gradient(135deg, #bfa14a 0%, #ffe082 100%);
    color: #1a1a1a;
    font-weight: 900;
    font-size: 1.3rem;
    padding: 1.5rem 3rem;
    border: none;
    border-radius: 3rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 8px 32px rgba(191,161,74,0.4);
    animation: pulso-cta 2s infinite;
  }
  
  .btn-principal:hover {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 0 12px 40px rgba(191,161,74,0.6);
    background: linear-gradient(135deg, #ffe082 0%, #bfa14a 100%);
  }
  
  @keyframes pulso-cta {
    0%, 100% { 
      box-shadow: 0 8px 32px rgba(191,161,74,0.4);
    }
    50% { 
      box-shadow: 0 8px 32px rgba(191,161,74,0.6), 0 0 20px rgba(191,161,74,0.3);
    }
  }
  
  .btn-secundario {
    background: #25d366;
    color: #ffffff;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 1.2rem 2.5rem;
    border: none;
    border-radius: 2.5rem;
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    box-shadow: 0 6px 24px rgba(37,211,102,0.3);
  }
  
  .btn-secundario:hover {
    background: #1ea952;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(37,211,102,0.4);
  }
  
  .info-adicional {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
  
  .texto-info {
    color: #e5e5e5;
    font-size: 1rem;
    opacity: 0.8;
    margin: 0;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .seccion-cta {
      padding: 3rem 1rem;
    }
    
    .titulo-cta {
      font-size: 2.2rem;
    }
    
    .subtitulo-cta {
      font-size: 1.1rem;
    }
    
    .beneficios-cta {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .beneficio-cta {
      padding: 1.2rem;
    }
    
    .btn-principal {
      font-size: 1.1rem;
      padding: 1.3rem 2.5rem;
    }
    
    .btn-secundario {
      font-size: 1rem;
      padding: 1rem 2rem;
    }
  }
</style> 