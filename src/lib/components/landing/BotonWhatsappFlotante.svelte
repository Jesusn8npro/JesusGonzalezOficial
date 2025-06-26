<script lang="ts">
  import { isServiceModalOpen } from '$lib/stores';

  // Número de WhatsApp destino
  export let numero = '573144096187';
  export let mensaje = '¡Hola! Me interesa cotizar un show.';
  
  function irAWhatsapp() {
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
</script>

<style>
.whatsapp-flotante {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000; /* Debajo del modal de servicios */
  animation: pulse 2s infinite;
}

.whatsapp-flotante:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
}

.whatsapp-icon {
  width: 35px;
  height: 35px;
  display: block;
}

.whatsapp-tooltip {
  position: absolute;
  right: 75px;
  bottom: 15px;
  background: rgba(24, 21, 26, 0.9);
  color: #fff;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s, transform 0.3s;
  transform: translateY(10px);
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}

.whatsapp-flotante:hover .whatsapp-tooltip {
  opacity: 1;
  transform: translateY(0);
}

@keyframes pulse {
  0% { 
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  }
  50% { 
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4), 0 0 0 10px rgba(37, 211, 102, 0.1);
  }
  100% { 
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  }
}

@media (max-width: 600px) {
  .whatsapp-flotante {
    bottom: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
  }
  .whatsapp-icon {
    width: 28px;
    height: 28px;
  }
  .whatsapp-tooltip {
    right: 60px;
    font-size: 12px;
    padding: 6px 10px;
  }
}

.whatsapp-flotante.hidden {
  display: none;
}
</style>

<div 
  class="whatsapp-flotante" 
  class:hidden={$isServiceModalOpen} 
  on:click={irAWhatsapp} 
  tabindex="0" 
  aria-label="Chatea por WhatsApp"
>
  <svg class="whatsapp-icon" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#25d366"/>
    <path d="M16 6C10.477 6 6 10.477 6 16c0 1.44.38 2.79 1.04 3.97L6 26l6.19-1.02A9.944 9.944 0 0016 26c5.523 0 10-4.477 10-10S21.523 6 16 6z" fill="#fff"/>
    <path d="M23.44 20.12c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.59-1.9-1.77-2.22-.18-.32-.02-.49.14-.65.15-.15.32-.4.48-.6.16-.21.21-.37.32-.61.11-.24.05-.45-.03-.61-.08-.16-.71-1.71-.98-2.34-.26-.63-.53-.54-.71-.55-.18-.01-.39-.02-.6-.02-.21 0-.56.08-.85.37-.29.29-1.11 1.08-1.11 2.64 0 1.56 1.13 3.07 1.29 3.29.16.21 2.23 3.41 5.41 4.65.76.3 1.36.48 1.82.61.76.19 1.45.16 2 .1.61-.07 1.89-.77 2.16-1.52.27-.75.27-1.4.19-1.52-.08-.12-.29-.19-.61-.35z" fill="#25d366"/>
  </svg>
  <span class="whatsapp-tooltip">¿Tienes dudas? ¡Chatea por WhatsApp!</span>
</div>
