const API_KEY = "8ca39b78e36911f562343ed2f219c7b3";
const BASE_URL = "https://api.themoviedb.org/3";

// Use CORS proxy for testing
const PROXY_URL = "https://corsproxy.io/?";

// Function to fetch popular movies using the API with the proxy
export const getPopularMovies = async () => {
    const response = await fetch(`${PROXY_URL}${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

// Function to search for movies using the API with the proxy
export const searchMovies = async (query) => {
    const response = await fetch(`${PROXY_URL}${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};
