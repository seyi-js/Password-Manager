import React, {useEffect} from 'react'
import { connect } from 'react-redux'
const AllItems = ({setData,general}) => {
    
    //From redux store
    const {data} = general

    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        
        const bandA = a.type.toUpperCase();
        const bandB = b.type.toUpperCase();
     
        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
            
        } else if (bandA < bandB) {
          comparison = -1;
        }
        
        return comparison;
      }
      
    const sorted = data.sort( compare );

   
    useEffect( () => {
        setData(sorted[ 0 ])
    },[data])

    return (
        <div className="all-items">
            
            { sorted.map( obj => (
               
                <>
                    { ( obj.type === 'Login' ) ? 
                        <div className="items" onClick={ () => setData( obj ) }>
                           
                        <div className="icon">
                            <h1>{ obj.linked_acct[ 0 ] }</h1>
                        </div>
                        <div className="details">
                            <p className="linked_acct">{ obj.linked_acct }</p>
                            <p className="username">{ obj.username_email}</p>
                        </div>
                        
                            <p className="type">{ obj.type }</p>
                       
                      
                       
                        
                        </div> : ( obj.type === 'card' ) ?
                        <div className="items" onClick={ () => setData( obj ) }>
                        
                    <div className="icon">
                        <h1>{ obj.bank[ 0 ] }</h1>
                    </div>
                    <div className="details">
                        <p className="linked_acct">{ obj.bank }</p>
                        <p className="username">{ obj.CardNumber}</p>
                    </div>
                    
                        <p className="type">{ obj.type }</p>
                   
                  
                   
                    
                </div>  : null }
                </>
            ) ) }
            
            
           
        </div>
    )
}

const mapStateToProps = ( state ) => ({
    general: state.general
  })

export default connect(mapStateToProps, null)(AllItems)
