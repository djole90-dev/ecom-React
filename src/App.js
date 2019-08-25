import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header'
import Shop from './pages/Shop/Shop'
import HomePage from './pages/Homepage/NewHomePage'
import AuthenticationPage from './pages/Authentication/Authentication'
import { auth } from './firebase/firebase.utils'




class App extends React.Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    console.log(auth)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user)
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={AuthenticationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
