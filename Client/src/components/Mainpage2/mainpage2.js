import React from 'react'
import Header from './header'
import Logins from './logins'
import Cards from './Cards'
const mainpage2 = ({data,page}) => {
    return (
        <div className="mainpage2-wrapper">
            <Header /> 
            { ( data && page === 1 && data.linked_acct ) ? <Logins data={ data } />
                : ( data && page === 5 && data.bank ) ? <Cards data={ data } /> :
                    <h1>Hello</h1> }
        </div>
    )
}

export default mainpage2
