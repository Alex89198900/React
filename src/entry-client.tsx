import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';
import './App.scss';
hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <App />
  </StrictMode>
);
