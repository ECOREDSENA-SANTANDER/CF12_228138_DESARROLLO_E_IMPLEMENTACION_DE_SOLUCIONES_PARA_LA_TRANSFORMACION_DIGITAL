<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-8
          img.mb-3(src="@/assets/curso/introduccion/img1.svg" alt="")
        .col-lg-7.col-12
          .cajon.color-secundario.p-4.mb-5.pri
            p.mb-0 Se da la bienvenida al estudio del componente formativo
              strong.rojo “Analítica de datos y visualización”
              | . Para comenzar satisfactoriamente esta experiencia de aprendizaje, se le invita a explorar el video que se muestra a continuación. 
              strong.rojo ¡Adelante!
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12(data-aos="fade-left")
          figure
            .video
              iframe(src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Description
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
