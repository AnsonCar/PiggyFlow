import { api } from "./db.js"

export function loginToken(data) {
    const url = 'token/pair'
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return api(url, options)
}

export function refreshToken(data) {
    const url = 'token/refresh'
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return api(url, options)
}

export function checkToken(data) {
    const url = 'token/verify'
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return api(url, options)
}