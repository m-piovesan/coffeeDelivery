import {
    OrderContainer,
    SelectedCoffees,
    LandingPage,
    InfoBox,
    IBTitle,
    PaymentButton,
    PriceDisplay,
    PriceRow,
    ConfirmButton,
    IBForm,
    Row,
    UFSelect,
    CoffeesContainer,
    CoffeeImg,
    TitleSection,
    ButtonsSection,
    RemoveButton
} from './styles';

import { BaseInput } from './components/input'
import { Price } from '../../components/card/styles';
import { QuantityInput } from '../../components/quantityInput';

import { MapPinLine, CurrencyDollar, Money, CreditCard, Bank, Trash } from 'phosphor-react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { useTheme } from 'styled-components';

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCart } from '../../hooks/useCart'

import { coffees } from '../../../data.json'

type FormInputs = {
    cep: number
    street: string
    number: string
    fullAddress: string
    neighborhood: string
    city: string
    state: string
    paymentMethod: 'credit' | 'debit' | 'cash'
}

// schema de validação
export const newOrderSchema = z.object({
        cep: z.string().min(8, 'Informe um CEP válido'),
        street: z.string().min(1, 'Informe a rua'),
        number: z.string().min(1, 'Informe o número'),
        complement: z.string(),
        neighborhood: z.string().min(1, 'Informe o bairro'),
        city: z.string().min(1, 'Informe a cidade'),
        state: z.string().min(1, 'Informe a UF'),
    //     paymentMethod: z.enum(['credit', 'debit', 'cash', ''], {
    //         invalid_type_error: 'Informe um método de pagamento',
    // }),
})
  
// tipagem do resultado da validação
export type OrderInfo = z.infer<typeof newOrderSchema>

const shippingPrice = 3.5

