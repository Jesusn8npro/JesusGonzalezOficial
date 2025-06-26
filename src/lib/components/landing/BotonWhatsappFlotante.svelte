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
  width: 65px;
  height: 65px;
  background: linear-gradient(145deg, #25d366 0%, #1ea952 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 8px 25px rgba(37, 211, 102, 0.4),
    0 0 0 0 rgba(37, 211, 102, 0.4);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  animation: pulseGlow 2s infinite, bounce 3s infinite ease-in-out;
  border: 3px solid rgba(255, 255, 255, 0.3);
}

.whatsapp-flotante::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: conic-gradient(from 0deg, #25d366, #1ea952, #25d366);
  border-radius: 50%;
  z-index: -1;
  animation: rotate 4s linear infinite;
  opacity: 0.8;
}

.whatsapp-flotante::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(37, 211, 102, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: ripple 2s infinite;
}

.whatsapp-flotante:hover {
  transform: scale(1.15) rotate(5deg);
  box-shadow: 
    0 12px 35px rgba(37, 211, 102, 0.6),
    0 0 30px rgba(37, 211, 102, 0.4);
  animation: shake 0.5s ease-in-out, pulseGlow 2s infinite;
}

.whatsapp-icon {
  width: 38px;
  height: 38px;
  display: block;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  transition: all 0.3s ease;
  z-index: 1;
}

.whatsapp-flotante:hover .whatsapp-icon {
  transform: scale(1.1);
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));
}

.whatsapp-tooltip {
  position: absolute;
  right: 80px;
  bottom: 15px;
  background: linear-gradient(145deg, rgba(24, 21, 26, 0.95), rgba(40, 40, 40, 0.95));
  color: #fff;
  padding: 12px 16px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(10px) scale(0.8);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
  border: 1px solid rgba(37, 211, 102, 0.3);
  backdrop-filter: blur(10px);
}

.whatsapp-tooltip::before {
  content: '';
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid rgba(24, 21, 26, 0.95);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

.whatsapp-flotante:hover .whatsapp-tooltip {
  opacity: 1;
  transform: translateX(0) scale(1);
  animation: tooltipBounce 0.6s ease-out;
}

@keyframes pulseGlow {
  0%, 100% { 
    box-shadow: 
      0 8px 25px rgba(37, 211, 102, 0.4),
      0 0 0 0 rgba(37, 211, 102, 0.4);
  }
  50% { 
    box-shadow: 
      0 8px 25px rgba(37, 211, 102, 0.6),
      0 0 0 15px rgba(37, 211, 102, 0.1);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
}

@keyframes shake {
  0%, 100% { transform: scale(1.15) rotate(5deg); }
  25% { transform: scale(1.15) rotate(-5deg); }
  75% { transform: scale(1.15) rotate(3deg); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes ripple {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}

@keyframes tooltipBounce {
  0% { transform: translateX(0) scale(1); }
  50% { transform: translateX(-5px) scale(1.05); }
  100% { transform: translateX(0) scale(1); }
}

@media (max-width: 600px) {
  .whatsapp-flotante {
    bottom: 15px;
    right: 15px;
    width: 60px;
    height: 60px;
  }
  
  .whatsapp-icon {
    width: 32px;
    height: 32px;
  }
  
  .whatsapp-tooltip {
    right: 70px;
    font-size: 12px;
    padding: 10px 14px;
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
