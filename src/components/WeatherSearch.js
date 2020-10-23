import React, {useState} from 'react'
import {connect} from 'react-redux'
import {updateSearchValue, submitSearchValue } from '../actions/search.js'

const WeatherSearch = (props) => {

    const [value, setValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState([])

    const updateSearch = (e) => {
        setValue(e.target.value)
        props.updateSearchValue(e.target.value)
    }

    const keyListener = (e) =>{
        if(e.key == 'Enter' || e.keyCode == 13 || e.which == 13){
            props.submitSearchValue(e.target.value)
        }
    }

    return(
        <input 
            type='text' 
            className='search-bar' 
            value={value}
            onChange={e=>updateSearch(e)} 
            onKeyDown ={e=>keyListener(e)}
        />
    )

}

const mapDispatchToProps = dispatch => ({
    updateSearchValue: data => dispatch(updateSearchValue(data)),
    submitSearchValue: data => dispatch(submitSearchValue(data))
})

export default connect(null, mapDispatchToProps)(WeatherSearch)