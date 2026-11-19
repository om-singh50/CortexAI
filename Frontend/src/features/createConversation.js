import app from "../../utils/api"

export const createConversation=async ()=>{
    try {
        const {data}=await app.get("/api/chat/create-conversation")
        return data
        
    } catch (error) {
        console.log(error)
        return []
    }
}