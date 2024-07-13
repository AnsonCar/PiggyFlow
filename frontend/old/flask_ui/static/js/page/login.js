import { loginToken } from '/static/js/db/token.js'
import {checkNullLogin} from "/static/js/utils/checkNull.js"
import { setCookie, getCookie } from '/static/js/utils/cookies.js'

// init
(() => {
  document.body.setAttribute('data-theme', matchMedia('(prefers-color-scheme: dark)').matches ? 'black' : 'lofi');
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) =>  {
    document.body.setAttribute('data-theme', e.matches ? 'black' : 'lofi');
  });
  // submit
  document.addEventListener('DOMContentLoaded', async () => {
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', login);
  });
})();

async function login() {
    const selectuUserName = document.getElementById("username")
    const selectPassWord = document.getElementById("password")
  
    const hasUserName = checkNullLogin(selectuUserName)
    const hasPassWord = checkNullLogin(selectPassWord)

    // {
    //   "detail": "No active account found with the given credentials",
    //   "code": ""
    // }

    // {
    //   "username": "string",
    //   "refresh": "",
    //   "access": ""
    // }

    if ( hasUserName && hasPassWord ) {
      const res = await loginToken({
        username: selectuUserName.value,
        password: selectPassWord.value
      })
      if ( res.access && res.refresh ) {
        setCookie("token", res.access, 1 )
        setCookie("refresh", res.refresh, 1 )
        location.reload()
      } else {
        document.getElementById('error').textContent = 'Login failed. Pleasetry again'
        // Please check your username and password and try again.
      }
    }
  }