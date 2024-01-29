import { ActionTypes, Actions } from './actions'
import { produce } from 'immer'

export function cartReducer(action: Actions) {
    switch (action.type) {
        case ActionTypes.CHECKOUT_CART:
            return produce(() => {
                const newOrder = {
                    ...action.payload.order,
                }
        
                action.payload.callback(`/order/${newOrder.number}/success`)
            })
        default:
            return 0
        }
  }