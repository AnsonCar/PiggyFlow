export default defineNuxtPlugin(async () => {
  const user = useState('auth', undefined);
  const token = useCookie("token");
  if (token.value) {
    const res = await verifyToken({
      token: token.value,
    })
    if (Object.keys(res).length === 0) {
      user.value = true
    }
  }
});