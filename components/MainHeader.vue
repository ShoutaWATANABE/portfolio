<template lang="pug">
  section.header__wrap
    // name-logo
    // portfolio-logo
    ul.header__ul
      li.header__li
        a.header__link(href="#") About
      li.header__li
        a.header__link(href="#") Works
      li.header__li
        a.header__link(href="#") Column
      li.header__li
        a.header__link(href="#") Skill
</template>

<style lang="scss">
.header__wrap {
  background-color: #fff;
  height: $_font_size-md * 3;
  position: sticky;
  top: 0;
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
}
</style>
