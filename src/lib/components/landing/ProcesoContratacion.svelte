<script>
  let pasoActivo = 0;
  const pasos = [
    {
      titulo: '1. Elige tu show',
      icono: '🎶',
      explicacion: 'Selecciona el tipo de show musical ideal para tu evento. Te asesoramos para que tu experiencia sea inolvidable.',
      color: 'from-blue-500 to-blue-600',
      fondo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=cover&w=800&q=60'
    },
    {
      titulo: '2. Completa el formulario',
      icono: '📝',
      explicacion: 'Llena el formulario rápido y seguro con los datos de tu evento. ¡Solo toma un minuto!',
      color: 'from-purple-500 to-purple-600',
      fondo: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=cover&w=800&q=60'
    },
    {
      titulo: '3. Recibe confirmación',
      icono: '📲',
      explicacion: 'Te notificamos y resolvemos dudas por WhatsApp. Atención inmediata y personalizada.',
      color: 'from-green-500 to-green-600',
      fondo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=800&q=60'
    },
    {
      titulo: '4. Aparta tu fecha',
      icono: '💳',
      explicacion: 'Realiza el abono del 50% y tu evento queda reservado. ¡Listo para vivir una experiencia musical de otro nivel!',
      color: 'from-yellow-500 to-yellow-600',
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

<section class="py-20 bg-gray-50">
  <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center animate-fade-in">
      Contratar tu Show es Fácil y Rápido
    </h2>
    <p class="text-lg text-gray-600 text-center mb-16 animate-fade-in">
      En 4 simples pasos puedes reservar una experiencia musical de alto nivel para tu evento.
    </p>
    <div class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0">
      {#each pasos as paso, i}
        <div class="relative flex flex-col items-center group">
          <div class={`transition-all duration-500 bg-gradient-to-br ${paso.color} rounded-full w-24 h-24 flex items-center justify-center text-5xl shadow-lg mb-3 border-4 border-white
            ${pasoActivo === i ? 'scale-110 ring-4 ring-yellow-400' : 'opacity-60 grayscale'} animate-pop-in`}
          >
            {paso.icono}
          </div>
          <h3 class={`font-bold text-lg text-gray-700 text-center mb-1 transition-all duration-300 ${pasoActivo === i ? 'text-gray-900' : 'opacity-70'}`}>
            {paso.titulo}
          </h3>
          {#if pasoActivo === i}
            <div class="relative mt-4 bg-white border border-gray-200 rounded-2xl shadow-xl p-6 text-gray-600 text-sm max-w-xs z-10 animate-fade-in-up">
              <img src={paso.fondo} alt="Imagen del paso {paso.titulo}" class="rounded-lg w-full h-28 object-cover mb-4 shadow-md" />
              <p class="font-medium">{paso.explicacion}</p>
              <div class="flex justify-between mt-5 gap-2">
                {#if pasoActivo > 0}
                  <button class="bg-gray-200 text-gray-800 font-bold px-4 py-2 text-xs rounded-full shadow-sm hover:bg-gray-300 transition-all min-w-[80px]" on:click={pasoAnterior}>&larr; Anterior</button>
                {/if}
                {#if pasoActivo < pasos.length - 1}
                  <button class="bg-gray-800 text-white font-bold px-4 py-2 text-xs rounded-full shadow hover:bg-gray-900 transition-all animate-pop-in min-w-[100px]" on:click={siguientePaso}>Siguiente &rarr;</button>
                {:else}
                  <a href="#formulario-reserva" class="bg-yellow-500 text-black font-bold px-4 py-2 text-xs rounded-full shadow hover:bg-yellow-400 transition-all animate-pop-in min-w-[120px] text-center">¡Quiero reservar!</a>
                {/if}
              </div>
            </div>
          {/if}
        </div>
        {#if i < pasos.length - 1}
          <div class="hidden md:block w-16 h-1 bg-gray-200 rounded-full mx-4 animate-grow-in"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<style>
  .animate-fade-in {
    animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1) both;
  }
  .animate-pop-in {
    animation: popIn 0.7s cubic-bezier(.4,0,.2,1) both;
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.5s cubic-bezier(.4,0,.2,1) both;
  }
  .animate-grow-in {
    animation: growIn 0.8s cubic-bezier(.4,0,.2,1) both;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: none; }
  }
  @keyframes popIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: none; }
  }
  @keyframes growIn {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
</style>
