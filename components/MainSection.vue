<template lang="pug">
  section.section__wrap
    slot
</template>

<style lang="scss">
.section__wrap {
  color: #999;
  margin: 0 auto;
  width: 90%;
  @include mq-lg {
    width: 50%;
  }
}
</style>
