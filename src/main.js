import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/bootstrap.min.css'
import '../src/assets/bootstrap.bundle.min.js'
import "material-icons/iconfont/material-icons.css"

createApp(App).use(store).use(router).mount('#app')
