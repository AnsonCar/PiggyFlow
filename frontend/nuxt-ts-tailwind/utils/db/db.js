export async function api(url, options, local=false) {
    // 取得 url 資源 和 選項
    const BasisApiURL = "http://localhost:8000"
    try {
        // 請求
        const res = await fetch(`${BasisApiURL}/api/${url}`, options)
        const data = await res.json()
        return data
    } catch (error) {
        // 如果 請求失敗（Server 死咗 ）
        return {
            "error": "An error occurred.",
            "code": 500,
            "message": "Server Error."
        }
    }
}

export async function apiFile(url, options, local=false) {
    // 取得 url 資源 和 選項
    const BasisApiURL = "http://localhost:8000"
    try {
        // 請求
        const res = await fetch(`${BasisApiURL}/api/${url}`, options)
        const blob = await res.blob(); // 提取实际的文件内容
        return blob;
    } catch (error) {
        // 如果 請求失敗（Server 死咗 ）
        return {
            "error": "An error occurred.",
            "code": 500,
            "message": "Server Error."
        }
    }
}
