<template lang="pug">
  section
    .top__wrap
      .top__content
        |ShoutaWATANABE
        br
        |Portfolio
</template>

<style lang="scss" scoped>
.top__wrap {
  position: relative;
  height: 600px;
  @include mq-lg {
    height: 1000px;
  }
  .top__content {
    font-size: $_font_size-lg;
    position: absolute;
    top: 50%;
    /* left: 25%; */
    transform: translate(0, -50%);
  }
}
</style>
