<script>
  let pasoActivo = 0;
  const pasos = [
    {
      titulo: '1. Elige tu show',
      icono: '🎶',
      explicacion: 'Selecciona el tipo de show musical ideal para tu evento. Te asesoramos para que tu experiencia sea inolvidable.',
      color: 'from-blue-500 to-blue-600',
      fondo: 'https://jesusgonzalez.com.co/Imagenes/Jesus Gonzalez en Concierto.jpg'
    },
    {
      titulo: '2. Completa el formulario',
      icono: '📝',
      explicacion: 'Llena el formulario rápido y seguro con los datos de tu evento. ¡Solo toma un minuto!',
      color: 'from-purple-500 to-purple-600',
      fondo: 'https://jesusgonzalez.com.co/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg'
    },
    {
      titulo: '3. Recibe confirmación',
      icono: '📲',
      explicacion: 'Te notificamos y resolvemos dudas por WhatsApp. Atención inmediata y personalizada.',
      color: 'from-green-500 to-green-600',
      fondo: 'https://jesusgonzalez.com.co/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg'
    },
    {
      titulo: '4. Aparta tu fecha',
      icono: '💳',
      explicacion: 'Realiza el abono del 50% y tu evento queda reservado. ¡Listo para vivir una experiencia musical de otro nivel!',
      color: 'from-yellow-500 to-yellow-600',
      fondo: 'https://jesusgonzalez.com.co/Imagenes/El pollo irra y Jesus Gonzalez.jpg'
    }
  ];

  const numeroWhatsapp = '573144096187';
  const mensajeWhatsapp = encodeURIComponent('¡Hola! Me interesa reservar una fecha para un evento. ¿Me pueden ayudar?');
  const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensajeWhatsapp}`;

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
      Tu Evento de Lujo a Solo 4 Pasos
    </h2>
    <p class="text-lg text-gray-600 text-center mb-16 animate-fade-in">
      Contratar nuestro show es tan fácil como emocionante. Sigue nuestro proceso interactivo y asegura una experiencia musical inolvidable.
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
              <img src={paso.fondo} alt="Imagen del paso {paso.titulo}" class="rounded-lg w-full h-32 object-cover object-center mb-4 shadow-md" />
              <p class="font-medium">{paso.explicacion}</p>
              <div class="flex justify-between mt-5 gap-2">
                {#if pasoActivo > 0}
                  <button class="bg-gray-200 text-gray-800 font-bold px-4 py-2 text-xs rounded-full shadow-sm hover:bg-gray-300 transition-all min-w-[80px]" on:click={pasoAnterior}>&larr; Anterior</button>
                {/if}
                {#if pasoActivo < pasos.length - 1}
                  <button class="bg-gray-800 text-white font-bold px-4 py-2 text-xs rounded-full shadow hover:bg-gray-900 transition-all animate-pop-in min-w-[100px]" on:click={siguientePaso}>Siguiente &rarr;</button>
                {:else}
                  <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer" class="bg-yellow-500 text-black font-bold px-4 py-2 text-xs rounded-full shadow hover:bg-yellow-400 transition-all animate-pop-in min-w-[120px] text-center">¡Reservar por WhatsApp!</a>
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
  .animate-fade-in { animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1) both; }
  .animate-pop-in { animation: popIn 0.7s cubic-bezier(.4,0,.2,1) both; }
  .animate-fade-in-up { animation: fadeInUp 0.5s cubic-bezier(.4,0,.2,1) both; }
  .animate-grow-in { animation: growIn 0.8s cubic-bezier(.4,0,.2,1) both; }

  /* Animación de pulso para el icono activo */
  @keyframes pulse {
    0%, 100% { transform: scale(1.1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
    50% { transform: scale(1.15); box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
  }

  /* Aplicamos la animación al icono del paso activo */
  .group .scale-110 {
    animation: pulse 2s infinite;
  }

  .group .opacity-60 {
    transition: all 0.3s ease;
  }
  .group:hover .opacity-60 {
    opacity: 0.8;
    filter: grayscale(0.5);
    transform: scale(1.05);
  }

  .flex .transition-all {
    transition: all 0.3s ease;
  }

  .flex .transition-all:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
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

  .text-3xl {
    font-size: 2.25rem;
  }
  
  .md\:text-4xl {
    font-size: 3rem;
  }
  
  .font-extrabold {
    font-weight: 800;
  }
  
  .text-gray-800 {
    color: #1f2937;
  }
  .mb-4 {
    margin-bottom: 1rem;
    background: linear-gradient(145deg, #1e293b, #4b5563, #1e293b);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shine 5s linear infinite;
    text-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  @keyframes shine {
    to {
      background-position: -200% center;
    }
  }
</style>
