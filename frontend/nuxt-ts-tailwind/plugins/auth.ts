export default defineNuxtPlugin(async () => {
  const auth = useState('auth', undefined);
  const authStore = useAuthStore()
  auth.value = await authStore.isLogin()
}); 