export function Checkout() {
    const theme = useTheme()

    const {
        cart,
        checkout,
        incrementItemQuantity,
        decrementItemQuantity,
        removeItem,
    } = useCart()
    
    const coffeesInCart = cart.map((item) => {
        const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

        if (!coffeeInfo) {
            throw new Error('Invalid coffee.')
        }

        return {
            ...coffeeInfo,
            quantity: item.quantity,
        }
    })

    const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
        return (previousValue += currentItem.price * currentItem.quantity)
    }, 0)

    const { register, handleSubmit, formState } = useForm<OrderInfo>({
        resolver: zodResolver(newOrderSchema),
    })

    function handleItemIncrement(itemId: string) {
        incrementItemQuantity(itemId)
    }
    
    function handleItemDecrement(itemId: string) {
        decrementItemQuantity(itemId)
    }
    
    function handleItemRemove(itemId: string) {
        removeItem(itemId)
    }

    const onSubmit: SubmitHandler<OrderInfo> = (data) => {
        const order = {
            ...data,
            items: coffeesInCart,
            total: totalItemsPrice + shippingPrice,
        }

        checkout(order)
    }

    const isCarEmpty = cart.length === 0

    // Função para lidar com o clique nos botões de pagamento
    // function handlePaymentButtonClick(paymentMethod: 'credit' | 'debit' | 'cash' | '') {
    //     event.preventDefault();
    //     setInputInfo({ ...inputInfo, paymentMethod })
    // }

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
                    
                    <IBForm id='addressForm' onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <BaseInput
                                width="50%"
                                id="cep"
                                placeholder="CEP"
                                {...register('cep', { required: true })}
                            />

                            <p>Somente números</p>
                        </Row>

                        <Row>
                            <BaseInput width="100%"
                                id="street"
                                placeholder="Rua"
                                {...register('street', { required: true })}                 
                            />
                        </Row>

                        <Row>
                            <BaseInput width="30%"
                                id="number"
                                placeholder="Número"   
                                {...register('number', { required: true })}                
                            />

                            <BaseInput width="70%"
                                id="complement"
                                placeholder="Complemento (opcional)" 
                                {...register('complement', { required: false })}                  
                            />
                        </Row>

                        <Row>
                            <BaseInput width="30%"
                                id="neighborhood"
                                placeholder="Bairro" 
                                {...register('neighborhood', { required: true })}                  
                            />

                            <BaseInput width="60%"
                                id="city"
                                placeholder="Cidade" 
                                {...register('city', { required: true})}                  
                            />

                            <UFSelect defaultValue="" {...register('state', { required: true })}>
                                <option disabled value={""}>UF</option>
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

                    {/* <IBForm>
                        <Row>
                            <PaymentButton
                                onClick={() => handlePaymentButtonClick('credit')}
                                isSelected={inputInfo.paymentMethod === 'credit'}
                            >
                                <CreditCard size={22} color='#4B2995' />
                                Cartão de crédito
                            </PaymentButton>

                            <PaymentButton
                                onClick={() => handlePaymentButtonClick('debit')}
                                isSelected={inputInfo.paymentMethod === 'debit'}
                            >
                                <Bank size={22} color='#4B2995' />
                                Cartão de débito
                            </PaymentButton>

                            <PaymentButton
                                onClick={() => handlePaymentButtonClick('cash')}
                                isSelected={inputInfo.paymentMethod === 'cash'}
                            >
                                <Money size={22} color='#4B2995' />
                                Dinheiro
                            </PaymentButton>
                        </Row>
                    </IBForm> */}
                </InfoBox>
            </OrderContainer>

            <SelectedCoffees>
                <h2>Cafés Selecionados</h2>
                
                <InfoBox>
                    {coffeesInCart.map((coffee) => (
                        <CoffeesContainer> 
                            <CoffeeImg src={coffee.image}/>
                            
                            <TitleSection>
                                <p>{coffee.title}</p>
        
                                <ButtonsSection>
                                    <QuantityInput 
                                        quantity={coffee.quantity}
                                        incrementQuantity={() => handleItemIncrement(coffee.id)}
                                        decrementQuantity={() => handleItemDecrement(coffee.id)}
                                    />
        
                                    <RemoveButton onClick={() => handleItemRemove(coffee.id)}>
                                        <Trash size={18} color={theme['purple-700']} />
                                        <p>remover</p>
                                    </RemoveButton>
                                </ButtonsSection>
        
                            </TitleSection>
        
                            <Price>
                                <span>R$</span>
                                <span>9,90</span>
                            </Price>
                        </CoffeesContainer> 

                    ))}
                    
                    <PriceDisplay>
                        <PriceRow>
                            <p>Total de itens:</p>
                            <p>
                                {new Intl.NumberFormat('pt-br', {
                                    currency: 'BRL',
                                    style: 'currency',
                                }).format(totalItemsPrice)}    
                            </p>    
                        </PriceRow> 

                        <PriceRow>
                            <p>Entrega:</p>
                            {!isCarEmpty ? 
                                <p>
                                    {new Intl.NumberFormat('pt-br', {
                                        currency: 'BRL',
                                        style: 'currency',
                                    }).format(shippingPrice)}    
                                </p> : <p>R$ 0,00</p> 
                            }
                        </PriceRow>

                        <PriceRow>
                            <p>Total:</p>
                            {!isCarEmpty ? 
                                <p>
                                    {new Intl.NumberFormat('pt-br', {
                                        currency: 'BRL',
                                        style: 'currency',
                                    }).format(totalItemsPrice + shippingPrice)}    
                                </p> : <p>R$ 0,00</p> 
                            }   
                        </PriceRow>  
                    </PriceDisplay>

                    <ConfirmButton
                        form='addressForm'
                        type='submit'
                        isValid={(formState.isValid) && (!isCarEmpty)}
                    >
                        <p>Confirmar Pedido</p>
                    </ConfirmButton>        

                </InfoBox>

            </SelectedCoffees>
        </LandingPage>
    );
}
