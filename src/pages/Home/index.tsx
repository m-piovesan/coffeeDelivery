import coffeeBanner from '../../assets/coffeeBanner.svg'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import { Container, Banner, Content } from './styles'

export function Home() {
    return (
        <Container>
            <Content>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p className='subtitle'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <ul>
                    <li>
                        <span> <ShoppingCart weight="fill" color='white' /> </span>
                        <p>Compra simples e segura</p>
                    </li>
                    <li>
                        <span> <Package weight="fill" color='white' /> </span>                    
                        <p>Embalagem mantém o café intacto</p>
                    </li>
                    <li>
                        <span> <Timer weight="fill" color='white' /> </span>
                        <p>Entrega rápida e rastreada</p>                        
                    </li>
                    <li>
                        <span> <Coffee weight="fill" color='white' /> </span>                        
                        <p>O café chega fresquinho até você</p>
                    </li>
                </ul>
            </Content>
            <Banner>
                <img src={coffeeBanner} alt="Café" />
            </Banner>
        </Container>
    )
}