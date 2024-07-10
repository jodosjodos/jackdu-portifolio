

import './App.css'
import {  HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

import AboutUsPage from './pages/AboutUsPage'
import TimelineIcons from './components/Timeline'
import ServicePage from './pages/ServicePage'
import PortfolioPage from './pages/PortifolioPage'

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/resume" element={<TimelineIcons />} />
          <Route path="/contact" element={<HomePage />} />
          
        
      </Routes>
     
    </HashRouter>
  )
}

export default App
