<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Contenedores
    
    .row(data-aos="zoom-in-left")
      .col-lg-4
        img.img-t(src='@/assets/curso/temas/tema4/img1.png', alt='Actividades del plan de gestión de servicios TI')
      .col-lg-8
        .row.justify-content-center.align-items-center
          .col-lg-12.align-items-center.justify-content-center
            .tarjeta.bg13.p-3.mb-5.align-items-center.justify-content-center
              .row.justify-content-around.align-items-center
                .col-lg-2.w-img-cus-2
                  img(src="@/assets/curso/temas/tema4/img1.1.svg")
                .col-lg-10
                  .row.justify-content-between.align-items-center
                    .col.mb-5.mb-sm-0
                      p.mb-0 Una vez revisadas los conceptos y características del servicio de directorio y la virtualización, nos adentramos un poco más en los modelos de virtualización a nivel de sistema operativo y adicionalmente se desarrollarán varios ejercicios que nos introducen a la plataforma Docker la cual es ampliamente utilizada por #[b la industria de desarrollo de software.]
            p.mb-3.mx-0.my-3 Al finalizar este componente formativo el aprendiz estará en la capacidad de crear imágenes de docker, construir y ejecutar contenedores Docker a partir de imágenes locales, modificar contenedores locales, transformar un contenedor editada a una imagen y compartir una imagen local en el repositorio en la nube #[em Docker Hub.]


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1  Contenedores de software
    
    p.mb-5 El término de contenedores se ha vuelto muy común en la jerga actual asociada a la administración de servicios de infraestructura, pero en esencia hace referencia a un modelo de virtualización repasado en el componente anterior, específicamente la virtualización a nivel de sistema operativo.
    
    .row(data-aos="zoom-in-left") 
      .col-lg-6 
        img.img-t(src='@/assets/curso/temas/tema4/img2.png', alt='Actividades del plan de gestión de servicios TI')
      .col-lg-6
        .bloque-texto-c.color-primari.bg14.p-4.mb-5
          i.fas.fa-quote-left
          span  En este modelo los contenedores no son más que máquinas virtuales aisladas entre sí, con un software específico que no tiene un sistema operativo propio, sino que comparte los recursos y el kernel del sistema operativo de la máquina anfitriona o host, logrando un mejor rendimiento ya que solo existe un sistema operativo encargado de la gestión de la infraestructura en la máquina anfitriona o host.
          h5.d-flex.justify-content-end López (2018)
    
    .bg188.p-4.mb-3(data-aos="fade-left") 
      .row.d-flex
        .col-lg-1
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema4/img3.svg', alt='')
        .col-lg-11 Los contenedores encapsulan únicamente el software específico de la aplicación que se ejecuta dentro de él junto con las librerías de las cuales depende para su ejecución, abstrayendo el servidor en el que se va a ejecutar logrando entonces una portabilidad real ya que es posible predecir el comportamiento de un software cuando este se mueve desde un servidor a otro.
    
    h3.mb-5 Ventajas 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Disminución de gastos") Requieren menos recursos del sistema comparado con sistema de virtualización tradicionales.
          p(numero="2" titulo="Mayor portabilidad") Se pueden implementar fácilmente en diferentes plataformas y sistemas operativos.
          p(numero="3" titulo="Funcionamiento coherente") Siempre se ejecutan de la misma manera independientemente del lugar donde se implementen. 
          p(numero="4" titulo="Mayor eficiencia") Permiten la implementación de modificaciones y/o escalamiento de funcionalidades con mayor rapidez. 
          p(numero="5" titulo="Mejor desarrollo de aplicaciones") Este modelo de virtualización se alinea perfectamente con las metodologías ágiles y enfoques de DevOps de la industria actual para acelerar el proceso de construcción de software. 
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/tema4/img4.png")  
      
        
    
    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2 Hipervisor vs contenedores
    
    .row.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-4
        p.mb-0 Hay similitudes y diferencias entre la forma en cómo estas dos tecnologías facilitan el proceso de virtualización de aplicaciones, razón por la cual es más conveniente una u otra dependiendo del contexto particular y las necesidades establecidas por la organización. 
        .row.justify-content-center.align-items-center
          .col-lg-12
            .tarjeta.bg14.p-3.mb-5.mt-4
              .row.justify-content-around.align-items-center
                .col-sm-12.col-md-12
                  .row.justify-content-between.align-items-center
                    .col.mb-2.mb-sm-0
                      p.mb-2 En ambos casos se requiere de una máquina host que contendrá la infraestructura física con todos los dispositivos y recursos necesarios, sobre los cuales se monta un sistema operativo que puede ser de cualquier tipo y luego sobre este sistema operativo se monta un software que en el caso del esquema de máquinas virtuales tradicionales será un hipervisor y en el esquema de contenedores será un gestor de contenedores.
      .col-sm-12.col-md-12.col-lg-4
        img.img-a.img-t.mb-3(src="@/assets/curso/temas/tema4/img5.png", alt="alt").img100.m-auto
      .col-sm-12.col-md-12.col-lg-4
        .bg10.p-4.mb-1(data-aos="fade-left") 
            .row
              .col-lg-12
                p.mb-2 En las máquinas virtuales para poder ejecutar una aplicación específica se requiere de librerías y códigos binarios de los cuales depende y adicionalmente requiere el montaje de un sistema operativo invitado. Así, por ejemplo, si la aplicación a ejecutar en la máquina virtual fue construida con Visual Studio .Net es necesario también montar en la máquina virtual el sistema operativo Windows, si la aplicación a ejecutar en la máquina virtual fue construida en Swift requiere entonces la instalación del sistema operativo MacOS y así sucesivamente en todas las máquinas virtuales se debe correr el sistema operativo completo de acuerdo con las App a utilizar. 
                .align-self-end 
                img.img-t.d-flex.justify-content-end(src='@/assets/curso/temas/tema4/puntos.svg', alt='')
    
    p.mb-0 En el caso de las tecnologías de contenedores, estos se construyen exclusivamente con las aplicaciones, librerías y archivos binarios a ser utilizados, y compartirán recursos con el sistema operativo anfitrión o máquina host.




    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.3 Docker

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-8
        p Docker es una de las plataformas de software más ampliamente utilizada en el mundo para la gestión de contenedores.
        .tarjeta.color-primario.px-3.py-3.mb-0
          .row.justify-content-around.align-items-center
            .col-2.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema4/docker.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-2.mb-sm-0
                  h3.mb-1 Docker 
                  p.mb-0 Para realizar el proceso de instalación de Docker en el sistema operativo Windows debemos dirigirnos directamente a la página oficial de Docker disponible en:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link
        .d-flex.align-items-center.justify-content-center
            img.img-a.img-t(src='@/assets/curso/temas/tema4/img6.1.svg', alt='')
            p.ml-1-custom.mt-3 En el enlace anterior podrá encontrar el enlace acceso directo al proceso de descarga y también encontrará una descripción de los requerimientos específicos del sistema respecto a versiones de sistema operativo, memoria RAM mínima, procesadores compatibles entre otros requerimientos.
        p.mb-3 En el siguiente recurso, podrá observar las características del Docker, veamos:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-4.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/tema4/img6.2.png") 
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-6
        .tarjeta.color-primario.px-3.py-3.mb-0
          .row.justify-content-around.align-items-center
            .col-2.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema4/docker.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-2.mb-sm-0
                  p.mb-0 Para más información detallada diríjase a la documentación de referencia de Docker sobre archivos Dockerfile disponible en: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link
    
      .col-lg-6
        .tarjeta.color-primario.px-3.py-3.mb-0
          .row.justify-content-around.align-items-center
            .col-2.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema4/docker.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-2.mb-sm-0
                  p.mb-4 O la documentación de Dockerfile para Windows disponible en:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link
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
