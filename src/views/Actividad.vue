<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/temas/ad.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.acento-contenido
          h2 Manejando las labores culturales
        p.mb-4 Esta actividad le permitirá determinar el grado de apropiación de los contenidos del componente formativo.

          br
          br
          |De acuerdo con la definición planteada, digite correctamente en el campo vacío, la palabra o términos que completarían el sentido real de la proposición.

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
