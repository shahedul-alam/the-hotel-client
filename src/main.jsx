import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router/AppRouter.jsx'
import './index.css'
import AuthContextProvider from './contexts/AuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  </StrictMode>,
)
