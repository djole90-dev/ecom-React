import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromCart, addItem, removeOneItemFromCart } from '../../redux/actions/cartActions'
import './checkout-item.scss'


const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeOneItemFromCart}) => {

    const {imageUrl, name, price, quantity} = cartItem

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeOneItemFromCart(cartItem)}>&#10094;</div>
                <div className="value">{quantity}</div>  
                <div className="arrow" onClick={() => addItem(cartItem)}>&#x276F;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeOneItemFromCart: item => dispatch(removeOneItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
