import { setCookie } from '/static/js/utils/cookies.js'

export function killToken() {
    setCookie("token", "", 0);
    setCookie("refresh", "", 0);
    location.reload();
}