<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Descripción general del servicio de computación en nube, gestión de uso y escenarios de aplicación
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12.col-12.mb-5
        .bloque-texto-g.col.color-acento-contenido.p-lg-5
          .bloque-texto-g__img.col(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.py-lg-6.p-2
            p Las tendencias y estar pendiente de las nuevas herramientas de los proveedores de computación en la nube ayudan a estar a la vanguardia en la implementación de herramientas tecnológicas y permanece competitivo alineándose a las necesidades de los nuevos clientes, cada día con más opciones por ofertas de la competencia haciéndolos al tiempo más y más exigentes pretendiendo soluciones ágiles y eficientes.
            
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-10
        .cajon.color-secundario.p-4.mb-5.pri
          p.mb-0 Los desarrollos de #[em software] se limitan a cumplir los requisitos de un área o un proceso determinado, como una isla en la empresa, donde no se integra información, ni formatos. Hoy en día, aún las empresas usan sistemas para cada área, por ejemplo, contabilidad, recursos humanos, área financiera, ventas, ofertas, #[em marketing], producción, etc.
      
      strong.mb-4 En los modelos y metodologías de analítica, se debe tener presente:

    .tarjeta.tarjeta--azul.py-5.p-4.mb-5
      SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
        .row.justify-content-center
          .col-lg-4.col-12.mx-3.my-3
            h4.mb-5 Manejo integral
            p.mb-lg-0.mb-3 Cada área, puede manejar su sistema de información por aparte, sin tener en cuenta integraciones o calidad de la información, generando muchísimos datos, pero sin explotar de manera óptima su riqueza escondida, la cual pudiera tener si se gestiona de manera integral y usando técnicas y tecnologías de la cuarta revolución industrial.
          .col-lg-7.col-8  
            img.mb-0.mx-5(alt="tema1" src="@/assets/curso/temas/tema1/img2.svg")

        .row.justify-content-center
          .col-lg-5.col-12.mx-3.my-3
            h4.mb-5 Implementación con propósito
            p.mb-lg-0.mb-3 Al momento de pensar en una solución de analítica de negocio, es fundamental tener todas las preguntas que tanto el nivel de decisión, como el nivel operativo requieren.
          .col-lg-5.col-8
            img.mb-0.mx-5(alt="tema1" src="@/assets/curso/temas/tema1/img3.svg")

        .row.justify-content-center
          .col-lg-5.col-12.mx-3.my-3
            h4.mb-5 Conciencia institucional
            p.mb-lg-0.mb-3 Cuando las organizaciones no tengan claridad sobre el uso del BI en el negocio, es necesario concientizar a los directivos que muchos problemas de la organización se deben a la falta de datos al instante, actualizados y que reflejen una realidad.
          .col-lg-5.col-8
            img.mb-0.mx-5(alt="" src="@/assets/curso/temas/tema1/img4.svg")

        .row.justify-content-center
          .col-lg-5.col-12.mx-3.my-3
            h4.mb-5 Oportunidad y practicidad
            p.mb-lg-0.mb-3 Si se toma como ejemplo, una feria de negocios importante, donde se presentan grandes oportunidades de conectar con clientes grandes, se espera que lleguen representantes de otras firmas; mientras, de manera tradicional, se trabaja confiando en la memoria y vagamente el ejecutivo de ventas recuerda que alguna vez su empresa ya había hecho negocios con este cliente que se acerca.
          .col-lg-5.col-8
            img.mb-0.mx-5(alt="" src="@/assets/curso/temas/tema1/img6.svg")

        .row.justify-content-center
          .col-lg-5.col-12.mx-3.my-3
            h4.mb-5 Actualización y equipamiento para la labor
            p.mb-lg-0.mb-3 Cuando las empresas tienen implementado un sistema de inteligencia de negocios, es de gran valor comercial, que el representante de ventas de la organización tenga en su dispositivo electrónico (celular, tableta, etc.), los datos de todos los clientes y sus historiales para que, con una búsqueda muy rápida, tenga de inmediato en pantalla, información que podría ser clave para conectar con nuevos clientes.
          .col-lg-5.col-8
            img.mb-0.mx-5(alt="" src="@/assets/curso/temas/tema1/img5.svg")

    p.mb-4 Una de las condiciones iniciales más importantes son las preguntas, es decir, qué se necesita saber del negocio, qué decisiones se planean tomar y qué insumos se requieren para la toma de estas decisiones.
    strong En sí, se deben seleccionar varios elementos para el desarrollo de soluciones analíticas, tales como:    

    .row.text-left-cus.mb-4
      .col-lg-4.my-3.text-left-cus
        .bg191.bg-card.bg-img-1.d-flex.px-3.he-6-cus.flex-column
          img.w-auto-cus.bg12.mx-3(src='@/assets/curso/temas/tema1/img01.jpg', alt='')
          .ml-1-custom 
            p.ml-1-custom 
            p.ml-1-custom #[b Metodología de desarrollo]<br><br>Se recomienda elegir una de las metodologías ágiles y registrar todos los requerimientos y planeación, según el rol que cumpla en el proyecto.
      .col-lg-4.my-3.text-left-cus
        .bg191.bg-card.bg-img-1.d-flex.px-3.he-6-cus.flex-column
          img.w-auto-cus.bg12.mx-3(src='@/assets/curso/temas/tema1/img02.jpg', alt='')
          .ml-1-custom 
            p.ml-1-custom 
            p.ml-1-custom.my-2 #[b Elegir herramienta de control y trazabilidad]<br><br>Para llevar control y trazabilidad de todo el desarrollo del proyecto en relación de equipos de trabajo, funciones, actividades hechas, en proceso y pendientes. Trello y Jira son buena opción, existiendo otras más.
      .col-lg-4.my-3.text-left-cus
        .bg191.bg-card.bg-img-1.d-flex.px-3.he-6-cus.flex-column
          img.w-auto-cus.bg12.mx-3(src='@/assets/curso/temas/tema1/img03.jpg', alt='')
          .ml-1-custom 
            p.ml-1-custom 
            p.ml-1-custom #[b Herramientas de desarrollo]<br><br>Si bien se ha hablado mucho de infraestructura y herramientas, en este caso habrá que concentrarse en la capa de visualización de datos, según la herramienta elegida, dando ciertas pautas para seguir el modelo de diseño.


    
</template>
<script>
export default {
  name: 'Tema1',
  components: {},
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
