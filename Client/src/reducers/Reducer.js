import {LOAD_DATA,DELETE_DATA,ADD_DATA,
    GET_SHARE_REQUEST,UPDATE_FAVOURITES,
    LOGIN_SUCCESS, REGISTER_SUCCESS,
    LOGIN_FAIL,REGISTER_FAIL} from '../actions/types'

const initialState = {
    data: [],
    fromOne: [],//Share Request from One
    fromMany:[],//Share Request From Many
    isAuthenticated:false,
    user: null,
    token: localStorage.getItem( 'token' ),
    loginError: '',
    registrationError:''
      
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

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                isAuthenticated:true,
                token:action.payload.token
            };
        
        
        case LOGIN_FAIL:
            return {
                ...state,
                loginError: action.payload
            };
        case REGISTER_FAIL:
        
            return {
                ...state,
                registrationError: action.payload
            };
        case UPDATE_FAVOURITES:

        
            return{
                ...state,
               
                // data:[action.payload, ...state.data]
            }
        
            default:
                return state;
    }
}