<template lang="pug">
  section
    main-section(anchor="blog")
      main-title
        |BLOG
      main-article
        div(v-for="(post, index) in posts" :key=index )
          blog-item(:day="post.day" :title="post.title" :category="post.category" :href="post.href")
        div.blog__link__wrap
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
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    // 記事を取得する
    const url = '/api/ShoutaWATANABE/moratoriumlife.hatenablog.jp/atom/entry'
    const res = await axios.get(url, {
      auth: {
        username: process.env.HATENA_NAME,
        password: process.env.HATENA_PASS
      }
    })
    // 記事を格納する
    const itemList = []
    xml2js.parseString(res.data.toString(), (err, result) => {
      if (err) {
        // reject(err)
      } else {
        const entry = result.feed.entry
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
    this.posts = itemList.slice(0, 5)
  }
}
</script>

<style lang="scss" scoped>
section {
  .blog__link__wrap {
    padding: 1rem 0;
    text-align: center;
  }
}
</style>
