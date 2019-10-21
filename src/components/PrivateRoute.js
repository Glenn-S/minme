import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/auth';


// Route for using auth with
function PrivateFunction({ component: Component, ...rest }) {
  const  { authTokens } = useAuth()
  // const isAuthenticated = useAuth();

  return (
    <Route 
      {...rest} 
      render={(props) => 
        authTokens ? ( 
          <Component {...props} /> 
        ) : ( 
          <Redirect to="/login" /> 
        ) // else go to home page
      } 
    />
  );
}

export default PrivateFunction;