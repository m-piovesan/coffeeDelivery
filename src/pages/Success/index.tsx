import { OrderConfirmed, LandingPage, OrderDetails, OrderDetailsRow, OrderDetailsText } from './styles';

import { MapPin, CurrencyDollar, Clock } from 'phosphor-react'

export function Success() {
    return (
        <LandingPage>
            <OrderConfirmed>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você.</p>

                <OrderDetails>
                    <OrderDetailsRow>
                        <MapPin size={24} />
                        
                        <OrderDetailsText>
                            <p>oi</p>
                            <p>oi</p>
                            
                        </OrderDetailsText>
                    </OrderDetailsRow>

                </OrderDetails>
            </OrderConfirmed>
        </LandingPage>
    )
}