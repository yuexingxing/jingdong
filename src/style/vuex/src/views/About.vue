<template>
  <div class="about">
    <h1 @click="handleClick">This is an about page</h1>
    <h1>{{name}}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    myName() {
      return this.$store.state.name;
    }
  },
  setup() {
    let name = this.$ref('123')
    setTimeout(() => {
      name.value = '456'
    }, 2000);
    return {
      name
    }
  },
  methods: {
    handleClick(){
      //第一步，想改变数据， vuex 要求第一步，必须派发一个action，名字叫change
      this.$store.dispatch('change', 'hello, world')
    }
  }
}
</script>
