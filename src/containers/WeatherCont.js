import React from 'react'
import {API_KEY} from '../adapters/api_adapter'



class WeatherCont extends React.Component {
    state={
        zip: 30312,
        forecast:{}
    }

    componentDidMount(){
        const query = `zip=${this.state.zip}&mode=json&units=imperial&APPID=${API_KEY}`
        fetch(`http://api.openweathermap.org/data/2.5/forecast?${query}`)
            .then(response => response.json())
            .then(result => this.setState({forecast: result.list, city: result.city}))
            .catch(error => console.log('error', error))
    }

    render(){
        return(
            <div>

            </div>
            )
        }
}

export default WeatherCont