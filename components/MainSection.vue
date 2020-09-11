<template lang="pug">
  section.section__wrap
    slot
</template>

<style lang="scss" scoped>
.section__wrap {
  color: #999;
  margin: 0 auto;
  width: 90%;
  height: 100%;
  min-height: calc(100vh - 60px);
  @include mq-lg {
    min-height: calc(100vh - 120px);
    width: 50%;
  }
}
</style>
