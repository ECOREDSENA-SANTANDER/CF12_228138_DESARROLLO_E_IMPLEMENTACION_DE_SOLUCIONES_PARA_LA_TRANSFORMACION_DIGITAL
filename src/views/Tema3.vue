<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Software de virtualización
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-8.mb-5
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema3/img1.svg" alt="tema2")
      .col-lg-8.col-12.mb-5
        p.mb-3.my-3 Por practicidad y funcionalidad, las organizaciones deciden usar un ecosistema integrado que abarque todas las funcionalidades y extras de la inteligencia de negocio, desde el contexto de gestión de datos hasta el modelamiento y visualización de reportes. En este caso, la orientación estará enfocada a las herramientas propias para la visualización de datos.
        .mb-5
        .cajac.p-4.mb-4
          .col-lg-10 Existen muchas opciones para las soluciones BI, las más populares son Tableau de la marca Salesforce, Power BI de Microsoft y otras como Qlik Sense de la empresa Qlik.

    p.mb-4 #[b Sobre las herramientas de analítica de datos y visualización, tenga en cuenta los siguientes ítems:]
    
    .tarjeta.tarjeta--azul.py-5.p-4.mb-5
      SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
        .row.justify-content-center
          .col-lg-4.col-12.mx-3.my-3
            h4.mb-5 Opciones en el mercado
            p.mb-lg-0.mb-3 En el mercado existe más de un centenar de posibilidades, es un sector de alto crecimiento y sus herramientas se van haciendo más especializadas, integrándose con IA, grandes capacidades de infraestructura y facilidad de manejo.
          .col-lg-7.col-8  
            img.mb-0.mx-5(alt="tema1" src="@/assets/curso/temas/tema3/img10.svg")

        .row.justify-content-center
          .col-lg-5.col-12.mx-3.my-3
            h4.mb-5 Complejidad de las organizaciones
            p.mb-lg-0.mb-3 La inteligencia de negocio no es una tecnología o una serie de herramientas ya establecidas, es decir, todo depende de qué tan grande y compleja sea la organización y qué cantidad de datos fluyen en los sistemas. Por lo que la inteligencia de negocio podría gestionarse desde la aplicación de Excel o Sheets de Google, hasta usar herramientas especializadas con proveedores como Amazon Web Services o Microsoft, entre otros.
          .col-lg-5.col-8
            img.mb-0.mx-5(alt="tema1" src="@/assets/curso/temas/tema3/img11.svg")

        .row.justify-content-center
          .col-lg-5.col-12.mx-3.my-3
            h4.mb-5 Descarga e Instalación
            p.mb-lg-0.mb-3 Microsoft distribuye de manera gratuita la aplicación para conectar datos y generar reportes; esta aplicación se encuentra bajo el ecosistema de productividad Microsoft 365, la cual sí se cobra para algunas características extras, pero para efectos del aprendizaje, la versión descargable es suficiente y muy completa.
          .col-lg-5.col-8
            img.mb-0.mx-5(alt="" src="@/assets/curso/temas/tema3/img12.svg")

        .row.justify-content-center
          .col-lg-5.col-12.mx-3.my-3
            h4.mb-5 Fuente de datos
            p.mb-lg-0.mb-3 Este tipo de aplicaciones pueden ser muy sencillas y fáciles, pero también se podrán desarrollar dashboards muy complejos y robustos, según el nivel de conocimiento de la herramienta.
          .col-lg-5.col-8
            img.mb-0.mx-5(alt="" src="@/assets/curso/temas/tema3/img13.svg")

        .row.justify-content-center
          .col-lg-5.col-12.mx-3.my-3
            h4.mb-5 Diversidad de las fuentes de datos
            p.mb-lg-0.mb-3 Las fuentes de datos de Power BI son diversas; de manera nativa, el programa tiene decenas de opciones, que son las más comunes. Incluso, es tan compatible que, si existiera una fuente a partir de un desarrollo no comercial o poco común, da la posibilidad de programarlas y crearlas.
          .col-lg-5.col-8
            img.mb-0.mx-5(alt="" src="@/assets/curso/temas/tema3/img14.svg")

        .row.justify-content-center
          .col-lg-5.col-12.mx-3.my-3
            h4.mb-5 Desarrollo y representación gráfica de datos
            p.mb-lg-0.mb-3 Con la aplicación instalada y con la fuente de datos clara, la aplicación está lista para el desarrollo de informes. Es fundamental conocer la data y entender exactamente lo que se desea mostrar y qué interacciones con los datos son posibles de realizar.
          .col-lg-5.col-8
            img.mb-0.mx-5(alt="" src="@/assets/curso/temas/tema3/img15.svg")

        .row.justify-content-center
          .col-lg-5.col-12.mx-3.my-3
            h4.mb-5 Comportamiento de los tableros de mando
            p.mb-lg-0.mb-3 Los tableros de mando o dashboards, se comportan bajo un mismo contexto, es decir, cada elemento funciona como filtro o segmentador de datos. De esa manera, los datos tendrán mucha interacción y el usuario podrá filtrar y segmentar como a bien considere.
          .col-lg-5.col-8
            img.mb-0.mx-5(alt="" src="@/assets/curso/temas/tema3/img16.svg")



</template>

<script>
export default {
  name: 'Tema3',
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
