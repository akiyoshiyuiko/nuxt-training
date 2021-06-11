# コーポレートページリニューアル用サンプルリポジトリ

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 開発

npm run dev

## md ファイル管理

- 確認
  http://localhost:3000/blog/hogeで表示確認可能

- 参考：
  https://nyanshiba.com/blog/nuxtjs-markdown-heroku#%E3%81%A8%E3%82%8A%E3%81%82%E3%81%88%E3%81%9Avue%E3%81%A7%E8%A8%98%E4%BA%8B%E6%9B%B8%E3%81%84%E3%81%A6%E3%81%BF%E3%82%8B

- `npm install @nuxtjs/markdownit`
- `npm install frontmatter-markdown-loader`
- nuxt.config.js に以下追記

```
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      });
    }
  },
```

- pages/blog/\_post.vue を作成。中身は当該ファイル参照
- pages/articles に md ファイル用意
- nuxt.config.js の head:を編集（全体に適用されるの TDK 設定）

## 多言語切り替え

- 参考:https://www.mitsue.co.jp/knowledge/blog/frontend/201906/10_1357.html
- `npm i nuxt-i18n`
- locales フォルダ作成
- locales 配下に en.json ja.json 作成
- pages/\_lang を作成(動的ルーティング対応）
- plugins/i18n.js ファイル作成、中身記述
- nuxt.config.js を編集

```
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
```
