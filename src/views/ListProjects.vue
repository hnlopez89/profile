<template>
  <div class="view">
      <h1 class="title"><span>Proyectos</span></h1> 
      <img id="projectsWelcome" src="../assets/projectWallpaper.jpg" alt="project Picture">
      <div v-for="(data, index) in myJson" :key="data.id">
      <div v-for="(project, index) in data" :key="project.id">
        
        <h1>
          {{project.project}}
        </h1>
             <h2>{{project.description}}</h2> 
       <!--  <textarea maxlength="250" rows="3" cols="120">
          Descripción: {{data[0].description}}
        </textarea>  -->
      <div id="functionLists" >
        <p class="functions"> &#x25B6; {{project.functionalities[0].name}}</p>
        <p class="functions"> &#x25B6; {{project.functionalities[1].name}}</p>
        <p class="functions"> &#x25B6; {{project.functionalities[2].name}}</p>
      </div>
      <router-link :to="{name: 'Project', params: { id: project.id}}" 
         >Ver más</router-link>
    </div>
  </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
import axios from 'axios'
import json from './../profile.json'

export default {
  name: "ListProjects",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      myJson: json,
    }
  },
}
</script>

<style>

</style>