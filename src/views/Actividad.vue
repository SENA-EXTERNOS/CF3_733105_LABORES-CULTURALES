<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  //(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.puzzle-piece.fas.fa-puzzle-piece
        h1 Actividad didáctica
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/temas/imagen-act-didactica.png", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.acento-contenido
          h2 Completar
        p.mb-4 A continuación, encontrará una actividad didáctica que le permitirá afianzar los conocimientos sobre manejo de labores culturales, según los procedimientos técnicos y las buenas prácticas agrícolas. 
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/Actividad_didactica-CF3-T_733105_Labores culturales - Storyline output/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
