// const tes = require('./test')

import React, { useEffect } from 'react';
import {loadData,loadRequest,registerRoute} from './actions/Actions';
import store from './store'
import { Switch, Route,Redirect } from 'react-router-dom';
import Onboarding from './components/Onboarding/Onboarding'
import {connect} from 'react-redux'
import './App.css'
import Main from './components/Main'
import BlurryPopUp from './components/PopUps/BlurryPopUp'



export const App =({general})=> {

        useEffect( () => {
                
                store.dispatch( loadData() )
                store.dispatch(loadRequest())
                
                // generateRSAkeys()
        }, [] )
        
        const {isAuthenticated} = general;
    
        return (
                <Switch>
                        <React.Fragment>

                        
                                { ( !isAuthenticated ) ?
                                        

                                        <Route exact path='/' component={ Onboarding } />
                                        : <Redirect to="/dashboard" />

                                        
                                        
                                }
                                
                                <BlurryPopUp/>
                                
                                { ( isAuthenticated ) ?
                                        <Route exact path='/dashboard'  component={ Main } /> : 
                                        <Redirect to="/" />
                                }
                    
                    
               


                    
                    
                        </React.Fragment>
                </Switch>
        )
    
}

const mapStateToProps = state => ( {
        general:state.general
})

export default connect(mapStateToProps, null)(App)
