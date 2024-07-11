<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .tarjeta.color-acento-contenido-2.mb-4.p-4
      .row.justify-content-center.align-items-center
        .col-auto
          img.imagenb.img-a.img-t(src='@/assets/curso/introduccion/img1.png', alt='')
        .col-lg-8.col-md-10.col-12
          .bg-white-r.mb-4.p-3.fw-bold 
            p.mb-0 La claridad conceptual en relación a la computación en la nube se debe abordar de una manera holística para el entendimiento de los servicios bajo este concepto y se adquieren conocimientos acerca de arquitecturas, modelos, opciones, servicios de almacenamiento, y #[em software] de virtualización, para la migración a sistemas tecnológicos y optimizar procesos y recursos con mejor proyección.
          p En el siguiente vídeo se  describe #[b la importancia de la implementación de soluciones para la transformación digital en las empresas, así:]
    
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/lUUu546Gm90?si=yYbTMdkvwfgpnD1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Migración de servicios en la nube
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
