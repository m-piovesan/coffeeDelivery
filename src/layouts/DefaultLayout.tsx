import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { Container } from './styles'

export function DefaultLayout() {
    return (
        <div>
            <Header />
            
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}