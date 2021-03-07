
<template>
  <div class="view">
      <h1 class="title"><span>Acerca de mí</span></h1> 
      <div class="father" id="main">
        <div>
          <p>Desde siempre me han apasionado las tecnologías, conocer tanto mi entorno
            como otros que se antojaban lejanos, y tener la libertad e independencia para conocerlos y moverme por ellos.</p>
          <p>El turismo ha sido un gran pasaporte con el que además de ir desarrollando mi carrera 
            en el sector hotelero hasta llegar a posiciones de gestión a base de sacrificio y trabajo duro, 
            pude satisfacer mis inquietudes y pasiones que han sido el motor que me ha impulsado todo este tiempo.
            Y por ello, me siento un privilegiado.</p>
          <p>El 2020 es un hito histórico negativo, que va a suponer cierres, finales, y también supondrá muchos cambios.
            Es por eso que decidí adelantarme y formarme en programación web.</p>
          <p>Las habilidades que he ido desarrollando en el turismo son fácilmente extrapolables al desarrollo web.
            La constante necesidad de adaptación ante la dependencia de un entorno tan volatil, la vocación por el
            servicio de calidad, la gestión e integración de cuestiones multidisciplinares son claros ejemplos.</p>
          <p>Confío ciegamente en que estas experiencias e inquietudes unidas a mi capacidad de sacrificio y adaptación
            me ayudarán a superar unos retos todavía por definir.</p>
              <div class="father" id="links">
              <a id="email" target="_blank" href="https://drive.google.com/file/d/1AHEhs-x1_2btkXdEiOm4JSulYMoD8iZC/view?usp=sharing">
                  Descargar CV
              </a>
              <a id="email" target="_blank" href="mailto:hnlopez89@gmail.com?Subject=Contacto%20Tempo%20">
                  Contáctame
              </a>
              </div>
        </div>
        <img id="me" src="../assets/me.jpg" />
      </div>
      <h1>Mis herramientas</h1>
      <div class="father" id="toolDiv">
        <img class="tools" src="../assets/icons/html5_logo.png" />
        <img class="tools" src="../assets/icons/css3.png" />
        <img class="tools" id="js" src="../assets/icons/js.png" />
        <img class="tools" src="../assets/icons/vuejs.png" />
        <img class="tools" id="node" src="../assets/icons/nodejs-plain.svg" />
        <img class="tools" src="../assets/icons/sql.png" />
      </div>


    <h1>Idiomas</h1>
    <div id="languages">

      <div v-for="(languages, index) in myJson.languages" :key="languages.id">
        <span>
          <img class="languagesPic" :src="require(`@/assets/icons/${languages.language}`)" alt="idioma">
        <progress :value=(languages.level) max="10" ></progress>
        </span>
      </div> 
    </div>
    <h1>Habilidades blandas</h1>
    <ul id="softSkills">
      <li  v-for="(softSkills, index) in myJson.softSkills" :key="softSkills.id">
        <p>{{softSkills}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import json from './../profile.json'
import Timeline from 'timeline-vuejs'

export default {
  components: {
    Timeline
  },
    data() {
    return {
      myJson: json.profile,
      project: 'project',
      academic: 'academic',
      experience: 'experience',
    }
  },
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style scoped >
</style>