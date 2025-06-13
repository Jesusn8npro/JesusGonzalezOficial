<script>
  import Hero from '$lib/components/landing/Hero.svelte';
  import Servicios from '$lib/components/landing/Servicios.svelte';
  import Beneficios from '$lib/components/landing/Beneficios.svelte';
  import ProcesoContratacion from '$lib/components/landing/ProcesoContratacion.svelte';
  import GaleriaVideos from '$lib/components/landing/GaleriaVideos.svelte';
  import BannerUrgencia from '$lib/components/landing/BannerUrgencia.svelte';
  import ModalReserva from '$lib/components/landing/ModalReserva.svelte';
  import BotonWhatsappFlotante from '$lib/components/landing/BotonWhatsappFlotante.svelte';

  let mostrarModal = false;
  function abrirModal() {
    mostrarModal = true;
  }
  function cerrarModal() {
    mostrarModal = false;
  }
</script>

<BannerUrgencia onReservar={abrirModal} />
<Hero />
<Servicios />
<Beneficios />
<ProcesoContratacion />
<ModalReserva mostrar={mostrarModal} on:cerrar={cerrarModal} />
<GaleriaVideos />
<BotonWhatsappFlotante />