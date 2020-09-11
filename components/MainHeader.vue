<template lang="pug">
  .header__wrap
    ul.header__ul
      li.header__li
        nuxt-link(class="header__link" to="/") ShoutaWATANABE Portfolio
      li.header__li
        nuxt-link(class="header__link" to="/about") About
      li.header__li
        nuxt-link(class="header__link" to="/skill") Skill
      li.header__li
        nuxt-link(class="header__link" to="/works") Works
      li.header__li
        nuxt-link(class="header__link" to="/blog") Blog
      li.header__li
        nuxt-link(class="header__link" to="/contact") Contact
</template>

<style lang="scss" scoped>
.header__wrap {
  display: none;
  @include mq-lg {
    display: block;
    background-color: #fff;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 10;
  }
}
.header__ul {
  display: none;
  padding: 1rem;
  @include mq-lg {
    display: block;
    display: flex;
    justify-content: flex-end;
  }
}
.header__li {
  display: none;
  @include mq-lg {
    display: block;
    margin-right: 1rem;
    &:last-of-type {
      margin-right: 0;
    }
    &:first-child {
      margin-right: auto;
    }
  }
}
.header__link {
  display: none;
  @include mq-lg {
    display: inline-block;
    color: #999;
    text-decoration: none;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
