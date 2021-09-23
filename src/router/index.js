import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import AllProject from '../views/AllProject.vue'
import Login from '../views/Login.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/all-project',
  name: 'Project',
  component: AllProject
}, {
  path: '/add-projects',
  name: 'Add-Project',
  component: AllProject,
  beforeEnter(to, from, next) {
    console.log(store.getters.isAuthenticated);
    if (store.getters.isAuthenticated) next(); else next({ name: 'Login' });
  }
}, {
  path: '/login',
  name: 'Login',
  component: Login,
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
