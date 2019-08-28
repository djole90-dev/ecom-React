import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'

import './cartdropdown.scss'


const Cart = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem id={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps = ({ cart: {cartItems}}) => ({
    cartItems
})
export default connect(mapStateToProps)(Cart)