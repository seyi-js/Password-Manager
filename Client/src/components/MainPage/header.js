import React from 'react'
import {getAndSetBlurryClass} from '../Utils/Utils'
function header({page, setPopUpPage}) {

    const AddTo = () => {
        if ( page === 4 ) {
            setPopUpPage( 'AddLogins' );
            getAndSetBlurryClass();
        } else if ( page === 5 ) {
            setPopUpPage( 'Card' );
            getAndSetBlurryClass();
        } else if ( page === 6 ) {
            setPopUpPage( 'Vault' );
            getAndSetBlurryClass();
        }else if ( page === 7 ) {
            setPopUpPage( 'Notes' );
            getAndSetBlurryClass();
        }else if ( page === 8 ) {
            setPopUpPage( 'Keys' );
            getAndSetBlurryClass();
        }
    }
    return (
        <div className="mainpage1-header">
            
            <div className="search-bar">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Search Vault" />
            </div>
           {(page !== 1 && page !== 2 )?  <i className="fa fa-plus" onClick={()=>AddTo()}></i> : null}
        </div>
    )
}

export default header
