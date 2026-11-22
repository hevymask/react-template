import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'

// Provider
import { RouterProvider } from '@/components/provider/router'
import { ThemeProvider } from '@/components/provider/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider />
    <ThemeProvider />
  </StrictMode>
)
