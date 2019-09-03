import { createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import rootReducer from './reducer'


const middlewares = []

const config = composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(rootReducer, config)

export const persistor = persistStore(store)

export default store

