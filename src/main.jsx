import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import AuthCheck from './components/AuthCheck'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthCheck />
    {/* <App /> */}
  </StrictMode>,
)
