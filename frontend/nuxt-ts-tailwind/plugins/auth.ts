export default defineNuxtPlugin(async () => {
  const user = useState('auth', undefined);
  const token = useCookie("token");
  const refresh = useCookie("refresh");
  if (token.value && refresh.value) {
    const res = await verifyToken({ token: token.value, })
    if (Object.keys(res).length === 0) {
      user.value = true
    } else {
      const refreshRes = await refreshToken({ refresh: refresh.value })
      if (refreshRes.refresh && refreshRes.access) {
        token.value = refreshRes.access
        refresh.value = refreshRes.refresh
        user.value = true
      }
    }
  }
}); 