import React, { useContext } from "react";
import User from "context/User";
import Firebase from "context/Firebase";

const Logout = () => {
  const { user, setUser } = useContext(User);
  const firebase = useContext(Firebase);
  return (
    <>
      Welcome {user.email}{" "}
       <button
        onClick={() => {
          firebase.logout();
          setUser(null);
        }}
      >
        Se déconnecter
      </button>
    </>
  );
};

export default Logout;
