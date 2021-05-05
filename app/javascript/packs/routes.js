import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/Home'
import SignUp from '../views/UserRajistration'
import Login from '../views/UserLogin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

export default new VueRouter({ routes })