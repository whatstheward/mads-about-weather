const forecasts = (state={forecasts:[], currentWeather:{}}, action) =>{
    switch(action.type){
        case 'ADD_FORECAST':
            return{
                ...state,
                forecasts: [...state.forecasts, action.data]
            }
        case 'ADD_WEATHER':
            return {
                ...state,
                currentWeather: action.data
            }   
        default:
            return state
    }
}

export default forecasts