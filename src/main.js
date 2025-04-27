import './assets/main.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
import {createPinia} from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'
import locale from 'element-plus/dist/locale/zh-cn.js'

import App from './App.vue'
const pinia = createPinia();
const persist = createPersistedState();
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ElementPlus,{locale});
app.mount('#app')
