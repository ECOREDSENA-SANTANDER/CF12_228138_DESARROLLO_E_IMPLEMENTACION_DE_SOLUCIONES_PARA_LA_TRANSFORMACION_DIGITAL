<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Descripción general del servicio de computación en nube, gestión de uso y escenarios de aplicación
      
    .row.align-items-center.justify-content-center.mb-0(data-aos="zoom-in-left")
      .col-lg-4.col-md-10.col-9.my-3
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema1/img1.png', alt='')
      .col-lg-8.col-md-12.col-12.my-3
        p La computación en la nube 
          strong.resaltado #[em #[b (Computing cloud)  ]]  
          | corresponde a  los servicios o recursos computacionales que se distribuyen y consumen por medio de una red. 
        p Las aplicaciones, datos y comandos que se ejecutan por un usuario dependen de las contraseñas de la computadora o dispositivo que el usuario emplee.
        .d-flex.align-items-center.justify-content-center
          img.img-a.img-t.d-none.d-lg-block.mb-2(src='@/assets/curso/temas/tema1/img2.png', alt='')
          .bg13.p-4.mb-2.mx-3   El término estricto de 
            strong.colored #[em computing cloud ]
            | siempre estuvo presente desde los inicios de Internet, estas limitaciones estaban por debajo del rendimiento comparado con una máquina local; pues trabajar en máquinas locales era mucho más rápido, mejor rendimiento y contaba con más capacidad de almacenamiento.
        p.mt-2 Para comprender el #[em computing cloud,] es preciso conocer un poco sobre las arquitecturas de los diferentes componentes de la computación y sus capas, es decir entender sobre arquitectura de hardware, de redes, sistemas operativos y por supuesto aplicaciones. Cada elemento mencionado es un mundo técnico al que por años han evolucionado, cada uno tiene sus desarrollos y especialistas específicos.
    


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Referente histórico
    
    p.mb-4(data-aos="zoom-in-left") La computación en la nube empezó a hacerse popular desde el año 2006 (por supuesto, con antecedentes anteriores); pero a partir de esta época ya existían recursos tecnológicos avanzados, se empieza a desarrollar aún más las posibilidades de Internet, nuevas y grandes compañías también inician a fundarse y crecer, 
      strong.colored como se muestra en la siguiente figura:
    .row.mb-4
      .col-sm-12.col-md-12.col-lg-12.m-auto    
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="zoom-in-left")
          h5 Figura 1.
          span Antecedentes de la computacion en la nube
    
    .row.d-flex.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12.col-md-10.col-12
        .bag14
          .row.d-flex.align-items-center.justify-content-center.mb-2
            .col-lg-9.col-md-10.col-12.my-5
              img(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/img3.png', alt=' La figura representa los antecedentes de la computación en la nube, comenzando en los años 70 y 80 con Mainframe, donde destacaban empresas como IBM, UNISYS y NEC. Luego, en los noventa, surgieron actores  como Microsoft, Intel, HP y Compaq. En los años 2000, Internet se convirtió en un elemento fundamental con empresas como Yahoo, Google, Amazon, entre otros. Finalmente, en 2010, la computación en la nube tomó protagonismo, con la presencia de empresas como LinkedIn, Box, Apple, Twitter, Amazon, entre otros.')
            .row 
              .col-lg-auto.col-md-10.col-11.pabg.mb-3.mx-3
                p.mb-2.my-2 Nota. Adaptación tomada de, Entendiendo a la nube informática. #[em (Cloud computing.Blog,] 2016)

    p.mb-5 #[b Para llegar  a lo que son hoy los servicios en la nube, se debió pasar por los siguientes precedentes:]
    
    SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
      .row.align-items-center.justify-content-center
        .col-lg-6.col-12-md-12.my-3
          h4.mb-4 Mainframe
          p Se considera como la primera supercomputadora moderna, creada por IBM en los años 60, consistía en una máquina de cómputo central donde se llevaban todos los datos a manera de tarjetas perforadas para su procesamiento. 
        .col-lg-5.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/tema1/img4.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Tomas Watson
          p Lanzó el modelo IBM/360, el 7 de abril de 1964 quien fuera la sucesora de los Mainframes, consistió en lanzar varias referencias.
        .col-lg-5.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/tema1/img4.1.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Elementos clave de la arquitectura de la nube
          p Avance de la tecnología para el uso comercial Computadoras centrales como proveedor de servicios Adaptación de varios modelos para acoplarse al presupuesto y necesidades de las empresas.
        .col-lg-5.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/tema1/img4.2.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Computación en malla (Grid computing)
          p Entre finales de los años 80 e inicios de la década del 90 (s.xx), con el estándar de hardware X86 de Intel, se dio la masificación del uso de PC (computadoras personales), paralelamente surgen las primeras versiones de software open source.
        .col-lg-5.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/tema1/img4.3.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Arquitectura Cliente-Servidor
          p El internet era un servicio más usado especialmente para el correo electrónico, transferencias de archivos (protocolo ftp) y servicios de la web a finales de 1980. 
        .col-lg-5.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/tema1/img4.4.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Internet
          p Con la aparición de la web a principios de los 90s del siglo XX, que se empezó a masificar su uso y se da la aceptación de estas tecnologías como herramienta de productividad y uso personal por parte de las empresas y personas.
        .col-lg-5.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/tema1/img4.5.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Computing cloud
          p Para inicios de la década de los 2000, la internet estaba prácticamente en todos los países, la infraestructura mundial de datos comienza su aceleración de desarrollo, se empiezan a crear nuevos centros de datos.
        .col-lg-5.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/tema1/img4.6.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Cuarta revolución industrial
          p Desarrollo de las comunicaciones (fibra óptica, satélites, infraestructura de conectividad), más velocidad al tiempo que el hardware continúa avanzando.Aparece la red 3G en la telefonía celular, un hito para la movilidad de internet lo que permitió desarrollar smartphone con más posibilidades y sofisticación.Se dan usos diversos de la internet, (La web 2.0, streamings, multimedia en línea, otros servicios).Las corporaciones tecnológicas inician su reinvención a nuevos modelos y mercados.
        .col-lg-5.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/tema1/img4.7.png', alt='')
  
      
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Uso y escenarios de aplicación
      
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-8
        p.mb-3 Existen distintas formas de la nube, el concepto básico por el que se hace la entrega de servicios informáticos a clientes o usuarios por medio de una red. Los servicios en línea gestionan las peticiones recibidas y se caracterizan por tener flexibilidad y adaptabilidad de recursos según la demanda; estos escalamientos son transparentes para los usuarios. 
        .bloque-texto-d.bg13.p-1.mb-3
          i.fas.fa-quote-left.my-1
          p.mx-3 Existen tres tipos de servicios en la nube, según la ubicación de los servidores: nube pública, nube privada y nube híbrida.
          h5.d-flex.justify-content-end.mx-3 (Olivares, Caparrós Ramírez, & Cubero Luque, 2019).
            i.fas.fa-quote-right
        p.mb-0 Los proveedores de #[em computing cloud] se basan en sistemas de cómputo que se encuentran en una cuenta de internet ya sea porque accedan a través de los navegadores web, o porque se sincronizan con las computadoras o equipos de cómputo, a continuación en la 
          strong.colored figura 2 se ilustra la arquitectura de la computación en la nube:
      .col-lg-4.col-md-9.col-9.my-0
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/img5.png', alt='')

    .row.mb-4
      .col-lg-10.col-md-10.col-12.m-auto    
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
          h5 Figura 2.
          span Arquitectura computacion en la nube
        img.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/img6.png', alt='')
  
    p.mb-5 En términos generales, emplear computación en la nube en vez de usar infraestructura local tiene ventajas como las que se muestran a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description
    
    p.mb-5 A continuación se detallarán algunos servicios Multicloud y características de los recursos propios y alojados en la nube.
    
    .row.mb-5(data-aos="zoom-in-left")
      .col-lg-12.md-lg-10.col-12
        .bg14
          .row 
            .col-lg-8.md-lg-10.col-12
              p.mb-0.mb-3.p-2.mt-4.mx-3.fw-bold
                strong.resaltado2.p-2 #[b Multi cloud]
              p.mb-4.mx-4 Cuando la organización implementa servicios en la nube con diferentes proveedores, se define el multi-cloud, esta característica se presenta por diferentes circunstancias, como las siguientes:
              ul.lista-ul--color.mx-3
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-0 Las empresas, en especial las pymes, no tienen un plan concreto a mediano o largo plazo en la implementación de tecnología, por lo que van adquiriendo servicios en el camino según lo van necesitando, resultando al final complicando la administración de servicios y proveedores por tener sistemas dispersos. 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-0 Las empresas contratan analistas diferentes que utilizan a un proveedor o el otro según los servicios que requieren, es decir, para las bases de datos podrían usar servicios de Google, pero para administrar las aplicaciones usan Azure. 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-0 Los proveedores y herramientas en la nube se pueden conversar unas con otras independiente de su marca (podrían presentarse algunas restricciones). 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-0 Por los precios, seleccionan de cada proveedor el servicio que mejor le convenga para ahorrar y optimizar recursos. 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-0 Aumentan la garantía de seguridad en la información usando respaldos en otros proveedores. En especial como medida de protección contra ataques cibernéticos, secuestro de datos u otras circunstancias. 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-0 Un proveedor fuerte en servidores y disponibilidad de máquinas para montar bases de datos, aplicaciones web, soluciones propias, etc. y contar con los servicios de marcas con todo un ecosistema de productividad para apoyar las labores del negocio tales como Microsoft o Google. 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-0 Para emplear la computación en la nube con varios proveedores, lo más importante al momento de elegir un ecosistema de productividad digital son: sus condiciones de uso y garantías, asistencia técnica, servicios que ofrece, disponibilidad, precios, habilidad en el manejo de herramientas, entre otros aspectos. 
            .col-sm-12.col-md-4.pt-5 
              img.img-a.img-t.my-5.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/img7.png', alt='')
    
    h4.mb-4(data-aos="zoom-in-left") Recursos tecnológicos propios o “arrendados”
    
    p.mb-0(data-aos="zoom-in-left") Los paradigmas que la nube, ha impulsado durante los últimos años y que continúa evolucionando, ha cambiado los planes y enfoques de inversión de las organizaciones respecto a la tecnología. Por lo que ya las empresas tienen la opción de elegir uno de los modelos, los principales son:
    
    .row 
      .col-lg-12.md-lg-10.col.lg-12
        .row.d-flex.justify-content-between
          .col-lg-6.col-md-12.col-12.mt-2
            .tarje.color-primario.my-4.he-4-cus.px-4.pt-4.mb-4
              img.w-auto-cus(src='@/assets/curso/temas/tema1/img8.svg', alt='')
              h4.mb-3.mt-4 #[.ir On-premise]
              p.mb-0.text-white (En local), significa que el recurso informático, ya sea |, #[em software,] comunicación, etc., se encuentra en la empresa, es propiedad de ella misma.
              p.mb-0.text-white Por lo general, los planes de compra se ejecutan bajo un presupuesto de inversión inicial alto.
              p.mb-0.text-white Los equipos, servidores o aplicaciones hacen parte de los activos corporativos, pero en adelante no tendrá que pagar por el uso de estos recursos.
              p.mb-0.text-white Su dominio es total, al igual que su operación y mantenimiento, se podría configurar una nube privada.
              .d-flex.justify-content
                img.ittt.my-5(src="@/assets/curso/temas/tema1/imggggg.svg")
      
          .col-lg-6.col-md-12.col-12.mt-2
            .tarje.color-primario.my-4.he-4-cus.px-4.pt-3.mb-4
              img.w-auto-cus.mt-2(src='@/assets/curso/temas/tema1/img8.1.svg', alt='')
              h4.mb-3.mt-4 #[.ir #[em IaaS ](Infraestructura como servicio)]
              p.mb-4.text-white En términos generales, se refiere a la contratación de máquinas #[em (hardware)].
              p.mb-0.text-white Se contratan por lo general, equipos servidores, o si es política de la empresa, asignarle a cada empleado su computadora donde trabajará y guardará su información. 
              p.mb-0.text-white La infraestructura incluye máquinas de comunicación como #[em routers, firewall,] servidores y computadoras personales.
              p.mb-0.text-white Se tiene la opción de elegir las características #[em hardware] de los dispositivos. 
                .d-flex.justify-content-center
                  img.itt.my-5(src="@/assets/curso/temas/tema1/imggggg.svg")

    .mb-4
    p.mb-4 Es un servicio que, entre otras ventajas, permite escalar características de los equipos según la necesidad.
    
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-6
        .bloque-texto-d.bg13.p-3.mb-2.my-4
          i.fas.fa-quote-left.mb-3
          p.mb-3.mx-3 #[b #[em PaaS ](Plataformas como Servicio):] está orientado a la adquisición de un ambiente de desarrollo, al utilizar infraestructura PaaS los entornos vienen ya listos y solo deberían concentrarse en el desarrollo de la aplicación. 
          h5.d-flex.justify-content-end (Olivares, Caparrós Ramírez, & Cubero Luque, 2019).
            i.fas.fa-quote-right
      .col-lg-6.mb-2
        img(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/img9.png', alt='')
    
    p.mb-5 #[em SaaS] #[b (Software como Servicio):] son aquellas aplicaciones que se encuentran en la nube, un ejemplo de este tipo de servicios es el #[em Office,] si bien por ejemplo #[emWord] podría estar instalado en la máquina local, también se puede trabar con la aplicación que se accede a través del navegador y todo sincronizado entre lo local y la nube.  En la figura 3 se representa el modelo de servicios escalables en la nube:
    
    .row.mb-5
      .col-lg-12-sm-10.col-md-12.col-lg-12.m-auto    
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
          h5 Figura 3.
          span Modelo De servicios en la nube
        img(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/img10.png', alt='')
  
    p.mb-5 Cuando no se hacen planes de inversión para adquirir recursos TI, los servicios se pagan mensual o anual, a un tercero según las necesidades de la organización. En la mayoría de los casos existen grandes prestadores de soluciones tecnológicas con infraestructuras de gran tamaño e inversión para la transformación digital, que cubren múltiples servicios.
    
    h4.d-flex.justify-content Los gigantes de la nube

    p.mb-5 Los gigantes de la nube están expandiendo rápidamente sus operaciones para capitalizar el crecimiento de demanda que acompañará a la aceleración de la transformación digital. Los más populares y líderes en el mercado so n los siguientes:
    TabsA.color-acento-botones.mb-5
      .tarjeta.bg145.p-5(titulo="Amazon Web Services")
        h4 Amazon Web Services
        .row 
          .col-sm-12.col-md-8
            p Modelo de computación en la nube flexible, con concepto autoescalable según su uso, cuenta con herramientas para el procesamiento de soluciones analíticas e inteligencia artificial.
          .col-sm-12.col-md-4
            img.img-t(src='@/assets/curso/temas/tema1/img11.png')
      .tarjeta.bg145.p-5(titulo="Azure")
        h4 Azure
        .row
          .col-sm-12.col-md-8
            p Trabajar bajo el ecosistema de Microsoft es trabajar con las herramientas más usadas en el mundo bajo el esquema de Windows, herramientas Office y la infraestructura de Azure.
          .col-sm-12.col-md-4
            img.img-t(src='@/assets/curso/temas/tema1/img11.1.png')
      .tarjeta.bg145.p-5(titulo="Google Cloud")
        h4 Google Cloud
        .row 
          .col-sm-12.col-md-8
            p Puede ser usado por empresas de todos los tamaños, cuenta con excelentes herramientas de productividad y apoyo a los procesos de negocio, su fuerte es el empleo de máquinas de alto rendimiento.
          .col-sm-12.col-md-4
            img.img-t(src='@/assets/curso/temas/tema1/img11.2.png')

    .bg14.p-4.mb-1(data-aos="fade-left") 
      .row.d-flex
        .col-lg-1
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/im.svg', alt='')
        .col-lg-11 Adicionalmente, es importante aclarar que los anteriores no son los únicos proveedores, si bien son los más populares y líderes en el mercado existen cientos de compañías especializadas en soluciones en la nube. Hay compañías especializadas en inteligencia de negocios, otras en #[em big data,] otras en infraestructura #[em hardware,] como #[em IBM, Qlic Sense, Oracle,] entre otras.


    
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
