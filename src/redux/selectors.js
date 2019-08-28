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