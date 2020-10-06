import React from 'react'

const MobileHeader = () => {

    const setMobileView = () => {
        const sideBar = document.getElementsByClassName( 'sidebar-wrapper' );
        if ( sideBar[ 0 ].classList.contains( 'show-side-bar' ) ) {
            sideBar[0].classList.add('hide-side-bar')

            sideBar[0].classList.remove('show-side-bar')
        } else {
            sideBar[ 0 ].classList.add( 'show-side-bar' )
            sideBar[0].classList.remove('hide-side-bar')
            
        }
        
    }
    return (
        <div className="mobile-header">
            <p onClick={()=>setMobileView()}>Header</p>
        </div>
    )
}

export default MobileHeader
