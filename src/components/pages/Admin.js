import React from 'react';
import { Button } from "../../components/AuthForm";
import { useAuth } from "../../context/auth";

const Admin = (props) => {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens(); 
  }

  return (
    <div>
      <h1>Admin</h1>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Admin;