import { reqCategoryList } from "@/api"
// home模块的数据
// action 处理异步和逻辑
const actions = {
    // 三级联动请求
    async categoryList({commit}){
        let result = await reqCategoryList()
        if(result.code === 200){
            commit('CATEGOTYLIST', result.data)
        }
    }
}
// mutations修改数据
const mutations = {
    // 三级联动相关操作
    CATEGOTYLIST(state, value){
        state.categoryList = value
    }
}
// state存储数据
const state = {   
    categoryList:[]  // 三级联动数据
}
// getters 相当于计算属性
const getters = {
    // 三级联动数据处理
    newCategoryList(state){
        // 删除一个多余的
        return state.categoryList.filter((_,index)=>index < 16)
    }
}

export default{
    actions,mutations,state,getters
}
