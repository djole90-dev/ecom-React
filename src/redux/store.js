import { createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducer'
import thunk from 'redux-thunk'

const middlewares = []

const compose = composeWithDevTools(applyMiddleware(...middlewares))


export default createStore(rootReducer, compose)

