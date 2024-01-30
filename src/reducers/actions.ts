import { OrderInfo } from '../pages/Checkout'
import { NavigateFunction } from 'react-router-dom'
import { Item } from './reducer'

// enum with all the possible actions
export enum ActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
    DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
    CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions = (
    | {
        type: ActionTypes.ADD_ITEM 
        payload: {
            item: Item // receives the item to add
        }
    }
    | {
        type:
            | ActionTypes.DECREMENT_ITEM_QUANTITY
            | ActionTypes.INCREMENT_ITEM_QUANTITY
            | ActionTypes.REMOVE_ITEM
        payload: {
            itemId: Item['id'] // receives the item id to update or remove
        }
    }
    | {
        type: ActionTypes.CHECKOUT_CART
        payload: {
            order: OrderInfo // receives the information to create the order
            callback: NavigateFunction // receives the callback to redirect the user to success page
        }
    }
)

// returns what do to and the payload (information to deal with)
export function addItemAction(item: Item) {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            item,
        },
    } satisfies Actions
}

export function removeItemAction(itemId: Item['id']) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            itemId,
        },
    } satisfies Actions
}

export function incrementItemQuantityAction(itemId: Item['id']) {
    return {
        type: ActionTypes.INCREMENT_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    } satisfies Actions
}

export function decrementItemQuantityAction(itemId: Item['id']) {
    return {
        type: ActionTypes.DECREMENT_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    } satisfies Actions
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

