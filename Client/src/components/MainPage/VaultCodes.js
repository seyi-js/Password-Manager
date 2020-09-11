import React, {useEffect} from 'react'
import { connect } from 'react-redux';
const VaultCodes = ({setData, general}) => {


    //From redux store
    const { data } = general;




    const vault = ( d ) => {
        return (
            <div className="vault" onClick={ () => setData( d ) }>
                
                <p>{ d.desc.toUpperCase() }</p>
                
                <i className="fa fa-star"> </i>
            </div>
        )
    };

    useEffect( () => {
        let i;
        for ( i = 0; i < data.length; i++ ){
            if ( data[ i ].type === 'vault code' ) {
                setData( data[ i ] );
                break;
            }
        }
    },[])
    
   

    return (
        <div className="vault-codes">
            { data.map( d => (
                <>
                    { ( d.type === 'vault code' ) ? vault(d)  : null}
                </>
            ))}
            
        </div>
    )
};

const mapStateToProps = ( state ) => ({
    general: state.general
})

export default connect(mapStateToProps, null)(VaultCodes)
