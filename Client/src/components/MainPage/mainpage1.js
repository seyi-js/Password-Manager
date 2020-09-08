import React, {useEffect,useState} from 'react'
import Header from './header'
import Allitems from './allItems'
import Cards from './Cards';
import Login from './Login'
const Mainpage1 = ({page,setData}) => {
    const [ pageNumber, setPageNumber ] = useState();

    
    
    useEffect( () => {

       
       
            setPageNumber(page)
       

        
    },[page])
    
    return (
        <div className="mainpage1-wrapper">
           <Header/> 
            { ( pageNumber === 1 ) ? <Allitems setData={ setData } />:( pageNumber === 4 ) ? <Login setData={ setData } /> : ( pageNumber === 5 ) ? <Cards setData={ setData } page={ page}/>: <h1>hello</h1>}
        </div>
    )
}

export default Mainpage1
