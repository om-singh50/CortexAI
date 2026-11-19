import app from "../../utils/api"

export const getConversations=async ()=>{
    try {
        const {data}=await app.get("/api/chat/get-conversations")
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}