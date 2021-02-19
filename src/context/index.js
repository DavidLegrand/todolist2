import { UserProvider } from "context/User";
import { ListProvider } from "context/List";
import { FirebaseProvider } from "context/Firebase";

const ContextProvider = ({ children }) => {
  return (
    <FirebaseProvider>
      <UserProvider>
        <ListProvider>{children}</ListProvider>
      </UserProvider>
    </FirebaseProvider>
  );
};

export default ContextProvider;
