<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  //(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-titulo-sexto
      h4.texto-titulo-sintesis Manejo de la producción agroecológica.
      p.texto-titulo-sintesis Síntesis: CF3 Labores culturales.

    p En los cultivos se deben llevar a cabo la realización de prácticas y técnicas culturales que se realizan desde el momento de la siembra hasta la cosecha de los cultivos. El objetivo de estas labores es proporcionar las condiciones y los requerimientos necesarios para un adecuado crecimiento de las plantas y, por ende, lograr una alta productividad y rendimiento de las cosechas, siendo necesaria la ejecución de procedimientos y métodos que requieren de instalaciones, herramientas y equipos específicos. Así se logra la implementación de un manejo agroecológico idóneo, estableciendo prácticas agrícolas sostenibles.
    p.mb-5 A continuación, en el siguiente mapa conceptual, encontrará un resumen de lo visto en el componente. 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/imagen-sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
