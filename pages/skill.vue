<template lang="pug">
  section
    main-section
      main-title
        |SKILL
      tile-contents
        main-article
          icon-description(name="html5" description="HTML")
        main-article
          icon-description(name="css3" description="CSS")
        main-article
          icon-description(name="javascript_badge" description="JavaScript")
      tile-contents
        main-article
          icon-description(name="ruby_on_rails" description="Ruby on Rails")
        main-article
          icon-description(name="sass" description="Sass")
        main-article
          icon-description(name="python" description="Python")
      tile-contents
        main-article
          icon-description(name="aws" description="AWS")
        main-article
          icon-description(name="docker" description="Docker")
        main-article
          icon-description(name="vim" description="Vim")
      tile-contents
        main-article
          icon-description(name="vuejs" description="Vue.js" awesome="fab")
        main-article
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

<style lang="scss" scoped>
section {
  .icon__wrap {
    text-align: center;
    .icon__img {
      border-radius: 50%;
      height: 100px;
      width: 100px;
      object-fit: cover;
    }
    .icon__description {
      width: 100%;
    }
    a.icon__social__link {
      padding: 0 $_font_size-md * 0.5;
      color: #999;
      &.is-twitter {
        &:hover {
          color: #55acee;
        }
      }
      &.is-facebook {
        &:hover {
          color: #3b5998;
        }
      }
      &.is-github {
        &:hover {
          color: #23282d;
        }
      }
    }
  }
}
</style>
