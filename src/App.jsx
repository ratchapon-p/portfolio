import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage/Homepage'
import Portfolio from './components/Homepage/Portfolio/Portfolio' 
import Workandevents from './components/Homepage/Workandevents/Workandevents' 
import Certificate from './components/Homepage/Certificate/Certificate' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/workandevents' element={<Workandevents />}/>
          <Route path='/certificate' element={<Certificate />}/>


        </Routes>

      </BrowserRouter>

      
    </>
  )
}

export default App
