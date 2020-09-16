import React, {useEffect} from 'react'
import { connect } from 'react-redux'
const Login = ({setData,general}) => {

    //From redux store
    const {data} = general

    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        if ( a.type === 'Login' && b.type === 'Login' ) {
        
        const bandA = a.linked_acct.toUpperCase();
        const bandB = b.linked_acct.toUpperCase();
     
        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
            
        } else if (bandA < bandB) {
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
        // setData( sorted[ 0 ] );
        let i = 0;
        for( i = 0; i < sorted.length; i++ ){
            if (sorted && sorted[ i ].type === 'Login' ) {
                setData( sorted[ i ] )
                break;
            } else{
                setData()
            }
            // console.log(sorted[i])
        }
    },[sorted])

    return (
        <div className="logins">
            { (sorted)? sorted.map( obj => (
                <>
                    {(obj.linked_acct)? <div className="items" onClick={ () => setData( obj ) }>
                           
                        <div className="icon">
                            {setData(obj)}
                        <h1>{ obj.linked_acct[ 0 ] }</h1>
                    </div>
                    <div className="details">
                        <p className="linked_acct">{ obj.linked_acct }</p>
                        <p className="username">{ obj.username_email}</p>
                    </div>
                    
                        
                   
                  
                   
                    
                    </div>  : null}
                </>
        )) : null}
        </div>
    )
}

const mapStateToProps = ( state ) => ({
    general: state.general
  })

export default connect(mapStateToProps, null)(Login)
