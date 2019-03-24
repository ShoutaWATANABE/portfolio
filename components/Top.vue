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
  height: 100vh;
  margin-top: $_font_size-md * -3;
  .top__content {
    font-size: $_font_size-lg;
    position: absolute;
    top: 50%;
    /* left: 25%; */
    transform: translate(0, -50%);
  }
}
</style>
