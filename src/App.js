import React from 'react'
import LandingPage from './scenes/main/LandingPage'
import { Outlet } from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ip,setIP] = useState('');
    
  //creating function to load ip address from the API
  const getData = async()=>{
      const res = await axios.get('https://geolocation-db.com/json/')
                                                 
      console.log(res.data);
      setIP(res.data.IPv4)
  }

  useEffect(()=>{
    //passing getData method to the lifecycle method
    getData()
},[])
  return (
    <>
        <LandingPage />
        <Outlet />
    </>
  )
}

export default App