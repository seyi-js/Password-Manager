import React, {useEffect} from 'react'
import {loadDom,copyToClipBoard} from '../Utils/Utils'
const VaultCodes = ({data}) => {

    

    useEffect( () => {
        if ( data !== undefined ) {
            loadDom()
        }
    }, [data] );


    

    return (
        <div className="vault-codes-mainpage-2">
       

    <div className="vault-codes-body login-body">
        
        <div className="password">
                    <label>{ data.desc}</label>
            <input  type="password" id="password-input" className="password-input" value={data.code } disabled={false}  />
            <section className="logins-icons">
                <span><i className="fa fa-eye"></i></span>
                <span><i className="fa fa-eye-slash"></i></span>
                <div class="">
                    <span><i className="fa fa-copy" onClick={ () => copyToClipBoard("password-input") }  ></i></span>
                </div>
                
        </section>
    </div>
        
    </div>
    
</div> 
        
    )
}

export default VaultCodes
