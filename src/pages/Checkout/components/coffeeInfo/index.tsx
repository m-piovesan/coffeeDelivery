import { Trash } from 'phosphor-react'
import { Container, CoffeeImg, RemoveButton, TitleSection, ButtonsSection } from './styles'
import { QuantityInput } from '../../../../components/quantityInput'
import { Price } from '../../../../components/card/styles'

import { coffees } from '../../../../../data.json'

import { useTheme } from 'styled-components'

import { useCart } from '../../../../hooks/useCart'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { newOrderSchema } from '../..'

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
  

export function CoffeeInfo() {
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

        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm<FormInputs>({
        resolver: zodResolver(newOrderSchema),
    })

    return (
        // {coffeesInCart.map((coffee:any) => (
            <Container> 
                <div>
                <CoffeeImg />
                
                <TitleSection>
                    <p>Café</p>


                    <ButtonsSection>
                        <QuantityInput 
                            quantity={1}
                            incrementQuantity={() => {}}
                            decrementQuantity={() => {}}
                        />

                        <RemoveButton>
                            <Trash size={20} color={theme['purple-700']} />
                            <p>remover</p>
                        </RemoveButton>
                    </ButtonsSection>

                </TitleSection>
            </div>

            <Price>9,90</Price>
        </Container> 
        // ))} 
    )
}