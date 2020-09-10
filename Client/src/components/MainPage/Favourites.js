import React, {useEffect} from 'react'
import { connect } from 'react-redux'
const Favourites = ({setData,general}) => {
    
    //From redux store
    const {data} = general

    const compare =(a, b) =>{

        if ( a.fav && b.fav ) {
             // Use toUpperCase() to ignore character casing
        console.log(a)
        console.log(b)
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
      
    const sorted = data.sort( compare );

   
    useEffect( () => {
        let i;
        for ( i = 0; i < sorted.length; i++ ){
            if ( sorted[ i ].fav ) {
                setData( sorted[ i ] );
                break;
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
                <i className="fa fa-star"> </i>
            </div>
        )
    };

    return (
        <div className="all-items">
            
            { sorted.map( obj => (
               
                <>
                    { ( obj.type === 'Login' && obj.fav ) ? 
                        loginItems(obj) : ( obj.type === 'card' && obj.fav ) ?
                     cardItems(obj)  :(obj.type === 'vault code' && obj.fav)? vault(obj) :null }
                </>
            ) ) }
            
            
           
        </div>
    )
}

const mapStateToProps = ( state ) => ({
    general: state.general
  })

export default connect(mapStateToProps, null)(Favourites)
