import axios from "axios";

const VITE_API_KEY  = process.env.REACT_APP_API_KEY;

if (!VITE_API_KEY ) {
    throw new Error("API key is not provided in environment variables");
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: VITE_API_KEY 
    }
});

