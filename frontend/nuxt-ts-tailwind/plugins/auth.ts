import {checkToken} from '~/utils/db/token'

export default defineNuxtPlugin(async () => {
  const user = useState('auth', undefined);
  const token = useCookie("token");
  const res = await checkToken({
    token: token.value,
  })
  if (Object.keys(res).length === 0) {
    user.value = true
  }
});

// const res = await fetch(`http://127.0.0.1:8000/api/token/verify`, {
//   method: "POST",
//   headers: {
//     Authorization: `Bearer ${token}`,
//     Accept: "application/json",
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
//   body: JSON.stringify({
//     token: token.value,
//   }),
// });
// const data = await res.json();