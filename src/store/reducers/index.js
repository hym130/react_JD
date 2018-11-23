import {combineReducers} from 'redux'

import home from './home'
import mine from './mine'
import detail from './detail'
import shopCart from './shopCart'
const rootReducer = combineReducers({
    home,
    mine,
    detail,
    shopCart
})

export default rootReducer