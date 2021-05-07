import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/Home';
import SignUp from '../views/UserRajistration';
import Login from '../views/UserLogin';
import store from './store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    beforeEnter(to, from, next) {
      if (store.getters.authToken) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
    beforeEnter(to, from, next) {
      if (store.getters.authToken) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter(to, from, next) {
      if (store.getters.authToken) {
        next('/')
      } else {
        next()
      }
    }
  }
]

export default new VueRouter({ routes })