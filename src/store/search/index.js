// 引入api
import { reqGetSearchInfo } from '@/api'
// search模块的数据
// action 处理异步和逻辑
const actions = {
    // 搜索商品请求
    async getSearchInfo({ commit }, params) {
        let result = await reqGetSearchInfo(params)
        if (result.code === 200) {
            console.log('@@@', result)
            commit('GETSEARCHINFO', result)
        }
    }
}
// mutations修改数据
const mutations = {
    GETSEARCHINFO(state, searchInfo) {
        state.searchInfo = searchInfo.data
    }
}
// state存储数据
const state = {
    searchInfo: {}
}
// getters 相当于计算属性
const getters = {}

export default {
    actions, mutations, state, getters
}
