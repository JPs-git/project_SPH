// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter)
// 引入路由组件
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'

// 新建并暴露路由器
export default new VueRouter({
    // 配置路由
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{
                showFooter:false
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                showFooter:false
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        // 重定向
        {
            path:'*',
            redirect:'/home',
            meta:{
                showFooter:true
            }
        }
    ]

})
