<script>
  import { createEventDispatcher } from 'svelte';
  import { trackConversion } from '$lib/tracking';
  
  export let mostrar = false;
  let nombre = '';
  let servicio = '';
  let selectAbierto = false;
  const dispatch = createEventDispatcher();

  function abrirWhatsapp() {
    if (!nombre || !servicio) return;
    
    // Tracking de conversión centralizado
    trackConversion('WhatsApp_Contact', servicio);
    
    const numero = '573228176411';
    const mensaje = encodeURIComponent(`Hola, mi nombre es ${nombre}. Estoy interesado en el servicio de ${servicio}.`);
    const url = `https://wa.me/${numero}?text=${mensaje}`;
    window.open(url, '_blank');
  }
</script>

{#if mostrar}
  <div class="modal-overlay" on:click={() => dispatch('cerrar')}>
    <div class="modal-reserva" on:click|stopPropagation>
      <button class="modal-cerrar" aria-label="Cerrar" on:click={() => dispatch('cerrar')}>×</button>
      <h2>¡Te contactamos al instante!</h2>
      <p>Completa este formulario y te responderemos por WhatsApp en minutos. ¡Atención inmediata y personalizada!</p>
      <form class="form-reserva" on:submit|preventDefault={abrirWhatsapp}>
        <div class="form-group">
          <label for="nombre">Nombre completo</label>
          <input id="nombre" type="text" bind:value={nombre} required placeholder="Tu nombre" />
        </div>
        <div class="form-group">
          <label for="servicio">Servicio interesado</label>
          <div class="select-animado-wrapper" class:abierto={selectAbierto}>
            <select id="servicio" bind:value={servicio} required
              class:selected-open={selectAbierto}
              on:focus={() => selectAbierto = true}
              on:blur={() => selectAbierto = false}
              on:mousedown={() => { selectAbierto = true; }}
              on:change={() => { selectAbierto = false; }}
            >
              <option value="" disabled selected hidden>Selecciona una opción</option>
              <option value="Parranda Vallenata">Parranda Vallenata</option>
              <option value="Show Semicompleto">Show Semicompleto</option>
              <option value="Show Completo">Show Completo</option>
            </select>
          </div>
        </div>
        <button class="btn-enviar" type="submit">Ir a WhatsApp</button>
      </form>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 5000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .modal-reserva {
    background: linear-gradient(135deg, #18151a 70%, #bfa14a22 100%);
    border-radius: 2.4rem;
    box-shadow: 0 8px 48px #000a, 0 2px 18px #bfa14a44;
    padding: 2.7rem 2.8rem 2.6rem 2.8rem;
    max-width: 520px;
    width: 96vw;
    text-align: center;
    color: #ffe082;
    position: relative;
    animation: modalPopIn 0.33s cubic-bezier(.42,1.7,.38,.97);
    border: 2.5px solid #bfa14a;
    transition: max-width 0.25s cubic-bezier(.42,1.7,.38,.97);
  }
  @media (max-width: 700px) {
    .modal-reserva {
      max-width: 85vw;
      padding: 1.3rem 0.6rem 1.4rem 0.6rem;
      border-radius: 1.3rem;
    }
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
  .form-reserva {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    margin-top: 1.2rem;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
    width: 100%;
    position: relative;
  }
  .select-animado-wrapper {
    width: 100%;
    position: relative;
    transition: margin-bottom 0.35s cubic-bezier(.42,1.7,.38,.97);
    margin-bottom: 0.9rem;
  }
  .select-animado-wrapper.abierto {
    margin-bottom: 8rem;
  }
  select.selected-open {
    box-shadow: 0 0 0 3px #25d36655;
    background: #23201a;
    border: 2px solid #25d366;
    transition: box-shadow 0.22s, border 0.22s, background 0.18s;
  }
  .form-group label {
    color: #ffe082;
    font-weight: 700;
    font-size: 1.05rem;
  }
  .form-group input, .form-group select {
    width: 100%;
    padding: 0.7rem 1rem;
    border-radius: 1.4rem;
    border: 1.5px solid #bfa14a;
    background: #22201a;
    color: #ffe082;
    font-size: 1.08rem;
    font-weight: 500;
    outline: none;
    margin-top: 0.1rem;
    transition: border 0.2s, box-shadow 0.2s, background 0.2s;
    box-shadow: 0 2px 14px #bfa14a11;
  }
  .form-group input:focus, .form-group select:focus {
    border: 2px solid #25d366;
    box-shadow: 0 0 10px #25d36677;
    background: #23201a;
  }
  .input-whatsapp {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
  }
  .indicativo {
    background: #25d366;
    color: #18151a;
    font-weight: 700;
    padding: 0.55rem 1.1rem;
    border-radius: 1.2rem 0 0 1.2rem;
    font-size: 1.08rem;
    border: 1.5px solid #bfa14a;
    border-right: none;
  }
  .input-whatsapp input {
    border-radius: 0 1.2rem 1.2rem 0;
    border-left: none;
    margin-left: -0.3rem;
  }
  .btn-enviar {
    background: linear-gradient(90deg,#25d366 60%,#bfa14a 100%);
    color: #18151a;
    font-weight: 900;
    font-size: 1.15rem;
    padding: 1.08rem 2.2rem;
    border: none;
    border-radius: 2.3rem;
    margin-top: 0.6rem;
    box-shadow: 0 4px 32px #25d36655;
    cursor: pointer;
    transition: box-shadow 0.2s, transform 0.15s, margin 0.25s cubic-bezier(.42,1.7,.38,.97);
    letter-spacing: 0.01em;
    font-family: inherit;
    animation: pulseBtn 2.6s infinite alternate;
  }
  .btn-enviar:hover {
    box-shadow: 0 8px 40px #25d36699;
    transform: scale(1.045);
    background: linear-gradient(90deg,#bfa14a 60%,#25d366 100%);
  }
  @keyframes pulseBtn {
    from { filter: brightness(1); }
    to { filter: brightness(1.15) drop-shadow(0 0 8px #bfa14a99); }
  }
  .btn-enviar:hover {
    box-shadow: 0 8px 40px #25d36699;
    transform: scale(1.04);
  }
  .mensaje-exito {
    color: #ffe082;
    background: #23201a;
    border-radius: 1.3rem;
    padding: 1.5rem 1rem;
    font-size: 1.1rem;
    margin-top: 1.2rem;
    font-weight: 600;
    text-align: center;
    box-shadow: 0 2px 18px #25d36633;
    border: 1.5px solid #25d366;
  }
  .mensaje-error {
    color: #ff5252;
    background: #23201a;
    border-radius: 0.9rem;
    padding: 0.5rem 1rem 0.4rem 1rem;
    font-size: 1.01rem;
    margin-top: 0.4rem;
    font-weight: 600;
    text-align: left;
    border: 1px solid #ff5252;
    box-shadow: 0 2px 8px #ff525233;
    letter-spacing: 0.01em;
  }
  .modal-cerrar {
    position: absolute;
    top:-1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #ffe082;
    font-size:3rem;
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
</style>
