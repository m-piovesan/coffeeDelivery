import {
    OrderContainer,
    SelectedCoffees,
    LandingPage,
    InfoBox,
    IBTitle,
    PaymentButton,
    PriceDisplay,
    PriceRow,
    ConfirmButton
} from './styles';

import { IBForm, Row } from './components/AddressForm/styles';

import { AddressForm } from './components/AddressForm'

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

                    <AddressForm />
                    
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
