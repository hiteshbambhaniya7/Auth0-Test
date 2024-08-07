import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0();   
//   console.log("Current User : ", user);

  return <button className="login-btn" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
