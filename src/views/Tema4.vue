<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Contenedores
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-8.mb-5
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema4/img1.svg" alt="tema2")
      .col-lg-8.col-12.mb-5
        .cajaa.p-4.mb-4
          p.mb-4 La gestión del flujo de datos de extremo a extremo (end to end), es un término usado por algunas marcas y consiste en establecer la tubería por donde fluyen los datos; de esta manera, existe una toma de datos (extracción de datos origen), sigue su flujo haciendo filtraciones, depuraciones, limpieza y mejora en la calidad de los datos, para que lleguen a un gran estanque (bodega de datos), y luego puedan ser consumidos según los requerimientos del negocio.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Herramientas de desarrollo
        img.clase5.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema2/clase2.svg' data-aos="fade-left")
    
    p.mb-4 Las soluciones #[em Open Source] es una sugerencia, al menos, para el proceso de aprendizaje, porque muchas organizaciones se alinean bajo ecosistemas de pago tales como Microsoft con #[b SQL Server Integration Services] (SSIS), #[b Qlik analityc] u otras herramientas comerciales.
    p.mb-4 Las herramientas Open Source cumplen con el principio de ser abiertas, es decir, que pertenecen o se matriculan a una comunidad que tiene acceso libre para su uso y participación del código fuente. Si bien son escasos los soportes técnicos, existen foros donde la comunidad misma ofrece su ayuda en temas o situaciones específicas.
    
    .row.d-flex.align-items-center.justify-content-center
      .col-sm-12.col-lg-10
        .cajaa.p-4.mb-4
          .col-lg-7.my-0
          .row.d-flex.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema4/nueva1.svg', alt='tema2')
            .col-lg-10 
              p.mb-0 #[b ¡Importante!]
              p.mb-4 Muchas empresas usan este tipo de tendencias en las herramientas informáticas no por el ahorro del costo, sino también por su funcionalidad e impacto en el funcionamiento y utilidad.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Pentaho
        img.clase6.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema2/clase2.svg' data-aos="fade-left")
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8.col-12.mb-5
        p.mb-3.my-3 Nacida en el año 2006, es una plataforma BI y se trata de una multiplataforma. Al ser un proyecto Open Source, hay una gran comunidad que brinda apoyo y ayuda con los errores que se puedan detectar en los proyectos desarrollados.
        p.mb-3.my-3 Es una plataforma integral con una suite de herramientas para completar las tareas y flujo de datos por toda la tubería de datos, transformación y carga.
        p.mb-3.my-3 #[b Los principales componentes de Pentaho son:]
      .col-lg-4.col-8.mb-5
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema4/img9.svg" alt="tema2")
    
    .row.justify-content-center.align-items-top.mb-5(data-aos="fade-left")
      .col-lg-3.col-12.mb-5
        .caja1.p-4
          h4.mb-3 Pentaho server 
          p.mb-3 Núcleo de la plataforma.
      .col-lg-3.col-12.mb-5
        .caja2.p-4
          h4.mb-3 Pentaho report designer
          p.mb-3 Para desarrollar reportes a través de consultas de diversos orígenes de datos.
      .col-lg-3.col-12.mb-5
        .caja1.p-4
          h4.mb-3 Pentaho schema workbench
          p.mb-3 Para administrar y crear cubos OLAP. Usa motor de datos llamado Mondrian, también de código abierto.
      .col-lg-3.col-12.mb-5
        .caja2.p-4
          h4.mb-3 Pentaho data integration kettle
          p.mb-3 Es una de las herramientas más usadas de Pentaho, permite crear procesos ETL diseñando y alimentando los Data warehouse.
    
    p.mb-4 Pentaho puede usarse como suite completa, es decir, usando todo el ecosistema de extremo a extremo o como componente individual de toda la solución BI, integrándose con otras herramientas.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Spoon (Pentaho Data Integration - Kettle)
        img.clase7.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema2/clase2.svg' data-aos="fade-left")
    
    p.mb-4 Para poder realizar los procesos ETL, es necesario un entorno gráfico, eso es Spoon, una interfaz para realizar todos los procesos y tareas de extracción, transformación y carga de datos hacia las bodegas de datos.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Lenguajes de consulta
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8.col-12.mb-5
        .cajaf.p-4.mb-4
          p.mb-4 #[em Los lenguajes de consulta son lenguajes de programación orientados al manejo y gestión de datos; cuando se desarrollan aplicaciones bajo lenguajes de programación como C++, Java, y otros, los lenguajes de consulta son incluidos en algunas funciones de las aplicaciones, sin embargo, dejar todo el trabajo de reportes y consultas en los desarrollos de software, podría resultar limitado y con problemas de desempeño, cuando se procesan grandes cantidades de datos.]
      .col-lg-4.col-8.mb-5
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema4/img1.svg" alt="tema2")
      
    p.mb-4 A continuación, se describen los tres principales lenguajes de consulta que todo profesional de datos deberá tener en cuenta para desarrollar proyectos analíticos y transformación digital:
    
    .row.justify-content-center 
      .col-sm-12.col-lg-10
        .row.justify-content-center 
          .col-sm-12.col-lg-3
            .cajagris
              img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema4/img6.svg" alt="tema2")
            .cajagris
              img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema4/img7.svg" alt="tema2")
            .cajagris
              img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema4/img8.svg" alt="tema2")
            .cajagris
              img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema4/imge9.svg" alt="tema2")
          .col-sm-12.col-lg-7
            .cajabi
              p.mb-4 Es el principal lenguaje de consultas, su curva de aprendizaje es muy ágil, es decir, es un lenguaje de consultas y gestión de datos relativamente fácil de aprender. Todas las bases de datos relacionales están basadas en SQL, como principio de consulta.
            .cajabi
              p.mb-4 Ha sido muy usado para aplicaciones de grandes volúmenes de datos, es usado para computación estadística y gráfica, porque cuenta con funcionalidades matemáticas y estadísticas muy importantes. Es el lenguaje usado de manera nativa en herramientas como Microsoft Query, usado para la conexión, consultas y transformación de fuentes externas de datos para las aplicaciones como Excel y Power BI.
            .cajabi
              p.mb-4 Ha sido muy usado para aplicaciones de grandes volúmenes de datos, es usado para computación estadística y gráfica, porque cuenta con funcionalidades matemáticas y estadísticas muy importantes. Es el lenguaje usado de manera nativa en herramientas como Microsoft Query, usado para la conexión, consultas y transformación de fuentes externas de datos para las aplicaciones como Excel y Power BI.
            .cajabi
              p.mb-4 Ha sido muy usado para aplicaciones de grandes volúmenes de datos, es usado para computación estadística y gráfica, porque cuenta con funcionalidades matemáticas y estadísticas muy importantes. Es el lenguaje usado de manera nativa en herramientas como Microsoft Query, usado para la conexión, consultas y transformación de fuentes externas de datos para las aplicaciones como Excel y Power BI.
    
    
    
    
    
    
    
    
    
    p.mb-4 La mayoría de estos lenguajes a diferencia de los lenguajes para el desarrollo de aplicaciones, es que son lenguajes interpretados, es decir, ejecutan las instrucciones directamente sin una previa compilación de las líneas de código.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Manipulación de datos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-8.mb-5
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema4/img14.svg" alt="tema2")
      .col-lg-8.col-12.mb-5
        p.mb-3.my-3 En sí, la manipulación de datos es un elemento que permite varios elementos. La gestión de extremo a extremo comienza con los datos de origen de las áreas o procesos del negocio. El proceso realiza ingesta de datos de las fuentes, esto da como salida datos integrados en una herramienta específica para, luego, a través de la administración de los datos, se ordenen y se sincronicen.
        .mb-5
        .cajac.p-4.mb-4
          p.mb-4 En esta parte se preparan y optimizan los datos para aplicarles técnicas de analítica, visualizando datos y generando modelos de inteligencia artificial para predecir comportamientos y, en casos avanzados, sugerir acciones para que, en la siguiente etapa, ya con 
            strong.rojo #[em insigth]   
            |  y datos claros, se generen alertas programadas y en algunos casos, que el sistema tome algunas decisiones automatizadas (como subir o bajar precios a productos, publicar o no productos, entre otras acciones que pueden automatizarse). Al final, se toman acciones ya sean humanas o por los sistemas de información, de manera inteligente.

</template>

<script>
export default {
  name: 'Tema4',
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
