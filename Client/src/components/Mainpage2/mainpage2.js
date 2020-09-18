import React, {useState} from 'react'
import Header from './header'
import Logins from './logins'
import Cards from './Cards';
import Vault from './VaultCodes';
import Keys from './Keys';
import Note from './Note'






const Mainpage2 = ( { data, page, setPopUpPage } ) => {
    const [disabled, setDisabled]=useState(true)
    return (
        <div className="mainpage2-wrapper">
            <Header setPopUpPage={setPopUpPage} /> 
            { (data)? ( data && page === 4 && data.linked_acct || data && data.linked_acct ) ? <Logins data={ data } disabled={ disabled } setDisabled={ setDisabled}/>
            : ( page === 5 && data.bank && data || data && data.bank ) ? <Cards data={ data } disabled={ disabled } setDisabled={ setDisabled} /> :( page === 6 && data.type === 'vault code' && data || data && data.type === 'vault code' ) ? <Vault data={ data } disabled={ disabled } setDisabled={ setDisabled} />:( page === 7 && data.type === 'Notes' && data || data && data.type === 'Notes' ) ? <Note data={ data } />:( page === 8 && data.type === 'keys' && data || data && data.type === 'keys' ) ? <Keys data={ data } />: <h1>No</h1>:<h1>oops!! no data available</h1> }
        </div>
    )
}

export default Mainpage2
