import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Clarity from '@microsoft/clarity';

// Inicjalizacja Microsoft Clarity
Clarity.init('ra9lx2qcc0');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
