import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM, REMOVE_ONE_ITEM_FROM_CART } from '../types'

export const toggleCartHidden = () => ({ 
    type: TOGGLE_CART_HIDDEN 
})

export const addItem = item => ({ 
    type: ADD_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CLEAR_ITEM,
    payload: item
})

export const removeOneItemFromCart = item => ({
    type: REMOVE_ONE_ITEM_FROM_CART,
    payload: item
})
