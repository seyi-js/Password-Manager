import React, { useEffect,useState } from 'react';
import { getAndSetBlurryClass } from '../Utils/Utils'
import {connect} from 'react-redux'

const Sidebar = ({updatePage,setPopUpPage,general}) => {
    const [favLength, setFavLength] =useState()

    const { data } = general;

    

    useEffect( () => {
         setFavLength(data.filter( item => item.fav === true ).length )
        
    },[data])
  
//Set Active Class
const setClass = ( {number, e} ) => {
       
    e.stopPropagation();
    
        
        const grandParentElement = e.currentTarget.parentElement.parentElement.children;//Grand Parent Element
        const grandParentArray =Object.entries(grandParentElement);//Converts Objects to Array
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

    const setPopUp=({number, e,page} )=>{
        setClass({number, e});
        setPopUpPage(page);
        getAndSetBlurryClass()
    }

   return (
        <section className="sidebar-wrapper">
            <div className="sidebar-1">
                <div className="active" onClick={(e)=> setClass({number:1,e})}>
                    
                    <p><i className="fa fa-shield-alt"></i>All Items</p>
                   <span>{ data.length}</span>
                </div>
                <div onClick={(e)=> setClass({number:2,e})}>
                    
                    <p ><i className="fa fa-star"></i>Favourites</p>
                   <span>{ favLength}</span>
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
                <div onClick={(e)=> setClass({number:8,e})}>
                <i className="fa fa-key"></i>
                <p>Keys</p>
               
            </div>
            </div>

            
           

            <div className="sidebar-footer">
            <div onClick={(e)=> setPopUp({number:1,e, page:"SharingCenter"})}>
                    <i className="fa fa-share"></i>
                    <p>Share Request</p>
                </div>
               <div onClick={(e)=> setPopUp({number:1,e, page:"Settings"})}>
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

const mapStateToProps = ( state ) => ( {
    general:state.general
})

export default connect(mapStateToProps, null)(Sidebar)
