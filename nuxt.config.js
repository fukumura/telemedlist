const prefs = require('./data/prefs.json')

const baseName = process.env.BASE_NAME || 'オンライン診療検索'
const baseDesc = process.env.BASE_DISC || 'オンライン診療の初診解禁で初診・再診OKの病院・クリニックを検索できます。オンライン診療実施医療機関リストの公開データを元に日々更新しているサイトです。'
const baseUrl = process.env.BASE_URL || 'http://telemedlist.com'
const baseOgp = process.env.BASE_OGP || '/lib/img/ogp'
const baseDir = process.env.BASE_DIR || '/'

export default {
  mode: 'universal',
  env: {
    baseName: baseName,
    baseDesc: baseDesc,
    baseUrl: baseUrl,
    baseOgp: baseOgp,
  },
  router: {
    base: baseDir,
  },
  /*
  ** Headers of the page
  */
  head: {
    title: baseName,
    meta: [
      { hid: 'description', name: 'description', content: baseDesc },
      { hid: 'og:site_name', property: 'og:site_name', content: baseName },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      { hid: 'og:title', property: 'og:title', content: baseName },
      { hid: 'og:description', property: 'og:description', content: baseDesc },
      { hid: 'og:image', property: 'og:image', content: `${baseOgp}/common.jpg` },
      // { property: 'article:publisher', content: 'FacebookURL' },
      // { property: 'fb:app_id', content: 'FacebookAppID' },
      // { name: 'twitter:card', content: 'summary' },
      // { name: 'twitter:site', content: '@Twitter' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/firebase.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/axios'
  ],
  generate: {
    routes() {
      const routes = []
      prefs.map((item) => {
        routes.push( `/prefs/${item.id}`)
      })
      return routes
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
