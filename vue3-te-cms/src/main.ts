import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/index.less'
import 'element-plus/dist/index.css'
import pinia from './store'
import ElementPlus from 'element-plus'
import registerIcons from './global/register-icons'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.use(registerIcons)
app.mount('#app')
