<template lang="pug">
  .main__title
    slot
</template>

<style lang="scss" scoped>
.main__title {
  color: #999;
  font-size: $_font_size-md * 1.5;
  text-align: center;
  padding: $_font_size-md * 2 0;
}
</style>
