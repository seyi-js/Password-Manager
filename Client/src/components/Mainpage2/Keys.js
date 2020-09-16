import React, {useEffect} from 'react'
import {loadDom, copyToClipBoard} from '../Utils/Utils'
const Keys = ({data}) => {

  

    useEffect( () => {
        if ( data !== undefined ) {
            loadDom()
        }
    }, [data] );


    

  


    const SSH=()=>{
        return(
            <div className="vault-codes-body login-body">
        
            <div className="password">
                        <label>{ data.desc}</label>
                <input  type="password" id="password-input" className="password-input" value={data.value } disabled={false}  />
                <section className="logins-icons">
                    <span><i className="fa fa-eye"></i></span>
                    <span><i className="fa fa-eye-slash"></i></span>
                    <div class="">
                        <span><i className="fa fa-copy" onClick={ () => copyToClipBoard("password-input") } ></i></span>
                    </div>
                    
            </section>
        </div>
            
        </div>
        )
    };

    
    const RSA=()=>{
        return(
        <div className="vault-codes-body login-body">
            <h3>{data.desc}</h3>
            <div className="username">
                        <label>Public Key</label>
                        
                <input  type="text" id="username-input" className="username-input" value={data.publicKey } disabled={true}  />
               
                
        </div>
        <div className="password">
                        <label>Private Key</label>
                <input  type="password" id="password-input" className="password-input" value={data.privateKey } disabled={false}  />
                <section className="logins-icons">
                    <span><i className="fa fa-eye"></i></span>
                    <span><i className="fa fa-eye-slash"></i></span>
                    <div class="tooltip">
                        <span><i className="fa fa-copy" onClick={ () => copyToClipBoard("password-input") }  ></i></span>
                    </div>
                    
            </section>
        </div>
            
        </div>
        )
    };

    const ENCRYPTION_KEY=()=>{
        return(
            <div className="vault-codes-body login-body">
        
            <div className="password">
                        <label>{ data.desc}</label>
                <input  type="password" id="password-input" className="password-input" value={data.value } disabled={false}  />
                <section className="logins-icons">
                    <span><i className="fa fa-eye"></i></span>
                    <span><i className="fa fa-eye-slash"></i></span>
                    <div class="tooltip">
                        <span><i className="fa fa-copy" onClick={ () => copyToClipBoard("password-input") }  ></i></span>
                    </div>
                    
            </section>
        </div>
            
        </div>
        )
    };

    return (
        <div className="vault-codes-mainpage-2">

        {(data.category === 'SSH')? SSH() : (data.category === 'RSA')? RSA(): (data.category === 'ENCRYPTION KEY')? ENCRYPTION_KEY() : null}

   
    
        </div> 
        
    )
}

export default Keys
