<script>
  let pasoActivo = 0;
  const pasos = [
    {
      titulo: '1. Elige tu experiencia',
      icono: '🛶',
      explicacion: 'Explora nuestros paquetes y selecciona el que más te emocione. ¡Aventura garantizada, sin estrés!',
      color: 'from-green-400 to-green-600'
    },
    {
      titulo: '2. Reserva en 1 minuto',
      icono: '📲',
      explicacion: 'Completa el formulario o escríbenos por WhatsApp. Solo tus datos y listo. ¡Sin complicaciones!',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      titulo: '3. ¡Vive la selva!',
      icono: '🦜',
      explicacion: '¡Solo trae ganas de aventura! Nosotros nos encargamos de todo para que vivas el Amazonas sin preocupaciones.',
      color: 'from-pink-400 to-pink-600'
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

<section class="relative py-20 bg-gradient-to-br from-green-200 via-green-100 to-green-300 overflow-hidden" style="background-image:url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80'); background-size:cover; background-position:center;">
  <div class="absolute inset-0 bg-green-900 opacity-20 pointer-events-none select-none" style="z-index:1;"></div>
  <div class="relative max-w-4xl mx-auto px-4 z-10">
    <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center drop-shadow-lg animate-fade-in" style="text-shadow:0 2px 8px #114c1a,0 0 2px #000;">
      Reserva en <span class="text-green-200">3 pasos guiados</span>
    </h2>
    <div class="flex flex-col md:flex-row justify-center items-center gap-8">
      {#each pasos as paso, i}
        <div
          class="relative flex flex-col items-center group"
          style="z-index:2;"
        >
          <div class={`transition-all duration-500 bg-gradient-to-br ${paso.color} rounded-full w-28 h-28 flex items-center justify-center text-6xl shadow-2xl mb-3 border-4 border-white
            ${pasoActivo === i ? 'scale-110 ring-4 ring-green-400' : 'opacity-60 grayscale'} animate-pop-in`}
          >
            {paso.icono}
          </div>
          <div class={`font-bold text-lg text-white text-center mb-1 drop-shadow-lg transition-all duration-300 ${pasoActivo === i ? 'text-green-100' : 'opacity-60'}`}
            style="text-shadow:0 2px 8px #114c1a,0 0 2px #000;"
          >{paso.titulo}</div>
          {#if pasoActivo === i}
            <div class="relative mt-3 bg-green-900/95 border border-green-800 rounded-xl shadow-2xl p-6 text-white text-base font-semibold max-w-xs z-30 animate-fade-in-up" style="text-shadow:0 2px 8px #000,0 0 2px #114c1a;">
              {paso.explicacion}
              <div class="flex justify-between mt-6">
                {#if pasoActivo > 0}
                  <button class="bg-green-100 text-green-700 font-bold px-4 py-2 rounded-full shadow hover:bg-green-200 transition" on:click={pasoAnterior}>&larr; Anterior</button>
                {/if}
                {#if pasoActivo < pasos.length - 1}
                  <button class="bg-green-600 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-green-700 transition animate-pop-in" on:click={siguientePaso}>Siguiente &rarr;</button>
                {:else}
                  <a href="#formulario-reserva" class="bg-pink-600 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-pink-700 transition animate-pop-in">¡Listo, quiero reservar!</a>
                {/if}
              </div>
            </div>
          {/if}
        </div>
        {#if i < pasos.length - 1}
          <div class="hidden md:block w-12 h-1 bg-gradient-to-r from-green-300 to-green-600 rounded-full mx-2 animate-grow-in" style="z-index:1;"></div>
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
