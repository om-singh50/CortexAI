import app from "../../utils/api";

export const updateConversation=async(payload)=>{
    try {
        const {data}= await app.post("/api/chat/update-conversation",payload)
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}