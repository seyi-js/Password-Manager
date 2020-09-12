import React, {useEffect} from 'react'
import { connect } from 'react-redux'
const AllItems = ({setData,general}) => {
    
    //From redux store
    const {data} = general

    const compare =(a, b) =>{
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
      }
      
    const sorted = data.sort( compare );

   
    useEffect( () => {
        setData(sorted[ 0 ])
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
                <i className="fa fa-star"> </i>
            </div>
        )
    };

    const keys = (key) => {
        return (
            <div className="key-items key-items-in-allitems" onClick={()=> setData(key)}>
                <p>{ key.desc }</p>
                <p className="type">{ key.category }</p>
                <i className="fa fa-star"> </i>
            </div>
        )
    }

    return (
        <div className="all-items">
            
            { sorted.map( obj => (
               
                <>
                    { ( obj.type === 'Login' ) ? 
                        loginItems(obj) : ( obj.type === 'card' ) ?
                     cardItems(obj)  :(obj.type === 'vault code')? vault(obj):(obj.type === 'keys')? keys(obj) :null }
                </>
            ) ) }
            
            
           
        </div>
    )
}

const mapStateToProps = ( state ) => ({
    general: state.general
  })

export default connect(mapStateToProps, null)(AllItems)
