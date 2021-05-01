import VueRouter from 'vue-router';
import HomePage from './components/home/index';

const routes = [{
  path: '/', component: HomePage,
}];

export default new VueRouter({ routes });