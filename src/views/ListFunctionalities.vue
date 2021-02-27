<template>
    <div class="view">
      <h1 class="title"><span>Funcionalidades</span></h1> 
      <img id="projectsWelcome" src="../assets/functionalityWallpaper.jpg" alt="project Picture">
      <div v-for="data in myJson" :key="data.id">
        <div v-for="project in data" :key="project.id">
          <div v-for="functionalities in project.functionalities" :key="functionalities.id">
         <div v-if="functionalities.video">
          <router-link :to="{name: 'Functionality', params: {id:project.id, idF:functionalities.idF}}" 
         >
          <h1>
           {{functionalities.name}}
          </h1>
          <p>
            {{functionalities.description}}
          </p>
      </router-link>
         </div>
        </div>
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