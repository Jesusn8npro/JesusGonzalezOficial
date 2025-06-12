<script>
  // Componente Servicios.svelte
  // Sección imponente y profesional para mostrar los tipos de shows/servicios de la agrupación musical
  // Todo en español, bien organizado y con animaciones
  import { fly, fade, scale } from 'svelte/transition';
  let modalActivo = false;
  let servicioSeleccionado = null;

  // Datos de los servicios
  const servicios = [
    {
      nombre: 'Parranda Vallenata',
      descripcion: 'Ideal para reuniones íntimas, cumpleaños, fiestas privadas y celebraciones familiares. Incluye acordeón, caja y guacharaca.',
      detalles: 'Duración: 1-2 horas. Repertorio personalizado. Ambiente alegre y cercano.',
      imagen: '/Imagenes/Jesus Gonzalez en concierto.jpg',
      color: 'linear-gradient(135deg, #f8e7b8 60%, #bfa14a 100%)',
      boton: '¡Quiero mi Parranda!',
      animacion: 'pulso',
      bg: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=cover&w=800&q=60',
      textoColor: '#3d2f00',
      subtituloColor: '#bfa14a',
    },
    {
      nombre: 'Show Semicompleto',
      descripcion: 'Para eventos sociales, bodas y fiestas empresariales. Suma bajo, cantante y percusión para un show más potente.',
      detalles: 'Duración: 2-3 horas. Sonido profesional. Más músicos, más energía.',
      imagen: '/Imagenes/Pipe Pelaez y Jesus Gonzalez.jpg',
      color: 'linear-gradient(135deg, #e6f0ff 60%, #bfa14a 100%)',
      boton: 'Descubre el Show Semicompleto',
      animacion: 'rebote',
      bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=800&q=60',
      textoColor: '#1e2b3a',
      subtituloColor: '#0052a3',
    },
    {
      nombre: 'Show Completo',
      descripcion: 'La experiencia total: agrupación profesional, luces, sonido premium y repertorio de concierto. Ideal para grandes eventos.',
      detalles: 'Duración: 3-4 horas. Show completo, puesta en escena, interacción con el público.',
      imagen: '/Imagenes/jesus Gon Jorge Celedon.jpg',
      color: 'linear-gradient(135deg, #fffbe5 60%, #bfa14a 100%)',
      boton: '¡Vívelo en Grande!',
      animacion: 'brillo',
      bg: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=cover&w=800&q=60',
      textoColor: '#2a2a2a',
      subtituloColor: '#bfa14a',
    },
  ];

  function abrirModal(servicio) {
    servicioSeleccionado = servicio;
    modalActivo = true;
  }
  function cerrarModal() {
    modalActivo = false;
    servicioSeleccionado = null;
  }
</script>

