import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { AddressContextProvider } from './contexts/AddressContext'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (  
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            <AddressContextProvider>
                <Router />
            </AddressContextProvider>
        </BrowserRouter>
    
        <GlobalStyle />
    </ThemeProvider>
  )
}