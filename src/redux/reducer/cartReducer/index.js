import { TOGGLE_CART_HIDDEN, ADD_ITEM } from '../../actions/types'
import { addItemToCart } from '../../../utils'

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
        default:
            return state
    }
}

export default cartReducer