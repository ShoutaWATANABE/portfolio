<template lang="pug">
  article.about__article
    slot
</template>

<style lang="scss" scoped>
.about__article {
  padding: $_font_size-md $_font_size-md * 0.5;
  width: 100%;
  @include mq-lg {
    padding: $_font_size-md * 3;
    width: 50%;
  }
}
</style>
