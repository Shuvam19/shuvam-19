import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AllProject from '../views/AllProject.vue'
// import store from '../store'
// import Login from '../views/Login.vue'
// import AdminPanel from '../views/AdminPanel.vue'
// import AddIndividualProject from '../components/projects/AddIndividualProject.vue'
// import ModifyIndividualProject from '../components/projects/ModifyIndividualProject.vue'
// import AddExperience from '../components/experience/AddExperience.vue'
const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/all-project',
  name: 'Project',
  component: AllProject
},/* {
  path: '/admin-panel',
  name: 'AdminPanel',
  component: AdminPanel,
  beforeEnter(to, from, next) {
    if (store.getters.isAuthenticated) next(); else next({ name: 'Login' });
  }
}, {
  path: '/login',
  name: 'Login',
  component: Login,
}, {
  path: '/add-project',
  name: 'AddProject',
  component: AddIndividualProject,
  beforeEnter(to, from, next) {
    if (store.getters.isAuthenticated) next(); else next({ name: 'Login' });
  }
}, {
  path: '/modify-project/:id',
  name: 'ModifyProject',
  component: ModifyIndividualProject,
  beforeEnter(to, from, next) {
    if (store.getters.isAuthenticated) next(); else next({ name: 'Login' });
  }
},{
  path: '/add-experience',
  name: 'AddExperience',
  component: AddExperience,
  beforeEnter(to, from, next) {
    if (store.getters.isAuthenticated) next(); else next({ name: 'Login' });
  }
}*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
