import React from 'react';
import './App.css'
import AuthCheck from './components/AuthCheck/AuthCheck'
import Menu from './components/Menu/Menu'

const App: React.FC = () => {
  return (
    <div className="relative">
      <Menu />
      <h1 className="mt-4">IBKR Dashboard</h1>
      <p>Click the menu button on the top left corner to explore the application.</p>
      <div className="card">
        <AuthCheck />
      </div>
    </div>
  )
}

export default App