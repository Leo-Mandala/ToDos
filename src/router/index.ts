import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import ToDos from '../components/ToDos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    
    
    {
      path: '/how',
      name: 'ToDos',
      component: ToDos,
    },
  ]
})

export default router
