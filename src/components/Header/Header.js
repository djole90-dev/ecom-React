import React from 'react'
import { connect} from 'react-redux'

import { createStructuredSelector } from 'reselect'
import {  selectCartHidden, selectCurrentUser } from '../../redux/selectors'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo} from '../../assets/crown.svg'

import CartIcon from '../Cart/CartIcon/CartIcon'
import CartDropdown from '../Cart/CartDropdown/CartDropdown'

import { 
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionLink 
} from './sc-Header'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
        {
            currentUser
            ?
            <OptionLink as='div' onClick={() => auth.signOut()}>
                SIGN OUT
            </OptionLink>
            :
            <OptionLink to="/signin">
                SIGN IN
            </OptionLink>
        }
        <CartIcon />

        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
        
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)