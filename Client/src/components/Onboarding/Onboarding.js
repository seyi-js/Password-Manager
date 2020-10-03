import React, { useEffect,useState} from 'react'
import './Onboarding.css'
import { getAndSetBlurryClass,getAndRemoveClass } from '../Utils/Utils'
import { connect } from 'react-redux';
import store from '../../store'
import BlurryPopUp from '../PopUps/BlurryPopUp'

import {loginRoute,loadRequest,registerRoute,clearData} from '../../actions/Actions'
const Onboarding = ({general}) => {

    const [ type, setType ] = useState( 'password' );
    const [ error, setError ] = useState( '' );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ email, setEmail ] = useState( '' );
    const [password1, setPassword1] = useState('')
    const [ password2, setPassword2 ] = useState( '' )
    const [ userName, setUsername ] = useState( '' )
    const [ password, setPassword ] = useState( '' );
    const [verificationDone,setVerificationDone] = useState(false)



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
    


    const verifySignUp = () => {

        
        
    }

    useEffect( () => {
        let passwordNumber = password1.match(/[0-9]/g);
        let passwordUpper =password1.match(/[A-Z]/g);
        let passwordLower =password1.match(/[a-z]/g);
        let passwordLength = password1.match( /[A-Z0-9a-z]{14,}/g );

        if ( !passwordNumber ) {
            const number = document.getElementsByClassName( 'number' );
            number[0].style.color ='grey'
        }
        if ( !passwordUpper ) {
    const upper = document.getElementsByClassName( 'upper' );
            upper[0].style.color ='grey'
        }
        if ( !passwordLower ) {
            const lower = document.getElementsByClassName( 'lower' );
            lower[0].style.color ='grey'
        }
        if ( !passwordLength ) {
            const chars = document.getElementsByClassName( 'chars' );
            chars[0].style.color ='grey'
        }
        if ( password1 === email ) {
            const email = document.getElementsByClassName( 'email' );
            email[0].style.color ='grey'
        }



        if(passwordNumber){
            const number = document.getElementsByClassName( 'number' );
            number[0].style.color ='#f77c11'
        }
        if ( passwordUpper ) {
            const upper = document.getElementsByClassName( 'upper' );
            upper[0].style.color ='#f77c11'
            // console.log(upper[0].style.color)

        }
        if ( passwordLower ) {
            const lower = document.getElementsByClassName('lower')
            lower[0].style.color ='#f77c11'
        }
        if ( passwordLength ) {
            const chars = document.getElementsByClassName('chars')
            chars[0].style.color ='#f77c11'
        }
        if ( password1 !== email ) {
            const email = document.getElementsByClassName('email')
            email[0].style.color ='#f77c11'
        }
        if ( password1 !== password2 ) {
            setError('Passwords are not equal')
        }
        if ( passwordLength && passwordLower && passwordNumber && passwordUpper && password1 !== email && password1 === password2 ) {
            setVerificationDone(true)
        } else {
            setVerificationDone(false)
        }
    },[password1,email,password2])
    
    
    const submitSignIn = ( e ) => {
        e.preventDefault();
        if ( password && userName ) {
            store.dispatch(clearData())
        
            setError('')
            setIsLoading(true)
            const data = {
                password,
                email:userName
            }
            store.dispatch(loginRoute(data)) 
        }
      
        
        
            // loginRoute(data)
            
            // store.dispatch(loadRequest())
       
       
    }

    const signUpButton = ( e ) => {
        e.preventDefault();
       
        const data = {
            email,
            password: password1,
        }

        if ( verificationDone ) {
            store.dispatch( clearData() )
            setError( '' )
            setIsLoading(true)
            store.dispatch( registerRoute( data ) );
            // setEmail('')
        }
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
            
            setIsLoading( false )
            getAndRemoveClass()
            setError(loginError)
        } else if ( registrationError ) {
            setError( registrationError )
            getAndRemoveClass()
            
        } else {
            setEmail( '' )
            setPassword( '' )
            setPassword1('')
            setPassword2('')
            setUsername( '' )
            setVerificationDone(false)
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


    const validation = () => {
        return (
            <div className="validation">
                
                <div className="number"><i className="fa fa-check-circle"></i>Atleast 1 number.</div>
                <div className="upper"><i className="fa fa-check-circle"></i>Atleast 1 Uppercase.</div>
                <div className="lower"><i className="fa fa-check-circle"></i>Atleast 1 Lowercase.</div>
                <div className="chars"><i className="fa fa-check-circle"></i>14 characters or more.</div>
                <div className="email"><i className="fa fa-check-circle"></i>Not equal to your email.</div>
            </div>
        )
    }
    
    const setShowValidate =() => {
       document.getElementsByClassName('validation')[0].style.display='flex'
   }


    return (
        <div className="onboarding">
            <BlurryPopUp/>
            <div className="wrapper" id="wrapper">
            <div className="form-wrapper sign-up-wrapper">
                    <form>
                    <p>{error}</p>
                        
                        <h1>Create Account</h1>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
                        <section className="user-password">
                            <input type={ type } onClick={()=>setShowValidate()} placeholder="Enter Password" value={password1} onChange={(e)=>setPassword1(e.target.value) }/>
                            <i onClick={(e)=>toggleEye(e)} className="fa fa-eye"></i>
                            <i onClick={(e)=>toggleEyeSlash(e)}  className="fa fa-eye-slash"></i>
                        </section>


                        { validation() }
                        
                        <input type={ type } value={ password2 } onChange={ ( e ) => setPassword2( e.target.value ) } placeholder="Confirm Password" />
                        
                <button onClick={e=>signUpButton(e)} >Sign Up</button>
                <a id="sign-Up" class="sign">Already a member ? <span >Sign-in</span></a>

            </form>
        </div>
        <div className="form-wrapper sign-in-wrapper">
                    <form>
                    <p>{error}</p>
                        <h1>Sign in</h1>
                        <div><span id="console"></span></div>
                        
                
                
                <input type="email" value={userName} onChange={e=>setUsername(e.target.value)} placeholder="Email"/>
                <section className="user-password">
                            <input type={type} value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter Password"/>
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