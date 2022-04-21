<template>
  <div class="type-nav">
    <div class="container" @mouseleave="leaveShow">
      <h2 class="all" @mouseenter="enterShow">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <!-- 过渡动画 -->
      <transition name="sort">
        <!-- 通过show的值控制sort的显示与否 -->
        <div class="sort" v-show="show">
          <!-- 利用事件的委派为子节点绑定跳转搜索事件 -->
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              v-for="(c1, index) in newCategoryList"
              :key="c1.categoryId"
              @mouseenter="changeIndex(index)"
              :class="{ cur: index == currentIndex }"
            >
              <!-- 一级菜单 -->
              <h3>
                <a href="javascript:;" :data-category1Id="c1.categoryId">{{
                  c1.categoryName
                }}</a>
              </h3>
              <div class="item-list clearfix">
                <!-- 二级菜单 -->
                <div
                  class="subitem"
                  v-for="c2 in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        href="javascript:;"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <!-- 三级菜单 -->
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          href="javascript:;"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import throttle from 'lodash/throttle'

export default {
  name: 'TypeNav',
  data() {
    return {
      currentIndex: -1,
      show: true,
    }
  },
  methods: {
    // 鼠标移入修改currentIndex的数据, 并加入节流
    // thtrottle注意不要用箭头函数，以免产生上下文错误
    changeIndex: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    // 鼠标移出事件
    leaveShow() {
      // 鼠标移出索引恢复初值
      this.currentIndex = -1
      // 判断非home组件则将show改为false
      if (this.$route.path != '/home') {
        this.show = false
      }
    },
    // 点击响应函数--跳转到search组件
    goSearch(e) {
      let element = e.target // 触发事件的dom元素
      let location = { name: 'search' }
      let value = element.innerHTML // 标签的关键词
      // 对dom的dataset进行解构, 注意解构出的属性名均为小写
      let { category1id, category2id, category3id } = element.dataset

      // 判断是否为a标签
      if (element.tagName == 'A') {
        // 判断标签是一级、二级还是三级菜单
        if (category1id) {
          // 一级菜单
          location.query = { category1id }
        } else if (category2id) {
          // 二级菜单
          location.query = { category2id }
        } else if (category3id) {
          // 三级菜单
          location.query = { category3id }
        }
        location.query.k = value

        // 如果有parmars参数也要传递
        if (this.$route.params) {
          location.params = this.$route.params
        }

        // 配置对象形式
        this.$router.push(location)
      }
    },
    // 鼠标移入，改变show的值
    enterShow() {
      this.show = true
    },
  },
  computed: {
    ...mapState({ categoryList: (state) => state.home.categoryList }),
    ...mapGetters({ newCategoryList: 'newCategoryList' }),
  },
  mounted() {
    // 除home组件，其余默认隐藏菜单内容
    if (this.$route.path != '/home') {
      this.show = false
    }
  },
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background-color: skyblue;
          .item-list {
            display: block;
          }
        }
      }
    }
    // 过度动画的样式
    // 进入状态
    .sort-enter {
      height: 0;
    }
    // 结束状态
    .sort-enter-to {
      height: 461px;
    }
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
