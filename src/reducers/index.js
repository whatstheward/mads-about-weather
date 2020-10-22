import { combineReducers } from 'redux'
import forecasts from './forecasts'
import locations from './locations'

export default combineReducers({
    forecasts,
    locations
})