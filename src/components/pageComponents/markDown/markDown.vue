<template>
  <div class="markdown-body" v-html="marked(text)"/>
</template>

<script>
import marked from 'marked'
export default {
  name: 'mark-down',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  created () {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight (code, lang) {
        return require('highlight.js').highlight(lang, code).value
      }
    })
  },
  methods: {
    marked (text) {
      return marked(text)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url(./github-markdown.css);
  @import url(./atom-one-light.css);
</style>
