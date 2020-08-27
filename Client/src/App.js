import React, {useEffect}  from 'react';
import { Switch, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import './App.css'



export const App =()=> {

     
    
        return (
             <Provider store={store}>
                <Switch>
                    <React.Fragment>

                    <div><h1>Hello World</h1></div>
                  
                    
                    
                    
               


                    
                    
                </React.Fragment>
                </Switch>
                </Provider>
        )
    
}


export default App
