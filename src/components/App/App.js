import { useState, useEffect, useCallback } from "react";
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

// function Parent() {
//   const [name, setName] = useState("John");
//   const [age, setAge] = useState(42);
//   const logName = useCallback(() => console.log(name), [name]);
//   useEffect(() => {
//     console.log("Parent a été re-render");
//   });
//   return (
//     <div style={{ border: "1px silver solid", padding: "10px" }}>
//       Parent :<button onClick={() => setAge(age + 1)}>{age}</button>
//       <input value={name} onChange={e => setName(e.target.value)} />
//       <Child logName={logName}></Child>
//     </div>
//   );
// }
// function Child({logName}) {
//   useEffect(() => {
//     console.log("Child a été re-render", logName);
//   }, [logName]);
//   return (
//     <div
//       style={{ border: "1px silver solid", margin: "10px", padding: "10px" }}
//     >
//       Child : <button onClick={logName}>Logname</button>
//     </div>
//   );
// }
export default App;
