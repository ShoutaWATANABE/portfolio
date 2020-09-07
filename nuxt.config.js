// const pkg = require('./package')

module.exports = {
  mode: 'spa',
  head: {
    title: 'ShoutaWATANABE Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '渡邉将大のポートフォリオサイトです。仙台で社内エンジニアとして勤めております。'
      },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@_ShoutaWATANABE'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ShoutaWATANABE Portfolio'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://shoutawatanabe-portfolio.netlify.com'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '渡邉将大のポートフォリオサイトです。仙台で社内エンジニアとして勤めております。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://shoutawatanabe-portfolio.netlify.com/card.png'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'ShoutaWATANABE Portfolio'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '~/assets/images/favicon/favicon.ico'
      }
    ]
  },
  loading: { color: '#fff' },
  css: [
    { src: '~/assets/scss/_base.scss', lang: 'scss' },
    { src: '~/node_modules/devicons/css/devicons.scss', lang: 'scss' }
  ],
  plugins: [
    { src: '~/plugins/global-components.js', ssr: true },
    '~/plugins/vue-scrollto'
  ],
  modules: [
    ['nuxt-webfontloader'],
    'nuxt-fontawesome',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
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
  // build: {
  //   extend(config, ctx) {
  //     if (ctx.isDev && ctx.isClient) {
  //       config.module.rules.push({
  //         enforce: 'pre',
  //         test: /\.(js|vue)$/,
  //         loader: 'eslint-loader',
  //         exclude: /(node_modules)/
  //       })
  //     }
  //   }
  // }
}
