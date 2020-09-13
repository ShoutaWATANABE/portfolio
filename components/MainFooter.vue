<template lang="pug">
  .footer__wrap
    |(c) 2019 - {{ year }} ShoutaWATANABE.
</template>


<script>
const dt = new Date()
const year = dt.getFullYear()

export default {
  data() {
    return {
      year: year
    }
  }
}
</script>

<style lang="scss" scoped>
.footer__wrap {
  background-color: #fff;
  color: #999;
  font-size: $_font_size-md;
  padding: $_font_size-md;
  text-align: right;
}
</style>
