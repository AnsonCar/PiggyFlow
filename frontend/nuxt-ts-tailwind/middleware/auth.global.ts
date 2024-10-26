export default defineNuxtRouteMiddleware((to, from) => {
  let auth = useState('auth');
  if (auth.value && to.path === '/login') return navigateTo('/');
  if (!auth.value && to.path !== '/login') return navigateTo('/login');
  if (to.path === '/') return navigateTo('/account');
});