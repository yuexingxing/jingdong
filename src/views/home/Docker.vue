<template>
  <div class="docker">
    <div v-for="(item, index) in dockerList"
    :class="{'docker__item' : true, 'docker__item--active' : index === 0} "
    class="docker__item"
    :key="item.icon"
    v-bind="statusDoing">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe6f3;', text: '首页' },
      { icon: '&#xe7e5;', text: '购物车' },
      { icon: '&#xe61e;', text: '订单' },
      { icon: '&#xe660;', text: '我的' }
    ]
    return {
      dockerList
    }
  }
}
// eslint-disable-next-line no-unused-vars
// const vm = new Vue({
//   el: '#app',
//   data: function () {
//     return {
//       status: 2
//     }
//   },
//   methods: {
//     statusDoing () {
//       var doing = ['睡觉', '吃饭', '学习Vue']
//       // 通过this 获取到实例对象,来拿到data中的数据
//       return doing[this.status]
//     }
//   }
// })
</script>

<style lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
