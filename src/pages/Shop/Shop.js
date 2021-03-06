import React from 'react'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux'
import { updateCollections } from '../../redux/actions/shopActions'

import WithSpinner from '../../components/WithSpinner/WithSpinner'

import CollectionsOverview from '../../components/Collections/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../CollectionPage/CollectionPage'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class Shop extends React.Component {

    state = {
        loading: true
    }
    
    unsubscribeFromSnapshot = null

    componentDidMount() {

        const { updateCollections } = this.props

        const collectionRef = firestore.collection('collections')

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({loading: false})
        })
    }

    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className="shop-page">
                <Route 
                exact 
                path={`${match.path}`} 
                render={
                        (props) => <CollectionsOverviewWithSpinner 
                        isLoading={loading} 
                        {...props} 
                        />
                    } 
                />  
                <Route 
                path={`${match.path}/:collectionId`}
                render={
                    (props) => <CollectionPageWithSpinner 
                        isLoading={loading}
                        {...props}
                    />
                    }
                />
            </div>
        )
    }  
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(Shop)