import { TOGGLE_CART_HIDDEN } from '../../actions/types'

const initialState = {
    hidden: true
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            console.log('Jeboga')
            return {...state, hidden: !state.hidden}
        default:
            return state
    }
}

export default cartReducer