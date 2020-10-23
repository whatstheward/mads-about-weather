import React, {useState, setState} from 'react'
import {connect} from 'redux'
import { Search } from 'semantic-ui-react'

const WeatherSearch = () => {

    const [value, setValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState([])

    return(
        <input type='text' className='search-bar' onChange={e=>setValue(e.target.value)} value={value}/>
    )

}

export default WeatherSearch