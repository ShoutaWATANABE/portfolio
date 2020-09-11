<template lang="pug">
  layout
    main-section(anchor="works")
      main-title
        |WORKS
      main-article
        tile-contents
          tile-link(url="/" value="ShoutaWATANABE Portfolio" :date="portfolio.date" :path="portfolio.path" :skills="portfolio.skills")
        tile-contents
          tile-link(url="https://hinaken.com" value="日向研究室 公式サイト" :date="hinaken.date" :path="hinaken.path" :skills="hinaken.skills")
      home-link
</template>

<script>
import Vue from 'vue'

import portfolio from '~/assets/images/works/portfolio.png'
import hinaken from '~/assets/images/works/hinaken.png'

import TileContents from '~/components/TileContents.vue'
import TileLink from '~/components/TileLink.vue'
Vue.component('TileContents', TileContents)
Vue.component('TileLink', TileLink)

export default {
  data() {
    return {
      portfolio: {
        date: '2019.03',
        path: portfolio,
        skills: ['Vue.js', 'Nuxt.js', 'pug', 'Sass']
      },
      hinaken: {
        date: '2020.09',
        path: hinaken,
        skills: ['React.js', 'Next.js', 'TypeScript', 'Sass']
      }
    }
  }
}
</script>
