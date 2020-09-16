import React, {useEffect} from 'react'
import {connect} from 'react-redux'

const Note =({general, setData})=>{

    //From redux store
    const {data} =general;

    const Note =(n)=>{

        //Split the data content into half
        const getNote=(n)=>{
            const len = n.note.length;
            const half = len/2
           const words= n.note.slice(0,half)
            
           return words;
        }
        return(
            <div className="notes-mainpage-1-inner" onClick={()=>setData(n)}>
                <div className="notes-1">
                    <p>{n.desc}</p>
                    <p>{getNote(n)}...</p>
                </div>
                <i className="fa fa-star"></i>
            </div>
        )
    };


    //Loop data and set Data on component mount

    useEffect(()=>{
        let i;

        for(i=0; i < data.length; i++){
            if(data && data[i].type === 'Notes'){
                setData(data[i])
                break;
            }
        }
    },[data])

    return(
        <div className="notes-mainpage-1">
            {(data)? data.map(note=>(
                <>{(note.type === 'Notes')? Note(note): null}</>
            )) : null}
        </div>
    )
}

const mapStateToProps=state=>({
    general:state.general
})

export default connect(mapStateToProps, null)(Note);