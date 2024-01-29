import { OrderInfo } from '../pages/Checkout'
import { NavigateFunction } from 'react-router-dom'

export enum ActionTypes {
    CHECKOUT_CART = 'CHECKOUT_CART',
    ADD_ORDER = 'ADD_ORDER',
    REMOVE_ORDER = 'REMOVE_ORDER',
    CLEAR_ORDER = 'CLEAR_ORDER',
}

export type Actions =
    | { 
        type: ActionTypes.CHECKOUT_CART;
        payload: {
            order: OrderInfo
            callback: NavigateFunction
        } 
    }
    | { type: ActionTypes.ADD_ORDER; payload: OrderInfo }
    | { type: ActionTypes.REMOVE_ORDER; payload: number }
    | { type: ActionTypes.CLEAR_ORDER 
}

export function checkoutCartAction(order: OrderInfo, callback: NavigateFunction) {
    return {
        type: ActionTypes.CHECKOUT_CART,
        payload: {
            order,
            callback
        }
    } satisfies Actions
}

