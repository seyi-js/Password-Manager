import {LOAD_DATA,DELETE_DATA,ADD_DATA,GET_SHARE_REQUEST,UPDATE_FAVOURITES} from '../actions/types'

const initialState = {
    data: [],
    fromOne: [],//Share Request from One
    fromMany:[],//Share Request From Many
    isAuthenticated:false,
    user: null
      
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
        case ADD_DATA:
            return {
                ...state,
                data:[action.payload, ...state.data]
            }
        case GET_SHARE_REQUEST:
            return {
                ...state,
                fromOne: action.payload.fromOne,
                fromMany:action.payload.fromMany
            }
        case UPDATE_FAVOURITES:

        
            return{
                ...state,
               
                // data:[action.payload, ...state.data]
            }
        
            default:
                return state;
    }
}