

import './App.css'
import {  HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

import AboutUsPage from './pages/AboutUsPage'
import TimelineIcons from './components/Timeline'

function App() {


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
