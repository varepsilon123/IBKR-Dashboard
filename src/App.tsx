import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home'
import TrendIdentification from './components/TrendIdentification/TrendIdentification'

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <Router>
      <div className="relative noto-sans-jp-regular">
        <Menu onToggle={handleMenuToggle} />
        <div className={`transition-all duration-500 ${isMenuOpen ? 'ml-72' : 'ml-10'} mr-10 mt-20`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trend" element={<TrendIdentification />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App