import React from 'react'
import Mainpage1 from './MainPage/mainpage1'
import Mainpage2 from './MainPage/mainpage2'
import Sidebar from './SideBar/sidebar'
const Main = () => {
    return (
        <div className="main-wrapper">
            <Sidebar />
            <Mainpage1/>
            <Mainpage2/>
        </div>
    )
}

export default Main
