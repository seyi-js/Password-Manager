import React from 'react'

function header({page}) {
    return (
        <div className="mainpage1-header">
            
            <div className="search-bar">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Search Vault" />
            </div>
           {(page !== 1 && page !== 2 )?  <i className="fa fa-plus"></i> : null}
        </div>
    )
}

export default header
