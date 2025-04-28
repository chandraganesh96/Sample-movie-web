export async function handler(event, context) {
    const API_KEY = "8ca39b78e36911f562343ed2f219c7b3";
    const BASE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY;

    const response = await fetch(BASE_URL);
    const data = await response.json();

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify(data.results),
    };
}
