<template lang="pug">
  .nav__drawer
    input#nav__input.nav__unshown(type="checkbox")
    label#nav__open(for="nav__input")
      font-awesome-icon(:icon="['fas', 'bars']" class="fa-fw")
    label#nav__close.nav__unshown(for="nav__input")
    #nav__content
      ul.float__ul
        li.float__li
          nuxt-link(class="float__link" to="/") Home
        li.float__li
          nuxt-link(class="float__link" to="/about") About
        li.float__li
          nuxt-link(class="float__link" to="/skill") Skill
        li.float__li
          nuxt-link(class="float__link" to="/works") Works
        li.float__li
          nuxt-link(class="float__link" to="/blog") Blog
        li.float__li
          nuxt-link(class="float__link" to="/contact") Contact

</template>

<style lang="scss" scoped>
.float {
  &__ul {
    list-style: none;
  }
  &__link {
    color: #eee;
    text-decoration: none;
    &:hover {
      opacity: 0.5;
    }
  }
}

/* 以下、ハンバーガー */
.nav__drawer {
  position: fixed;
  height: 100%;
  width: 100%;
  text-align: right;
  /* z-index: -10; */
  @include mq-lg {
    display: none;
  }
}

.nav__unshown {
  display: none;
}

#nav__open {
  position: absolute;
  bottom: 3rem;
  right: 1rem;
  z-index: 999;
  vertical-align: middle;
  line-height: 1rem;
  display: inline-block;
  padding: 1rem;
  border-radius: 3rem;
  font-size: 1rem;
  margin: 0 0.5rem;
  background: #999;
  border: #999 solid 2px;
  color: #fff;
  text-decoration: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
}

/*閉じる用の薄黒カバー*/
#nav__close {
  display: none;
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

/*中身*/
#nav__content {
  overflow: auto;
  position: fixed;
  bottom: 7rem;
  right: 1.5rem;
  z-index: 9999;
  color: #fff;
  transition: 0.3s ease-in-out;
  transform: translateY(20rem);
}

/*チェックが入ったらもろもろ表示*/
#nav__input:checked ~ #nav__close {
  display: block;
  opacity: 0.5;
}

#nav__input:checked ~ #nav__content {
  transform: translateY(0%);
}
</style>
