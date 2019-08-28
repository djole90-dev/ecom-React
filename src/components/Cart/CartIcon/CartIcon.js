import React from 'react'
import { ReactComponent as ShoppingbagIcon } from '../../../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import { toggleCartHidden } from '../../../redux/actions/cartActions'
import { selectCartItemsCount } from '../../../redux/selectors'
import { createStructuredSelector } from 'reselect'
 
import './carticon.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingbagIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:  () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount  
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)