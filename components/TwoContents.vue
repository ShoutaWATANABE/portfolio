<template lang="pug">
  section.two__contents__wrap
    slot
</template>

<style lang="scss">
.two__contents__wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include mq-lg {
    flex-direction: row;
  }
}
</style>
