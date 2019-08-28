import { createSelector } from 'reselect'

// === CART SELECTORS === //

const selectCart = state => state.cart


export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accQ, cartItem) => accQ + cartItem.quantity,
        0
    )
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCart],
    cart => cart.cartItems.reduce(
        (accumulatedPrice, cartItem) => accumulatedPrice + (cartItem.quantity * cartItem.price), 
        0
    )
)


// === USER SELECTORS === //

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)

