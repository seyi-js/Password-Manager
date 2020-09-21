import React from 'react'
import SharingCenter from './Share/SharingCenter'
import  Share from './Share/Share'
import Delete from './Delete'
import Login from './AddToPages/Login'
import Card from './AddToPages/Card'
import Vault from './AddToPages/VaultCodes'
import Notes from './AddToPages/Notes'
import Keys from './AddToPages/Keys'
import Loading from './LoadingPage'
const BlurryPopUp =({popUpPage,data,setPopUpPage})=>{
    return(
        <div className="blurry-popUp">
           {(popUpPage ==='SharingCenter')? <SharingCenter/>
           :
           (popUpPage ==='Share')? <Share setPopUpPage={setPopUpPage}/>
           :(popUpPage ==='Delete')? <Delete data={data} setPopUpPage={setPopUpPage}/>
           :(popUpPage === 'AddLogins')? <Login setPopUpPage={setPopUpPage}/>:(popUpPage === 'Card')? <Card setPopUpPage={setPopUpPage}/> 
           :(popUpPage === 'Vault')? <Vault setPopUpPage={setPopUpPage}/>:(popUpPage === 'Notes')? <Notes setPopUpPage={setPopUpPage}/>
           :(popUpPage === 'Keys')? <Keys popUpPage={popUpPage} setPopUpPage={setPopUpPage}/>
           :(popUpPage === 'Loading')? <Loading/>:<h1>Hello</h1>}
            

            
        </div>
    )
}


export default BlurryPopUp;