import React, {useState,useEffect} from 'react'
import Mainpage1 from './MainPage/mainpage1'
import Mainpage2 from './Mainpage2/mainpage2'
import Sidebar from './SideBar/sidebar'
const Main = () => {

    const [ page, setPage ] = useState();

    const [ data, setData ] = useState();

    const updatePage = (number) => {
        setPage( number )
        
        localStorage.setItem( 'page', number );//Save To Local Storage
    }
    return (
        <div className="main-wrapper">
            <Sidebar updatePage={updatePage} />
            <Mainpage1 page={ page } setData={ setData}/>
            <Mainpage2 data={data} />
            <div className="test">
            </div>
        </div>
    )
}

export default Main
