import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';

import Header from './components/Header/Header'
import Shop from './pages/Shop/Shop'
import HomePage from './pages/Homepage/NewHomePage'
import CheckOutPage from './pages/Checkout/Checkout'
import AuthenticationPage from './pages/Authentication/Authentication'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { selectCurrentUser, selectCollectionPreview } from './redux/selectors'
import { createStructuredSelector } from 'reselect'

import { setCurrentUser } from './redux/actions/userActions'

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          console.log(snapshot.data())
          setCurrentUser({ id: snapshot.id, ...snapshot.data() })
        })
      }

      setCurrentUser(userAuth)
      // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to="/" /> : <AuthenticationPage />} />
          <Route exact path="/checkout" component={CheckOutPage} />

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
