export async function fetchJSON(url){
    console.log(url)
    const response = await fetch(url)
    return await response.json()
}