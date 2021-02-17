import "./App.css";
import HomePage from "components/HomePage";
import ContextProvider from "context";

function App() {
  return (
    <ContextProvider>
      <HomePage />
    </ContextProvider>
  );
}
export default App;
