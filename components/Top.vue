<template lang="pug">
  .top__wrap
    .top__content
      |ShoutaWATANABE
      br
      |Portfolio
</template>

<style lang="scss" scoped>
.top__wrap {
  /* position: relative; */
  height: 100%;
  min-height: calc(100vh - 60px);
  @include mq-lg {
    min-height: calc(100vh - 120px);
  }
}
.top__content {
    font-size: $_font_size-lg;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
</style>
