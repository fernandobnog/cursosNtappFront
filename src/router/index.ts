import { createRouter, createWebHistory } from 'vue-router';
import { isLogged } from '../common/authHandler';
import axios from 'axios';

import {
  AuthRoutes,
  HomeRoutes
} from './main';

const routes = [

  ...HomeRoutes,
  ...AuthRoutes,

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

axios.interceptors.response.use(
  response => response,
  (error: { response: { status: number } }) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(record => record.meta.requiresAuth);
  const loggedIn = isLogged();

  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
