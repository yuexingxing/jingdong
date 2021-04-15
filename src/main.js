import {
	createApp
}
from 'vue'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'normalize.css'
import './style/base.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import Bridge from './JSbridge.js'

const app = createApp(App)
app.config.globalProperties.$bridge = Bridge
app.config.globalProperties.$appName = "三少高定"
app.use(store, VueAxios, axios)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

new Vue({
	el: '#app',
	render: h => h(App)
});
