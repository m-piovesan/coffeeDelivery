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

// import { useAddress } from '../../contexts/AddressContext'

export function Success() {
    // const { address } = useAddress();

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
                                {/* <p>Entrega em {address.street}, {address.number}</p>
                                <p>{address.neighborhood} - {address.city}, {address.state}</p> */}
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
                                <p>Dinheiro</p>
                            </OrderDetailsText>
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