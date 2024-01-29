import { createContext, useContext, ReactNode, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { cartReducer } from '../reducers/reducer'
import { OrderInfo } from "../pages/Checkout";
import { checkoutCartAction } from '../reducers/actions'

interface CartContextType {
    numberOfItems: number;
}

export const CartContext = createContext({} as CartContextType)

interface CartProviderProps {
    children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    const [cartState, dispatch] = useReducer(
        cartReducer, { numberOfItems: 0},
        (cartState) => {
            const storedStateAsJSON = localStorage.getItem(
                '@coffee-delivery:cart-state-1.0.0',
            )
        
            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON)
            }
        
            return cartState
        },
      )
    
    const navigate = useNavigate()

    function checkout(order: OrderInfo) {
        dispatch(checkoutCartAction(order, navigate))
    }    

    return (
        <CartContext.Provider value={{ numberOfItems }}>
            {children}
        </CartContext.Provider>
    )
}