// const tes = require('./test')

import React, { useEffect } from 'react';
import {loadData,loadRequest,registerRoute} from './actions/Actions';
import store from './store'



import './App.css'
import Main from './components/Main'




export const App =()=> {

        useEffect( () => {
                
                store.dispatch( loadData() )
                store.dispatch(loadRequest())
                
                // generateRSAkeys()
        }, [])
    
        return (
             
                    <React.Fragment>

                        <Main />
                  
                    
                    
                    
               


                    
                    
                </React.Fragment>
               
        )
    
}


export default App
