// THIS DOC IS FOR FUNCTIONS USED IN MORE THAN ONE COMPONENT

import React from 'react'
import { Crypt, RSA } from 'hybrid-crypto-js';
// Crypto.pbkdf2( 'samuelseyi', 'seyisam', 1000, 16, ( err, key ) => {
//     if ( err ) throw err;
//     console.log(key.toString('hex'))
// })

export   const loadDom = () => {
    const fa_eye = document.getElementsByClassName( 'fa-eye' );
    const fa_eye_slash = document.getElementsByClassName( 'fa-eye-slash' );

    const fa_copy = document.getElementsByClassName( 'fa-copy' );

    const password = document.getElementById('password-input')
    
    fa_eye[ 0 ].addEventListener( 'click', () => {
        fa_eye[ 0 ].classList.add( 'hide' );//Hide Show Password
        
        fa_eye_slash[ 0 ].classList.add( 'show' );
        
        fa_copy[0].classList.add('visible')
        
       
        password.type = "text";
        
    } );


    fa_eye_slash[ 0 ].addEventListener( 'click', () => {
       
        
        fa_eye[ 0 ].classList.remove( 'hide' );

        fa_eye_slash[ 0 ].classList.remove( 'show' );
        
        fa_copy[0].classList.remove('visible')

        password.type = "password";
    } );

};


export const getAndSetBlurryClass =()=>{


    let blurryPopUp = document.getElementsByClassName('blurry-popUp')
    

    blurryPopUp[0].classList.add('show-blurry-popUp')
};


export const getAndRemoveClass =()=>{
    let blurryPopUp = document.getElementsByClassName('blurry-popUp')
    

    blurryPopUp[0].classList.remove('show-blurry-popUp')
}


export const cancel=()=>{

    return (
        <>
        <p onClick={()=> getAndRemoveClass()}>Cancel</p>
        </>
    )
};


export const copyToClipBoard = (id) => {

    if(id){
        var data = document.getElementById(id);

    /* Select the text field */
    data.select();
    // password.setSelectionRange(0, 99999);
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
    }
    
  
   
    
       
};
      

 //Generate Password
 export const generatePassword = () => {
    var pass = ''; 
    var str = 'ABCD454%EFt454HI53$JKL"NOPQR76&6STUVWXYZ' +  
            'ab)cdef=hijk135lm#*opqr(tuvwxyz0123456789@#$'; 
     let i;
    for (i = 1; i <= 50; i++) { 
        var char = Math.floor(Math.random() 
                    * str.length + 1); 
          
        pass += str.charAt(char) 
    } 
      
    return pass; 
}

var rsa = new RSA();

export const generateRSAkeys = async() => {

    let privateKey;
    let publicKey;
    await rsa.generateKeyPairAsync().then(
        async function ( keyPair ) {
            publicKey = keyPair.publicKey;
            privateKey = keyPair.privateKey;
            // console.log( publicKey,privateKey );
        } );
    
    console.log( "done with keys generation." );

    return {pKey:privateKey, pubKey:publicKey};
}

// const p = generateRSAkeys()
// p.then((r)=> console.log(r))

 

