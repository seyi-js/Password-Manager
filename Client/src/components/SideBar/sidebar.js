import React from 'react'

const sidebar = () => {
    return (
        <section className="sidebar-wrapper">
            <div className="sidebar-1">
                <div>
                    
                    <p><i className="fa fa-shield-alt"></i>All Items</p>
                    <span>19</span>
                </div>
                <div>
                    
                    <p><i className="fa fa-star"></i>Favourites</p>
                    <span>4</span>
                </div>
                <div>
                    
                    <p><i className="fa fa-trash"></i>Trash</p>
                    <span>19</span>
                </div>
                
            </div>
            <div className="sidebar-2">
                <h3>Vault</h3>
                <div>
                    <i className="fa fa-sign-in-alt"></i>
                    <p>Logins</p>
                   
                </div>
                <div>
                    <i className="fa fa-credit-card"></i>
                    <p>Cards</p>
                    
                </div>
                <div>
                    <i className="fa fa-address-book"></i>
                    <p>Identity</p>
                   
                </div>
                <div>
                    <i className="fa fa-sticky-note"></i>
                    <p>Secure Notes</p>
                   
                </div>
            </div>

            
           

            <div className="sidebar-footer">
               <div>
                    <i className="fa fa-cog"></i>
                    <p>Settings</p>
                </div>
                <div>
                    <i className="fa fa-sign-out-alt"></i>
                    <p>Logout</p>
                </div>
            </div>
        </section>
    )
}

export default sidebar
