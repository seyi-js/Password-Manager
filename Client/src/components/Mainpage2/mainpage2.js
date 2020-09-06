import React from 'react'
import Header from './header'
import Logins from './logins'
const mainpage2 = ({data}) => {
    return (
        <div className="mainpage2-wrapper">
            <Header /> 
            <Logins data={ data}/>
        </div>
    )
}

export default mainpage2
