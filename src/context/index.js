import { UserProvider } from "./User";

const ContextProvider = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default ContextProvider;
