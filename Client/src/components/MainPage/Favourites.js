import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {setFavColor,updateStar} from '../Utils/Utils'
const Favourites = ({setData,general}) => {
    
    //From redux store
    const {data} = general

    const compare =(a, b) =>{

        if ( a.fav && b.fav ) {
             // Use toUpperCase() to ignore character casing
        
        const A = a.type.toUpperCase();
        const B = b.type.toUpperCase();
     
        let comparison = 0;
        if (A > B) {
            comparison = 1;
            
        } else if (A < B) {
          comparison = -1;
        }
        
        return comparison;
        } else {
            return null
        }
       
      }
      
      let sorted;
      if(data){
        sorted = data.sort( compare );
      }

   
    useEffect( () => {
        let i;
        for ( i = 0; i < sorted.length; i++ ){
            if ( sorted && sorted[ i ].fav ) {
                setData( sorted[ i ] );
                break;
            } else {
                setData()
            }
        }
    },[data])

    const loginItems = ( obj ) => {
        return (
            <div className="items" onClick={ () => setData( obj ) }>
                           
                <div className="icon">
                    <h1>{ obj.linked_acct[ 0 ] }</h1>
                </div>
                <div className="details">
                    <p className="details-1">{ obj.linked_acct }</p>
                    <p className="details-2">{ obj.username_email }</p>
                </div>
                
                <p className="type">{ obj.type }</p>
           
          
           
            
            </div>
        )
    };

    const cardItems = ( obj ) => {
        return (
            <div className="items" onClick={ () => setData( obj ) }>
                        
                <div className="icon">
                    <h1>{ obj.bank[ 0 ] }</h1>
                </div>
                <div className="details">
                    <p className="details-1">{ obj.bank }</p>
                    <p className="details-2">{ obj.CardNumber }</p>
                </div>
                
                <p className="type">{ obj.type }</p>
           
          
           
            
            </div>
        )
    };


    
    const vault = ( d ) => {
        return (
            <div className="code-vault-in-items" onClick={ () => setData( d ) }>
                
                <p>{ d.desc}</p>
                <p className="type">{ d.type}</p>
                <i style={setFavColor(d)} className="fa fa-star" onClick={(e)=>updateStar({e, d})}> </i>
            </div>
        )
    };

    const keys = (key) => {
        return (
            <div className="key-items key-items-in-allitems" onClick={()=> setData(key)}>
                <p>{ key.desc }</p>
                <p className="type">{ key.category }</p>
                <i style={setFavColor(key)} className="fa fa-star" onClick={(e)=>updateStar({e, d:key})}> </i>
            </div>
        )
    };

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
        <i style={setFavColor(n)} className="fa fa-star" onClick={(e)=>updateStar({e, d:n})}></i>
            </div>
        )
    };

    return (
        <div className="all-items">
            
            { (sorted)? sorted.map( obj => (
               
                <>
                    { ( obj.type === 'Login' && obj.fav ) ? 
                        loginItems(obj) : ( obj.type === 'card' && obj.fav ) ?
                     cardItems(obj)  :(obj.type === 'vault code' && obj.fav)? vault(obj):(obj.type === 'keys' && obj.fav)? keys(obj):(obj.type === 'Notes' && obj.fav)? Note(obj) :null }
                </>
            ) ) : null}
            
            
           
        </div>
    )
}

const mapStateToProps = ( state ) => ({
    general: state.general
  })

export default connect(mapStateToProps, null)(Favourites)
