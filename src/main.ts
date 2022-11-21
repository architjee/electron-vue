import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'
import router from './router'
import 'bulma/css/bulma.css'
const vue_application = createApp( App)
vue_application.use(router)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })

  