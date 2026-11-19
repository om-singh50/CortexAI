import app from "../../utils/api"

export const verifyPayment=async (payload) => {
    try {
        const {data}=await app.post("/api/billing/verify",payload)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}