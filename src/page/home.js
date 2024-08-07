import React from 'react'
import LoginButton from "./login";
import Profile from "./profile";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
    const { user } = useAuth0();
  console.log("Current User : ", user);
  return (
    <div>
        {user ? '' : <LoginButton />}
        {user ? <Profile /> : ""}
    </div>
  )
}
