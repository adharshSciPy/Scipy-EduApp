import React from 'react'
import LandingPage from './scenes/LandingPage'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
        <LandingPage />
        <Outlet />
    </>
  )
}

export default App