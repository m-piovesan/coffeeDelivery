import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <NavLink to="/" title='home'>
                <img src={logo} />
            </NavLink>

            <nav>
                <NavLink to="/checkout" title='checkout'>
                    <MapPin size={24} weight="fill" /> 
                    Videira, SC
                </NavLink>

                <NavLink to="/checkout" title='checkout'>
                    <ShoppingCart size={24} weight="fill" /> 
                </NavLink>
            </nav>
        </Container>
    )
}