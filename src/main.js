import Vue from 'vue'
import App from './App.vue'
// 清除默认样式
import '@/assets/style/reset.css'
// 引入路由
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由（key value一致 简写）
  router
}).$mount('#app')
