import React from 'react'
import {cancel} from '../../Utils/Utils'
const Login = () => {

    const get = ( e ) => {
        e.preventDefault();
        
        // console.log()
        if ( e.currentTarget.firstElementChild ) {
            if ( e.currentTarget.firstElementChild.classList.contains( 'checked' ) ) {
                e.currentTarget.firstElementChild.classList.remove( 'checked' );
                
            } else {
                e.currentTarget.firstElementChild.classList.add( 'checked' )
            }
        }
        
    }
    return (
        <div className="add-to-login pop-up-box">
            <form>
                <div className="account">
                    <label>Account/Website</label>
                    <input type="text" placeholder="e.g Twitter,Facebook e.t.c" />
                
                </div>
                <div className="username_email">
                    <label>Username or Email</label>
                    <input type="text" />
                    
                </div>
                <div className="add-to-login-password">
                    <label>password</label>
                    <input type="password"/>
                    
                </div>
                <div className="generate_password">
                    <label>Auto-Generate Password</label>
                    <button className="checkbox" onClick={(e)=> get(e)}>
                        <i className="fa fa-check"></i>
                    </button>        
                </div>
            </form>
            <p>save</p>
            {cancel()}
            
        </div>
    )
}

export default Login
