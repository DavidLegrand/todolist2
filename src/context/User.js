import { createContext, useState, useEffect } from "react";

const localUser = JSON.parse(localStorage.getItem("user"));
const defaultUser = localUser ? localUser : null;
const User = createContext(defaultUser);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else {localStorage.removeItem("user")}
  }, [user]);

  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

export default User;
