import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { SignInContext } from "../../../App";

const UserProfile = () => {
  const [loggedInUser] = useContext(SignInContext);

  return (
    <Container>
      <div className="text-center add-blog mt-24 pt-4 shadow rounded py-5">
        <h4 className="text-lx">User Name: {loggedInUser.displayName}</h4>
        <h4 className="text-lx">User Email: {loggedInUser.email}</h4>
        <img src={loggedInUser.displayPhoto} alt="" />
      </div>
    </Container>
  );
};

export default UserProfile;