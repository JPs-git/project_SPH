<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- 在登录、注册界面不显示Footer -->
    <Footer  v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,Footer
  },
  mounted(){
    // 派发action获取三级联动的数据,只执行一次
    this.$store.dispatch("categoryList")
  }
}
</script>

<style>

</style>
