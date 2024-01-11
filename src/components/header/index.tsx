import logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <img src={logo} />
            <nav>
                <span> <MapPin size={24} weight="fill" /> Videira, SC</span>
                <span> <ShoppingCart size={24} weight="fill" /> </span>
            </nav>
        </Container>
    )
}