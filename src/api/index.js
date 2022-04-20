// 当前模块进行API统一管理
import requests from './request'
import mockRequests from './mockAjax'
//三级联动接口
// api/product/getBaseCategoryList get 无参数
// 发axios请求,返回结果promise对象   
export const reqCategoryList = () => requests({url:'product/getBaseCategoryList', method:'get'})
// 获取轮播图的接口
export const reqGetBannerList = () => mockRequests.get('/banner')
