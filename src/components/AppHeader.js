import React from 'react'
import '../stylesheets/AppHeader.scss'
import { Icon } from 'semantic-ui-react'

const AppHeader =()=>{
    return(
        <nav id='app-header'>
            <Icon name='cloud' size='huge'/>
            <h1 id='app-name'>mads_about_weather</h1>
        </nav>
    )
}

export default AppHeader