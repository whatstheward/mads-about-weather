import { connect } from 'react-redux'
import React from 'react'
import {API_KEY} from '../adapters/api_adapter'
import { addForecast } from '../actions/forecast'


class WeatherCont extends React.Component {

        getWeather =(zip)=>{
        const query = `zip=${zip}&mode=json&units=imperial&APPID=${API_KEY}`
        fetch(`http://api.openweathermap.org/data/2.5/forecast?${query}`)
            .then(response => response.json())
            .then(result => this.props.addForecast(result.list))
            .catch(error => console.log('error', error))
        }

        componentDidMount(){
            this.getWeather(30312)
        }

        render(){
        return(
            <div>

            </div>
            )}
}

const mapStateToProps = state => ({
    forecast: state.forecasts
})

const mapDispatchToProps = dispatch =>({
    addForecast: data => dispatch(addForecast(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(WeatherCont)