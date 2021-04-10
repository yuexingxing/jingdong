import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'normalize.css'
import './style/base.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(store, VueAxios, axios).use(router).use(ElementPlus).mount('#app')

new Vue({
  el: '#app',
  render: h => h(App)
});
