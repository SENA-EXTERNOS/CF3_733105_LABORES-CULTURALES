<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manejo de cultivos

    .row.justify-content-around.align-items-center
          
          .col-lg-8
            .bloque-color-superior
            p.texto-color-superior.p-3 Al hablar de manejo de cultivos, se hace referencia a la serie de actividades llevadas a cabo durante toda la producción de cultivos (desde la siembra hasta la cosecha); labores que influyen en los rendimientos y la calidad de los mismos, porque con su adecuada y oportuna realización, es decir, en el momento y la fecha adecuada, aumenta y mejora la producción agrícola.

              br
              br
              |Sobre el manejo de cultivos, tenga presente los siguientes aspectos:
          
          .col-lg-4
            figure
              img(data-aos="fade-left")(src="@/assets/curso/temas/imagen1-tema1.png").imagen1-tema1
      
    br
    br
    br

    .row.justify-content-around.align-items-center

      SlyderB.mb-5(:datos="datosSlyder").fondo.texto-slider-tema1.p-3
    
    .row.justify-content-around.align-items-center

    

    //Acordeon viñeta izquierda
    .row.justify-content-around.align-items-center
      
      h3 Labores culturales

      p Existen diversos tipos de labores culturales, los cuales pueden ser de carácter preventivo, de manejo y de control, o enfocadas al desarrollo fisiológico o al manejo de poblaciones asociadas, e influyen en el adecuado desarrollo de las plantas durante su crecimiento o producción.
        br
        br
        | Tales labores pueden ser: 
      AcordionA(tipo="a" clase-tarjeta="tarjeta color-exterior-slider-tema1")
        .row(titulo="Trasplante")
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen-transplante-slider1.png', alt='Texto que describa la imagen').imagenes-acordeon-tema1
              //figcaption Leyenda de la imagen
          .col-md-6.mb-4.mb-md-0
            p.texto-acordeon-tema1 Traslado de plantas del semillero al terreno definitivo donde van a llevar a cabo su ciclo de vida. 
            p.texto-acordeon-tema1 <em>Beneficios</em>: planificación de siembra, crecimiento uniforme, eficiencia en las semillas y floración temprana para agilizar la producción.
            p.texto-acordeon-tema1 <em>Perjuicios</em>: El trasplante genera estrés en las plantas, ocasiona marchitez y, en ocasiones, las mata. Además, se afectan los órganos de las plantas, especialmente la raíz. 
            p.texto-acordeon-tema1 Es así como el proceso de trasplante debe hacerse durante el día, sin altas temperaturas, para permitir que la planta tenga una mejor adaptación y que su estrés sea temporal.  A la hora de trasplantar, se debe evitar el estrés, asegurándose que el sistema radicular esté bien desarrollado, adecuando el terreno al cual se van a trasladar las plantas, verificando las condiciones ambientales (iluminación, humedad, temperatura, ventilación) a las que se van a exponer las plantas trasplantadas, y resembrando a una profundidad adecuada.
        
          br
        .row(titulo="Raleo").fila2-acord-lab-culturales-tema1

          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen-raleo-tema1.png', alt='Texto que describa la imagen').imagenes-acordeon-tema1
              //figcaption Leyenda de la imagen

          .col-md-6.mb-4.mb-md-0
            p.texto-acordeon-tema1 Eliminación total o parcial de las plantas más débiles, enfermas, torcidas o de baja calidad. El raleo tiene el objetivo de beneficiar y asegurar el adecuado desarrollo y crecimiento de las plantas más sanas, brindándole mayor espacio y menos competencia para, así, estimular su crecimiento e incrementar su vigor y resistencia. A medida que los árboles crecen, aumenta la competencia por espacio, por nutrientes, por agua y por luz, por esto, el raleo es un proceso selectivo y la cantidad y frecuencia para realizarlo dependerá del crecimiento que tenga la plantación. 

        
        
        .row(titulo="Aporque").fila3-acord-lab-culturales-tema1

          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen-aporque-slider1.png', alt='Texto que describa la imagen').imagenes-acordeon-tema1
              //figcaption Leyenda de la imagen

          .col-md-6.mb-4.mb-md-0
            p.texto-acordeon-tema1 Consiste en amontonar tierra alrededor del tallo o la base de la planta con el objetivo de brindarle anclaje, estabilidad, resistencia al viento, fortalecimiento del tallo, conservación de la humedad, favorecimiento del desarrollo de raíces, facilidad en el aprovechamiento de fertilizantes y ayuda en el control de arvenses. 
            p.texto-acordeon-tema1 Así mismo, permite que la humedad se conserve durante más tiempo en el tallo de la planta y, en caso de que se presenten altas temperaturas, los rayos solares no afectarán de manera directa la planta.

        
          
        
        
        .row(titulo="Riego").fila4-acord-lab-culturales-tema1

          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen-riego-slider1.png', alt='Texto que describa la imagen').imagenes-acordeon-tema1
              //figcaption Leyenda de la imagen

          .col-md-6.mb-4.mb-md-0
            p.texto-acordeon-tema1 Es una labor de gran importancia, asegura la humedad requerida por las plantas para lograr un adecuado crecimiento y desarrollo. Se debe garantizar y reponer el agua consumida por la planta mediante un riego oportuno y uniforme en la zona de la raíz, evitando excesos o déficit, lo que puede llegar a causar problemáticas como bajos rendimientos, erosión del suelo, lavado de nutrientes, pérdida de agua y drenaje inadecuado. Es importante identificar el estado del suelo antes de implementar el sistema de riego, esto con el fin de que el sistema radicular y poroso permita de manera adecuada, la infiltración del agua suministrada a través del riego, donde según el tipo de cultivo, será necesario la implementación de un sistema de riego en particular, diseñado según el requerimiento hídrico que presentan las plantas en cada una de sus etapas.

        
          

        
        .row(titulo="Tutorado").fila5-acord-lab-culturales-tema1

        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen-tutorado.slider1.png', alt='Texto que describa la imagen').imagenes-acordeon-tema1
              //figcaption Leyenda de la imagen
          
          .col-md-6.mb-4.mb-md-0
            p.texto-acordeon-tema1 Consiste en brindar soporte a la parte aérea de las plantas para guiarlas y mantenerlas de forma vertical, esto se realiza por medio de ciertos materiales, los cuales se amarran del tallo o de las ramas con la finalidad de darle un adecuado desarrollo, evitando así, daños durante la fase productiva.


        
        .row(titulo="Control de arvenses").fila6-acord-lab-culturales-tema1

          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen-control-arvenses-slider1.png', alt='Texto que describa la imagen').imagenes-acordeon-tema1
              //figcaption Leyenda de la imagen

          .col-md-6.mb-4.mb-md-0
            .texto-acordeon-tema1
              p Previene, reduce y erradica plantas no deseadas, evitando interferencias de crecimiento entre las plantas, o consecuencias negativas al competir por la luz solar y los nutrientes. 
              p El mantenimiento de cultivos previene generadores de enfermedades y plagas, como también de plantas ‘hospederas’, sin desproteger el suelo. Seleccionar el método apropiado de control depende de la biología, morfología, modo de desarrollo, forma de reproducción, comportamiento, medios de difusión, etc., del arvense; e igualmente de la cantidad, las especies en cultivo, el estado de cosecha y la capacidad económica del agricultor.

              p Otras ventajas del control de arvenses son la conservación de humedad en la planta, el equilibrio, el agroecosistema, además de la regulación de presencia de insectos, pues algunos se alimentan de este. Igualmente, al implementar una variedad de control de arvenses, se actúa como repelente y controlador de insectos perjudiciales para los cultivos, controlando que se desarrollen en esa área, evitando, por ejemplo la ‘#[i Ranunculus acris]’ o botón de oro, o la formación de nidos de hormigas arrieras ‘#[i Atta cephalotes]’.
        

        .row(titulo="Poda").fila7-acord-lab-culturales-tema1

          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen-poda-slider1.png', alt='Texto que describa la imagen').imagenes-acordeon-tema1
              //figcaption Leyenda de la imagen

          
          .col-md-6.mb-4.mb-md-0
            p.texto-acordeon-tema1 Radica en cortar o suprimir partes vegetativas, beneficiando así el desarrollo vegetativo, aumentando la capacidad de producción y mejorando la arquitectura, lo que ayuda, a su vez, a la circulación del aire y luz, la estimulación del desarrollo de ramas, además de facilitar la realización de las demás labores culturales.
            p.texto-acordeon-tema1 Los frutos se desarrollan con mayor facilidad en árboles con copas abiertas, aireados, iluminados con luz solar, así, tienen más carbohidratos, ácidos orgánicos, vitamina C y azúcares que mejoran el estado sanitario de ellos. Por el contrario, los frutos desarrollados en copas cerradas o que reciben radiación directa, presentan pulpa consistente, epidermis gruesa y son resistentes a fisiopatías en postcosecha.
            p.texto-acordeon-tema1 Las podas se realizan según las necesidades del árbol, después de una poda, las plantas invierten mucha energía en recuperar su área foliar, por lo que se reduce la cantidad de frutos producidos. 
            p.texto-acordeon-tema1 poda puede ser manual, mecánica o química. Algunos tipos de poda son de formación, mantenimiento, producción, rejuvenecimiento o de regeneración. Así mismo, se realizan podas en función de órganos, por ejemplo, se eliminan hojas, flores, frutos, yemas o tallos, con diferentes tipos de corte, como el despunte o rebaje y el aclareo o raleo. 

        
        .row(titulo="Manejo de plagas y enfermedades").fila8-acord-lab-culturales-tema1

          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen-manejo-plagas-slider1.png', alt='Texto que describa la imagen').imagenes-acordeon-tema1
              //figcaption Leyenda de la imagen

          .col-md-6.mb-4.mb-md-0
            .texto-acordeon-tema1
              p Es la elección e implementación de medidas de control mecánico, físico, biológico y etológico, para proteger el cultivo de plagas, virus, insectos, bacterias, hongos, nematodos, ácaros, roedores, aves, reptiles, murciélagos o elementos causantes de afecciones, cortes, perforaciones, deformaciones o defoliaciones, que inoculan toxinas, reducen la cantidad y calidad de la cosecha, aumentan costos de producción o transmiten enfermedades y causan la muerte de la planta.
                br
                br
                |Es vital manejar las enfermedades y las alteraciones del estado o del funcionamiento de la planta, revisando malformaciones, marchitamiento, manchas, agallas, necrosis o pudriciones. Se debe controlar la presencia de un hospedante susceptible de patógenos y de condiciones ambientales que favorezcan su desarrollo. 
                br
                br
                |En el caso de encontrar plagas o enfermedades se deben aplicar productos para el control sanitario, garantizando su persistencia en el producto cosechado, siguiendo las instrucciones y medidas recomendadas por el fabricante frente a los tiempos, rotaciones de cultivos, fertilización de los suelos, horas y métodos de aplicación; especialmente, entre la última aplicación y la cosecha.

      p.texto-final-labores-culturales Así como las labores culturales son importantes en los cultivos agroecológicos, existen roles de manejo combinado bajo la metodología del manejo agroecológico; estos son conocidos como arvenses y serán descritos a continuación:
    
    .row.container.justify-content-around.align-items-center.my-5
            

      h3 Arvenses 

      .row

          figure
              img(src='@/assets/curso/temas/img-fondo-lad-izq-arvenses.png', alt='Texto que describa la imagen').img-fondo-lad-izq-arvenses
          
          .col-md-7
            
            .col-sm.mb-5.mb-sm-0
            
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta.color-acento-contenido
                    span a
                  | Rol ecológico


            p.bloque-texto-rol-ecologico Las arvenses son las plantas conocidas comúnmente como maleza, no tienen ningún interés o utilidad, es decir, no son deseables y, por tanto, deben ser destruidas. Las arvenses llegan a generar pérdidas y afectaciones directas en la producción agrícola, aproximadamente el 10% de la producción se ve afectada debido a que las arvenses interfieren en el crecimiento de los cultivos. Igualmente, se generan consecuencias tanto en la disminución en los rendimientos, pues compite con las otras plantas por nutrientes, espacio, suelo y recursos vitales (agua, sol), como en el valor del producto cosechado, ya que afecta su calidad, al presentar impurezas que pueden influir en el sabor, olor y color de la cosecha.
              br
              br
              |Sobre el rol ecológico de los arvenses, tenga presente:
            .bloque-color-arvenses
          
          .col-md-5
            figure
              img(data-aos="fade-left")(src='@/assets/curso/temas/imagen-rol-ecologico-tema1.png', alt='Texto que describa la imagen').imagen-rol-ecologico-tema1
              //figcaption Leyenda de la imagen

    br
    br
    br

    //Slider simple
    .row.container.justify-content-around.align-items-center

      
      .row
  
        figure
          img(src='@/assets/curso/temas/imagen-fondo-slider1.png', alt='Texto que describa la imagen').imagen-fondo-slider2-tema1
      .tarjeta.p-4
        SlyderA(tipo="b")

          .row
          
            .col-md-6.mb-4.mb-md-0
              
              h4.bloque-slider-simple-tema1 Aumentan costos de producción
              p.bloque-slider-simple-tema1 Así mismo, las arvenses generan aumento en los costos de producción al invertir tiempo y recursos para su manejo. Es fundamental manejarlas, de lo contrario dificultarán e interferirán en las labores agrícolas al hospedar plagas y enfermedades que pueden llegar afectar el cultivo, disminuyendo, con ello, el valor de la tierra.

            .col-md-6
            
              figure
                img(src='@/assets/curso/temas/imagen1-slider-simple-tema1.png', alt='Texto que describa la imagen')
                //figcaption Leyenda de la imagen

          .row.justify-content-center.align-items-center.my-lg-4

            .col-md-6.mb-4.mb-md-0
              h4.bloque-slider-simple-tema1 Las arvenses se reproducen
              p.bloque-slider-simple-tema1 Las arvenses al igual que todas las plantas se reproducen y su forma de propagación, por lo general, es a través del viento y el agua. Las semillas de las arvenses son diseminadas por el aire o por el agua, especialmente a través de canales de riego y drenajes o afluentes naturales. Las personas también pueden transportarlas y llevarlas de un lugar a otro, al igual que animales que las ingieren y con las heces las transportan a otros sitios.
            
            
            .col-md-6
              figure
                img(src='@/assets/curso/temas/imagen2-slider-simple-tema1.png', alt='Texto que describa la imagen')
                //figcaption Leyenda de la imagen

          
          
          .row.justify-content-center.align-items-center.my-lg-4

            .col-md-6.mb-4.mb-md-0
              h4.bloque-slider-simple-tema1 Diferentes clasificaciones
              p.bloque-slider-simple-tema1 Las arvenses tienen varias clasificaciones, por ejemplo, según su ciclo de vida se clasifican en anuales, bianuales o perennes y de acuerdo a su morfología son fanerógamas (con flores) o criptógamas (sin flores). También se pueden clasificar conforme a sus hábitos de crecimiento, es decir como rastreras, enredaderas, trepadoras o erectas; o por su tallo, como herbáceas y semileñosas. Su hábitat también juega un papel importante en su taxonomía, pueden ser de cultivo, de praderas o de pastos, forestales, acuáticas o ruderales, esto es, que crecen al borde de carreteras, caminos, cultivos o lotes.


            .col-md-6
              figure
                img(src='@/assets/curso/temas/imagen3-slider-simple-tema1.png', alt='Texto que describa la imagen')
                //figcaption Leyenda de la imagen

          .row.justify-content-center.align-items-center.my-lg-4


            .col-md-6.mb-4.mb-md-0
              h4.bloque-slider-simple-tema1 Rol ecológico en agroecosistemas
              p.bloque-slider-simple-tema1 Como lo indica Víllora et al., (2019), aunque las arvenses sean un componente de los sistemas agrícolas, son comúnmente catalogadas como indeseables, lo que conlleva a que, en los cultivos el objetivo principal sea eliminarlas, práctica que día a día ha ganado espacio al cumplir un rol ecológico en los agroecosistemas.


            .col-md-6
              figure
                img(src='@/assets/curso/temas/imagen4-slider-simple-tema1.png', alt='Texto que describa la imagen')
                //figcaption Leyenda de la imagen

          
          .row.justify-content-center.align-items-center.my-lg-4

            .col-md-6.mb-4.mb-md-0
              h4.bloque-slider-simple-tema1 Germinación discontinua y marcada
              p.bloque-slider-simple-tema1 Se presenta un periodo de germinación discontinua y marcada en las arvenses, su desarrollo vegetativo, crecimiento y floración son rápidas, aunque sus semillas son longevas y de alta productividad durante todo el crecimiento. También, presentan gran adaptabilidad a la polinización cruzada y a la dispersión, tanto corta como larga, adaptándose y tolerando ambientes variables. Todas estas características le permiten una fácil y exitosa población en los agroecosistemas.


            .col-md-6
              figure
                img(src='@/assets/curso/temas/imagen5-slider-simple-tema1.png', alt='Texto que describa la imagen')
                //figcaption Leyenda de la imagen
      
    br
    br
    br

    .row.justify-content-around.align-items-center
        p Las arvenses tienen un rol ecológico en la interacción con el cultivo y, a su vez, son muy útiles para controlar plagas y enfermedades. A continuación, se describe la utilidad de las arvenses.

          
        .row(data-aos="fade-right").color-columna-izquierda-tarjeta-utilidad
          .col-lg-7
            
            .bloque-texto-tarjeta-utilidad-tema1.p-2
              .col-sm.mb-5.mb-sm-0
              
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.color-acento-contenido
                      span b
                    | Utilidad 
             

              p.texto-inf-tarjeta-utilidad-tema1.pe-4 Las arvenses no solo aportan de forma negativa, también, como lo indica Aguilar et al., (2021), generan impactos positivos al ser un factor inherente a la diversidad de los ecosistemas, contribuyendo con la conservación del suelo, aumentando la estabilidad de los agroecosistemas, incrementando la cantidad de material genético y ayudando a recuperar la biodiversidad vegetal. Todo esto, brinda las condiciones necesarias para que existan mayor diversificación de la fauna entomológica, es decir, promueve la reproducción de insectos y artrópodos. Además, las arvenses pueden ser fuente de alimento o servir como materia prima en la fabricación de fertilizantes orgánicos, incluso, algunos cuentan con propiedades medicinales.
          
          .col-lg-5
              figure
                img(src='@/assets/curso/temas/imagen-derecha-tarjeta-utilidad.png', alt='Texto que describa la imagen').imagen-tarjeta-utilidad-tema1
              
    br
    br
    br

    .row.justify-content-around.align-items-center

        p.mb-5(data-aos='fade-right') En el siguiente esquema, analice otras particularidades del rol ecológico y la utilidad de las arvenses:
        .row
          .col-lg-12
            figure
                img(src='@/assets/curso/temas/imagen-rol-ecologico.png', alt='Texto que describa la imagen').imagen-rol-ecologico-tema1
        
        .row.justify-content-center.my-5
          .col-lg-10
            .cajon.color-acento-botones.p-4.mb-4(style="background-color: #fff2df")
              p.mb-0 Las asociaciones entre plantas o cultivos intercalados, conocidos también como arvenses, proporcionan herramientas biológicas en las plantaciones para el manejo productivo. 
    br
    br


    br
    

    .row.container.justify-content-around.align-items-center

        h3 Equipos y herramientas para trabajos agropecuarios

        .row
          .col-lg-8
            .bloque-texto-equipos-herramientas
              p.texto-color-herramientas Para el desarrollo de las labores culturales anteriormente descritas  (trasplante, raleo, aporque, riego, tutorado, control de arvenses, poda o manejo de plagas) y para facilitar su ejecución, se requiere de diversas herramientas, equipos y utensilios con variada forma y tamaño. 
              p.texto-color-herramientas Las herramientas más comunes usadas en actividades como el aporque, el control de arvenses y el raleo, son instrumentos de borde filoso, como machetes de variada forma de hoja, y azadones, usados comúnmente para abrir tierras. También se emplean herramientas de borde de corte para cortar raíces, picos para trabajos de excavación y construcción, palas, e implementos de excavación para mover materiales sueltos o no consolidados, que cuentan con una amplia gama de diseños disponibles, por ejemplo, rectangulares y redonda, a su vez, se emplea igualmente la hoz y el rastrillo.
              .bloque-color-herramientas
          
          .col-lg-4
            
            figure
                img(data-aos="fade-left")(src='@/assets/curso/temas/imagen-equipos-herramientas.png', alt='Texto que describa la imagen').imagen-equipos-herramientas
    
    br
    br
    p.mb-5(data-aos='fade-right') A continuación, se detallan algunas diferencias y particularidades de tales elementos:

    .row.container.justify-content-around.align-items-center
        .row
          figure
            img(src='@/assets/curso/temas/imagen-fondo-slider2.png', alt='Texto que describa la imagen').imagen-fondo-slider2
          
          SlyderB.mb-5(:datos="datosSlyder2").slider2-tema1
        


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Actividades',
        texto:
          'Entre las principales labores de manejo cultural existen actividades enfocadas a dar soporte y formación sobre las plantas: el tutorado, la poda, el raleo y el aporque. También pueden estar dirigidas a evitar la competencia por nutrientes, agua, luz y espacio, como el manejo de arvenses; sin contar con las encaminadas a satisfacer las necesidades hídricas, como el riego y el drenaje. Asimismo, es importante considerar las técnicas de aplicación y regulación de nutrientes y demás labores de control, para evitar enfermedades, disminución o pérdida de cultivos (como el embolsado de frutos o el manejo ecológico de plagas y enfermedades).',
        imagen: require('@/assets/curso/temas/imagen1-slider-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Buenas prácticas agrícolas (BPA)',
        texto:
          'Estas actividades de manejo cultural de los cultivos, suelen ir de la mano con las buenas prácticas agrícolas, o BPA, una serie de normas y recomendaciones técnicas para toda la cadena de producción, es decir, para la cadena que inicia en la planeación del cultivo, pasa por la cosecha y termina en la postcosecha. Las BPA tienen la finalidad de garantizar la inocuidad de los productos y, a su vez, cuidar de la salud humana, proteger el medio ambiente y brindar bienestar y seguridad a los trabajadores.',
        imagen: require('@/assets/curso/temas/imagen2-slider-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Equipos',
        texto:
          'En la aplicación fitosanitaria de fertilizantes o en el control químico de arvenses, se emplean equipos manuales con diferentes capacidades que generalmente, son portátiles o portables en la espalda del operario. No obstante, con el avance de la tecnología se implementó el uso de drones, brindando una mayor optimización y eficiencia en estos procesos. Igualmente para el riego se utilizan principalmente, bombas que impulsan el agua y que varían según su potencial o el combustible que empleen.',
        imagen: require('@/assets/curso/temas/imagen-equipos-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Herramientas',
        texto:
          'Con respecto a las actividades de poda, las principales herramientas usadas son las de corte (tijeras, alicates, tenazas), las cuales son empleadas directamente por el operario. Existen diversos modelos, por ejemplo, automáticas y mecánicas, a una o dos manos, de hoja curva o yunques, serruchos, motosierra, pértigas, hachas, serpetas o de cuchilla curva. Además de lo mencionado, se requiere el uso de materiales y equipos complementarios como ataduras, cañas, productos de protección de heridas, escaleras, equipos de plataforma o cestos.',
        imagen: require('@/assets/curso/temas/imagen-herramientas-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Utensilios',
        texto:
          'Es importante resaltar que las herramientas, equipos y utensilios empleados en las labores culturales, deben estar en óptimas condiciones cada vez que se usen, se recomienda lavarlos con agua limpia y de ser posible, desinfectarlos para evitar propagación de microorganismos. La ubicación y almacenamiento de los implementos debe ser en un lugar limpio, señalizado y ordenado, contando con las estanterías o repisas apropiadas que soporten  el peso sobre la pared. Así mismo, deben estar separados de otros insumos y se les debe realizar mantenimientos y calibraciones preventivas con su respectivo registro en formatos. Además, es importante contar con los manuales e instructivos de uso y así, evitar riesgos de contaminación cruzada, deterioro, accidentes laborales y mal funcionamiento.',

        imagen: require('@/assets/curso/temas/imagen-utensilios-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
