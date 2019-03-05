const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [{ src: '~/assets/scss/_base.scss', lang: 'scss' }],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP']
    }
  },
  plugins: [{ src: '~/plugins/global-components.js', ssr: true }],
  modules: [['nuxt-sass-resources-loader'], '@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {},
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
