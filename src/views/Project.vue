<template>
  <div class="view">
    <p>{{projects}}</p>
      <h1 class="title"><span>{{project.project}}</span></h1> 
       <h3>{{project.description}}</h3>
      <h1 id="technologiesTitle">Tecnologías:</h1>
        <div class="father" id="projectTechnologies">
         <div  v-for="(technology, index) in project.technologies" :key="index">
          <img class="projectTechnology" :src="require(`@/assets/icons/${technology.technology}`)" alt="foto">
          </div>
        </div>
        <div id="containterIframe">
        <iframe width="620" height="315"
        frameborder="0" allowfullscreen
            :src="project.video">
        </iframe>
        </div>
         <hooper
      :progress="true"
      :autoPlay="true"
      :playSpeed="15000"
      :infiniteScroll="true"
      :wheelControl="false"
      :settings="hooperSettings"
    >

      <slide v-for="(slide, index) in project.pictures" :key="index">
        <img class="imgCarrousel" :src="require(`@/assets/${slide.picture}`)" alt="foto">
      </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-progress slot="hooper-addons"></hooper-progress>
         </hooper>
        <h1>Funcionalidades:</h1>
      <div id="functionLists" >
        <div v-for="functionality in project.functionalities" :key="functionality.id">
          <p class="functions"> &#x25B6; {{functionality.name}}</p>
        </div>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation,
  Progress as HooperProgress} from "hooper";
import "hooper/dist/hooper.css";
import axios from 'axios'
import json from './../profile.json'

export default {
  name: "ListProjects",
  components: {
    Hooper,
    Slide,
      HooperProgress,
    HooperNavigation,
  },
  data() {
    return {
       hooperSettings: {
         centerMode: true
       },
      project: json.projects.find((p) => p.id === this.$route.params.id)
    }
  },
}
</script>

<style>

</style>