import React from 'react'
import SharingCenter from './Share/SharingCenter'
import  Share from './Share/Share'
import Delete from './Delete'
import Login from './AddToPages/Login'
import Card from './AddToPages/Card'
import Vault from './AddToPages/VaultCodes'
import Notes from './AddToPages/Notes'
const BlurryPopUp =({popUpPage,data})=>{
    return(
        <div className="blurry-popUp">
           {(popUpPage ==='SharingCenter')? <SharingCenter/>:
           (popUpPage ==='Share')? <Share/>:(popUpPage ==='Delete')? <Delete data={data}/>
           :(popUpPage === 'AddLogins')? <Login/>:(popUpPage === 'Card')? <Card/> :(popUpPage === 'Vault')? <Vault/>:(popUpPage === 'Notes')? <Notes/>:<h1>Hello</h1>}
            

            
        </div>
    )
}


export default BlurryPopUp;