import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import './collection-preview.scss'

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <div className="title">{title.toUpperCase()}</div>
        <div className="preview">
            {
                items.filter((item, index) => index < 4).map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview