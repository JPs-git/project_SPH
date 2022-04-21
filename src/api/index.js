// 当前模块进行API统一管理
import requests from './request'
import mockRequests from './mockAjax'
//三级联动接口
// api/product/getBaseCategoryList get 无参数
// 发axios请求,返回结果promise对象   
export const reqCategoryList = () => requests({ url: 'product/getBaseCategoryList', method: 'get' })
// 获取轮播图的接口
export const reqGetBannerList = () => mockRequests.get('/banner')
// 获取搜索商品的接口,请求方式post
export const reqGetSearchInfo = (parmas) => requests({ url: 'list', method: 'post', data: parmas })
/*
    参数
    {
        "category3Id": "61",
        "categoryName": "手机",
        "keyword": "小米",
        "order": "1:desc",
        "pageNo": 1,
        "pageSize": 10,
        "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
        "trademark": "4:小米"
    }

*/
