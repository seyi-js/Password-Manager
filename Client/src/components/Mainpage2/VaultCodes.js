import React, {useEffect} from 'react'

const VaultCodes = ({data}) => {

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
        <div className="vault-codes-mainpage-2">
       

    <div className="vault-codes-body login-body">
        
        <div className="password">
                    <label>{ data.desc}</label>
            <input  type="password" id="password-input" className="password-input" value={data.code } disabled={false}  />
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
    
</div> 
        
    )
}

export default VaultCodes
