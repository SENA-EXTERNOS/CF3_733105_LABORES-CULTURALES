export default {
  global: {
    componenteFormativo: 'Labores culturales',
    descripcionCurso:
      'Este componente formativo aborda temáticas relacionadas con las diferentes prácticas de manejo cultural llevadas a cabo en cultivos y agroecosistemas, teniendo en cuenta, desde luego, los procedimientos técnicos y las buenas prácticas agrícolas. Así mismo, se hará énfasis en las alternativas de fertilización que devuelvan la capacidad productiva a los suelos y que sean amigables con el medio ambiente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal1.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/circulo-imagen-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: ' Manejo de cultivo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fertilización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fertilizantes orgánicos o bioabonos',
            hash: 'fertilizantes-organicos-o-bioabonos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Fertilizantes o inoculantes biológicos',
            hash: 'fertilizantes-o-inoculantes-biologicos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Normatividad',
            hash: 'normatividad',
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
      tema: 'Manejo de cultivos',
      referencia:
        'González, E. D. (2015). Operaciones culturales, recolección, almacenamiento y envasado de productos (UF0162). IC Editorial.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43819',
    },
    {
      tema: 'Manejo de cultivos',
      referencia:
        'Labrada, R., Caseley, J. C., & Parker, C. (1996). Manejo de malezas para países en desarrollo. Organización de las Naciones Unidas para la Agricultura y la Alimentación.',
      tipo: 'Libro',
      link: 'https://www.fao.org/3/T1147S/t1147s00.htm#Contents',
    },
    {
      tema: 'Fertilización',
      referencia:
        'Universidad Nacional de Colombia. (2014). Guía técnica para el aprovechamiento de residuos orgánicos a través de metodologías de compostaje y lombricultura. Alcaldía Mayor de Bogotá.',
      tipo: 'Libro',
      link: 'https://www.uaesp.gov.co/images/Guia-UAESP_SR.pdf',
    },
    {
      tema: 'Fertilización',
      referencia:
        'Restrepo Franco, G. M., Ceballos Aguirre, N., Sánchez Toro, O. J., & Valenzuela Ospina, K. T. (2015). Importancia de los inoculantes biológicos en la agricultura. Universidad Católica de Manizales. ',
      tipo: 'Cartilla',
      link: 'https://repositorio.ucm.edu.co/handle/10839/2167',
    },
  ],
  glosario: [
    {
      termino: 'Aporque',
      significado:
        'amontonar o arrimar tierra alrededor del tallo o base de la planta.',
    },
    {
      termino: 'Arvenses',
      significado:
        'plantas comúnmente conocidas como maleza, no presentan interés y, por tanto, deben ser destruidas.',
    },
    {
      termino: 'Biofertilizantes',
      significado:
        'preparados que cuentan con microorganismos vivos que favorecen la fijación del nitrógeno y la solubilización del fósforo.',
    },
    {
      termino: 'Compost',
      significado:
        'fertilizante o abono elaborado a partir de la fermentación de residuos orgánicos.',
    },
    {
      termino: 'Enfermedad',
      significado:
        'alteración del recurso vegetal causada por agentes de daño, por ejemplo, microorganismos como hongos, bacterias o virus.',
    },
    {
      termino: 'Fertilizantes químicos',
      significado:
        'mezclas químicas sintéticas que se aplican al suelo y a las plantas para lograr mayor fertilidad y productividad.',
    },
    {
      termino: 'Manejo cultural',
      significado:
        'serie de actividades que se llevan a cabo durante la producción (desde la siembra hasta la cosecha) de los cultivos, con el fin de proporcionar las condiciones y requerimientos necesarios para un adecuado crecimiento de las plantas.',
    },
    {
      termino: 'Plaga',
      significado:
        'alteración de un recurso vegetal producida por vertebrados, nematodos, o insectos, que producen daños y pérdidas apreciables a la producción y la calidad.',
    },
    {
      termino: 'Raleo',
      significado:
        'actividad conocida como aclareo o entresaca, consiste en la eliminación de plantas con el objetivo de beneficiar y asegurar el adecuado desarrollo y crecimiento de las más sanas.',
    },
    {
      termino: 'Riego',
      significado:
        'aporta agua a las plantas por medio del suelo, asegurando la humedad requerida para un adecuado crecimiento y desarrollo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, M. A., González, L. C., & Tabaco, B. H. (2021). Caracterización ecológica de la flora de arvenses del alto y bajo Ricaurte (Boyacá). INGE CUC, 17(1), p. 112-125.',
      link: 'https://52.0.212.120/ingecuc/article/view/3112',
    },
    {
      referencia:
        'Arzola, N. C. Pérez, Y. & Pérez, R. (2018). Métodos biológicos para una agricultura sostenible. Editorial Universo Sur. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/120834',
    },
    {
      referencia:
        'Circular externa N°4. [Instituto Colombiano Agropecuario]. Procedimiento de actualización, registros, actividad y productos a la resolución 68370 de 2020. Agosto 21 de 2020.',
      link:
        'https://www.ica.gov.co/getattachment/Areas/Agricola/Servicios/Fertilizantes-y-Bio-insumos-Agricolas/CIRCULAR-EXTERNA-N%C2%B0-4-DEL-21-DE-AGOSTO-DE-2020-1.pdf.aspx?lang=es-CO',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2009). Guía para la entrega de material de referencia en el laboratorio nacional de insumos agrícolas para el registro de productos bioinsumos. ICA. ',
      link:
        'https://www.ica.gov.co/areas/agricola/servicios/regulacion-y-control-de-plaguicidas-quimicos/listados/2009/guia_entrega_material-de-referencia-de-bioinsumos_.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2019). Productos registrados bioinsumos. ICA. ',
      link:
        'https://www.ica.gov.co/getdoc/2ad9e987-8f69-4358b8a9-e6ee6dcc8132/productos-bioinsumos-mayo-13-de-2008',
    },
    {
      referencia:
        'Infante, Z., Ortega, P., & Coutiño, A. E. (2020). Las Biofábricas y su relación con el Desarrollo Sostenible en Michoacán, México, en De La Vega, S., Rózga, R, E. & Hoyos, G. (Cord.), Factores críticos y estratégicos en la interacción territorial, desafíos actuales y escenarios futuros (Vol. III) (p. 401-418). Asociación Mexicana de Ciencias para el Desarrollo Regional A. C. ',
      link: 'http://ru.iiec.unam.mx/id/eprint/5122',
    },
    {
      referencia:
        'Resolución Nº00150. [Instituto Colombiano Agropecuario]. Por la cual se adopta el Reglamento Técnico de Fertilizantes y Acondicionadores de Suelos para Colombia. Enero 21 de 2003.',
      link:
        'https://www.ica.gov.co/areas/agricola/servicios/fertilizantes-y-bio-insumos-agricolas/resolucion-150-de-2003-1-1.aspx',
    },
    {
      referencia:
        'Resolución N°00375. [Instituto Colombiano Agropecuario].  Por la cual se dictan disposiciones sobre Registro y Control de los Bioinsumos y Extractos Vegetales de uso agrícola en Colombia. Febrero 27 de 2004.',
      link:
        'https://www.mincit.gov.co/getattachment/0b26d8aa-9460-41d8-b176-b2c976986d72/Resolucion-375-del-27-de-febrero-de-2004-Por-la-cu.aspx#:~:text=Documento%20oficial%20expedido%20por%20el%20ICA%2C%20mediante%20el%20cual%20se,conformidad%20con%20las%20regulaciones%20vigentes',
    },
    {
      referencia:
        'Resolución N° 068370. [Instituto Colombiano Agropecuario]. Por medio de la cual se establece los requisitos para el registro de productor, productor por contrato, envasador, importador y departamentos técnicos de ensayos de eficacia agronómica de Bioinsumos para uso agrícola; así como los requisitos para el registro de Bioinsumos para uso agrícola. Mayo 27 de 2020',
      link:
        'https://www.ica.gov.co/getattachment/Areas/Agricola/Servicios/Fertilizantes-y-Bio-insumos-Agricolas/Resolucion-068370-del-27-de-mayo-de-2020.pdf.aspx?lang=es-CO',
    },
    {
      referencia:
        'Resolución N°076510. [Instituto Colombiano Agropecuario]. Por la cual se establecen los requisitos para el registro de departamentos técnicos para la ejecución de ensayos de eficacia de insumos agrícolas. Septiembre 25 de 2020',
      link:
        'https://www.ica.gov.co/getattachment/869a499b-56ee-4b91-88d5-cef73597c2e2/2020R76510.aspx',
    },
    {
      referencia:
        'Víllora, R. A., Álvarez, A. M., & Hernández-Plaza, E. (2019). Manejo y diversidad de las comunidades arvenses en las estepas cerealistas: propuestas para una gestión sostenible. Ecosistemas, 28(3), p. 36-45.',
      link: 'https://doi.org/10.7818/ECOS.1821',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
