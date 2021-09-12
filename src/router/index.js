import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Experience from '../views/Experience.vue'
import Project from '../views/Project.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/about',
  name: 'About',
  component: Home
}, {
  path: '/experience',
  name: 'Experience',
  component: Experience
}, {
  path: '/project',
  name: 'Project',
  component: Project
}, {
  path: '/blog',
  name: 'Blog',
  component: Home
}, {
  path: '/contact',
  name: 'Contact',
  component: Home
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
