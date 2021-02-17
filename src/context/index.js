import { UserProvider } from "context/User";
import { ListProvider } from "context/List";

const ContextProvider = ({ children }) => {
  return (
    <UserProvider>
      <ListProvider>
        {children}
        </ListProvider>
    </UserProvider>
  );
};

export default ContextProvider;
