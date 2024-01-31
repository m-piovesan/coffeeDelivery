import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { CartProvider } from './contexts/CartContext'

// import { AddressContextProvider } from './contexts/AddressContext'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (  
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            <CartProvider>
                <Router />
            </CartProvider>
        </BrowserRouter>
    
        <GlobalStyle />
    </ThemeProvider>
  )
}