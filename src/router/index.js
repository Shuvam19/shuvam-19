import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/about',
  name: 'About',
  component: About
}, {
  path: '/experience',
  name: 'Experience',
  component: About
}, {
  path: '/project',
  name: 'Project',
  component: About
}, {
  path: '/blog',
  name: 'Blog',
  component: About
}, {
  path: '/contact',
  name: 'Contact',
  component: About
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
