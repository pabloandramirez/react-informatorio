import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PlayBarProvider } from './components/contexts/PlayBarContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlayBarProvider>
    <App />
    </PlayBarProvider>
  </React.StrictMode>,
)
