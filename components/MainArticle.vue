<template lang="pug">
  article.main__article
    slot
</template>

<style lang="scss">
.main__article {
  padding: $_font_size-md * 1.5;
  @include mq-lg {
    padding: $_font_size-md * 3;
  }
}
</style>
