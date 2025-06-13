<script>
  import ModalReserva from './ModalReserva.svelte';

  export let eventos = "+100 eventos realizados";
  export let titulo = "Haz de tu evento una experiencia inolvidable 🎶";
  export let descripcion = "Shows de acordeón profesional para eventos exclusivos, con la mejor energía y repertorio.";
  export let beneficios = [
    "+10 años de experiencia",
    "100% clientes satisfechos",
    "Repertorio personalizado"
  ];
  export let urlImagen = "/Imagenes/Jesus Fondo Blanco.png";
  let mostrarModal = false;
  
</script>
<section class="hero">
  <div class="contenido">
    <div class="estrellas">⭐⭐⭐⭐⭐ {eventos}</div>
    <h1 class="titulo">{titulo}</h1>
    <div class="descripcion">{descripcion}</div>
    <div class="beneficios">
      {#each beneficios as beneficio}
        <span class="beneficio">{beneficio}</span>
      {/each}
    </div>

    <div class="descargas-metricas">
      <div class="descargas-btns">
        <button class="btn-reserva-hero" on:click={() => mostrarModal = true}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style="margin-right:0.7rem;"><rect width="24" height="24" rx="6" fill="#25d366"/><path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Reserva tu show
        </button>
        <style>
          .btn-reserva-hero {
            background: linear-gradient(90deg,#bfa14a 60%,#25d366 100%);
            color: #18151a;
            font-weight: 900;
            font-size: 1.23rem;
            padding: 1.05rem 2.8rem;
            border: none;
            border-radius: 2.5rem;
            box-shadow: 0 4px 32px #25d36655, 0 2px 12px #bfa14a33;
            cursor: pointer;
            outline: none;
            margin-top: 0.4rem;
            margin-bottom: 0.8rem;
            transition: box-shadow 0.2s, transform 0.15s, background 0.18s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            animation: brillo-hero 2.5s infinite alternate;
          }
          .btn-reserva-hero:hover {
            box-shadow: 0 8px 40px #25d36699, 0 2px 12px #bfa14a33;
            transform: scale(1.04);
            background: linear-gradient(90deg,#25d366 60%,#bfa14a 100%);
          }
          @keyframes brillo-hero {
            from { filter: brightness(1); }
            to { filter: brightness(1.18) drop-shadow(0 0 8px #bfa14a99); }
          }
        </style>
      </div>
      <div class="metricas-hero">
        <div class="metrica">
          <span class="metrica-num">100+</span>
          <span class="metrica-label">Eventos</span>
        </div>
        <div class="metrica">
          <span class="metrica-num">10+</span>
          <span class="metrica-label">Años Experiencia</span>
        </div>
        <div class="metrica">
          <span class="metrica-num">100%</span>
          <span class="metrica-label">Satisfacción</span>
        </div>
      </div>
    </div>

    {#if mostrarModal}
  <ModalReserva mostrar={mostrarModal} onCerrar={() => mostrarModal = false} />
{/if}
  </div>

  <div class="artista-wrapper">
    <div class="decoracion-circulo" aria-hidden="true">
      <svg class="circulo-bg" width="370" height="370" viewBox="0 0 370 370" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="185" cy="185" r="160" fill="#ffe08222" filter="url(#glow)" />
        <defs>
          <filter id="glow" x="0" y="0" width="370" height="370" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <!-- Estrellas -->
        <g class="estrellas-circulo">
          <polygon points="185,55 191,75 212,75 195,87 201,107 185,95 169,107 175,87 158,75 179,75" fill="#ffe082"/>
          <polygon points="265,145 268,153 277,153 270,158 273,166 265,161 258,166 261,158 254,153 263,153" fill="#ffe082"/>
          <polygon points="115,145 118,153 127,153 120,158 123,166 115,161 108,166 111,158 104,153 113,153" fill="#ffe082"/>
          <polygon points="215,245 218,253 227,253 220,258 223,266 215,261 208,266 211,258 204,253 213,253" fill="#ffe082"/>
          <polygon points="155,245 158,253 167,253 160,258 163,266 155,261 148,266 151,258 144,253 153,253" fill="#ffe082"/>
        </g>
      </svg>
    </div>
    <img loading="lazy" width="400" height="400" class="foto-artista-png" src={urlImagen} alt="Foto artista musical" />
  </div>
</section>

<style>
  .hero {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    background: linear-gradient(120deg, #18151a 60%, #bfa14a22 100%), url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=cover&w=1400&q=80');
    background-size: cover;
    background-position: center;
    position: relative;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 50px;
  }


.artista-wrapper {
    bottom: 0;
    right: 0;
    max-width: 26vw;
    display: flex;
    align-items: flex-end;
    position: relative;
    justify-content: center;
}
.decoracion-circulo {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -40%);
    z-index: 1;
    pointer-events: none;
    width: 100%;
    max-width: 700px;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.circulo-bg {
    width: 100%;
    height: auto;
}
.foto-artista-png {
    position: relative;
    z-index: 2;
}


  .contenido {
    flex: 1;
    color: #fff;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    margin-left: 5vw;
    gap: 1rem;
  }
  .descargas-metricas {
    margin: 1rem 0 1.7rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .descargas-btns {
    display: flex;
    gap: 0.7rem;
    margin-bottom: 0.4rem;
  }
  .store-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #18151a;
    border: 1.5px solid #bfa14a55;
    color: #fff;
    border-radius: 1.2rem;
    padding: 0.45rem 1.2rem;
    font-weight: 700;
    font-size: 1.01rem;
    text-decoration: none;
    box-shadow: 0 2px 10px #0002;
    transition: background 0.18s, border 0.18s;
    cursor: pointer;
    outline: none;
    user-select: none;
  }
  .store-btn:hover {
    background: #bfa14a;
    color: #18151a;
    border-color: #bfa14a;
  }
  .metricas-hero {
    display: flex;
    gap: 1.5rem;
    margin-top: 0.1rem;
  }
  .metrica {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 80px;
  }
  .metrica-num {
    font-size: 1.35rem;
    font-weight: 800;
    color: #ffe082;
    letter-spacing: 1px;
    margin-bottom: 0.1rem;
    text-shadow: 0 2px 12px #bfa14a22;
  }
  .metrica-label {
    font-size: 0.92rem;
    color: #e5e5e5;
    opacity: 0.88;
    font-weight: 500;
    text-align: center;
  }

  .estrellas {
    color: #bfa14a;
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }
  .titulo {
    font-size: 2.8rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1rem;
    text-shadow: 0 2px 16px #0008;
  }
  .descripcion {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #e5e5e5;
  }
  .beneficios {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  .beneficio {
    background: rgba(191,161,74,0.15);
    border: 1px solid #bfa14a55;
    color: #bfa14a;
    border-radius: 2rem;
    padding: 0.9rem 0.9rem;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    box-shadow: 0 2px 10px #0003;
    transition: background 0.2s;
  }
  .beneficio:hover {
    background: #bfa14a;
    color: #111;
  }
  .modal-reserva {
    background: #18151a;
    border-radius: 2.2rem;
    box-shadow: 0 8px 48px #000a, 0 2px 18px #bfa14a44;
    padding: 2.5rem 2.2rem 2.2rem 2.2rem;
    max-width: 340px;
    width: 94vw;
    text-align: center;
    color: #ffe082;
    position: relative;
    animation: modalPopIn 0.33s cubic-bezier(.42,1.7,.38,.97);
  }
  .modal-reserva h2 {
    font-size: 1.45rem;
    font-weight: 900;
    color: #ffe082;
    margin-bottom: 0.6rem;
  }
  .modal-reserva p {
    color: #fffbe7;
    font-size: 1.08rem;
    margin-bottom: 1.5rem;
  }
  .modal-whatsapp {
    display: inline-block;
    background: linear-gradient(90deg,#25d366 60%,#bfa14a 100%);
    color: #18151a;
    font-weight: 800;
    font-size: 1.13rem;
    padding: 0.8rem 2.2rem;
    border: none;
    border-radius: 2.2rem;
    box-shadow: 0 4px 32px #25d36655;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    margin-top: 0.3rem;
    transition: box-shadow 0.2s, transform 0.15s;
  }
  .modal-whatsapp:hover {
    box-shadow: 0 8px 40px #25d36699, 0 2px 12px #bfa14a33;
    transform: scale(1.04);
    color: #111;
  }
  .modal-cerrar {
    position: absolute;
    top: 0.7rem;
    right: 1.2rem;
    background: none;
    border: none;
    color: #ffe082;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.18s;
    z-index: 10;
  }
  .modal-cerrar:hover {
    color: #25d366;
  }
  @keyframes modalFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes modalPopIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }

.modal-reserva {
  background: #18151a;
  border-radius: 2.2rem;
  box-shadow: 0 8px 48px #000a, 0 2px 18px #bfa14a44;
  padding: 2.5rem 2.2rem 2.2rem 2.2rem;
  max-width: 340px;
  width: 94vw;
  text-align: center;
  color: #ffe082;
  position: relative;
  animation: modalPopIn 0.33s cubic-bezier(.42,1.7,.38,.97);
}
.modal-reserva h2 {
  font-size: 1.45rem;
  font-weight: 900;
  color: #ffe082;
  margin-bottom: 0.6rem;
}
.modal-reserva p {
  color: #fffbe7;
  font-size: 1.08rem;
  margin-bottom: 1.5rem;
}
.modal-whatsapp {
  display: inline-block;
  background: linear-gradient(90deg,#25d366 60%,#bfa14a 100%);
  color: #18151a;
  font-weight: 800;
  font-size: 1.13rem;
  padding: 0.8rem 2.2rem;
  border: none;
  border-radius: 2.2rem;
  box-shadow: 0 4px 32px #25d36655;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  margin-top: 0.3rem;
  transition: box-shadow 0.2s, transform 0.15s;
}
.modal-whatsapp:hover {
  box-shadow: 0 8px 40px #25d36699, 0 2px 12px #bfa14a33;
  transform: scale(1.04);
  color: #111;
}
.modal-cerrar {
  position: absolute;
  top: 0.7rem;
  right: 1.2rem;
  background: none;
  border: none;
  color: #ffe082;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.18s;
  z-index: 10;
}
.modal-cerrar:hover {
  color: #25d366;
}
@keyframes modalFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes modalPopIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

@media (max-width: 1100px) {
    .hero {
      flex-direction: column;
      min-height: 100vh;
      padding-left: 12px;
      padding-right: 12px;
      padding-top: 100px;
      align-items: center;
    }
    .contenido {
      align-items: center;
      margin-left: 0;
      max-width: 100%;
      text-align: center;
      gap: 0.5rem;
    }
    .titulo {
      font-size: 2.0rem;
    }
    .descripcion {
      font-size: 1.08rem;
    }
    
  .artista-wrapper {
      bottom: 0;
      right: 0;
      max-width: 75vw;
      display: flex;
      align-items: flex-end;
      margin-top: 50px;
  }
  .descargas-metricas {
    margin: 1rem 0 1.7rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .beneficios {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 1.5rem;
  }
  .beneficio {
    padding: 0.5rem 0.2rem;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
  }
  .decoracion-circulo {

    transform: translate(-50%, -40%);
    width: 370px;
  }
  
  }
</style>

