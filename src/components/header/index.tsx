import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <img src={logo} />
            <nav>
                <NavLink to="/" title='home'>
                    <MapPin size={24} weight="fill" /> 
                    Videira, SC
                </NavLink>

                <NavLink to="/checkout" title='home'>
                    <ShoppingCart size={24} weight="fill" /> 
                </NavLink>
            </nav>
        </Container>
    )
}