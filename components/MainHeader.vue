<template lang="pug">
  section.header__wrap
    a.header__link.is-title(href="/") ShoutaWATANABE Portfolio
    ul.header__ul
      li.header__li
        nuxt-link(class="header__link" v-scroll-to="'#about'" to) About
      li.header__li
        nuxt-link(class="header__link" v-scroll-to="'#skill'" to) Skill
      li.header__li
        nuxt-link(class="header__link" v-scroll-to="'#works'" to) Works
      li.header__li
        nuxt-link(class="header__link" v-scroll-to="'#column'" to) Column
      li.header__li
        nuxt-link(class="header__link" v-scroll-to="'#contact'" to) Contact
</template>

<style lang="scss" scoped>
.header__wrap {
  background-color: #fff;
  height: $_font_size-md * 3;
  position: sticky;
  top: 0;
  z-index: 10;
}
.header__ul {
  right: $_font_size-md;
  position: absolute;
  top: 0;
}
.header__li {
  padding: $_font_size-md * 0.25;
  display: inline-block;
  @include mq-lg {
    padding: $_font_size-md * 0.5;
  }
}
.header__link {
  color: #999;
  text-decoration: none;
  font-size: $_font_size-md * 0.75;
  @include mq-lg {
    font-size: $_font_size-md;
  }
  &:hover {
    opacity: 0.5;
  }
  &.is-title {
    display: none;
    @include mq-lg {
      display: inline-block;
      font-size: $_font_size-md;
      padding: $_font_size-md * 0.5;
    }
  }
}
</style>
