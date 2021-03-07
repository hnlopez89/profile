<template>
  <div id="app">
    <div id="burgerDiv">
      <router-link to="/">
        <img id="logo" src="./assets/logoH.png"  />
      </router-link>
      <img @click="showPanel" src="./assets/icons/menu.png" alt="">
    </div>
    <opciones />
    <router-view />
    <foot />
    <slideout-panel></slideout-panel>
  </div>
</template>

<script>
import opciones from "@/components/Menu.vue";
import foot from "@/components/Footer.vue";
import sidebar from "@/components/SideBarComp.vue";


export default {
  components: {
    opciones,
    foot,
    sidebar
  },
  data() {
    return {
      email: ""
    };
  },
  methods: {
    showPanel() {
      const panel1Handle = this.$showPanel({
        component: sidebar,
        openOn: "right",
        width: 250,
        closePanel() {
          this.$emit("closePanel", {});
        },
      });
      panel1Handle.promise.then((result) => {});
    },
      hidePanel() {
      this.panelResult.hide();
    },
  }
}

</script>

<style scoped>

@import "./css/appStyles.css";

</style>
