<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center
    
      .col-md.col-lg-12
      
        p.p-2 Apreciado aprendiz, bienvenido a este nuevo componente formativo donde se abordan temáticas relacionadas con el manejo de cultivos y actividades que buscan desarrollar labores culturales según criterios agroecológicos, así como también la fertilización de cultivos de acuerdo con los criterios técnicos, las necesidades de cada predio y los principios agroecológicos. Como veremos en el siguiente video.
  
  
    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
