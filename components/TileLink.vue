<template lang="pug">
  section.tile__link__wrap
    nuxt-link(:to="url" class="tile__link")
      img.tile__link__img(:src="path")
    .tile__link__description
      |{{ value }}
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      default: ''
    },
    url: {
      type: String,
      required: true,
      default: ''
    },
    path: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.tile__link__wrap {
  text-align: center;
}
.tile__link__img {
  margin: 0 auto;
  max-width: 250px;
  box-shadow: 0 0 8px gray;
}
</style>
