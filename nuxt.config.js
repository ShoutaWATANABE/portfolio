const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    title: 'ShoutaWATANABE Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//cdn.jsdelivr.net/devicons/1.8.0/css/devicons.min.css'
      }
    ]
  },
  loading: { color: '#fff' },
  css: [{ src: '~/assets/scss/_base.scss', lang: 'scss' }],
  plugins: [
    { src: '~/plugins/global-components.js', ssr: true },
    '~/plugins/vue-scrollto'
  ],
  modules: [
    ['nuxt-webfontloader'],
    'nuxt-fontawesome',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP', 'Josefin+Sans']
    }
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  styleResources: {
    sass: ['@/assets/scss/settings/_settings.scss']
  },
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
