import * as types from '../constants/detail'//为了防止太多麻烦，吧所有的都进行引入，在单独进行引入，这时候types为对象
export const aas=(data)=>{
    return {
         type:types.GET_JDCOMMON,
         data
    }
}