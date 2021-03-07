<template>
    <div class="view">
      <h1 class="title"><span>Funcionalidades</span></h1> 
      <div class="parallax" id="functionalityWallpaper">
      </div>
      <div v-for="data in myJson" :key="data.id">
        <div v-for="project in data" :key="project.id">
          <div v-for="functionalities in project.functionalities" :key="functionalities.id">
          <ul  v-if="functionalities.video" id="functionatility">
            <h2>&#x1F449; {{functionalities.name}}:</h2>
            <li>
            <h4>{{functionalities.description}}</h4>
            <router-link tag="button" :to="{name: 'Functionality', params: {id:project.id, idF:functionalities.idF}}">
              Ver más
            </router-link>
            </li>
          </ul>
        </div>
      </div>
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
      myJson: json,
    }
  },
}
</script>

<style>

</style>