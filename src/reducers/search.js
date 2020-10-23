const search = (state={value: '', results:[]}, action)=>{
    switch(action.type){
        case 'UPDATE_SEARCH_VAL':
            return {
                ...state,
                value: action.data
            }
        case 'SUBMIT_SEARCH':  
            return {
                ...state,
                value: action.data
            }
        }
    }