import React from 'react';
import { Route, Redirect } from "react-router-dom";
// import { checkLoginToken } from '../../helpers/login'

export const AuthGuard = ({ component: Component, auth, ...rest }) => {
  const [storagecheck, setstoragecheck] = React.useState(sessionStorage.getItem('admintoken'));
  return (
    <Route
      {...rest} render={props => {
        if (storagecheck == null) {
          return (<Redirect to='/adminLogin' />)
        }
        else {
          return (<Component {...props} />)
        }
      }
      } />
  )

}

