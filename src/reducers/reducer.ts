import { ActionTypes, Actions } from './actions'
import { produce } from 'immer'
import { OrderInfo } from '../pages/Checkout'

export interface Item {
    id: string
    quantity: number
}
  
export interface Order extends OrderInfo {
    id: number
    items: Item[]
}
  
interface CartState {
    cart: Item[]
    orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            return produce(state, (draft) => {
                const itemAlreadyAdded = draft.cart.find(
                    (item) => item.id === action.payload.item.id,
                )
                
                // if item is already added, increment its quantity, otherwise add it
                if (itemAlreadyAdded) 
                    itemAlreadyAdded.quantity += action.payload.item.quantity
                else
                    draft.cart.push(action.payload.item) // push: add item to the end of the array
            })

        case ActionTypes.REMOVE_ITEM:
            return produce(state, (draft) => {
                const itemToRemoveId = draft.cart.findIndex(
                    (item) => item.id === action.payload.itemId,
                )

                // if item is not found, do nothing, otherwise remove it
                draft.cart.splice(itemToRemoveId, 1)
            })

        case ActionTypes.INCREMENT_ITEM_QUANTITY:
            return produce(state, (draft) => {
                const itemToIncrement = draft.cart.find(
                    (item) => item.id === action.payload.itemId,
                )

                // if item is not found, do nothing, otherwise increment its quantity
                if (itemToIncrement?.id) {
                    itemToIncrement.quantity += 1
                }
            })

        case ActionTypes.DECREMENT_ITEM_QUANTITY:
            return produce(state, (draft) => {
                const itemToDecrement = draft.cart.find(
                    (item) => item.id === action.payload.itemId,
                )

                // if item is not found, do nothing, otherwise decrement its quantity
                if (itemToDecrement?.id) {
                    if (itemToDecrement.quantity <= 1) {
                        return
                    } else {
                        itemToDecrement.quantity -= 1
                    }
                }
            })

        case ActionTypes.CHECKOUT_CART:
            return produce(state, (draft) => {
                // create a new order with the cart items and the order information
                const newOrder = {
                  id: new Date().getTime(),
                  items: state.cart,
                  ...action.payload.order,
                }

                draft.orders.push(newOrder)
                draft.cart = []
        
                action.payload.callback(`/order/${newOrder.id}/success`)
            }
        )
            
        default: return state
    }
}