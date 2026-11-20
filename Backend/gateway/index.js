import express from 'express'
import dotenv from 'dotenv'
import proxy from 'express-http-proxy';
import cors from "cors"
import cookieParser from 'cookie-parser';
import getCurrentUser from './controllers/user.controller.js';
import Protect from './middleware/auth.middleware.js';
import { proxyWithHeader } from './utils/proxyWithHeader.js';
import morgan from 'morgan';

dotenv.config()

const port=process.env.PORT;


const app=express()
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

app.use(morgan("dev"))

app.use(cookieParser())

app.use("/api/auth", proxy(process.env.AUTH_SERVICE))

app.use("/api/chat",Protect, proxyWithHeader(process.env.CHAT_SERVICE))

app.use("/api/billing",Protect, proxyWithHeader(process.env.BILLING_SERVICE))

app.use("/api/agent",Protect, proxy(process.env.AGENT_SERVICE))

app.get('/api/me', Protect, getCurrentUser);

app.get('/', (req, res)=>{
    res.json({
        "message":"Hello from gateway v1"
    })
})

app.listen(port, ()=>{
    console.log(`gateway running on port ${port}`);
    
})