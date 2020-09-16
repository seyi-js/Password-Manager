import React from 'react';
import {getAndRemoveClass} from '../Utils/Utils';
import {deleteFromUI} from '../../actions/Actions'
import store from '../../store'
const Delete =({data})=>{

    const removeClass=(e)=>{
        e.preventDefault();
        getAndRemoveClass()
    }

    const deleteData=(e)=>{
        e.preventDefault();
        store.dispatch(deleteFromUI(data.id));
        getAndRemoveClass()

    }
    return(
        <div className="delete pop-up-box">
            <h3>Are You Sure?</h3>
            <div className="options">
                <button onClick={(e)=>deleteData(e)}>Yes</button>
                <button onClick={(e)=> removeClass(e)} >No</button>
            </div>
<p>These item will be deleted permanently.</p>
        </div>
    )
}


export default Delete;