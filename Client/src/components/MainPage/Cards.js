import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {setFavColor,updateStar} from '../Utils/Utils'

const Cards = ({setData,general}) => {

 //From redux store
 const {data} = general
    
    const compare =(a, b) =>{
        // Use toUpperCase() to ignore character casing
        if ( a.type === 'card' && b.type === 'card' ) {
           
            const cardA= a.bank.toUpperCase();
        const cardB = b.bank.toUpperCase();
     
        let comparison = 0;
        if (cardA > cardB) {
            comparison = 1;
            
        } else if (cardA < cardB) {
          comparison = -1;
        }
        
        return comparison;
        }
        
      }
      
      let sorted;
      if(data){
        sorted = data.sort( compare );
      }
    
    useEffect( () => {
        let i = 0;
        for( i = 0; i < sorted.length; i++ ){
            if (sorted && sorted[ i ].type === 'card' ) {
                setData( sorted[ i ] )
                break;
            } else{
                setData()
            }
            // console.log(sorted[i])
        }
    },[sorted])
    return (
        <div className="cards">

            
            { (sorted)? sorted.map( card => (
                <>
                
                    { ( card.bank ) ?
                        
                        <div className="items" onClick={()=>setData(card)} >
                            <div className="icon">
                                <h1>{ card.bank[ 0 ] }</h1>
                               
                            </div>
                            <div className="details">
                                <p className="details-1">{ card.bank }</p>
                                <p className="details-2">{ card.CardNumber}</p>
                            </div>
                            <i style={setFavColor(card)} className="fa fa-star"  onClick={(e)=>updateStar({e, d:card})}></i>
                        </div>
                        : null }
                </>
            )): null}
        </div>
    )
}

const mapStateToProps = ( state ) => ( {
    general: state.general
} );

export default connect(mapStateToProps, null)(Cards)
