import app from "../../utils/api"

export const createOrder=async (plan) => {
    try {
        const {data}=await app.post("/api/billing/create",{plan})
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}