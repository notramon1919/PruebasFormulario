import { createRouter, createWebHistory } from 'vue-router'
import Form from '../views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: Form
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue')
    }
  ]
})

export default router
