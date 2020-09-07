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
    const url =
      process.env.NODE_ENV !== 'production'
        ? '/api/'
        : 'https://blog.shoutawatanabe.info/wp-json/wp/v2/'
    const itemList = []
    const postsData = await axios
      .create({
        withCredentials: process.env.NODE_ENV !== 'production',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,DELETE',
          'Access-Control-Allow-Headers': 'x-requested-with',
          'X-Requested-With': 'XMLHttpRequest'
        },
        timeout: 20000
      })
      .get(url + 'posts?per_page=5&_envelope')
    // const tags_data = await axios.get(url + 'tags?per_page=100&_envelope')
    const categoriesData = await axios
      .create({
        withCredentials: process.env.NODE_ENV !== 'production',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,DELETE',
          'Access-Control-Allow-Headers': 'x-requested-with',
          'X-Requested-With': 'XMLHttpRequest'
        },
        timeout: 20000
      })
      .get(url + 'categories?per_page=100&_envelope')
    for (const post of postsData.data.body) {
      let categoryGroup = []
      if (post.categories.length > 0) {
        post.categories.map(postCategory => {
          categoryGroup = categoryGroup.concat(
            categoriesData.data.body.filter(category => {
              if (postCategory === category.id) return true
            })
          )
        })
      }
      const item = {
        date: moment(post.date).format('YYYY-MM-DD'),
        title: post.title.rendered,
        category: categoryGroup,
        href: post.link
      }
      itemList.push(item)
    }
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
