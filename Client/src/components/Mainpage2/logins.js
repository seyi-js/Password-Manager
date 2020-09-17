import React,{ useEffect }  from 'react'
import {loadDom, copyToClipBoard} from '../Utils/Utils'
const Logins = ({data,disabled,setDisabled}) => {
    
    

 
    const setD = () => {
        setDisabled(false)
        
}
   

    useEffect( () => {
        if ( data !== undefined ) {
            loadDom()
        }

       
    }, [data] );



  


    return (
        <>
            {(data !== undefined)? <div className="logins">
            <div className="login-header">
                <div className="icon">
                    <h1>{ data.linked_acct[ 0 ] }</h1>
                </div>
                <div className="details">
                    <p className="linked_acct">{ data.linked_acct }</p>
                    <p className="type">{ data.type }</p>
                </div>
                
                    <p className="type star"><i className="fa fa-star"></i></p>
            
        
            </div>

            <div className="login-body">
                <div className="username">
                    <label>Username</label>
                    <input type="text" className="username-input" value={ data.username_email } disabled={ true}/>
                </div>
                <div className="password">
                    <label>Password</label>
                    <input  type="password" id="password-input" className="password-input" value={data.password }  disabled={disabled}  />
                    <section className="logins-icons">
                        <span onClick={()=>setD()}><i className="fa fa-eye"></i></span>
                        <span><i className="fa fa-eye-slash"></i></span>
                        <div class="">
                            <span><i className="fa fa-copy" onClick={ () => copyToClipBoard("password-input") }  ></i></span>
                            
                        </div>
                        
                </section>
                </div>
                
            </div>
            
        </div> : null}
        </>
    )

    
}

export default Logins
