import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "./logout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="card">
        <div className="card-border-top"></div>
        <img className="img" src={user.picture} alt={user.name}></img>
        <span>{user.name}</span>
        <p className="job">{user.email}</p>
        <LogoutButton />
      </div>
    )
  );
};

export default Profile;
