import { useState } from 'react'

import './App.css'
import {  HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import AboutUsPage from './pages/AboutUsPage'
import TimelineIcons from './components/Timeline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<HomePage />} />
          <Route path="/portfolio" element={<HomePage />} />
          <Route path="/resume" element={<TimelineIcons />} />
          <Route path="/contactus" element={<HomePage />} />
          
        
      </Routes>
     
    </HashRouter>
  )
}

export default App
