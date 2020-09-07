<template lang="pug">
  section
    main-section(anchor="blog")
      main-title
        |BLOG
      main-article
        div(v-for="(post, index) in posts" :key=index )
          blog-item(:day="post.date" :title="post.title" :category="post.category" :href="post.href")
        div.blog__link__wrap
          a(href="https://blog.shoutawatanabe.info/") and more...
      home-link
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    // 記事を取得する
    const url = 'https://blog.shoutawatanabe.info/wp-json/wp/v2/'
    let itemList = []
    const posts_data = await axios.get(url+ 'posts?per_page=5&_envelope')
    // const tags_data = await axios.get(url+ 'tags?per_page=100&_envelope')
    const categories_data = await axios.get(url+ 'categories?per_page=100&_envelope')
    for (const post of posts_data.data.body) {
      let category_group = [];
      if ( post.categories.length > 0 ) {
        post.categories.map((post_category)=>{
          category_group = category_group.concat(categories_data.data.body.filter((category) => {
            if (post_category == category.id) return true;
          }))
        })
      }
      const item = {
        date: moment(post.date).format('YYYY-MM-DD'),
        title: post.title.rendered,
        category: category_group,
        href: post.link
      }
      itemList.push(item)
    }
    // 記事を格納する
    this.posts = itemList
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
