import React from 'react'
import app from '../../utils/api'

async function sendMessage(payload) {
  try {
    const {data}=await app.post("/api/agent/chat", payload)
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export default sendMessage