<template>
  <div class="view">
      <h1 class="title"><span>Proyectos</span></h1> 
<!--       <img id="projectsWelcome" src="../assets/projectWallpaper.jpg" alt="project Picture">
 -->      <div class="parallax" id="projectWallpaper">
      </div>
      <div v-for="(data, index) in myJson" :key="data.id">
        
        <h1 class="title"><span>
          {{data.project}}
          </span>
        </h1>
             <h2>{{data.description}}</h2> 
      
      <div id="functionLists" >
        <p class="functions"> &#x25B6; {{data.functionalities[0].name}}</p>
        <p class="functions"> &#x25B6; {{data.functionalities[1].name}}</p>
        <p class="functions"> &#x25B6; {{data.functionalities[2].name}}</p>
      </div>
      <router-link id="seeProject" tag="button" :to="{name: 'Project', params: { id: data.id}}" 
         >Ver proyecto</router-link>
    </div>
 </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
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
      myJson: json.projects,
    }
  },
}
</script>

<style>

</style>