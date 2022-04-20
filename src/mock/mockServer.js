import Mock from 'mockjs'
import banner from './banner.json'

// mock数据：第一个参数：请求的地址，第二个参数：请求的数据
Mock.mock("/mock/banner", { code: 200, data: banner })  // 轮播图的数据
