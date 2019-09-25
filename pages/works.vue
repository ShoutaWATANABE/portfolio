<template lang="pug">
  section
    main-section(anchor="works")
      main-title
        |WORKS
      main-article
        tile-contents
          tile-link(url="/" value="ShoutaWATANABE Portfolio" :date="portfolio.date" :path="portfolio.path" :skills="portfolio.skills")
      home-link
</template>

<script>
import portfolio from '~/assets/images/works/portfolio.png'

export default {
  data() {
    return {
      portfolio: {
        date: '2019.03',
        path: portfolio,
        skills: ['html', 'css', 'javascript', 'nuxt.js', 'pug', 'sass']
      }
    }
  }
}
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
  p.is-coming__soon {
    padding: $_font_size-md * 10 0;
    text-align: center;
  }
}
</style>
