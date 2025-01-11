import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home'
import TrendIdentification from './components/TrendIdentification/TrendIdentification'

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative noto-sans-jp-regular">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trend" element={<TrendIdentification />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App