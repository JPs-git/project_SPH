<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
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
      <div class="sort">
        <div class="all-sort-list2" @click="goSearch">
          <div
            class="item"
            v-for="(c1, index) in newCategoryList"
            :key="c1.categoryId"
            @mouseenter="changeIndex(index)"
            @mouseleave="resetIndex"
            :class="{ cur: index == currentIndex }"
          >
          <!-- 一级菜单 -->
            <h3>
              <a href="javascript:;">{{ c1.categoryName }}</a>
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
                    <a href="javascript:;">{{ c2.categoryName }}</a>
                  </dt>
                  <dd>
                    <!-- 三级菜单 -->
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a href="javascript:;">{{ c3.categoryName }}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
    };
  },
  methods: {
    // 鼠标移入修改currentIndex的数据, 并加入节流
    // thtrottle注意不要用箭头函数，以免产生上下文错误
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    // 重置当前索引值
    resetIndex() {
      // 恢复初值代表鼠标移出
      this.currentIndex = -1;
    },
    // 跳转到search组件
    goSearch(e){
      if(e.target.tagName == 'A'){
        // 模板字符串拼路径
        this.$router.push(`/search?k=${e.target.innerHTML}`)
        // 配置对象形式
        // this.$router.push({name:'search',query:{k:e.target.innerHTML}, params:{keyword:e.target.innerHTML}})
      }
    }
  },
  computed: {
    ...mapState({ categoryList: (state) => state.home.categoryList }),
    ...mapGetters({ newCategoryList: "newCategoryList" }),
  },
  mounted() {
    // 通知vuex发请求，获取数据，存储在state中
    this.$store.dispatch("categoryList");
  },
};
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
  }
}
</style>