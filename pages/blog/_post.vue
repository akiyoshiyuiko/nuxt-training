<template>
  <!-- ルーティング -->
  <div :key="$route.params.post">
    <!-- export defaultのreturnから貰ったHTMLにパースされた本文を表示 -->
    <div v-html="content" class="blog-content"></div>
  </div>
</template>

<script>
const fm = require("front-matter") //front-matterを使うよ！

var md = require("markdown-it")({ //markdown-itを使うよ！
  html: true, //htmlを返す
  linkify: true, //[]()や<a href=してないがリンクっぽいものを自動でリンク化
  breaks: false, //自動改行を無効化 ダメ人間になりそうなので
})

export default {
  async asyncData({ params }) {
    const fileContent = await import(`../articles/${params.post}.md`);  //動的にMarkdownファイルを取ってくる
    let res = fm(fileContent.default); //front-matterで前処理して
    return {
      attributes: res.attributes,
      content: md.render(res.body), //front-matterから貰ったfrontmatter以外の本文だけをmarkdown-itでHTMLにパース
    };
  },
  head () {
  const title = this.attributes.title
    return {
      title,
      meta: [
        { name: 'description', content: `${this.attributes.description}` },
        // { name: 'creation date', content: `${this.ctime}` },
        // { name: 'date', content: `${this.mtime}` },
        { property: 'og:site_name', content: '俺の外付けHDD' },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: `${this.attributes.title}` },
        { property: 'og:description', content:  `${this.attributes.description}` },
        // { property: 'og:url', content: 'https://nyanshiba.com' + `${this.$route.path}` },
        // { property: 'og:image', content:  `${this.attributes.ogimg}` }
      ]
    }
  },
}
</script>
