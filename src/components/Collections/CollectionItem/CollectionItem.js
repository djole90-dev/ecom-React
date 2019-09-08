import React from 'react'
import {connect} from 'react-redux'


import CustomButton from '../../CustomButton/CustomButton'
import { addItem } from '../../../redux/actions/cartActions'

import {
    CollectionItemContainer,
    BackgroundImage,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer,
    AddButton
} from './sc-CollectionItem'


import './collection-item.scss'


const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item
    return (
        <CollectionItemContainer>
            <BackgroundImage className="image" imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>ADD TO CART</AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)