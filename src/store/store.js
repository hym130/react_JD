import {createStore} from 'redux'
import reducer from './reducers'
const store = createStore(reducer)

export default store
// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
// import rootReducer from './reducers'

// const loggerMiddleware = createLogger()

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware,
//   loggerMiddleware
// )(createStore)

// export default function configureStore(initialState) {
//   return createStoreWithMiddleware(rootReducer, initialState)
// }