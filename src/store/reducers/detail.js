const initalState={
    data:null
}
const reducer=(state=initalState,action)=>{
    switch(action.type){
        case "GET_JDCOMMON":
            return {...state,data:action.data}
        default :
            return state
    }
    //return state
}
export default reducer