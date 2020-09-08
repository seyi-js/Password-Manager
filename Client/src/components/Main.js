import React, {useState,useEffect} from 'react'
import Mainpage1 from './MainPage/mainpage1'
import Mainpage2 from './Mainpage2/mainpage2'
import Sidebar from './SideBar/sidebar'
const Main = () => {

    const [ page, setPage ] = useState(1);

    const [ data, setData ] = useState();

    const updatePage = (number) => {
        setPage( number )
        
        
    }
    return (
        <div className="main-wrapper">
            <Sidebar updatePage={updatePage} />
            <Mainpage1 page={ page } setData={ setData}/>
            <Mainpage2 data={data} page={page} />
            <div className="test">
            </div>
        </div>
    )
}

export default Main
