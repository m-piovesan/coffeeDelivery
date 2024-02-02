import coffeeBanner from '../../assets/coffeeBanner.svg'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import { Banner, Content, LandingPage, CoffeeList } from './styles'

import { Icon } from '../../components/icon'
import { Card } from '../../components/card'

import { coffees } from '../../../data.json'

export function Home() {
    return (
        <div>
            <LandingPage>
                <Content>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p className='subtitle'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    
                    <ul>
                        <li>
                            <Icon iconsColor="yellow-dark"> 
                                <ShoppingCart weight="fill" color='white' />
                            </Icon>
                            <p>Compra simples e segura</p>
                        </li>
                        <li>
                            <Icon iconsColor='gray'> <Package weight="fill" color='white' /> </Icon>                    
                            <p>Embalagem mantém o café intacto</p>
                        </li>
                        <li>
                            <Icon iconsColor='yellow'> <Timer weight="fill" color='white' /> </Icon>
                            <p>Entrega rápida e rastreada</p>                        
                        </li>
                        <li>
                            <Icon iconsColor='purple-dark'> <Coffee weight="fill" color='white' /> </Icon>                        
                            <p>O café chega fresquinho até você</p>
                        </li>
                    </ul>
                </Content>
                <Banner>
                    <img src={coffeeBanner} alt="Café" />
                </Banner>
            </LandingPage>

            <CoffeeList>
                <h2>Nossos cafés</h2>

                <div>
                    {coffees.map((coffee) => (
                        <Card key={coffee.id} coffee={coffee} />
                    ))}
                </div>
            </CoffeeList>  
        </div>
    )
}