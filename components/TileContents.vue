<template lang="pug">
  section.tile__contents__wrap
    slot
</template>

<style lang="scss" scoped>
.tile__contents__wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include mq-lg {
    flex-direction: row;
  }
}
</style>
