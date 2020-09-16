import React, {useEffect} from 'react';

import {connect} from 'react-redux'
const Keys = ({general,setData}) => {

    const { data } = general;

    const compare = ( a, b ) => {
        if ( a.type === 'keys' && b.type === 'keys' ) {
            const keyA = a.category.toUpperCase();
            const keyB = b.category.toUpperCase();


            let comparison = 0;
            if ( keyA > keyB ) {
                comparison = 1;
            } else if ( keyA < keyB ) {
                comparison = -1;
            }

            return comparison;
        }
    };

    let sorted;
      if(data){
        sorted = data.sort( compare );
      }

    useEffect(()=>{
        let i;
        for ( i = 0; i < sorted.length; i++ ){
            if (sorted && sorted[ i ].type === 'keys' ) {
                setData( sorted[ i ] );
                break;
            }
        }
    },[sorted])
   
    const keys = (key) => {
        return (
            <div className="key-items" onClick={()=> setData(key)}>
                <p>{ key.desc }</p>
                <p className="type">{ key.category }</p>
                <i className="fa fa-star"> </i>
            </div>
        )
    }

    
    return (
        <div className="keys" >
            { (sorted)? sorted.map( key => (
                <>{ (key.type === 'keys')? keys(key) : null}</>
            )) : null}
        </div>
    )
}

const mapStateToProps = state => ( {
    general: state.general
} );

export default connect(mapStateToProps, null)(Keys)
