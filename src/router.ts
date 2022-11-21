import { createRouter, useRouter,createWebHashHistory, createWebHistory} from 'vue-router';


import Home from './components/Home.vue'
import About from './components/About.vue'
import CreateUser from './components/CreateUser.vue';


const routes = [
  { path: '/',name:'Home',  component: Home },
  { path: '/about',name:'About', component: About },
  { path: '/createuser',name:'CreateUser', component: CreateUser },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})
export default router