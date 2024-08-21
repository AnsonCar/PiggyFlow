export async function checkNull(text: string): Promise<boolean> {
    return text === "" ? true : false
}

export async function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function killToken() {
    setCookie("token", "", 0);
    setCookie("refresh", "", 0);
    location.reload();
}

// const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
// darkModeQuery.addEventListener('change', (e) => {
//     document.body.setAttribute('data-theme', e.matches ? 'black' : 'lofi');
// });

export async function downloalCsv(data: any, filename: string) {
    const url = window.URL.createObjectURL(new Blob([await data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}