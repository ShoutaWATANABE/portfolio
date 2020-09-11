<template lang="pug">
  div
    float-menu
    main-header
    slot
    main-footer
</template>

<script>
import Vue from 'vue'
import MainHeader from '~/components/MainHeader.vue'
import MainFooter from '~/components/MainFooter.vue'
import FloatMenu from '~/components/FloatMenu'
Vue.component('MainHeader', MainHeader)
Vue.component('MainFooter', MainFooter)
Vue.component('FloatMenu', FloatMenu)
export default {}
</script>
