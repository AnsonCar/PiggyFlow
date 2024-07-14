export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token')
  if ( typeof token.value !== 'string' && to.path !== '/login' ) {
    return navigateTo('/login')
  } else {
    // $fetch('http://127.0.0.1:8000/api/token/verify', {
    //   method: "POST",
    //   headers: {
    //     'Accept': "application/json",
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: JSON.stringify({ token: token.value })
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  }
})

// https://dev.to/rafaelmagalhaes/authentication-in-nuxt-3-375o