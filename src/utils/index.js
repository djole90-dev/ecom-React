export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? 
            {...cartItem, quantity: cartItem.quantity + 1}   
            :
            cartItem 
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const rmvOneItemFromCart = (cartItems, itemToRemove, fn) => {
    console.log(cartItems, typeof cartItems)
    const itemToDecrease = cartItems.find(cartItem => cartItem.id === itemToRemove.id)

    if (itemToDecrease.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === itemToRemove.id
        ?
        {...cartItem, quantity: cartItem.quantity - 1}
        :
        cartItem
    )
}

