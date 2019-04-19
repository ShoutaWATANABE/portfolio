<template lang="pug">
  section
    // main-header
    main-section(anchor="about")
      main-title
        |ABOUT
      tile-contents
        main-article
          .icon__wrap
            img.icon__img(src="~/assets/images/icon.jpg")
            .icon__description
              |ShoutaWATANABE
            .icon__social__wrap
              a.icon__social__link.is-twitter(href="https://twitter.com/s06w12" target="_blank")
                font-awesome-icon(:icon="['fab', 'twitter']")
              a.icon__social__link.is-facebook(href="https://www.facebook.com/profile.php?id=100005684404318" target="_blank")
                font-awesome-icon(:icon="['fab', 'facebook']")
              a.icon__social__link.is-github(href="https://github.com/ShoutaWATANABE" target="_blank")
                font-awesome-icon(:icon="['fab', 'github']")
        main-article
          dl
            dt 出身地
            dd 宮城県石巻市
            dt 生年月日
            dd 1992年6月12日
            dt 趣味
            dd 野球観戦
      main-article
        p
          |仙台市在住。学生時代にWeb制作を学び、大学卒業後、現在の会社に一般職として就職しましたが、2016年9月に異動しエンジニアの道へ。
          br
          br
          |社内データベースの開発・運用、リクルートサイトの企画・開発・運用、ランディングページ作成など、社内プロジェクトの幅広いニーズに応えながら、自分のスキルとセンスに磨きをかける日々を送っております。
</template>

<style lang="scss" scoped>
section {
  .icon__wrap {
    text-align: center;
    .icon__img {
      border-radius: 50%;
      height: 100px;
      width: 100px;
      object-fit: cover;
    }
    .icon__description {
      width: 100%;
    }
    a.icon__social__link {
      padding: 0 $_font_size-md * 0.5;
      color: #999;
      &.is-twitter {
        &:hover {
          color: #55acee;
        }
      }
      &.is-facebook {
        &:hover {
          color: #3b5998;
        }
      }
      &.is-github {
        &:hover {
          color: #23282d;
        }
      }
    }
  }
  p.is-coming__soon {
    padding: $_font_size-md * 10 0;
    text-align: center;
  }
}
</style>
