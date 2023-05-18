import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]

  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })  

  export default router