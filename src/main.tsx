import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './App.css';
import { presetGpnDefault, Theme } from '@consta/uikit/Theme/index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme preset={presetGpnDefault}>
      <App />
    </Theme>
  </StrictMode>,
);
