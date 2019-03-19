<template lang="pug">
  section
    main-header
    main-section
      main-title
        |ABOUT
      two-contents
        main-article
          .icon__wrap
            img.icon__img(src="~/assets/images/icon.jpg")
            .icon__description
              |ShoutaWATANABE
        main-article
          dl
            dt 出身地
            dd 宮城県石巻市
            dt 生年月日
            dd 1992年6月12日
            dt 趣味
            dd 野球観戦
    main-section
      main-title
        |WORKS
    main-section
      main-title
        |COLUMN
    main-section
      main-title
        |SKILL
    main-footer
</template>

<style lang="scss">
section {
  background-color: #eee;
  font-family: 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial', 'Hiragino Sans',
    'ヒラギノ角ゴシック', YuGothic, 'Yu Gothic', 'メイリオ', Meiryo,
    'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  .icon__wrap {
    text-align: center;
    .icon__img {
      border-radius: 50%;
      height: 100px;
      width: 100px;
    }
    .icon__description {
      width: 100%;
    }
  }
}
</style>
