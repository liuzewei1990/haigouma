module.exports = {

  head: {
    title: '中付海购马跨境商城',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '中付海购马跨境商城' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~/assets/css/common.css' },
    // { src: '~/assets/styles/index.less' },
  ],
  loading: { color: '#3B8070' },
  plugins: [
    //引入vue-svg-icon解决方案 操作说明地址：https://www.npmjs.com/package/vue-svg-icon#chineseversion
    { src: '~/plugins/vue-svg-icon.js', ssr: true }
  ],
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({ enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/ })
      }
    }
  }
}

