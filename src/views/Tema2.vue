<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Servicio de almacenamiento en la nube 

    .row.mb-5(data-aos="zoom-in-left")
      .col-lg-12.md-lg-10.col-12
        .bgonza
          .row 
            .col-lg-8.md-lg-10.col-12
              .bg-whiter-r.mb-3.p-3.mt-4.mx-4.fw-bold.mb-0 
                p.mb-0.p-2 #[em Cloud Storage] (almacenamiento en la nube), uno de los servicios del #[em computing cloud,] es importante conocer el pasado para entender mejor el nivel de avance y mejoramiento que han traído los servicios en la nube. #[b Las maneras de salvar los datos han tenido múltiples tecnologías y medios físicos, como: ]
              ul.lista-ul--color.mx-4
                li.mb-0.pb-1 
                  i.fas.fa-chevron-right.mx-2
                  p.mb-0 Tarjetas perforadas con los mainframes. 
                li.mb-0.pb-1 
                  i.fas.fa-chevron-right.mx-2
                  p.mb-1 Unidades de almacenamiento de disco magnético como los antiguos y discos duros que incluso hoy día se usan. 
                li.mb-0.pb-1 
                  i.fas.fa-chevron-right.mx-2
                  p.mb-0 Unidades ópticas como DVD y sus formatos derivados. 
                li.mb-0.pb-1 
                  i.fas.fa-chevron-right.mx-2
                  p.mb-0 Unidad Flash USB o Pendrive, inventada por Fujio Masuoka para la empresa japonesa Toshiba (Electro personalizados, 2020), permite almacenamiento sin alimentación eléctrica permanente y sin uso de motores. 
                li.mb-0.pb-1 
                  i.fas.fa-chevron-right.mx-2
                  p.mb-0 Algunas actividades profesionales aún requieren usan almacenamiento en unidades externas o para gestionar la propia información personal.  
                li.mb-0.pb-1 
                  i.fas.fa-chevron-right.mx-2
                  p.mb-1 Los servicios de almacenamiento de archivos en línea han sido de los primeros servicios para internet. 
                li.mb-0.pb-1 
                  i.fas.fa-chevron-right.mx-2
                  p.mb-0 La nube es una funcionalidad evolucionada de los tradicionales sistemas ftp y otros para la transferencia y sincronización de archivos. 
                li.mb-0.pb-1 
                  i.fas.fa-chevron-right.mx-2
                  p.mb-3 Actualmente, las unidades de almacenamiento de estado sólido (a veces mal llamados como discos de estado sólido) han sido la evolución y mejoramiento de la tecnología inventada por Masuoka. Actualmente es la unidad de almacenamiento más eficiente.
            .col-sm-12.col-md-4.pt-5 
              img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/img1.png', alt='')
    p.mb-5(data-aos="zoom-in-left") #[b A continuación se detalla la gran innovación y cambio que trae el almacenamiento en la nube con los Cluster de almacenamiento. ]
    
    h4.mb-5(data-aos="zoom-in-left") Clúster de almacenamiento 
    p.mb-3(data-aos="zoom-in-left") La información que almacena un disco duro, se guarda en sus sectores, y cada grupo de sectores contiguos forma un clúster. Esto quiere decir que cada clúster es la cantidad de sectores que lo componen, veamos cómo:
    
    .row(data-aos="zoom-in")
      .col-lg-4.mb-5(data-aos="fade-left")
        figure.d-lg-block.d-none.my-3
          img(src='@/assets/curso/temas/tema2/img2.png', alt='imagen decorativa') 
      .col-lg-8.my-3
        AcordionA.activo(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Arquitectura de <em>Hardware</em>")
            .col-12.ps-6
              p.mb-0 Existe una ingeniería dedicada solo a la gestión del almacenamiento e implementación de modelos arquitectónicos para la gestión de capacidad para guardar información.
          .row(titulo="Proveedores en la nube")
            .col-12.ps-6
              p.mb-0 Se caracterizan por ser expertos en los servicios que ofrecen, el almacenamiento es quizás el más importante, pues es el responsable de conservar, gestionar y transportar el alma de los sistemas de información, los datos.     
          .row(titulo="Arreglos de servidores de almacenamiento")
            .col-12.ps-6
              p.mb-0 Son nodos responsables de guardar y tramitar los datos físicamente.
          .row(titulo="Volúmenes gigantes en <em>terabytes</em> (TB) o <em>petabytes</em> (PB)")
            .col-12.ps-6
              p.mb-0 Hemos trabajado con una unidad de almacenamiento en la computadora, sin embargo, los clusters, los cuales están en centros de datos de las compañías alrededor del mundo con muchas máquinas, cada una con muchas unidades de almacenamiento comportándose como una sola unidad de almacenamiento.
          .row(titulo="Nodos de datos")
            .col-12.ps-6
              p.mb-0 Garantizan la disponibilidad del servicio a pesar de fallos e incluso desastres o ataques militares.
          .row(titulo="Arquitecturas de nodos")
            .col-12.ps-6
              p.mb-0 Emplea los métodos y algoritmos que mejor consideren, este aspecto es transparente para los usuarios, a excepción de algunos casos donde un experto de la organización requiera gestionar las unidades de almacenamiento para optimizar tablas y particiones de datos, sin embargo, estos casos no son frecuentes.
                                                
      P.mb-5 Ahora, en la figura 4 se detalla la arquitectura de interacción clúster donde muestra cómo se conecta el usuario final hacia el frontend y como este usa el bus de comunicación para utilizar recursos adicionales y tener almacenamientos de información considerables:
    
    .row.mb-5
      .col-lg-12-sm-10.col-md-12.col-lg-12.m-auto    
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
          h5 Figura 4.
          span Ejemplo Arquitectura de clúster e interactividad con los demás sistemas
        img.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/img3.png', alt='La figura representa un ejemplo de arquitectura de clúster e interactividad con los demás sistemas. Inicia con los servidores de servicio, que son los recursos computacionales. Estos están conectados mediante un bus de comunicaciones que pasan los datos por el Nodo administrador de almacenamiento, que se dividen en tres servidores de almacenamiento, cada uno con sus respectivos clúster. Posteriormente, atraviesan el nodo de gestión y autenticación etapa conocida como “Frontend” para legar a una conexión segura hacia los usuarios finales.')
        img.imagen-mobile(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/img3.12.png', alt='La figura representa un ejemplo de arquitectura de clúster e interactividad con los demás sistemas. Inicia con los servidores de servicio, que son los recursos computacionales. Estos están conectados mediante un bus de comunicaciones que pasan los datos por el Nodo administrador de almacenamiento, que se dividen en tres servidores de almacenamiento, cada uno con sus respectivos clúster. Posteriormente, atraviesan el nodo de gestión y autenticación etapa conocida como “Frontend” para legar a una conexión segura hacia los usuarios finales.')
  
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Centros de datos de AWS 
                  p.mb-0 Estimado aprendiz, para conocer más sobre centros de datos (data centers) de AWS ingresa al siguiente enlace: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://aws.amazon.com/es/compliance/data-center/controls" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Volumen elástico

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-4
        p.mb-3 El almacenamiento elástico es la característica que permite adaptarse y escalar según las necesidades especificadas por quien configura el sistema o por el mismo sistema según los requerimientos de uso.
        .row.justify-content-center.align-items-center
          .col-lg-12
            .tarjeta.bg14.p-3.mb-4.mt-2
              .row.d-flex.justify-content-around.align-items-center
                .col-sm-auto
                  img.arribaa.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/temas/tema2/img5.svg")
                .col-sm-12.col-lg-10
                  .row.justify-content-between.align-items-center
                    .col-sm-12.col-md-12.col-lg-12.mb-0
                      p.mb-0.my-2.mx-2 La elasticidad es un concepto que se aplica a varios servicios en la nube, principalmente para el procesador, memoria RAM, tipo de almacenamiento (HDD o SSD), alta o media disponibilidad, entre otros.
      .col-md-9.col-lg-4.col-9
        img.img-a.img-t.mb-4(src="@/assets/curso/temas/tema2/img5.1.png", alt="alt").img100.m-auto
      .col-sm-12.col-md-12.col-lg-4
        .bg100.p-4.mb-4(data-aos="fade-left") 
            .row.d-flex
              .col-lg-12
                p.mb-1.my-2.d-flex Desde el punto de vista de Hardware, las marcas han desarrollado dispositivos que gestionan estas asignaciones de almacenamiento, es decir, si una empresa decide implementar su propia nube, es relativamente fácil implementar esta característica a los recursos de sus usuarios o servicios. 
                .row.justify-content.align-items
                  .col-sm-4.col-md-3.my-2
                    img.end.d-none.d-lg-block(src='@/assets/curso/temas/tema2/img5.2.svg', alt='')


    p.mb-4 Estos dispositivos son usados en los servidores de almacenamiento que vienen provistos de su propio #[em software] para simplificar el proceso, además de administrar la elasticidad de almacenamiento ya sea por servicios o por usuarios, tiene la posibilidad de ampliar capacidad global adicionando más unidades de almacenamiento. A continuación en la figura 5 se puede ver un ejemplo de un sistema de almacenamiento elástico creado por #[em IBM:]

    .row.mb-2
      .col-lg-10-sm-10.col-md-12.col-lg-12.m-auto    
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-left")
          h5 Figura 5.
          span Dispositivos de gestion de almacenamiento elastico
    .row.align-items-center.justify-content-center
      .col-lg-12.md-lg-10.col-12
        .caja 
          .row.align-items-center.justify-content-center
            .col-lg-2.md-lg-10.col-12   
              img.my-4.img-a.img-t(src='@/assets/curso/temas/tema2/serv.png', alt='La imagen representa  un dispositivo de hardware que le permite implementar IBM Storage Scale  en miles de nodos con un rendimiento de TB/s, baja latencia y decenas de millones de IOP por nodo.')
          .row.align-items-center.justify-content-center 
            .col-lg-auto.md-lg-10.col-12 
              p.mx-3 Nota. https://www.ibm.com/products/elastic-storage-system
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Copia de seguridad
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-md-9.col-9.my-3
        img.img-a.img-t(src='@/assets/curso/temas/tema2/img7.png', alt='')
      .col-lg-9.my-3
        p.mb-0(data-aos="zoom-in-left") Una de las ventajas de la computación en la nube, ha sido la seguridad, se presentan riesgos que deben gestionarse, las organizaciones pueden advertir riesgos en los datos y tener control físico de los datos.
        p.mb-3 La disponibilidad de los datos depende de contratos y pagos a terceros, riesgos cibernéticos, recuperación de daños en los datos, etc.
        p.mb-3 Las empresas van aumentando su volumen de información y muchas veces poco estructurada y aparentemente caótica, lo que hace más complejo gestionar las copias de respaldo.
        .bg101.p-4.mb-1 
          .row.d-flex.align-items-center.justify-content
            .col-lg-12 Para realizar los respaldos existen dos opciones elementales: utilizar un proveedor en la nube con las instancias para este fin o realizar desde la empresa misma una copia de seguridad y disponerla en una ubicación fuera de las instalaciones.
        .d-flex.align-items-center.justify-content-center
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/tema2/img7.1.svg', alt='')
            p.ml-1-custom.mt-3 Como todo en la nube, existen proveedores especializados en la gestión de copias de seguridad; las empresas prometen las siguientes ventajas:
    
    .row
      .col-sm-6.col-lg-3.mb-4.mb-lg-4
        .tarjeta--boton.color-primario.bg11111.p-4
          .row.justify-content.mb-4
            .col-5
              figure
                img(src='@/assets/curso/temas/tema2/cumpli.svg', alt='Texto que describa la imagen')

          h4.mb-3.mt-3 Cumplimiento 
          p Los Backups se almacenan fuera de las instalaciones y se almacenan en conjuntos de copias de seguridad.
      
      .col-sm-6.col-lg-3.mb-4.mb-lg-4
        .tarjeta--boton.color-primario.bg11111.p-4
          .row.justify-content.mb-4
            .col-5
              figure
                img(src='@/assets/curso/temas/tema2/esca.svg', alt='Texto que describa la imagen')

          h4.mb-3.mt-3 Escalabilidad
          p Sin importar el volumen de datos, el proveedor escala capacidad de ser necesario. 

      .col-sm-6.col-lg-3.mb-4.mb-lg-4
        .tarjeta--boton.color-primario.bg11111.p-4
          .row.justify-content.mb-4
            .col-5
              figure
                img(src='@/assets/curso/temas/tema2/resi.svg', alt='Texto que describa la imagen')

          h4.mb-3.mt-3 Resiliencia
          p Lo que significa que posee la posibilidad de tener varias copias, adicional la replicación de nodos en diferentes regiones. 
    
      .col-sm-6.col-lg-3.mb-4.mb-lg-4
        .tarjeta--boton.color-primario.bg11111.p-4
          .row.justify-content.mb-4
            .col-5
              figure
                img(src='@/assets/curso/temas/tema2/segu.svg', alt='Texto que describa la imagen')

          h4.mb-3.mt-3 Seguridad
          p  La información almacenada cuenta con cifrado en tránsito, además se realizan solicitudes de autenticaciones para evitar accesos indebidos. 
    
    p.mb-3 Para poder asegurar estas promesas de servicios se requiere tener una Arquitectura Backup la cual cuenta con las siguientes características:
    h4.mb-3 Arquitectura #[em Backups] en la nube
    p.mb-3 Los elementos de información más críticos de las organizaciones y la manera en cómo se llevan a cabo estas copias son:
    
    TabsA.color-acento-botones.mb-5
      .tarjeta.bg145.p-4(titulo="Bases de datos")
        h4.mt-2 Bases de datos
        .row 
          .col-sm-12.col-md-8
            p.mt-5  Se puede realizar conexiones directas a las bases de datos para extraer toda la información. 
          .col-sm-12.col-md-4
            img.img-t.mx-3.my-0(src='@/assets/curso/temas/tema2/img9.1.svg')
      .tarjeta.bg145.p-4(titulo="Recursos de terceros")
        h4.mt-2 Recursos de terceros
        .row
          .col-sm-12.col-md-8
            p.mt-4 En el mercado, existen muchas herramientas como plugins y complementos que facilitan la gestión y automatización de los backups. Es importante que los servicios de copias de respaldo permitan el uso de estos gestores. 
          .col-sm-12.col-md-4
            img.img-t.mx-3.my-0(src='@/assets/curso/temas/tema2/img9.svg')
      .tarjeta.bg145.p-4(titulo="Frecuencia")
        h4.mt-2 Frecuencia
        .row 
          .col-sm-12.col-md-8
            p.mt-5 Según los planes y diseños, se pueden configurar dispositivos software que sincroniza archivos al sistema de respaldo.
          .col-sm-12.col-md-4
            img.img-t.mx-3.my-0(src='@/assets/curso/temas/tema2/img9.2.svg')
    
    P.mb-4 En la figura 6 se ilustra la arquitectura de copias de respaldo #[em (Backup)]:
    
    .row.mb-2
      .col-lg-12.md-lg-10.col-12   
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
          h5 Figura 6.
          span Arquitectura de referencia copias de respaldo
    .row
      .col-lg-6.md-lg-10.col-12
        img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/fig6.png' ,alt='La figura representa la arquitectura de referencia para copias de respaldo. Inicia con "Customer Premises" y pasa por "SAN" y "NAS". Luego, va hacia "Third Party Backup", "Oracle Storage Gateway" y la Base de Datos. Posteriormente, se conecta a través de "Public Internet" y "FastConnect”, y finalmente entra en el "Cloud" (nube) para almacenar copias de respaldo utilizando "Public Object Storage" y "Access Management" (gestión de acceso).')
    
      .col-lg-6.md-lg-10.col-12
        .cajon 
          p.mb-1.mx-2.p-3 La arquitectura anterior 
            span.blanco es un ejemplo implementado por #[em Oracle] con su servicio #[em Oracle Cloud Infrastructure].
            | Cada profesional en TI o empresa determina la topología y flujos para la gestión de copias de respaldo. En este 
            span.blanco caso, se establece el almacenamiento bajo el dominio de disponibilidad, que no es más que la localización de los centros de datos donde se encuentran los nodos que contienen las unidades de almacenamiento.
          p.mb-2.mx-4 Luego se encuentra el almacenamiento de objetos, corresponde a la plataforma de almacenamiento de alto rendimiento con características elásticas. Cuenta con gestión de identidad y acceso que controla el ingreso a los recursos #[em cloud]. Controla niveles de accesos según permisos asignados a los usuarios.  
          p.mb-3.mx-4 La conexión veloz, es el puente de comunicación entre la infraestructura del dominio de disponibilidad con los equipos locales #[em (On-premises)] de las organizaciones a través de plataformas del servicio, en este ejemplo puede ser con las puertas de enlace de #[em Oracle cloud], la herramienta de un tercero que gestione #[em backups] y sincronización de archivos locales, y/o conexión a las bases de datos. #[em (Oracle, s.f.)]  
            .col-lg-6.md-lg-10.col-12 
            img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/abaj.png',)
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Recuperación en la nube
    
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-12.col-md-lg-10.col-12
        .cajobb
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-4
              img(alt="" src="@/assets/curso/temas/tema2/img11.png")
            .col-lg-8.col-md-lg-10.col-12.p-4
              p.text-white.mx-3  Como complemento a la copia de respaldo, la recuperación en la nube se resume en el flujo contrario al proceso del #[em backup.] Se trata entonces de una acción o maniobra de contingencia como respuesta a un suceso ocurrido ya sea por pérdida de datos, o daños en los mismos y se requiere la restauración total o parcial de algunos dominios de datos.
  
    p.mb-4 La recuperación de datos podría explicarse como regresar en el tiempo y restaurar las cosas tal como estaban en un momento dado cuando se toma la foto de los datos para guardar #[b #[em “snapshot”.]]
          
    .row.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-12
        .bgonza
          .row.mx-2 
            .col-sm-12.col-md-12.col-lg-12.my-2
              .bg-whiter-r.mb-4.p-3.mt-4.mx-4.mb-0 
                p.mb-0.mx-1 Los snapshots (foto o imagen en inglés) son instantáneas del estado actual de un Servidor #[em Cloud] y sirven como punto de restauración de una máquina virtual en un momento dado.
            .col-sm-12.col-md-12.col-lg-8
              ul.lista-ul--color.mx-4
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Es un concepto para el respaldo y restauración del sistema, 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Tiene diferencias con las copias de respaldo o #[em Backups] 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Como su nombre lo indica, “instantáneas” en español, toman una "imagen" en un instante de un servidor (incluidos sus archivos, aplicaciones y configuraciones) 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Por lo general, los #[em snapshot] conservan un punto en el estado del tiempo, sin tener que mover o copiar datos existentes en absoluto.  
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Es mejor, tener una imagen de un punto en el tiempo para hacer una copia de seguridad que hacer un #[em backup] del sistema y los datos en vivo. 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Gestionar archivos abiertos y aplicaciones activas que cambian datos. 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 En algunos sistemas, los #[em snapshot] también se replican en un sistema redundante en otra ubicación o en un servicio #[em cloud.] (#[em Demlow], 2020) 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Al usar una imagen para restaurar un servidor, éste volverá al estado en el que se encontraba cuando se tomó el #[em snapshot.] 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Debido a que los #[em snapshot] no hacen una copia de todos los datos, son eficientes en relación al espacio y velocidad del proceso. 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 A medida que los datos y configuración en el sistema cambian con el uso normal, la imagen también debe conservar el contenido del #[em snapshot] original, de esa manera se tendrán diferentes puntos de restauración en el tiempo.
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-1 Las imágenes a nivel de VM (Máquina Virtual) ofrece protección contra #[em ransomware, malware], eliminación accidental de archivos u otras vulnerabilidades a los sistemas. 
                li.mb-0.pb-0 
                  i.fas.fa-chevron-right
                  p.mb-4 Los #[em snapshot] pueden recuperar máquinas virtuales completas o archivos individuales. 
            .col-lg-4.col-md-10.col-12.pt-2 
              img.img-a.img-t.my-0.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/img12.png', alt='')


    p.mb-3 #[b ¿Qué elegir para recuperar el sistema ante caídas o pérdidas, #[em snapshot o backup?]]
    p.mb-3 Se tiene en cuenta que los snapshots no son verdaderas copias de seguridad, pero son eficientes y funcionales para algunos casos. Por ejemplo, una imagen se puede usar como una protección rápida en caso de necesitar revertir una actualización, una prueba o cualquier operación que pueda considerarse riesgosa.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .tarjeta.bg10.p-3.mb-3.mt-0
              .row.justify-content-around.align-items-center
                .col-sm-12.col-md-12
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-5
                      p.mb-0 Ahora bien, los backup, por otro lado, al hacer la recuperación a partir de copias de seguridad pierden parte de la inmediatez de la restauración, pues suelen ser procesos más robustos en términos de almacenamiento, es ideal para esquemas de almacenamiento de archivos a largo plazo. Además, según el tipo de medio utilizado como destino, las copias de seguridad permiten dividir y catalogar los datos de los respaldos de los eventos de tiempo de ejecución. Esto actúa como una capa adicional de protección y aislamiento de algunas amenazas de malware en el mundo actual. (Demlow, 2020)
      .col-sm-12.col-md-12.col-lg-4.col-9
        img.img-a.img-t.mb-3(src="@/assets/curso/temas/tema2/img13.1.png", alt="alt").img100.m-auto
      .col-sm-12.col-md-12.col-lg-4
        .bg14.p-4.mb-4(data-aos="fade-left") 
            .row
              .col-lg-12
                p.mb-1 En conclusión, si bien los Snapshot son más rápidos y ocupan menos recursos, los backups no deberían de dejarse de implementar, en caso de presentarse un incidente, depende de la gravedad, es posible que las imágenes disponibles no logren recuperar algunos daños o pérdidas de datos; en caso tal de que no se tengan los resultados esperados, el Backup es la segunda opción, es más robusto, pero más seguro. Cada organización puede elegir una de las dos opciones de restauración, o si desea mayor respaldo pueden implementar las dos formas para recuperar sistemas e información, pues ambas conviven sin interferencia. 
                .align-self-end

    

</template>

<script>
export default {
  name: 'Tema2',
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
