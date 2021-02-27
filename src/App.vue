<template>
  <div id="app">
    <opciones />
    <router-view />
    <foot />
  </div>
</template>

<script>
import opciones from "@/components/Menu.vue";
import foot from "@/components/Footer.vue";


export default {
  components: {
    opciones,
    foot
  },
  data() {
    return {
      email: ""
    };
  },
};

</script>

<style scoped>

@import "./css/appStyles.css";

</style>
