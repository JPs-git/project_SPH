<template>
    <div>
        <div class="header-up">
            <div class="header-up-left">
                <router-link to="/login">登录</router-link>
                <span> | </span>
                <router-link to="/register">注册</router-link>
            </div>
            
            <div class="header-up-right">
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
            <a href="" id="goto-index"> 
                <img src="@/assets/logo.png" alt="回到首页"  class="goto-index">
            </a>
            <div class="search">
                <input type="text" class="search-text" v-model="keyword">
                <a href="javascript:;" @click="goSearch" class="search-button">
                    搜索
                </a>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            keyword:''
        }
    },
    methods:{
        // 搜索按钮回调
        goSearch(){
            this.$router.push({
                name:'search',
                params:{keyword:this.keyword || undefined},
                query:{k:this.keyword.toUpperCase()}
                })
        }
    }
}
</script>

<style scoped>
    .header-up{
        height: 40px;
        background-color: rgb(234 234 234); 
        font-size: 15px;
        line-height: 40px;
    }
    .header-down{
        height: 140px;
    }
    .header-up-left{
        float: left;
        width: 200px;
        position: relative;
        left: 50px;
    }
    .header-up-right{
        float:right;
        position: relative;
        right: 50px;
    }

    .search{
        float: right;
        height: 50px;
        position: relative;
        top: 20px;
        right: 100px;
    }
    .goto-index{
        height: 140px;
    }
    #goto-index{
        display: inline-block;
        position: relative;
        left: 100px;
    }
    .search-text{
        width: 400px;
        height: 46px;
        border: 1px red solid;
        outline-style: none;  /* 选中时不会丢失样式 */
        font-size: 24px; 
    }
    .search-button{
        display: block;
        float: right;
        padding: 0;
        height: 100%;
        width: 82px;
        border: none;
        background-color: red;
        color: white;
        text-align: center;
        line-height: 50px;
    }
    .search-button:hover{
        background-color: rgb(220, 2, 2);
    }
</style>