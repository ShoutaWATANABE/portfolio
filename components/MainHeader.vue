<template lang="pug">
  section.header__wrap
    nuxt-link(class="header__link is-title" to="/") ShoutaWATANABE Portfolio
    ul.header__ul
      li.header__li
        // nuxt-link(class="header__link" v-scroll-to="'#about'" to) About
        nuxt-link(class="header__link" to="/about") About
      li.header__li
        // nuxt-link(class="header__link" v-scroll-to="'#skill'" to) Skill
        nuxt-link(class="header__link" to="/skill") Skill
      li.header__li
        // nuxt-link(class="header__link" v-scroll-to="'#works'" to) Works
        nuxt-link(class="header__link" to="/works") Works
      li.header__li
        // nuxt-link(class="header__link" v-scroll-to="'#contact'" to) Contact
        nuxt-link(class="header__link" to="/contact") Contact
</template>

<style lang="scss" scoped>
.header__wrap {
  background-color: #fff;
  font-family: 'Josefin Sans';
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
  padding: $_font_size-md * 0.5;
  display: inline-block;
  @include mq-lg {
    padding: $_font_size-md;
  }
}
.header__link {
  color: #999;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
  &.is-title {
    display: none;
    @include mq-lg {
      display: inline-block;
      font-size: $_font_size-md;
      padding: $_font_size-md;
    }
  }
}
</style>
