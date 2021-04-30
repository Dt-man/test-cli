export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'h5-resume',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_2506755_teer0wts9g.css' }
    ],
    script: [
      {
        src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8'
      },
      {
        src: '/js/iconfont.js', type: 'text/javascript', charset: 'utf-8'
      },
      {
        src: '/js/qrcode.min.js', type: 'text/javascript', charset: 'utf-8'
      },
      {
        src: '/js/checkOs.js', type: 'text/javascript', charset: 'utf-8'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/request'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://test-app.ysxp.net',
    Headers: {
      token: '',
      uid: '',
      share: 1
    }
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://test-app.ysxp.net',
      Headers: {
        token: '',
        uid: '',
        share: 1
      }
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: [
      require('postcss-px2rem')({
        remUnit: 75
      })
    ],
    assetFilter (assetFilename) {
      return assetFilename.endsWith('.js')
    }
  }
}
