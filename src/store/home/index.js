import { reqCategoryList } from "@/api"
// home模块的数据
// action 处理异步和逻辑
const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList()
        if(result.code === 200){
            console.log(result)
            commit('CATEGOTYLIST', result.data)
        }
    }
}
// mutations修改数据
const mutations = {
    CATEGOTYLIST(state, value){
        state.categoryList = value
    }
}
// state存储数据
const state = {
    categoryList:[]
}
// getters 相当于计算属性
const getters = {
    newCategoryList(state){
        // 删除一个多余的
        return state.categoryList.filter((_,index)=>index < 16)
    }
}

export default{
    actions,mutations,state,getters
}
