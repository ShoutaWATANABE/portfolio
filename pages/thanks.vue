<template lang="pug">
  section.thanks__wrap
    h1 Thank you for your message.
    nuxt-link(class="thanks__link" to="/") Back
</template>

<style lang="scss" scoped>
.thanks__wrap {
  padding: $_font_size-md * 10 0;
  text-align: center;
}
.thanks__link {
  color: #999;
  text-decoration: none;
}
</style>
