import React from 'react'
import app from '../../utils/api'

async function getMessages(id) {
  try {
    const {data}= await app.get(`/api/chat/get-messages/${id}`)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}

export default getMessages