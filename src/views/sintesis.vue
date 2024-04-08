<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      
        .col-12.my-3
          
            p.mb-3 Los servicios en la  nube son infraestructuras, plataformas o sistemas de software que alojan los proveedores externos y que se ponen a disposición de los usuarios a través de Internet. Facilitan el flujo de datos de los usuarios a través de Internet, referenciando lo anterior la migración de los diferentes servicios requiere de diferentes formas de almacenamiento, metodologías o estrategias de migración y monitorización. 
            p.mb-0 A continuación, se presenta el diagrama que representa el resumen de las temáticas que están desarrolladas en el componente formativo: 
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
    
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
