import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import './CollectionPreview.styles.scss'

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <div className="title">{title.toUpperCase()}</div>
        <div className="preview">
            {
                items.filter((item, index) => index < 4).map(({id, ...otherProps}) => (
                    <CollectionItem key={id} {...otherProps}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview