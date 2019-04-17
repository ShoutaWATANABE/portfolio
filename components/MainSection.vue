<template lang="pug">
  section.section__wrap(:id="anchor")
    slot
</template>

<script>
export default {
  props: {
    anchor: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.section__wrap {
  color: #999;
  margin: 0 auto;
  min-height: 100vh;
  width: 90%;
  @include mq-lg {
    width: 50%;
  }
}
</style>
