import './App.css'
import './index.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import React from 'react'

function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <SignUp /> */}
      <Home />
    </div>
  )
}

export default App
