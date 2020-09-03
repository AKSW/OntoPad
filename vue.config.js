// vue.config.js
const webpack = require('webpack');

module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('rdform')
      .test(/\.(rdform\.html)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .end()
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        'introJs': ['intro.js']
      })
    ]
  },
}
