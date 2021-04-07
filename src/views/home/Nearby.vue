<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item"
      v-for="item in nearbyList"
      :key="item.id">
      <img :src="item.icon"
        class="nearby__item__img"/>
      <div class="nearby__content">
        <div class="nearby__content__title">{{item.tilte}}</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag"
          v-for="(itemTag, indexTag) in item.tags"
          :key="indexTag">{{itemTag}}</span>
        </div>
        <p class="nearby__content__highlight">
          {{item.desc}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Nearby',
  methods: {
    statusDoing () {
      console.log('statusDoing')
      var doing = ['睡觉', '吃饭', '学习Vue']

      // 通过this 获取到实例对象,来拿到data中的数据
      return doing[this.status]
    },
    getTest () {
      axios.get('https://api.sancellvarymay.com/api/ssxq/app/version?platform_id=sanshao').then(response => (
        console.log(response.data)
      )).catch()
    }
  },
  setup () {
    const nearbyList = [{
      id: 1,
      title: '沃尔玛1',
      tags: ['月售1万+', '月售2万+', '月售3万+'],
      desc: 'VIP尊享满89元减4元运费券（每月1张）',
      icon: 'http://www.dell-lee.com/imgs/vue3/near.png'
    },
    {
      id: 2,
      title: '家乐福',
      tags: ['月售3万+', '月售2万+', '月售1万+'],
      desc: 'VIP尊享满189元减4元运费券（每月2张）',
      icon: 'http://www.dell-lee.com/imgs/vue3/near.png'
    },
    {
      id: 3,
      title: '百盛',
      tags: ['月售14万+', '月售15万+', '月售1万+'],
      desc: 'VIP尊享满81239元减4元运费券（每月3张）',
      icon: 'http://www.dell-lee.com/imgs/vue3/near.png'
    },
    {
      id: 4,
      title: '乐天玛特',
      tags: ['月售1万+', '月售1万+', '月售10万+'],
      desc: 'VIP尊享满81239元减4元运费券（每月3张）',
      icon: 'http://www.dell-lee.com/imgs/vue3/near.png'
    }
    ]
    return { nearbyList }
  }
}
</script>

<style lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-bgColor;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>
