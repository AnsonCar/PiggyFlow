import { createRouter, createWebHistory, type RouteLocationNormalizedGeneric, type RouteLocationNormalizedLoadedGeneric } from 'vue-router';
import BaseLayout from '../layouts/BaseLayout.vue';
import MainLayout from '../layouts/MainLayout.vue';
import { isLoggedIn } from '../middleware/auth';
import IndexPage from '../pages/IndexPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import TestPage from '../pages/TestPage.vue';

const routes = [
  {
    path: '',
    component: MainLayout,
    children: [{ path: '', component: IndexPage, name: 'home' }],
  },
  {
    path: '/login',
    component: BaseLayout,
    children: [{ path: '', component: LoginPage, name: 'login' }],
  },
  {
    path: '/test',
    component: BaseLayout,
    children: [{ path: '', component: TestPage, name: 'test' }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    to;
    from;
    savedPosition;
    // always scroll to top
    return { top: 0 };
  },
});

// Middleware
router.beforeEach(async (to: RouteLocationNormalizedGeneric, from: RouteLocationNormalizedLoadedGeneric) => {
  from;
  if (to.name === 'test') return true;
  const isLogin: boolean = await isLoggedIn();
  if (to.name !== 'login' && !isLogin) {
    return router.push({ name: 'login' });
  } else if (to.name === 'login' && isLogin) {
    return router.push({ name: 'home' });
  }
  return true;
});

export default router;
