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
  modules: [
    // nuxt-i18n用に以下を追記する
    [
      'nuxt-i18n',
      {
        // 使用する言語の設定
        locales: [
          { code: 'ja', name: 'Japanese', iso: 'ja_JP', file: 'ja.json' },
          { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' }
        ],
        defaultLocale: 'en', // デフォルトの言語
        langDir: 'locales/', // 翻訳ファイルのディレクトリパス
        strategy: 'prefix_and_default', // URLに言語のプレフィックスを追加するかの指定
        vueI18n: {
          // 翻訳ファイルが見つからなかった場合の言語を指定
          fallbackLocale: 'en'
        },
        vueI18nLoader: true,
        lazy: true // 遅延読み込みの有効化
      }
    ]
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      });
    }
  }
}
