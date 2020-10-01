import React, { useEffect,useState} from 'react'
import './Onboarding.css'
import { getAndSetBlurryClass,getAndRemoveClass } from '../Utils/Utils'
import { connect } from 'react-redux';
import store from '../../store'
import BlurryPopUp from '../PopUps/BlurryPopUp'

import {loginRoute,loadRequest,registerRoute,clearData} from '../../actions/Actions'
const Onboarding = ({general}) => {

    const [ type, setType ] = useState( 'password' );
    const [error, setError] = useState('')
    const [ isLoading, setIsLoading ] = useState( false )
    //From Redux Store
    const { loginError, registrationError} = general;

    const toggleEye = ( e ) => {
        const parent = e.target.parentElement;
        const eyeSlash = parent.children[2]

        e.currentTarget.classList.add('hide')
        eyeSlash.classList.add( 'show' );
            setType('text')
        
    }

    const  toggleEyeSlash = (e) => {
        const parent = e.target.parentElement;
        const eye = parent.children[1]

        e.currentTarget.classList.remove('show')
        eye.classList.remove( 'hide' );
            setType('password')
    }
    
    const submitSignIn=(e)=>{
        e.preventDefault();
        console.log( 'starting' )
        store.dispatch(clearData())
        
        setError('')
        setIsLoading(true)
        const data = {
            password: 'seyijs',
            email:'seyi@js.cpm'
        }
        // store.dispatch(loginRoute(data))
        store.dispatch(registerRoute(data))
        
            // loginRoute(data)
            
            // store.dispatch(loadRequest())
       
       
    }


    //Check For Isloading
    useEffect( () => {
        if ( isLoading ) {
            getAndSetBlurryClass()
        } 
        
        
    }, [ isLoading] )
    

    //CHeck For Error
    useEffect( () => {
        if ( loginError ) {
            console.log(loginError)
            setIsLoading( false )
            getAndRemoveClass()
            setError(loginError)
        } else if ( registrationError ) {
            setError( registrationError )
            getAndRemoveClass()
            
        } 

        
    },[loginError,registrationError])



    const onLoad = () => {
        const signIn = document.getElementById('signIn')
        const signInButton = document.getElementById('sign-In')
        const signUp = document.getElementById( 'signUp' )
        const signUpButton = document.getElementById( 'sign-Up' )
        const wrapper = document.getElementById( 'wrapper' )



        signIn.addEventListener( 'click', () => {
            
            wrapper.classList.remove( 'right-panel-active' );
        } );
        
        
        signUp.addEventListener( 'click', () => {
            
        
            wrapper.classList.add( 'right-panel-active' );
        } );
        
        
        
        signInButton.addEventListener( 'click', () => {
            
           
            
            wrapper.classList.add( 'right-panel-active' );
        } );
        
        
        signUpButton.addEventListener( 'click', () => {
            
          
            
        
            wrapper.classList.remove( 'right-panel-active' );
        } );
        
        
        
        
    }
    
    //Load This when page Loads
    useEffect( () => {
        onLoad()
    } );


    


    return (
        <div className="onboarding">
            <BlurryPopUp/>
            <div className="wrapper" id="wrapper">
            <div className="form-wrapper sign-up-wrapper">
                    <form>
                    <p>{error}</p>
                        
                        <h1>Create Account</h1>
                <input type="email" placeholder="Email"/>
                        <section className="user-password">
                            <input type={type} placeholder="Enter Password"/>
                            <i onClick={(e)=>toggleEye(e)} className="fa fa-eye"></i>
                            <i onClick={(e)=>toggleEyeSlash(e)}  className="fa fa-eye-slash"></i>
                        </section>
                <input type={type} placeholder="Confirm Password"/>
                <button >Sign Up</button>
                <a id="sign-Up" class="sign">Already a member ? <span >Sign-in</span></a>

            </form>
        </div>
        <div className="form-wrapper sign-in-wrapper">
                    <form>
                    <p>{error}</p>
                        <h1>Sign in</h1>
                        <div><span id="console"></span></div>
                        
                
                
                <input type="email" placeholder="Email"/>
                <section className="user-password">
                            <input type={type} placeholder="Enter Password"/>
                            <i onClick={(e)=>toggleEye(e)} className="fa fa-eye"></i>
                            <i onClick={(e)=>toggleEyeSlash(e)}  className="fa fa-eye-slash"></i>
                        </section>
                <a className="password"><span >Forgot password </span></a>
                
                <button onClick={(e)=>submitSignIn(e)}  >Sign In</button>
                <a id="sign-In" class="sign">Don't have an account ?<span >Sign-up</span></a>
               
            </form>
        </div>

        <div className="overlay-wrapper">
        <div className="overlay">
            <div className="overlay-left overlay-panel">
                <h1>Already a member?</h1>
                <p>
                    To continue please sign-in with your details
                </p>
                <button class="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-right overlay-panel">
                <h1>Your First Time Here?</h1>
                <p>
                    Enter your details and remember just one password for life.
                </p>
                <button className="ghost" id="signUp">Sign Up</button>
            </div>
        </div>
    </div>
                
            </div>
        </div>
    )
}


const mapStateToProps = ({general}) => ( {
    general
})


export default connect(mapStateToProps, null)(Onboarding);