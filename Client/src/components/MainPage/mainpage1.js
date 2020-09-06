import React, {useEffect,useState} from 'react'
import Header from './header'
import Allitems from './allItems'
const Mainpage1 = ({page,setData}) => {
    const [ pageNumber, setPageNumber ] = useState();

    
    
    useEffect( () => {

       
        if ( page === null || page === undefined ) {
            setPageNumber( Number( localStorage.getItem( 'page' ) ) );
           
        } else {
            setPageNumber(page)
        }

        
    },[page])
    
    return (
        <div className="mainpage1-wrapper">
           <Header/> 
            { ( pageNumber === 1 ) ? <Allitems setData={ setData}/>: <h1>hello</h1>}
        </div>
    )
}

export default Mainpage1
