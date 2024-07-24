<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Estrategias de migración
    
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 La migración de información a la nube, como se ha visto anteriormente, es un paso obligado para particulares y para empresas que se encuentren dotadas a nivel de infraestructura, con equipos de servidores, aplicaciones, redes, etc. Todo esto implica un largo, y a veces complejo proceso de migración. 
    p.mb-4 Este proceso de migración, #[b consiste en una serie de actividades para lograr una identificación, planificación, ejecución y evaluación de migración de servicios de TI locales a servicios en la nube dentro de una organización.]
      
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Concepto
        img.clase2.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema5/titulo.svg' data-aos="fade-left")

    .row.align-items-center.justify-content-center(data-aos="zoom-in-left")
      .col-lg-8
        p.bg10.p-4.mb-3 #[b Todo proyecto de implementación de servicios en la nube debe estar orientado o dirigido por una estrategia definida de migración,] la cual varía según múltiples factores, por lo que no hay una única estrategia para una cartera de productos TI.
        .d-flex.align-items-center.justify-content-center
          img.img-a.img-t.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/tema5/img2.svg', alt='')
          p.ml-1-custom No obstante, una de las ventajas de la infraestructura #[em cloud ]es permitir combinar servicios que consoliden las necesidades de la organización. En el #[em cloud computing] se suele utilizar la fórmula de ‘las 6 Rs’ para identificar distintas estrategias de migración a aplicar en función de las características del proyecto TI, como puede apreciarse en la figura que se encuentra a continuación.
      .col-lg-4.col-md-8.col-8
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema5/img2.1.png', alt='')
    
    .row.mb-4
      .col-lg-12-sm-10.col-md-12.col-lg-12.m-auto    
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
          h5 Figura 9.
          span Las 6 Rs de #[em AWS] para migración a la nube
        .cajag.p-4
          img.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/img3.svg', alt='La imagen muestra un diagrama de las seis estrategias de AWS para la migración a la nube, conocidas como las “6 R”. Representa un flujo desde la evaluación inicial hasta la producción, con rutas específicas para cada estrategia: Retirar, Retener, Replataformar, Recomprar, Reubicar y Refactorizar. Cada camino incluye pasos como la determinación de la ruta de migración, rediseño de la arquitectura, uso de herramientas de migración y configuraciones manuales o automatizadas.')
          img.imagen-mobile(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/img3.15.svg', alt='La imagen muestra un diagrama de las seis estrategias de AWS para la migración a la nube, conocidas como las “6 R”. Representa un flujo desde la evaluación inicial hasta la producción, con rutas específicas para cada estrategia: Retirar, Retener, Replataformar, Recomprar, Reubicar y Refactorizar. Cada camino incluye pasos como la determinación de la ruta de migración, rediseño de la arquitectura, uso de herramientas de migración y configuraciones manuales o automatizadas.')
  
    .mb-4 #[b De forma simplificada, puede explicarse cada una de las estrategias que involucran la migración a la nube en la siguiente imagen.]
    

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12-sm-10.col-md-12.col-lg-12.m-auto    
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
          h5 Figura 10.
          span Estrategias de migración
      .col-lg-12.col-md-12.col-12
        .cajag.p-4 
          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-12.col-12
              img(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/imgg.png', alt='La imagen muestra un diagrama de las seis estrategias de migración a la nube, agrupadas en dos columnas. En la columna izquierda, de color naranja, están “Re-hospedaje (lift and shift)”, “Re-plataforma” y “Re-compra”. En la columna derecha, de color gris, están “Retirada”, “Retención” y “Re-diseño”. Cada bloque representa una estrategia distinta para migrar aplicaciones a la nube.')
    
    .mb-2.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Tipos y caracteristicas
        img.clase1.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema5/titulo.svg' data-aos="fade-left")
    

    .row.align-items-center.justify-content-center.mb-0(data-aos="zoom-in-left")
      .col-lg-8.my-3.mx-0
        p.mb-3 Como se estudió anteriormente, existe la técnica de las 6 Rs, que permite la #[b identificación de estrategias para la migración de información a la nube.] Estas estrategias corresponden con unos tipos y características particulares, de acuerdo con los costes que implica:
    
        .row.align-items-center.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-4
            .tarjeta--boton.color-primario.bg111111.p-3
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img.img-a.img-t(src='@/assets/curso/temas/tema5/traslado.svg', alt='Texto que describa la imagen')
              p.text-center El traslado
      
          .col-sm-6.col-lg-3.mb-4.mb-lg-4
            .tarjeta--boton.color-primario.bg111111.p-3
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img.img-a.img-t(src='@/assets/curso/temas/tema5/necesidad.svg', alt='Texto que describa la imagen')
              p.text-center Las necesidades de la organización

          .col-sm-6.col-lg-3.mb-4.mb-lg-4
            .tarjeta--boton.color-primario.bg111111.p-3
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img.img-a.img-t(src='@/assets/curso/temas/tema5/tiempo.svg', alt='Texto que describa la imagen') 
              p.text-center El tiempo permitido o posible para llevarlo a cabo
    
          .col-sm-6.col-lg-3.mb-4.mb-lg-4
            .tarjeta--boton.color-primario.bg111111.p-3
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img.img-a.img-t(src='@/assets/curso/temas/tema5/misma.svg', alt='Texto que describa la imagen')
              p.text-center  La misma estrategia de negocio
    
      .col-lg-4.col-md-9.col-9
        img.d-none.d-lg-block.my-3(src='@/assets/curso/temas/tema5/img4.png', alt='') 
    
    p.mb-4 En el siguiente recurso didáctico podremos ampliar la información sobre cada una de esas 6Rs: 
    
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-7.md-lg-10.col-12
        LineaTiempoD.color-secundario
          .row(numero="1" titulo= "<em>(R)ehosting</em>")
            .col-md-12.mb-2.mb-md-0.mx-0
              p  Refiere a la estrategia de #[em lift-and-shift], en donde se trasladan las aplicaciones a la nube sin rediseño de ningún tipo (a veces de forma literal), podría decirse que como una copia #[em bit] a #[em bit].
            .col-md-12.mb-2.mb-md-0.mx-0
              .d-flex.align-items-center.justify-content-center
                img.img-a.img-t.mb-4.mx-2(src='@/assets/curso/temas/tema5/cincoo.svg', alt='')
                p De esta forma no hay grandes beneficios a corto plazo, sin embargo, posibilita una migración relativamente rápida (hay automatizaciones al respecto), y se espera que un posible rediseño posterior sea más sencillo una vez las aplicaciones se encuentren ya en la nube.
            .col-md-12.mb-2.mb-md-0.mx-0
              .d-flex.align-items-center.justify-content-center
                img.img-a.img-t(src='@/assets/curso/temas/tema5/unooo.svg', alt='')
          
          .row(numero="2" titulo="<em>(R)eplatforming</em>")
            .col-md-12.mb-4.mb-md-0
              p  Corresponde con el escenario #[em lift-tinker-and-shift,] es decir, el medio del artículo anterior, donde no se cambia de forma fundamental la arquitectura de la aplicación, pero se introduce alguna pequeña mejora.
            .col-md-12.mb-2.mb-md-0.mx-0
              .d-flex.align-items-center.justify-content-center
                img.img-a.img-t(src='@/assets/curso/temas/tema5/dosss.svg', alt='')
          
          .row(numero="3" titulo= "<em>(R)epurchasing</em>")
            .col-md-12.mb-2.mb-md-0.mx-0
              p Es una estrategia totalmente diferente, pues ya no se trata de migrar la aplicación existente, sino de adoptar una nueva aplicación que se encuentre en la nube. Por ejemplo, podríamos abandonar nuestro CRM legado y migrar hacia #[em Salesforce]. Si bien es cierto, no existe una migración de aplicación propiamente dicha, son necesarias las acciones como migrar datos, rediseñar interfaces, etc.
            .col-md-12.mb-2.mb-md-0.mx-0
              .d-flex.align-items-center.justify-content-center
                img.img-a.img-t(src='@/assets/curso/temas/tema5/tresss.svg', alt='')
          
          .row(numero="4" titulo= "<em>(R)efactoring / (R)-arquitecting</em>")
            .col-md-12.mb-2.mb-md-0.mx-0
              p Esta estrategia consiste en hacer un rediseño profundo de la aplicación que sea realmente #[em cloud] nativa. Se considera la llamada “reingeniería” (cambios profundos en la aplicación), como se indica, semejante al desarrollo de #[em cloud] nativo, que consiste en la construcción desde cero.
            .col-md-12.mb-2.mb-md-0.mx-0
              .d-flex.align-items-center.justify-content-center
                img.img-a.img-t(src='@/assets/curso/temas/tema5/cuatrooo.svg', alt='')
          
          .row(numero="5" titulo= "<em>(R)etire</em>")
            .col-md-12.mb-2.mb-md-0.mx-0
              p Esta estrategia, realmente no se trata de una migración, sino más bien de aprovechar el esfuerzo y análisis de la realidad de sistemas disponibles para prescindir de alguno que realmente no aporte valor o que su funcionalidad permite ser absorbida por otro. Es idóneo para simplificar el mapa de sistemas, permitiendo ahorro en el costo, aporte en agilidad y mayor facilidad en la gestión.
            .col-md-12.mb-2.mb-md-0.mx-0
              .d-flex.align-items-center.justify-content-center
                img.img-a.img-t(src='@/assets/curso/temas/tema5/cincooo.svg', alt='')
          
          .row(numero="6" titulo= "<em>(R)etain</em>")
            .col-md-12.mb-2.mb-md-0.mx-0
              p En realidad, es una no migración, es decir, es una decisión consciente de no migrar una aplicación a la nube.
            .col-md-12.mb-2.mb-md-0.mx-0
              .d-flex.align-items-center.justify-content-center
                img.img-a.img-t(src='@/assets/curso/temas/tema5/seisss.svg', alt='')
      
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0(data-aos="fade-left")
        img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/temas/tema5/img5.png")  
  
    p.mb-3 Con el fin de llevar a cabo una mayor precisión del concepto, así como un breve resumen de las 6Rs, se presenta la siguiente tabla, la cual incorpora las características de cada una de estas, analicemos: 
      
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12-sm-12.col-md-12.col-lg-12.m-auto    
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
          h5 Tabla 1.
          span Estrategias de migración
    .row.justify-content-center.align-items-center(alt='La tabla describe seis estrategias de migración a la nube: Re-hospedaje (transferir sistemas sin cambios significativos), Re-Plataforma (modificar sistemas para optimizarlos para la nube), Re-compra (sustituir aplicaciones con soluciones SaaS como Office 365), Re-diseño (reconstruir aplicaciones desde cero para maximizar los beneficios de la nube), Retención (mantener aplicaciones en su entorno actual si no es viable migrarlas) y Retirada (eliminar aplicaciones obsoletas para reducir costos operativos')  
      .col-lg-12.col-md-10.col-12
        .tabla-b
            tr
              th.h4.titu.text-white.text-center Estrategia
              td.h4.titu.text-white.text-center Definición
            tr
              th.h4.blanco #[em Re-hospedaje (“lift&nbsp;and&nbsp;shift”)]  
              td.blanco Esta estrategia es una de las más comunes y sencilla de implementar, aunque también se considera que presenta muchas más probabilidades de generar problemas, incrementar los costes y alinear los #[em stakeholders] clave. El re-hospedaje, consiste en replicar un sistema existente en una infraestructura #[em cloud.]<br><br> Su implementación es rápida y práctica, pero hereda las debilidades y fallas de los sistemas originarios hacia la nube. 
            tr
              th.h4.rosa.text-center Re-Plataforma  
              td.rosa Estrategia que implica análisis de negocio para identificación de procesos y servicios que puedan ser excluidos de la migración, requiere un conocimiento de la arquitectura originaria y procesos para la toma de decisiones. 
            tr
              th.h4.blanco.text-center Re-compra  
              td.blanco Estrategia asociada a la recompra de versiones SaaS de una aplicación utilizada por la organización, por ejemplo: Microsoft Exchange migrar a Office 365 obteniendo las funcionalidades y beneficios de un producto novedoso y seguro. <br><br>Este modelo requiere de una importante justificación para ser presentado ante la alta dirección, ya que es común escuchar que no se debe comprar algo con lo que ya se cuenta, de ahí la importancia de presentar los beneficios y bondades de la nueva adquisición.  
            tr
              th.h4.rosa.text-center Re-diseño  
              td.rosa Estrategia de mayor complejidad y de mayor costo ya que implica re arquitecturizar sistemas de información y procesos, buscando aprovechar los beneficios de la tecnología #[em cloud.]<br><br>Considera que puede requerir diseñar la infraestructura desde cero, pero esto se puede ver beneficiado con una optimización de recursos, y evitar gastos innecesarios en la operación de la infraestructura <i> cloud.</i>  
            tr
              th.h4.blanco.text-center Retención  
              td.blanco Esta estrategia considera la posibilidad de no tener que migrar hacia la nube toda una infraestructura. Ya sea por costos, restricciones de licenciamiento o compatibilidad.<br><br>Para este caso, se conserva la aplicación o algún componente de la misma en el entorno original, identificando que, en algunas ocasiones, no todo puede ser llevado hacia la nube. 
            tr
              th.h4.rosa.text-center Retirada  
              td.rosa Busca retirar de la arquitectura #[em cloud,] aquellos componentes que ya no se utilizan y que generan carga o costo operativo. 

      Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1  Motivaciones
    
    p.mb-3  Entre las principales motivaciones  para que una empresa migre a la nube, se tienen: 
    
    .row.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-12
        .bgonza
          .row 
            .col-sm-12.col-md-12.col-lg-8
              ul.lista-ul--color.mx-4.my-4
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Generación de nuevas condiciones que agreguen valor al negocio.
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Las decisiones se basan en los análisis de las nuevas ventajas y oportunidades que se puedan generar.
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Empleando nuevas tecnologías o migrando los servicios a la nube. 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Determinar planes específicos del negocio tales como mejorar ventas, experiencias de clientes, mejora y control de procesos.
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Ahorrar costos a mediano y largo plazo, optimizar recursos.
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Resolver preguntas del negocio para tomar decisiones.
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Cada negocio tiene su naturaleza, característica y tamaño.
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 La solución en la nube de una organización no necesariamente es igual para otra, así se le parezca.
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Nivel de innovación de la organización y lo que mejora.
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Estrategia del área TI.
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Tener un  plan estratégico que involucre planes de inversión.
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Aplicar gestión del cambio a toda la empresa.
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Tener el conocimiento técnico.
            .col-sm-12.col-md-4.pt-5 
              img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/img6.png', alt='')
    
    
    p.mb-4(data-aos="zoom-in-left") #[b A continuación, se detallan las razones para que una organización migre sus soluciones tecnológicas a la nube:  ]
    
    .row.justify-content-center.mb-4
      
      .col-sm-12.col-lg-3.col-md-6.col-9.mb-3
        .cajonu
          img.img-a.img-t(src='@/assets/curso/temas/tema5/ab.png', alt='La imagen muestra cuatro conceptos clave representados visualmente: transformar la experiencia de usuario con una mano seleccionando una cara feliz en un gráfico de satisfacción; toma de decisiones con una persona moviendo una pieza de ajedrez; mejorar operaciones con manos sosteniendo engranajes y relojes, simbolizando la optimización y eficiencia; y nuevos servicios con una mano marcando elementos en una lista en una computadora portátil, indicando innovación y desarrollo.')
          h4.p-3.text-white.text-center Transformar la experiencia de usuario 
      
      .col-sm-12.col-lg-3.col-md-6.col-9.mb-3
        .cajonu
          img(src='@/assets/curso/temas/tema5/cd.png', alt='La imagen muestra cuatro conceptos clave representados visualmente: transformar la experiencia de usuario con una mano seleccionando una cara feliz en un gráfico de satisfacción; toma de decisiones con una persona moviendo una pieza de ajedrez; mejorar operaciones con manos sosteniendo engranajes y relojes, simbolizando la optimización y eficiencia; y nuevos servicios con una mano marcando elementos en una lista en una computadora portátil, indicando innovación y desarrollo.')
          h4.p-3.text-white.text-center.my-2 Toma de decisiones   

      .col-sm-12.col-lg-3.col-md-6.col-9.mb-3
        .cajonu
          img(src='@/assets/curso/temas/tema5/ef.png', alt='La imagen muestra cuatro conceptos clave representados visualmente: transformar la experiencia de usuario con una mano seleccionando una cara feliz en un gráfico de satisfacción; toma de decisiones con una persona moviendo una pieza de ajedrez; mejorar operaciones con manos sosteniendo engranajes y relojes, simbolizando la optimización y eficiencia; y nuevos servicios con una mano marcando elementos en una lista en una computadora portátil, indicando innovación y desarrollo.')
          h4.p-3.text-white.text-center.my-2 Mejorar operaciones

      .col-sm-12.col-lg-3.col-md-6.col-9.mb-3
        .cajonu
          img(src='@/assets/curso/temas/tema5/gh.png', alt='La imagen muestra cuatro conceptos clave representados visualmente: transformar la experiencia de usuario con una mano seleccionando una cara feliz en un gráfico de satisfacción; toma de decisiones con una persona moviendo una pieza de ajedrez; mejorar operaciones con manos sosteniendo engranajes y relojes, simbolizando la optimización y eficiencia; y nuevos servicios con una mano marcando elementos en una lista en una computadora portátil, indicando innovación y desarrollo.')
          h4.p-3.text-white.text-center.my-3 Nuevos servicios 

    
    .row 
      .col-lg-12
        h4.mb-4  Beneficios de la computación en la nube 
        p.mb-4 Sin entrar en detalles técnicos, los beneficios de migrar a la nube se traducen en velocidad, elasticidad, innovación, pago por uso y autoservicio, como se presenta a continuación:
    
    .row.mb-4
      .col-lg-12-sm-10.col-md-12.col-lg-12.m-auto    
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
          h5 Figura 11.
          span Beneficios generales de migrar a la nube
        .cajj.p-4
          img.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/11.svg', alt='La imagen describe los beneficios generales de migrar a la nube: Velocidad, ya que automatiza y acelera procesos; Elasticidad, permitiendo adaptarse rápidamente a nuevas circunstancias; Innovación, al facilitar el aprendizaje y la creación de nuevos productos y servicios; Pago por uso, optimizando recursos y ajustando costos según la carga de trabajo; y Autoservicio, donde la organización gestiona sus recursos con soporte del proveedor solo cuando es necesario. ')
          img.imagen-mobile(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/11.13.svg', alt='La imagen describe los beneficios generales de migrar a la nube: Velocidad, ya que automatiza y acelera procesos; Elasticidad, permitiendo adaptarse rápidamente a nuevas circunstancias; Innovación, al facilitar el aprendizaje y la creación de nuevos productos y servicios; Pago por uso, optimizando recursos y ajustando costos según la carga de trabajo; y Autoservicio, donde la organización gestiona sus recursos con soporte del proveedor solo cuando es necesario. ')

    h4.mb-4 Motivadores para migrar a la nube

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-12.col-md-lg-10.col-12
        .cajobb
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-4
              img(alt="" src="@/assets/curso/temas/tema5/img8.png")
            .col-lg-8.col-md-lg-10.col-12.p-4
              p.text-white.mx-3  La nube presenta grandes ventajas, los proveedores actuales ofrecen plataformas muy bien estructuradas, seguras y sugieren metodologías a las organizaciones para que su migración sea exitosa. De acuerdo a las posibilidades y tamaños empresariales, podría ser importante contar con asesorías de expertos como #[em partners] o consultorías de transformación digital.

    p.mb-4 La migración a la nube, implica descubrir y aprovechar muchas oportunidades que estarán allí a la mano para las organizaciones, de la siguiente manera:

    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/RxZVx8tNez4?si=SDiSVv0rCMITBSOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Migración a La Nube, un paso fundamental para las organizaciones hoy en día

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2 Retos
    
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-8.my-0
        p(data-aos="zoom-in-left") Todo cambio implica pasar por una serie de obstáculos que en términos humanos y organizacionales son complejos y motivo de crisis, sería extraño lo contrario; el reto elemental de toda empresa es continuar en el mercado de manera exitosa y en ese sentido, las organizaciones, de todos los tamaños enfrentan grandes desafíos comerciales, incluso de su existencia misma en el tiempo.
        .bg13.p-4.mb-2 
          .row.d-flex.align-items-center.justify-content-center
            .col-lg-12 
              p.mb-4.text-center.b #[b “Crecer duele, pero es necesario”]
              P.mb-0 Si bien, el enfoque de este material de estudio es técnico, no se puede dejar de lado las circunstancias mundiales, tales como la inestabilidad económica, crisis geopolítica, rezagos de la pandemia COVID-19 y otros componentes globales y nacionales que impactan a las organizaciones de todos los tamaños. Uno de esos componentes fuertes de inestabilidad, es el tránsito actual que el mundo productivo, económico y social está atravesando hacia la cuarta revolución industrial. Aun así, muchos empresarios, tienen la opinión de que ...
            .col-10.my-2.mx-2
          .bg-white-r.mb-0.p-2.mt-0.mx-0.fw-bold 
            p.mb-1 Sin tecnología y sin transformación digital, sus organizaciones seguirán como de costumbre, igual que debió pasarles a muchos empresarios a inicios del siglo XX, donde opinaron que sin energía podrían trabar como siempre. Según la Unión Sindical de CCOO (2016).
      .col-lg-4.col-9.my-3
        img.img-a.img-t(src='@/assets/curso/temas/tema5/img9.png', alt='')
    
    h3.mb-3 #[b Algunas cifras]
    p.mb-3 Los gerentes y CEO´s corporativos tienen entre otras misiones, avizorar el futuro de las organizaciones que presiden, en este sentido es importante tener en cuenta las experiencias de otras organizaciones, como se indica a continuación:     

    .row.mb-4
      .col-lg-12-sm-10.col-md-12.col-lg-12.m-auto    
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
          h5 Figura 12.
          span Cifras, Beneficios de la migración hacia servicios #[em cloud]
        .col-lg-8-sm-10.col-md-8.col-lg-8.m-auto
          img(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/i100.svg', alt='La figura representa los beneficios de la migración hacia la nube. Primero, un ahorro promedio del 31% en costos de infraestructura. Segundo, un 43% menos de incidentes de seguridad al año. Tercero, un aumento del 62% en la productividad del personal de TI. Cuarto, un aumento del 78% en la velocidad de implementar nuevos recursos informáticos.')
  
    h3.mb-4 Retos tecnológicos al migrar a la Nube

    p.mb-4 Los responsables de TI de las organizaciones que dan el paso hacia la modernización y transformación digital asumen retos que deben gestionar y sortear, por ello es importante estudiar y documentarse previamente ante los retos que se sortean en el desarrollo del plan de migración, entre ellos se encuentran:
  
  
    .mb-4.d-flex.justify-content-center
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-bluess
        h4.col.px-4.mb-0(data-aos="fade-right") Retos tecnológicos al migrar a la Nube

    .row.d-flex.align-items-center.justify-content-center(data-aos="zoom-in-left")
      .col-lg-6
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-a.img-t(src='@/assets/curso/temas/tema5/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--blanc
            .p-2
              h3.mt-2 Problemas de compatibilidad
              p Se presentan diversos tipos de infraestructura y sistemas operativos.
      .col-lg-6
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-a.img-t(src='@/assets/curso/temas/tema5/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--blanc
            .p-2
              h3.mt-2 Tiempo de inactividad e interrupción de servicios
              p Transiciones, pruebas y correcciones de errores, lo que supone una afectación en los servicios.
      .col-lg-6
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-a.img-t(src='@/assets/curso/temas/tema5/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--blanc
            .p-2
              h3.mt-2 Aplicaciones Ilegales
              p Las aplicaciones locales pueden estar instaladas de manera informal o irregular.
      .col-lg-6
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-a.img-t(src='@/assets/curso/temas/tema5/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--blanc
            .p-2
              h3.mt-2 Cronogramas ajustados, presupuestos limitados
              p Los proyectos tienen asignado unos recursos económicos y de tiempo. El nivel de estimados debe gestionarse lo mejor posible.
      .col-lg-6
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-a.img-t(src='@/assets/curso/temas/tema5/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--blanc
            .p-2
              h3.mb-0 Bases de datos complejas
              p Al analizar sus motores de datos y no contar con documentación el entendimiento técnico del diseño y arquitectura se vuelve complejo de entender y migrar.
      .col-lg-6
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-a.img-t(src='@/assets/curso/temas/tema5/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--blanc
            .p-2
              h3.mt-2 Impacto mínimo o nulo en las aplicaciones
              p La migración debe darse sin pérdida de datos (eliminaciones e inserciones).
      .col-lg-6
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-a.img-t(src='@/assets/curso/temas/tema5/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--blanc
            .p-2
              h3.mt-2 Habilidades especiales en la nube
              p El personal TI debe contar con conocimientos específicos necesarios para trabajar bajo plataformas #[em cloud.]
      .col-lg-6
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-a.img-t(src='@/assets/curso/temas/tema5/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--blanc
            .p-2
              h3.mb-2 Integrar los ecosistemas
              p Definir las estratégias y métodos para que estas plataformas convivan en el desarrollo de los procesos y de los planes administrativos y financieros.

    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.3 Seguridad en la nube 
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-8
        .tarjeta.color-primario.px-2.py-2.mb-4
          .row.justify-content-around.align-items-center
            .col-2.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/tema4/docker.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-2.mb-2.sm-mx-0.my-0
                  h3.mb-2 Seguridad en la Nube 
                  p.mb-0.peque Para este componente es necesario para la seguridad en la nube adoptar los puntos 11, 11.1, 11.1.1, 11.1.2, 11.2, 11.3, 11.4, 11.5 de la guía 12 del modelo MSPI del ministerio TIC, “5482_G12- Seguridad en la nube, el cual puede consultar en el enlace: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/vqyuNha0Rek" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link
        p.my-3.mb-2 De igual manera nos refiere a que un problema frecuente es la gestión de los datos en #[em Cloud], migraciones de datos sensibles sin aprobación o informado a las áreas necesarias para ello.
        .d-flex.align-items-center.justify-content-center
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/tema5/puntos.svg', alt='')
            p.ml-1-custom.mt-3.mb-3 Además de los controles tradicionales de seguridad de los datos (como controles de acceso o cifrado), hay otros dos pasos que ayudan a gestionar la migración no autorizada de datos a servicios #[em Cloud], que podrá consultarse al desplegar el siguiente recurso:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-4.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/tema5/img13.png") 

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-md-12.bg1404
        .row 
          .col-sm-12.col-md-12
            .bg-whit-r.mb-3.p-3.mt-4.mx-4.fw-bold.mb-0 
              p.mb-0 Monitorizar la existencia de grandes movimientos internos de datos con herramientas de monitorización de actividad de bases de datos (#[em DAM - Database Activity Monitoring]) y de monitorización de actividad en archivos (#[em FAM - File Activity Monitoring]).
            
        .col-lg-6.sm-8.col-md-4.lg-8 
        img.img-a.img-t.d-none.d-lg-block.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/img14.svg', alt='')
        img.img-a.img-t.imagen-mobile.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/img14.13.svg', alt='')
      
    p.mb-4 Monitorizar la migración de datos a #[em cloud] con filtros URL y herramientas #[em Data Loss Prevention]. En las implementaciones de #[em cloud] públicas y privadas, y a través de los diferentes modelos de servicio, es importante proteger los datos en tránsito. Esto incluye:

    .row.justify-content-center.align-items-center.mb-0
      .col-sm-12.col-lg-8.col-md-12
        .bg10
          .p-3.mb-4 
            ul.lista-ul--color.mx-2
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p.mb-0 Los datos moviéndose desde la infraestructura tradicional a los proveedores. 
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p.mb-0 #[em Cloud], incluyendo público/privado, interior/exterior y otras combinaciones.
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p.mb-0 Los datos migrando entre los proveedores de #[em cloud]. 
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p.mb-0 Los datos moviéndose entre instancias (u otros componentes) en un #[em cloud] determinado. Hay tres opciones.
        .col-lg-12.order-lg-12.order-12.mx-0
          LineaTiempoD.color-acento-botones
            p(numero="1" titulo="Cifrado cliente/aplicación") Los datos son cifrados en el extremo o en el servidor antes de enviarse por la red o ya están almacenados en un formato de cifrado adecuado. Esto incluye el cifrado en cliente local (basado en agente), por ejemplo, para archivos almacenados, o el cifrado integrado en aplicaciones.
            p(numero="2" titulo="Cifrado enlace/red") Técnicas de cifrado de red estándar incluyendo SSL21, VPNs22, y SSH23. Puede ser #[em hardware o software.] Es preferible extremo a extremo, pero puede no ser viable en todas las arquitecturas.
            p(numero="3" titulo="Cifrado basado en <em>proxy</em>") Los datos son transmitidos a un servidor dedicado o servidor #[em proxy,] el cual los cifra antes de enviarlos por la red. Es la opción escogida frecuentemente para la integración con aplicaciones #[em legacy] pero no es generalmente recomendable.
      .col-lg-4.col-md-12.col-9.order-lg-2.mb-lg-0.mb-8(data-aos="fade-left")
        img.img-a.img-t(src="@/assets/curso/temas/tema5/img15.png") 



</template>

<script>
export default {
  name: 'Tema5',
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
