import { resolve } from 'path'

export default {
  loading: {
    color: '#252529',
    height: '3px',
  },
  alias: {
    '@': resolve(__dirname, './'),
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'Alcohol River | Güncel alkol fiyatları, isimleri, önerileri ve daha fazlası',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Güncel alkol fiyatlarını görebileceğiniz web uygulaması.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '@/static/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '@/static/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '@/static/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '@/static/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '@/static/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Alcohol River',
      },
      {
        name: 'application-name',
        content: 'Alcohol River',
      },
      {
        name: 'msapplication-TileColor',
        content: '#da532c',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        name: 'google',
        content: 'notranslate',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/vendor/reset.css',
    '@/assets/styles/vendor/flex-classes.css',
    // SCSS file in the project
    '@/assets/styles/sass/_theme.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    // your settings here
    scss: [
      '@/assets/styles/sass/_colors.scss',
      '@/assets/styles/sass/_animations.scss',
      '@/assets/styles/sass/_variables.scss',
      '@/assets/styles/sass/_mixins.scss',
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
