<template lang="pug">
  section
    main-header
    main-section(anchor="top")
      top
    main-section(anchor="about")
      main-title
        |ABOUT
      tile-contents
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
      main-article
        p
          |学生時代にほぼ独学でWeb制作を学び、大学卒業後、現在の会社に一般職として就職しましたが、2016年9月に異動しエンジニアの道へ。
          br
          br
          |社内データベースの開発・運用、リクルートサイトの企画・開発・運用、ランディングページ作成など、社内プロジェクトの幅広いニーズに応えながら、自分のスキルとセンスに磨きをかける日々を送っております。
    main-section(anchor="skill")
      main-title
        |SKILL
      tile-contents
        main-article
          icon-description(name="html5" description="HTML")
        main-article
          icon-description(name="css3" description="CSS")
        main-article
          icon-description(name="javascript" description="JavaScript")
      tile-contents
        main-article
          icon-description(name="ruby_on_rails" description="Ruby on Rails")
        main-article
          icon-description(name="sass" description="Sass")
    main-section(anchor="works")
      main-title
        |WORKS
      tile-contents
        tile-link(url="/" value="ShoutaWATANABE Portfolio" :path="portfolio")
    main-section(anchor="contact")
      main-title
        |CONTACT
      main-form
    main-footer
</template>

<script>
import portfolio from '~/assets/images/works/portfolio.png'
export default {
  data() {
    return {
      portfolio: portfolio
    }
  }
}
</script>

<style lang="scss">
section {
  font-family: 'Josefin Sans';
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
  p.is-coming__soon {
    padding: $_font_size-md * 10 0;
    text-align: center;
  }
}
</style>
