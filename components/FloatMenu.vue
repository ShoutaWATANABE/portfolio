<template lang="pug">
  .float__drawer
    input#float__input.float__unshown(type="checkbox")
    label#float__open(for="float__input")
      font-awesome-icon(:icon="['fas', 'bars']" class="fa-fw")
    label#float__close.float__unshown(for="float__input")
    #float__content
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
  &__li {
    padding: 0.5rem 0;
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
.float__drawer {
  position: fixed;
  bottom: 0;
  right: 0;
  text-align: right;
  @include mq-lg {
    display: none;
  }
}

.float__unshown {
  display: none;
}

#float__open {
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
#float__close {
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
#float__content {
  overflow: auto;
  position: fixed;
  bottom: 7rem;
  right: 1.5rem;
  z-index: 9999;
  color: #fff;
  transition: 0.3s ease-in-out;
  transform: translateY(30rem);
}

/*チェックが入ったらもろもろ表示*/
#float__input:checked ~ #float__close {
  display: block;
  opacity: 0.5;
}

#float__input:checked ~ #float__content {
  transform: translateY(0%);
}
</style>
