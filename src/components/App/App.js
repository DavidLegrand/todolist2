import "./App.css";
import ToDoList from "../ToDoList";
import Login from "../Login";
import ContextProvider from "../../context";

function App() {
  return (
    <ContextProvider>
      {
        // si on a un utilisateur dans le contexte,
          // on affiche ToDoList,
        // sinon
          // On affiche Login
      }
      <Login />
      <ToDoList />
    </ContextProvider>
  );
}
export default App;
