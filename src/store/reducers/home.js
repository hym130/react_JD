const instalState = {
    name: 'home',
    jdList: null
}
const home = (state = instalState, action) => {
    //console.log(action)
    //return state
    switch (action.type) {
        case 'Get_JD_LIST':
            return {...state, jdList: action.jdList }
        default :return state
    }

}

export default home