import React, { useEffect } from 'react';



const Sidebar = ({updatePage}) => {

//Set Active Class
const setClass = ( {number, e} ) => {
       
    e.stopPropagation();
    
        
        const grandParentElement = e.currentTarget.parentElement.parentElement.children;//Grand Parent Element
        const grandParentArray =Object.entries(grandParentElement)
        // console.log(grandParentArray)
        // console.log(element)
       

//Loops through each Grandparent Element and its children removing all active classes
        grandParentArray.forEach(element => {
          
            let arr = Object.entries( element[ 1 ].children );
            arr.forEach( e => {
                e[ 1 ].classList.remove( 'active' );
            })
            
        } );

      
        e.currentTarget.classList.add( 'active' )
        // console.log(Object.entries(element))
        updatePage( number );
    }
    

   return (
        <section className="sidebar-wrapper">
            <div className="sidebar-1">
                <div className="active" onClick={(e)=> setClass({number:1,e})}>
                    
                    <p><i className="fa fa-shield-alt"></i>All Items</p>
                    <span>19</span>
                </div>
                <div onClick={(e)=> setClass({number:2,e})}>
                    
                    <p ><i className="fa fa-star"></i>Favourites</p>
                    <span>4</span>
                </div>
                
                
            </div>
            <div className="sidebar-2">
                <h3>Vault</h3>
                <div onClick={(e)=> setClass({number:4,e})}>
                    <i className="fa fa-sign-in-alt"></i>
                    <p>Logins</p>
                   
                </div>
                <div onClick={(e)=> setClass({number:5,e})}>
                    <i className="fa fa-credit-card"></i>
                    <p>Cards</p>
                    
                </div>
                <div onClick={(e)=> setClass({number:6,e})}>
                    <i className="fa fa-user-shield"></i>
                    <p>Vault Codes</p>
                   
                </div>
                <div onClick={(e)=> setClass({number:7,e})}>
                    <i className="fa fa-sticky-note"></i>
                    <p>Notes</p>
                   
                </div>
            </div>

            
           

            <div className="sidebar-footer">
               <div onClick={(e)=> setClass({number:7,e})}>
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

export default Sidebar
