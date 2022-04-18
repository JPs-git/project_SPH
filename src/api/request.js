// 对axios二次封装
import axios from "axios";
import nprogress from "nprogress"
// start开始 done结束
// 引入相关样式
import "nprogress/nprogress.css"


// 利用axios的create方法创建一个axios实例
const requests = axios.create({
    // 配置对象
    // 基础路径（api/...）
    baseURL:'/api',
    // 超时时间
    timeout:5000,


})
// 请求拦截器，发请求前的钩子
requests.interceptors.request.use((config) => {
    nprogress.start()   // 加载动画开始
    // 配置对象，其中headers请求头属性很重要
    return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功的响应
    nprogress.done()    // 加载动画结束
    return res.data
},(err) => {
    // 失败的响应
    // return Promise.reject(new Error('faile'))
    return err
})

// 对外暴露
export default requests
