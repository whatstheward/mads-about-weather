import React from 'react'
import '../stylesheets/AppHeader.scss'
import { Icon } from 'semantic-ui-react'
import WeatherSearch from './WeatherSearch'

const AppHeader =()=>{
    return(
        <nav id='app-header'>
            <div className='left'>
                <Icon name='cloud' size='huge'/>
                <h1 id='app-name'>mads_about_weather</h1>
            </div>
            <div className="right">
                <WeatherSearch/>
            </div>
        </nav>
    )
}

export default AppHeader