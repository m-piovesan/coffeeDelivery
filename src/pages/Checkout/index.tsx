import { OrderContainer, SelectedCoffees, LandingPage, InfoBox, IBTitle, IBForm, Row, TaskInput } from './styles'

import { MapPinLine } from 'phosphor-react'

export function Checkout() {
    return (
        <LandingPage>
            <OrderContainer>
                <h3>Complete seu pedido</h3>

                <InfoBox>
                    <IBTitle>                        
                        <MapPinLine size={22} color='#DBAC2C'/>
                        <p>Endereço de Entrega</p>
                    </IBTitle>
                    
                    <p>Informe o endereço onde deseja receber seu pedido</p>

                    <IBForm>
                        <Row>
                            <TaskInput
                                id="task"
                                placeholder="Dê um nome para o seu projeto"                   
                            />
                        </Row>

                        <Row>
                            <label htmlFor=""></label>
                            <input type="text" placeholder="CEP" />
                        </Row>

                        <Row>
                            <label htmlFor=""></label>
                            <input type="text" placeholder="Rua" />
                        </Row>


                        <Row>
                            <label htmlFor=""></label>
                            <input type="text" placeholder="Número" />
                        
                            <label htmlFor=""></label>
                            <input type="text" placeholder="Complemento" />
                        </Row>

                        <Row>
                            <label htmlFor=""></label>
                            <input type="text" placeholder="Bairro" />
                            
                            <label htmlFor=""></label>
                            <input type="text" placeholder="Cidade" />
                            
                            <label htmlFor=""></label>
                            <input type="text" placeholder="UF" />
                        </Row>

                    </IBForm>

                </InfoBox>

            </OrderContainer>

            <SelectedCoffees>
                <h2>Selected Coffees</h2>
                <p>1 item</p>
                <p>$10.00</p>
            </SelectedCoffees>
        </LandingPage>
    )
}