import React, {useState,useEffect} from 'react'
import Mainpage1 from './MainPage/mainpage1'
import Mainpage2 from './Mainpage2/mainpage2'
import Sidebar from './SideBar/sidebar';
import BlurryPopUp from './PopUps/BlurryPopUp'
const Main = () => {

    const [ page, setPage ] = useState(1);
    const [popUpPage, setPopUpPage]=useState();//Pages to be displayed on PopUp
    const [ data, setData ] = useState();//Data to be displayed on Mainpage2

    const updatePage = (number) => {
        setPage( number )
        
        
    }
    return (
        <div className="main-wrapper">
            <Sidebar updatePage={updatePage} setPopUpPage={setPopUpPage} />
            <Mainpage1 page={ page } setData={ setData}/>
            <Mainpage2 data={data} page={page}  setPopUpPage={setPopUpPage} />
            <BlurryPopUp popUpPage={popUpPage} data={data}/>
        </div>
    )
}

export default Main
