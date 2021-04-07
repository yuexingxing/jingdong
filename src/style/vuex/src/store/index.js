import { createStore } from 'vuex'
import axios from 'axios'
// vueX 数据管理框架
// VueX 创建了一个全局唯一的仓库，用来存放全局的数据
export default createStore({
  state: {
    name: 'dell',
    homeData:{}
  },
  mutations: {
    change(state, str) {
      console.log('mutations-change')
      state.name = str
    }
  },
  actions: {

    getData(store) {
      axios.get('https://api.sancellvarymay.com/api/ssxq/app/version?platform_id=sanshao').then(response => (
        console.log(response.data),
        store.state.homeData = response.data
      )).catch()
    },
    change(store, str) {
      console.log('actions-change')

      setTimeout(() => {
        store.commit('change', str)
      }, 2000)
    }
  },
  modules: {
  }
})
