import { api, apiFile } from "~/utils/db/db"
import { setCookie, getCookie } from '~/utils/cookies.js'

export function getHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${getCookie('token')}`
    }
}

export function getsTransaction() {
    const url = "transaction"
    const options = {
        method: "GET",
        headers: getHeaders()
    }
    return api(url, options)
}

export function addTransaction(data) {
    const url = "transaction"
    const options = {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(data)
    }
    return api(url, options)
}

export function editTransaction(data, uuid) {
    const url = "transaction/" + uuid
    const options = {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(data)
    }
    return api(url, options)
}

export function delTransaction(uuid) {
    const url = "transaction/" + uuid
    const options = {
        method: "DELETE",
        headers: getHeaders()
    }
    return api(url, options)
}

export function downloadTransactionCSV() {
    const url = "transaction/download/csv"
    const options = {
        method: "POST",
        headers: getHeaders()
    }
    return apiFile(url, options).then(res=>{
        const url = window.URL.createObjectURL(new Blob([res]));
        const link = document.createElement('a');
        link.href = url;
        const filename = `transaction.csv`;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });
}
