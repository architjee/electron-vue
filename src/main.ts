import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'
import router from './router'
import 'bulma/css/bulma.css'
import { createPinia } from 'pinia';
const pinia = createPinia()
const vue_application = createApp(App)
vue_application.use(router).use(pinia)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })

  