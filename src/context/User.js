import { createContext, useState } from "react";

const defaultUser = null;
const User = createContext(defaultUser);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

export default User;
