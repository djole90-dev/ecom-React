import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM, REMOVE_ONE_ITEM_FROM_CART } from '../../actions/types'
import { addItemToCart, rmvOneItemFromCart } from '../../../utils'

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            console.log('Jeboga')
            return {...state, hidden: !state.hidden}
        case ADD_ITEM: 
            return {
                ...state, 
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case REMOVE_ONE_ITEM_FROM_CART: 
            return {
                ...state,
                cartItems: rmvOneItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer