<template lang="pug">
  article.main__article
    slot
</template>

<style lang="scss" scoped>
.main__article {
  padding: $_font_size-md $_font_size-md * 0.5;
  @include mq-lg {
    padding: $_font_size-md * 3;
  }
}
</style>
