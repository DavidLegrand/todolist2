import React, { useContext } from "react";
import User from "context/User";

const Logout = () => {
  const { setUser } = useContext(User);
  return <button onClick={() => setUser(null)}>Se déconnecter</button>;
};

export default Logout;
