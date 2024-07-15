import { setCookie } from '~/utils/cookies'

export function killToken() {
    setCookie("token", "", 0);
    setCookie("refresh", "", 0);
    location.reload();
}