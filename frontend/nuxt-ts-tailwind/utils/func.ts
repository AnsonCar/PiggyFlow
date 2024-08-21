export async function checkNull(text: string): Promise<boolean> {
    return text === "" ? true : false
}