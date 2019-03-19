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
  height: 48px;
  position: sticky;
  top: 0;
}
.header__ul {
  right: 16px;
  position: absolute;
  top: 0;
}
.header__li {
  padding: 8px;
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
