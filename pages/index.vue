<template lang="pug">
  layout
    section
      main-section
        top
</template>

<script>
import Vue from 'vue'
import Top from '~/components/Top.vue'
Vue.component('Top', Top)
export default {}
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
