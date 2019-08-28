import { createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducer'


const middlewares = []

const compose = composeWithDevTools(applyMiddleware(...middlewares))


export default createStore(rootReducer, compose)

