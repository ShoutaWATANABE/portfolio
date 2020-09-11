<template lang="pug">
  layout
      main-section
        main-title
          |SKILL
        tile-contents
          icon-description(name="html5" description="HTML")
          icon-description(name="css3" description="CSS")
          icon-description(name="javascript_badge" description="JavaScript")
          icon-description(name="ruby_on_rails" description="Ruby on Rails")
          icon-description(name="sass" description="Sass")
          icon-description(name="python" description="Python")
          icon-description(name="aws" description="AWS")
          icon-description(name="docker" description="Docker")
          icon-description(name="vim" description="Vim")
          icon-description(name="vuejs" description="Vue.js" awesome="fab")
          icon-description(name="react" description="React.js")
        home-link
</template>

<script>
import Vue from 'vue'
import TileContents from '~/components/TileContents.vue'
import IconDescription from '~/components/IconDescription.vue'
Vue.component('TileContents', TileContents)
Vue.component('IconDescription', IconDescription)
export default {}
</script>
