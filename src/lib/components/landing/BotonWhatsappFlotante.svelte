<script>
  // Número de WhatsApp destino
  export let numero = '573228176411';
  export let mensaje = '¡Hola! Me interesa cotizar un show.';
  
  function irAWhatsapp() {
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
</script>

<style>
.fab-whatsapp {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 12000;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25d366 60%, #bfa14a 100%);
  box-shadow: 0 8px 32px #25d36688, 0 2px 8px #bfa14a55;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.18s, box-shadow 0.18s;
  animation: pulseWpp 2.4s infinite alternate;
  border: 2.5px solid #fffbe5;
}
.fab-whatsapp:hover {
  transform: scale(1.13) rotate(-6deg);
  box-shadow: 0 12px 40px #25d366cc, 0 4px 16px #bfa14a99;
}
@keyframes pulseWpp {
  0% { box-shadow: 0 0 0 0 #25d36644, 0 8px 32px #25d36688; }
  70% { box-shadow: 0 0 0 16px #25d36611, 0 8px 32px #25d36688; }
  100% { box-shadow: 0 0 0 0 #25d36644, 0 8px 32px #25d36688; }
}
.fab-whatsapp__icon {
  width: 38px;
  height: 38px;
  display: block;
}
.fab-whatsapp__tooltip {
  position: absolute;
  right: 80px;
  bottom: 16px;
  background: #18151aee;
  color: #fffbe7;
  padding: 0.7rem 1.1rem;
  border-radius: 1.2rem;
  font-size: 1.08rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s, transform 0.18s;
  transform: translateY(12px);
  box-shadow: 0 2px 14px #25d36644;
}
.fab-whatsapp:hover .fab-whatsapp__tooltip,
.fab-whatsapp:focus .fab-whatsapp__tooltip {
  opacity: 1;
  transform: translateY(0);
}
@media (max-width: 600px) {
  .fab-whatsapp {
    bottom: 18px;
    right: 16px;
    width: 54px;
    height: 54px;
  }
  .fab-whatsapp__icon {
    width: 28px;
    height: 28px;
  }
  .fab-whatsapp__tooltip {
    right: 64px;
    font-size: 0.97rem;
    padding: 0.45rem 0.7rem;
  }
}
</style>

<div class="fab-whatsapp" on:click={irAWhatsapp} tabindex="0" aria-label="Chatea por WhatsApp">
  <svg class="fab-whatsapp__icon" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#25d366"/>
    <path d="M16 6C10.477 6 6 10.477 6 16c0 1.44.38 2.79 1.04 3.97L6 26l6.19-1.02A9.944 9.944 0 0016 26c5.523 0 10-4.477 10-10S21.523 6 16 6z" fill="#fff"/>
    <path d="M23.44 20.12c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.59-1.9-1.77-2.22-.18-.32-.02-.49.14-.65.15-.15.32-.4.48-.6.16-.21.21-.37.32-.61.11-.24.05-.45-.03-.61-.08-.16-.71-1.71-.98-2.34-.26-.63-.53-.54-.71-.55-.18-.01-.39-.02-.6-.02-.21 0-.56.08-.85.37-.29.29-1.11 1.08-1.11 2.64 0 1.56 1.13 3.07 1.29 3.29.16.21 2.23 3.41 5.41 4.65.76.3 1.36.48 1.82.61.76.19 1.45.16 2 .1.61-.07 1.89-.77 2.16-1.52.27-.75.27-1.4.19-1.52-.08-.12-.29-.19-.61-.35z" fill="#25d366"/>
  </svg>
  <span class="fab-whatsapp__tooltip">¿Tienes dudas? ¡Chatea por WhatsApp!</span>
</div>
