import React from 'react'
import Mainpage from './MainPage/mainpage'
import Sidebar from './SideBar/sidebar'
const Main = () => {
    return (
        <div className="main-wrapper">
            <Sidebar />
            <Mainpage/>
        </div>
    )
}

export default Main
