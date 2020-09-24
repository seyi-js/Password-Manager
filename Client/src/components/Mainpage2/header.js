import React from 'react'
import {getAndSetBlurryClass} from '../Utils/Utils'
const header = ({setPopUpPage}) => {


    const setPopUp=(popup)=>{
        setPopUpPage(popup);
        getAndSetBlurryClass()
    }
    return (
        <div className="header">
            
            <p onClick={()=> setPopUp('Delete')}><i className="fa fa-trash"></i>Delete</p>
            
            <p onClick={()=> setPopUp('Share')}><i className="fa fa-share-alt"></i>Share</p>
        </div>
    )
}

export default header
