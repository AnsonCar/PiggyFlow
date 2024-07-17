export default defineNuxtRouteMiddleware((to, from) => {
  let user = useState('auth');
  if (user.value && to.path === '/login') return navigateTo('/');
  if (!user.value && to.path !== '/login') return navigateTo('/login');
  if (to.path === '/') return navigateTo('/account');
});