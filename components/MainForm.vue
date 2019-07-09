<template lang="pug">
  section
    form(name="contact" netlify-honeypot="bot-field" action="/thanks" data-netlify="true" method="post")
      input(type="hidden" name="form-name" value="contact")
      input(type="hidden" name="bot-field")
      .form__container
        .form__item
          label Name
        .form__item
          input(type="text" name="name" placeholder="Your Name" required="required")
      .form__container
        .form__item
          label Mail
        .form__item
          input(type="email" name="email" placeholder="Your Mail" required="required")
      .form__container
        .form__item
          label Message
        .form__item
          textarea(name="message" placeholder="Your Message" required="required")
      .form__container
        .form__item.is__button
          button(type="submit") Submit
</template>

<style lang="scss" scoped>
.form__container {
  padding: $_font_size-md 0;
}
.form__item {
  &.is__button {
    text-align: center;
  }
}
input,
textarea {
  border: solid 1px #ccc;
  padding: $_font_size-md * 0.5;
  width: 100%;
}
textarea {
  resize: none;
  min-height: 100px;
}
button {
  color: #fff;
  background-color: #ccc;
  border-radius: 5px;
  padding: $_font_size-md * 0.5 $_font_size-md * 2;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
}
</style>
