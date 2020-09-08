import React from 'react'
import Header from './header'
import Logins from './logins'
import Cards from './Cards';






const mainpage2 = ({data,page}) => {
    return (
        <div className="mainpage2-wrapper">
            <Header /> 
            { ( data && page === 4 && data.linked_acct || data && data.linked_acct  ) ? <Logins data={ data } />
                : ( page === 5 && data.bank && data || data && data.bank ) ? <Cards data={ data } /> :
                    null }
        </div>
    )
}

export default mainpage2
