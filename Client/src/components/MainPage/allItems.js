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

      let sorted;
      if(data){
        sorted = data.sort( compare );
      }
    // const sorted = data.sort( compare );

   
    useEffect( () => {
        if(sorted){
            setData(sorted[ 0 ])
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

    const keys = (key) => {
        return (
            <div className="key-items key-items-in-allitems" onClick={()=> setData(key)}>
                <p>{ key.desc }</p>
                <p className="type">{ key.category }</p>
                <i className="fa fa-star"> </i>
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
        <i className="fa fa-star"></i>
            </div>
        )
    };

    return (
        <div className="all-items">
            
            { (sorted)? 
                sorted.map( obj => (
               
                    <>
                        { ( obj.type === 'Login' ) ? 
                            loginItems(obj) : ( obj.type === 'card' ) ?
                         cardItems(obj)  :(obj.type === 'vault code')? vault(obj):(obj.type === 'keys')? keys(obj) :(obj.type === 'Notes')? Note(obj):null }
                    </>
                ) ) : <h1>No Data Available</h1>}
            
            
           
        </div>
    )
}

const mapStateToProps = ( state ) => ({
    general: state.general
  })

export default connect(mapStateToProps, null)(AllItems)
