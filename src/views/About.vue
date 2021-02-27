
<template>
  <div class="view">
      <h1 class="title"><span>Acerca de mí</span></h1> 
    <div class="father" id="main">
      <div>
        <p>Desde siempre me han apasionado las tecnologías, conocer tanto mi entorno
          como otros que se antojaban lejanos, y tener la libertad e independencia para conocerlos.</p>
        <p>El turismo ha sido un gran pasaporte con el que además de ir desarrollando mi carrera en el sector hotelero hasta llegar a posiciones de gestión a base de sacrificio y trabajo duro, pude satisfacer mis inquietudes y pasiones que han sido el motor que me ha impulsado todo este tiempo. Y por ello, me siento un privilegiado.</p>
        <p>El 2020 es un hito histórico negativo, que va a suponer cierres, finales, y también supondrá muchos cambios. Es por eso que decidí adelantarme y formarme en programación web.</p>
        <p>Mis pasiones y mis inquitudes son fácilmente extrapolables al desarrollo web, al igual que ciertas habilidades que he ido adquiriendo en el sector hotelero.</p>
        <p>Confío ciegamente en que estas habilidades, experiencias, inquietudes y pasiones unidas a mi capacidad de sacrificio y adaptación me ayudarán a superar unos retos todavía por definir.</p>
            <div class="father" id="links">
            <a id="email" target="_blank" href="https://drive.google.com/file/d/1AHEhs-x1_2btkXdEiOm4JSulYMoD8iZC/view?usp=sharing">
                 Descargar CV
            </a>
            <a id="email" target="_blank" href="mailto:hnlopez89@gmail.com?Subject=Contacto%20Tempo%20">
                 Contáctame
            </a>
            </div>
      </div>
      <img src="../assets/me.jpg" />
    </div>
      <h2>Mis herramientas:</h2>
    <div class="father" id="toolDiv">
      <img class="tools" src="../assets/icons/html5_logo.png" />
      <img class="tools" src="../assets/icons/css3.png" />
      <img class="tools" id="js" src="../assets/icons/js.png" />
      <img class="tools" src="../assets/icons/vuejs.png" />
      <img class="tools" id="node" src="../assets/icons/nodejs.png" />
      <img class="tools" src="../assets/icons/sql.png" />
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style scoped >
</style>