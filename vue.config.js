const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  lintOnSave: true,
  devServer: {
    open: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))

    config.plugins.delete('pwa')
    config.plugins.delete('workbox')

    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
