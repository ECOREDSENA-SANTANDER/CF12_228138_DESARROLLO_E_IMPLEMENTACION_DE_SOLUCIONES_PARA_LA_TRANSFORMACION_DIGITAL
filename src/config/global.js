export default {
  global: {
    componenteFormativo: 'Migración de servicios en la nube',
    descripcionCurso:
      'La migración a la nube, proceso de mover aplicaciones y datos desde una ubicación, de servidores privados locales de una empresa de un entorno local a servidores de un proveedor de nube pública; también entre distintas nubes. Las principales ventajas de la migración a la nube son  la reducción de los costos de TI y la mejora en el rendimiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Servicio de computación en nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Referente histórico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Uso y escenarios de aplicación',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Servicio de almacenamiento en la nube ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: ' Volumen elástico ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Copia de seguridad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Recuperación en la nube',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Software de virtualización ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: ' Generalidades de la Virtualización  ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Máquinas virtuales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: ' Características',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Contenedores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: ' Contenedores de software ',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Hipervisor vs contenedores',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: ' Docker',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estrategias de migración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Motivaciones  ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Retos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: ' Seguridad en la nube',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF12_228138_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Servicio de almacenamiento en la nube ',
      referencia:
        'hp México (4 de agosto de 2021). ¿Qué es una unidad de estado sólido (SSD)? Hewlett packard https://www.hp.com/mx-es/shop/tech-takes/que-es-una-unidad-de-estado-solido-ssd  ',
      tipo: 'Artículo comercial ',
      link:
        'https://www.hp.com/mx-es/shop/tech-takes/que-es-una-unidad-de-estado-solido-ssd  ',
    },
    {
      tema: '2. Servicio de almacenamiento en la nube ',
      referencia:
        'AWS (controles de data centers). Nuestros controles https://aws.amazon.com/es/compliance/data-center/controls/ ',
      tipo: 'Artículo ',
      link: 'https://aws.amazon.com/es/compliance/data-center/controls/ ',
    },
    {
      tema: '2. Servicio de almacenamiento en la nube ',
      referencia:
        'MinTIC (2016) Seguridad en la Nube. Seguridad y privacidad de la información. https://mintic.gov.co/gestionti/615/articles-5482_G12_Seguridad_Nube.pdf ',
      tipo: 'Guía ',
      link:
        'https://mintic.gov.co/gestionti/615/articles-5482_G12_Seguridad_Nube.pdf ',
    },
    {
      tema: '3. Software de virtualización ',
      referencia:
        'Guía rápida de Microsoft Introducción a AD DS. https://docs.microsoft.com/en-us/learn/modules/introduction-to-ad-ds/ ',
      tipo: 'Página web ',
      link:
        'https://docs.microsoft.com/en-us/learn/modules/introduction-to-ad-ds/ ',
    },
    {
      tema: '3. Software de virtualización ',
      referencia:
        'Página oficial de Docker: https://docs.docker.com/docker-for-windows/install/ ',
      tipo: 'Página web ',
      link: 'https://docs.docker.com/docker-for-windows/install/ ',
    },
    {
      tema: '3. Software de virtualización ',
      referencia:
        'Documentación de referencia de Docker sobre archivos Dockerfile https://docs.docker.com/engine/reference/builder/   ',
      tipo: 'Página web ',
      link: 'https://docs.docker.com/engine/reference/builder/ ',
    },
    {
      tema: '3. Software de virtualización ',
      referencia:
        'Documentación de referencia Dockerfile para Windows disponible en https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-docker/manage-windows-dockerfile ',
      tipo: 'Página web ',
      link:
        'https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-docker/manage-windows-dockerfile ',
    },
    {
      tema: '3. Software de virtualización ',
      referencia:
        'Página relacionada con los proveedores de servicios en la nube. Public Cloud Services Comparison, comparecloud.in ',
      tipo: 'Página web ',
      link: 'comparecloud.in',
    },
  ],
  glosario: [
    {
      termino: '<em>Firewall</em>',
      significado:
        'Dispositivo físico o virtual de red, que se emplea para proteger a las redes locales y privadas para evitar intrusiones, virus y otras seguridades de los sistemas de información. ',
    },
    {
      termino: '<em>Malware</em>',
      significado:
        'Término para referirse a <em>software</em> malintencionado, que se diseña para dañar sistemas de información, desconfigurarlos o simplemente hacer acciones no deseadas. ',
    },
    {
      termino: '<em>Open source</em>',
      significado:
        '(Código abierto). Aplicaciones bajo un licenciamiento donde el código fuente se encuentra disponible para que cualquier persona con conocimientos técnicos contribuya a la construcción y mejoramiento del programa. Su uso es libre. ',
    },
    {
      termino: '<em>Partner</em>',
      significado:
        'Bajo el contexto empresarial, se considera un proveedor de servicios, en términos tecnológicos, por lo general, son intermediarios entre las grandes marcas y las organizaciones que desean adoptar estas marcas tecnológicas en sus empresas. ',
    },
    {
      termino: '<em>Protocolo FTP</em>',
      significado:
        'Protocolo de transferencia de archivos; un cliente se conecta a través de este protocolo a un servidor para transferir, transportar y gestionar archivos. ',
    },
    {
      termino: '<em>Ransomware</em>',
      significado:
        'Se trata del código malicioso (malware) cuya característica es que impide a los usuarios acceder a sus recursos informáticos, archivos o sistemas. ',
    },
    {
      termino: '<em>Streamings</em>',
      significado:
        'Contenido en video o audio que puede ser transmitido a través de una plataforma, esta transmisión puede ser en vivo o grabado. Son usados para programas de TV, videoclips musicales, entre otros. ',
    },
    {
      termino: '<em>Web</em> 2.0',
      significado:
        'Concepto que nace a partir del surgimiento de un conjunto de tecnologías que facilitó, como nunca antes, la publicación y colaboración de usuarios en Internet. (redes sociales, streamings, Blogs, Wikis, Podcast, etc.). ',
    },
    {
      termino: '<em>SSD</em>',
      significado:
        '(<em>Solid State Drive</em>), dispositivo de almacenamiento denominado unidad de estado sólido. ',
    },
    {
      termino: '<em>Routers</em>',
      significado:
        'Dispositivo de la capa 3 (de red) que permite conexión y retransmitirla a otros nodos de la red. Esta retransmisión y enrutado de los datos pueden ser por cable o inalámbrico. ',
    },
    {
      termino: 'Nodo',
      significado:
        'En redes, son todos aquellos puntos de conexión que impliquen dispositivos de capa 3 en adelante (router, computadores, impresoras, teléfono IP, puntos de acceso, etc.) Estos dispositivos también pueden ser virtuales como por ejemplo Teléfonos IP y otros dispositivos virtualizados.',
    },
    {
      termino: '<em>HDD</em>',
      significado:
        '(<em>Hard Drive Disk</em>), Unidad de almacenamiento tipo Disco Duro. ',
    },
    {
      termino: '<em>Hardware x86</em>',
      significado:
        'Se refiere a la arquitectura hardware compleja y reducida, se fundamenta en la Unidad Central de Procesamiento CPU, y sus componentes. La primera arquitectura de computadores personales comercial exitosa fue el Intel 80286 en 1982. ',
    },
    {
      termino: 'Contenedores',
      significado:
        'En el sector del transporte se usan contenedores físicos para aislar diferentes cargas (por ejemplo, para el transporte en buques y en trenes), las tecnologías de desarrollo de software usan cada vez más un método denominado contenerización. ',
    },
    {
      termino: 'CEO',
      significado:
        '(<em>chief executive officer</em>), director ejecutivo, es la persona con mayor responsabilidad sobre una empresa. ',
    },
    {
      termino: 'Capas',
      significado:
        'Se refiere al nivel técnico del <em>hardware</em> y red. En HW hay bajo nivel (nivel de máquina), nivel de sistema operativo. En redes es más usual el término de capas, se plantean desde la física de transmisión de datos, redirección, red hasta la capa de aplicación. ',
    },
    {
      termino: 'Caja negra',
      significado:
        'Término que se usa para referirse a lo que hay detrás de un proceso. Ejemplo, un algoritmo de caja negra es aquel código que no se puede ver la manera en cómo funciona internamente. ',
    },
    {
      termino: '<em>Active directory</em>',
      significado:
        '<em>Active Directory (AD)</em> es una base de datos y un conjunto de servicios que conectan a los usuarios con los recursos de red que necesitan para realizar su trabajo. ',
    },
  ],
  referencias: [
    {
      referencia: 'Amazon (2021). AWS Directory Service ',
      link: 'https://aws.amazon.com/es/directoryservice/?nc=sn&loc=1  ',
    },
    {
      referencia: 'Allcode.com (2021). 10 Top Cloud Providers in 2021. ',
      link: 'https://allcode.com/cloud-providers/ ',
    },
    {
      referencia:
        'Claranet.es (2021). 6 enfoques para afrontar la migración a la nube.',
      link:
        ' https://www.claranet.es/blog/6-enfoques-para-afrontar-la-migracion-a-la-nube  ',
    },
    {
      referencia:
        'Cloud computing.Blog. (8 de julio de 2016). Cloud computing. Obtenido de Entendiendo a la nube informática:',
      link:
        'http://cloud-computing-bcs.blogspot.com/2016/07/evolucion-del-cloud-computing.html ',
    },
    {
      referencia:
        'Demlow, D. (1 de septiembre de 2020). Snapshots vs. Backups, Why You Need Both. Obtenido de scalecomputing.com.',
      link:
        'https://www.scalecomputing.com/blog/the-differences-between-snapshots-and-backups-and-why-you-need-both ',
    },
    {
      referencia:
        'Electro personalizados. (6 de octubre de 2020). Electro personalizados. Obtenido de ¿Quién inventó la unidad flash USB o Pendrive? ',
      link:
        'https://www.electropersonalizados.com/quien-invento-la-unidad-flash-usb-o-pendrive/ ',
    },
    {
      referencia:
        'Islámica, L. (4 de marzo de 2020). SAAS, PAAS O IAAS: ¿QUÉ SIGNIFICAN Y CÓMO ELEGIR? Obtenido de',
      link: 'https://www.dstny.se/en/blog/saas-paas-iaas/ ',
    },
    {
      referencia: 'MinTIC (2016). Seguridad en la Nube.  ',
      link:
        'https://mintic.gov.co/gestionti/615/articles-5482_G12_Seguridad_Nube.pdf  ',
    },
    {
      referencia:
        'Olivares, J. G., Caparrós Ramírez, j., & Cubero Luque, L. (2019). devOps y seguridad cloud. Brcelona: Editorial UOC. Obtenido de  ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/128889  ',
    },
    {
      referencia:
        'Oracle. (s.f.). Oracle help center. Obtenido de Copia de seguridad de los datos locales en la nube:',
      link:
        'https://docs.oracle.com/es/solutions/onprem-to-cloud-backup/index.html#GUID-D8E2ABE2-1CDB-47FE-87BF-214FF9D9CE6C ',
    },
    {
      referencia:
        'Páez, I., Sabrina, M., Umaña, V., Méndez, R., & Rivera, L. (2022). Transformación digital en las organizaciones. Bogotá:  ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/219878.  ',
    },
    {
      referencia:
        'UNIÓN SINDICAL DE CCOO DE CASTILLA Y LEÓN. (s. f.). La Industria 4.0 es imparable y, de no adaptarnos, tendrá efectos muy graves sobre el empleo. http://docpublicos.ccoo.es/.',
      link: 'http://docpublicos.ccoo.es/cendoc/049437Industria40Imparable.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada',
          cargo: 'Experto Temático',
          centro: 'Centro de la Industria, la Empresa y los Servicios - CIES',
        },
        {
          nombre: 'Diego E. Acevedo Guevara',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
