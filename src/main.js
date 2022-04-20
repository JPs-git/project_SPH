import Vue from 'vue'
import App from './App.vue'
// 清除默认样式
import '@/assets/style/css/reset.css'
// 引入路由
import router from '@/router'
// 引入vuex
import store from './store'

// 引入并注册全局组件

import TypeNav from '@/components/TypeNav'  // 三级联动组件
import Carousel from '@/components/Carousel' // 轮播图
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
// 关闭生产提示
Vue.config.productionTip = false

// 引入mock数据
import '@/mock/mockServer'
// 引入swiper样式
import 'swiper/css/swiper.css'


new Vue({
  render: h => h(App),
  // 注册路由（key value一致 简写）
  router,
  // 注册vuex仓库, 组件身上会增加一个$Store
  store
}).$mount('#app')
