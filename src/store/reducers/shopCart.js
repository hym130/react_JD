import * as types from '../constants/shopCart'
const instalState = {
    name: 'shopCart',
    data: null
}
const shopCart = (state = instalState, action) => {
    console.log(action.type,'555')
    // return state
    switch (action.type) {
        case types.REQUSET_SHOPC:
            return {...state, data:null }
        case types.GET_SHOPC://这个是请求数据三个基本里的第二个succcess
            return {...state, data: action.data }
        default : return state
   }

}

export default shopCart

