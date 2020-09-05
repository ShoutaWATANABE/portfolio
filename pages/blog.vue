<template lang="pug">
  section
    main-section(anchor="blog")
      main-title
        |BLOG
      main-article
        ul
          li(v-for="(post, index) in posts" :key=index)
            |{{ post.day }}
            |{{ post.title }}
            p
              span(v-for="(cate, index) in post.category" :key=index)
                |{{ cate.$.term }}
        a(href="https://moratoriumlife.hatenablog.jp/") and more...
      home-link
</template>

<script>
import axios from 'axios'
import xml2js from 'xml2js'
import moment from 'moment'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.post['Access-Control-Allow-Methods'] =
  'POST,GET,OPTIONS,DELETE'
axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'x-requested-with'

export default {
  async asyncData() {
    // 記事を取得する
    const url = '/api/ShoutaWATANABE/moratoriumlife.hatenablog.jp/atom/entry'
    const res = await axios.get(url, {
      auth: {
        username: process.env.HATENA_NAME,
        password: process.env.HATENA_PASS
      }
    })
    // 記事を格納する
    let itemList = []
    xml2js.parseString(res.data.toString(), (err, result) => {
      if (err) {
        reject(err)
      } else {
        const entry = result.feed.entry
        const next_url = result.feed.link[1].$.href;
        for (const e of entry) {
          if (e['app:control'][0]['app:draft'][0] === 'yes') {
            continue
          }
          const item = {
            day: moment(e.updated.toString()).format('YYYY-MM-DD'),
            title: e.title.toString(),
            category: e.category,
            href: e.link[1].$.href
          }
          itemList.push(item)
        }
      }
    })
    return { posts: itemList.slice(0, 5) }
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
