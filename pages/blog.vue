<template lang="pug">
  section
    main-section(anchor="blog")
      main-title
        |BLOG
      main-article
        |{{posts}}
      home-link
</template>

<script>
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    const url =
      'https://blog.hatena.ne.jp/ShoutaWATANABE/moratoriumlife.hatenablog.jp/atom'
    axios
      .get(url, {
        auth: {
          username: 'ShoutaWATANABE',
          password: 'occuxnfqlt'
        }
      })
      .then(response => (this.posts = response))
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
