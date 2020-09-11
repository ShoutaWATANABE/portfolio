<template lang="pug">
  .tile__link__wrap
    a(:href="url" class="tile__link" target="_blank")
      img.tile__link__img(:src="path")
    .tile__link__description
      |{{ date }}
      br
      |{{ value }}
    .tile__link__skill
      span(v-for="(skill, index) in skills")
        |{{ skill }}
        span(v-if="skills[index+1]") /
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      default: ''
    },
    url: {
      type: String,
      required: true,
      default: ''
    },
    date: {
      type: String,
      required: true,
      default: ''
    },
    path: {
      type: String,
      required: true,
      default: ''
    },
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.tile__link__wrap {
  text-align: center;
  padding-bottom: 3rem;
}
.tile__link__img {
  margin: 0 auto;
  max-width: 250px;
  box-shadow: 0 0 8px gray;
}
.tile__link__description,
.tile__link__skill {
}
</style>
