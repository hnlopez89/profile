<template>
  <div class="view">
      <h1 class="title"><span>Gentes de Martes:</span></h1> 
      <ul v-for="entry in blog.entries.filter(e => e.public)" :key="entry.id" class="blogList">
          <li>
                <router-link  
                :to="{name:entry.file}">
                <div id="entryPic">
                    <img :src="require(`@/assets/blog/${entry.img}`)" alt="">
                </div>
                <div> 
                    <h1>{{entry.title}}</h1>
                    <p id="introBlog">{{entry.intro}}</p>
                    <p id="date">{{entry.date}}</p>
                </div>
                </router-link>
          </li>
          <div id="salto"> </div>
      </ul>
  </div>
</template>

<script>
import json from './../blog.json'
export default {
    data() {
        return {
            blog: json
        }
    },
}
</script>

<style>

</style>