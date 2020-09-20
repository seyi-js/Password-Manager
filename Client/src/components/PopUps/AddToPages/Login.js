import React, {useState,useEffect} from 'react'
import { cancel, getAndRemoveClass,generatePassword } from '../../Utils/Utils'
import store from '../../../store'
import {addData} from '../../../actions/Actions'
const Login = () => {

    const [account, setAccount] = useState('');
    const [username, setUsername] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorMsg, setErrorMsg ] = useState('');
    const [ checkBox, setCheckBox ] = useState( true );
    const [allDone,setAlldone] = useState(false)


    
    const setUpadtePassword = ( e ) => {
        const check = document.getElementsByClassName( 'fa-check' )
        if ( check[ 0 ].classList.contains( 'checked' ) ) {
            check[ 0 ].classList.remove( 'checked' );
            setCheckBox(false)
        }
        setPassword( e.target.value );
        
    }
    
    useEffect( () => {
        if ( account && username && checkBox) {
            setAlldone(true)
            
        } else if ( account && username && password ) {
            setAlldone(true)
            
        }else{
           setAlldone(false)
        }
    },[username,password,checkBox])

    const toggle = ( e ) => {
        e.preventDefault();
        
        // console.log()
        if ( e.currentTarget.firstElementChild ) {
            if ( e.currentTarget.firstElementChild.classList.contains( 'checked' ) ) {
                e.currentTarget.firstElementChild.classList.remove( 'checked' );
                setCheckBox(false)
                
            } else {
                e.currentTarget.firstElementChild.classList.add( 'checked' );
                const password = document.getElementsByClassName( 'add-to-login-password-input' )
                
                // password[0].value=''
                setCheckBox( true )
                setPassword('')
            }
        }
        
    }

    const saveForm = () => {

        let loginCredential;
        if ( account && username && checkBox) {
            
            loginCredential = {
                id: '121323',
                linked_acct: account,
                username_email: username,
                password:generatePassword(),
                type: 'Login',
                fav: false
                
            }
            
            
        } else if ( account && username && password ) {
            loginCredential = {
                id: '121323',
                linked_acct: account,
                username_email: username,
                password:password,
                type: 'Login',
                fav: false
                
            }
            
            
            
        }else{
            setErrorMsg('opps!! Kindly fill in all fields')
        }
        

        store.dispatch(addData(loginCredential))
            getAndRemoveClass();
            setAccount( '' );
            setPassword( '' )
            setUsername('')
    }
    return (
        <div className="add-to-login pop-up-box">
            
            <form>
                <div className="account">
                    <label>Account/Website</label>
                    <input type="text" value={account} placeholder="e.g Twitter,Facebook e.t.c" onChange={(e)=>setAccount(e.target.value)} />
                
                </div>
                <div className="username_email">
                    <label>Username or Email</label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    
                </div>
                <div className="add-to-login-password">
                    <label>Password</label>
                    <input type="password" value={password} className="add-to-login-password-input"  onChange={(e)=>setUpadtePassword(e)}/>
                    
                </div>
                <div className="generate_password">
                    <label>Auto-Generate Password</label>
                    <button className="checkbox" onClick={(e)=>toggle(e)}>
                        <i className="fa fa-check checked not-checked"></i>
                    </button>        
                </div>
            </form>
            {(allDone)? <p className="save" onClick={()=>saveForm()}>save</p>: null}
            {cancel()}
            
        </div>
    )
}

export default Login
