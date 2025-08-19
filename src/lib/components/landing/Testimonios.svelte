<script lang="ts">
  import { onMount } from 'svelte';
  import ImagenOptimizada from '../ImagenOptimizada.svelte';
  
  let testimonioActivo = 0;
  let intervalo: any;
  
  const testimonios = [
    {
      nombre: 'María Elena Rodríguez',
      evento: 'Boda de Lujo - Bogotá',
      comentario: 'Jesús González hizo de nuestra boda algo mágico. Su acordeón nos transportó a la Costa Caribe. Los invitados no paraban de bailar. ¡100% recomendado!',
      calificacion: 5,
      imagen: '/Imagenes/Jesus Gonzalez en Concierto.jpg',
      fecha: 'Diciembre 2024'
    },
    {
      nombre: 'Carlos Andrés Mendoza',
      evento: 'Evento Corporativo - Medellín',
      comentario: 'Contratamos a Jesús para nuestro evento de empresa y fue espectacular. Profesionalismo total, llegó puntual y el show superó nuestras expectativas.',
      calificacion: 5,
      imagen: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
      fecha: 'Noviembre 2024'
    },
    {
      nombre: 'Ana Sofía Jiménez',
      evento: 'Cumpleaños 50 - Cali',
      comentario: 'Mi papá es fanático del vallenato y Jesús le hizo el día más especial. Tocó todas sus canciones favoritas. ¡Gracias por hacer inolvidable su cumpleaños!',
      calificacion: 5,
      imagen: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
      fecha: 'Octubre 2024'
    },
    {
      nombre: 'Roberto Silva',
      evento: 'Fiesta Empresarial - Barranquilla',
      comentario: 'Excelente servicio y calidad musical. Jesús González es un verdadero maestro del acordeón. Nuestros clientes quedaron encantados con la presentación.',
      calificacion: 5,
      imagen: '/Imagenes/Jesus Fondo Blanco.png',
      fecha: 'Septiembre 2024'
    }
  ];
  
  function siguienteTestimonio() {
    testimonioActivo = (testimonioActivo + 1) % testimonios.length;
  }
  
  function testimonioAnterior() {
    testimonioActivo = (testimonioActivo - 1 + testimonios.length) % testimonios.length;
  }
  
  function irATestimonio(indice: number) {
    testimonioActivo = indice;
  }
  
  onMount(() => {
    // Auto-rotación cada 6 segundos
    intervalo = setInterval(siguienteTestimonio, 6000);
    return () => clearInterval(intervalo);
  });
</script>

