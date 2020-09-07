import React,{ useRef, useState,useEffect }  from 'react'

const Logins = ({data}) => {
    

 

    const loadDom = () => {
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

}

    useEffect( () => {
        if ( data !== undefined ) {
            loadDom()
        }
    }, [data] );


    const copyToClipBoard = () => {
        var password = document.getElementById("password-input");

        /* Select the text field */
        password.select();
        // password.setSelectionRange(0, 99999);
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied";
        
           
          };

    const showTooltip = () =>{
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy";
    }


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
                    <input  type="password" id="password-input" className="password-input" value={data.username_email } disabled={false}  />
                    <section className="logins-icons">
                        <span><i className="fa fa-eye"></i></span>
                        <span><i className="fa fa-eye-slash"></i></span>
                        <div class="tooltip">
                            <span><i className="fa fa-copy" onClick={ () => copyToClipBoard() } onMouseOut={()=> showTooltip()} ></i></span>
                            <div className="tooltiptext" id="myTooltip">Copy</div>
                        </div>
                        
                </section>
                </div>
                
            </div>
            
        </div> : null}
        </>
    )

    
}

export default Logins
