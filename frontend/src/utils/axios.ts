import ax from "axios";

export const axios = ax.create({
    baseURL: "http://localhost:3000"
});

export function set_acess_token(token: string) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}