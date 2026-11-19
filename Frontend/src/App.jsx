import { signInWithPopup } from 'firebase/auth'
import React, { useEffect } from 'react'
import Home from './pages/Home'
import getCurrentUser from './features/getCurrentUser'
import { useDispatch } from 'react-redux'
import { setUserdata } from './store/userSlice'

function App() {

const dispatch=useDispatch()
useEffect(()=>{
  const getUser=async ()=>{
    const data=await getCurrentUser()
    dispatch(setUserdata(data))
  }
  getUser()
},[])

  return (
   <>
   <Home/>
   </>
  )
}

export default App