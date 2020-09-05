<template lang="pug">
  div.blog__item
    |{{ day }}
    a.blog__link(:href="href")
      |{{ title }}
    span.blog__category(v-for="(cate, index) in category" :key=index  :class="'is-' + cate.$.term")
      a(:href="'https://moratoriumlife.hatenablog.jp/archive/category/' + cate.$.term")
        |{{ cate.$.term }}
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
      type: [],
      required: false,
      default: []
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
    border-bottom: solid 1px #AAA;
    &:before {
      content: "";
      position: absolute;
      display: block;
      height: 3.5rem;
      width: 5px;
      left: 0;
      top: 0;
      background-color: #DDD;
    }
  }
  &__contents {
    text-align: center;
  }
  &__item{
    border-bottom: dotted 1px #AAA;
    padding: 1rem;
    text-align: left;
    line-height: 1.5rem;
  }
  &__category {
    background: #999;
    color: #FFF;
    padding: .25rem 1rem;
    font-size: .5rem;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
      opacity: .5;
    }
    a {
      color: #FFF;
      text-decoration: none;
    }
    &.is-hinaken {
      background: #FF7800;
    }
    &.is-qiita {
      background: #56C500;
    }
    &:not(:last-of-type) {
      margin-right: .5rem;
    }
  }
  &__link {
    display: block;
    text-decoration: none;
    color: #AAA;
    margin: .5rem 0;
    &:hover {
      opacity: .5;
    }
  }
}

</style>
