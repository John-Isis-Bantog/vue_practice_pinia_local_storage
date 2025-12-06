import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import EditTask from '../components/EditTask.vue'

const routes = [
  { path: '/', component: Main },          // "/" → Main.vue
  { path: '/edit/:id', component: EditTask, props: true } // "/edit/:id" → EditTask.vue
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
