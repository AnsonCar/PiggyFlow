export default defineNuxtRouteMiddleware( async (to, from) => {
  const isLogin: boolean = await isAuthenticated();
  // 如果未登入，全部返回Login Page
  if (!isLogin && to.path !== "/login") {
    setTimeout(() => {
      return navigateTo("/login");
    }, 10);
  }

  // 如果有登入同時在 Login Page，返回主頁
  if (isLogin && to.path === "/login") {
    return navigateTo("/");
  }

});

async function isAuthenticated() {
  const cookie = useCookie("token");
  const token: string | undefined | null = cookie.value;
  if (token) {
    try {
      // 請求
      const res = await fetch(`http://127.0.0.1:8000/api/token/verify`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          token: token,
        }),
      });
      const data = await res.json();
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