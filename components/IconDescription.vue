<template lang="pug">
  section.icon__description__wrap
    div(v-if="awesome")
      font-awesome-icon(:icon="[awesome, name]" class="icon__description__span fa-fw")
    div(v-else)
      .icon__description__span.devicons(:class="'devicons-'+name")
    |{{ description }}
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    description: {
      type: String,
      required: true,
      default: ''
    },
    awesome: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.icon__description {
  &__wrap {
    text-align: center;
    @include mq-lg {
    }
  }
  &__span {
    font-size: $_font_size-lg * 3;
  }
}
</style>
