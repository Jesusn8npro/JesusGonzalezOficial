<script lang="ts">
  import { onMount } from 'svelte';
  
  export let src: string;
  export let alt: string;
  export let width: number = 400;
  export let height: number = 400;
  export let clase: string = '';
  export let prioridad: 'high' | 'low' = 'low';
  export let placeholder: string = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjM0Y0RjU2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwQzI3Ni41NjQgMTAwIDM0MCAxNjMuNDM2IDM0MCAyNDBDMzQwIDMxNi41NjQgMjc2LjU2NCAzODAgMjAwIDM4MEMxMjMuNDM2IDM4MCA2MCAzMTYuNTY0IDYwIDI0MEM2MCAxNjMuNDM2IDEyMy40MzYgMTAwIDIwMCAxMDBaIiBmaWxsPSIjNjM2MzYzIi8+CjxwYXRoIGQ9Ik0xODAgMjAwQzE4MCAxODkuNTUyIDE4OS41NTIgMTgwIDIwMCAxODBDMjEwLjQ0OCAxODAgMjIwIDE4OS41NTIgMjIwIDIwMEMyMjAgMjEwLjQ0OCAyMTAuNDQ4IDIyMCAyMDAgMjIwQzE4OS41NTIgMjIwIDE4MCAyMTAuNDQ4IDE4MCAyMDBaIiBmaWxsPSIjOUI5QkEwIi8+Cjwvc3ZnPgo=';
  
  let imagenCargada = false;
  let imagenError = false;
  let elementoImagen: HTMLImageElement;
  
  // Función para cargar imagen con lazy loading
  function cargarImagen() {
    if (!elementoImagen) return;
    
    const observador = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !imagenCargada) {
          const img = entry.target as HTMLImageElement;
          img.src = src;
          observador.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px',
      threshold: 0.1
    });
    
    observador.observe(elementoImagen);
  }
  
  // Función para manejar errores de carga
  function manejarError() {
    imagenError = true;
    console.warn(`Error al cargar imagen: ${src}`);
  }
  
  // Función para manejar carga exitosa
  function manejarCarga() {
    imagenCargada = true;
  }
  
  onMount(() => {
    if (prioridad === 'high') {
      // Cargar inmediatamente si es prioridad alta
      imagenCargada = true;
    } else {
      // Lazy loading para prioridad baja
      cargarImagen();
    }
  });
</script>

<div class="contenedor-imagen {clase}" style="width: {width}px; height: {height}px;">
  {#if imagenError}
    <!-- Fallback en caso de error -->
    <div class="imagen-fallback" style="width: 100%; height: 100%; background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); display: flex; align-items: center; justify-content: center; border-radius: 0.5rem;">
      <span class="texto-fallback">🎵</span>
    </div>
  {:else if !imagenCargada}
    <!-- Placeholder mientras carga -->
    <img 
      bind:this={elementoImagen}
      src={placeholder}
      alt="Cargando..."
      class="imagen-placeholder"
      style="width: 100%; height: 100%; object-fit: cover; border-radius: 0.5rem; filter: blur(2px);"
    />
  {:else}
    <!-- Imagen cargada -->
    <img 
      bind:this={elementoImagen}
      {src}
      {alt}
      {width}
      {height}
      class="imagen-cargada"
      style="width: 100%; height: 100%; object-fit: cover; border-radius: 0.5rem; transition: opacity 0.3s ease;"
      on:load={manejarCarga}
      on:error={manejarError}
      loading={prioridad === 'high' ? 'eager' : 'lazy'}
      decoding="async"
    />
  {/if}
</div>

<style>
  .contenedor-imagen {
    position: relative;
    overflow: hidden;
    background: #f3f4f6;
    border-radius: 0.5rem;
  }
  
  .imagen-placeholder {
    transition: filter 0.3s ease;
  }
  
  .imagen-cargada {
    opacity: 0;
    animation: aparecer-imagen 0.5s ease forwards;
  }
  
  .imagen-fallback {
    color: #6b7280;
    font-size: 2rem;
  }
  
  .texto-fallback {
    font-size: 2rem;
    opacity: 0.7;
  }
  
  @keyframes aparecer-imagen {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  /* Optimizaciones para dispositivos móviles */
  @media (max-width: 768px) {
    .contenedor-imagen {
      border-radius: 0.375rem;
    }
  }
</style> 