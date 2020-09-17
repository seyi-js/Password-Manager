import {LOAD_DATA,DELETE_DATA,ADD_LOGIN} from '../actions/types'

const initialState = {
    data:[]
      
}
  

export default ( state = initialState, action ) => { 
    switch ( action.type ) {
        case LOAD_DATA:
            return {
                ...state,
                data: action.payload
            };

        case DELETE_DATA:
            return {
                ...state,
                data: state.data.filter( d => d.id !== action.payload )
            };
        case ADD_LOGIN:
            return {
                ...state,
                data:[action.payload, ...state.data]
            }
        
            default:
                return state;
    }
}