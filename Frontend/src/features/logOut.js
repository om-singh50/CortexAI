import React from 'react'
import app from '../../utils/api'

async function logOut() {
  try {
    const {data}=await app.get("api/auth/logout")
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export default logOut