<section class="seccion-testimonios" id="testimonios">
  <div class="contenedor-testimonios">
    <div class="header-testimonios">
      <h2 class="titulo-testimonios">Lo que dicen nuestros clientes</h2>
      <p class="subtitulo-testimonios">Más de 200 eventos exitosos nos respaldan</p>
    </div>
    
    <div class="testimonio-principal">
      <div class="testimonio-contenido">
        <div class="estrellas-calificacion">
          {#each Array(testimonios[testimonioActivo].calificacion) as _}
            <span class="estrella">⭐</span>
          {/each}
        </div>
        
        <blockquote class="comentario-testimonio">
          "{testimonios[testimonioActivo].comentario}"
        </blockquote>
        
        <div class="info-testimonio">
          <div class="cliente-info">
            <strong class="nombre-cliente">{testimonios[testimonioActivo].nombre}</strong>
            <span class="evento-cliente">{testimonios[testimonioActivo].evento}</span>
            <span class="fecha-evento">{testimonios[testimonioActivo].fecha}</span>
          </div>
          
          <div class="imagen-cliente">
            <ImagenOptimizada 
              src={testimonios[testimonioActivo].imagen}
              alt="Cliente satisfecho - {testimonios[testimonioActivo].nombre}"
              width={80}
              height={80}
              clase="imagen-cliente-redonda"
              prioridad="low"
            />
          </div>
        </div>
      </div>
    </div>
    
    <div class="controles-testimonios">
      <button 
        class="btn-control" 
        on:click={testimonioAnterior}
        aria-label="Testimonio anterior"
      >
        ←
      </button>
      
      <div class="indicadores-testimonios">
        {#each testimonios as _, indice}
          <button 
            class="indicador {indice === testimonioActivo ? 'activo' : ''}"
            on:click={() => irATestimonio(indice)}
            aria-label={`Ir al testimonio ${indice + 1}`}
          ></button>
        {/each}
      </div>
      
      <button 
        class="btn-control" 
        on:click={siguienteTestimonio}
        aria-label="Testimonio siguiente"
      >
        →
      </button>
    </div>
    
    <div class="estadisticas-testimonios">
      <div class="estadistica">
        <span class="numero-estadistica">200+</span>
        <span class="texto-estadistica">Eventos realizados</span>
      </div>
      <div class="estadistica">
        <span class="numero-estadistica">5.0</span>
        <span class="texto-estadistica">Calificación promedio</span>
      </div>
      <div class="estadistica">
        <span class="numero-estadistica">98%</span>
        <span class="texto-estadistica">Clientes satisfechos</span>
      </div>
    </div>
  </div>
</section>

<style>
  .seccion-testimonios {
    padding: 5rem 1rem;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    position: relative;
    overflow: hidden;
  }
  
  .seccion-testimonios::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23bfa14a" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
    pointer-events: none;
  }
  
  .contenedor-testimonios {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  
  .header-testimonios {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .titulo-testimonios {
    font-size: 2.5rem;
    font-weight: 900;
    color: #ffe082;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  }
  
  .subtitulo-testimonios {
    font-size: 1.1rem;
    color: #e5e5e5;
    opacity: 0.8;
  }
  
  .testimonio-principal {
    background: linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%);
    border-radius: 1.5rem;
    padding: 3rem 2rem;
    margin-bottom: 2rem;
    border: 1px solid rgba(191,161,74,0.3);
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    position: relative;
    overflow: hidden;
  }
  
  .testimonio-principal::before {
    content: '"';
    position: absolute;
    top: -1rem;
    left: 2rem;
    font-size: 8rem;
    color: rgba(191,161,74,0.2);
    font-family: serif;
    line-height: 1;
  }
  
  .estrellas-calificacion {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 1.5rem;
    justify-content: center;
  }
  
  .estrella {
    font-size: 1.5rem;
    filter: drop-shadow(0 2px 4px rgba(191,161,74,0.3));
  }
  
  .comentario-testimonio {
    font-size: 1.3rem;
    line-height: 1.6;
    color: #ffffff;
    text-align: center;
    margin-bottom: 2rem;
    font-style: italic;
    position: relative;
    z-index: 2;
  }
  
  .info-testimonio {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  
  .cliente-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .nombre-cliente {
    color: #ffe082;
    font-size: 1.2rem;
    font-weight: 700;
  }
  
  .evento-cliente {
    color: #e5e5e5;
    font-size: 1rem;
    opacity: 0.9;
  }
  
  .fecha-evento {
    color: #bfa14a;
    font-size: 0.9rem;
    opacity: 0.7;
  }
  
  .imagen-cliente-redonda {
    border-radius: 50% !important;
    border: 3px solid #bfa14a;
    box-shadow: 0 4px 16px rgba(191,161,74,0.3);
  }
  
  .controles-testimonios {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .btn-control {
    background: #bfa14a;
    color: #1a1a1a;
    border: none;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .btn-control:hover {
    background: #ffe082;
    transform: scale(1.1);
    box-shadow: 0 4px 16px rgba(191,161,74,0.4);
  }
  
  .indicadores-testimonios {
    display: flex;
    gap: 0.5rem;
  }
  
  .indicador {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background: rgba(191,161,74,0.3);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .indicador.activo {
    background: #bfa14a;
    transform: scale(1.2);
  }
  
  .indicador:hover {
    background: #ffe082;
  }
  
  .estadisticas-testimonios {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    text-align: center;
  }
  
  .estadistica {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .numero-estadistica {
    font-size: 2.5rem;
    font-weight: 900;
    color: #ffe082;
    text-shadow: 0 2px 8px rgba(191,161,74,0.3);
  }
  
  .texto-estadistica {
    font-size: 1rem;
    color: #e5e5e5;
    opacity: 0.8;
    font-weight: 500;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .seccion-testimonios {
      padding: 3rem 1rem;
    }
    
    .titulo-testimonios {
      font-size: 2rem;
    }
    
    .testimonio-principal {
      padding: 2rem 1.5rem;
    }
    
    .comentario-testimonio {
      font-size: 1.1rem;
    }
    
    .info-testimonio {
      flex-direction: column;
      text-align: center;
    }
    
    .estadisticas-testimonios {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style> 