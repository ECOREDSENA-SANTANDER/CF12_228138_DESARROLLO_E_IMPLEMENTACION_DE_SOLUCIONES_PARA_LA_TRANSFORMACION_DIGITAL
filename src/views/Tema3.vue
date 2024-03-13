<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Software de virtualización
    
    .row.align-items-center.justify-content-center.mb-1(data-aos="zoom-in-left")
      .col-lg-8.my-3
        p.mb-3 La virtualización es un tema base, sobre el que se fundamenta la computación en la nube y los sistemas actuales de despliegue de aplicaciones y servicios en la nube.
        .bg13.p-4.mb-5(data-aos="fade-left") 
          p.mb-0 Es necesario conocer sobre las generalidades de la virtualización, los diferentes tipos que hay y que son más comunes en el uso de acuerdo con sus características, un listado de algunas herramientas para realizar un proceso de virtualización de servidores y un ejemplo detallado para la realización de una virtualización de un sistema operativo Linux corriendo en una máquina #[em Windows.]
          .row.align-items-center.justify-content-center.mb-4
            .col-lg-4.mx-0
                img.img-a.img-t.px-1.py-2.mt-2(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img1.png', alt='')
            .col-lg-4.mx-0
                img.img-a.img-t.px-1.py-2.mt-2(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img1.1.png', alt='')
            .col-lg-4.mx-0
                img.img-a.img-t.px-1.py-2.mt-2(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img1.2.png', alt='')
                
      .col-lg-4.my-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img1.3.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-1.col-12
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema3/img2.svg" alt="")
      .col-lg-11.col-12
          p.mb-0 La virtualización es el proceso mediante el cual es posible crear una representación de elementos físicos como servidores, sistemas de almacenamiento, redes e incluso aplicaciones mediante software de modo que se puedan reducir los costos asociados a infraestructura de TI, al tiempo que se mejora la eficiencia en el uso de estos recursos (VMware, 2011).
    
    .row.mb-5
      .col-lg-12-sm-10.col-md-12.col-lg-8.m-auto    
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
          h5 Figura 7.
          span Esquema de virtualizacion
        img(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img3.png', alt='')

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Generalidades de la Virtualización
    
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-8.my-3
        p.mb-3 Normalmente un conjunto de recursos infraestructura como discos, memorias, procesadores, etc. que están presentes en un equipo o grupo de servidores son ocupados únicamente por el sistema operativo y las aplicaciones que se ejecutan sobre este, y no siempre se usa todo su potencial al 100% provocando desperdicios en el uso de recursos, con la virtualización podemos hacer que estos recursos ejecuten una o varias máquinas virtuales al mismo tiempo y cada una de estas máquinas podrá ejecutar su propio conjunto de aplicaciones con sistemas operativos totalmente independientes como se representa en la figura 7.
        .bg10.p-4.mb-0(data-aos="fade-left") 
          p.mb-0 Una máquina virtual (MV) es un software especial que funciona como un contenedor de #[em software] donde se incluye un sistema operativo y aplicaciones que funcionan totalmente independientes. De esta forma un equipo puede tener instaladas varias máquinas virtuales cada una de las cuales se ejecutan independientemente en un mismo equipo que sirve como #[em host.]
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img4.png', alt='')
    
    h3.mb-3 Ventajas al implementar esquemas de virtualizacion

    .row.d-flex.justify-content-between
      .col-sm-12.col-md-6.mt-5
        .bg2.my-4.he-4-cus.px-4.pt-3
          img.w-auto-cus.mt-5(src='@/assets/curso/temas/tema3/img5.svg', alt='')
          h4.col.px-4.mb-0.text-white.bg-img-blue Aumento de rendimiento
          p.col.px-4.mb-0.text-white.bg-img-blue Se puede asignar más o menos recursos dinámicamente a una máquina dependiendo de la utilidad real requerida.
      .col-sm-12.col-md-6.mt-5
        .bg2.my-4.he-4-cus.px-4.pt-3
          img.w-auto-cus.mt-5(src='@/assets/curso/temas/tema3/img5.1.svg', alt='')
          h4.col.px-4.mb-0.text-white.bg-img-blue Automatización de operaciones
          p.col.px-4.mb-0.text-white.bg-img-blue Reducción en la inversión de capital y gastos operativos asociados a la infraestructura de TI. Reducción de tiempos de inactividad de los recursos.

    h3.mb-3 Tipos de virtualización
    p.mb-3 Existen varias formas de virtualizar, pero el común denominador de la virtualización es el aprovechamiento de los recursos de Hardware y Software, para que estos recursos puedan ser aprovechados de forma flexible por parte de los usuarios o clientes. 
    p.mb-5 Despliegue el recurso que se muestra a continuación en donde se describen los tipos de virtualización. 
    
    h3.mb-5 Virtualización de servidores
    
    .row.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-6.bg1444
        .row 
          .col-sm-12.col-md-8
            .mb-3.p-0.mt-4.mx-4.fw-bold.mb-2 
              p.mb-0 Este tipo de virtualización tiene ventajas clave:
            ul.lista-ul--color.mx-4
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Mayor disponibilidad de los servidores 
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Reducción en costes operativos
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Eliminación de la complejidad de los servidores 
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Mejora en el rendimiento de las aplicaciones
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Distribución más rápida de las cargas de trabajo.
          .col-sm-12.col-md-3.pt-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img6.svg', alt='')
      .col-lg-6.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img6.1.png', alt='')
    
    p.mb-3 La virtualización de servidores es una implementación en la que un servidor físico (host) se divide mediante software en varios servidores virtuales únicos y aislados, los cuales se visualizan al cliente como servidores independientes.
    p.mb-3 Se clasifica en dos tipos, estos son:
    
    .row.mb-5(data-aos="zoom-in-left")
      .col-sm-10.col-md-6.bg1444
          .col-sm-10.col-md-11
            .mb-3.p-0.mt-4.mx-4.my-4.fw-bold.mb-2 
            h3.mb-3 Virtualización completa
            p.mb-0 En este tipo de virtualización se usa el hipervisor, el cual es un software que se encarga de la supervisión y gestión de los recursos físicos y de adicionalmente se encarga de independizar cada servidor virtual. Sin embargo, el hipervisor requiere recursos para hacer el procesamiento correspondiente lo que puede afectar el rendimiento general del servidor.
          .col-sm-12.col-md-3.pt-5 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img7.png', alt='')
          
      .col-sm-12.col-md-6.bg1444
          .col-sm-12.col-md-11
            .mb-3.p-0.mt-6.mx-4.fw-bold.mb-2 
            h3.mb-3 Paravirtualización
            p.mb-0 En este esquema cada sistema operativo de los servidores virtuales tiene conocimiento de la existencia de los otros por lo cual el hipervisor se libera un poco de la carga para gestionar los sistemas operativos, adicionalmente se tiene ventajas como la posibilidad de crear copias de seguridad más fácilmente, migraciones más rápidas, mejor utilización del sistema y ahorro de energía. No todos los sistemas operativos soportan paravirtualización y en algunos casos se pueden presentar problemas de compatibilidad de hardware.
          .col-sm-12.col-md-3.pt-4 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img7.1.png', alt='')
    
    h3.mb-3 Virtualización a nivel de sistema operativo o basada en contenedores
    
    .row.d-flex.align-items-center.justify-content(data-aos="zoom-in-left").mx-5
        .col-lg-4.he-7-cus
          img.img-a.img-t(src='@/assets/curso/temas/tema3/img8.png', alt='')
        .col-lg-8.bg19.he-7-cus.ml-neg-cus.align-items-center.justify-content-center.my-3
          p(data-aos="zoom-in-left").mb-5.align-items-center.justify-content-center.img-center-cus Es este esquema de virtualización no se usa Hipervisor, sino que es el sistema operativo del servidor físico quien se encarga de las actividades de virtualización, sin embargo, en este esquema los servidores virtuales deben ejecutar el mismo sistema operativo del host. 
    
    
    h3.mb-3 Virtualización de red

    .row.align-items-center.justify-content.mb-4
      .col-lg-6.my-3
        img.img-a.img-t(src='@/assets/curso/temas/tema3/img9.png', alt='')
      .col-lg-6.my-3
        p.mb-0(data-aos="zoom-in-left") Consisten en crear redes virtuales independientes y separadas mediante el uso de #[em software] sobre redes físicas. Este tipo de virtualización se puede presentar de dos maneras: 
        .col-lg-12
          .tarjeta-avatar-b.mb-0.mx-5.my-2(data-aos="fade-right")
            .tarjeta-avatar-b__img(style="min-width: 10%; left: -5%")
              img(src='@/assets/curso/temas/tema3/img14.1.svg' alt='AvatarTop')
            .tarjeta.bg14.p-4
              h4.mb-2 Virtualización externa
              p.mb-0 La cual consiste en la combinación de varias redes completas o partes en una unidad virtual.
              .col-lg-12
          .tarjeta-avatar-b.mb-0.mx-5.my-2(data-aos="fade-right")
            .tarjeta-avatar-b__img(style="min-width: 10%; left: -5%")
              img(src='@/assets/curso/temas/tema3/img14.1.svg' alt='AvatarTop')
            .tarjeta.bg14.p-4
              h4.mb-2 Virtualización interna
              p.mb-0 La cual hace uso de contenedores de software para proveer la funcionalidad de una unidad de red física.  Algunos ejemplos de aplicaciones y enfoque de virtualización de red con: VPN, VLAN, SDN.
      
    h3.mb-3 Virtualización de escritorios 
    
    .row.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-6.bg1444
        .row 
          .col-lg-12.sm-12.col-md-12
            .mb-3.p-0.mt-4.mx-4.fw-bold.mb-2 
              p.mb-3 Estas máquinas de escritorio virtuales se entregan a los usuarios de forma remota a través de una red pública o privada, los usuarios no necesitan descargar la máquina virtual.
              p.mb-3 Empleada por muchas empresas en la actualidad y también se conoce como VDI por sus siglas en inglés (infraestructura de escritorios virtuales), en este esquema se dispone de un conjunto de servidores o data centers los cuales publican varias páginas virtuales cada una con su propio sistema operativo, aplicaciones y servicios con su propio entorno de escritorio. 
              p.mb-3 La máquina virtual se ejecuta en los servidores y no en el equipo del usuario. Es decir, la carga de procesamiento, almacenamiento y demás capacidades de gestión desde el servidor remoto.
              p.mb-3 Reciben la imagen de sus escritorios desde los servidores de forma remota. 
      .col-lg-6.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img10.png', alt='')
    
    h3.mb-3 Herramientas de virtualización de servidores
    p.mb-3 En el mercado existen muchas herramientas de software creadas para facilitar el proceso de virtualización de servidores, a continuación podra ver algunas de estas herramientas para entornos domésticos y pequeñas empresas junto con cada una de sus características principales.
    
    LineaTiempoD.color-acento-botones
      .row(numero="1" titulo="VMware")
        .col-md-6.mb-4.mb-md-0
        p.mb-4.mx-4 VMware
        ul.lista-ul--color.mx-4
          li.mb-0.pb-0 
            i.fas.fa-chevron-right
            p Gran cantidad de paquetes de software disponibles para virtualización.
          li.mb-0 
            i.fas.fa-chevron-right
            p Tiene soluciones libres y de pago.
          li.mb-0 
            i.fas.fa-chevron-right
            p Compatibilidad con la tecnología Intel VT-x, la cual le permite ejecutar máquinas virtuales en forma nativa de la CPU host cuando esta tiene procesadores Intel.
          
      .row(numero="2" titulo="Oracle VM VirtualBox")
        .col-md-6.mb-4.mb-md-0
        p.mb-4.mx-4 Oracle VM VirtualBox
        ul.lista-ul--color.mx-4
          li.mb-0.pb-0 
            i.fas.fa-chevron-right
            p Software gratuito descargable desde su sitio web oficial.
          li.mb-0 
            i.fas.fa-chevron-right
            p Posibilidad de instalar máquinas Linux, MacOS y Windows en la gran mayoría de versiones de forma gratuita.
          li.mb-0 
            i.fas.fa-chevron-right
            p Soporta virtualización en tecnologías Intel y AMD.

      .row(numero="3" titulo="Microsoft Hyper-V")
        .col-md-6.mb-4.mb-md-0
        p.mb-4.mx-4 Microsoft Hyper-V
        ul.lista-ul--color.mx-4
          li.mb-0.pb-0 
            i.fas.fa-chevron-right
            p Disponible en forma nativa en S.O Windows en versión pro y server. Es decir, si se tiene este tipo de versiones estará disponible de forma gratuita y no requiere de instalación de software externo al sistema.
          li.mb-0 
            i.fas.fa-chevron-right
            p Sirve para virtualizar sistemas Windows y otros como Linux y FreeBSD.
          li.mb-0 
            i.fas.fa-chevron-right
            p Soporta virtualización en tecnologías Intel y AMD

      .row(numero="4" titulo="Qemu")
        .col-md-6.mb-4.mb-md-0
        p.mb-4.mx-4 Qemu
        ul.lista-ul--color.mx-4
          li.mb-0.pb-0 
            i.fas.fa-chevron-right
            p Es software libre y está disponible para diferentes tipos de sistemas operativos.
          li.mb-0 
            i.fas.fa-chevron-right
            p No dispone de GUI pero se puede instalar mediante una extensión para en Mac y en Windows.
          li.mb-0 
            i.fas.fa-chevron-right
            p Soporta virtualización en tecnologías Intel y AMD

      .row(numero="5" titulo="Parallels")
        .col-md-6.mb-4.mb-md-0
        p.mb-0.mx-4 Parallels
        ul.lista-ul--color.mx-4
          li.mb-0.pb-0 
            i.fas.fa-chevron-right
            p Hypervisor para sistemas operativos MacOS
          li.mb-0 
            i.fas.fa-chevron-right
            p Permite ejecutar máquinas virtuales de otros sistemas sobre la plataforma de Apple.
          li.mb-0 
            i.fas.fa-chevron-right
            p Compatibilidad con la tecnología Intel VT-x.
          li.mb-0 
            i.fas.fa-chevron-right
            p Permite traspaso de archivos, carpetas compartidas y comunicación de todo tipo de dispositivos de E/S entre la máquina host y las virtuales
          li.mb-0 
            i.fas.fa-chevron-right
            p Se debe pagar licencia para su uso.
    p.mb-5
    h3.mb-3 Ejemplo de virtualización
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-8
        p En el siguiente recurso, podrá consultar un ejemplo paso a paso de cómo realizar un proceso de virtualización de una máquina con sistema operativo #[em Linux,] en una máquina con sistema operativo #[em Windows.] Para este ejemplo se utilizará una máquina host con sistema operativo #[em Windows] 10 #[em Home] de 64 #[em bits] y se virtualiza y ejecutará una máquina virtual con sistema operativo #[em Ubuntu desktop] 20.04 por medio de la herramienta #[em Oracle Virtual Box.]
        .tarjeta.color-primario.px-3.py-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema3/img12.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video tutorial 
                  p.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf" target="_blank")
                    span Ver video
                    i.fas.fa-video
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/tema3/img12.1.png")                

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Máquinas virtuales
    
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img13.png', alt='')
      .col-lg-8.my-3
        p.bg13.p-4.mb-3(data-aos="fade-left") Las máquinas virtuales son un sistema operativo completo funcionando de manera aislada dentro de otro sistema operativo anfitrión (Alarcón, 2018), de igual manera debe existir un componente de infraestructura de tipo hardware que soporte todo lo anterior que en últimas es el servidor o equipo donde se haga el desarrollo y creación de la máquina virtual o si se trata del despliegue y puesta en producción final de la aplicación puede referirse a un proveedor que suministra el hardware necesario que soportará la máquina virtual como Azure, Google Cloud, AWS, Digital Ocean entre otras, como nos lo muestra la siguiente imagen.
        .row.mb-5
          .col-lg-12-sm-10.col-md-12.col-lg-12.m-auto    
            .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
              h5 Figura 8.
              span Funcionamiento de una maquina virtual
            img(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img13.1.png', alt='')

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3 Características

    p(data-aos="zoom-in-left").mb-3 Existen ventajas que son características del proceso de virtualización, permitiendo de esta forma obtener mejores y mayores recursos, sistemas de soporte, la migración de datos e información, así como una alta disponibilidad de los recursos, a continuación, encontrará una breve descripción de estas:
    TabsB.color-acento-botones.mb-5.bg194(data-aos="zoom-in-left")
      .py-4.py-md-5(titulo="Almacenamiento" :icono="require('@/assets/curso/temas/tema3/almacenamiento.svg')")
        .row
          .col-md-7.mb-4.mx-4.my-0
            h4 Almacenamiento
            p Es la agrupación de todos los recursos de almacenamiento lógico y físico, de tal forma que la gestión de dispositivos de almacenamiento en red se simplifica al reunirlos en un único almacén que es administrado desde un lugar central. Las necesidades de almacenamiento pueden variar mucho de una empresa a otra, ya que algunas requieren perdurabilidad de los sistemas, otras precisan lidiar con distintos dispositivos, potencia en la nube, etc.
            p.ml-1-custom.mt-3  Gestionar distintos dispositivos de almacenamiento puede resultar una tarea muy compleja, pero la virtualización del almacenamiento ha llegado para poner solución a este problema.        
            
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/almacenamiento2.png', alt='Texto que describa la imagen')
              
      .py-4.py-md-5(titulo="Redundancia" :icono="require('@/assets/curso/temas/tema3/redundancia.svg')")
        .row
          .col-md-7.mb-4.mx-4.my-0
            h4 Redundancia
            p Vamos a imaginar que queremos crear un sistema disponible el 99,99…% del tiempo, bien porque es un servicio vital para la empresa, bien porque cualquier pérdida o corte, puede provocar pérdidas económicas o de cualquier otro tipo. ¿Qué hacemos entonces?
            p.mb-3 Se suele configurar lo que se denomina un «sistema redundante», es decir dos o más sistemas configurados de forma que uno de ellos sea el que está en funcionamiento, y en el caso en que deje de funcionar por cualquier motivo, se active otro de los sistemas que hasta ese momento estaba «en espera» o «inactivo» tan rápidamente como sea posible. Mediante este sistema, incluso en el peor de los casos (la rotura de un disco duro, un desbordamiento de memoria que mate un proceso vital, o incluso que alguien le pegue una patada al cable) puede seguir funcionando gracias al siguiente equipo hasta entonces «dormido». 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/redundancia2.png', alt='Texto que describa la imagen')
            
      .py-4.py-md-5(titulo="Migración" :icono="require('@/assets/curso/temas/tema3/migracion.svg')")
        .row
          .col-md-7.mb-4.mx-4.my-0
            h4 Migración
            p Describe el proceso de mover una máquina virtual de un host a otro. Esto es posible porque los invitados están corriendo en un entorno virtualizado en lugar de directamente sobre el hardware. Hay dos maneras de migrar una máquina virtual: en vivo y fuera de línea.
            p.mb-3 Migración fuera de línea: una migración fuera de línea suspende al invitado, y después mueve una imagen de la memoria del invitado al host destino. El invitado es posteriormente puesto en marcha sobre el host destino y la memoria usada por el invitado en la host fuente liberada.
            p.mb-3 Migración en vivo: la migración en vivo es el proceso de migrar un invitado activo de un host físico a otro.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/migracion2.png', alt='Texto que describa la imagen')
            
      .py-4.py-md-5(titulo="Alta disponibilidad" :icono="require('@/assets/curso/temas/tema3/alta.svg')")
        .row
          .col-md-7.mb-4.mx-4.my-0
            h4 Alta disponibilidad
            p Hasta hace poco, las redes y los sistemas de la tecnología de la información (IT) y la tecnología de operaciones (OT) funcionaban de manera completamente independiente entre sí. Sin embargo, desde hace unos años, a medida que la fabricación industrial ha aumentado su nivel de conexión, también han ido convergiendo en la planta los mundos de la IT y la OT de nuevas y trascendentales maneras.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/alta2.png', alt='Texto que describa la imagen')
              
    
    .row.align-items-center.justify-content.mb-4
      .col-lg-5.my-3
        img.img-a.img-t(src='@/assets/curso/temas/tema3/img14.png', alt='')
      .col-lg-7.my-3
        p.mb-0(data-aos="zoom-in-left") #[b La digitalización de la fabricación implica enviar y recibir una gran cantidad de datos desde numerosos orígenes y puntos de datos diferentes.] Las aplicaciones y paquetes de software encargados de conectar estos puntos de datos requieren más capacidad de computación de la que jamás habían necesitado. Las empresas industriales están comenzando a cambiar de soluciones físicas de hardware a ambientes virtuales donde pueden residir varias aplicaciones y sistemas operativos.
      

        .col-lg-12
          .tarjeta-avatar-b.mb-0.mx-4.my-3(data-aos="fade-right")
            .tarjeta-avatar-b__img(style="min-width: 10%; left: -5%")
              img(src='@/assets/curso/temas/tema3/img14.1.svg' alt='AvatarTop')
            .tarjeta.bg14.p-4
              h4.mb-3 Virtualización, ¿para qué sirve?
              p.ms-5.mb-0 La virtualización esencialmente elimina la dependencia entre el sistema operativo y el hardware físico. Ha sido una implementación más habitual en plantas y líneas de nuevo diseño, en las que es posible comenzar desde cero con un ambiente virtual.

    .bg11.p-4.mb-1(data-aos="fade-left") 
      .row.d-flex
        .col-lg-1
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/imm.svg', alt='')
        .col-lg-11 Las plantas de mayor tamaño también han comenzado a cambiar a servidores virtuales, gracias a los grandes centros de datos. Sea cual sea el tamaño de su planta, la planta conectada es el futuro de la fabricación y la virtualización desempeñará un papel cada vez más importante en el espacio de la OT. La tendencia de migración a servidores permite ahora trasladar servidores virtuales de una máquina física a otra, y se encuentra aún en sus primeras fases.



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
