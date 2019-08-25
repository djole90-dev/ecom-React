import { createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducer'

const middlewares = []

const compose = composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(rootReducer, compose)

export default store

