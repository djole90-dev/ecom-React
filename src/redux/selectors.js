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


// === DIRECTORY AND SHOP SELECTORS === //

const selectDirectory = state => state.directory

export const selectCurrentDirectory = createSelector(
    [selectDirectory],
    directory => directory.sections
)


const selectShop = state => state.shop

export const selectCurrentShop = createSelector( // should be selectCollections
    [selectShop],
    shop => shop.collections
)

export const selectCollectionPreview = createSelector(
    [selectCurrentShop],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
        [selectCurrentShop],
        collections => collections[collectionUrlParam]
)
