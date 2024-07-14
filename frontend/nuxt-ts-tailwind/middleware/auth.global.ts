export default defineNuxtRouteMiddleware((to, from) => {
  const isLogin: boolean = isAuthenticated();
  if (isLogin && to.path === "/login") {
    return navigateTo("/");
  } else if (!isLogin && to.path !== "/login") {
    return navigateTo("/login");
  }
});

function isAuthenticated() {
  const cookie = useCookie("token");
  const token: string | undefined | null = cookie.value;
  if (token) {
    try {
      // 請求
      const res = (async () => await fetch(`http://127.0.0.1:8000/api/token/verify`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          token: token,
        }),
      }))();
      const data =  (async () => await (await res).json())();
      if (data.code === "token_not_valid") {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }
  return false;
}