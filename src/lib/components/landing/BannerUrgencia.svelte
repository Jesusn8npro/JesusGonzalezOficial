<script>
  import { onMount } from 'svelte';
  let tiempoRestante = 60 * 60 * 2;
  let horas = 0, minutos = 0, segundos = 0;
  let intervalo;

  export let onReservar = () => {};

  function formateaTiempo(seg) {
    const h = Math.floor(seg / 3600);
    const m = Math.floor((seg % 3600) / 60);
    const s = seg % 60;
    return {
      h: String(h).padStart(2, '0'),
      m: String(m).padStart(2, '0'),
      s: String(s).padStart(2, '0')
    };
  }

  function actualizarContador() {
    if (tiempoRestante > 0) {
      tiempoRestante--;
      const t = formateaTiempo(tiempoRestante);
      horas = t.h;
      minutos = t.m;
      segundos = t.s;
    } else {
      clearInterval(intervalo);
    }
  }

  onMount(() => {
    const t = formateaTiempo(tiempoRestante);
    horas = t.h;
    minutos = t.m;
    segundos = t.s;
    intervalo = setInterval(actualizarContador, 1000);
    return () => clearInterval(intervalo);
  });
</script>

<style>
.banner-urgencia {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  left: 0;
  top: 0;
  z-index: 1000;
  position: sticky;
  background: linear-gradient(90deg,#fffbe7 60%,#25d366 100%);
  color: #18151a;
  font-family: 'Montserrat', Arial, sans-serif;
  box-shadow: 0 2px 18px #25d36622, 0 1px 4px #bfa14a11;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  min-height: 48px;
  border-bottom: 2px solid #bfa14a33;
} 
.banner-urgencia__contenido {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  gap: 1.2rem;
}

.banner-urgencia__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.09rem;
  flex: 2.5;
}

.banner-urgencia__icon {
  font-size: 1.25rem;
  margin-bottom: 0.01rem;
}

.banner-urgencia__mensaje {
  font-size: 1.04rem;
  font-weight: 700;
  color: #18151a;
}

.banner-urgencia__sub {
  font-size: 0.93rem;
  color: #25d366;
  font-weight: 500;
  margin-top: 0.05rem;
}

.banner-urgencia__titulo {
  font-size: 1.09rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  margin-bottom: 0;
  text-align: left;
  color: #bfa14a;
  flex: 2;
} 
.banner-urgencia__detalles {
  font-size: 0.99rem;
  text-align: left;
  color: #18151a;
  flex: 2.5;
  margin-bottom: 0;
} 
.banner-urgencia__contador {
  background: #18151a;
  color: #fffbe7;
  font-weight: 900;
  border-radius: 1.5rem;
  padding: 0.08rem 0.9rem;
  font-size: 1.09rem;
  letter-spacing: 0.04em;
  margin: 0 0.5rem;
  box-shadow: 0 1px 6px #bfa14a22;
  display: inline-block;
  border: 2px solid #bfa14a;
} 
.banner-urgencia__boton {
  background: linear-gradient(90deg,#25d366 60%,#bfa14a 100%);
  color: #18151a;
  font-weight: 900;
  font-size: 1.09rem;
  padding: 0.48rem 1.2rem;
  border: none;
  border-radius: 2.5rem;
  box-shadow: 0 2px 10px #25d36644, 0 1px 5px #bfa14a22;
  cursor: pointer;
  outline: none;
  margin: 0;
  transition: box-shadow 0.18s, transform 0.13s, background 0.16s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  position: relative;
  z-index: 2;
}

.animacion-pulso {
  animation: pulsoBtn 1.5s infinite;
}
@keyframes pulsoBtn {
  0% { box-shadow: 0 0 0 0 #25d36655, 0 1px 5px #bfa14a22; }
  70% { box-shadow: 0 0 0 10px #25d36611, 0 1px 5px #bfa14a22; }
  100% { box-shadow: 0 0 0 0 #25d36655, 0 1px 5px #bfa14a22; }
}

.banner-urgencia__boton:hover {
  background: linear-gradient(90deg,#bfa14a 60%,#25d366 100%);
  transform: scale(1.04);
}
@media (max-width: 800px) {
  .banner-urgencia {
    padding-left: 0;
    padding-right: 0;
  }
  .banner-urgencia__contenido {
    flex-direction: column;
    gap: 0.3rem;
    align-items: stretch;
    width: 100%;
    margin: 0;
  }
  .banner-urgencia__info {
    align-items: center;
    text-align: center;
    width: 100%;
  }
  .banner-urgencia__boton {
    align-items: center;
    text-align: center;
    width: 100%;
    margin-top: 0.25rem;
    margin-bottom: 0.1rem;
    padding-left: 0;
    padding-right: 0;
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .banner-urgencia__titulo {
    font-size: 0.97rem;
  }
  .banner-urgencia__contador {
    font-size: 0.97rem;
    padding: 0.09rem 0.5rem;
  }
  .banner-urgencia__boton {
    font-size: 1rem;
    padding: 0.38rem 0;
    width: 100%;
    min-width: 0;
    border-radius: 2rem;
    margin-left: 0;
    margin-right: 0;
  }
  .banner-urgencia {
    min-height: 38px;
    padding: 0.18rem 0.08rem;
  }
  .banner-urgencia__info {
    font-size: 0.98rem;
  }
}

</style>

<section class="banner-urgencia">
  <div class="banner-urgencia__contenido">
    <div class="banner-urgencia__info">
      <span class="banner-urgencia__icon" aria-label="Agenda casi llena">⏰</span>
      <span class="banner-urgencia__mensaje">
        <b>¡Agenda casi llena!</b> Solo quedan <span style="color:#bfa14a; font-weight:700;">{horas}:{minutos}:{segundos}</span>
      </span>
      <span class="banner-urgencia__sub">No te quedes sin tu show, ¡mereces lo mejor en tu evento!</span>
    </div>
    <button class="banner-urgencia__boton animacion-pulso" on:click={onReservar}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style="margin-right:0.7rem;"><rect width="24" height="24" rx="6" fill="#25d366"></rect><path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      ¡Cotiza tu evento ahora!
    </button>
  </div>
</section>
