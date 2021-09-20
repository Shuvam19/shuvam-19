import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AllProject from '../views/AllProject.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/all-project',
  name: 'Project',
  component: AllProject
}, {
  path : '/add-projects',
  name: 'Add-Project'
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
