import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { Container } from './styles'

import { useCart } from '../../hooks/useCart'

export function Header() {
    const { cart } = useCart()

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

                <NavLink to="/checkout"  aria-disabled={cart.length === 0} title='checkout'>
                    <ShoppingCart size={24} weight="fill" /> 
                    {cart.length > 0 ? <span>{cart.length}</span> : null}
                </NavLink>
            </nav>
        </Container>
    )
}