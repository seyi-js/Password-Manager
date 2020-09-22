import React, {useState,useEffect} from 'react'
import { cancel, getAndRemoveClass,generateRSAkeys,generateENK} from '../../Utils/Utils'

const Settings = () => {
    const [view, setView] = useState('Master Password')
    const [ masterPassword, setMasterPassword ] = useState( '' );
    const [ newMPassword, setNewMPassword ] = useState( '' );
    const [confirmNew, setConfirmNew] = useState('')
    const [ allDone, setAllDone ] = useState( false );
    const [errorMessage, setErrorMessage] =useState('')
    const [mPassword, setMPassword]=useState('')

    // useEffect( () => {
    //     if ( masterPassword && newMPassword && confirmNew && newMPassword === confirmNew ) {
    //         setAllDone( true )
    //     } else {
    //         setAllDone( false )
    //     }
    // } );

    const changePass = (e) => {
        e.preventDefault();
        if ( masterPassword && newMPassword && confirmNew && newMPassword === confirmNew ) {
            
        } else if(!masterPassword || !newMPassword || !confirmNew) {
            setErrorMessage('All fields are required');
            setTimeout(()=>{setErrorMessage('')},1000 * 3)
        } else if ( newMPassword !== confirmNew ) {
            setErrorMessage('Passwords do not match');
            setTimeout(()=>{setErrorMessage('')},1000 * 3)
        }
    }
    
const deleteAcct=()=>{
    if(!mPassword){
        setErrorMessage('Please enter your master password');
        setTimeout(()=>{setErrorMessage('')},1000 * 3)
    }
}
    
    
    const changeMasterPassword = () => {
        return (
            < div className="change_password_form">
                <div className="error-message">
                <h1>{ errorMessage}</h1>
                </div>
                <form>
                   
                    <div>
                        <label>Master Password</label>
                        <input type="password" value={ masterPassword } onChange={ (e)=>setMasterPassword(e.target.value)}/>
                    </div>
                    <div>
                        
                            <label>New Master Password</label>
                            <input type="password" value={ newMPassword } onChange={ (e)=>setNewMPassword(e.target.value)} />
                    
                    </div>
                    <div>
                    
                            <label>Confirm New Master Password</label>
                            <input type="password" value={ confirmNew } onChange={ (e)=>setConfirmNew(e.target.value)}/>
                        
                    </div>

                    <button onClick={(e)=>changePass(e)}>Submit</button>
                </form>
            </div>
        )
    }

    const deleteAccount = () => {
        return (
            <div div className="delete_account">
            <div className="error-message">
            <h1>{ errorMessage}</h1>
            </div>
                <form>
                    <div>
                        <label>Master Password</label>
                        <input type="text" onChange={(e)=>setMPassword(e.target.value)} placeholder="Enter Master Password"/>
                    </div>
                </form>
                <p onClick={()=>deleteAcct()}>Delete</p>
            </div>
        )
    }

    const toggle = ( { e,view} ) => {
        setView( view );

        const siblings = e.currentTarget.parentElement.children
        const siblingsArray = Object.entries( siblings );

        siblingsArray.forEach(arr=>{
          
            
            arr[1].classList.remove( 'isActive' );
               
        })
        
            e.currentTarget.classList.add('isActive')
    }

    return (
        <div className="settings pop-up-box">
            <div className="left">
                <ul>
                    <li className="change_pass_button isActive" onClick={(e)=>toggle({e,view:"Master Password"})}>Change Master Password</li>
                    <li className="delete_acct_button" onClick={(e)=>toggle({e,view:"Delete Account"})}>Delete Account</li>
                </ul>
            </div>
            <div className="right">
                {(view === 'Master Password')? changeMasterPassword():(view === 'Delete Account')? deleteAccount() :null}
            </div>


            {cancel()}
        </div>
    )
}

export default Settings
