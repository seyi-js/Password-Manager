import React, {useState, useEffect} from 'react'
import { cancel, getAndRemoveClass} from '../../Utils/Utils'
import store from '../../../store'
import {addData} from '../../../actions/Actions'
const VaultCodes = () => {

    const [ desc, setDesc ] = useState( '' )
    const [ code, setCode ] = useState( '' )
   
    const [allDone, setAllDone] = useState(false)

   


    useEffect( () => {
        if ( desc && code ) {
            setAllDone( true )
            
        } else {
            setAllDone( false )
        }
    }, [ desc, code ] );

    const saveForm = () => {
        const data = {
            id:'12575757',
                desc,
                code,
                type: 'vault code',
                fav: false
        }

        store.dispatch( addData( data ) );
        setDesc( '' )
        setCode( '' )
        getAndRemoveClass() 
        setAllDone( false )
    }
    return (
        <div className="add-to-vault-codes pop-up-box">
            <form>
                <div className="desc">
                    <label>Description</label>
                    <input type="text" value={ desc } onChange={ (e)=>setDesc(e.target.value)}/>
                </div>
                <div className="code">
                    <label>Code</label>
                    <input type="text" value={code} onChange={(e)=>setCode(e.target.value)}/>
                </div>
                
            </form>
            {(allDone)? <p className="save" onClick={()=>saveForm()}>save</p>: null}
            {cancel()}
        </div>
    )
}

export default VaultCodes
