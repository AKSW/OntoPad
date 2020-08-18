// vue.config.js
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
  }
}
