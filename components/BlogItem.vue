<template lang="pug">
  div.blog__item
    |{{ day }}
    a.blog__link(:href="href")
      |{{ title }}
    span.blog__category(v-for="(cate, index) in category" :key=index  :class="'is-' + cate.name")
      a(:href="'http://blog.shoutawatanabe.info/category/' + cate.name")
        |{{ cate.name }}
</template>

<script>
export default {
  props: {
    day: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    href: {
      type: String,
      required: true,
      default: ''
    },
    category: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  &__title {
    padding: 1rem;
    position: relative;
    text-align: left;
    border-bottom: solid 1px #aaa;
    &:before {
      content: '';
      position: absolute;
      display: block;
      height: 3.5rem;
      width: 5px;
      left: 0;
      top: 0;
      background-color: #ddd;
    }
  }
  &__contents {
    text-align: center;
  }
  &__item {
    border-bottom: dotted 1px #aaa;
    padding: 1rem;
    text-align: left;
    line-height: 1.5rem;
  }
  &__category {
    background: #999;
    color: #fff;
    padding: 0.25rem 1rem;
    font-size: 0.5rem;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
    &.is-hinaken {
      background: #ff7800;
    }
    &.is-qiita {
      background: #56c500;
    }
    &:not(:last-of-type) {
      margin-right: 0.5rem;
    }
  }
  &__link {
    display: block;
    text-decoration: none;
    color: #aaa;
    margin: 0.5rem 0;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
