import axios from "axios";

const app=axios.create({
    baseURL:import.meta.env.VITE_SERVER_URL,
    withCredentials:true
})

export default app