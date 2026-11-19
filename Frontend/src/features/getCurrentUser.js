import app from "../../utils/api"


const getCurrentUser=async()=>{
    try {
        const {data}=await app.get('/api/me')
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}

export default getCurrentUser