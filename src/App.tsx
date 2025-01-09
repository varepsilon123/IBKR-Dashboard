import React from 'react';
import './App.css'
import AuthCheck from './components/AuthCheck/AuthCheck'

const App: React.FC = () => {
  return (
    <>
      <h1>IBKR Dashboard</h1>
      <div className="card">
        <AuthCheck />
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App