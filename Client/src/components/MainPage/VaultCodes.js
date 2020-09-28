import React, {useEffect} from 'react'
import {setFavColor,updateStar} from '../Utils/Utils'
import { connect } from 'react-redux';
const VaultCodes = ({setData, general}) => {


    //From redux store
    const { data } = general;




    const vault = ( d ) => {
        return (
            <div className="vault" onClick={ () => setData( d ) }>
                
                <p>{ d.desc.toUpperCase() }</p>
                
                <i style={setFavColor(d)} className="fa fa-star" onClick={(e)=>updateStar({e, d})}> </i>
            </div>
        )
    };

    useEffect( () => {
        let i;
        for ( i = 0; i < data.length; i++ ){
            if ( data && data[ i ].type === 'vault code' ) {
                setData( data[ i ] );
                break;
            } else {
                setData()
            }
        }
    },[data])
    
   

    return (
        <div className="vault-codes">
            {(data)? data.map( d => (
                <>
                    { ( d.type === 'vault code' ) ? vault(d)  : null}
                </>
            )) : null}
            
        </div>
    )
};

const mapStateToProps = ( state ) => ({
    general: state.general
})

export default connect(mapStateToProps, null)(VaultCodes)
