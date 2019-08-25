import React from 'react'
import { ReactComponent as ShoppingbagIcon } from '../../../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import { toggleCartHidden } from '../../../redux/actions/cartActions'

import './carticon.scss'

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingbagIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:  () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)