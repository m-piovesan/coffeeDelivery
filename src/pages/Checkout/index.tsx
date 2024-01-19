import {
    OrderContainer,
    SelectedCoffees,
    LandingPage,
    InfoBox,
    IBTitle,
    IBForm,
    Row,
    BaseInput,
    UFSelect,
    PaymentButton,
    PriceDisplay,
    PriceRow,
    ConfirmButton
} from './styles';

import { MapPinLine, CurrencyDollar, Money, CreditCard, Bank } from 'phosphor-react';

import { useState } from 'react';

export function Checkout() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const handlePaymentButtonClick = (paymentMethod) => {
        setSelectedPaymentMethod(paymentMethod);
        console.log(selectedPaymentMethod);
    };

    return (
        <LandingPage>
            <OrderContainer>
                <h2>Complete seu pedido</h2>

                <InfoBox>
                    <IBTitle>                        
                        <MapPinLine size={22} color='#DBAC2C'/>
                        <p>Endereço de Entrega</p>
                    </IBTitle>
                    
                    <p>Informe o endereço onde deseja receber seu pedido</p>

                    <IBForm>
                        <Row>
                            <BaseInput width="30%"
                                id="task"
                                placeholder="CEP"                   
                            />
                        </Row>

                        <Row>
                            <BaseInput width="100%"
                                id="task"
                                placeholder="Rua"                   
                            />
                        </Row>

                        <Row>
                            <BaseInput width="30%"
                                id="task"
                                placeholder="Número"                   
                            />

                            <BaseInput width="70%"
                                id="task"
                                placeholder="Complemento"                   
                            />
                        </Row>

                        <Row>
                            <BaseInput width="30%"
                                id="task"
                                placeholder="Bairro"                   
                            />

                            <BaseInput width="60%"
                                id="task"
                                placeholder="Cidade"                   
                            />

                            <UFSelect>
                                <option disabled selected>UF</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </UFSelect>
                        </Row>
                    </IBForm>
                </InfoBox>

                <InfoBox>
                    <IBTitle>
                        <CurrencyDollar size={22} color='#4B2995' />
                        <p>Pagamento</p>
                    </IBTitle>

                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

                    <IBForm>
                        <Row>
                            <PaymentButton
                                isSelected={selectedPaymentMethod === 'creditCard'}
                                onClick={() => handlePaymentButtonClick('creditCard')}
                            >
                                <CreditCard size={22} color='#4B2995' />
                                Cartão de crédito
                            </PaymentButton>

                            <PaymentButton
                                isSelected={selectedPaymentMethod === 'debitCard'}
                                onClick={() => handlePaymentButtonClick('debitCard')}
                            >
                                <Bank size={22} color='#4B2995' />
                                Cartão de débito
                            </PaymentButton>

                            <PaymentButton
                                isSelected={selectedPaymentMethod === 'cash'}
                                onClick={() => handlePaymentButtonClick('cash')}
                            >
                                <Money size={22} color='#4B2995' />
                                Dinheiro
                            </PaymentButton>
                        </Row>
                    </IBForm>
                </InfoBox>
            </OrderContainer>

            <SelectedCoffees>
                <h2>Cafés Selecionados</h2>
                
                <InfoBox>
                    <div className='coffeeDisplay'>

                    </div>
                    <PriceDisplay>
                        <PriceRow>
                            <p>Total de itens:</p>
                            <p>R$ 0,00</p>    
                        </PriceRow> 

                        <PriceRow>
                            <p>Entrega:</p>
                            <p>R$ 0,00</p>    
                        </PriceRow>

                        <PriceRow>
                            <p>Total:</p>
                            <p>R$ 0,00</p>    
                        </PriceRow>  
                    </PriceDisplay>

                    <ConfirmButton to="/success" title='home'>
                        <p>Confirmar Pedido</p>
                    </ConfirmButton>
                </InfoBox>

            </SelectedCoffees>
        </LandingPage>
    );
}
