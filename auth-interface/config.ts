import axios from "axios"

export const BASE_URL = "https://localhost:443/auth"

export const mainApiInstance = axios.create(
    {
        baseURL:BASE_URL,
    }
)
