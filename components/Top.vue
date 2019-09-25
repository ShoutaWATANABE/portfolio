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
  min-height: calc(100vh - 60px);
  margin-top: $_font_size-md * -3;
  .top__content {
    font-size: $_font_size-lg;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>
