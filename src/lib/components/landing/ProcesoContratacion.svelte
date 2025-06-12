<script>
  let pasoActivo = 0;
  const pasos = [
    {
      titulo: '1. Elige tu show',
      icono: '🎶',
      explicacion: 'Selecciona el tipo de show musical ideal para tu evento. Te asesoramos para que tu experiencia sea inolvidable.',
      color: 'from-yellow-400 to-yellow-700',
      fondo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=cover&w=800&q=60'
    },
    {
      titulo: '2. Completa el formulario',
      icono: '📝',
      explicacion: 'Llena el formulario rápido y seguro con los datos de tu evento. ¡Solo toma un minuto!',
      color: 'from-black to-yellow-900',
      fondo: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=cover&w=800&q=60'
    },
    {
      titulo: '3. Recibe confirmación',
      icono: '📲',
      explicacion: 'Te notificamos y resolvemos dudas por WhatsApp. Atención inmediata y personalizada.',
      color: 'from-yellow-700 to-yellow-400',
      fondo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=800&q=60'
    },
    {
      titulo: '4. Aparta tu fecha',
      icono: '💳',
      explicacion: 'Realiza el abono del 50% y tu evento queda reservado. ¡Listo para vivir una experiencia musical de otro nivel!',
      color: 'from-yellow-900 to-yellow-500',
      fondo: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=cover&w=800&q=60'
    }
  ];

  function siguientePaso() {
    if (pasoActivo < pasos.length - 1) {
      pasoActivo += 1;
    }
  }
  function pasoAnterior() {
    if (pasoActivo > 0) {
      pasoActivo -= 1;
    }
  }
</script>

<section class="relative py-20 bg-gradient-to-br from-yellow-900 via-black to-yellow-800 overflow-hidden" style="background-image:url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=cover&w=1400&q=80'); background-size:cover; background-position:center;">
  <div class="absolute inset-0 bg-black opacity-70 pointer-events-none select-none" style="z-index:1;"></div>
  <div class="relative max-w-5xl mx-auto px-4 z-10">
    <h2 class="text-3xl md:text-4xl font-extrabold text-yellow-300 mb-6 text-center drop-shadow-lg animate-fade-in" style="text-shadow:0 2px 16px #000,0 0 2px #bfa14a;">
      ¿Cómo contratar tu show musical de alto nivel?
    </h2>
    <p class="text-lg text-yellow-100 text-center mb-12 animate-fade-in" style="text-shadow:0 2px 8px #000;">
      Te mostramos paso a paso y de forma interactiva cómo puedes reservar tu evento musical de manera fácil, rápida y profesional.
    </p>
    <div class="flex flex-col md:flex-row justify-center items-center gap-10">
      {#each pasos as paso, i}
        <div class="relative flex flex-col items-center group" style="z-index:2;">
          <div class={`transition-all duration-500 bg-gradient-to-br ${paso.color} rounded-full w-28 h-28 flex items-center justify-center text-6xl shadow-2xl mb-3 border-4 border-yellow-300
            ${pasoActivo === i ? 'scale-110 ring-4 ring-yellow-400' : 'opacity-60 grayscale'} animate-pop-in`}
          >
            {paso.icono}
          </div>
          <div class={`font-bold text-lg text-yellow-50 text-center mb-1 drop-shadow-lg transition-all duration-300 ${pasoActivo === i ? 'text-yellow-200' : 'opacity-60'}`}
            style="text-shadow:0 2px 8px #000,0 0 2px #bfa14a;"
          >{paso.titulo}</div>
          {#if pasoActivo === i}
            <div class="relative mt-3 bg-black/90 border border-yellow-900 rounded-xl shadow-2xl p-6 text-yellow-100 text-base font-semibold max-w-xs z-30 animate-fade-in-up backdrop-blur-xl" style="text-shadow:0 2px 8px #000,0 0 2px #bfa14a;">
              <img src={paso.fondo} alt="Imagen paso" class="rounded-lg w-full h-32 object-cover mb-4 shadow-lg animate-pop-in" style="border:2px solid #bfa14a;" />
              {paso.explicacion}
              <div class="flex justify-between mt-6 gap-2">
                {#if pasoActivo > 0}
                  <button class="bg-yellow-100 text-yellow-900 font-bold px-3 py-1.5 text-sm rounded-full shadow hover:bg-yellow-200 transition min-w-[90px]" on:click={pasoAnterior}>&larr; Anterior</button>
                {/if}
                {#if pasoActivo < pasos.length - 1}
                  <button class="bg-yellow-700 text-yellow-100 font-bold px-4 py-1.5 text-sm rounded-full shadow hover:bg-yellow-800 transition animate-pop-in min-w-[110px]" on:click={siguientePaso}>Siguiente &rarr;</button>
                {:else}
                  <a href="#formulario-reserva" class="bg-yellow-500 text-black font-bold px-4 py-1.5 text-sm rounded-full shadow hover:bg-yellow-600 transition animate-pop-in min-w-[130px]">¡Listo, quiero reservar!</a>
                {/if}
              </div>
            </div>
          {/if}
        </div>
        {#if i < pasos.length - 1}
          <div class="hidden md:block w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-900 rounded-full mx-2 animate-grow-in" style="z-index:1;"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<style>
  .animate-fade-in {
    animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1);
  }
  .animate-pop-in {
    animation: popIn 0.7s cubic-bezier(.4,0,.2,1);
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.5s cubic-bezier(.4,0,.2,1);
  }
  .animate-grow-in {
    animation: growIn 0.8s cubic-bezier(.4,0,.2,1);
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(24px) scale(0.98); }
    to { opacity: 1; transform: none; }
  }
  @keyframes popIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: none; }
  }
  @keyframes growIn {
    from { width: 0; }
    to { width: 3rem; }
  }
</style>
