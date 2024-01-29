import { ShoppingCart, Check } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Container, CoffeeImg, Description, Tags, Title, Control, Order, Price } from './styles.ts'
import { QuantityInput } from '../quantityInput'

import { useState } from 'react'

import { useCart } from '../../hooks/useCart.tsx'

type Props = {
    coffee: {
        id: string
        title: string
        description: string
        tags: string[]
        price: number
        image: string
    }
}

export function Card({ coffee }: Props) {
    const [quantity, setQuantity] = useState(1)
    const [isItemAdded, setIsItemAdded] = useState(false)
    const theme = useTheme()

    const handleAddItem = (() => {
        // addItem({ id: coffee.id, quantity }) fazer você no contexto lá
        setIsItemAdded(true)
        setQuantity(1)
    })
    
    const incrementQuantity = (() => {
        setQuantity(prevCount => prevCount + 1)
    })
    
    const decrementQuantity = (() => {
        if (quantity >= 1) {
            setQuantity(prevCount => prevCount - 1)
        }
    })

    return (
        <Container>
            <CoffeeImg src={coffee.image} alt={coffee.title} />

            <Tags>
                {coffee.tags.map((tag) => (
                <span key={tag}>{tag}</span>
                ))}
            </Tags>

            <Title>{coffee.title}</Title>

            <Description>{coffee.description}</Description>

            <Control>
                <Price>
                    <span>R$</span>
                    <span>{coffee.price.toFixed(2)}</span>
                </Price>

                <Order $itemAdded={isItemAdded}>
                    <QuantityInput
                        quantity={quantity}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                    />

                    <button disabled={isItemAdded} onClick={handleAddItem}>
                        {isItemAdded ? (
                            <Check
                                weight="fill"
                                size={22}
                                color={theme['base-card']}
                            />
                            ) : ( <ShoppingCart size={22} color={theme['base-card']} /> )
                        }
                    </button>
                </Order>
            </Control>
        </Container>
    )
}