<template>
  <div>
      <p>{{entry}}</p>
      <Blog />
      <component :is="dynamicComponent" />
      <h1>Let's see what happens</h1>
  </div>
</template>

<script>
import Blog from "../content/introduction.md"
import json from './../blog.json'


export default {
    props: ['file'],
    components: {
        Blog
    },
    data() {
        return {
            data: json.entries,
            entry: json.entries.find((e) => e.id === this.$route.params.id),
            title: "",
            dynamicComponent: "",
        }
    },
    created() {
    const markdown = require(`../content/${this.entry.file}`)
      this.title = markdown.attributes.title
      this.dynamicComponent = markdown.file
    }
}
</script>

<style>

</style>