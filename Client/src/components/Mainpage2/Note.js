import React from 'react'


const Note = ({data})=>{
    return(
        <div className="notes-mainpage-2">
        <p>{data.desc}</p>
        <p>{data.note}</p>
        </div>
    )
}


export default Note