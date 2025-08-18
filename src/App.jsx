import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header.js';
import { Balance } from './components/Balance.js';


function App() {

  return (
    <>
      <div>
        <Header/>
      </div>
      <div className="container">
        <Balance/>
      </div>
    
    </>
  )
}

export default App
