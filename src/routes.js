import Home from './components/Home.vue';
import Detail from './components/DetailMovie.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/detail/:id', component: Detail, name: 'detail' },
];

export default routes;
