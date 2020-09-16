import {LOAD_DATA,DELETE_DATA} from '../actions/types'

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
            return{
                ...state,
                data:state.data.filter(d=> d.id !== action.payload )
            }
        
            default:
                return state;
    }
}