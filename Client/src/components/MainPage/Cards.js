import React, {useEffect} from 'react'
import {connect} from 'react-redux'
const Cards = ({setData, page, general}) => {

 //From redux store
 const {data} = general
    
    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        if ( a.type === 'card' && b.type === 'card' ) {
           
            const bandA = a.bank.toUpperCase();
        const bandB = b.bank.toUpperCase();
     
        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
            
        } else if (bandA < bandB) {
          comparison = -1;
        }
        
        return comparison;
        }
        
      }
      
    const sorted = data.sort( compare );
    
    useEffect( () => {
        setData(sorted[ 0 ])
    },[])
    return (
        <div className="cards">

            
            { sorted.map( card => (
                <>
                
                    { ( card.bank ) ?
                        
                        <div className="items" onClick={()=>setData(card)} >
                            <div className="icon">
                                <h1>{ card.bank[ 0 ] }</h1>
                               
                            </div>
                            <div className="details">
                                <p className="linked_acct">{ card.bank }</p>
                                <p className="username">{ card.CardNumber}</p>
                            </div>
                        
                        </div>
                        : null }
                </>
            ))}
        </div>
    )
}

const mapStateToProps = ( state ) => ( {
    general: state.general
} );

export default connect(mapStateToProps, null)(Cards)
