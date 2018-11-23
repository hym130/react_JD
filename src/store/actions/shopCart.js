import * as types from '../constants/shopCart'

export const getShopc = (data) =>{
    return {
        type:types.GET_SHOPC,
        data
    }
}

export const requestShopC = () =>{
    return {
        type:types.REQUSET_SHOPC
    }
}

//在actios中更改页面的数据

//为什么每次都要把数据值赋为null  因为react的变更 变更最小单位  找不到小的改动