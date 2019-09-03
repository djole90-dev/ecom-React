import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionPreview } from '../../../redux/selectors'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import './collections-overview.scss'


const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps} />)
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionPreview
})

export default connect(mapStateToProps)(CollectionsOverview)