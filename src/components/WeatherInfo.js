import React from 'react'

const WeatherInfo = (props) => {

    return(
        <div>
            <h1>{props.currentWeather.name}</h1>
            <p>{new Date((props.currentWeather.dt)*1000).toDateString()}</p>
            <h3>Feels like {Math.round(props.currentWeather.main.feels_like)}&deg;</h3>
            <h1>{Math.round(props.currentWeather.main.temp)}&deg;</h1>
        </div>
    )
}

export default WeatherInfo