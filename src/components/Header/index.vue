<template>
    <div>
        <div class="header-up">
            <router-link to="/login">登录</router-link>
            <span> | </span>
            <router-link to="/register">注册</router-link>
            <div class="header-button">
                <a href="">我的订单</a>
                <span> | </span>
                <a href="">我的购物车</a>
                <span> | </span>
                <a href="">我的尚品汇</a>
                <span> | </span>
                <a href="">尚品汇会员</a>
                <span> | </span>
                <a href="">企业采购</a>
                <span> | </span>
                <a href="">关注尚品汇</a>
                <span> | </span>
                <a href="">合作招商</a>
                <span> | </span>
                <a href="">商家后台</a>
                
              
            </div>
        </div>
        <div class="header-down">
            <a href=""> 
                <img src="@/assets/logo.png" alt="回到首页" id="goto-index">
            </a>
            <div class="search">
                <input type="text">
                <button @click="goSearch">
                    搜索
                </button>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name:'Header',
    methods:{
        // 搜索按钮回调
        goSearch(){
            this.$router.push('/search')
        }
    }
}
</script>

<style scoped>
    .header-up{
        height: 40px;
        background-color: rgb(234 234 234); 
        font-size: 15px;
    }
    .header-down{
        height: 140px;
    }
    .header-button{
        float:right;
    }

    .search{
        float: right;
    }
    #goto-index{
        height: 140px;
    }
</style>