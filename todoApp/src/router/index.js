import Vue from 'vue'
import VueRouter from 'vue-router'
import Task from '../views/Task.vue'
import Projects from '../views/Projects'
import Login from '../views/User/Login.vue'
import Register from '../views/User/Register.vue'
import Profile from '../views/User/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/task',
    name: 'Task',
    component: Task
  },
  {
    path: '/project',
    name: 'Project',
    component: Projects
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/graphs',
    name: 'Graphs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Graphs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