<section class="servicios-section" id="servicios">
  <h2 class="titulo" in:fly={{ y: 30, duration: 600 }}>Elige el show perfecto para tu evento</h2>
  <div class="subtitulo" in:fade={{ duration: 600, delay: 200 }}>
    Desde parrandas íntimas hasta conciertos completos, tenemos la opción ideal para cada ocasión.
  </div>
  <div class="tarjetas">
    {#each servicios as servicio (servicio.nombre)}
      <div class="tarjeta" style="background: {servicio.color}" on:click={() => abrirModal(servicio)} in:scale={{ duration: 400 }}>
        <img class="tarjeta-bg" src={servicio.bg} alt="Fondo {servicio.nombre}" />
        <div class="contenido-tarjeta">
          <img class="img-servicio" src={servicio.imagen} alt={servicio.nombre} />
          <div class="nombre-servicio" style="color:{servicio.subtituloColor};font-size:1.45rem;font-weight:800;letter-spacing:0.01em;text-shadow:0 2px 8px #fff8;">
            {servicio.nombre}
          </div>
          <div class="desc-servicio" style="color:{servicio.textoColor};font-size:1.08rem;font-weight:500;margin:0.5rem 0 1.2rem 0;line-height:1.45;text-shadow:0 1px 8px #fff4;">
            {servicio.descripcion}
          </div>
          <button 
            class="btn-info {servicio.animacion}"
            on:click|stopPropagation={() => abrirModal(servicio)}
          >
            {servicio.boton}
          </button>
        </div>
      </div>
    {/each}
  </div>

  {#if modalActivo && servicioSeleccionado}
  <div class="modal-bg" on:click={cerrarModal}>
    <div class="modal modal-{servicioSeleccionado.nombre.replace(/\s+/g, '-').toLowerCase()}" in:scale={{ duration: 200 }} out:fade={{ duration: 150 }} on:click|stopPropagation>
      <button class="cerrar-modal" on:click={cerrarModal} aria-label="Cerrar">×</button>
      <div class="modal-contenido-luxury">
        <img class="img-servicio" src={servicioSeleccionado.imagen} alt={servicioSeleccionado.nombre} />
        <h3 class="modal-titulo">{servicioSeleccionado.nombre}</h3>
        <div class="modal-beneficios">
          {#if servicioSeleccionado.nombre === 'Parranda Vallenata'}
            <ul>
              <li>🎶 <b>Ambiente íntimo y auténtico</b> para celebrar con familia y amigos.</li>
              <li>✨ <b>Repertorio personalizado</b> según tus gustos y ocasión.</li>
              <li>🥇 <b>Músicos profesionales</b> y show 100% en vivo.</li>
              <li>💬 <b>Atención directa y asesoría personalizada</b> para tu evento.</li>
            </ul>
            <div class="modal-detalles">{servicioSeleccionado.detalles}</div>
            <div class="modal-cta">¡Haz de tu celebración un recuerdo inolvidable!<br><span class="whatsapp-highlight">Reserva ya tu Parranda Vallenata.</span></div>
          {:else if servicioSeleccionado.nombre === 'Show Semicompleto'}
            <ul>
              <li>🔥 <b>Más músicos, más energía</b> y repertorio extendido.</li>
              <li>🎤 <b>Sonido profesional</b> para eventos medianos y grandes.</li>
              <li>💎 <b>Presentación elegante</b> y puntualidad garantizada.</li>
              <li>🤝 <b>Experiencia y confianza</b> respaldada por cientos de eventos exitosos.</li>
            </ul>
            <div class="modal-detalles">{servicioSeleccionado.detalles}</div>
            <div class="modal-cta">¡Haz que tu evento brille con un show inolvidable!<br><span class="whatsapp-highlight">Solicita tu cotización personalizada.</span></div>
          {:else}
            <ul>
              <li>🌟 <b>Show de alto impacto</b> con luces, sonido y puesta en escena profesional.</li>
              <li>🎉 <b>Interacción total</b> con el público y repertorio de concierto.</li>
              <li>🏆 <b>Ideal para grandes eventos</b>: bodas, ferias, empresas y más.</li>
              <li>🔒 <b>Garantía de satisfacción</b> y atención VIP.</li>
            </ul>
            <div class="modal-detalles">{servicioSeleccionado.detalles}</div>
            <div class="modal-cta">¡Vive la experiencia musical definitiva!<br><span class="whatsapp-highlight">Agenda tu fecha exclusiva ahora.</span></div>
          {/if}
        </div>
        <a class="modal-whatsapp-btn" href="https://wa.me/573228176411" target="_blank" rel="noopener">
          <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M12.004 2.003c-5.522 0-9.997 4.475-9.997 9.997 0 1.762.468 3.484 1.357 4.995l-1.426 5.221a1.002 1.002 0 0 0 1.217 1.217l5.221-1.426a9.96 9.96 0 0 0 4.995 1.357c5.522 0 9.997-4.475 9.997-9.997s-4.475-9.997-9.997-9.997zm0 17.994c-1.54 0-3.056-.394-4.385-1.14a1.001 1.001 0 0 0-.755-.07l-3.482.951.951-3.482a1.001 1.001 0 0 0-.07-.755 7.963 7.963 0 0 1-1.14-4.385c0-4.411 3.587-7.998 7.998-7.998s7.998 3.587 7.998 7.998-3.587 7.998-7.998 7.998zm4.508-6.708c-.246-.123-1.457-.719-1.683-.801-.226-.082-.391-.123-.557.123-.164.246-.635.801-.779.965-.143.164-.287.184-.533.062-.246-.123-1.04-.383-1.98-1.221-.732-.653-1.227-1.459-1.372-1.705-.143-.246-.015-.379.108-.501.111-.111.246-.287.369-.43.123-.143.164-.246.246-.41.082-.164.041-.308-.021-.43-.062-.123-.557-1.345-.764-1.84-.201-.482-.406-.416-.557-.425l-.473-.008c-.164 0-.43.062-.656.308s-.86.84-.86 2.049c0 1.209.88 2.377 1.002 2.541.123.164 1.73 2.646 4.198 3.607.588.202 1.045.322 1.402.412.589.15 1.125.129 1.549.078.472-.057 1.457-.596 1.663-1.173.205-.576.205-1.07.143-1.173-.062-.104-.225-.164-.471-.287z"/></svg>
          Reserva por WhatsApp
        </a>
        <div class="modal-confianza">🔒 Respuesta rápida y atención personalizada. Tu evento en manos de expertos.</div>
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
    width: 100%;
    background: linear-gradient(120deg, #fffbe5 60%, #fff 100%);
    position: relative;
  }
  .servicios-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=cover&w=1200&q=60') center/cover no-repeat;
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
  -webkit-text-stroke: 1.5px #fffbe5cc;
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
    gap: 2.2rem;
    justify-content: center;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .tarjeta {
    width: 360px;
    max-width: 90vw;
    min-height: 420px;
    border-radius: 2.1rem;
    box-shadow: 0 4px 32px #bfa14a22, 0 2px 12px #fff2;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: transform 0.18s, box-shadow 0.18s;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fffbe5;
  }
  @media (max-width: 900px) {
    .tarjetas {
      flex-direction: column;
      gap: 1.3rem;
      align-items: center;
    }
    .tarjeta {
      width: 98vw;
      max-width: 330px;
      min-width: unset;
    }
  }
  @media (max-width: 600px) {
    .tarjetas {
      gap: 0.6rem;
      padding: 0 0.5rem;
    }
    .tarjeta {
      width: 100%;
      max-width: 98vw;
      min-width: unset;
    }
  }
  .tarjeta-bg {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 0.23;
    pointer-events: none;
    border-radius: 2.7rem;
    filter: blur(0.5px) grayscale(0.15);
  }
  .tarjeta .contenido-tarjeta {
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tarjeta:hover {
    transform: translateY(-10px) scale(1.04);
    box-shadow: 0 8px 48px #bfa14a88, 0 2px 24px #fff6;
    border-color: #bfa14a;
  }
  .img-servicio {
    width: 92px;
    height: 92px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #bfa14a;
    margin-bottom: 1.2rem;
    box-shadow: 0 2px 18px #bfa14a44;
    background: #fff;
  }
  .nombre-servicio {
    font-size: 1.35rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 0.6rem;
    text-align: center;
  }
  .desc-servicio {
    font-size: 1.05rem;
    color: #444;
    margin-bottom: 1.2rem;
    text-align: center;
  }
  .btn-info {
    background: linear-gradient(90deg,#bfa14a 60%,#fffbe5 100%);
    color: #222;
    font-weight: 800;
    font-size: 1.02rem;
    padding: 0.7rem 1.9rem;
    border: none;
    border-radius: 2rem;
    box-shadow: 0 2px 16px #bfa14a33;
    cursor: pointer;
    outline: none;
    transition: box-shadow 0.2s, transform 0.15s;
    margin-top: 1.3rem;
    animation: brillo 2.5s infinite alternate;
  }
  .btn-info:hover {
    box-shadow: 0 4px 28px #bfa14a99, 0 2px 12px #fff3;
    transform: scale(1.04);
  }
  @keyframes brillo {
    from { filter: brightness(1); }
    to { filter: brightness(1.18) drop-shadow(0 0 8px #bfa14a99); }
  }
  @keyframes pulso {
    0% { transform: scale(1); box-shadow: 0 2px 16px #bfa14a33; }
    60% { transform: scale(1.08); box-shadow: 0 4px 32px #bfa14a66; }
    100% { transform: scale(1); box-shadow: 0 2px 16px #bfa14a33; }
  }
  @keyframes rebote {
    0% { transform: translateY(0); }
    20% { transform: translateY(-8px); }
    40% { transform: translateY(0); }
    60% { transform: translateY(-4px); }
    80% { transform: translateY(0); }
    100% { transform: translateY(0); }
  }
  .btn-info.pulso {
    animation: pulso 1.8s infinite;
  }
  .btn-info.rebote {
    animation: rebote 1.3s infinite;
  }
  .btn-info.brillo {
    animation: brillo 2.5s infinite alternate;
  }
  /* Modal */
  .modal-bg {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(17,17,17,0.45);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeInBg 0.3s;
  }
  @keyframes fadeInBg {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .modal {
    background: #fffbe5;
    border-radius: 2rem;
    box-shadow: 0 8px 60px #bfa14a55, 0 2px 24px #0002;
    padding: 2.5rem 2rem 2rem 2rem;
    max-width: 400px;
    min-width: 290px;
    position: relative;
    animation: modalScale 0.25s;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @keyframes modalScale {
    from { transform: scale(0.85); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  .modal .img-servicio {
    width: 85px;
    height: 85px;
    margin-bottom: 1.1rem;
  }
  .cerrar-modal {
    position: absolute;
    top: 16px;
    right: 16px;
    background: #bfa14a;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 10px #bfa14a22;
    transition: background 0.18s;
    z-index: 10;
  }
  .cerrar-modal:hover {
    background: #111;
    color: #bfa14a;
  }
  /* Divisor superior para combinar con el Hero */
    @media (max-width: 900px) {
    .tarjetas {
      gap: 1.3rem;
    }
    .tarjeta {
      width: 98vw;
      max-width: 330px;
    }
  }
</style>
