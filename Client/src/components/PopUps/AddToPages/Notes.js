import React, {useState,useEffect} from 'react'
import { cancel, getAndRemoveClass} from '../../Utils/Utils'
import store from '../../../store'
import {addData} from '../../../actions/Actions'
const Notes = ({setPopUpPage}) => {

    const [ desc, setDesc ] = useState( '' )
    const [ note, setNote ] = useState( '' )
   
    const [allDone, setAllDone] = useState(false)

   


    useEffect( () => {
        if ( desc && note ) {
            setAllDone( true )
            
        } else {
        setAllDone(false )
            
        }
    }, [ desc, note ] );


    const saveForm = () => {
        setPopUpPage('Loading')

        setTimeout( () => {
            const data={
                id:'12323435',
                type:'Notes',
                desc,
                note,
                fav: true
            }
    
            store.dispatch( addData( data ) );
            getAndRemoveClass()
            setDesc( '' )
            setNote( '' )
        }, 1000 * 2)
    }
    return (
        <div className="add-to-notes pop-up-box">
            <form>
                <div className="desc">
                    <label>Description</label>
                    <input value={desc} type="text" onChange={(e)=>setDesc(e.target.value)}/>
                </div>
                <div className="note">
                    <label>Note</label>
                    <textarea value={note} onChange={(e)=>setNote(e.target.value)}>
                        
                    </textarea>
                </div>
            </form>
            {(allDone)? <p className="save" onClick={()=>saveForm()}>save</p>: null}
            {cancel()}
        </div>
    )
}

export default Notes
