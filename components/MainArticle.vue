<template lang="pug">
  article.main__article
    slot
</template>

<style lang="scss" scoped>
.main__article {
  font-family: 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial', 'Hiragino Sans',
    'ヒラギノ角ゴシック', YuGothic, 'Yu Gothic', 'メイリオ', Meiryo,
    'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  padding: $_font_size-md * 1.5;
  @include mq-lg {
    padding: $_font_size-md * 3;
  }
}
</style>
