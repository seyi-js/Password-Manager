import React, {useEffect,useState} from 'react'
import Header from './header'
import Allitems from './allItems'
import Cards from './Cards';
import Login from './Login';
import Favourites from './Favourites';
import VaultCodes from './VaultCodes';
import Keys from './Key';
import Note from './Note'
const Mainpage1 = ({page,setData,setPopUpPage}) => {
    const [ pageNumber, setPageNumber ] = useState();

    
    
    useEffect( () => {

       
       
            setPageNumber(page)
       

        
    },[page])
    
    return (
        <div className="mainpage1-wrapper">
            <Header page={ page } setPopUpPage={ setPopUpPage}/> 
            { ( pageNumber === 1 ) ? <Allitems setData={ setData } />: ( pageNumber === 2 ) ? <Favourites setData={ setData } />:( pageNumber === 4 ) ? <Login setData={ setData } /> : ( pageNumber === 5 ) ? <Cards setData={ setData }/>:( pageNumber === 6 ) ? <VaultCodes setData={ setData } />: (pageNumber === 7 )? <Note setData={setData}/>:( pageNumber === 8 ) ? <Keys setData={ setData } />:<h1>hello</h1>}
        </div>
    )
}

export default Mainpage1
