import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "19f5f96d6fe4488dbdddc9ee947825b3"
    }
})