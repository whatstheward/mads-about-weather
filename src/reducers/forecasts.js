const forecasts = (state=[], action) =>{
    switch(action.type){
        case 'ADD_FORECAST':
            debugger
            return[
                ...state, action.data
            ]
        default:
            return state
    }
}

export default forecasts