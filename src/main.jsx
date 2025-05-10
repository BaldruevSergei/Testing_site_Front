import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'

import { setupLoginMock } from './mock/loginmock.jsx';

if (import.meta.env.MODE === 'development') {
  setupLoginMock();
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
