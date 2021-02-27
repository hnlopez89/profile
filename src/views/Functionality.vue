<template>
  <div class="view">
     
      <h1 class="title"><span>{{functionality.name}}</span></h1> 
       <h3>{{functionality.description}}</h3>
      <iframe width="620" height="315"
      frameborder="0" allowfullscreen
        :src="functionality.video">
      </iframe>
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
      myJson: json,
      functionality: null,
    }
  },
  methods: {
    async getFunctionality() {
      try{
        const response = await axios.get(`${process.env.VUE_APP_HOST}/projects/`
         + this.$route.params.id + 
         `?functionalities.id=` + this.$route.params.idF);
      this.functionality = response.data.functionalities[this.$route.params.idF - 1];
      console.log(this.functionality.picture[0]);
      } catch(error) {
        console.error(error);
      }
    }
  },
  async created() {
    this.getFunctionality();
  }
}
</script>

<style>

</style>