import coffeeBanner from '../../assets/coffeeBanner.svg'
import c1 from '../../assets/c1.svg'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import { Container, Banner, Content, Icon, CoffeeSection, LandingPage, CoffeeCard } from './styles'

export function Home() {
    return (
        <Container>
            <LandingPage>
                <Content>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p className='subtitle'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <ul>
                        <li>
                            <Icon iconsColor="yellow-dark"> <ShoppingCart weight="fill" color='white' /> </Icon>
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

            <h2>Nossos cafés</h2>
            <CoffeeSection>
                <ul>
                    <CoffeeCard>
                        <div>
                            <img src={c1} alt="" />
                            <h4>Tradicional</h4>
                            <h4>Tradicional</h4>
                            <h3> Nome do Café </h3>
                            <p> Descrição do café, ele é bem daora e pá, seu perfume francês ficou na minha casa </p>
                            <span>R$ 9,90</span>
                        </div>
                    </CoffeeCard>
                    <CoffeeCard>
                        <div>
                            <img src={c1} alt="" />
                            <h4>Tradicional</h4>                        
                            <h3> Nome do Café </h3>
                            <p> Descrição do café </p>
                            <span>R$ 9,90</span>
                        </div>
                    </CoffeeCard>
                    <CoffeeCard>
                        <div>
                            <img src={c1} alt="" />
                            <h4>Tradicional</h4>
                            <h3> Nome do Café </h3>
                            <p> Descrição do café </p>
                            <span>R$ 9,90</span>
                            <ShoppingCart weight="fill" size={24} color='purple' />
                        </div>
                    </CoffeeCard>
                    <CoffeeCard>
                        <div>
                            <img src={c1} alt="" />
                            <h4>Tradicional</h4>
                            <h3> Nome do Café </h3>
                            <p> Descrição do café </p>
                            <span>R$ 9,90</span>
                        </div>
                    </CoffeeCard>

                    <CoffeeCard>
                        <div>
                            <img src={c1} alt="" />
                            <h4>Tradicional</h4>
                            <h3> Nome do Café </h3>
                            <p> Descrição do café, ele é bem daora e pá </p>
                            <span>R$ 9,90</span>
                        </div>
                    </CoffeeCard>
                    <CoffeeCard>
                        <div>
                            <img src={c1} alt="" />
                            <h4>Tradicional</h4>                        
                            <h3> Nome do Café </h3>
                            <p> Descrição do café </p>
                            <span>R$ 9,90</span>
                        </div>
                    </CoffeeCard>
                    <CoffeeCard>
                        <div>
                            <img src={c1} alt="" />
                            <h4>Tradicional</h4>
                            <h3> Nome do Café </h3>
                            <p> Descrição do café </p>
                            <span>R$ 9,90</span>
                        </div>
                    </CoffeeCard>
                    <CoffeeCard>
                        <div>
                            <img src={c1} alt="" />
                            <h4>Tradicional</h4>
                            <h3> Nome do Café </h3>
                            <p> Descrição do café </p>
                            <span>R$ 9,90</span>
                        </div>
                    </CoffeeCard> 
                    <CoffeeCard>
                        <div>
                            <img src={c1} alt="" />
                            <h4>Tradicional</h4>
                            <h3> Nome do Café </h3>
                            <p> Descrição do café </p>
                            <span>R$ 9,90</span>
                        </div>
                    </CoffeeCard> 
                    <CoffeeCard>
                        <div>
                            <img src={c1} alt="" />
                            <h4>Tradicional</h4>
                            <h3> Nome do Café </h3>
                            <p> Descrição do café </p>
                            <span>R$ 9,90</span>
                        </div>
                    </CoffeeCard> 
                </ul>                
            </CoffeeSection>
        </Container>
    )
}