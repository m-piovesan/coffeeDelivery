import logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <img src={logo} />
            <nav>
                <a href="#"> 
                    <MapPin size={24} weight="fill" /> 
                    Videira, SC
                </a>
                <a href="#">
                    <ShoppingCart size={24} weight="fill" /> 
                </a>
            </nav>
        </Container>
    )
}