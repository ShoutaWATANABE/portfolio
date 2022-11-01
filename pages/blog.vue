<template lang="pug">
  layout
    main-section
      main-title
        |BLOG
      main-article
        div(v-if="posts.length==0" class="blog__loading__icon__wrap")
          span(class="blog__loading__icon")
            font-awesome-icon(:icon="['fa','spinner']" class="fa-spin")
        div(v-else)
          div(v-for="(post, index) in posts" :key=index )
            blog-item(:day="post.date" :title="post.title" :category="post.category" :href="post.href")
        div.blog__link__wrap
          a(href="https://blog.shoutawatanabe.info/") and more...
      home-link
</template>

<script>
import Vue from 'vue'

import axios from 'axios'
import moment from 'moment'

import BlogItem from '~/components/BlogItem.vue'
Vue.component('BlogItem', BlogItem)

export default {
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    const url = 'https://blog.shoutawatanabe.info/wp-json/wp/v2/'
    const itemList = []
    const postsData = await axios.get(url + 'posts?per_page=5&_envelope')
    // const tags_data = await axios.get(url + 'tags?per_page=100&_envelope')
    const categoriesData = await axios.get(
      url + 'categories?per_page=100&_envelope'
    )
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
.blog__link__wrap {
  padding: 1rem 0;
  text-align: center;
}
.blog__loading__icon__wrap {
  text-align: center;
}
.blog__loading__icon {
  font-size: 32px;
}
</style>
