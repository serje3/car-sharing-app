export async function fetchJSON(url, method = "GET") {
    const response = await fetch(url, {method: method})
    return response.json();
}