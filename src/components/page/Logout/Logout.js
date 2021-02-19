import React, { useContext } from "react";
import User from "context/User";
import Firebase from "context/Firebase";
import Container from "components/shared/Container";

const Logout = () => {
  const { user, setUser } = useContext(User);
  const firebase = useContext(Firebase);
  return (
    <Container>
      Welcome {user.email}{" "}
       <button
        onClick={() => {
          firebase.logout();
          setUser(null);
        }}
      >
        Se déconnecter
      </button>
    </Container>
  );
};

export default Logout;
