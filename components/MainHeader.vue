<template lang="pug">
  section.header__wrap
    a.header__link.is-title(href="/") ShoutaWATANABE Portfolio
    ul.header__ul
      li.header__li
        a.header__link(href="#") About
      li.header__li
        a.header__link(href="#") Skill
      li.header__li
        a.header__link(href="#") Works
      li.header__li
        a.header__link(href="#") Column
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
  padding: $_font_size-md * 0.5;
  display: inline-block;
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
      padding: $_font_size-md * 0.5;
    }
  }
}
</style>
