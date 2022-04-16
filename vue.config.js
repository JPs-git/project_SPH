const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint语法检查
  lintOnSave: false,
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target:'http://39.98.123.211',
      }
    },
  },
})
