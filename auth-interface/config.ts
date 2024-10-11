import axios from "axios"

export const BASE_URL = "http://localhost:3000/auth"

export const mainApiInstance = axios.create(
    {
        baseURL:BASE_URL,
    }
)
