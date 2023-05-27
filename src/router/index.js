// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import {useTasksStore} from '@/store/tasks'

const routes = [
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const store = useTasksStore()
})

export default router
