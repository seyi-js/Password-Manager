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
                <h3>Types</h3>
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

            
            <div className="sidebar-3">
                <h3>Folders</h3>
                <div>
                    <i className="fas fa-shield"></i>
                    <p>Work</p>
                    
                </div>
                <div>
                    <i className="fas fa-shield"></i>
                    <p>Social</p>
                    
                </div>
                <div>
                    <i className="fas fa-shield"></i>
                    <p>Personal</p>
                    
                </div>
               
            </div>

            <div className="sidebar-footer">
                <i className="fas fa "></i>
                <p>New Folder</p>
            </div>
        </section>
    )
}

export default sidebar
