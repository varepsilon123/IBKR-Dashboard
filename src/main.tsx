import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AuthCheck from './components/AuthCheck';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthCheck />
  </StrictMode>,
);
