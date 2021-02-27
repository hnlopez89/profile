<template>
        <div class="father" id="header">
          <div>
            <img id="logo" src="../assets/logoH.png" />
          </div>
          <div id="nav">
          <router-link to="/">HOME</router-link>
          <router-link to="/projects">MIS PROYECTOS</router-link>
          <router-link to="/functionalities">MIS FUNCIONALIDADES</router-link>
          <router-link to="/about">ABOUT</router-link>
          <router-link to="/contact">CONTACTO</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Menu"
}
</script>

<style scoped>
</style>