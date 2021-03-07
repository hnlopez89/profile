<template>
  <div class="view">
      <h1 class="title"><span>{{functionality.name}}</span></h1> 
       <h3>{{functionality.description}}</h3>
       <div id="containterIframe">
        <iframe width="620" height="315"
        frameborder="0" allowfullscreen
          :src="functionality.video">
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
            <slide v-for="(slide, index) in functionality.picture" :key="index">
              <img class="imgCarrousel" :src="require(`@/assets/${slide}`)" alt="foto">
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
          <hooper-progress slot="hooper-addons"></hooper-progress>
         </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation,
  Progress as HooperProgress} from "hooper";
import "hooper/dist/hooper.css";
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
      myJson: json,
      functionality: json.projects.find((project) => project.id === this.$route.params.id).
      functionalities.find((functionality) => functionality.idF === this.$route.params.idF),
    }
  },
}
</script>

<style>

</style>