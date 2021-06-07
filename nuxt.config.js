export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-training',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Node.js モジュールを直接ロードする (ここでは SASS ファイル)
    // 'bulma',
    // プロジェクト内の CSS ファイル
    // '@/assets/css/main.css',
    // プロジェクト内の SCSS ファイル
    // '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],

  pwa: {
    icon: {
      source: '/icon.png',    // このファイルを元に各サイズ毎のアイコン画像を自動生成してくれる
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
      targetDir: 'icons',
      plugin: true,
    }
  },

  manifest: {
    lang: 'ja',
    theme_color: '#ededed',
    background_color: '#ededed',
    display: 'standalone',
    start_url: 'localhost:3000',
    scope: 'localhost:3000',
    name: 'test',
    short_name: 'test',
    title: 'test',
    description: 'test'
    // 'og:title': site_title,
    // 'og:description': site_description,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
