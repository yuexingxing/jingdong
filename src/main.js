import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'normalize.css'
import './style/base.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

createApp(App).use(store, VueAxios, axios).use(router).mount('#app')
