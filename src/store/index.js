import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    name: 'dell',
    homeData: {}
  },
  mutations: {
    getData (state, data) {
      state.homeData = data
    }
  },
  actions: {

    getData (store) {
      axios.get('https://api.sancellvarymay.com/api/ssxq/app/version?platform_id=sanshao').then(response => (
        this.$store.commit('getData', response.data)
      )).catch()
    }

  },
  modules: {
  }
})
