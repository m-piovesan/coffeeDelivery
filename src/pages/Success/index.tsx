import {
    OrderConfirmed,
    LandingPage,
    OrderDetails,
    OrderDetailsRow,
    OrderDetailsText,
    GradientBorder,
    BannerImage
} from './styles';

import { Icon } from '../../components/icon'
import Motoboy from '../../assets/motoboy.svg'
import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'

import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router-dom';

export function Success() {
    const { orders } = useCart()
    const { orderId } = useParams()
    const orderInfo = orders.find((order) => order.id === Number(orderId))
    
    const paymentMethod = {
        credit: 'Cartão de crédito',
        debit: 'Cartão de débito',
        cash: 'Dinheiro',
    }
    
    if (!orderInfo?.id) {
        return null
    }

    return (
        <LandingPage>
            <OrderConfirmed>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você.</p>

                <GradientBorder> 
                    <OrderDetails>
                        <OrderDetailsRow>
                            <Icon iconsColor="light-purple"> 
                                <MapPin weight="fill" color='white' />
                            </Icon>                        
                            <OrderDetailsText>
                                <span>
                                    Entrega em{' '}
                                    <strong>
                                        {orderInfo.street}, {orderInfo.number}
                                    </strong>
                                </span>
                                
                                <span>
                                    {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}
                                </span>
                            </OrderDetailsText>
                        </OrderDetailsRow>

                        <OrderDetailsRow>
                            <Icon iconsColor="yellow"> 
                                <Timer weight="fill" color='white' />
                            </Icon>                        
                            <OrderDetailsText>
                                <p>Previsão de entrega</p>
                                <p>20 min - 30 min </p>
                            </OrderDetailsText>
                        </OrderDetailsRow>

                        <OrderDetailsRow>
                            <Icon iconsColor="yellow-dark"> 
                                <CurrencyDollar weight="fill" color='white' />
                            </Icon>                        
                            <OrderDetailsText>
                                <p>Pagamento na entrega:</p>
                                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>                            </OrderDetailsText>
                        </OrderDetailsRow>
                    </OrderDetails>
                </GradientBorder>
            </OrderConfirmed>

            <BannerImage>
                <img src={Motoboy} alt="" />
            </BannerImage>
            
        </LandingPage>
    )
}