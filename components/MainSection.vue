<template lang="pug">
  section.section__wrap
    slot
</template>

<style lang="scss">
.section__wrap {
  background-color: #ccc;
  margin: 0 auto;
  width: 90%;
  @include mq-lg {
    width: 50%;
  }
  color: #999;
  font-size: $_font_size-lg;
}
</style>
