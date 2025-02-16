import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const viewDashboard = ( { component:Component, isAuthenticated, ...rest  } ) => {
    return (
        <Route {...rest} render={
            props => {
              if (isAuthenticated) {
                return <Component {...rest} {...props} />
              } else {
                return <Redirect to='/' />
              }
            }
          } />
    )
}
