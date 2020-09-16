// THIS DOC IS FOR FUNCTIONS USED IN MORE THAN ONE COMPONENT
import React from 'react'



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


export const copyToClipBoard = (className) => {

    if(className){
        var data = document.getElementById(className);

    /* Select the text field */
    data.select();
    // password.setSelectionRange(0, 99999);
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
    }
    
  
   
    
       
      };