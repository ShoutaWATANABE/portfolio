<template lang="pug">
  layout
    main-section
      main-title
        |ABOUT
      tile-contents
        about-article
          .icon__wrap
            img.icon__img(src="~/assets/images/icon.jpg")
            .icon__description
              |ShoutaWATANABE
            .icon__social__wrap
              a.icon__social__link.is-twitter(href="https://twitter.com/_ShoutaWATANABE" target="_blank")
                font-awesome-icon(:icon="['fab', 'twitter']")
              a.icon__social__link.is-facebook(href="https://www.facebook.com/profile.php?id=100005684404318" target="_blank")
                font-awesome-icon(:icon="['fab', 'facebook']")
              a.icon__social__link.is-github(href="https://github.com/ShoutaWATANABE" target="_blank")
                font-awesome-icon(:icon="['fab', 'github']")
        about-article
          dl
            dt 出身地
            dd 宮城県石巻市
            dt 生年月日
            dd 1992年6月12日
            dt 趣味
            dd 野球観戦
      main-article
        p
          |学生時代にWeb制作を学び、大学卒業後は一般職として就職しましたが、2016年9月に社内異動でエンジニアの道へ。
          br
          |現在はWebサービスの開発・運用を中心に、社内エンジニアとしての幅広いニーズに応えた経験を生かして、社内システムの運用サポートなども行なっています。
          br
          |自分のスキルとセンスに磨きをかける日々。
        p
          |主な業務内容
        ul
          li 基幹システム(顧客データベース)の開発・運用
          li リクルートサイトの企画・開発・運用
          li ランディングページ作成
          li 社内インフラの構築
          li 機械学習を活用した業務アプリの開発
      home-link
</template>

<script>
import Vue from 'vue'
import TileContents from '~/components/TileContents.vue'
import AboutArticle from '~/components/AboutArticle.vue'
Vue.component('TileContents', TileContents)
Vue.component('AboutArticle', AboutArticle)
export default {}
</script>

<style lang="scss" scoped>
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
p {
  padding: $_font_size-md 0;
}
</style>
